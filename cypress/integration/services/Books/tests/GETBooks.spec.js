import * as GETBooks from '../requests/GETBooks.request';

describe('GETBooks', () => {
    it('Listar todos os livros', () => {
        GETBooks.todosOsLivros().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    });
});