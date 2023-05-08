/// <reference types="cypress"/> 

const payloadAdicionarLivros = require('../payloads/adicionar-livros.json')

function adicionarLivros(){
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAdicionarLivros
    })
}

export {adicionarLivros};