const controllerCurtida = require("../curtida/controllerCurtida.js");

describe("Teste de inserção de curtida", () => {
    it("deve inserir uma nova curtida", async() => {
        const novaCurtida = {
            "id_user": 2,
            "id_publicacao": 10
        };  

        const resultado = await controllerCurtida.inserirCurtida(novaCurtida, 'application/json');

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de remoção de curtida", () => {
    it("deve remover uma curtida existente", async() => {
        const idCurtida = 3;
        const resultado = await controllerCurtida.excluirCurtida(idCurtida);

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de listar todas as curtidas", () => {
    it("deve listar todas as curtidas", async() => {
        const resultado = await controllerCurtida.listarCurtida();

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('curtidas');
    })
})

describe("Teste de busca de curtida", () => {
    it("deve buscar uma curtida pelo ID ", async() => {
        const idCurtida = 4;

        const resultado = await controllerCurtida.buscarCurtida(idCurtida); 

        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('curtidas');
    })
})