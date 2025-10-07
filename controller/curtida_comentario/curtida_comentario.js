/********************************************************** 
 * Controller para gerenciar o CRUD de curtida de comentarios
 * Data: 03/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')

//Import da DAO de curtida de comentario
const curtidaComentarioDAO = require('../../model/DAO/curtida_comentario.js')

//import de comtrollers para fazer os relacionamentos
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerComentario = require('../comentario/controllerComentario.js')

//Função para inserir uma nova curtida de comentario no Banco de dados 
const inserirCurtidaComentario = async function(curtidaComentario, contentType){

    try{

        if(contentType == 'application/json'){

            if(
                curtidaComentario.id_comentario    == undefined ||curtidaComentario.id_comentario     == ''||curtidaComentario.id_comentario    == null ||isNaN(curtidaComentario.id_comentario) || curtidaComentario.id_comentario <= 0 ||
                curtidaComentario.id_user          == undefined ||curtidaComentario.id_user           == ''||curtidaComentario.id_user          == null ||isNaN(curtidaComentario.id_user)       || curtidaComentario.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let searchCurtidaComentario = await buscarCurtidaComentario(curtidaComentario)

                if (searchCurtidaComentario.status_code == 200){

                    return MESSAGE.ERROR_ITEM_EXISTING

                }else {
                    
                
                    let resultCurtidaComentario = await curtidaComentarioDAO.insertCurtidaComentario(curtidaComentario)


                    if(!resultCurtidaComentario.code && resultCurtidaComentario != false){
                        return {
                            status_code: 200,
                            message: "curtida criado com sucesso",
                            curtida: resultCurtidaComentario
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

// //Função para atualizar uma curtida de comentario no banco de dados
const atualizarCurtidaComentario = async function(curtidaComentario, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){
            
            
            if(
                id                                 == undefined || id                                 == ''|| id                                == null ||isNaN(id)                              ||id                               <= 0 ||
                curtidaComentario.id_comentario    == undefined ||curtidaComentario.id_comentario     == ''||curtidaComentario.id_comentario    == null ||isNaN(curtidaComentario.id_comentario) || curtidaComentario.id_comentario <= 0 ||
                curtidaComentario.id_user          == undefined ||curtidaComentario.id_user           == ''||curtidaComentario.id_user          == null ||isNaN(curtidaComentario.id_user)       || curtidaComentario.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            curtidaComentario.id = parseInt(id)
            
            let buscarCurtidaComentario = await curtidaComentarioDAO.selectCurtidaComentario(curtidaComentario.id)

            if(buscarCurtidaComentario){

                let resultCurtidaComentario = await curtidaComentarioDAO.updateCurtidaComentario(curtidaComentario)

                
                if(!resultCurtidaComentario.code && resultCurtidaComentario != false){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultCurtidaComentario
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultCurtidaComentario = await curtidaComentarioDAO.selectCurtidaComentario(parseInt(id))

            if(resultCurtidaComentario.status_code == 200){
                curtidaComentario.id = id

                let result = await curtidaComentarioDAO.atualizarCurtidaComentario()


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultCurtidaComentario.status_code == 404){

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

//Função para excluir uma curtida de comentario no Banco de Dados
const excluirCurtidaComentario = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultCurtidaComentario = await buscarCurtidaComentario(parseInt(id))

            if(resultCurtidaComentario.status_code == 200){

                let result = await curtidaComentarioDAO.deeleteCurtidaComentario(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultCurtidaComentario.status_code == 404){
                return MESSAGE.ERROR_NOT_FOUND //404
            }else{
                return  MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
            }

    }else{
        return MESSAGE.ERROR_REQUIRED_FIELDS //400
    }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para listar todas as curtidas de comentarios salvas no Banco de Dados 
const listarCurtidaComentario = async function () {
    
    try{

        let arrayCurtidaComentario = []
        let dadosCurtidaComentario = {}

        let resultCurtidaComentario = await curtidaComentarioDAO.selectAllCurtidaComentario()
        

        if(resultCurtidaComentario != false || typeof (resultCurtidaComentario) == 'object'){

          if(resultCurtidaComentario.length > 0){

                        dadosCurtidaComentario.status = true
                        dadosCurtidaComentario.status_code = 200
                        dadosCurtidaComentario.itens = resultCurtidaComentario.length
        
                        for(itemCurtidaComentario of resultCurtidaComentario){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemCurtidaComentario.id_user)
                                            
                            itemCurtidaComentario.user = dadosUsuario.usuario
                                           
                            delete itemCurtidaComentario.id_user
                        
        
                            let dadosComentario = await controllerComentario.buscarComentario(itemCurtidaComentario.id_comentario) 
        
                            itemCurtidaComentario.comentario = dadosComentario.comentarios
        
                            delete itemCurtidaComentario.id_comentario
        
                                            
                            arrayCurtidaComentario.push(itemCurtidaComentario)
        
                       }
        
                     dadosCurtidaComentario.curtidaComentario = arrayCurtidaComentario
                     
                     return dadosCurtidaComentario

            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }

        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
        }

    }catch(error){
        console.log(error);
        
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }   

}

//Função para buscar uma curtida de comentario no Banco de Dados pelo ID
const buscarCurtidaComentario = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let arrayCurtidaComentario = []
            let dadosCurtidaComentario = {}

            let resultCurtidaComentario = await curtidaComentarioDAO.selectCurtidaComentario(parseInt(id))

            if(resultCurtidaComentario !== String(resultCurtidaComentario)){
                
                if(resultCurtidaComentario != false || typeof(resultCurtidaComentario) == 'object'){

                     if(resultCurtidaComentario.length > 0){

                        dadosCurtidaComentario.status = true
                        dadosCurtidaComentario.status_code = 200
                        dadosCurtidaComentario.itens = resultCurtidaComentario.length
        
                        for(itemCurtidaComentario of resultCurtidaComentario){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemCurtidaComentario.id_user)
                                            
                            itemCurtidaComentario.user = dadosUsuario.usuario
                                           
                            delete itemCurtidaComentario.id_user
                        
        
                            let dadosComentario = await controllerComentario.buscarComentario(itemCurtidaComentario.id_comentario) 
        
                            itemCurtidaComentario.comentario = dadosComentario.comentarios
        
                            delete itemCurtidaComentario.id_comentario
        
                                            
                            arrayCurtidaComentario.push(itemCurtidaComentario)
        
                       }
        
                     dadosCurtidaComentario.curtidaComentario = arrayCurtidaComentario
                                        
                       return dadosCurtidaComentario

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
        console.log(error);
        
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }

}

//Função para buscar uma curtida de comentario no Banco de Dados pelo usuario
const buscarCurtidComentarioPeloUsuario = async function (curtidaComentario) {

    try{

        if(
            curtidaComentario.id_comentario    == undefined ||curtidaComentario.id_comentario     == ''||curtidaComentario.id_comentario    == null ||isNaN(curtidaComentario.id_comentario) || curtidaComentario.id_comentario <= 0 ||
            curtidaComentario.id_user          == undefined ||curtidaComentario.id_user           == ''||curtidaComentario.id_user          == null ||isNaN(curtidaComentario.id_user)       || curtidaComentario.id_user       <= 0
            
        ){

            return MESSAGE.ERROR_REQUIRED_FIELDS //400
            
        }else{
            
            let arrayCurtidaComentario = []
            let dadosCurtidaComentario = {}

            let resultCurtidaComentario = await curtidaComentarioDAO.selectCurtidaComentarioByUser(curtidaComentario)

            if(resultCurtidaComentario !== String(resultCurtidaComentario)){
                
                if(resultCurtidaComentario != false || typeof(resultCurtidaComentario) == 'object'){

                    if(resultCurtidaComentario.length > 0){

                        dadosCurtidaComentario.status = true
                        dadosCurtidaComentario.status_code = 200
                        dadosCurtidaComentario.itens = resultCurtidaComentario.length
        
                        for(itemCurtidaComentario of resultCurtidaComentario){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemCurtidas.id_user)
                                            
                            itemCurtidaComentario.user = dadosUsuario.usuario
                                           
                            delete itemCurtidaComentario.id_user
                        
        
                            let dadosComentario = await controllerComentario.buscarComentario(itemCurtidas.id_comentario) 
        
                            itemCurtidaComentario.comentario = dadosComentario.comentario
        
                            delete itemCurtidaComentario.id_comentario
        
                                            
                            arrayCurtidaComentario.push(itemCurtidaComentario)
        
                       }
        
                     dadosCurtidaComentario.curtidaComentario = arrayCurtidaComentario
                                        
                    }else{
            
                        return MESSAGE.ERROR_NOT_FOUND //404
                    }
        
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }
            }else{
                return MESSAGE.ERROR_CONTENT_TYPE//415
            }
        }


    }catch(error){
        console.log(error);
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }

}

module.exports = {
    inserirCurtidaComentario,
    atualizarCurtidaComentario,
    excluirCurtidaComentario,
    buscarCurtidaComentario,
    listarCurtidaComentario
}