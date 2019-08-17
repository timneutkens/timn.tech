const withMDX = require('@next/mdx')()

module.exports = withMDX({
  experimental: {
    modern: true,
    granularChunks: true
  }
})
