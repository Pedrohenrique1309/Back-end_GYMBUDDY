const controllerPublicacao = require('../publicacao/controllerPublicacao.js');

describe("Teste de inserção de publicação", () => {
    it("deve inserir uma nova publicação", async() => {
        const novaPublicacao = {
        "imagem": "https://exemplo.com/imagem.jpg",
        "descricao": "Uma descrição breve da publicação.",
        "localizacao": "São Paulo, SP",
        "data": "2025-09-30",
        "id_user": 2
    };

        const resultado = await controllerPublicacao.inserirPublicacao(novaPublicacao, 'application/json');
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200, 201]).toContain(resultado.status_code);
    })
})

describe("Teste de busca de publicações", () => {
    it("deve buscar todas as publicações", async() => {

        const resultado = await controllerPublicacao.listarPublicacao();

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('publicacoes');
    })
})

describe("Teste de exclusão de publicação", () => {
    it("deve excluir uma publicação existente", async() => {
        const idPublicacao = 1;

        const resultado = await controllerPublicacao.excluirPublicacao(idPublicacao);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200, 204]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de publicação", () => {
    it("deve atualizar os dados de uma publicação existente", async() => {
        const idPublicacao = 6;
        const dadosAtualizados = {
            "imagem": "https://exemplo.com/imagem_atualizada.jpg",
            "descricao": "Descrição atualizada da publicação.",
            "localizacao": "Rio de Janeiro, RJ",
            "data": "2025-10-01",
            "id_user": 2
        };  
        
        const resultado = await controllerPublicacao.atualizarPublicacao(dadosAtualizados, idPublicacao, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    })      
})

describe("Teste de busca de publicação por ID", () => {
    it("deve buscar uma publicação pelo ID", async() => {
        const idPublicacao = 2;     

        const resultado = await controllerPublicacao.buscarPublicacao(idPublicacao);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('publicacoes');
    })
})

describe("Teste de busca de publicações por usuário", () => {
    it("deve buscar publicações de um usuário pelo ID do usuário", async() => {
        const idUsuario = 2;    
        const resultado = await controllerPublicacao.buscarPublicacaoPeloUsuario(idUsuario);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('publicacao');
    })
})