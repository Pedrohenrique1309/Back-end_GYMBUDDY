const controllerCurtida = require("../curtida/controllerCurtida.js");

describe("Teste de inserção de curtida", () => {
    it("deve inserir uma nova curtida", async() => {
        const novaCurtida = {
            "id_user": 8,
            "id_publicacao": 4
        };  

        const resultado = await controllerCurtida.inserirCurtida(novaCurtida, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de curtida", () => {
    it("deve atualizar os dados de uma curtida existente", async () => {
        const idCurtida =21;
        const dadosAtualizados = {
             "id_user": 1,
            "id_publicacao": 4
        };

        const resultado = await controllerCurtida.atualizarCurtida(dadosAtualizados, idCurtida, 'application/json');
        console.log(resultado);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
});

describe("Teste de remoção de curtida", () => {
    it("deve remover uma curtida existente", async() => {
        const idCurtida = 14;
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
        const idCurtida = 20;

        const resultado = await controllerCurtida.buscarCurtida(idCurtida); 

        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('curtidas');
    })
})

describe("Teste de busca de curtida pelo ID do usuario", () => {
    it("deve buscar uma curtida pelo ID do usuario", async() => {
        const idUsuario = 8;

        const resultado = await controllerCurtida.buscarCurtidaPeloUsuario(idUsuario); 

        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('curtidas');
    })
})