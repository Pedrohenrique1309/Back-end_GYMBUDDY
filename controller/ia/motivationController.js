/***************************************************************************************
 * Objetivo: Controller especializado em motivação e suporte emocional
 * Data: 04/11/2024
 * Autor: Sistema personalizado GymBuddy
 * Versão: 1.0
 * 
 * Descrição: Funcionalidades específicas para motivação e apoio psicológico
 ***************************************************************************************/

const PersonalTrainerIA = require('../../services/personalTrainerIA')
const usuarioDAO = require('../../model/DAO/usuario.js')

const RESPONSE_ERROR_REQUIRED_DATA = { status: 400, status_code: 400, message: 'Existem campos com preenchimento obrigatórios que não foram preenchidos corretamente.' }

/**
 * Gera mensagem motivacional personalizada baseada no progresso do usuário
 */
const gerarMensagemMotivacional = async function(dadosMotivacao) {
    try {
        console.log('[MOTIVAÇÃO] Gerando mensagem motivacional para usuário:', dadosMotivacao.user_id)

        if (!dadosMotivacao.user_id) {
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        const personalTrainer = new PersonalTrainerIA()
        
        // Buscar dados do usuário
        const userData = await personalTrainer.getUserData(dadosMotivacao.user_id)
        
        // Analisar contexto emocional
        const context = dadosMotivacao.context || 'geral'
        const mood = dadosMotivacao.mood || 'neutro' // desanimado, cansado, motivado, etc.
        
        const motivationPrompt = `Como personal trainer experiente e motivador, crie uma mensagem inspiradora e personalizada:

DADOS DO USUÁRIO: ${JSON.stringify(userData, null, 2)}
CONTEXTO: ${context}
ESTADO EMOCIONAL: ${mood}
SITUAÇÃO ESPECÍFICA: ${dadosMotivacao.situation || 'Apoio geral'}

Crie uma mensagem que:
1. Seja empática e compreensiva
2. Use o nome do usuário para personalizar
3. Foque nos pontos fortes e conquistas
4. Ofereça perspectiva positiva
5. Sugira próximos passos motivadores
6. Seja encorajadora sem ser excessivamente otimista

Tom: Profissional, amigável e genuinamente motivador.`

        const motivationMessage = await personalTrainer.callAI(motivationPrompt)

        return {
            status: 200,
            status_code: 200,
            message: 'Mensagem motivacional gerada com sucesso',
            data: {
                motivation_message: motivationMessage,
                user_context: {
                    nome: userData?.nome,
                    context: context,
                    mood: mood
                },
                generated_at: new Date().toISOString(),
                type: 'personalized_motivation'
            }
        }

    } catch (error) {
        console.log('[MOTIVAÇÃO] ERROR:', error.message)
        
        return {
            status: 200,
            status_code: 200,
            message: 'Mensagem motivacional de fallback',
            data: {
                motivation_message: getGenericMotivationMessage(dadosMotivacao.mood),
                type: 'generic_motivation'
            }
        }
    }
}

/**
 * Avalia progresso do usuário e gera insights motivacionais
 */
const avaliarProgressoUsuario = async function(dadosProgresso) {
    try {
        console.log('[AVALIAÇÃO PROGRESSO] Avaliando progresso do usuário:', dadosProgresso.user_id)

        if (!dadosProgresso.user_id) {
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        const personalTrainer = new PersonalTrainerIA()
        const userData = await personalTrainer.getUserData(dadosProgresso.user_id)

        // Dados de progresso fornecidos
        const progressData = {
            peso_anterior: dadosProgresso.peso_anterior,
            peso_atual: userData?.peso,
            objetivo: dadosProgresso.objetivo || 'melhoria_geral',
            tempo_treinando: dadosProgresso.tempo_treinando || 'recente',
            conquistas: dadosProgresso.conquistas || []
        }

        const evaluationPrompt = `Como personal trainer especialista, avalie o progresso deste cliente:

DADOS ATUAIS: ${JSON.stringify(userData, null, 2)}
DADOS DE PROGRESSO: ${JSON.stringify(progressData, null, 2)}

Forneça uma avaliação completa incluindo:
1. Análise do progresso físico
2. Pontos positivos e conquistas
3. Áreas que precisam de atenção
4. Ajustes recomendados nos treinos/dieta
5. Objetivos para as próximas semanas
6. Mensagem motivacional específica

Seja específico, construtivo e motivador.`

        const evaluation = await personalTrainer.callAI(evaluationPrompt)

        return {
            status: 200,
            status_code: 200,
            message: 'Avaliação de progresso realizada',
            data: {
                progress_evaluation: evaluation,
                progress_data: progressData,
                current_metrics: userData?.metrics,
                evaluation_date: new Date().toISOString(),
                type: 'progress_evaluation'
            }
        }

    } catch (error) {
        console.log('[AVALIAÇÃO PROGRESSO] ERROR:', error.message)
        
        return {
            status: 500,
            status_code: 500,
            message: 'Erro na avaliação de progresso',
            data: {
                evaluation: 'Continue focado em seus objetivos. Todo progresso é válido, mesmo o que parece pequeno!',
                type: 'fallback_evaluation'
            }
        }
    }
}

/**
 * Chat especializado em questões motivacionais e psicológicas do fitness
 */
const chatMotivacional = async function(dadosChat) {
    try {
        console.log('[CHAT MOTIVACIONAL] Processando conversa motivacional')

        if (!dadosChat.message || !dadosChat.user_id) {
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        const personalTrainer = new PersonalTrainerIA()
        
        // Contexto específico para motivação
        const motivationalContext = {
            ...dadosChat.context,
            focus_area: 'motivation_and_psychology',
            conversation_type: 'supportive_coaching'
        }

        const result = await personalTrainer.processChat(
            dadosChat.user_id,
            dadosChat.message,
            motivationalContext
        )

        if (result.success) {
            return {
                status: 200,
                status_code: 200,
                message: 'Chat motivacional processado',
                data: {
                    ...result,
                    chat_type: 'motivational_support'
                }
            }
        } else {
            return {
                status: 200,
                status_code: 200,
                message: 'Resposta motivacional de apoio',
                data: {
                    response: result.fallbackResponse || getMotivationalFallback(),
                    chat_type: 'motivational_fallback'
                }
            }
        }

    } catch (error) {
        console.log('[CHAT MOTIVACIONAL] ERROR:', error.message)
        
        return {
            status: 200,
            status_code: 200,
            message: 'Resposta de apoio disponível',
            data: {
                response: getMotivationalFallback(),
                chat_type: 'error_support'
            }
        }
    }
}

/**
 * Mensagens motivacionais genéricas baseadas no humor
 */
function getGenericMotivationMessage(mood) {
    const messages = {
        desanimado: `💪 **Ei, não desista!** 

Todo campeão já passou por momentos difíceis. O que te define não é quantas vezes você cai, mas quantas vezes você se levanta.

🎯 **Lembre-se:**
• Cada treino é um investimento em você
• Progresso não é sempre linear
• Você já chegou mais longe do que imagina

**Hoje faça apenas 1% melhor que ontem. Isso já é vitória!** ✨`,

        cansado: `😴 **Sentindo o peso do cansaço?**

Seu corpo está falando com você - e isso é normal! Descanso também faz parte do processo.

🔄 **Estratégias:**
• Priorize o sono (7-9h por noite)
• Hidrate-se bem
• Considere um treino mais leve hoje
• Nutrição adequada = energia renovada

**Escutar seu corpo é sabedoria, não fraqueza!** 🧘‍♂️`,

        motivado: `🔥 **ESSA É A ENERGIA QUE EU QUERO VER!**

Quando estamos motivados, é o momento perfeito para estabelecer novos desafios e elevar o nível!

⚡ **Aproveite esse momento:**
• Defina uma nova meta desafiadora
• Experimente um exercício novo
• Aumente a intensidade gradualmente
• Registre esse sentimento para dias difíceis

**Sua motivação é contagiante! Continue brilhando!** ⭐`,

        neutro: `🎯 **Consistency is key!**

Nem sempre estaremos no pico da motivação, mas a disciplina nos leva longe.

🌱 **Crescimento diário:**
• Pequenas ações consistentes = grandes resultados
• Cada dia é uma nova oportunidade
• Foque no processo, não só no resultado

**Você está no caminho certo. Continue caminhando!** 🚀`
    }

    return messages[mood] || messages.neutro
}

/**
 * Resposta motivacional de fallback
 */
function getMotivationalFallback() {
    return `💪 **Estou aqui para te apoiar!**

Como seu personal trainer virtual, quero que saiba:

✨ **Você não está sozinho(a) nessa jornada**
🎯 **Cada desafio é uma oportunidade de crescer**
🔥 **Sua força é maior do que qualquer obstáculo**

Conte comigo para:
• Planos de treino personalizados
• Orientações nutricionais
• Apoio motivacional diário
• Celebrar suas conquistas

**Qual é o seu próximo objetivo? Vamos conquistá-lo juntos!** 🚀`
}

module.exports = {
    gerarMensagemMotivacional,
    avaliarProgressoUsuario,
    chatMotivacional,
    getGenericMotivationMessage,
    getMotivationalFallback
}
