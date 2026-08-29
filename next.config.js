/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    experimental: {
    useTypeScriptCli: true,
  },
}


module.exports = nextConfig
