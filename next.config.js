/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
        domains: ["res.cloudinary.com"]
    },

    reactStrictMode: true,
    experimental: {
        forceSwcTransforms: true,
    },

}

module.exports = nextConfig