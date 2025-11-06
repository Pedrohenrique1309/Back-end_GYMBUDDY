/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a treinos no Banco de Dados
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados um novo treino
const insertTreino = async function(treino){

    try{

        let sql = `insert into tbl_treino(
                                                nome,
                                                id_user
                                            )values(
                                                '${treino.nome}',
                                                '${treino.id_user}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_treino WHERE nome = '${treino.nome}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados um treino existente
const updateTreino = async function(treino){

    try{

        let sql = `update tbl_treino set    nome            =  '${treino.nome}',
                                            id_user         =  '${treino.id_user}'
                                        where id = ${treino.id}`

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

//Função para excluir no Banco de Dados um treino existente 
const deleteTreino = async function(id){

    try{

        let sql = `delete from tbl_treino where id = ${id}`

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

//Função para retornar do Banco de Dados uma lista de treinos
const selectAllTreino = async function(){

    try{

        let sql = 'SELECT * FROM tbl_treino order by id desc'

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

//Função para buscar no Banco de Dados um treino pelo ID
const selectByTreino = async function(id){

    try{

        let sql = `SELECT * FROM tbl_treino where id = ${id}`

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

//Função para buscar no Banco de Dados um treino pelo user
const selectTreinoByUser = async function(id_user){

    try{

        let sql = `SELECT * FROM tbl_treino where id_user = ${id_user}`

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
    insertTreino,
    updateTreino,
    selectAllTreino,
    selectByTreino,
    deleteTreino,
    selectTreinoByUser
}