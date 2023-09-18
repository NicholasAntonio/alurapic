describe('Página de login', () => {
    beforeEach(() =>
      {cy.visit('http://localhost:4200/#/home')})
    
    it('Preencher corretamente o formulário de login e verificar se é efetuado corretamente', () => {
      cy.login('catarinap', 'catarina123');
    })
  })