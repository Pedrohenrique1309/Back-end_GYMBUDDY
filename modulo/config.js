/********************************************************** 
 * Arquivo de configuração com mensagens de retorno padronizadas
 * Data: 13/11/2025
 * Autor: Sistema
 * Versão: 1.0
 * 
 * Este arquivo centraliza todas as mensagens de retorno da API
 * para manter consistência nas respostas HTTP
***********************************************************/

module.exports = {
    // Success Messages (200-299)
    SUCCES_ACTIVITY: {
        status: true,
        status_code: 200,
        message: "Operação realizada com sucesso"
    },
    
    SUCCES_UPDATED_ITEM: {
        status: true,
        status_code: 201,
        message: "Item atualizado com sucesso"
    },
    
    SUCCESS_DELETED_ITEM: {
        status: true,
        status_code: 200,
        message: "Item deletado com sucesso"
    },
    
    // Client Error Messages (400-499)
    ERROR_REQUIRED_FIELDS: {
        status: false,
        status_code: 400,
        message: "Existem campos obrigatórios que não foram preenchidos ou não atendem aos critérios de aceite"
    },
    
    ERROR_NOT_FOUND: {
        status: false,
        status_code: 404,
        message: "Item não encontrado"
    },
    
    ERROR_ITEM_EXISTING: {
        status: false,
        status_code: 409,
        message: "Não é possível inserir um novo item com dados já existentes"
    },
    
    ERROR_CONTENT_TYPE: {
        status: false,
        status_code: 415,
        message: "O content-type da requisição não é suportado pelo servidor. Deve ser enviado como application/json"
    },
    
    // Server Error Messages (500-599)
    ERROR_INTERNAL_SERVER_CONTROLLER: {
        status: false,
        status_code: 500,
        message: "Erro interno do servidor na camada de controle (controller). Verifique o código da aplicação"
    },
    
    ERROR_INTERNAL_SERVER_MODEL: {
        status: false,
        status_code: 500,
        message: "Erro interno do servidor na camada de modelo (model/DAO). Verifique o código da aplicação ou a conexão com o banco de dados"
    },
    
    ERROR_INTERNAL_SERVER_DB: {
        status: false,
        status_code: 500,
        message: "Erro interno do servidor na camada de banco de dados. Verifique a conexão e estrutura do banco de dados"
    }
}
