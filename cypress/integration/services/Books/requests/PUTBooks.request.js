/// <reference types="cypress"/> 

const payloadAlterarBook = require('../payloads/alterar-livros.json')

function alterarLivros(idLivro){

    return cy.request({
        method: 'PUT',
        url: `Books/${idLivro}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadAlterarBook
    })

}

export {alterarLivros}; 