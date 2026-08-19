import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/products", destination: "/solutions", permanent: false },
      { source: "/products/:path*", destination: "/science/therapeutic-areas", permanent: false },
      { source: "/categories", destination: "/science/therapeutic-areas", permanent: false },
      { source: "/categories/:path*", destination: "/science/therapeutic-areas", permanent: false },
      { source: "/new-products", destination: "/science/pipeline", permanent: false },
      { source: "/where-to-buy", destination: "/contact", permanent: false },
      { source: "/about", destination: "/our-company", permanent: false },
      { source: "/health-insights", destination: "/patients", permanent: false },
      { source: "/health-insights/:path*", destination: "/patients", permanent: false },
    ];
  },
};

export default nextConfig;
