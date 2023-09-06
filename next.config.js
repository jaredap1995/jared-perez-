const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withImages = require('next-images');
const withBundleAnalyzer = require ('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = [
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  }),
  withBundleAnalyzer(withImages()),
  {
    swcMinify: true,
  },
];


