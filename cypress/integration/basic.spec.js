describe('Basic Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const isHeroImageVisible = () => {
    cy.get('body')
      .find('img[data-main-image]')
      .and('be.visible');
  }
  
  afterEach(() => {
    isHeroImageVisible()
    cy.percySnapshot(Cypress.currentTest.title);
  });


  it('Home Page', () => {
    cy.contains("Matty's Mobile Valeting & Detailing");
    cy.get('body')
      .find('img[data-main-image]')
      .should('have.attr', 'alt', 'Hero image of my van')
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

  it('Contact Me', () => {
    cy.contains('Contact Me').click();
    cy.url().should('include', '/contact-me/');
    cy.contains('Seamer Road');
    cy.contains('@hotmail.com');
  });
});
