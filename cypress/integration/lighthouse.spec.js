beforeEach(() => {
  cy.visit('/');
});

it('should pass the audits', function () {
  cy.lighthouse(); // configured in `cypress.json`
});
