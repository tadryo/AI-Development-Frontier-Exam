/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/AI-Development-Frontier-Exam' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
