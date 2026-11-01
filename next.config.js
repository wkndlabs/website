module.exports = {
  output: 'export',
  reactStrictMode: true,
  // Static hosting has no image optimization server; images are served as-is from public/.
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['radix-ui'],
  },
}
