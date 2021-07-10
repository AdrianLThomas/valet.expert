// @ts-ignore
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

module.exports = (on, _) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
  });
};
