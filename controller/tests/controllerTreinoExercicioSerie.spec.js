const controllerExercicioTreinoSerie = require('../exercicio_treino_serie/controllerExercicioTreinoSerie')

describe("Teste de inserção de exercicio_treino_serie", () => {
    it("deve inserir um novo vínculo exercicio/treino/serie", async() => {
        const novoVinculo = {
            "id_treino": 6,
            "id_exercicio": 1,
            "id_serie": 5
        };  

        const resultado = await controllerExercicioTreinoSerie.inserirExercicioTreinoSerie(novoVinculo, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})

describe("Teste de atualização de exercicio_treino_serie", () => {
    it("deve atualizar os dados de um vínculo existente", async () => {
        const idVinculo = 1;
        const dadosAtualizados = {
            "id_treino": 4,
            "id_exercicio": 1,
            "id_serie": 1
        };

        const resultado = await controllerExercicioTreinoSerie.atualizarExercicioTreinoSerie(dadosAtualizados, idVinculo, 'application/json');
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
})

describe("Teste de exclusão de exercicio_treino_serie", () => {
    it("deve excluir um vínculo existente", async () => {
        const idVinculo = 3;

        const resultado = await controllerExercicioTreinoSerie.excluirExercicioTreinoSerie(idVinculo);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de listagem de exercicio_treino_serie", () => {
    it("deve listar todos os vínculos", async () => {
        const resultado = await controllerExercicioTreinoSerie.listarExercicioTreinoSerie();
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de exercicio_treino_serie por ID", () => {
    it("deve buscar um vínculo existente", async () => {
        const idVinculo = 1

        const resultado = await controllerExercicioTreinoSerie.buscarExercicioTreinoSerie(idVinculo);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})

describe("Teste de busca de exercicios pelo ID do treino", () => {
    it("deve buscar os exercicios de um treino", async () => {
        const idTreino = 1

        const resultado = await controllerExercicioTreinoSerie.buscarExercicioByTreino(idTreino);
    
        expect(resultado).toBeTruthy(); 
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
})
