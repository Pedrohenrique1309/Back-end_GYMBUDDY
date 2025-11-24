/**********************************************************************************************
 * Objetivo: API refrente ao projeto GYMBUDDY
 * Data:16/09/2025
 * Autor: Pedro
 * Versão: 1.0
 * Observação: 
  
        ********** Para configurar e instalar a API,  precimaos das seguintes bibliotecas:
                express                npm install express --save
                cors                   npm instal cors --save
                body-parser            npm instal body-parser --save

        ********** Para configurar e instalar o acesso ao Banco de Dados precimos:   
                prisma                 npm instal body-parser --save (conexão com o BD)
                prisma/client          npm instal body-parser --save (Executa scripts no BD)

        *********** Após a instalação do prisma e do prisma client, devemos:
                npm instal body-parser --save (Inicializar o prisma no projeto)

        ***********  Comando para instalar o nodemailer para enviar email da recuperação de senha:
            npm install nodemailer

        Para realizar o sincronismo do prisma com o banco de dados, devemos executar o seguinte comando:
                npx prisma migrate dev     

 * *******************************************************************************************/


                
//Import das bibliotecas para criar a API
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT


//Import do controllerHub que centraliza todas as controllers
const controllers = require('./controller/controllerHub')

//Função para validar se controller foi carregada
const validateController = (controller, name) => {
    if (!controller) {
        console.error(`[app] AVISO: Controller '${name}' não foi carregada corretamente`)
        return null
    }
    return controller
}

//Desestruturação para facilitar o uso das controllers
const {
    controllerUsuario: _controllerUsuario,
    controllerPublicacao: _controllerPublicacao,
    controllerComentario: _controllerComentario,
    controllerCurtida: _controllerCurtida,
    controllerCurtidaComentario: _controllerCurtidaComentario,
    controllerNotificacao: _controllerNotificacao,
    controllerRecuperacaoSenha: _controllerRecuperacaoSenha,
    controllerExercicio: _controllerExercicio,
    controllerTreino: _controllerTreino,
    controllerSerie: _controllerSerie,
    controllerExercicioTreinoSerie: _controllerExercicioTreinoSerie,
    controllerView: _controllerView,
    controllerIA: _controllerIA
} = controllers

// Validar e atribuir controllers
const controllerUsuario = validateController(_controllerUsuario, 'controllerUsuario')
const controllerPublicacao = validateController(_controllerPublicacao, 'controllerPublicacao')
const controllerComentario = validateController(_controllerComentario, 'controllerComentario')
const controllerCurtida = validateController(_controllerCurtida, 'controllerCurtida')
const controllerCurtidaComentario = validateController(_controllerCurtidaComentario, 'controllerCurtidaComentario')
const controllerNotificacao = validateController(_controllerNotificacao, 'controllerNotificacao')
const controllerRecuperacaoSenha = validateController(_controllerRecuperacaoSenha, 'controllerRecuperacaoSenha')
const controllerExercicio = validateController(_controllerExercicio, 'controllerExercicio')
const controllerTreino = validateController(_controllerTreino, 'controllerTreino')
const controllerSerie = validateController(_controllerSerie, 'controllerSerie')
const controllerExercicioTreinoSerie = validateController(_controllerExercicioTreinoSerie, 'controllerExercicioTreinoSerie')
const controllerView = validateController(_controllerView, 'controllerView')
const controllerIA = validateController(_controllerIA, 'controllerIA')

//Função para validar resultado da controller e garantir que tem status_code
const safeResponse = (result) => {
    if (!result || typeof result !== 'object') {
        return {
            status_code: 500,
            message: 'Erro ao processar requisição: resultado inválido'
        }
    }
    if (result.status_code === undefined) {
        return {
            status_code: 500,
            message: 'Erro ao processar requisição: status_code não encontrado',
            originalResult: result
        }
    }
    return result
}

//Estabelecendo o formato dos dados que deverá chegar no body da requisição (POST ou PUT)
const bodyParserJSON = bodyParser.json()

//Cria o objeto app para criar a API
const app = express()

