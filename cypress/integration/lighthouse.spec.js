beforeEach(() => {
  cy.visit('/');
});

// As I'm at the mercy of GHA cloud runners,
// retries and an overall lower threshold
// than reality is required (see: `cypress.json`).
jest.retryTimes(5);

it('should pass the audits', function () {
  cy.lighthouse();
});
