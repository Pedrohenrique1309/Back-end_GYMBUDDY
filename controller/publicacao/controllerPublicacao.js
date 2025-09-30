/********************************************************** 
 * Controller para gerenciar o CRUD de publicação
 * Data: 25/09/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de publicacao
const publicacaoDAO = require('../../model/DAO/publicacao')

//Função para inserir uma nova publicacao no Banco de dados 
const inserirPublicacao = async function(publicacao, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                publicacao.imagem       == undefined || publicacao.imagem      == ''|| publicacao.imagem      == null ||publicacao.imagem.length       > 255   ||  
                publicacao.descricao    == undefined || publicacao.descricao   == ''|| publicacao.descricao   == null ||publicacao.descricao.length    > 300   ||
                publicacao.localizacao  == undefined || publicacao.localizacao == ''|| publicacao.localizacao == null ||publicacao.localizacao.length  > 200   ||
                publicacao.data         == undefined || publicacao.data        == ''|| publicacao.data        == null ||publicacao.data.length         !== 10  ||
                publicacao.id_user      == undefined || publicacao.id_user     == ''|| isNaN(publicacao.id_user)  
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultPublicacao = publicacaoDAO.insertPublicacao(publicacao)
                    
                if(resultPublicacao){
                    return {
                        status_code: 200,
                        message: "publicacao publicada com sucesso",
                        usuario: resultPublicacao
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

// //Função para atualizar uma publicacao no banco de dados
const atualizarPublicacao = async function(publicacao, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                      == undefined || id                     == ''|| id                     == null || isNaN(id) ||id                <= 0    ||
                publicacao.imagem       == undefined || publicacao.imagem      == ''|| publicacao.imagem      == null ||publicacao.imagem.length       > 255   ||  
                publicacao.descricao    == undefined || publicacao.descricao   == ''|| publicacao.descricao   == null ||publicacao.descricao.length    > 300   ||
                publicacao.localizacao  == undefined || publicacao.localizacao == ''|| publicacao.localizacao == null ||publicacao.localizacao.length  > 200   ||
                publicacao.data         == undefined || publicacao.data        == ''|| publicacao.data        == null ||publicacao.data.length         !== 10  ||
                publicacao.id_user      == undefined || publicacao.id_user     == ''|| isNaN(publicacao.id_user)
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            publicacao.id = parseInt(id)
            
            let buscarPublicacao = await publicacaoDAO.selectPublicacao(publicacao.id)

            if(buscarPublicacao){

                let resultPublicacao = await publicacaoDAO.atualizarPublicacao(publicacao)


                if(resultPublicacao){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultPublicacao
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultPublicacao = await publicacaoDAO.selectPublicacao(parseInt(id))

            if(resultPublicacao.status_code == 200){
                usuario.id = id

                let result = await publicacaoDAO.atualizarPublicacao(publicacao)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultPublicacao.status_code == 404){

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

//Função para excluir uma publicação no Banco de Dados
const excluirPublicacao = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultPublicacao = await buscarPublicacao(parseInt(id))

            if(resultPublicacao.status_code == 200){

                let result = await publicacaoDAO.deletePublicacao(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultPublicacao.status_code == 404){
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

//Função para listar todas as publicações salvas no Banco de Dados 
const listarPublicaca = async function () {
    
    try{

        let dadosPublicacoes = {}

        let resultPublicacao = await publicacaoDAO.selectAllPublicacao()
        

        if(resultPublicacao != false || typeof (resultPublicacao) == 'object'){

            if(resultPublicacao.length > 0 ){

                dadosPublicacoes.status = true
                dadosPublicacoes.status_code = 200
                dadosPublicacoes.itens = resultUsuario.length
                dadosPublicacoes.publicacoes = resultPublicacao

                return dadosPublicacoes //200

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

//Função para buscar uma publicação no Banco de Dados pelo ID
const buscarPublicacao = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let dadosPublicao= {}

            let resultPublicacao = await publicacaoDAO.selectPublicacao(parseInt(id))

            if(resultPublicacao !== String(resultPublicacao)){
                
                if(resultPublicacao != false || typeof(resultPublicacao) == 'object'){

                    if(resultPublicacao.length > 0){

                        //Cria um objeto Json para retornar a lista de Publicações
                        dadosPublicao.status = true
                        dadosPublicao.status_code = 200
                        dadosPublicao.Itens = resultPublicacao.length
                       dadosPublicao.usuario = resultPublicacao
        
                        return dadosPublicao//200
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

//Função para buscar as publicações de um usuário no Banco de Dados pelo ID
const buscarPublicacaoPeloUsuario = async function (id_user) {

    try{

        if(id_user != '' && id_user != undefined && id_user != null && !isNaN(id_user) && id_user > 0){

            let dadosPublicao= {}

            let resultPublicacao = await publicacaoDAO.selectPublicacaoByUser(parseInt(id_user))

            if(resultPublicacao !== String(resultPublicacao)){
                
                if(resultPublicacao != false || typeof(resultPublicacao) == 'object'){

                    if(resultPublicacao.length > 0){

                        //Cria um objeto Json para retornar a lista de Publicações
                        dadosPublicao.status = true
                        dadosPublicao.status_code = 200
                        dadosPublicao.Itens = resultPublicacao.length
                       dadosPublicao.usuario = resultPublicacao
        
                        return dadosPublicao//200
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
    inserirPublicacao,
    atualizarPublicacao,
    excluirPublicacao,
    listarPublicaca,
    buscarPublicacao,
    buscarPublicacaoPeloUsuario
}