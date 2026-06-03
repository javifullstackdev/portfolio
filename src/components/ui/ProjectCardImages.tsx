"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATE_MS = 3000;
const PROJECT_IMAGE_QUALITY = 95;

export type ProjectImageItem = {
  src: string;
  srcSet?: string;
};

type ProjectCardImagesProps = {
  images: ProjectImageItem[];
  alt: string;
  isWide: boolean;
  imageFit?: "cover" | "contain";
  imageLayout?: "frame" | "intrinsic";
  imageDimensions?: { width: number; height: number };
  sizes: string;
  /** El carrusel solo avanza al hacer hover sobre la tarjeta */
  isHovered: boolean;
};

function isSvgSrc(src: string) {
  return /\.svg$/i.test(src);
}

type MediaProps = {
  src: string;
  srcSet?: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
  intrinsic?: boolean;
  width?: number;
  height?: number;
};

function ProjectMedia({
  src,
  srcSet,
  alt,
  className,
  sizes,
  priority,
  intrinsic,
  width,
  height,
}: MediaProps) {
  const intrinsicClass = "block h-auto w-full";
  const frameClass = "absolute inset-0 h-full w-full";

  if (isSvgSrc(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={intrinsic ? width : undefined}
        height={intrinsic ? height : undefined}
        className={cn(intrinsic ? intrinsicClass : frameClass, className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  if (srcSet || intrinsic) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(intrinsic ? intrinsicClass : frameClass, className)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={PROJECT_IMAGE_QUALITY}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}

export function ProjectCardImages({
  images,
  alt,
  isWide,
  imageFit = "contain",
  imageLayout = "frame",
  imageDimensions,
  sizes,
  isHovered,
}: ProjectCardImagesProps) {
  const useIntrinsic = imageLayout === "intrinsic";
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1 && !prefersReducedMotion;
  const carouselRunning = hasMultiple && isHovered;

  useEffect(() => {
    if (!carouselRunning) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [carouselRunning, images.length]);

  useEffect(() => {
    if (!isHovered) setActive(0);
  }, [isHovered]);

  const fillFrame = imageFit === "cover" || !isWide;
  const imageClass = cn(
    "object-center",
    fillFrame ? "object-cover" : "object-contain p-2 sm:p-4",
  );

  if (images.length === 0) return null;

  if (!hasMultiple) {
    const img = images[0];
    return (
      <ProjectMedia
        key={img.src}
        src={img.src}
        srcSet={img.srcSet}
        alt={alt}
        className={cn(
          useIntrinsic ? "" : imageClass,
          "transition-opacity duration-300",
        )}
        sizes={sizes}
        priority
        intrinsic={useIntrinsic}
        width={imageDimensions?.width}
        height={imageDimensions?.height}
      />
    );
  }

  return (
    <>
      {images.map((img, index) => (
        <motion.div
          key={img.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === active ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden={index !== active}
        >
          <ProjectMedia
            src={img.src}
            srcSet={img.srcSet}
            alt={index === active ? alt : ""}
            className={imageClass}
            sizes={sizes}
            priority={index === 0}
          />
        </motion.div>
      ))}
      <div
        className="absolute bottom-3 right-3 flex gap-1.5 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm"
        aria-hidden
      >
        {images.map((img, index) => (
          <span
            key={img.src}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-300",
              index === active ? "w-4 bg-cyan-400" : "bg-foreground/30",
            )}
          />
        ))}
      </div>
    </>
  );
}
