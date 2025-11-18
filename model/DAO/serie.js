/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a serie no Banco de Dados
 * Data: 06/11/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('../../prisma/prisma/generated/client')
//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados uma nova serie
const insertSerie = async function(serie){

    try{

        let sql = `insert into tbl_serie(
                                                id_exercicio,
                                                peso,
                                                repeticoes
                                            )values(
                                                '${serie.id_exercicio}',
                                                '${serie.peso}',
                                                '${serie.repeticoes}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_serie WHERE id_exercicio = '${serie.id_exercicio}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados uma serie existente
const updateSerie = async function(serie){

    try{

        let sql = `update tbl_serie set     id_exercicio =  '${serie.id_exercicio}',
                                            peso         =  '${serie.peso}',
                                            repeticoes   =  '${serie.repeticoes}'
                                        where id = ${serie.id}`

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

//Função para excluir no Banco de Dados uma serie existente 
const deleteSerie = async function(id){

    try{

        let sql = `delete from tbl_serie where id = ${id}`

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

//Função para retornar do Banco de Dados uma lista de series
const selectAllSerie = async function(){

    try{

        let sql = 'SELECT * FROM tbl_serie order by id desc'

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

//Função para buscar no Banco de Dados uma serie pelo ID
const selectBySerie = async function(id){

    try{

        let sql = `SELECT * FROM tbl_serie where id = ${id}`

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

//Função para buscar no Banco de Dados uma serie pelo exercicio
const selectSerieByExercicio = async function(id_exercicio){

    try{

        let sql = `SELECT * FROM tbl_serie where id_exercicio = ${id_exercicio}`

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
   insertSerie,
   updateSerie,
   selectAllSerie,
   selectBySerie,
   deleteSerie,
   selectSerieByExercicio
}