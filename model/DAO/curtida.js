/*******************************************************************************************************
 * Objetivo: Criar a comunicação com o Banco de Dados para fazer o CRUD de Curtidas
 * Data: 30/09/2025
 * Autor: Pedro
 * Versão: 1.0
 ******************************************************************************************************/

//import da biblioteca do prisma client para executar os scripts SQL
const { PrismaClient } = require('@prisma/client')
const { updateComentario } = require('./comentarios')

//Instancia (criar um objeto a ser utilizado) a biblioteca do prisma/client
const prisma = new PrismaClient()

//Função para inserir uma nova Curtida no banco de dados
const insertCurtida = async function(curtida) {
    try {

        let sql = `insert into tbl_curtida  ( 
                                            id_user,
                                            id_publicacao
                                          ) 
                                            values 
                                          (
                                            ${curtida.id_user},
                                            ${curtida.id_publicacao}
                                          )`

  
        //Executa o scriptSQL no banco de dados e aguarda o retorno do BD para 
        //saber se deu certo                                  
        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            let sqlSelectId = `SELECT * FROM tbl_curtida WHERE id_user = '${curtida.id_user}' ORDER BY id DESC LIMIT 1`
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

//Função para atualizar uma curtida no Banco de Dados
const updateCurtida = async function (curtida){

    try{

        let sql = `update tbl_curtida set  
                                            id_user       = ${curtida.id_user},
                                            id_publicacao = ${curtida.id_publicacao}

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

//Função para excluir uma curtida existente
const deleteCurtida = async function(id){
    try {
        let sql = `delete from tbl_curtida where id = ${id}`
  
        let result = await prisma.$executeRawUnsafe(sql)
  
        if(result)
          return true
        else
          return false
    } catch (error) {
      return false
    }
}

 //Função para retornar do Banco de Dados todas as curtidas existente
 const selectAllCurtida = async function(){
 
  try{

      let sql = 'SELECT * FROM tbl_curtida order by id desc'

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

//Função para buscar no Banco de Dados uma curttida pelo ID
const selectCurtida = async function(id){

  try{

      let sql = `SELECT * FROM tbl_curtida where id=${id}`

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

//Função para buscar no Banco de Dados uma curtida em uma publicacao pelo usuário 
const selectCurtidaByUser = async function(curtida){

    try{
  
        let sql = `SELECT * FROM tbl_curtida where id_publicacao = ${curtida.id_publicacao} and id_user =${curtida.id_user}`
  
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
  insertCurtida,
  updateCurtida,
  deleteCurtida,
  selectAllCurtida,
  selectCurtida,
  selectCurtidaByUser
}
