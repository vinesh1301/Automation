exports.config = {
    
    framework: 'custom',
    baseURL: 'http://localhost:8080/',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      'features/*feature'
    ],
    capabilities: {
      unexpectedAlertBehaviour: 'accept',
      browserName: 'chrome',
      chromeOptions: { args: ['start-maximized'] }
    },
    cucumberOpts: {
      format: 'json:.tmp/results.json',
      require: 'features/step-defination/steps.js'
    },
    plugins: [{
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
      }
  }]
  
  
    };