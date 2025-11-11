/********************************************************** 
 * Controller para gerenciar o CRUD de treino
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de serie
const serieDAO = require('../../model/DAO/serie.js')

//import de comtrollers para fazer os relacionamentos
const controllerExercicio = require('../exercicio/controllerExercicio.js')


//Função para inserir uma nova serie no Banco de dados 
const inserirSerie = async function(serie, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                serie.peso          == undefined || serie.peso          == ''|| serie.peso          == null || isNaN(serie.peso) ||
                serie.id_exercicio  == undefined || serie.id_exercicio  == ''|| serie.id_exercicio  == null || serie.id_exercicio                <= 0 || isNaN(serie.id_exercicio) ||
                serie.repeticoes    == undefined || serie.repeticoes    == ''|| serie.repeticoes    == null || isNaN(serie.repeticoes) 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultSerie = await serieDAO.insertSerie(serie)
                 
                
                if(!resultSerie.code){
                    
                    return {
                        status_code: 200,
                        message: "serie criada com sucesso",
                        publicacao: resultSerie
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

// //Função para atualizar uma serie no banco de dados
const atualizarSerie = async function(serie, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                  == undefined || id                  == ''|| id                  == null || isNaN(id)                    ||id                <= 0    ||
                serie.peso          == undefined || serie.peso          == ''|| serie.peso          == null || isNaN(serie.peso)            ||
                serie.id_exercicio  == undefined || serie.id_exercicio  == ''|| serie.id_exercicio  == null || serie.id_exercicio      <= 0 || isNaN(serie.id_exercicio) ||
                serie.repeticoes    == undefined || serie.repeticoes    == ''|| serie.repeticoes    == null || isNaN(serie.repeticoes) 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            serie.id = parseInt(id)
            
            let buscarSerie = await serieDAO.selectBySerie(serie.id)

            if(buscarSerie){

                let resultSerie = await serieDAO.updateSerie(serie)


                if(resultSerie){
                    
                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultSerie
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultSerie = await serieDAO.selectBySerie(parseInt(id))

            if(resultSerie.status_code == 200){
                serie.id = id

                let result = await serieDAO.atualizarSerie(serie)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultSerie.status_code == 404){

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

//Função para excluir uma serie no Banco de Dados
const excluirSerie = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultSerie = await buscarSerie(parseInt(id))

            if(resultSerie.status_code == 200){

                let result = await serieDAO.deleteSerie(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultSerie.status_code == 404){
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

//Função para listar todas as series salvas no Banco de Dados 
const listarSerie = async function () {
    
    try{

        let arraySeries = []
        let dadosSeries = {}

        let resultSerie = await serieDAO.selectAllSerie()

        
        
        if(resultSerie != false || typeof (resultSerie) == 'object'){
        
            if(resultSerie.length > 0 ){
                
                dadosSeries.status = true
                dadosSeries.status_code = 200
                dadosSeries.itens = resultSerie.length

                for(itemSerie of resultSerie){

                        let dadosExercicio = await controllerExercicio.buscarExercicio(itemSerie.id_exercicio)
                    
                        itemSerie.exercicio = dadosExercicio.exercicio
                       
                        delete itemSerie.id_exercicio

                    
                    arraySeries.push(itemSerie)
                    
                    
                }
                dadosSeries.serie = arraySeries
                
                return dadosSeries //200

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

//Função para buscar uma serie no Banco de Dados pelo ID
const buscarSerie = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            
            let arraySeries = []
            let dadosSeries = {}

            let resultSerie = await serieDAO.selectBySerie(parseInt(id))


            if(resultSerie !== String(resultSerie)){
                
                if(resultSerie != false || typeof(resultSerie) == 'object'){

                    if(resultSerie.length > 0){

                        dadosSeries.status = true
                        dadosSeries.status_code = 200
                        dadosSeries.itens = resultSerie.length

                       for(itemSerie of resultSerie){

                        let dadosExercicio = await controllerExercicio.buscarExercicio(itemSerie.id_exercicio)
                    
                        itemSerie.exercicio = dadosExercicio.exercicio
                       
                        delete itemSerie.id_exercicio

                    
                            arraySeries.push(itemSerie)
                            
                            
                        }
                        dadosSeries.serie = arraySeries
                        
                        return dadosSeries //200

                        
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
const buscarSeriePeloExercicio = async function (id_exercicio) {

    try{

        if(id_exercicio != '' && id_exercicio != undefined && id_exercicio != null && !isNaN(id_exercicio) && id_exercicio > 0){

            let dadosSeries = {}

            let resultSerie = await serieDAO.selectSerieByExercicio(parseInt(id_exercicio))

            if(resultSerie !== String(resultSerie)){
                
                if(resultSerie!= false || typeof(resultSerie) == 'object'){


                    if(resultSerie.length > 0){

                        //Cria um objeto Json para retornar a lista de Publicações
                        dadosSeries.status = true
                        dadosSeries.status_code = 200
                        dadosSeries.Itens = resultSerie.length
                        dadosSeries.series = resultSerie
        
                        return dadosSeries//200
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



module.exports = {
    inserirSerie,
    atualizarSerie,
    excluirSerie,
    listarSerie,
    buscarSerie,
    buscarSeriePeloExercicio
}