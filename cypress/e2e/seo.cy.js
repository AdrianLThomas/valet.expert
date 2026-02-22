describe('SEO Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('robots.txt', () => {
    cy.request(`/robots.txt`).its('body').should('include', 'Allow: /');
  });

  it('sitemap.xml', () => {
    // Hugo generates the sitemap at /sitemap.xml (previously /sitemap/sitemap-index.xml in Gatsby)
    cy.request(`/sitemap.xml`)
      .its('body')
      .should('include', '<urlset');
  });

  it('old sitemap url still resolves', () => {
    // The old Gatsby sitemap URL is kept alive via a static sitemap index
    // at /sitemap/sitemap-index.xml that points search engines to the new URL
    cy.request(`/sitemap/sitemap-index.xml`)
      .its('body')
      .should('include', '/sitemap.xml');
  });
});
