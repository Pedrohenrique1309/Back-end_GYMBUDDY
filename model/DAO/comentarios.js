 /**********************************************************************************************
 * Objetivo: Model reponsável pelo CRUD de dados referente a comentários no Banco de Dados
 * Data:27/09/2025
 * Autor: Pedro
 * Versão: 1.0
 * ******************************************************************************************/

 //Quando precisar do retorno de dados usar prisma.$queryRawUnsafe(), se for apenas executar usar prisma.$executeRawUnsafe()
 
 //Import da biblioteca do prisma client para executar scripts no BD
 const {PrismaClient} = require('@prisma/client')
 
 //Instancia da classe do prisma client, para gerar um objeto
 const prisma = new PrismaClient()

 //Função para inserir no Banco de Dados uma nova comentario
 const insertComentario = async function(comentario){
 
     try{
        console.log(comentario);
        
 
         let sql = `insert into tbl_comentario(
                                                 conteudo,
                                                 data_comentario,
                                                 id_publicacao,
                                                 id_user
                                             )values(
                                                 '${comentario.conteudo}',
                                                 '${comentario.data_comentario}',
                                                 '${comentario.id_publicao}',
                                                 '${comentario.id_user}'
                                             );`
 
         let result = await prisma.$executeRawUnsafe(sql)
 
         if(result){
             let sqlSelectId = `SELECT * FROM tbl_comentario WHERE id_user = '${comentario.id_user}' ORDER BY id DESC LIMIT 1`
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
 
 //Função para atualizar no Banco de Dados um comentário existente
 const updateComentario = async function(comentario){
 
     try{
 
         let sql = `update tbl_publicacao set    comentario      = '${comentario.comentario}',
                                                 data_comentario = '${comentario.data_comentario}',
                                                 id_publicacao   = '${comentario.id_publicacao}',
                                                 id_usuario      = '${comentario.id_usuario}'
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
 
 //Função para excluir no Banco de Dados um comentario existente 
 const deleteComentario = async function(id){
 
     try{
 
         let sql = `delete from tbl_comentario where id = ${id}`
 
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
 
 //Função para retornar do Banco de Dados todos os comentarios existente
 const selectAllComentario = async function(){
 
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
 
 //Função para buscar no Banco de Dados um comentario pelo ID
 const selectComentario = async function(id){
 
     try{
 
         let sql = `SELECT * FROM tbl_comentario where id=${id}`
 
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
    insertComentario,
    updateComentario,
    deleteComentario,
    selectAllComentario,
    selectComentario
}