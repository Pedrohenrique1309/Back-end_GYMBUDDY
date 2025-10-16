/********************************************************** 
 * Controller para gerenciar o CRUD de Recuperação de Senha
 * Data: 09/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')
 
//Import da DAO de recuperação de senha
const recuperacaoSenhaDAO = require('../../model/DAO/recuperacaoSenha.js')

//Import do serviço de email
const emailService = require('../../src/services/emailService')

//import de comtrollers para fazer os relacionamentos
const controllerUsuario = require('../usuario/controllerUsuario.js')

const { PrismaClient } = require('@prisma/client')

// Inicializa o Prisma Client
const prisma = new PrismaClient();

const enviarEmail = async function(email) {
    try {

        const usuario = await prisma.tbl_user.findUnique({
            where: { email }
        })

        if (!usuario) {
            return {
                status: 404,
                status_code: 404,
                message: 'Usuário não encontrado'
            }
        }

        // Gerar código de recuperação (6 dígitos)
        const codigo = Math.floor(100000 + Math.random() * 900000)  // código é número


       // Remover códigos antigos deste usuário
        await prisma.tbl_recuperacao_senha.deleteMany({
            where: { id_user: usuario.id }
        })

        // Salvar o novo código
        await prisma.tbl_recuperacao_senha.create({
            data: {
                id_user: usuario.id,
                token: codigo
            }
        })

        
        

        // Enviar email
        const resultadoEmail = await emailService.enviarEmailRecuperacao(
            email,
            usuario.nome,
            codigo
        )

        if (!resultadoEmail.sucesso) {
            return {
                status: 500,
                status_code: 500,
                message: 'Erro ao enviar email de recuperação'
            }
        }

        return {
            status: 200,
            status_code: 200,
            message: 'Email de recuperação enviado com sucesso'
        }

    } catch (error) {
        console.error('Erro:', error.message)
        return {
            status: 500,
            status_code: 500,
            message: 'Erro interno do servidor'
        }
    }
}

const buscarRecuperacaoSenhaPeloUser = async function (id_user){
    try {

        let dadosRecuperacaoSenha = {}

        let result = await recuperacaoSenhaDAO.searchRecuperacaoSenhaByID(id_user)

        if(result){

            if(result.length < 1){
                return MESSAGE.ERROR_NOT_FOUND
            }else{

                dadosRecuperacaoSenha.status = true
                dadosRecuperacaoSenha.status_code = 200
                dadosRecuperacaoSenha.item = result

                return dadosRecuperacaoSenha
            }
           
        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const buscarRecuperacaoSenhaPeloToken = async function(token){
    try {

        if(token== undefined || token == '' || token == null){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }else{

            let dataResponse = {}
            let arrayResponse = []
            
            let result = await recuperacaoSenhaDAO.searchRecuperacaoSenhaByToken(token)

            if(result){

                if(result.length < 1){
                    return MESSAGE.ERROR_NOT_FOUND
                }else{
                    
                    dataResponse.status = true
                    dataResponse.status_code = 200

                    for(itemResponse of result){
                    
                    let dadosUsuario= await controllerUsuario.buscarUsuario(itemResponse.id_user)
                     
                                        
                        itemResponse.user = dadosUsuario.usuario
                                           
                        delete itemResponse.id_user
                    
                                        
                         arrayResponse.push(itemResponse)
                                        
                                        
                    }
                    dataResponse.recupercoes_senha = arrayResponse
                                    
                    return dataResponse //200
                }
            
            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }

        }
        
    } catch (error) {
        console.log(error);
        
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}



module.exports = {
    enviarEmail,
    buscarRecuperacaoSenhaPeloToken
}