/// <reference types="cypress"/> 

function todosOsLivros(){

    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false
    })

}

export {todosOsLivros}; 