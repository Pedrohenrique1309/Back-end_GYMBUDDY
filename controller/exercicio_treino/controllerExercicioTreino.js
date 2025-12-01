/********************************************************** 
 * Controller para gerenciar o CRUD de exercicio treino
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')

//Import da DAO de exercicio_treino_serie
const exercicioTreinoDAO = require('../../model/DAO/exercicio_treino.js')

//Import do controllerHub para acessar todas as controllers
const controllers = require('../controllerHub.js')

//Função para inserir um novo exercicio_treino_serie no Banco de dados 
const inserirExercicioTreino = async function(exercicioTreino, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                exercicioTreino.id_treino    == undefined || exercicioTreino.id_treino     == ''|| exercicioTreino.id_treino    == null ||isNaN(exercicioTreino.id_treino)    || exercicioTreino.id_treino    <= 0 ||
                exercicioTreino.id_exercicio == undefined || exercicioTreino.id_exercicio  == ''|| exercicioTreino.id_exercicio == null ||isNaN(exercicioTreino.id_exercicio) || exercicioTreino.id_exercicio <= 0 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultExercicioTreino = await exercicioTreinoDAO.insertExercicioTreino(exercicioTreino)
              
                
                if(!resultExercicioTreino.code){
                    return {
                        status_code: 200,
                        message: "exercicio_treio criado com sucesso",
                        exercicio_treino_serie: resultExercicioTreino
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

// //Função para atualizar um exercicio_treino_serie no banco de dados
const atualizarExercicioTreino = async function(exercicioTreino, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                                == undefined || id                                 == ''|| id                                == null ||isNaN(id)                                || id                                <= 0 ||
                exercicioTreino.id_treino    == undefined || exercicioTreino.id_treino     == ''|| exercicioTreino.id_treino    == null ||isNaN(exercicioTreino.id_treino)    || exercicioTreino.id_treino    <= 0 ||
                exercicioTreino.id_exercicio == undefined || exercicioTreino.id_exercicio  == ''|| exercicioTreino.id_exercicio == null ||isNaN(exercicioTreino.id_exercicio) || exercicioTreino.id_exercicio <= 0 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            exercicioTreino.id = parseInt(id)
            
            let buscarExercicioTreino = await exercicioTreinoDAO.selectByExercicioTreino(exercicioTreino.id)

            if(buscarExercicioTreino){

                let resultExercicioTreino = await exercicioTreinoDAO.updateExercicioTreino(exercicioTreino)
                

                if(resultExercicioTreino){
                    
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

                let result = await exercicioTreinoDAO.updateExercicioTreino(exercicioTreino)


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

//Função para excluir um exercicio_treino_serie no Banco de Dados
const excluirExercicioTreino = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            // Verificação direta por DAO para evitar falhas de hidratação em controllers relacionadas
            const existente = await exercicioTreinoDAO.selectByExercicioTreino(parseInt(id))

            if (existente && Array.isArray(existente) && existente.length > 0){
                const result = await exercicioTreinoDAO.deleteExercicioTreino(parseInt(id))
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }
            }else{
                return MESSAGE.ERROR_NOT_FOUND //404
            }

    }else{
        return MESSAGE.ERROR_REQUIRED_FIELDS //400
    }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

//Função para listar todos os exercicio_treino_serie salvos no Banco de Dados 
const listarExercicioTreino = async function () {
    
    try{
       
        let arrayExercicioTreino = []
        let dadosExercicioTreino = {}

        let resultExercicioTreino = await exercicioTreinoDAO.selectAllExercicioTreino()
        
        
        if(resultExercicioTreino != false || typeof (resultExercicioTreino) == 'object'){
            
            if(resultExercicioTreino.length > 0 ){
    
                dadosExercicioTreino.status = true
                dadosExercicioTreino.status_code = 200
                dadosExercicioTreino.itens = resultExercicioTreino.length

                for(itemExercicioTreino of resultExercicioTreino){

                     
                            const dadosTreino = await controllers.controllerTreino.buscarTreino(itemExercicioTreino.id_treino)
                            itemExercicioTreino.treino = (dadosTreino && dadosTreino.status_code === 200) ? (dadosTreino.treinos || []) : []
                       
                        delete itemExercicioTreino.id_treino

                       
                            const dadosExercicio = await controllers.controllerExercicio.buscarExercicio(itemExercicioTreino.id_exercicio)
                            itemExercicioTreino.exercicio = (dadosExercicio && dadosExercicio.status_code === 200) ? (dadosExercicio.exercicio || []) : []
                        
                        delete itemExercicioTreino.id_exercicio

                        try{
                            const dadosSerie = await controllers.controllerSerie.buscarSerie(itemExercicioTreino.id_serie)
                            itemExercicioTreino.serie = (dadosSerie && dadosSerie.status_code === 200) ? (dadosSerie.serie || []) : []
                        }catch{ itemExercicioTreino.serie = [] }
                        delete itemExercicioTreino.id_serie

                        arrayExercicioTreino.push(itemExercicioTreino)         
                                            
                    }
                    dadosExercicioTreino.exercicio_treino_serie = arrayExercicioTreino

                    return dadosExercicioTreino

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

//Função para buscar um exercicio_treino_serie no Banco de Dados pelo ID
const buscarExercicioTreino = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

    
            let dadosExercicioTreino = {}
            let arrayExercicioTreino = []

            let resultExercicioTreino = await exercicioTreinoDAO.selectByExercicioTreino(parseInt(id))

            if(resultExercicioTreino !== String(resultExercicioTreino)){
                
                if(resultExercicioTreino != false || typeof(resultExercicioTreino) == 'object'){

                    if(resultExercicioTreino.length > 0){

                        dadosExercicioTreino.status = true
                        dadosExercicioTreino.status_code = 200
                        dadosExercicioTreino.itens = resultExercicioTreino.length

                        for(itemExercicioTreino of resultExercicioTreino){
                          
                                const dadosTreino = await controllers.controllerTreino.buscarTreino(itemExercicioTreino.id_treino)
                                itemExercicioTreino.treino = dadosTreino.treinos
        
                            delete itemExercicioTreino.id_treino

                       
                                const dadosExercicio = await controllers.controllerExercicio.buscarExercicio(itemExercicioTreino.id_exercicio)
                                itemExercicioTreino.exercicio = dadosExercicio.exercicio
                           
                            delete itemExercicioTreino.id_exercicio

                            
                            arrayExercicioTreino.push(itemExercicioTreino)
                        }
                    dadosExercicioTreino.exercicio_treino_serie = arrayExercicioTreino

                    return dadosExercicioTreino
                        
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

//Função para buscar um exercicio no Banco de Dados pelo id_treino
const buscarExercicioPeloTreino = async function (id_treino) {
   
    try{

        if(id_treino != '' && id_treino != undefined && id_treino != null && !isNaN(id_treino) && id_treino > 0){

    
            let dadosExercicio = {}

            let resultExercicio = await exercicioTreinoDAO.selectExercicioByTreino(parseInt(id_treino))            
            
            if(resultExercicio !== String(resultExercicio)){
                
                if(resultExercicio != false || typeof(resultExercicio) == 'object'){

                    if(resultExercicio.length > 0){

                        dadosExercicio.status = true
                        dadosExercicio.status_code = 200
                        dadosExercicio.itens = resultExercicio.length
                        dadosExercicio.exercicio = resultExercicio
                        
                        return dadosExercicio //200
                        
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
    inserirExercicioTreino,
    atualizarExercicioTreino,
    buscarExercicioTreino,
    listarExercicioTreino,
    excluirExercicioTreino,
    buscarExercicioPeloTreino
}