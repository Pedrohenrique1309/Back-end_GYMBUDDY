/********************************************************** 
 * Controller para gerenciar o CRUD de Recuperação de Senha
 * Data: 09/10/2025
 * Autor: Pedro
 * Versão: 1.0
***********************************************************/

//Importe do aquivo config com as menssagens de retorno
const MESSAGE = require('../../modulo/config')
 
//Importe do nodemailer
const nodemailer = require('nodemailer')

const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth:{
        user: "email@gmail.com",
        pass: "12345678"
    }
})

const configEmail = {
    from: "email@gmail.com",
    to: `${user.email}`,
    subject: "GYMBUDDY - Recupere sua senha",
    html:"<p> SEU CODIGO AQUI <p>", 

}

new Promise((resolve, reject) =>{
    smtp.sendMail(configEmail)
    .then(res => {
        smtp.close()
        return resolve(res)
    }).catch(error => {
        console.log(error)
    })

})