const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/integration/**/*.spec.ts',
    setupNodeEvents(on, config) {
      baseUrl = 'https://the-internet.herokuapp.com';
    },
  },
});
