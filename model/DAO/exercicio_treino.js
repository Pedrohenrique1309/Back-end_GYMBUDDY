/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a exercicio_treino no Banco de Dados
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados um novo exercicio_treino_
const insertExercicioTreino = async function(exercicioTreino){

    try{

        let sql = `insert into tbl_exercicio_treino(
                                                id_treino,
                                                id_exercicio,
                                                id_serie
                                            )values(
                                                '${exercicioTreino.id_treino}',
                                                '${exercicioTreino.id_exercicio}',
                                                '${exercicioTreino.id_serie}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_exercicio_treino WHERE id_treino = '${exercicioTreino.id_treino}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados um exercicio_treino existente
const updateExercicioTreino = async function(exercicioTreino){

    try{

        let sql = `update tbl_exercicio_treino set    id_treino      =  '${exercicioTreino.id_treino}',
                                                    id_exercicio   =  '${exercicioTreino.id_exercicio}',
                                                    id_serie       =  '${exercicioTreino.id_serie}'
                                                where id = ${exercicioTreino.id}`

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

//Função para excluir no Banco de Dados um exercicio_treino existente 
const deleteExercicioTreino = async function(id){

    try{

        let sql = `delete from tbl_exercicio_treino where id = ${id}`

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

//Função para retornar do Banco de Dados uma lista de exercicio_trein
const selectAllExercicioTreino = async function(){

    try{

        let sql = 'SELECT * FROM tbl_exercicio_treino order by id desc'

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

//Função para buscar no Banco de Dados um exercicio_treino pelo ID
const selectByExercicioTreino = async function(id){

    try{

        let sql = `SELECT * FROM tbl_exercicio_treino where id = ${id}`

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

//Função para buscar no Banco de Dados um exercicio_treino pelo id do treino
const selectExercicioTreinoByTreino= async function(id_treino){

    try{

        let sql = `SELECT * FROM tbl_exercicio_treino where id_treino = ${id_treino}`

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
                          inner join tbl_exercicio_treino
                            on tbl_exercicio.id = tbl_exercicio_treino.id_exercicio
                          inner join tbl_treino
                            on tbl_treino.id = tbl_exercicio_treino.id_treino
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
    insertExercicioTreino,
    updateExercicioTreino,
    deleteExercicioTreino,
    selectAllExercicioTreino,
    selectByExercicioTreino,
    selectExercicioByTreino,
    selectExercicioTreinoByTreino

}