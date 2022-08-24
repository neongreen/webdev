import createMDX from '@next/mdx'
import { remarkCodeHike } from '@code-hike/mdx'
import shiki from 'shiki'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://github.com/P5-wrapper/react/issues/162#issuecomment-1186425566
  reactStrictMode: false,
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
