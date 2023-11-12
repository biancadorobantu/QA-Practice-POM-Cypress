const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hsunmb",
  defaultCommandTimeout: 1500,
  defaultPageLoadTimeout: 15000,
  requestTimeout:15000,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
