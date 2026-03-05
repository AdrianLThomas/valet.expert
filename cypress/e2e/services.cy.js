describe('Services & Pricing Page', () => {
  beforeEach(() => {
    cy.visit('/services-and-pricing/');
  });

  it('has correct page title', () => {
    cy.title().should('include', 'Services');
    cy.title().should('include', "Matty's Mobile Valeting");
  });

  it('shows all 7 service cards', () => {
    cy.get('.card-item').should('have.length', 7);
  });

  it('shows expected service titles', () => {
    cy.contains('Maintenance Valet');
    cy.contains('Full Valet');
    cy.contains('Hand Polishing & Waxing');
    cy.contains('Machine Polish');
    cy.contains('Ultimate Paint and Fabric Protection');
    cy.contains('Engine Bay Steam Clean & Detail');
    cy.contains('Other');
  });

  it('all Book/Contact buttons link to contact page', () => {
    cy.get('.card-button').each(($btn) => {
      cy.wrap($btn).should('have.attr', 'href', '/contact-me/');
    });
  });

  it('shows starting prices', () => {
    cy.contains('Starting from');
    cy.contains('£60');
    cy.contains('£120');
  });
});
