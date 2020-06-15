describe('My form test', () => {
    it('Assert that text can be entered into the name box', () => {
        cy.visit('http://localhost:3000/Pizza');
        cy.get('[data-cy="name"]')
            .type('Darren Tebo')
            .should('have.value', 'Darren Tebo');
    });

    it('Assert that a size can be selected', () => {
        cy.get('[data-cy="size"]')
            .select('large');
    });

    it('Assert that a sauce can be selected', () => {
        cy.get('[data-cy="sauce1"]')
            .check();
    });

    it('Assert that multiple toppings can be selected', () => {
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
        cy.get('[data-cy="qty"]')
            .type('{uparrow}')
            .should('have.value', '1');
    });

    it('Assert that the form can be submitted', () => {
        cy.get('[data-cy="submit"]')
            .invoke('removeAttr', 'disabled')
            .click();
    });
});