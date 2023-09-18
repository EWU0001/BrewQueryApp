describe('register page', () => {
  it('show validation erros when fields are incorrect', () => {
    cy.visit('http://localhost:3000/BrewQueryApp/register')
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-name"]').should('exist');
    cy.get('[data-cy="error-email"]').should('exist');
    cy.get('[data-cy="error-password"]').should('exist');
  })

  it('show password do not match',()=>{
    cy.visit('http://localhost:3000/BrewQueryApp/register')
    cy.get('[data-cy="password-input"]').should('exist');
    cy.get('[data-cy="password-input"]').type('password123');
    cy.get('[data-cy="repeatPassword-input"]').type('passsword456');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-repeatPassword"]').should(($error)=>{
      const expectedErrorMessage = 'Passwords do not match';
      expect($error).to.have.text(expectedErrorMessage);
    });
  })
})