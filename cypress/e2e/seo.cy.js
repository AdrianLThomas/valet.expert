describe('SEO Checks', () => {
  const pages = [
    { path: '/', canonical: 'https://www.valet.expert/' },
    { path: '/about-me/', canonical: 'https://www.valet.expert/about-me/' },
    { path: '/services-and-pricing/', canonical: 'https://www.valet.expert/services-and-pricing/' },
    { path: '/areas-covered/', canonical: 'https://www.valet.expert/areas-covered/' },
    { path: '/contact-me/', canonical: 'https://www.valet.expert/contact-me/' },
  ];

  pages.forEach(({ path, canonical }) => {
    it(`canonical tag is correct on ${path}`, () => {
      cy.visit(path);
      cy.get('link[rel="canonical"]')
        .should('have.attr', 'href', canonical);
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('og:url uses production domain from hugo.toml baseURL', () => {
    cy.get('meta[property="og:url"]')
      .should('have.attr', 'content')
      .and('include', 'valet.expert');
  });

  it('robots.txt', () => {
    cy.request(`/robots.txt`).its('body').should('include', 'Allow: /');
  });

  it('sitemap.xml', () => {
    // Hugo generates the sitemap at /sitemap.xml (previously /sitemap/sitemap-index.xml in Gatsby)
    cy.request(`/sitemap.xml`)
      .its('body')
      .should('include', '<urlset')
      .and('include', 'valet.expert');
  });

  it('old sitemap url still resolves', () => {
    // The old Gatsby sitemap URL is kept alive via a static sitemap index
    // at /sitemap/sitemap-index.xml that points search engines to the new URL
    cy.request(`/sitemap/sitemap-index.xml`)
      .its('body')
      .should('include', '/sitemap.xml');
  });
});
