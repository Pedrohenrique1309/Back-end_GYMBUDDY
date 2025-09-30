/********************************************************** 
 * Controller para gerenciar o CRUD de usuarios 
 * Data: 16/09/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import do DAO de usuário
const usuarioDAO = require('../../model/DAO/usuario.js')



//Função para inserir usuário no Banco de Dados 
const inserirUsuario = async function(usuario, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                usuario.email       == undefined || usuario.email       == ''|| usuario.email    == null ||usuario.email.length          > 60   ||  
                usuario.senha       == undefined || usuario.senha       == ''|| usuario.senha    == null ||usuario.senha.length          > 30   ||
                usuario.nome        == undefined || usuario.nome        == ''|| usuario.nome     == null ||usuario.nome.length           > 45   ||
                usuario.nickname    == undefined || usuario.nickname    == ''|| usuario.nickname == null ||usuario.nickname.length       > 20    
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let searchEmail = await searchUsuarioByEmail(usuario.email)

                if (searchEmail.status_code == 200){

                    return MESSAGE.ERROR_ITEM_EXISTING

                }else {

                    let resultUsuario = await usuarioDAO.insertUsuario(usuario)


                    if(!resultUsuario.code){
                        return {
                            status_code: 200,
                            message: "usuário criado com sucesso",
                            usuario: resultUsuario
                        }
                    }else{
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL  //500
                    }

                }

            }

        }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
        
    }catch(error){
        console.log(error);
        
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

// //Função para atualizar um usuário no Banco de Dados
const atualizarUsuario = async function(usuario, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                  == undefined || id                  == ''|| id               == null || isNaN(id) || id              <= 0   ||
                usuario.email       == undefined || usuario.email       == ''|| usuario.email    == null ||usuario.email.length          > 60   ||  
                usuario.senha       == undefined || usuario.senha       == ''|| usuario.senha    == null ||usuario.senha.length          > 30   ||
                usuario.nome        == undefined || usuario.nome        == ''|| usuario.nome     == null ||usuario.nome.length           > 45   ||
                usuario.nickname    == undefined || usuario.nickname    == ''|| usuario.nickname == null ||usuario.nickname.length       > 20  
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            usuario.id = parseInt(id)
            
            let buscarUsuario = await usuarioDAO.selectByUsuario(usuario.id)
            

            if(buscarUsuario){

                let resultUsuario = await usuarioDAO.updateUsuario(usuario)

                console.log(resultUsuario);
                if(!resultUsuario.code){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultUsuario
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultUsuario = await usuarioDAO.selectByUsuario(parseInt(id))

            if(resultUsuario.status_code == 200){
                usuario.id = id

                let result = await usuarioDAO.atualizarUsuario(usuario)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultUsuario.status_code == 404){

                return MESSAGE.ERROR_NOT_FOUND

            }

            

        }
    }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
     }
    

    }catch(error){
        console.log(error);
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para excluir um usuário no Banco de Dados
const excluirUsuario = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultUsuario = await buscarUsuario(parseInt(id))

            if(resultUsuario.status_code == 200){

                let result = await usuarioDAO.deleteUsuario(id)
                console.log(result);
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultUsuario.status_code == 404){
                return MESSAGE.ERROR_NOT_FOUND //404
            }else{
                console.log(resultUsuario);
                
                return  MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
            }

    }else{
        return MESSAGE.ERROR_REQUIRED_FIELDS //400
    }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para listar todos usuários no Banco de Dados
const listarUsuario = async function () {
    
    try{


        let dadosUsuarios = {}

        let resultUsuario = await usuarioDAO.selectAllUsuario()
 

        if(resultUsuario != false || typeof (resultUsuario) == 'object'){

            if(resultUsuario.length > 0 ){

                dadosUsuarios.status = true
                dadosUsuarios.status_code = 200
                dadosUsuarios.itens = resultUsuario.length
                dadosUsuarios.usuarios = resultUsuario

                return dadosUsuarios //200

            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }

        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
        }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }   

}

//Função para buscar um usuário no Banco de Dados pelo ID
const buscarUsuario = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let dadosUsuarios= {}

            let resultUsuario = await usuarioDAO.selectByUsuario(parseInt(id))

            if(resultUsuario !== String(resultUsuario)){
                
                if(resultUsuario != false || typeof(resultUsuario) == 'object'){

                    if(resultUsuario.length > 0){

                        //Cria um objeto Json para retornar a lista de Usuários
                        dadosUsuarios.status = true
                        dadosUsuarios.status_code = 200
                        dadosUsuarios.Itens = resultUsuario.length
                        dadosUsuarios.usuario = resultUsuario
        
                        return dadosUsuarios//200
                    }else{
            
                        return MESSAGE.ERROR_NOT_FOUND //404
                    }
        
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }
            }else{
                return MESSAGE.ERROR_CONTENT_TYPE//415
            }
            
        }else{
            return MESSAGE.ERROR_REQUIRED_FIELDS //400
        }


    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }

}

//Função para logar um usuário através do Banco de Dados
const logarUsuario = async function (user) {

    try{

        if(
            user.email  == undefined || user.email  == ''|| user.email    == null || user.email.length  > 60 ||  
            user.senha  == undefined || user.senha  == ''|| user.senha    == null || user.senha.length  > 30  
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS

        }else{

            let result = await usuarioDAO.loginUsuario(user)

            if(result.length > 0){

                const message = MESSAGE.SUCCES_ACTIVITY

                message.usuario = result

                return message


            }else
                return MESSAGE.ERROR_NOT_FOUND


        }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }

}

//Função para bucar um usuário pelo email 
const searchUsuarioByEmail = async function (email){
    try {

        if(email == undefined || email == '' || email == null || email.length < 1){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }else{

            let dataUsuario = {}

            let result = await usuarioDAO.searchUsuarioByEmail(email)

            if(result != false || typeof(result) == 'object'){

                if(result.length > 0){

                    dataUsuario.status = true
                    dataUsuario.status_code = 200
                    dataUsuario.item = result

                    return dataUsuario
                }else{

                    return MESSAGE.ERROR_NOT_FOUND
                }

            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
        
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para atualizar apenas a senha de um usuario no banco de dados
const atualizarUsuarioSenha = async function(usuario, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                usuario.id          == undefined || usuario.id       == ''|| usuario.id       == null || isNaN(usuario.id)           || usuario.id <= 0 ||
                usuario.senha       == undefined || usuario.senha    == ''|| usuario.senha    == null || usuario.senha.length  > 30 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            let usuarioExists = await buscarUsuario(usuario.id)

            if(usuarioExists.status_code == 200){

                let resultUsuario = await usuarioDAO.updateUsuario(usuario)

                if(resultUsuario){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{

                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }
            }else if(usuarioExists.status_code == 404){
                return MESSAGE.ERROR_NOT_FOUND
            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
            }

           

        }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }



}

module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuario,
    buscarUsuario,
    logarUsuario,
    searchUsuarioByEmail,
    atualizarUsuarioSenha
}