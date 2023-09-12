describe('Página de cadastro', () => {
    it('Preencher os campos do formulário incorretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('a', 'Register now').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.get('[data-test="btnRegister"]').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })