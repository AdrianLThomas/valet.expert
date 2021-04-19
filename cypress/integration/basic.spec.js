describe('Basic Build Check', () => {
  it.only('Home Page', () => {
    cy.visit(Cypress.env('endpoint'));

    cy.contains("Matty's Mobile Valeting & Detailing");
    cy.get('body')
      .find('img[data-main-image]')
      .should('have.attr', 'alt', 'Hero Image');
  });

  it('About Me', () => {
    cy.visit(Cypress.env('endpoint'));
    cy.contains('About Me').click();
    cy.url().should('include', '/about-me/');
    cy.contains('My business was established in 2004');
  });

  it('Services & Pricing', () => {
    cy.visit(Cypress.env('endpoint'));

    cy.contains('Services & Pricing').click();
    cy.url().should('include', '/services-and-pricing/');
    cy.contains('Mini Valet');
  });

  it('Areas Covered', () => {
    cy.visit(Cypress.env('endpoint'));

    cy.contains('Areas Covered').click();
    cy.url().should('include', '/areas-covered/');
    cy.contains('YO12');
  });

  it('Services & Pricing', () => {
    cy.visit(Cypress.env('endpoint'));

    cy.contains('Contact Me').click();
    cy.url().should('include', '/contact-me/');
    cy.contains('MattysMobileValeting@hotmail.com');
  });
});
