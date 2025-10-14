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



//Importe do nodemailer
const nodemailer = require('nodemailer')

const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth:{
        user: "email@gmail.com",
        pass: "12345678"
    }
})

const configEmail = {
    from: "email@gmail.com",
    to: `${user.email}`,
    subject: "GYMBUDDY - Recupere sua senha",
    text: `Esse é seu código de recuperação de senha: ${token}`, 
}

new Promise((resolve, reject) =>{
    smtp.sendMail(configEmail)
    .then(res => {
        smtp.close()
        return resolve(res)
    }).catch(error => {
        console.log(error)
    })

})

const envairEmail = async function() {
    
}

const inserirRecuperacaoSenha = async function (recuperacaoSenhaJSON){
    try {

        //Não precisa de verificacao, porque  o JSON já será enviado formatado


            let result = await recuperacaoSenhaDAO.insertRecuperacaoSenha(recuperacaoSenhaJSON)

            if(result){
                return MESSAGE.SUCCESS_CREATED_ITEM
            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }


    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarRecuperacaoSenha = async function (recuperacaoSenhaJSON){
    try {

        //nao preciso criar verificacao pois o JSON já chegará formatado pelo próprio código

        let result = await recuperacaoSenhaDAO.updateRecSenha(recuperacaoSenhaJSON)

        if(result){
            return MESSAGE.SUCCES_UPDATED_ITEM
        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        
    } catch (error) {
        console.log(error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const buscarRecuperacaoSenhaPeloUser = async function (id_user){
    try {

        let dadosRecuperacaoSenha = {}

        let result = await recuperacaoSenhaDAO.searchRecSenhaByID(id_user)

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

            let result = await recuperacaoSenhaDAO.searchRecuperacaoSenhaByToken(token)

            if(result){

                if(result.length < 1){
                    return MESSAGE.ERROR_NOT_FOUND
                }else{
                    
                    dataResponse.status = true
                    dataResponse.status_code = 200
                    dataResponse.id_user = result[0].id_user

                    return dataResponse
                }
            
            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }

        }
        
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}



module.exports = {
    enviarEmail,
    searchRecuperacaoSenhaByCodigo
}