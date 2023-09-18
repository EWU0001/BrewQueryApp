describe('login page', () => {
    it('should show valiation error', () => {
        cy.visit('http://localhost:3000/BrewQueryApp/login')
        cy.get('[data-cy="emailInput"]').should('exist');
        cy.get('[data-cy="emailInput"]').type('ewooo');
        cy.get('[data-cyc="message"]').should('have.text', 'please enter a valid email address');
        cy.get('[data-cy="register"]').click();
        cy.url().should('eq', 'http://localhost:3000/BrewQueryApp/register');
    })
})