// Middleware global para capturar erros e garantir responses válidas
app.use((req, res, next) => {
    const originalJson = res.json
    res.json = function(data) {
        if (data && typeof data === 'object' && !data.status_code) {
            console.warn(`[app] Aviso: Resposta sem status_code no endpoint ${req.method} ${req.url}`)
        }
        return originalJson.call(this, data)
    }
    next()
})

// Middleware para tratamento de erros não capturados
app.use((err, req, res, next) => {
    console.error('[app] Erro não tratado:', err)
    res.status(500).json({
        status_code: 500,
        message: 'Erro interno do servidor',
        error: err.message
    })
})

//************************************* USUARIO *******************************************//


app.post('/v1/gymbuddy/usuario', cors(), bodyParserJSON, async function(request, response){

    if (!controllerUsuario) {
        response.status(500).json({ status_code: 500, message: 'Controlador não carregado' })
        return
    }

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let result = await controllerUsuario.inserirUsuario(dadosBody, contentType)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)

})


app.put('/v1/gymbuddy/senha/usuario', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let result = await controllerUsuario.atualizarUsuarioSenha(dadosBody, contentType)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/usuario', cors(), async function(request, response){

    let result = await controllerUsuario.listarUsuario()

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/usuario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerUsuario.buscarUsuario(search_id)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/usuario-email/:email', cors(), async function(request, response){

    let email = request.params.email

    let result = await controllerUsuario.buscarUsuarioPeloEmail(email)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/usuario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerUsuario.excluirUsuario(search_id)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/gymbuddy/usuario/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerUsuario.atualizarUsuario(dadosBody, search_id, contentType)

    result = safeResponse(result)
    response.status(result.status_code)
    response.json(result)
})


//************************************* LOGIN USUARIO *******************************************//

app.get('/v1/gymbuddy/usuario/login/email/senha', cors(), async function(request, response){

    const email = request.query.email;
    const senha = request.query.senha;

    const user = {
        email: email,
        senha: senha
    }

    let result = await controllerUsuario.logarUsuario(user)

    result = safeResponse(result)
    
    response.status(result.status_code)
    response.json(result)

})

//************************************* PUBLICAÇÃO *******************************************//

