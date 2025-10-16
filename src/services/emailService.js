const nodemailer = require('nodemailer')

const createTransporter = () => {
    const emailUser = process.env.EMAIL_USER
    if (!emailUser) {
        throw new Error('EMAIL_USER não configurado no arquivo .env')
    }

    // Configuração específica para Gmail
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailUser,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false // Permite conexões sem certificado válido
        }
    })
}

const enviarEmailRecuperacao = async (email, nomeUsuario, codigo) => {
    try {
        const transporter = createTransporter()
        const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Recuperação de Senha - GymBuddy</title>
            <style>
                body { 
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #1a1a1a;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #242424;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    color: #ffffff;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .logo {
                    font-size: 32px;
                    font-weight: bold;
                    color: #dc2626;
                    margin-bottom: 10px;
                }
                .title {
                    font-size: 24px;
                    color: #ffffff;
                    margin-bottom: 30px;
                }
                .codigo-container {
                    background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    margin: 30px 0;
                }
                .codigo {
                    font-size: 36px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    color: #ffffff;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .warning {
                    background: rgba(220, 38, 38, 0.1);
                    border-left: 4px solid #dc2626;
                    padding: 15px;
                    margin: 20px 0;
                    border-radius: 0 5px 5px 0;
                }
                .info-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                }
                .info-list li {
                    margin: 10px 0;
                    padding-left: 25px;
                    position: relative;
                }
                .info-list li:before {
                    content: "•";
                    color: #dc2626;
                    font-size: 20px;
                    position: absolute;
                    left: 0;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    font-size: 14px;
                    color: rgba(255,255,255,0.6);
                }
                .btn {
                    display: inline-block;
                    padding: 15px 30px;
                    background: #dc2626;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    margin: 20px 0;
                    text-transform: uppercase;
                    transition: background 0.3s ease;
                }
                .btn:hover {
                    background: #991b1b;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">💪 GymBuddy</div>
                    <div class="title">Recuperação de Senha</div>
                </div>
                
                <p>Olá, <strong>${nomeUsuario}</strong>!</p>
                
                <p>Você solicitou a recuperação da sua senha. Use o código abaixo para continuar o processo:</p>
                
                <div class="codigo-container">
                    <div class="codigo">${codigo}</div>
                </div>
                
                <div class="warning">
                    <strong>⚠️ Importante:</strong>
                    <ul class="info-list">
                        <li>Este código expira em 15 minutos</li>
                        <li>Não compartilhe este código com ninguém</li>
                        <li>Se você não solicitou esta recuperação, ignore este email</li>
                    </ul>
                </div>
                
                <p style="text-align: center;">
                    <a href="#" class="btn">Redefinir Senha</a>
                </p>
                
                <div class="footer">
                    <p>Este é um email automático, não responda.</p>
                    <p><strong>GymBuddy</strong> - Seu parceiro da academia pronto para a ação</p>
                </div>
            </div>
        </body>
        </html>
        `

        const mailOptions = {
            from: `"GymBuddy" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Código de Recuperação de Senha',
            html: htmlTemplate
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('Email enviado com sucesso:', info.messageId)
        
        return {
            sucesso: true,
            messageId: info.messageId,
            message: 'Email enviado com sucesso'
        }

    } catch (error) {
        console.error('Erro detalhado ao enviar email:', error)
        return {
            sucesso: false,
            erro: error.message,
            message: 'Erro ao enviar email'
        }
    }
}

module.exports = {
    enviarEmailRecuperacao
}
