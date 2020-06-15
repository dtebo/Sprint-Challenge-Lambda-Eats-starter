describe('My form test', () => {
    it('Assert that text can be entered into the name box', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="name"]')
            .type('Darren Tebo')
            .should('have.value', 'Darren Tebo');
    });


});