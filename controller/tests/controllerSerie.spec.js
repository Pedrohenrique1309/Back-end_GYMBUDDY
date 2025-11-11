const controllerSerie = require('../serie/controllerSerie')

describe("Teste de inserção de serie", () => {
    it("deve inserir uma nova serie", async() => {
        const novaSerie = {
            "id_exercicio": 1,
            "repeticoes": 10,
            "peso": 100
        };  

        const resultado = await controllerSerie.inserirSerie(novaSerie, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de serie", () => {
    it("deve atualizar os dados de uma serie existente", async () => {
        const idSerie = 4;
        const dadosAtualizados = {
             "id_exercicio": 1,
            "repeticoes": 10,
            "peso": 110
        };

        const resultado = await controllerSerie.atualizarSerie(dadosAtualizados, idSerie, 'application/json');
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
})

describe("Teste de exclusão de serie", () => {
    it("deve excluir uma serie existente", async () => {
        const idSerie = 9;

        const resultado = await controllerSerie.excluirSerie(idSerie);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de listagem de series", () => {
    it("deve listar todas as series", async () => {
        const resultado = await controllerSerie.listarSerie();
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de serie", () => {
    it("deve buscar uma serie existente", async () => {
        const idSerie = 1

        const resultado = await controllerSerie.buscarSerie(idSerie);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de serie pelo ID do exercicio", () => {
    it("deve buscar uma serie existente", async () => {
        const idExercicio = 1

        const resultado = await controllerSerie.buscarSeriePeloExercicio(idExercicio);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})