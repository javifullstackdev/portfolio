"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATE_MS = 3000;

type ProjectCardImagesProps = {
  images: string[];
  alt: string;
  isWide: boolean;
  sizes: string;
  /** El carrusel solo avanza al hacer hover sobre la tarjeta */
  isHovered: boolean;
};

function isRaster(src: string) {
  return src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg");
}

export function ProjectCardImages({
  images,
  alt,
  isWide,
  sizes,
  isHovered,
}: ProjectCardImagesProps) {
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

  const imageClass = cn(
    "object-center",
    isWide ? "object-contain" : "object-cover",
  );

  if (images.length === 0) return null;

  if (!hasMultiple) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        unoptimized={isRaster(images[0])}
        className={imageClass}
        sizes={sizes}
        priority
      />
    );
  }

  return (
    <>
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === active ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden={index !== active}
        >
          <Image
            src={src}
            alt={index === active ? alt : ""}
            fill
            unoptimized={isRaster(src)}
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
        {images.map((src, index) => (
          <span
            key={src}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-300",
              index === active
                ? "w-4 bg-cyan-400"
                : "bg-white/40",
            )}
          />
        ))}
      </div>
    </>
  );
}
