/*************************************************************************************
 * Objetivo: Arquivo de configuração do projeto, para padronizar as messagens
 * Data: 16/09/25
 * Autor: Pedro
 * Versão: 1.0
 *************************************************************************************/

const ERROR_REQUIRED_FIELDS = {
    status: false, status_code: 400, message: 'Existem campos com preenchimento obrigatórios que não foram preeenchidos corretamente.'
}
const ERROR_INTERNAL_SERVER_MODEL = {
    status: false, status_code: 500, message: 'Devido a um erro interno no servidor de modelagem de dados, não foi possível processar a requisição.'
}
const ERROR_INTERNAL_SERVER_CONTROLLER = {
    status: false, status_code: 500, message: 'Devido a um erro interno no servidor de controle de dados, não foi possível processar a requisição.'
}
const ERROR_CONTENT_TYPE = {
    status: false, status_code: 415, message: 'Não foi possível processar a requisição, pois o tipo de dado fornecido não é aceito na API. Deve-se encaminhar apenas JSON.'
}
const ERROR_NOT_FOUND = {
    status: false, status_code: 404, message: 'Não foram encontrados itens para retorno.'
}

const ERROR_ITEM_EXISTING =   {
    status: false, status_code: 404, message: 'Dado já cadastrado.'
}

const ERROR_EMAIL = {
    status: false, status_code: 400, message: 'Não foi possível processar o envio de e-mail, pois o e-mail da conta é inválido.'
}

/******************************************* MENSAGENS DE SUCESSO ***********************************************/

const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Item criado com sucesso!!'}
const SUCCESS_DELETED_ITEM = {status: true, status_code: 200, message: 'Item deletado com sucesso!!'}
const SUCCES_UPDATED_ITEM = {status: true, status_code: 200, message: 'Item atualizado com sucesso!!'}
const SUCCES_ACTIVITY = {status: true, status_code: 200, message: 'Atividade realizada com sucesso!!!'}
const SUCCESS_EMAIL = {status: true, status_code: 200, message: 'Caso o e-mail exista e aceite solicitações, o código foi enviado com sucesso!'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    SUCCESS_CREATED_ITEM,
    ERROR_CONTENT_TYPE,
    SUCCESS_DELETED_ITEM,
    ERROR_NOT_FOUND,
    SUCCES_UPDATED_ITEM,
    SUCCES_ACTIVITY,
    ERROR_ITEM_EXISTING,
    SUCCESS_EMAIL,
    ERROR_EMAIL
}