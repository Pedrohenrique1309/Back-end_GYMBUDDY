 /**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a notificações no Banco de Dados
 * Data:03/10 /2025
 * Autor: Pedro
 * Versão: 1.0
 * ******************************************************************************************/

 //Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()
 
 //Import da biblioteca do prisma client para executar scripts no BD
 const {PrismaClient} = require('@prisma/client')
 
 //Instancia da classe do prisma client, para gerar um objeto
 const prisma = new PrismaClient()

 //Função para inserir no Banco de Dados uma nova notificacao
 const insertNotificacao = async function(notificacao){
    
     try{
 
         let sql = `insert into tbl_notificacao(
                                                 id_usuario,
                                                 id_publicacao,
                                                 id_comentario,
                                                 tipo,
                                                 mensagem,
                                                 data_criacao,
                                                 is_lida
                                             )values(
                                                 '${notificacao.id_user}',
                                                 '${notificacao.id_publicacao}',
                                                 '${notificacao.id_comentario}',
                                                 '${notificacao.tipo}',
                                                 '${notificacao.mensagem}',
                                                 '${notificacao.data_criacao}',
                                                 '${notificacao.is_lida}',

                                             );`
 
         let result = await prisma.$executeRawUnsafe(sql)
 
         if(result){
             let sqlSelectId = `SELECT * FROM tbl_notificacao WHERE id_usuario = '${notificacao.id_user}' ORDER BY id DESC LIMIT 1`
             let criar = await prisma.$queryRawUnsafe(sqlSelectId)
             return criar[0]
         }else{
             return false
         }
 
     }catch(error){
        console.log(error);
         return error
     }
 
 }
 
 //Função para atualizar no Banco de Dados uma notificacao existente
 const updateNotificacao = async function(notificacao){
 
     try{
       
         let sql = `update tbl_notificacao set   id_usuario    = '${notificacao.id_user}',
                                                 id_publicacao = '${notificacao.id_publicacao}',
                                                 id_comentario = '${notificacao.id_comentario}',
                                                 tipo          = '${notificacao.tipo}',
                                                 mensagem      = '${notificacao.mensagem}',
                                                 data_criacao  = '${notificacao.data_criacao}',
                                                 is_lida       = '${notificacao.is_lida}',
                                         where id = ${notificacao .id}`
 
         let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_notificacao WHERE id = '${notificacao.id}' `
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            return criar[0]
        }else{
            return false
        }

 
     }catch(error){
         return error
     }
 
 }
 
 //Função para excluir no Banco de Dados uma notificacao existente 
 const deleteNotificacao = async function(id){
 
     try{
 
         let sql = `delete from tbl_notificacao where id = ${id}`
 
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
 
 //Função para retornar do Banco de Dados todas as notificacoes existente
 const selectAllNotificacao = async function(){
 
     try{
 
         let sql = 'SELECT * FROM tbl_comentario order by id desc'
 
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
 
 //Função para buscar no Banco de Dados uma notificacao pelo ID
 const selectNotificacao = async function(id){
 
     try{
 
         let sql = `SELECT * FROM tbl_notificacao where id=${id}`
 
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

 //Função para buscar no Banco de Dados uma notificacao pelo ID do usuario
 const selectNotificacaoByUser = async function(id){
 
     try{
 
         let sql = `SELECT * FROM tbl_notificacao where id_usuario =${id_user}`
 
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
    insertNotificacao,
    updateNotificacao,
    deleteNotificacao,
    selectAllNotificacao,
    selectNotificacao,
    selectNotificacaoByUser
}