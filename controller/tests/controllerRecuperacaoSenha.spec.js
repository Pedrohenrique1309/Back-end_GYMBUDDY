const controllerRecuperacaoSenha = require('../recuperacaoSenha/controllerRecuperacaoSenha.js');

describe("Teste de envio de código para recuperação de senha", () => {
    it("deve enviar um código para o email do usuário", async() => {
        const emailUsuario = "pedrohenrique.jorge@outlook.com";

        const resultado = await controllerRecuperacaoSenha.enviarEmail(emailUsuario);  

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200, 201]).toContain(resultado.status_code);
    })
})
 
describe("Teste de verificação de código de recuperação de senha", () => {
    it("deve verificar o código enviado para o email do usuário", async() => {
        const token = '325523';

        const resultado = await controllerRecuperacaoSenha.buscarRecuperacaoSenhaPeloToken(token);  

        expect(resultado).toBeTruthy();
        expect(resultado).toHaveProperty('status_code');
        expect([200]).toContain(resultado.status_code);
    })
})
            
