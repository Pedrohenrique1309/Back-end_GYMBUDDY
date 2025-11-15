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
  },
  ERROR_NOT_FOUND: {
    status: false,
    status_code: 404,
    message: 'Registro não encontrado.'
  },
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
  SUCCESS_DELETED_ITEM: {
    status: true,
    status_code: 200,
    message: 'Item excluído com sucesso.'
  },
  SUCCES_UPDATED_ITEM: {
    status: true,
    status_code: 200,
    message: 'Item atualizado com sucesso.'
  },
  SUCCES_ACTIVITY: {
    status: true,
    status_code: 200,
    message: 'Operação realizada com sucesso.'
  }
}

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

module.exports = MESSAGE
