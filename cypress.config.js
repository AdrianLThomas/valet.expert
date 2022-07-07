const { defineConfig } = require('cypress')

module.exports = defineConfig({
  lighthouse: {
    performance: 90,
    accessibility: 100,
    'best-practices': 93,
    seo: 90,
    'first-contentful-paint': 1500,
    'largest-contentful-paint': 1500,
    'first-meaningful-paint': 1500,
    'speed-index': 3000,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:9000',
  },
})
