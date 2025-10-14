/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a recuperação de senha no Banco de Dados
 * Data:13/10/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


const insertRecuperacaoSenha = async function(recuperacaoSenha){
    try {

        let sql = `insert into tbl_recuperacao_senha (
                                                        id_user,
                                                        token
                                                       )
                                                         values
                                                        (
                                                         '${recuperacaoSenha.id_user}',
                                                         '${recuperacaoSenha.token}'
                                                        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result)
            return true
        else
            return false
        
    } catch (error) {
        return false
    }
}

const updateRecuperacaoSenha = async function(recuperacaoSenha){
    try {

        let sql = `update tbl_recuperacao_senha set token    = '${recuperacaoSenha.token}',
                                                    id_user  = ${recuperacaoSenha.id_user}
                                                    where id = ${recuperacaoSenha.id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false
        
    } catch (error) {
        console.log(error)
        return false
    }
}

const searchRecuperacaoSenhaByID = async function(id){
    try {
        
        let sql = `select * from tbl_recuperacao_senha where id_user = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

const searchRecuperacaoSenhaByToken = async function(token){
    try {
        
        let sql = `select * fromtbl_recuperacao_senha where binary token = '${token}'` // binary deixa o sql case-sensitive

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    insertRecuperacaoSenha,
    updateRecuperacaoSenha,
    searchRecuperacaoSenhaByID,
    searchRecuperacaoSenhaByToken
}