app.post('/v1/gymbuddy/publicacao', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let result = await controllerPublicacao.inserirPublicacao(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/publicacao/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerPublicacao.atualizarPublicacao(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/publicacao', cors(), async function(request, response){

    let result = await controllerPublicacao.listarPublicacao()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/publicacao/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerPublicacao.buscarPublicacao(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/publicacao/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerPublicacao.excluirPublicacao(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})


app.get('/v1/gymbuddy/publicacao/usuario/:id_user', cors(), async function(request, response){

    let id_user = request.params.id_user

    let result = await controllerPublicacao.buscarPublicacaoPeloUsuario(id_user)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})


//************************************* COMENTARIO *******************************************//

app.post('/v1/gymbuddy/comentario', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body


    let result = await controllerComentario.inserirComentario(dadosBody, contentType)




    result = safeResponse(result)



    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/comentario/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerComentario.atualizarComentario(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/comentario', cors(), async function(request, response){

    // Se for passada a query id_publicacao, retorne comentarios daquela publicacao
    const id_publicacao = request.query.id_publicacao

    if(id_publicacao){
        let result = await controllerComentario.buscarComentariosPorPublicacao(id_publicacao)
        response.status(result.status_code)
        response.json(result)
    }else{
        let result = await controllerComentario.listarComentarios()
        response.status(result.status_code)
        response.json(result)
    }

})

app.get('/v1/gymbuddy/comentario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerComentario.buscarComentario(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/comentario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerComentario.excluirComentario(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

//************************************* CURTIDA *******************************************//

app.post('/v1/gymbuddy/curtida', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerCurtida.inserirCurtida(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/curtida/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerCurtida.atualizarCurtida(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/curtida', cors(), async function(request, response){

    let result = await controllerCurtida.listarCurtida()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/curtida/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerCurtida.buscarCurtida(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/curtida/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerCurtida.excluirCurtida(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

//************************************* CURTIDA COMENTARIO *******************************************//

app.post('/v1/gymbuddy/curtida_comentario', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerCurtidaComentario.inserirCurtidaComentario(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/curtida_comentario/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerCurtidaComentario.atualizarCurtidaComentario(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/curtida_comentario', cors(), async function(request, response){

    let result = await controllerCurtidaComentario.listarCurtidaComentario()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/curtida_comentario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerCurtidaComentario.buscarCurtidaComentario(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/curtida_comentario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerCurtidaComentario.excluirCurtidaComentario(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

//************************************* NOTIFICACOES *******************************************//

app.post('/v1/gymbuddy/notificacao', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerNotificacao.inserirNotificacao(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/notificacao/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerNotificacao.atualizarNotificacao(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

// Marca uma notificacao como lida
app.patch('/v1/gymbuddy/notificacao/:idNotificacao/marcar-lida', cors(), async function(request, response){
    const idNotificacao = request.params.idNotificacao
    let result = await controllerNotificacao.marcarComoLida(idNotificacao)
    response.status(result.status_code || 200)
    response.json(result)
})

// Marca todas as notificacoes de um usuario como lidas
app.patch('/v1/gymbuddy/notificacao/usuario/:idUsuario/marcar-todas-lidas', cors(), async function(request, response){
    const idUsuario = request.params.idUsuario
    let result = await controllerNotificacao.marcarTodasComoLidas(idUsuario)
    response.status(result.status_code || 200)
    response.json(result)
})

// Conta notificacoes nao lidas de um usuario
app.get('/v1/gymbuddy/notificacao/usuario/:idUsuario/count-nao-lidas', cors(), async function(request, response){
    const idUsuario = request.params.idUsuario
    let result = await controllerNotificacao.contarNaoLidas(idUsuario)
    response.status(result.status_code || 200)
    response.json(result)
})



app.get('/v1/gymbuddy/notificacao', cors(), async function(request, response){

    let result = await controllerNotificacao.listarNotificacao()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/notificacao/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerNotificacao.buscarNotificacao(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/gymbuddy/notificacao/usuario/:id_usuario', cors(), async function(request, response){

    let id_usuario = request.params.id_usuario

    let result = await controllerNotificacao.buscarNotificacaoPeloUsuario(id_usuario)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/gymbuddy/notificacao/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerNotificacao.excluirNotificacao(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

//************************************* VIEWS *******************************************//

app.get('/v1/gymbuddy/view/feed', cors(), async function(request, response){

    let result = await controllerView.viewPublicacoes()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/view/notificacoes', cors(), async function(request, response){

    let result = await controllerView.viewNotificacoes()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

//************************************* RECUPERAÇÃO DE SENHA *******************************************//

app.post('/v1/gymbuddy/recuperar-senha/:email', cors(), bodyParserJSON, async function(request, response){

    let email = request.params.email

    let result = await controllerRecuperacaoSenha.enviarEmail(email)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/gymbuddy/recuperar-senha/:token', cors(), async function(request, response){

    let token = request.params.token

    let result = await controllerRecuperacaoSenha.buscarRecuperacaoSenhaPeloToken(token)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



//************************************* IA (GYMBUDDY ASSISTANT) *******************************************//

// Endpoint para chat com IA
app.post('/v1/gymbuddy/ia/chat', cors(), bodyParserJSON, async function(request, response) {
    
    let dadosChat = request.body

    let resultadoChat = await controllerIA.processarChatIA(dadosChat)

    response.status(resultadoChat.status_code)
    response.json(resultadoChat)
})

// Endpoint para análise de perfil e cálculo de métricas
app.post('/v1/gymbuddy/ia/analisar-perfil', cors(), bodyParserJSON, async function(request, response) {
    
    let dadosPerfil = request.body

    let resultadoAnalise = await controllerIA.analisarPerfilUsuario(dadosPerfil)

    response.status(resultadoAnalise.status_code)
    response.json(resultadoAnalise)
})

// Endpoint para gerar plano de treino personalizado
app.post('/v1/gymbuddy/ia/plano-treino', cors(), bodyParserJSON, async function(request, response) {
    
    let dadosPlano = request.body

    let resultadoPlano = await controllerIA.gerarPlanoTreino(dadosPlano)

    response.status(resultadoPlano.status_code)
    response.json(resultadoPlano)
})

// Endpoint para gerar plano nutricional personalizado
app.post('/v1/gymbuddy/ia/plano-nutricional', cors(), bodyParserJSON, async function(request, response) {
    
    let dadosNutricao = request.body

    let resultadoNutricao = await controllerIA.gerarPlanoNutricional(dadosNutricao)

    response.status(resultadoNutricao.status_code)
    response.json(resultadoNutricao)
})

// Endpoint para verificar status do serviço de IA
app.get('/v1/gymbuddy/ia/status', cors(), async function(request, response) {
    
    let statusIA = await controllerIA.verificarStatusIA()

    response.status(statusIA.status_code)
    response.json(statusIA)
})

//************************************* EXERCICIO *******************************************//

app.post('/v1/gymbuddy/exercicio', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllers.controllerExercicio.inserirExercicio(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/exercicio/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllers.controllerExercicio.atualizarExercicio(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/exercicio', cors(), async function(request, response){

    let result = await controllers.controllerExercicio.listarExercicio()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/exercicio/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllers.controllerExercicio.buscarExercicio(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/exercicio/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllers.controllerExercicio.excluirExercicio(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})


//************************************* TREINO *******************************************//

app.post('/v1/gymbuddy/treino', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerTreino.inserirTreino(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/treino/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerTreino.atualizarTreino(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/treino', cors(), async function(request, response){

    let result = await controllerTreino.listarTreino()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/treino/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerTreino.buscarTreino(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/treino/nome/:nome', cors(), async function(request, response){

    let nome = request.params.nome

    let result = await controllerTreino.buscarTreinoPeloNome(nome)

    result = safeResponse(result)

  
   response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/treino/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerTreino.excluirTreino(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})

//************************************* SERIE *******************************************//

app.post('/v1/gymbuddy/serie', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerSerie.inserirSerie(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/serie/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerSerie.atualizarSerie(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/serie', cors(), async function(request, response){

    let result = await controllerSerie.listarSerie()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/serie/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id
    
    let result = await controllerSerie.buscarSerie(search_id)


    
    result = safeResponse(result)

    
    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/serie/exercicio/:id_exercicio', cors(), async function(request, response){

    let id_exercicio = request.params.id_exercicio

    let result = await controllerSerie.buscarSeriePeloExercicio(id_exercicio)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/serie/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerSerie.excluirSerie(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})


//************************************* EXERCICIO_TREINO_SERIE *******************************************//
app.post('/v1/gymbuddy/exercicio_treino_serie', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let result = await controllerExercicioTreinoSerie.inserirExercicioTreinoSerie(dadosBody, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.put('/v1/gymbuddy/exercicio_treino_serie/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']
 
    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerExercicioTreinoSerie.atualizarExercicioTreinoSerie(dadosBody, search_id, contentType)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



app.get('/v1/gymbuddy/exercicio_treino_serie', cors(), async function(request, response){

    let result = await controllerExercicioTreinoSerie.listarExercicioTreinoSerie()



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/exercicio_treino_serie/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerExercicioTreinoSerie.buscarExercicioTreinoSerie(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/exercicio_treino_serie/exercicio/:id_treino', cors(), async function(request, response){

    let id_treino = request.params.id_treino

    let result = await controllerExercicioTreinoSerie.buscarExercicioByTreino(id_treino)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/exercicio_treino_serie/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerExercicioTreinoSerie.excluirExercicioTreinoSerie(search_id)



    result = safeResponse(result)


    response.status(result.status_code)
    response.json(result)
})



if (require.main === module) {
    app.listen(port, function(){
        console.log(`API GYMBUDDY aguardando requisições na porta ${port}...`)
    })
} else {
    module.exports = app
}
