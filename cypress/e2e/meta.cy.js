describe('Meta Tags & Structured Data', () => {
  const pages = [
    { path: '/', title: "Matty's Mobile Valeting & Detailing, Scarborough" },
    { path: '/about-me/', title: 'About Me' },
    { path: '/services-and-pricing/', title: 'Services & Pricing' },
    { path: '/areas-covered/', title: 'Areas Covered' },
    { path: '/contact-me/', title: 'Contact Me' },
  ];

  pages.forEach(({ path, title }) => {
    describe(`${path}`, () => {
      beforeEach(() => {
        cy.visit(path);
      });

      it('has og:title', () => {
        cy.get('meta[property="og:title"]')
          .should('have.attr', 'content')
          .and('include', title);
      });

      it('has og:description', () => {
        cy.get('meta[property="og:description"]')
          .should('have.attr', 'content')
          .and('not.be.empty');
      });

      it('has og:image pointing to valet.expert', () => {
        cy.get('meta[property="og:image"]')
          .should('have.attr', 'content')
          .and('include', 'valet.expert');
      });

      it('has meta description', () => {
        cy.get('meta[name="description"]')
          .should('have.attr', 'content')
          .and('not.be.empty');
      });

      it('has JSON-LD structured data with phone and email', () => {
        cy.get('script[type="application/ld+json"]').then(($el) => {
          const json = JSON.parse($el.text());
          expect(json['@type']).to.equal('Organization');
          expect(json.telephone).to.equal('07963 362 183');
          expect(json.email).to.equal('MattysMobileValeting@hotmail.com');
        });
      });
    });
  });

  it('inner page title includes site name', () => {
    cy.visit('/about-me/');
    cy.title().should('match', /About Me \| Matty's Mobile Valeting/);
  });
});
