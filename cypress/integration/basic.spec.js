const { cyan } = require("@material-ui/core/colors");

describe('Basic Build Check', () => {
  const url = Cypress.env('endpoint')

  beforeEach(() => {
    cy.visit(url);
  })

  it('Home Page', () => {
    cy.contains("Matty's Mobile Valeting & Detailing");
    cy.get('body')
      .find('img[data-main-image]')
      .should('have.attr', 'alt', 'Hero image of my van');
  });

  it('About Me', () => {
    cy.contains('About Me').click();
    cy.url().should('include', '/about-me/');
    cy.contains('My business was established in 2004');
  });

  it('Services & Pricing', () => {
    cy.contains('Services & Pricing').click();
    cy.url().should('include', '/services-and-pricing/');
    cy.contains('Mini Valet');
  });

  it('Areas Covered', () => {
    cy.contains('Areas Covered').click();
    cy.url().should('include', '/areas-covered/');
    cy.contains('YO12');
  });

  it('Services & Pricing', () => {
    cy.contains('Contact Me').click();
    cy.url().should('include', '/contact-me/');
    cy.contains('@hotmail.com');
  });

  it('404', () => {
    cy.visit(`${url}/some-rubbish`, {failOnStatusCode: false});
    cy.contains('Sorry, we couldn’t find what you were looking for.');
  });

  it('robots.txt', () => {
    cy.request(`${url}/robots.txt`).its('body').should('include', 'Allow: /')
  });
});
