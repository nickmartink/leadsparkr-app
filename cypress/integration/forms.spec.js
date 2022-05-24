describe('Forms', () => {
    it('should show forms and allow navigation', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/forms')

        cy.get("#forms-table")
            .find("tr")
            .then((rows) => {
                //row.length will give you the row count
                cy.log(rows);
                expect(rows.length).to.be.greaterThan(1);
            });

        cy.get('a.view-form').first().click();

        cy.get('h1').contains('View Your Form');

    });

    it('should allow new form creation', () => {
        cy.visit('http://localhost:3000/forms/create');

        cy.get('input[name=name]').type('form name here');

        cy.get('input[name=emailForwardAddress]').type('p').blur();

        cy.get('label[for=form-name]')
            .should('contain', 'Invalid email address');

        cy.get('input[name=emailForwardAddress]').type('test@example.com').blur();

        cy.get('form').submit();

        cy.get('#form-alert')
            .should('contain', 'Success');


        cy.get('#form-alert a').click();

        cy.url().should('match', /\/forms\/[0-9]+/);

    });
});
