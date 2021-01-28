const { Router } = require('@xdn/core/router');

module.exports = new Router()
  // Send requests to static assets in the build output folder `dist`
  .static('dist')

  // Send everything else to the App Shell
  .fallback(({ appShell }) => {
    appShell('dist/index.html');
  });
