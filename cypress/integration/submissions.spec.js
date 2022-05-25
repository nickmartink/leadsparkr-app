describe('Forms', () => {
    it('should show submissions and allow navigation', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/submissions')

        cy.get("#submissions-table")
            .find("tr")
            .then((rows) => {
                //row.length will give you the row count
                cy.log(rows);
                expect(rows.length).to.be.greaterThan(1);
            });

        cy.get('a.view-submission').first().click();

        cy.get('h1').contains('View Your Form Submission');

    });

});
