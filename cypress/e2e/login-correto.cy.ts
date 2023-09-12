describe('Página de login', () => {
    it('Preencher corretamente o formulário de login e verificar se é efetuado corretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('catarinap')
      cy.get('[data-test="loginPassword"]').type('catarina123')
      cy.get('[data-test="loginBtn"]').click()
    })
  })