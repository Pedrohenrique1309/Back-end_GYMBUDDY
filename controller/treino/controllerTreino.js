/********************************************************** 
 * Controller para gerenciar o CRUD de treino
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de treino
const treinoDAO = require('../../model/DAO/treino.js')

//import de comtrollers para fazer os relacionamentos
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerExercicioTreinoSerie = require('../exercicio_treino_serie/controllerExercicioTreinoSerie.js')
const { updateExercicio } = require('../../model/DAO/exercicio.js')

//Função para inserir um novo treino no Banco de dados 
const inserirTreino = async function(treino, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                treino.nome            == undefined || treino.nome            == ''|| treino.nome            == null ||treino.nome.length            > 45 ||  
                treino.id_user         == undefined || treino.id_user         == ''|| treino.id_user         == null ||treino.id_user                <= 0 || isNaN(treino.id_user) 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultTreino = await treinoDAO.insertTreino(treino)

                console.log(resultTreino);
                
                if(!resultTreino.code){
                    
                    for(itemExercicio of treino.exercicio){
                            itemExercicio.id_treino = resultTreino.id

                            let resultItemExercicio = await controllerExercicioTreinoSerie.inserirExerciciotTreinoSerie(itemExercicio, contentType)

                            if(!resultItemExercicio){
                                return MESSAGE.ERROR_CONTENT_TYPE
                            }
                    }


                    return {
                        status_code: 200,
                        message: "treino criado com sucesso",
                        publicacao: resultTreino
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

// //Função para atualizar um treino no banco de dados
const atualizarTreino = async function(treino, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                     == undefined || id                     == ''|| id                     == null || isNaN(id)                         ||id                <= 0    ||
                treino.nome            == undefined || treino.nome            == ''|| treino.nome            == null ||treino.nome.length            > 45 ||  
                treino.id_user         == undefined || treino.id_user         == ''|| treino.id_user         == null ||treino.id_user                <= 0 || isNaN(treino.id_user) 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            treino.id = parseInt(id)
            
            let buscarTreino = await treinoDAO.selectByTreino(treino.id)

            if(buscarTreino){

                let resultTreino = await treinoDAO.updateTreino(treino)


                if(!resultTreino.code){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultTreino
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultTreino = await treinoDAO.selectByTreino(parseInt(id))

            if(resultTreino.status_code == 200){
                treino.id = id

                let result = await treinoDAO.atualizarTreino(treino)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultTreino.status_code == 404){

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

//Função para excluir um treino no Banco de Dados
const excluirTreino = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultTreino = await buscarTreino(parseInt(id))

            if(resultTreino.status_code == 200){

                let result = await treinoDAO.deleteTreino(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultTreino.status_code == 404){
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

//Função para listar todos os treinos salvos no Banco de Dados 
const listarTreino = async function () {
    
    try{

        let arrayTreinos = []
        let dadosTreinos = {}

        let resultTreino = await treinoDAO.selectAllTreino()

        
        
        if(resultTreino != false || typeof (resultTreino) == 'object'){
        
            if(resultTreino.length > 0 ){
                
                dadosTreinos.status = true
                dadosTreinos.status_code = 200
                dadosTreinos.itens = resultTreino.length

                for(itemTreino of resultTreino){

                        let dadosUsuario = await controllerUsuario.buscarUsuario(itemTreino.id_user)
                    
                        itemTreino.user = dadosUsuario.usuario
                       
                        delete itemTreino.id_user

                        let dadosExercicio = await controllerExercicioTreinoSerie.buscarExercicioByTreino(itemTreino.id)
                        itemTreino.exercicio = dadosExercicio.exercicio

                    
                    arrayTreinos.push(itemTreino)
                    
                    
                }
                dadosTreinos.treinos = arrayTreinos
                
                return dadosTreinos //200

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

//Função para buscar um treino no Banco de Dados pelo ID
const buscarTreino = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            
            let arrayTreinos = []
            let dadosTreinos = {}

            let resultTreino = await treinoDAO.selectByTreino(parseInt(id))

            if(resultTreino !== String(resultTreino)){
                
                if(resultTreino != false || typeof(resultTreino) == 'object'){

                    if(resultTreino.length > 0){

                        dadosTreinos.status = true
                        dadosTreinos.status_code = 200
                        dadosTreinos.itens = resultTreino.length

                        for(itemTreino of resultTreino){

                                let dadosUsuario= await controllerUsuario.buscarUsuario(itemTreino.id_user)
                            
                                itemTreino.user = dadosUsuario.usuario
                            
                                delete itemTreino.id_user

                                let dadosExercicio = await controllerExercicioTreinoSerie.buscarExercicioByTreino(itemTreino.id)
                                itemTreino.exercicio = dadosExercicio.exercicio

                            
                            arrayTreinos.push(itemTreino)
                            
                            
                        }
                        dadosTreinos.treinos = arrayTreinos
                        
                        return dadosTreinos //200
                        
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

//Função para buscar os treino de um usuário no Banco de Dados pelo ID
const buscarTreinoPeloUsuario = async function (id_user) {

    try{

        if(id_user != '' && id_user != undefined && id_user != null && !isNaN(id_user) && id_user > 0){

            let dadosTreinos= {}

            let resultTreino = await treinoDAO.selectTreinoByUser(parseInt(id_user))

            if(resultTreino !== String(resultTreino)){
                
                if(resultTreino != false || typeof(resultTreino) == 'object'){


                    if(resultTreino.length > 0){

                        //Cria um objeto Json para retornar a lista de Publicações
                        dadosTreinos.status = true
                        dadosTreinos.status_code = 200
                        dadosTreinos.Itens = resultTreino.length
                        dadosTreinos.treinos = resultTreino
        
                        return dadosTreinos//200
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
    inserirTreino,
    atualizarTreino,
    buscarTreino,
    listarTreino,
    buscarTreinoPeloUsuario,
    excluirTreino
}