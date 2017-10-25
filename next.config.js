const path = require('path')
const workboxPlugin = require('workbox-webpack-plugin')

const DIST_DIR = '.'

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  webpack: (config) => {
    config.plugins.push(
      new workboxPlugin({
        globDirectory: DIST_DIR, // This should maybe be the generated folder? Having pathing issues.
        globPatterns: ['**/*.{html,js,css}'],
        globIgnores: [
          '.next/**',
          'awayken.github.io/**',
          'node_modules/**'
        ],
        swDest: './static/sw.js' // This needs to go here so Next picks it up and copies it
      })
    )

    return config
  }
}
