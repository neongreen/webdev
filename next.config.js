/** @type {import('next').NextConfig} */

const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/min-light.json')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
