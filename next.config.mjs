/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "online-chat-bucket.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
