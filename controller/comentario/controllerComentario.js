/********************************************************** 
 * Controller para gerenciar o CRUD de comentario
 * Data: 27/09/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de publicacao
const comentarioDAO = require('../../model/DAO/comentarios.js')

//import de comtrollers para fazer os relacionamentos
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerPublicacao = require('../publicacao/controllerPublicacao.js')

//Função para inserir um novo comentario no Banco de dados 
const inserirComentario = async function(comentario, contentType){

    try{

        if(contentType == 'application/json'){

            if(
                comentario.conteudo         == undefined || comentario.conteudo          == ''||comentario.conteudo          == null ||comentario.conteudo.length         > 300   ||  
                comentario.data_comentario  == undefined || comentario.data_comentario   == ''|| comentario.data_comentario  == null ||comentario.data_comentario.length  != 10   ||
                comentario.id_publicacao    == undefined || comentario.id_publicacao     == ''|| comentario.id_publicacao    == null ||isNaN(comentario.id_publicacao) || comentario.id_publicacao <= 0 ||
                comentario.id_user          == undefined || comentario.id_user           == ''|| comentario.id_user          == null ||isNaN(comentario.id_user)       || comentario.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultComentario = await comentarioDAO.insertComentario(comentario)
                           

                if(!resultComentario.code){
                    return {
                        status_code: 200,
                        message: "Comentário publicado com sucesso",
                        comentario: resultComentario
                    }

                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL  //500
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

// //Função para atualizar um coomentario no banco de dados
const atualizarComentario = async function(comentario, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){
            
            
            if(
                id                          == undefined || id                           == ''|| id                          == null || isNaN(id) ||id                     <= 0   ||
                comentario.conteudo         == undefined || comentario.conteudo          == ''||comentario.conteudo          == null ||comentario.conteudo.length         > 300   ||  
                comentario.data_comentario  == undefined || comentario.data_comentario   == ''|| comentario.data_comentario  == null ||comentario.data_comentario.length  != 10   ||
                comentario.id_publicacao    == undefined || comentario.id_publicacao     == ''|| comentario.id_publicacao    == null ||isNaN(comentario.id_publicacao) || comentario.id_publicacao <= 0 ||
                comentario.id_user          == undefined || comentario.id_user           == ''|| comentario.id_user          == null ||isNaN(comentario.id_user)       || comentario.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            comentario.id = parseInt(id)
            
            let buscarComentario = await comentarioDAO.selectComentario(comentario.id)

            if(buscarComentario){

                let resultComentario = await comentarioDAO.updateComentario(comentario)

                if(!resultComentario.code){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultComentario
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultComentario = await comentarioDAO.selectComentario(parseInt(id))

            if(resultComentario.status_code == 200){
                comentario.id = id

                let result = await comentarioDAO.atualizarComentario()


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultComentario.status_code == 404){

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

//Função para excluir um comentario no Banco de Dados
const excluirComentario = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultComentario = await buscarComentario(parseInt(id))

            if(resultComentario.status_code == 200){

                let result = await comentarioDAO.deleteComentario(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultComentario.status_code == 404){
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

//Função para listar todos os comentários salvas no Banco de Dados 
const listarComentarios = async function () {
    
    try{

        let arrayComentarios = []
        let dadosComentarios = {}

        let resultComentario = await comentarioDAO.selectAllComentario()
        

        if(resultComentario != false || typeof (resultComentario) == 'object'){

            if(resultComentario.length > 0 ){

                dadosComentarios.status = true
                dadosComentarios.status_code = 200
                dadosComentarios.itens = resultComentario.length

                for(itemComentario of resultComentario){
                
                    let dadosUsuario= await controllerUsuario.buscarUsuario(itemComentario.id_user)
                                    
                    itemComentario.user = dadosUsuario.usuario
                                   
                    delete itemComentario.id_user
                

                    let dadosPublicacao = await controllerPublicacao.buscarPublicacao(itemComentario.id_publicacao) 

                    itemComentario.publicacao = dadosPublicacao.publicacoes

                    delete itemComentario.id_publicacao

                                    
                    arrayComentarios.push(itemComentario)

               }

             dadosComentarios.comentarios = arrayComentarios
                                
             return dadosComentarios //200

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

//Função para buscar um comentario no Banco de Dados pelo ID
const buscarComentario = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let arrayComentarios= []
            let dadosComentarios= {}

            let resultComentario = await comentarioDAO.selectComentario(parseInt(id))

            if(resultComentario !== String(resultComentario)){
                
                if(resultComentario != false || typeof(resultComentario) == 'object'){

                    if(resultComentario.length > 0){

                        dadosComentarios.status = true
                        dadosComentarios.status_code = 200
                        dadosComentarios.itens = resultComentario.length
        
                        for(itemComentario of resultComentario){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemComentario.id_user)
                                            
                            itemComentario.user = dadosUsuario.usuario
                                           
                            delete itemComentario.id_user
                        
        
                            let dadosPublicacao = await controllerPublicacao.buscarPublicacao(itemComentario.id_publicacao) 
        
                            itemComentario.publicacao = dadosPublicacao.publicacoes
        
                            delete itemComentario.id_publicacao
        
                                            
                            arrayComentarios.push(itemComentario)
        
                       }
        
                     dadosComentarios.comentarios = arrayComentarios
                                        
                     return dadosComentarios //200
        
            
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

module.exports = {
    inserirComentario,
    atualizarComentario,
    buscarComentario,
    listarComentarios,
    excluirComentario
}