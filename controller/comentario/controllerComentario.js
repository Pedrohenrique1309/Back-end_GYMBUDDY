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

//Função para inserir um novo comentario no Banco de dados 
const inserirComentario = async function(comentario, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                comentario.comentario       == undefined || comentario.comentario        == ''||comentario.comentario          == null ||comentario.comentario.length        > 300   ||  
                comentario.data_coementario == undefined || comentario.data_coementario  == ''|| comentario.data_coementario   == null ||comentario.data_coementario.length  != 10   ||
                comentario.id_publicacao    == undefined || comentario.id_publicacao     == ''|| isNaN(comentario.id_publicacao)       ||
                comentario.id_user          == undefined || comentario.id_user           == ''|| isNaN(comentario.id_user)  
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultComentiario = comentarioDAO.insertComentario(comentario)
                               
                if(!resultPublicacao.code){
                    return {
                        status_code: 200,
                        message: "Comentário publicado com sucesso",
                        usuario: resultComentiario
                    }

                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL  //500
                }
            }

        }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
        
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

// //Função para atualizar um coomentario no banco de dados
const atualizarComentario = async function(comentario, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                          == undefined || id                           == ''|| id                              == null || isNaN(id) ||id                     <= 0    ||
                comentario.comentario       == undefined || comentario.comentario        == ''||comentario.comentario            == null ||comentario.comentario.length        > 300   ||  
                comentario.data_coementario == undefined || comentario.data_coementario  == ''|| comentario.data_coementario     == null ||comentario.data_coementario.length  != 10   ||
                comentario.id_publicacao    == undefined || comentario.id_publicacao     == ''|| isNaN(comentario.id_publicacao)         ||
                comentario.id_user          == undefined || comentario.id_user           == ''|| isNaN(comentario.id_user)
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            comentario.id = parseInt(id)
            
            let buscarComentario = await comentarioDAO.selectComentario(comentario.id)

            if(buscarComentario){

                let resultComentario = await comentarioDAO.atualizarComentario(comentario)


                if(resultComentario){
                    
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

        let dadosComentarios = {}

        let resultComentario = await comentarioDAO.selectAllComentario()
        

        if(resultComentario != false || typeof (resultComentario) == 'object'){

            if(resultComentario.length > 0 ){

                dadosComentarios.status = true
                dadosComentarios.status_code = 200
                dadosComentarios.itens = resultUsuario.length
                dadosComentarios.comentarios = resultComentario

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

            let dadosComentario= {}

            let resultComentario = await comentarioDAO.selectComentario(parseInt(id))

            if(resultComentario !== String(resultComentario)){
                
                if(resultComentario != false || typeof(resultComentario) == 'object'){

                    if(resultComentario.length > 0){

                        //Cria um objeto Json para retornar a lista de comentarios
                        dadosComentario.status = true
                        dadosComentario.status_code = 200
                        dadosComentario.Itens = resultComentario.length
                       dadosComentario.comentario = resultComentario
        
                        return dadosComentario//200
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

module.exports = {
    inserirComentario,
    atualizarComentario,
    buscarComentario,
    listarComentarios,
    excluirComentario
}