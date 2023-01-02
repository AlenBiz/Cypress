const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1ub9xs',
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
