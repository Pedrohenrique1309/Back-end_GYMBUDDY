/**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a usuarios no Banco de Dados
 * Data:16/09/2025
 * Autor: Pedro
 * Versão: 1.0
 * *******************************************************************************************/

//Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()

//Import da biblioteca do prisma client para executar scripts no BD
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do prisma client, para gerar um objeto
const prisma = new PrismaClient()


//Função para inserir no Banco de Dados um novo usuário
const insertUsuario = async function(usuario){

    try{

        let sql = `insert into tbl_user(
                                                nome,
                                                nickname,
                                                email,
                                                senha
                                            )values(
                                                '${usuario.nome}',
                                                '${usuario.nickname}',
                                                '${usuario.email}',
                                                '${usuario.senha}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_user WHERE nome = '${usuario.nome}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

    }catch(error){
        return error
    }

}

//Função para atualizar no Banco de Dados um usuario existente
const updateUsuario = async function(usuario){

    try{

        let sql = `update tbl_user set      nome        =  '${usuario.nome}',
                                            nickname    =  '${usuario.nickname}',
                                            email       =  '${usuario.email}',
                                            senha       =  '${usuario.senha}',
                                            peso        =  '${usuario.peso}',
                                            altura      =  '${usuario.altura}',
                                            foto        =  '${usuario.foto}',
                                            descricao   =  '${usuario.descricao}',
                                            localizacao =  '${usuario.localizacao}'
                                        where id = ${usuario.id}`

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

//Função para excluir no Banco de Dados um usuario existente 
const deleteUsuario = async function(id){

    try{

        let sql = `delete from tbl_user where id = ${id}`

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

//Função para retornar do Banco de Dados uma lista de usuarios
const selectAllUsuario = async function(){

    try{

        let sql = 'SELECT * FROM tbl_user order by id desc'

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

//Função para buscar no Banco de Dados um usuario pelo ID
const selectByUsuario = async function(id){

    try{

        let sql = `SELECT * FROM tbl_user where id=${id}`

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

const updateUsuarioSenha = async function(usuario){
    try {

        let sql = `UPDATE tbl_user SET senha = '${usuario.senha}' WHERE id = ${usuario.id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false
        
    } catch (error) {
        return false
    }
}


/*
 *  Função para logar um usuário  utilizando o banco de dados
 *  BINARY faz ficar case-sensitive
 */

const loginUsuario = async function (usuario) {
    
    try{

        let sql = `SELECT * FROM tbl_user where BINARY email = '${usuario.email}' and BINARY senha = '${usuario.senha}'`


        let result = await prisma.$queryRawUnsafe(sql)

        console.log(sql, result)

        if(result)
            return result
        else 
            return false

    }catch(error){  
        return false
    }

}

//Função para achar um usuário pelo email
const searchUsuarioByEmail = async function (email){
    try {

        let sql = `select * from tbl_user where email = '${email}'`

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
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectAllUsuario,
    selectByUsuario,
    loginUsuario,
    searchUsuarioByEmail,
    updateUsuarioSenha
}