/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcMinify: true,
    },
    images: {
        domains: ['imgur.com', "i.imgur.com"],
    },
};

export default nextConfig;