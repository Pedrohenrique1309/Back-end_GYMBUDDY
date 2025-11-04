/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a exercicio no Banco de Dados
 * Data: 04/11/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados um novo exercicio
const insertExercicio = async function(exercicio){

    try{

        let sql = `insert into tbl_exercicio(
                                                nome,
                                                gif,
                                                descricao,
                                                grupo_muscular
                                            )values(
                                                '${exercicio.nome}',
                                                '${exercicio.gif}',
                                                '${exercicio.descricao}',
                                                '${exercicio.grupo_muscular}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_exercicio WHERE nome = '${exercicio.nome}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados um exercicio existente
const updateExercicio = async function(exercicio){

    try{

        let sql = `update tbl_exercicio set nome           =  '${exercicio.nome}',
                                            gif            =  '${exercicio.gif}',
                                            descricao      =  '${exercicio.descricao}',
                                            grupo_muscular =  '${exercicio.grupo_muscular}'
                                        where id = ${exercicio.id}`

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

//Função para excluir no Banco de Dados um exercicio existente 
const deleteExercicio = async function(id){

    try{

        let sql = `delete from tbl_exercicio where id = ${id}`

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

//Função para retornar do Banco de Dados uma lista de exercicios
const selectAllExercicio = async function(){

    try{

        let sql = 'SELECT * FROM tbl_exercicio order by id desc'

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

//Função para buscar no Banco de Dados um exercicio pelo ID
const selectByExercicio = async function(id){

    try{

        let sql = `SELECT * FROM tbl_exercicio where id = ${id}`

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
    insertExercicio,
    updateExercicio,
    deleteExercicio,
    selectAllExercicio,
    selectByExercicio
}