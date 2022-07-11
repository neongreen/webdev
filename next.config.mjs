import createMDX from '@next/mdx'
import { remarkCodeHike } from '@code-hike/mdx'
import shiki from 'shiki'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme: await shiki.loadTheme('themes/min-light.json') }]],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
