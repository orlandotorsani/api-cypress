import * as POSTBooks from '../requests/POSTBooks.request';

describe('POST Books', () => {
    it('Adicionar um livro', () => {
        POSTBooks.adicionarLivros().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Automatizando uma API com Cypress");
        })
    });
});