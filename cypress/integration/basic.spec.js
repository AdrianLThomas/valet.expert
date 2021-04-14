describe('Basic Build Check', () => {
    it('Check build and about me link', () => {
      cy.visit(Cypress.env('endpoint'))
  
      cy.contains("Matty's Mobile Valeting & Detailing")

      cy.contains("About Me").click()
  
      cy.url().should('include', '/about-me/')
    })
  })
  