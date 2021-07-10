const url = Cypress.env('endpoint');

beforeEach(() => {
  cy.visit(url);
});

it('should pass the audits', function () {
  cy.lighthouse(); // configured in `cypress.json`
});
