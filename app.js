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
                prisma                 npm install prisma --save (conexão com o BD)
                prisma/client          npm install @prisma/client --save  (Executa scripts no BD)

        *********** Após a instalação do prisma e do prisma client, devemos:
                npx prisma init (Inicializar o prisma no projeto)

        Para realizar o sincronismo do prisma com o banco de dados, devemos executar o seguinte comando:
                npx prisma migrate dev     

 * *******************************************************************************************/

//Import das bibliotecas para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


//************************************* USUARIO *******************************************//

app.put('/v1/gymbuddy/usuario/senha', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body


    console.log('entrei')
    let result = await controllerUsuario.atualizarUsuarioSenha(dadosBody, contentType)

    response.status(result.status_code)
    response.json(result)

})


app.post('/v1/gymbuddy/usuario', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let result = await controllerUsuario.inserirUsuario(dadosBody, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/usuario', cors(), async function(request, response){

    let result = await controllerUsuario.listarUsuario()

    response.status(result.status_code)
    response.json(result)

})

app.get('/v1/gymbuddy/usuario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerUsuario.buscarUsuario(search_id)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/gymbuddy/usuario/:search_id', cors(), async function(request, response){

    let search_id = request.params.search_id

    let result = await controllerUsuario.excluirUsuario(search_id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/gymbuddy/usuario/:search_id', cors(), bodyParserJSON, async function(request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body

    let search_id = request.params.search_id

    let result = await controllerUsuario.atualizarUsuario(dadosBody, search_id, contentType)

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

    response.status(result.status_code)
    response.json(result)

})

app.listen('8080', function(){
    console.log('API aguardando requisições...')
})