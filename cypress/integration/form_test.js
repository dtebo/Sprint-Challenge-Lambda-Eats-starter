describe('My form test', () => {
    it('Assert that text can be entered into the name box', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="name"]')
            .type('Darren Tebo')
            .should('have.value', 'Darren Tebo');
    });

    it('Assert that multiple toppings can be selected', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="pepperoni"]')
            .click()
            .should('be.checked');

        cy.get('[data-cy="sausage"]')
            .click()
            .should('be.checked');

        cy.get('[data-cy="greenpepper"]')
            .click()
            .should('be.checked');
    });

    it('Assert that the number of items is greater than 0', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="qty"]')
            .type('')
            .type('1')
            .should('have.value', '1');
    });

    it('Assert that the form can be submitted', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="submit"]')
            .click();
    });
});