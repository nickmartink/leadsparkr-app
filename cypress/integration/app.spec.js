describe('Navigation', () => {
    it('should navigate to pages correctly', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        cy.get('h1').contains('Dashboard')

        // Find a link with an href attribute containing "forms" and click it
        cy.get('a[href*="forms"]').click()

        // The new url should include "/about"
        cy.url().should('include', '/forms')

        // The new page should contain an h1 with "Forms"
        cy.get('h1').contains('Forms')

        // Find a link with an href attribute containing "submissions" and click it
        cy.get('a[href*="submissions"]').click()

        // The new url should include "/about"
        cy.url().should('include', '/submissions')

        // The new page should contain an h1 with "Forms"
        cy.get('h1').contains('Submissions')

    })
})
