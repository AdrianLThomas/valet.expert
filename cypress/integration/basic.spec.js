describe('Basic Build Check', () => {
  it('Check build and about me link', () => {
    cy.visit(Cypress.env('endpoint'));

    cy.contains("BAD COMMIT!!!! OH NO");

    cy.contains('About Me').click();

    cy.url().should('include', '/about-me/');
  });
});
