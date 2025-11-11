/********************************************************** 
 * Controller para gerenciar o CRUD de exercicio treino
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config.js')

//Import da DAO de exercicio_treino_serie
const exercicioTreinoSerieDAO = require('../../model/DAO/exercicio_treino_serie.js')

//Import do controllerHub para acessar todas as controllers
const controllers = require('../controllerHub')

//Função para inserir um novo exercicio_treino_serie no Banco de dados 
const inserirExercicioTreinoSerie = async function(exercicioTreinoSerie, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                exercicioTreinoSerie.id_treino    == undefined || exercicioTreinoSerie.id_treino     == ''|| exercicioTreinoSerie.id_treino    == null ||isNaN(exercicioTreinoSerie.id_treino)    || exercicioTreinoSerie.id_treino    <= 0 ||
                exercicioTreinoSerie.id_exercicio == undefined || exercicioTreinoSerie.id_exercicio  == ''|| exercicioTreinoSerie.id_exercicio == null ||isNaN(exercicioTreinoSerie.id_exercicio) || exercicioTreinoSerie.id_exercicio <= 0 ||
                exercicioTreinoSerie.id_serie     == undefined || exercicioTreinoSerie.id_serie      == ''|| exercicioTreinoSerie.id_serie     == null ||isNaN(exercicioTreinoSerie.id_serie)     || exercicioTreinoSerie.id_serie     <= 0 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultExercicioTreinoSerie = await exercicioTreinoSerieDAO.insertExercicioTreinoSerie(exercicioTreinoSerie)
                
                if(!resultExercicioTreinoSerie.code){
                    return {
                        status_code: 200,
                        message: "exercicio_treino criado com sucesso",
                        exercicio_treino_serie: resultExercicioTreinoSerie
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
const atualizarExercicioTreinoSerie = async function(exercicioTreinoSerie, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                                == undefined || id                                 == ''|| id                                == null ||isNaN(id)                                || id                                <= 0 ||
                exercicioTreinoSerie.id_treino    == undefined || exercicioTreinoSerie.id_treino     == ''|| exercicioTreinoSerie.id_treino    == null ||isNaN(exercicioTreinoSerie.id_treino)    || exercicioTreinoSerie.id_treino    <= 0 ||
                exercicioTreinoSerie.id_exercicio == undefined || exercicioTreinoSerie.id_exercicio  == ''|| exercicioTreinoSerie.id_exercicio == null ||isNaN(exercicioTreinoSerie.id_exercicio) || exercicioTreinoSerie.id_exercicio <= 0 ||
                exercicioTreinoSerie.id_serie     == undefined || exercicioTreinoSerie.id_serie      == ''|| exercicioTreinoSerie.id_serie     == null ||isNaN(exercicioTreinoSerie.id_serie)     || exercicioTreinoSerie.id_serie     <= 0 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            exercicioTreinoSerie.id = parseInt(id)
            
            let buscarExercicioTreinoSerie = await exercicioTreinoSerieDAO.selectByExercicioTreinoSerie(exercicioTreinoSerie.id)

            if(buscarExercicioTreinoSerie){

                let resultExercicioTreinoSerie = await exercicioTreinoSerieDAO.updateExercicioTreinoSerie(exercicioTreinoSerie)
                

                if(resultExercicioTreinoSerie){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultExercicioTreinoSerie
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultExercicioTreinoSerie = await exercicioTreinoSerieDAO.selectByExercicioTreinoSerie(parseInt(id))

            if(resultExercicioTreinoSerie.status_code == 200){
                exercicioTreinoSerie.id = id

                let result = await exercicioTreinoSerieDAO.updateExercicioTreinoSerie(exercicioTreinoSerie)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultExercicioTreinoSerie.status_code == 404){

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
const excluirExercicioTreinoSerie = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultExercicioTreinoSerie = await buscarExercicioTreinoSerie(parseInt(id))

            if(resultExercicioTreinoSerie.status_code == 200){

                let result = await exercicioTreinoSerieDAO.deleteExercicioTreinoSerie(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultExercicioTreinoSerie.status_code == 404){
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

//Função para listar todos os exercicio_treino_serie salvos no Banco de Dados 
const listarExercicioTreinoSerie = async function () {
    
    try{
       
        let arrayExercicioTreinoSerie = []
        let dadosExercicioTreinoSerie = {}

        let resultExercicioTreinoSerie = await exercicioTreinoSerieDAO.selectAllExercicioTreinoSerie()
        
        
        if(resultExercicioTreinoSerie != false || typeof (resultExercicioTreinoSerie) == 'object'){
            
            if(resultExercicioTreinoSerie.length > 0 ){
    
                dadosExercicioTreinoSerie.status = true
                dadosExercicioTreinoSerie.status_code = 200
                dadosExercicioTreinoSerie.itens = resultExercicioTreinoSerie.length

                for(itemExercicioTreinoSerie of resultExercicioTreinoSerie){
                        
                        let dadosTreino = await controllers.controllerTreino.buscarTreino(itemExercicioTreinoSerie.id_treino)
                        itemExercicioTreinoSerie.treino = dadosTreino.treinos
                       
                                               
                        delete itemExercicioTreinoSerie.id_treino

                        let dadosExercicio = await controllers.controllerExercicio.buscarExercicio(itemExercicioTreinoSerie.id_exercicio)
                        itemExercicioTreinoSerie.exercicio = dadosExercicio.exercicio
            
                        
                        delete itemExercicioTreinoSerie.id_exercicio

                        let dadosSerie = await controllers.controllerSerie.buscarSerie(itemExercicioTreinoSerie.id_serie)
                        itemExercicioTreinoSerie.serie = dadosSerie.serie

                        delete itemExercicioTreinoSerie.id_serie

        
                        arrayExercicioTreinoSerie.push(itemExercicioTreinoSerie)         
                                            
                    }
                    dadosExercicioTreinoSerie.exercicio_treino_serie = arrayExercicioTreinoSerie

                    return dadosExercicioTreinoSerie

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

//Função para buscar um exercicio_treino_serie no Banco de Dados pelo ID
const buscarExercicioTreinoSerie = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

    
            let dadosExercicioTreinoSerie = {}
            let arrayExercicioTreinoSerie = []

            let resultExercicioTreinoSerie = await exercicioTreinoSerieDAO.selectByExercicioTreinoSerie(parseInt(id))

            if(resultExercicioTreinoSerie !== String(resultExercicioTreinoSerie)){
                
                if(resultExercicioTreinoSerie != false || typeof(resultExercicioTreinoSerie) == 'object'){

                    if(resultExercicioTreinoSerie.length > 0){

                        dadosExercicioTreinoSerie.status = true
                        dadosExercicioTreinoSerie.status_code = 200
                        dadosExercicioTreinoSerie.itens = resultExercicioTreinoSerie.length

                        for(itemExercicioTreinoSerie of resultExercicioTreinoSerie){
                        
                        let dadosTreino = await controllers.controllerTreino.buscarTreino(itemExercicioTreinoSerie.id_treino)
                        itemExercicioTreinoSerie.treino = dadosTreino.treinos
                       
                                               
                        delete itemExercicioTreinoSerie.id_treino

                        let dadosExercicio = await controllers.controllerExercicio.buscarExercicio(itemExercicioTreinoSerie.id_exercicio)
                        itemExercicioTreinoSerie.exercicio = dadosExercicio.exercicio
            
                        
                        delete itemExercicioTreinoSerie.id_exercicio

                        let dadosSerie = await controllers.controllerSerie.buscarSerie(itemExercicioTreinoSerie.id_serie)
                        itemExercicioTreinoSerie.serie = dadosSerie.serie

                        delete itemExercicioTreinoSerie.id_serie

        
                        arrayExercicioTreinoSerie.push(itemExercicioTreinoSerie)         
                                            
                    }
                    dadosExercicioTreinoSerie.exercicio_treino_serie = arrayExercicioTreinoSerie

                    return dadosExercicioTreinoSerie
                        
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
const buscarExercicioByTreino = async function (id_treino) {
   
    try{

        if(id_treino != '' && id_treino != undefined && id_treino != null && !isNaN(id_treino) && id_treino > 0){

    
            let dadosExercicio = {}

            let resultExercicio = await exercicioTreinoSerieDAO.selectExercicioByTreino(parseInt(id_treino))

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
    inserirExercicioTreinoSerie,
    atualizarExercicioTreinoSerie,
    buscarExercicioTreinoSerie,
    listarExercicioTreinoSerie,
    excluirExercicioTreinoSerie,
    buscarExercicioByTreino
}