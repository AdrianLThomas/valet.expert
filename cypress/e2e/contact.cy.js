describe('Contact Me Page', () => {
  beforeEach(() => {
    cy.visit('/contact-me/');
  });

  it('has correct page title', () => {
    cy.title().should('include', 'Contact Me');
    cy.title().should('include', "Matty's Mobile Valeting");
  });

  it('shows opening hours', () => {
    cy.contains('Monday - Saturday');
    cy.contains('8am');
    cy.contains('5pm');
  });

  it('has working email link', () => {
    cy.get('a[href^="mailto:"]')
      .should('have.attr', 'href', 'mailto:MattysMobileValeting@hotmail.com')
      .and('contain.text', '@hotmail.com');
  });

  it('has working phone link', () => {
    cy.get('a[href^="tel:"]')
      .should('have.attr', 'href')
      .and('include', '07963');
  });

  it('has Messenger link', () => {
    cy.get('a[href*="m.me"]')
      .should('have.attr', 'href')
      .and('include', 'mattys.mobilevaleting');
  });

  it('has WhatsApp link with international format', () => {
    cy.get('a[href^="https://wa.me/"]')
      .should('have.attr', 'href')
      .and('include', '+447963362183');
  });

  it('shows address', () => {
    cy.contains('Seamer Road');
    cy.contains('Scarborough');
    cy.contains('YO12 4EY');
  });
});
