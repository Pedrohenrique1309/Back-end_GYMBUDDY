/*******************************************************************************************************
 * Objetivo: Criar a comunicação com o Banco de Dados para fazer o CRUD de Curtidas de comentarios
 * Data: 03/10/2025
 * Autor: Pedro
 * Versão: 1.0
 ******************************************************************************************************/

//import da biblioteca do prisma client para executar os scripts SQL
const { PrismaClient } = require('@prisma/client')
const { updateComentario } = require('./comentarios')

//Instancia (criar um objeto a ser utilizado) a biblioteca do prisma/client
const prisma = new PrismaClient()

//Função para inserir uma nova Curtida de comentario no banco de dados
const insertCurtidaComentario = async function(curtidaComentario) {
    try {

        let sql = `insert into tbl_curtida_comentario  ( 
                                            id_user,
                                            id_comentario
                                          ) 
                                            values 
                                          (
                                            ${curtidaComentario.id_user},
                                            ${curtidaComentario.id_comentario}
                                          )`

  
        //Executa o scriptSQL no banco de dados e aguarda o retorno do BD para 
        //saber se deu certo                                  
        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_curtida_comentario WHERE id_user = '${curtidaComentario.id_user}' ORDER BY id DESC LIMIT 1`
            let criar = await prisma.$queryRawUnsafe(sqlSelectId)
            console.log(criar);
            return criar[0]
        }else{
            return false
        }

    } catch (error) {
        
        return false
    }
}

//Função para atualizar uma curtida de comentario no Banco de Dados
const updateCurtidaComentario = async function (curtidaComentario){

    try{

        let sql = `update tbl_curtida_comentario set  
                                            id_user       = ${curtidaComentario.id_user},
                                            id_comentario = ${curtidaComentario.id_comentario}

                                        where id = ${curtida.id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else
            return false

    }catch (error){
        return false
    }

}

//Função para excluir uma curtida  de comentarion existente
const deeleteCurtidaComentario = async function(id){
    try {
        let sql = `delete from tbl_curtida_comentario where id = ${id}`
  
        let result = await prisma.$executeRawUnsafe(sql)
  
        if(result)
          return true
        else
          return false
    } catch (error) {
      return false
    }
}

 //Função para retornar do Banco de Dados todas as curtidas de comentarios existente
 const selectAllCurtidaComentario = async function(){
 
  try{

      let sql = 'SELECT * FROM tbl_curtida_comentario order by id desc'

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

//Função para buscar no Banco de Dados uma curtida de comentario pelo ID
const selectCurtidaComentario = async function(id){

  try{

      let sql = `SELECT * FROM tbl_curtida_comentario where id=${id}`

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

//Função para buscar no Banco de Dados uma curtida em um comentario pelo usuário 
const selectCurtidaComentarioByUser = async function(curtidaComentario){

    try{
  
        let sql = `SELECT * FROM tbl_curtida_comentario where id_publicacao = ${curtidaComentario.id_publicacao} and id_user =${curtidaComentario.id_user}`
  
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
  insertCurtidaComentario,
  updateCurtidaComentario,
  deeleteCurtidaComentario,
  selectAllCurtidaComentario,
  selectCurtidaComentario,
  selectCurtidaComentarioByUser
}
