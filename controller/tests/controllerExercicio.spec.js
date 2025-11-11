const controllerExercicio = require('../exercicio/controllerExercicio')

describe("Teste de inserção de exercicio", () => {
    it("deve inserir um novo exercicio", async() => {
        const novoExercicio = {
            "nome": "Supino",
            "gif": "linkgifsupino",
            "descricao": "pega barra e levanta barra",
            "grupo_muscular": "peito superior"
        };  

        const resultado = await controllerExercicio.inserirExercicio(novoExercicio, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de exercicio", () => {
    it("deve atualizar os dados de um exercicio existente", async () => {
        const idExercicio = 101;
        const dadosAtualizados = {
             "nome": "Supino Inclinado",
            "gif": "linkgifsupino",
            "descricao": "pega barra e levanta barra",
            "grupo_muscular": "peito superior"
        };

        const resultado = await controllerExercicio.atualizarExercicio(dadosAtualizados, idExercicio, 'application/json');
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
})


describe("Teste de exclusão de exercicio", () => {
    it("deve excluir um exercicio existente", async () => {
        const idExercicio = 98;

        const resultado = await controllerExercicio.excluirExercicio(idExercicio);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de listagem de exercicios", () => {
    it("deve listar todos os exercicios", async () => {
        const resultado = await controllerExercicio.listarExercicio();
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de exercicio", () => {
    it("deve buscar um exercicio existente", async () => {
        const idExercicio = 97

        const resultado = await controllerExercicio.buscarExercicio(idExercicio);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

