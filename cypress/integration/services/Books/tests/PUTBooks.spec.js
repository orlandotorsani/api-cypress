import * as GETBooks from '../requests/GETBooks.request';
import * as PUTBooks from '../requests/PUTBooks.request';

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.todosOsLivros().then((resTodosOsLivros) => {
            PUTBooks.alterarLivros(resTodosOsLivros.body[0].id).should((resAlterarLivros) => {
                expect(resAlterarLivros.status).to.eq(200);
                expect(resAlterarLivros.body).to.be.not.null;
                expect(resAlterarLivros.body.title).to.eq('Alterando Arquivos de uma API com automação')
            })
        })
    });
});