/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a views no Banco de Dados
 * Data: 07/10/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()

//Função para retornar o view do Banco de Dados
const viewPublicacoes = async function(){

    try{

        let sql = 'SELECT * FROM vw_feed_publicacoes'

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

//Função para retornar o view do Banco de Dados
const viewNotificacoes = async function(){

    try{

        let sql = 'SELECT * FROM vw_notificacoes_detalhadas'

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
    viewPublicacoes,
    viewNotificacoes
}