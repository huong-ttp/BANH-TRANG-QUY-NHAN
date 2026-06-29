/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/kho-muc",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/kho-bo",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/banh-trang-me-den",
        destination: "/products/detail/banh-trang-me-den",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;