/********************************************************** 
 * Controller para gerenciar o CRUD de curtida
 * Data: 02/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')

//Import da DAO de curtida
const notificacaoDAO = require('../../model/DAO/notificacao.js')

//import de comtrollers para fazer os relacionamentos
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerPublicacao = require('../publicacao/controllerPublicacao.js')
const controllerComentario = require('../comentario/controllerComentario.js')
const controllerCurtidaComentario = require('../curtida_comentario/curtida_comentario.js')
const { insertComentario } = require('../../model/DAO/comentarios.js')

//Função para inserir uma nova notificacao no Banco de dados 
const inserirNotificacao = async function(notificacao, contentType){

    try{

        if(contentType == 'application/json'){

            if( 
                notificacao.id_publicacao == undefined && notificacao.id_publicacao == '' && notificacao.id_publicacao  == null && 
                notificacao.id_comentario == undefined && notificacao.id_comentario == '' && notificacao.id_comentario  == null &&
                notificacao.id_comentario == undefined && notificacao.id_comentario == '' && notificacao.id_comentario  == null 
            ){


                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                 if(
                    notificacao.id_usuario_origem  == undefined || notificacao.id_usuario_origem  == ''|| notificacao.id_usuario_origem  == null ||isNaN(notificacao.id_usuario_origem)       || notificacao.id_usuario_origem  <= 0 ||
                    notificacao.id_usuario_destino == undefined || notificacao.id_usuario_destino == ''|| notificacao.id_usuario_destino == null ||isNaN(notificacao.id_usuario_destino)      || notificacao.id_usuario_destino <= 0 ||
                    notificacao.tipo               == undefined || notificacao.tipo               == ''|| notificacao.tipo               == null || notificacao.tipo.length           > 50 ||
                    notificacao.mensagem           == undefined || notificacao.mensagem           == ''|| notificacao.mensagem           == null || notificacao.mensagem.length         > 255 ||
                    notificacao.data_criacao       == undefined || notificacao.data_criacao       == ''|| notificacao.data_criacao       == null || notificacao.data_criacao.length    != 10 
                ){
            
                    return MESSAGE.ERROR_REQUIRED_FIELDS //400

                }else{
                
                        let resultNotificacao = await notificacaoDAO.insertNotificacao(notificacao)

                        if(!resultNotificacao.code && resultNotificacao != false){
                            return {
                            status_code: 200,
                            message: "notificacao criado com sucesso",
                            curtida: resultNotificacao
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


// //Função para atualizar uma notificacao no banco de dados
const atualizarNotificacao = async function(notificacao, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){
            
            if( 
                notificacao.id_publicacao == undefined && notificacao.id_publicacao == '' && notificacao.id_publicacao  == null && 
                notificacao.id_comentario == undefined && notificacao.id_comentario == '' && notificacao.id_comentario  == null 
            ){


                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{
            
                if(
                    id                             == undefined || id                             == ''|| id                             == null ||isNaN(id)                                  || id                             <= 0 ||
                    notificacao.id_usuario_origem  == undefined || notificacao.id_usuario_origem  == ''|| notificacao.id_usuario_origem  == null ||isNaN(notificacao.id_usuario_origem)       || notificacao.id_usuario_origem  <= 0 ||
                    notificacao.id_usuario_destino == undefined || notificacao.id_usuario_destino == ''|| notificacao.id_usuario_destino == null ||isNaN(notificacao.id_usuario_destino)      || notificacao.id_usuario_destino <= 0 ||
                    notificacao.tipo               == undefined || notificacao.tipo               == ''|| notificacao.tipo               == null || notificacao.tipo.length              > 50 ||
                    notificacao.mensagem           == undefined || notificacao.mensagem           == ''|| notificacao.mensagem           == null || notificacao.mensagem.length         > 255 ||
                    notificacao.data_criacao       == undefined || notificacao.data_criacao       == ''|| notificacao.data_criacao       == null || notificacao.data_criacao.length     != 10 
                ){
                    
                    return MESSAGE.ERROR_REQUIRED_FIELDS //400

                }else{

                    notificacao.id = parseInt(id)
                
                    let buscarNotificacao = await notificacaoDAO.selectNotificacao(notificacao.id)

                    if(buscarNotificacao){

                        let resultNotificacao = await notificacaoDAO.updateNotificacao(notificacao)

                        console.log(resultNotificacao);
                        

                        if(!resultNotificacao.code){
                            
                            return {
                                status_code: 200,
                                message: 'item atualizado com sucesso',
                                item: resultNotificacao
                            }
                        
                        }else{  
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                        }

                    }else{
                        
                    let resultNotificacao = await notificacaoDAO.selectNotificacao(parseInt(id))

                    if(resultNotificacao.status_code == 200){
                        notificacao.id = id

                        let result = await notificacaoDAO.updateNotificacao(notificacao)
                        
                        if(result){
                            
                            return MESSAGE.SUCCES_UPDATED_ITEM //201
                        
                        }else{           
                            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                        }

                        }else if(resultNotificacao.status_code == 404){

                            return MESSAGE.ERROR_NOT_FOUND

                        }
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

//Função para excluir uma notificacao no Banco de Dados
const excluirNotificacao = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultNotificacao = await buscarNotificacao(parseInt(id))

            if(resultNotificacao.status_code == 200){

                let result = await notificacaoDAO.deleteNotificacao(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultNotificacao.status_code == 404){
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

//Função para listar todas as notificacoes salvas no Banco de Dados 
const listarNotificacao = async function () {
    
    try{

        let arrayNotificacoes = []
        let dadosNotificacoes = {}

        let resultNotificacao = await notificacaoDAO.selectAllNotificacao()
        
   
        
        if(resultNotificacao != false || typeof (resultNotificacao) == 'object'){

          if(resultNotificacao.length > 0){

                        dadosNotificacoes.status = true
                        dadosNotificacoes.status_code = 200
                        dadosNotificacoes.itens = resultNotificacao.length
        
                        for(itemNotificacao of resultNotificacao){
                       
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_destino)
                                            
                            itemNotificacao.usuario_destino = dadosUsuario.usuario
                                           
                            delete itemNotificacao.id_usuario_destino

                            let dadosUsuarioOrigem= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_origem)
                                            
                            itemNotificacao.usuario_origem = dadosUsuarioOrigem.usuario
                                           
                            delete itemNotificacao.id_usuario_origem
                        
        
                            let dadosPublicacao = await controllerPublicacao.buscarPublicacao(itemNotificacao.id_publicacao) 
        
                            itemNotificacao.publicacao = dadosPublicacao.publicacoes
        
                            delete itemNotificacao.id_publicacao
        

                            let dadosComentario = await controllerComentario.buscarComentario(itemNotificacao.id_comentario) 
        
                            itemNotificacao.comentario = dadosComentario.comentarios
        
                            delete itemNotificacao.id_comentario   
                            

                            let dadosCurtidaComentario = await controllerCurtidaComentario.buscarCurtidaComentario(itemNotificacao.id_curtida_comentario)

                            itemNotificacao.id_curtida_comentario = dadosCurtidaComentario.curtidaComentario

                            delete itemNotificacao.id_curtida_comentario

                            arrayNotificacoes.push(itemNotificacao)
        
                       }
        
                     dadosNotificacoes.notificacoes = arrayNotificacoes
                             
                     return dadosNotificacoes
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

//Função para buscar uma notificacao no Banco de Dados pelo ID
const buscarNotificacao = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let arrayNotificacoes = []
            let dadosNotificacoes = {}

            let resultNotificacao = await notificacaoDAO.selectNotificacao(id)

            if(resultNotificacao !== String(resultNotificacao)){
                
                if(resultNotificacao != false || typeof (resultNotificacao) == 'object'){

                    if(resultNotificacao.length > 0){

                        dadosNotificacoes.status = true
                        dadosNotificacoes.status_code = 200
                        dadosNotificacoes.itens = resultNotificacao.length
        
                        for(itemNotificacao of resultNotificacao){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_destino)
                                            
                            itemNotificacao.usuario_destino = dadosUsuario.usuario
                                           
                            delete itemNotificacao.id_usuario_destino

                            let dadosUsuarioOrigem= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_origem)
                                            
                            itemNotificacao.usuario_origem = dadosUsuarioOrigem.usuario
                                           
                            delete itemNotificacao.id_usuario_origem
                        
        
                            let dadosPublicacao = await controllerPublicacao.buscarPublicacao(itemNotificacao.id_publicacao) 
        
                            itemNotificacao.publicacao = dadosPublicacao.publicacoes
        
                            delete itemNotificacao.id_publicacao
        

                            let dadosComentario = await controllerComentario.buscarComentario(itemNotificacao.id_comentario) 
        
                            itemNotificacao.comentario = dadosComentario.comentarios
        
                            delete itemNotificacao.id_comentario   
                            

                            let dadosCurtidaComentario = await controllerCurtidaComentario.buscarCurtidaComentario(itemNotificacao.id_curtida_comentario)

                            itemNotificacao.id_curtida_comentario = dadosCurtidaComentario.curtidaComentario

                            delete itemNotificacao.id_curtida_comentario

                            arrayNotificacoes.push(itemNotificacao)
        
        
                        }
            
                        dadosNotificacoes.notificacoes = arrayNotificacoes
                                console.log(dadosNotificacoes);
                                
                        return dadosNotificacoes

                        }else{
                            return MESSAGE.ERROR_NOT_FOUND // 404
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

//Função para buscar as notificacao de um usuário no Banco de Dados pelo ID
const buscarNotificacaoPeloUsuario = async function (id_usuario_destino) {

    try{

        if(id_usuario_destino != '' && id_usuario_destino != undefined && id_usuario_destino != null && !isNaN(id_usuario_destino) && id_usuario_destino > 0){

            let arrayNotificacoes = []
            let dadosNotificacoes = {}

            let resultNotificacao = await notificacaoDAO.selectNotificacaoByUser(parseInt(id_usuario_destino))


            if(resultNotificacao !== String(resultNotificacao)){
                
                if(resultNotificacao != false || typeof(resultNotificacao) == 'object'){


                    if(resultNotificacao.length > 0){

                        dadosNotificacoes.status = true
                        dadosNotificacoes.status_code = 200
                        dadosNotificacoes.itens = resultNotificacao.length
        
                        for(itemNotificacao of resultNotificacao){
                        
                            let dadosUsuario= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_destino)
                                            
                            itemNotificacao.usuario_destino = dadosUsuario.usuario
                                           
                            delete itemNotificacao.id_usuario_destino

                            let dadosUsuarioOrigem= await controllerUsuario.buscarUsuario(itemNotificacao.id_usuario_origem)
                                            
                            itemNotificacao.usuario_origem = dadosUsuarioOrigem.usuario
                                           
                            delete itemNotificacao.id_usuario_origem
                        
        
                            let dadosPublicacao = await controllerPublicacao.buscarPublicacao(itemNotificacao.id_publicacao) 
        
                            itemNotificacao.publicacao = dadosPublicacao.publicacoes
        
                            delete itemNotificacao.id_publicacao
        

                            let dadosComentario = await controllerComentario.buscarComentario(itemNotificacao.id_comentario) 
        
                            itemNotificacao.comentario = dadosComentario.comentarios
        
                            delete itemNotificacao.id_comentario   
                            

                            let dadosCurtidaComentario = await controllerCurtidaComentario.buscarCurtidaComentario(itemNotificacao.id_curtida_comentario)

                            itemNotificacao.id_curtida_comentario = dadosCurtidaComentario.curtidaComentario

                            delete itemNotificacao.id_curtida_comentario

                            arrayNotificacoes.push(itemNotificacao)
        
                       }
        
                     dadosNotificacoes.notificacoes = arrayNotificacoes
                             
                     return dadosNotificacoes
                     
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
    inserirNotificacao,
    atualizarNotificacao,
    excluirNotificacao,
    buscarNotificacao,
    listarNotificacao,
    buscarNotificacaoPeloUsuario
}