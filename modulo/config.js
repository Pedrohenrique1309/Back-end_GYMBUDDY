<<<<<<< HEAD
// Central de mensagens padrão para respostas das controllers

const MESSAGE = {
  ERROR_REQUIRED_FIELDS: {
    status: false,
    status_code: 400,
    message: 'Campos obrigatórios não preenchidos.'
  },
  ERROR_CONTENT_TYPE: {
    status: false,
    status_code: 415,
    message: 'Content-Type não suportado. Use application/json.'
  },
  ERROR_INTERNAL_SERVER_MODEL: {
    status: false,
    status_code: 500,
    message: 'Erro interno no model.'
  },
  ERROR_INTERNAL_SERVER_CONTROLLER: {
    status: false,
    status_code: 500,
    message: 'Erro interno no controller.'
=======
const templates = {
  ERROR_REQUIRED_FIELDS: {
    status: false,
    status_code: 400,
    message: 'Campos obrigatórios não foram preenchidos.'
  },
  ERROR_ITEM_EXISTING: {
    status: false,
    status_code: 409,
    message: 'Item já existente.'
>>>>>>> 94d28a4ae94825ce008ccebabb0c82ba10056ae4
  },
  ERROR_NOT_FOUND: {
    status: false,
    status_code: 404,
    message: 'Registro não encontrado.'
  },
<<<<<<< HEAD
=======
  ERROR_INTERNAL_SERVER_MODEL: {
    status: false,
    status_code: 500,
    message: 'Erro interno ao acessar o banco de dados.'
  },
  ERROR_INTERNAL_SERVER_CONTROLLER: {
    status: false,
    status_code: 500,
    message: 'Erro interno na controller.'
  },
  ERROR_CONTENT_TYPE: {
    status: false,
    status_code: 415,
    message: 'Content-Type inválido. Use application/json.'
  },
>>>>>>> 94d28a4ae94825ce008ccebabb0c82ba10056ae4
  SUCCESS_DELETED_ITEM: {
    status: true,
    status_code: 200,
    message: 'Item excluído com sucesso.'
  },
  SUCCES_UPDATED_ITEM: {
    status: true,
<<<<<<< HEAD
    status_code: 201,
=======
    status_code: 200,
>>>>>>> 94d28a4ae94825ce008ccebabb0c82ba10056ae4
    message: 'Item atualizado com sucesso.'
  },
  SUCCES_ACTIVITY: {
    status: true,
    status_code: 200,
    message: 'Operação realizada com sucesso.'
  }
}

<<<<<<< HEAD
=======
const MESSAGE = new Proxy(templates, {
  get(target, prop) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
      const value = target[prop]
      return typeof value === 'object' && value !== null ? { ...value } : value
    }
    return {
      status: false,
      status_code: 500,
      message: 'Erro interno do servidor.'
    }
  }
})

>>>>>>> 94d28a4ae94825ce008ccebabb0c82ba10056ae4
module.exports = MESSAGE
