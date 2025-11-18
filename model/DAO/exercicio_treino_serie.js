/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a exercicio_treino no Banco de Dados
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('../../prisma/prisma/generated/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados um novo exercicio_treino_serie
const insertExercicioTreinoSerie = async function(exercicioTreinoSerie){

    try{

        let sql = `insert into tbl_exercicio_treino_serie(
                                                id_treino,
                                                id_exercicio,
                                                id_serie
                                            )values(
                                                '${exercicioTreinoSerie.id_treino}',
                                                '${exercicioTreinoSerie.id_exercicio}',
                                                '${exercicioTreinoSerie.id_serie}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_exercicio_treino_serie WHERE id_treino = '${exercicioTreinoSerie.id_treino}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados um exercicio_treino_serie existente
const updateExercicioTreinoSerie = async function(exercicioTreinoSerie){

    try{

        let sql = `update tbl_exercicio_treino_serie set    id_treino      =  '${exercicioTreinoSerie.id_treino}',
                                                      id_exercicio   =  '${exercicioTreinoSerie.id_exercicio}',
                                                      id_serie       =  '${exercicioTreinoSerie.id_serie}'
                                                where id = ${exercicioTreinoSerie.id}`

        let result = await prisma.$executeRawUnsafe(sql)
        
        if(result){
            return true 
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para excluir no Banco de Dados um exercicio_treino_serie existente 
const deleteExercicioTreinoSerie = async function(id){

    try{

        let sql = `delete from tbl_exercicio_treino_serie where id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            return true
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para retornar do Banco de Dados uma lista de exercicio_treino_serie
const selectAllExercicioTreinoSerie = async function(){

    try{

        let sql = 'SELECT * FROM tbl_exercicio_treino_serie order by id desc'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result){
            return result
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para buscar no Banco de Dados um exercicio_treino_serie pelo ID
const selectByExercicioTreinoSerie = async function(id){

    try{

        let sql = `SELECT * FROM tbl_exercicio_treino_serie where id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result){
            return result
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para buscar no Banco de Dados um exercicio_treino_serie pelo id do treino
const selectExercicioTreinoSerieByTreino= async function(id_treino){

    try{

        let sql = `SELECT * FROM tbl_exercicio_treino_serie where id_treino = ${id_treino}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result){
            return result
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para buscar no Banco de Dados os dados do exercicio pelo treino
const selectExercicioByTreino= async function(id_treino){

    try{

        let sql = `select tbl_exercicio.* from tbl_exercicio
                          inner join tbl_exercicio_treino_serie
                            on tbl_exercicio.id = tbl_exercicio_treino_serie.id_exercicio
                          inner join tbl_treino
                            on tbl_treino.id = tbl_exercicio_treino_serie.id_treino
                      where tbl_treino.id = ${id_treino}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result){
            return result
        }else{
            return false
        }

    }catch(error){
        return error
    }

}



module.exports = {
    insertExercicioTreinoSerie,
    updateExercicioTreinoSerie,
    deleteExercicioTreinoSerie,
    selectAllExercicioTreinoSerie,
    selectByExercicioTreinoSerie,
    selectExercicioByTreino,
    selectExercicioTreinoSerieByTreino

}