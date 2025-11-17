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
  },
  ERROR_NOT_FOUND: {
    status: false,
    status_code: 404,
    message: 'Registro não encontrado.'
  },
  SUCCESS_DELETED_ITEM: {
    status: true,
    status_code: 200,
    message: 'Item excluído com sucesso.'
  },
  SUCCES_UPDATED_ITEM: {
    status: true,
    status_code: 201,
    message: 'Item atualizado com sucesso.'
  },
  SUCCES_ACTIVITY: {
    status: true,
    status_code: 200,
    message: 'Operação realizada com sucesso.'
  }
}

module.exports = MESSAGE
