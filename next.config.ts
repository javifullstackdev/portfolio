import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* PNG/JPG vía next/image; los SVG del portfolio usan <img> nativo */
  images: {
    /* Next.js 16 solo permite calidades listadas aquí (por defecto [75]) */
    qualities: [75, 95],
  },
};

export default nextConfig;
