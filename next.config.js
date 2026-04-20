/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    cacheComponents: true,
}


module.exports = nextConfig
