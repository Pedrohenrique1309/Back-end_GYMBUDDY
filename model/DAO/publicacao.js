 /**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a publicacoes no Banco de Dados
 * Data:25/09/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()

//Função para inserir no Banco de Dados uma nova publicação
const insertPublicacao = async function(publicacao){

    try{

        let sql = `insert into tbl_publicacao(
                                                foto,
                                                descricao,
                                                localizacao,
                                                id_usuario
                                            )values(
                                                '${publicacao.foto}',
                                                '${publicacao.descricao}',
                                                '${publicacao.localizacao}',
                                                '${publicacao.id_usuario}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_publicacao WHERE id_usuario = '${publicacao.id_usuario}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados umapublicação existente
const updatePublicacao = async function(publicacao){

    try{

        let sql = `update tbl_publicacao set     foto       = '${publicacao.foto}',
                                                descricao   = '${publicacao.descricao}',
                                                localizacao = '${publicacao.localizacao}',
                                                id_usuario  = '${publicacao.id_usuario}'
                                        where id = ${publicacao.id}`

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

//Função para excluir no Banco de Dados uma publicacao existente 
const deletePublicacao = async function(id){

    try{

        let sql = `delete from tbl_publicacao where id = ${id}`

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

//Função para retornar do Banco de Dados todas as publicacoes existente
const selectAllPublicacao = async function(){

    try{

        let sql = 'SELECT * FROM tbl_publicacao order by id desc'

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

//Função para buscar no Banco de Dados uma publicacao pelo ID
const selectPublicacao = async function(id){

    try{

        let sql = `SELECT * FROM tbl_publicacao where id=${id}`

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

//Função para buscar todas as publicações de um Usuário
const selectPublicacaoByUser = async function(id_user){

    try{

        let sql = `SELECT * FROM tbl_publicacao where id_user =${id_user}`

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
    insertPublicacao,
    updatePublicacao,
    deletePublicacao,
    selectAllPublicacao,
    selectPublicacao,
    selectPublicacaoByUser
}