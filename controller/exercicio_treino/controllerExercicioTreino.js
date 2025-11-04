/********************************************************** 
 * Controller para gerenciar o CRUD de exercicio treino
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de treino
const exercicioTreinoDAO = require('../../model/DAO/exercicio_treino.js')


//Função para inserir um novo exercicio treino no Banco de dados 
const inserirExerciciotTreino = async function(exercicioTreino, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                exercicioTreino.id_treino    == undefined || exercicioTreino.id_treino     == ''|| exercicioTreino.id_treino    == null ||isNaN(exercicioTreino.id_treino)    || exercicioTreino.id_treino    <= 0 ||
                exercicioTreino.id_exercicio == undefined || exercicioTreino.id_exercicio  == ''|| exercicioTreino.id_exercicio == null ||isNaN(exercicioTreino.id_exercicio) || exercicioTreino.id_exercicio <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultExercicioTreino = await exercicioTreinoDAO.insertExercicioTreino(exercicioTreino)

                if(!resultExercicio.code){
                    return {
                        status_code: 200,
                        message: "exercicio_treino criado com sucesso",
                        publicacao: resultExercicio
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

// //Função para atualizar um exercicio_treino no banco de dados
const atualizarExercicioTreino = async function(exercicioTreino, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                           == undefined || id                            == ''|| id                           == null ||isNaN(id)                           || id                           <= 0 ||
                exercicioTreino.id_treino    == undefined || exercicioTreino.id_treino     == ''|| exercicioTreino.id_treino    == null ||isNaN(exercicioTreino.id_treino)    || exercicioTreino.id_treino    <= 0 ||
                exercicioTreino.id_exercicio == undefined || exercicioTreino.id_exercicio  == ''|| exercicioTreino.id_exercicio == null ||isNaN(exercicioTreino.id_exercicio) || exercicioTreino.id_exercicio <= 0
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            exercicioTreino.id = parseInt(id)
            
            let buscarExercicioTreino = await exercicioTreinoDAO.selectByExercicioTreino(exercicioTreino.id)

            if(buscarExercicioTreino){

                let resultExercicioTreino = await exercicioTreinoDAO.updateExercicioTreino(exercicioTreino)


                if(!resultExercicioTreino.code){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultExercicioTreino
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultExercicioTreino = await exercicioTreinoDAO.selectByExercicioTreino(parseInt(id))

            if(resultExercicioTreino.status_code == 200){
                exercicioTreino.id = id

                let result = await exercicioTreinoDAO.atualizarExercicioTreino(exercicioTreino)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultExercicioTreino.status_code == 404){

                return MESSAGE.ERROR_NOT_FOUND

            }

            

        }
    }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
     }
    

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para excluir um exercicio_treino no Banco de Dados
const excluirExercicioTreino = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultExercicioTreino = await buscarExercicioTreino(parseInt(id))

            if(resultExercicioTreino.status_code == 200){

                let result = await exercicioTreinoDAO.deleteExercicioTreino(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultExercicioTreino.status_code == 404){
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

//Função para listar todos os exercicio_treino salvos no Banco de Dados 
const listarExercicioTreino = async function () {
    
    try{
       
        let dadosExercicioTreino = {}

        let resultExercicioTreino = await exercicioTreinoDAO.selectAllExercicioTreino()

        
        if(resultExercicioTreino != false || typeof (resultExercicioTreino) == 'object'){
        
            if(resultExercicioTreino.length > 0 ){
                
                dadosExercicioTreino.status = true
                dadosExercicioTreino.status_code = 200
                dadosExercicioTreino.itens = resultExercicio.length
                dadosExercicioTreino.exercicio_treino = resultExercicioTreino
                
                return dadosExercicioTreino //200

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

//Função para buscar um exercicio_treino no Banco de Dados pelo ID
const buscarExercicioTreino = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

    
            let dadosExercicioTreino = {}

            let resultExercicioTreino = await exercicioTreinoDAO.selectByExercicioTreino(parseInt(id))

            if(resultExercicioTreino !== String(resultExercicioTreino)){
                
                if(resultExercicioTreino != false || typeof(resultExercicioTreino) == 'object'){

                    if(resultExercicioTreino.length > 0){

                        dadosExercicioTreino.status = true
                        dadosExercicioTreino.status_code = 200
                        dadosExercicioTreino.itens = resultExercicioTreino.length
                        dadosExercicioTreino.exercicio_treino = resultExercicioTreino
                        
                        return dadosExercicioTreino //200
                        
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
    inserirExerciciotTreino,
    atualizarExercicioTreino,
    buscarExercicioTreino,
    listarExercicioTreino,
    excluirExercicioTreino
}