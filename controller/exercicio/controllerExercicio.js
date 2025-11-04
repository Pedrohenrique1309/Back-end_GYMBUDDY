/********************************************************** 
 * Controller para gerenciar o CRUD de exercicio
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import da DAO de treino
const exercicioDAO = require('../../model/DAO/exercicio.js')


//Função para inserir um novo exercicio no Banco de dados 
const inserirExercicio = async function(exercicio, contentType){

    try{

        if(contentType == 'application/json'){


            if(
                exercicio.nome            == undefined || exercicio.nome           == ''|| exercicio.nome           == null ||exercicio.nome.length           > 45  ||  
                exercicio.gif             == undefined || exercicio.gif            == ''|| exercicio.gif            == null ||exercicio.gif.length            > 45  ||
                exercicio.descricao       == undefined || exercicio.descricao      == ''|| exercicio.descricao      == null ||
                exercicio.grupo_muscular  == undefined || exercicio.grupo_muscular == ''|| exercicio.grupo_muscular == null ||exercicio.grupo_muscular.length > 100 

            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }else{

                let resultExercicio = await exercicioDAO.insertExercicio(exercicio)

                if(!resultExercicio.code){
                    return {
                        status_code: 200,
                        message: "exercicio criado com sucesso",
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

// //Função para atualizar um exercicio no banco de dados
const atualizarExercicio = async function(exercicio, id, contentType) {
    
    try{
        
        if(contentType == 'application/json'){

            if(
                id                        == undefined || id                       == ''|| id                       == null ||isNaN(id)                             ||id  <= 0 ||
                exercicio.nome            == undefined || exercicio.nome           == ''|| exercicio.nome           == null ||exercicio.nome.length           > 45  ||  
                exercicio.gif             == undefined || exercicio.gif            == ''|| exercicio.gif            == null ||exercicio.gif.length            > 45  ||
                exercicio.descricao       == undefined || exercicio.descricao      == ''|| exercicio.descricao      == null ||
                exercicio.grupo_muscular  == undefined || exercicio.grupo_muscular == ''|| exercicio.grupo_muscular == null ||exercicio.grupo_muscular.length > 100 
            ){

                return MESSAGE.ERROR_REQUIRED_FIELDS //400

            }

            exercicio.id = parseInt(id)
            
            let buscarExercicio = await exercicioDAO.selectByExercicio(exercicio.id)

            if(buscarExercicio){

                let resultExercicio = await exercicioDAO.updateExercicio(exercicio)


                if(!resultExercicio.code){

                    return {
                        status_code: 200,
                        message: 'item atualizado com sucesso',
                        item: resultExercicio
                    }
                
                }else{  
                   return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else{
                
            let resultExercicio = await exercicioDAO.selectByExercicio(parseInt(id))

            if(resultExercicio.status_code == 200){
                exercicio.id = id

                let result = await exercicioDAO.atualizarExercicio(exercicio)


                if(result){
                    
                    return MESSAGE.SUCCES_UPDATED_ITEM //201
                
                }else{           
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500

                }

            }else if(resultExercicio.status_code == 404){

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

//Função para excluir um exercicio no Banco de Dados
const excluirExercicio = async function(id) {
    
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

            let resultExercicio = await buscarExercicio(parseInt(id))

            if(resultExercicio.status_code == 200){

                let result = await exercicioDAO.deleteExercicio(id)
                
                if(result){
                    return MESSAGE.SUCCESS_DELETED_ITEM //200
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }else if (resultExercicio.status_code == 404){
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

//Função para listar todos os exercicios salvos no Banco de Dados 
const listarExercicio = async function () {
    
    try{

       
        let dadosExercicios = {}

        let resultExercicio = await exercicioDAO.selectAllExercicio()

        
        if(resultExercicio != false || typeof (resultExercicio) == 'object'){
        
            if(resultExercicio.length > 0 ){
                
                dadosExercicios.status = true
                dadosExercicios.status_code = 200
                dadosExercicios.itens = resultExercicio.length
                dadosExercicios.exercicios = resultExercicio
                
                return dadosExercicios //200

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

//Função para buscar um exercicio no Banco de Dados pelo ID
const buscarExercicio = async function (id) {
   
    try{

        if(id != '' && id != undefined && id != null && !isNaN(id) && id > 0){

    
            let dadosExercicios = {}

            let resultExercicio = await exercicioDAO.selectByExercicio(parseInt(id))

            if(resultExercicio !== String(resultExercicio)){
                
                if(resultExercicio != false || typeof(resultExercicio) == 'object'){

                    if(resultExercicio.length > 0){

                        dadosExercicios.status = true
                        dadosExercicios.status_code = 200
                        dadosExercicios.itens = resultExercicio.length
                        dadosExercicios.exercicio = resultExercicio
                        
                        return dadosExercicios //200
                        
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
    inserirExercicio,
    atualizarExercicio,
    excluirExercicio,
    listarExercicio,
    buscarExercicio
}