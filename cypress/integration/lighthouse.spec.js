beforeEach(() => {
  cy.visit('/');
});

it('should pass the audits', function () {
  // configured in `cypress.json`
  // as I'm at the mercy of GHA cloud runners
  // the performance baseline is much lower than reality
  // to avoid frequent failing builds.
  cy.lighthouse();
});
