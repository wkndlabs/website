module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    optimizePackageImports: ['radix-ui'],
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ];
  },
}
