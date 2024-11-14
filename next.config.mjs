/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["node", "@drizzle-orm"],
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
