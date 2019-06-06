const withMDX = require('@next/mdx')()

module.exports = withMDX({
  target: 'serverless',
  experimental: {
    autoExport: true
  }
})
