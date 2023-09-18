describe('Api Alurapic', () => {
    // it('Dados da API', () => {
    //         cy.request({
    //             method: 'POST',
    //             url: 'http://localhost:3000/user/login',
    //             body: Cypress.env()
    //         }).then((res) => {
    //             expect(res.status).to.be.equal(200)
    //             expect(res.body).is.not.empty
    //             expect(res.body).to.have.property('id')
    //             expect(res.body.id).to.be.equal(4)
    //         })
    // })

    it('Fotos do usuário', () => {
            const tempoEsperado = Math.random() * 50; //Sugestão de usar um limite não randômico para a requisição a fim de encontrar o ponto de quebra -> usar pontos de espera, usar mock para controlar melhor a saida do erro, verificar se a ferramenta tem suporte a rerun do teste em caso de falha
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/catarinap/photos',
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('porquinho')
                expect(res.duration).to.be.lte(tempoEsperado) //situação de flaky test, um teste variável e impreciso mas que ainda assim por vezes acata em erros, não deve ser ignorado.
            })
    })
})
