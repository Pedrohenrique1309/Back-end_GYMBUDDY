const controllerComentario = require("../comentario/controllerComentario.js");

describe("Teste de inserção de comentário", () => {
    it("deve inserir um novo comentário", async() => {
        const novoComentario = {
            "conteudo": "Ótima publicação!",
            "data_comentario": "2025-10-05",
            "id_user": 1,
            "id_publicacao": 2
        };

        const resultado = await controllerComentario.inserirComentario(novoComentario, 'application/json');
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200, 201]).toContain(resultado.status_code);
    })
})

describe("Teste de busca de comentários", () => {
    it("deve buscar todos os comentários de uma publicação", async() => {
        const idPublicacao = 2; 

        const resultado = await controllerComentario.buscarComentariosPorPublicacao(idPublicacao);

        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('comentarios');
    })
})

describe("Teste de listar todos os comentários", () => {
    it("deve listar todos os comentários", async() => {
        const resultado = await controllerComentario.listarComentarios();
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('comentarios');
    })
})

describe("Teste de exclusão de comentário", () => {
    it("deve excluir um comentário existente", async() => {
        const idComentario = 3;

        const resultado = await controllerComentario.excluirComentario(idComentario);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de comentário", () => {
    it("deve atualizar os dados de um comentário existente", async() => {
        const idComentario = 5; 

        const dadosAtualizados = {
            "conteudo": "Comentário atualizado!",
            "data_comentario": "2025-10-08",
            "id_user": 1,
            "id_publicacao": 2
        };  
        const resultado = await controllerComentario.atualizarComentario(dadosAtualizados, idComentario, 'application/json');
        

        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    })      
})

describe("Teste de busca de comentário por ID", () => {
    it("deve buscar um comentário pelo ID", async() => {
        const idComentario = 6; 

        const resultado = await controllerComentario.buscarComentario(idComentario);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('comentarios');
    })
})