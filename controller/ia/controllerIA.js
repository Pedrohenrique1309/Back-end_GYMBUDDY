/***************************************************************************************
 * Objetivo: Controller para integração com o serviço de IA GymBuddy
 * Data: 04/11/2024
 * Autor: Sistema integrado AgentPyLing
 * Versão: 1.0
 * 
 * Descrição: Gerencia comunicação entre o back-end Node.js e o serviço Python de IA
 ***************************************************************************************/

const axios = require('axios')

// URL do serviço de IA Python (configurável via ambiente)
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:5000'

const RESPONSE_ERROR_INTERNAL_SERVER = { status: 500, status_code: 500, message: 'Erro interno do servidor na comunicação com IA.' }
const RESPONSE_ERROR_REQUIRED_DATA = { status: 400, status_code: 400, message: 'Existem campos com preenchimento obrigatórios que não foram preenchidos corretamente.' }

/**
 * Função para processar chat com IA
 * @param {object} dadosChat - Dados da mensagem de chat
 * @param {string} dadosChat.message - Mensagem do usuário
 * @param {number} dadosChat.user_id - ID do usuário
 * @param {object} dadosChat.context - Contexto adicional (opcional)
 */
const processarChatIA = async function(dadosChat) {
    
    try {
        console.log('[CHAT IA] Processando mensagem:', {
            message: dadosChat.message?.substring(0, 100) + '...',
            user_id: dadosChat.user_id,
            has_context: !!dadosChat.context
        })

        // Validação de dados obrigatórios
        if (!dadosChat.message || !dadosChat.user_id) {
            console.log('[CHAT IA] ERROR: Dados obrigatórios não fornecidos')
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        // Chamada para o serviço Python
        const response = await axios.post(`${AI_SERVICE_URL}/api/ai/chat`, {
            message: dadosChat.message,
            user_id: String(dadosChat.user_id),
            context: dadosChat.context || {}
        }, {
            timeout: 30000, // 30 segundos timeout
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log('[CHAT IA] SUCCESS: Resposta recebida do serviço IA')

        return {
            status: 200,
            status_code: 200,
            message: 'Chat processado com sucesso',
            data: response.data
        }

    } catch (error) {
        console.log('[CHAT IA] CRITICAL ERROR:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        })

        // Retorna erro mais específico baseado no tipo de erro
        if (error.code === 'ECONNREFUSED') {
            return {
                status: 503,
                status_code: 503,
                message: 'Serviço de IA temporariamente indisponível. Tente novamente em alguns instantes.'
            }
        }

        if (error.response?.status === 400) {
            return {
                status: 400,
                status_code: 400,
                message: error.response.data?.detail || 'Dados inválidos para processamento da IA'
            }
        }

        return RESPONSE_ERROR_INTERNAL_SERVER
    }
}

/**
 * Função para analisar perfil do usuário e calcular métricas
 * @param {object} dadosPerfil - Dados do perfil do usuário
 */
const analisarPerfilUsuario = async function(dadosPerfil) {
    
    try {
        console.log('[ANÁLISE PERFIL] Analisando perfil do usuário:', dadosPerfil.user_id)

        // Chamada para o serviço Python
        const response = await axios.post(`${AI_SERVICE_URL}/api/ai/analyze-profile`, dadosPerfil, {
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log('[ANÁLISE PERFIL] SUCCESS: Métricas calculadas')

        return {
            status: 200,
            status_code: 200,
            message: 'Perfil analisado com sucesso',
            data: response.data
        }

    } catch (error) {
        console.log('[ANÁLISE PERFIL] ERROR:', error.message)
        return RESPONSE_ERROR_INTERNAL_SERVER
    }
}

/**
 * Função para gerar plano de treino personalizado
 * @param {object} dadosPlano - Dados para geração do plano
 * @param {object} dadosPlano.profile - Perfil do usuário
 * @param {object} dadosPlano.preferences - Preferências de treino
 */
const gerarPlanoTreino = async function(dadosPlano) {
    
    try {
        console.log('[PLANO TREINO] Gerando plano para usuário')

        const response = await axios.post(`${AI_SERVICE_URL}/api/ai/workout-plan`, dadosPlano, {
            timeout: 20000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log('[PLANO TREINO] SUCCESS: Plano gerado')

        return {
            status: 200,
            status_code: 200,
            message: 'Plano de treino gerado com sucesso',
            data: response.data
        }

    } catch (error) {
        console.log('[PLANO TREINO] ERROR:', error.message)
        return RESPONSE_ERROR_INTERNAL_SERVER
    }
}

/**
 * Função para gerar plano nutricional personalizado
 * @param {object} dadosNutricao - Dados para geração do plano
 * @param {object} dadosNutricao.profile - Perfil do usuário
 * @param {object} dadosNutricao.metrics - Métricas calculadas
 */
const gerarPlanoNutricional = async function(dadosNutricao) {
    
    try {
        console.log('[PLANO NUTRIÇÃO] Gerando plano nutricional')

        const response = await axios.post(`${AI_SERVICE_URL}/api/ai/nutrition-plan`, dadosNutricao, {
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log('[PLANO NUTRIÇÃO] SUCCESS: Plano nutricional gerado')

        return {
            status: 200,
            status_code: 200,
            message: 'Plano nutricional gerado com sucesso',
            data: response.data
        }

    } catch (error) {
        console.log('[PLANO NUTRIÇÃO] ERROR:', error.message)
        return RESPONSE_ERROR_INTERNAL_SERVER
    }
}

/**
 * Função para verificar status do serviço de IA
 */
const verificarStatusIA = async function() {
    
    try {
        const response = await axios.get(`${AI_SERVICE_URL}/health`, {
            timeout: 5000
        })

        return {
            status: 200,
            status_code: 200,
            message: 'Serviço de IA operacional',
            data: {
                ai_service_status: 'online',
                ai_service_url: AI_SERVICE_URL,
                response_time: Date.now(),
                service_info: response.data
            }
        }

    } catch (error) {
        console.log('[STATUS IA] ERROR: Serviço indisponível')
        
        return {
            status: 503,
            status_code: 503,
            message: 'Serviço de IA indisponível',
            data: {
                ai_service_status: 'offline',
                ai_service_url: AI_SERVICE_URL,
                error: error.message
            }
        }
    }
}

module.exports = {
    processarChatIA,
    analisarPerfilUsuario,
    gerarPlanoTreino,
    gerarPlanoNutricional,
    verificarStatusIA
}
