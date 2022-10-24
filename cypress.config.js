const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    "env": {
      "viewportWidthBreakpoint": 768
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
