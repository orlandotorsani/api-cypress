/// <reference types="cypress"/> 

function deletarLivros(idLivro){

    return cy.request({
        method: 'DELETE',
        url: `Books/${idLivro}`,
        failOnStatusCode: false
    })
}

export {deletarLivros};