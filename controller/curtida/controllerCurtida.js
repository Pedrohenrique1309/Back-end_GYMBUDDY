/********************************************************** 
 * Controller para gerenciar o CRUD de curtida
 * Data: 02/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')

//Import da DAO de curtida
const curtidaDAO = require('../../model/DAO/curtida.js')

//Função para inserir uma nova curtida no Banco de dados 
const inserirCurtida = async function(curtida, contentType){

    try{

        if(contentType == 'application/json'){

            if(
                curtida.id_publicacao    == undefined || curtida.id_publicacao     == ''|| curtida.id_publicacao    == null ||isNaN(curtida.id_publicacao) || curtida.id_publicacao <= 0 ||
                curtida.id_user          == undefined || curtida.id_user           == ''|| curtida.id_user       == null ||isNaN(curtida.id_user)       || curtida.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let searchCurtida = await buscarCurtidaPeloUsuario(curtida)

                if (searchCurtida.status_code == 200){

                    return MESSAGE.ERROR_ITEM_EXISTING

                }else {
                    
                
                    let resultCurtida = await curtidaDAO.insertCurtida(curtida)


                    if(!resultCurtida.code && resultCurtida != false){
                        return {
                            status_code: 200,
                            message: "curtida criado com sucesso",
                            curtida: resultCurtida
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

// //Função para atualizar uma curtida no banco de dados
const atualizarCurtida = async function(curtida, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){
            
            
            if(
                id                       == undefined || id                        == ''|| id                          == null ||isNaN(id)                       ||id                        <= 0 ||
                curtida.id_publicacao    == undefined || curtida.id_publicacao     == ''|| curtida.id_publicacao    == null ||isNaN(curtida.id_publicacao) || curtida.id_publicacao <= 0 ||
                curtida.id_user          == undefined || curtida.id_user           == ''|| curtida.id_user       == null ||isNaN(curtida.id_user)       || curtida.id_user       <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            curtida.id = parseInt(id)
            
            let buscarCurtida = await curtidaDAO.sele(curtida.id)

            if(buscarCurtida){

                let resultCurtida = await curtidaDAO.updateCurtida(curtida)

                if(!resultCurtida.code){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultCurtida
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultCurtida = await curtidaDAO.selectCurtida(parseInt(id))

            if(resultCurtida.status_code == 200){
                curtida.id = id

                let result = await curtidaDAO.atualizarCurtida()


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultCurtida.status_code == 404){

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

//Função para excluir uma curtida no Banco de Dados
const excluirCurtida = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultCurtida = await buscarCurtida(parseInt(id))

            if(resultCurtida.status_code == 200){

                let result = await curtidaDAO.deleteCurtida(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultCurtida.status_code == 404){
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

//Função para listar todas as curtidas salvas no Banco de Dados 
const listarCurtida = async function () {
    
    try{

        let dadosCurtidas = {}

        let resultCurtida = await curtidaDAO.selectAllCurtida()
        

        if(resultCurtida != false || typeof (resultCurtida) == 'object'){

            if(resultCurtida.length > 0 ){

                dadosCurtidas.status = true
                dadosCurtidas.status_code = 200
                dadosCurtidas.itens = resultCurtida.length
                dadosCurtidas.curtidas= resultCurtida

                return dadosCurtidas //200

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

//Função para buscar uma curtida no Banco de Dados pelo ID
const buscarCurtida = async function (id) {

    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let dadosCurtidas = {}

            let resultCurtida = await curtidaDAO.selectCurtida(parseInt(id))

            if(resultCurtida !== String(resultCurtida)){
                
                if(resultCurtida != false || typeof(resultCurtida) == 'object'){

                    if(resultCurtida.length > 0){

                        //Cria um objeto Json para retornar a lista de curtidas
                        dadosCurtidas.status = true
                        dadosCurtidas.status_code = 200
                        dadosCurtidas.Itens = resultCurtida.length
                        dadosCurtidas.curtida = resultCurtida
        
                        return dadosCurtidas//200
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

//Função para buscar uma curtida no Banco de Dados pelo usuario
const buscarCurtidaPeloUsuario = async function (curtida) {

    try{

        if(
            curtida.id_publicacao   == undefined || curtida.id_publicacao     == ''|| curtida.id_publicacao    == null ||isNaN(curtida.id_publicacao) || curtida.id_publicacao <= 0 ||
            curtida.id_user         == undefined || curtida.id_user           == ''|| curtida.id_user          == null ||isNaN(curtida.id_user)       || curtida.id_user       <= 0
        ){

            return MESSAGE.ERROR_REQUIRED_FIELDS //400
            
        }else{
            
            let dadosCurtidas = {}

            let resultCurtida = await curtidaDAO.selectCurtidaByUser(curtida)

            if(resultCurtida !== String(resultCurtida)){
                
                if(resultCurtida != false || typeof(resultCurtida) == 'object'){

                    if(resultCurtida.length > 0){

                        //Cria um objeto Json para retornar a lista de curtidas
                        dadosCurtidas.status = true
                        dadosCurtidas.status_code = 200
                        dadosCurtidas.Itens = resultCurtida.length
                        dadosCurtidas.curtida = resultCurtida
        
                        return dadosCurtidas//200
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
    inserirCurtida,
    atualizarCurtida,
    excluirCurtida,
    buscarCurtida,
    listarCurtida
}