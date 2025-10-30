const controllernotificacao = require('../notificacao/controllerNotificacao.js');

describe("Teste de envio de notificação", () => {
    it("deve enviar uma nova notificação", async () => {
        const novaNotificacao = {
            "id_usuario_destino": 4,
            "id_usuario_origem": 1,
            "id_publicacao": 10,
            "id_comentario": "",
            "tipo_notificacao": "curtida",
            "mensagem": "Usuário 1 curtiu sua publicação.",
            "data_criacao": "2025-10-07",
            "is_lida": false
        };

        const resultado = await controllernotificacao.inserirNotificacao(novaNotificacao, 'application/json');
        
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    });
});

describe("Teste de listar notificacoes", () => {
    it("deve listar todas as notificações", async () => {
        const resultado = await controllernotificacao.listarNotificacao();

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('notificacoes');
    });
});

describe("Teste de atualização de notificação", () => {
    it("deve atualizar os dados de uma notificação existente", async () => {
        const idNotificacao = 16;
        const dadosAtualizados = {
            "id_usuario_destino": 4,
            "id_usuario_origem": 1,
            "id_publicacao": 10,
            "id_comentario": "",
            "tipo_notificacao": "comentario",
            "mensagem": "Usuário 1 curtiu sua publicação.",
            "data_criacao": "2025-10-07",
            "is_lida": false
        };

        const resultado = await controllernotificacao.atualizarNotificacao(dadosAtualizados, idNotificacao, 'application/json');
        console.log(resultado);
    
        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
        expect(resultado).toHaveProperty('item');
    });
});