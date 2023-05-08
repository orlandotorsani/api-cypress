import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.todosOsLivros().then((resTodosOsLivros) => {
            DELETEBooks.deletarLivros(resTodosOsLivros.body[0].id).should((resDeletarLivros) => {
                expect(resDeletarLivros.status).to.eq(200);
            })
        })
    });
});