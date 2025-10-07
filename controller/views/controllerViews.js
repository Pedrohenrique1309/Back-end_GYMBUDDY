/********************************************************** 
 * Controller para gerenciar o CRUD de views
 * Data: 07/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')

//Import do DAO de view
const viewDAO = require('../../model/DAO/views')

//Função para view do feed no Banco de Dados
const viewPublicacoes = async function () {
    
    try{


        let dadosView = {}

        let resultView = await viewDAO.viewPublicacoes()
 

        if(resultView != false || typeof (resultView) == 'object'){

            if(resultView.length > 0 ){

                
                dadosView.status = true
                dadosView.status_code = 200
                dadosView.itens = resultView.length
                dadosView.view = resultView

                return dadosView //200

            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }

        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
        }

    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }   

}

module.exports = {
    viewPublicacoes
}
