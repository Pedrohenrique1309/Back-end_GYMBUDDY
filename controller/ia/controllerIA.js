/***************************************************************************************
 * Objetivo: Controller para integração com o serviço de IA GymBuddy
 * Data: 04/11/2024
 * Autor: Sistema integrado AgentPyLing - Atualizado para Personal Trainer IA
 * Versão: 2.0
 * 
 * Descrição: Gerencia comunicação com IA personalizada que acessa dados do usuário
 ***************************************************************************************/

const axios = require('axios')
const PersonalTrainerIA = require('../../services/personalTrainerIA')

// URL do serviço de IA Python (configurável via ambiente) - mantido para compatibilidade
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:5000'

const RESPONSE_ERROR_INTERNAL_SERVER = { status: 500, status_code: 500, message: 'Erro interno do servidor na comunicação com IA.' }
const RESPONSE_ERROR_REQUIRED_DATA = { status: 400, status_code: 400, message: 'Existem campos com preenchimento obrigatórios que não foram preenchidos corretamente.' }

/**
 * Função para processar chat com IA personalizada (Personal Trainer)
 * @param {object} dadosChat - Dados da mensagem de chat
 * @param {string} dadosChat.message - Mensagem do usuário
 * @param {number} dadosChat.user_id - ID do usuário
 * @param {object} dadosChat.context - Contexto adicional (opcional)
 */
const processarChatIA = async function(dadosChat) {
    
    try {
        console.log('[PERSONAL TRAINER IA] Processando mensagem personalizada:', {
            message: dadosChat.message?.substring(0, 100) + '...',
            user_id: dadosChat.user_id,
            has_context: !!dadosChat.context
        })

        // Validação de dados obrigatórios
        if (!dadosChat.message || !dadosChat.user_id) {
            console.log('[PERSONAL TRAINER IA] ERROR: Dados obrigatórios não fornecidos')
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        // Inicializar Personal Trainer IA
        const personalTrainer = new PersonalTrainerIA()
        
        // Processar chat com dados personalizados do usuário
        const aiResult = await personalTrainer.processChat(
            dadosChat.user_id,
            dadosChat.message,
            dadosChat.context || {}
        )

        if (aiResult.success) {
            console.log('[PERSONAL TRAINER IA] SUCCESS: Resposta personalizada gerada')
            
            return {
                status: 200,
                status_code: 200,
                message: 'Chat personalizado processado com sucesso',
                data: {
                    response: aiResult.response,
                    user_context: aiResult.userContext,
                    metadata: aiResult.metadata,
                    ai_type: 'personal_trainer',
                    personalized: true
                }
            }
        } else {
            // Fallback - tenta serviço Python se disponível
            console.log('[PERSONAL TRAINER IA] Usando fallback para serviço Python')
            
            try {
                const response = await axios.post(`${AI_SERVICE_URL}/api/ai/chat`, {
                    message: dadosChat.message,
                    user_id: String(dadosChat.user_id),
                    context: dadosChat.context || {}
                }, {
                    timeout: 15000,
                    headers: { 'Content-Type': 'application/json' }
                })

                return {
                    status: 200,
                    status_code: 200,
                    message: 'Chat processado via fallback',
                    data: {
                        ...response.data,
                        ai_type: 'fallback_service',
                        personalized: false
                    }
                }
            } catch (fallbackError) {
                // Retorna resposta de fallback local
                return {
                    status: 200,
                    status_code: 200,
                    message: 'Resposta de fallback local',
                    data: {
                        response: aiResult.fallbackResponse,
                        ai_type: 'local_fallback',
                        personalized: false
                    }
                }
            }
        }

    } catch (error) {
        console.log('[PERSONAL TRAINER IA] CRITICAL ERROR:', {
            message: error.message,
            stack: error.stack
        })

        return {
            status: 500,
            status_code: 500,
            message: 'Erro interno no processamento da IA personalizada',
            data: {
                response: '🏋️ Desculpe, estou passando por uma atualização. Tente novamente em alguns instantes!',
                ai_type: 'error_fallback',
                personalized: false
            }
        }
    }
}

/**
 * Função para analisar perfil do usuário e calcular métricas personalizadas
 * @param {object} dadosPerfil - Dados do perfil do usuário
 */
const analisarPerfilUsuario = async function(dadosPerfil) {
    
    try {
        console.log('[ANÁLISE PERFIL PERSONALIZADA] Analisando perfil do usuário:', dadosPerfil.user_id)

        // Inicializar Personal Trainer IA
        const personalTrainer = new PersonalTrainerIA()
        
        // Buscar dados completos do usuário
        const userData = await personalTrainer.getUserData(dadosPerfil.user_id)
        
        if (!userData) {
            return {
                status: 404,
                status_code: 404,
                message: 'Usuário não encontrado ou dados incompletos',
                data: {
                    analysis: 'Para uma análise completa, complete seu perfil com peso, altura e outros dados.',
                    recommendations: ['Complete seu perfil no aplicativo', 'Adicione peso e altura atuais', 'Descreva seus objetivos']
                }
            }
        }

        // Gerar análise personalizada via IA  
        const analysisPrompt = `Analise completamente este perfil de usuário e forneça insights detalhados:

DADOS: ${JSON.stringify(userData, null, 2)}

Forneça uma análise estruturada incluindo:
1. Estado físico atual (IMC, classificação)
2. Pontos fortes e áreas de melhoria
3. Recomendações específicas
4. Objetivos sugeridos
5. Próximos passos recomendados

Seja específico e motivador.`

        const analysisResult = await personalTrainer.callAI(analysisPrompt)

        console.log('[ANÁLISE PERFIL PERSONALIZADA] SUCCESS: Análise detalhada gerada')

        return {
            status: 200,
            status_code: 200,
            message: 'Perfil analisado com IA personalizada',
            data: {
                user_data: userData,
                ai_analysis: analysisResult,
                metrics: userData.metrics,
                user_level: personalTrainer.determineUserLevel(userData),
                recommendations: personalTrainer.getWorkoutRecommendations(userData),
                analysis_type: 'ai_personalized'
            }
        }

    } catch (error) {
        console.log('[ANÁLISE PERFIL PERSONALIZADA] ERROR:', error.message)
        
        // Fallback para análise básica
        return {
            status: 200,
            status_code: 200,
            message: 'Análise básica realizada (fallback)',
            data: {
                analysis: 'Análise básica: Complete seu perfil para receber uma análise detalhada personalizada.',
                recommendations: ['Adicione peso e altura', 'Descreva seus objetivos', 'Inclua informações sobre experiência'],
                analysis_type: 'basic_fallback'
            }
        }
    }
}

/**
 * Função para gerar plano de treino personalizado com IA
 * @param {object} dadosPlano - Dados para geração do plano
 * @param {number} dadosPlano.user_id - ID do usuário
 * @param {object} dadosPlano.preferences - Preferências de treino
 */
const gerarPlanoTreino = async function(dadosPlano) {
    
    try {
        console.log('[PLANO TREINO PERSONALIZADO] Gerando plano para usuário:', dadosPlano.user_id)

        // Validação
        if (!dadosPlano.user_id) {
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        // Inicializar Personal Trainer IA
        const personalTrainer = new PersonalTrainerIA()
        
        // Gerar plano personalizado
        const workoutResult = await personalTrainer.generateWorkoutPlan(
            dadosPlano.user_id,
            dadosPlano.preferences || {}
        )

        if (workoutResult.success) {
            console.log('[PLANO TREINO PERSONALIZADO] SUCCESS: Plano personalizado gerado')

            return {
                status: 200,
                status_code: 200,
                message: 'Plano de treino personalizado gerado com sucesso',
                data: {
                    workout_plan: workoutResult.workoutPlan,
                    user_level: workoutResult.userLevel,
                    recommendations: workoutResult.recommendations,
                    generated_by: 'personal_trainer_ai',
                    timestamp: new Date().toISOString()
                }
            }
        } else {
            // Fallback para plano genérico
            console.log('[PLANO TREINO PERSONALIZADO] Gerando plano fallback')
            
            return {
                status: 200,
                status_code: 200,
                message: 'Plano de treino básico gerado',
                data: {
                    workout_plan: getGenericWorkoutPlan(),
                    generated_by: 'fallback_generic',
                    note: 'Complete seu perfil para receber um plano mais personalizado'
                }
            }
        }

    } catch (error) {
        console.log('[PLANO TREINO PERSONALIZADO] ERROR:', error.message)
        return {
            status: 500,
            status_code: 500,
            message: 'Erro ao gerar plano de treino',
            data: {
                workout_plan: getGenericWorkoutPlan(),
                generated_by: 'error_fallback'
            }
        }
    }
}

/**
 * Função para gerar plano nutricional personalizado com IA
 * @param {object} dadosNutricao - Dados para geração do plano
 * @param {number} dadosNutricao.user_id - ID do usuário
 * @param {string} dadosNutricao.objective - Objetivo (emagrecimento, ganho_massa, manutencao)
 */
const gerarPlanoNutricional = async function(dadosNutricao) {
    
    try {
        console.log('[PLANO NUTRIÇÃO PERSONALIZADO] Gerando plano nutricional para:', dadosNutricao.user_id)

        // Validação
        if (!dadosNutricao.user_id) {
            return RESPONSE_ERROR_REQUIRED_DATA
        }

        // Inicializar Personal Trainer IA
        const personalTrainer = new PersonalTrainerIA()
        
        // Gerar plano nutricional personalizado
        const nutritionResult = await personalTrainer.generateNutritionPlan(
            dadosNutricao.user_id,
            dadosNutricao.objective || 'manutencao'
        )

        if (nutritionResult.success) {
            console.log('[PLANO NUTRIÇÃO PERSONALIZADO] SUCCESS: Plano nutricional personalizado gerado')

            return {
                status: 200,
                status_code: 200,
                message: 'Plano nutricional personalizado gerado com sucesso',
                data: {
                    nutrition_plan: nutritionResult.nutritionPlan,
                    target_calories: nutritionResult.targetCalories,
                    objective: nutritionResult.objective,
                    user_metrics: nutritionResult.userMetrics,
                    generated_by: 'personal_trainer_ai',
                    timestamp: new Date().toISOString()
                }
            }
        } else {
            // Fallback para plano genérico
            console.log('[PLANO NUTRIÇÃO PERSONALIZADO] Gerando plano fallback')
            
            return {
                status: 200,
                status_code: 200,
                message: 'Plano nutricional básico gerado',
                data: {
                    nutrition_plan: getGenericNutritionPlan(),
                    generated_by: 'fallback_generic',
                    note: 'Complete seu perfil para receber um plano mais personalizado'
                }
            }
        }

    } catch (error) {
        console.log('[PLANO NUTRIÇÃO PERSONALIZADO] ERROR:', error.message)
        return {
            status: 500,
            status_code: 500,
            message: 'Erro ao gerar plano nutricional',
            data: {
                nutrition_plan: getGenericNutritionPlan(),
                generated_by: 'error_fallback'
            }
        }
    }
}

/**
 * Função para verificar status do serviço de IA personalizada
 */
const verificarStatusIA = async function() {
    
    try {
        // Testar Personal Trainer IA
        const personalTrainer = new PersonalTrainerIA()
        
        // Teste básico
        const testResult = await personalTrainer.callAI("Responda apenas 'OK' se estiver funcionando")
        
        const aiStatus = {
            personal_trainer_ai: 'online',
            hugging_face_integration: !!process.env.HF_TOKEN,
            database_access: true,
            test_response: testResult?.substring(0, 50) || 'Sem resposta'
        }

        // Tentar também o serviço Python (fallback)
        try {
            const pythonResponse = await axios.get(`${AI_SERVICE_URL}/health`, { timeout: 3000 })
            aiStatus.python_service = 'online'
            aiStatus.python_url = AI_SERVICE_URL
        } catch {
            aiStatus.python_service = 'offline'
        }

        return {
            status: 200,
            status_code: 200,
            message: 'Serviços de IA verificados',
            data: {
                timestamp: new Date().toISOString(),
                ...aiStatus
            }
        }

    } catch (error) {
        console.log('[STATUS IA PERSONALIZADA] ERROR:', error.message)
        
        return {
            status: 503,
            status_code: 503,
            message: 'Erro na verificação dos serviços de IA',
            data: {
                personal_trainer_ai: 'error',
                error: error.message,
                timestamp: new Date().toISOString()
            }
        }
    }
}

/**
 * Função auxiliar para plano de treino genérico (fallback)
 */
function getGenericWorkoutPlan() {
    return `🏋️ **PLANO DE TREINO BÁSICO**

**DIA 1 - SUPERIOR**
• Flexão de braço: 3x8-12
• Remada com elástico: 3x10-15  
• Desenvolvimento: 3x8-12
• Rosca bíceps: 3x10-15

**DIA 2 - INFERIOR**
• Agachamento: 3x12-15
• Afundo: 3x10 cada perna
• Panturrilha: 3x15-20
• Glúteo bridge: 3x12-15

**DIA 3 - CARDIO**
• Caminhada/corrida: 30min
• Abdominais: 3x15
• Prancha: 3x30seg

💡 **Complete seu perfil para um plano personalizado!**`
}

/**
 * Função auxiliar para plano nutricional genérico (fallback)
 */
function getGenericNutritionPlan() {
    return `🥗 **ORIENTAÇÕES NUTRICIONAIS BÁSICAS**

**CAFÉ DA MANHÃ**
• Frutas + aveia + proteína (ovos/iogurte)
• Hidratação: 2 copos de água

**ALMOÇO**
• Proteína magra + carboidrato integral + vegetais
• Salada verde variada

**LANCHE**
• Fruta + oleaginosas (castanhas/amêndoas)

**JANTAR**
• Proteína + vegetais + carboidrato moderado

**DICAS GERAIS:**
• 2-3L de água por dia
• Evite ultraprocessados
• Coma a cada 3-4h

💡 **Complete seu perfil para cálculos personalizados!**`
}

module.exports = {
    processarChatIA,
    analisarPerfilUsuario,
    gerarPlanoTreino,
    gerarPlanoNutricional,
    verificarStatusIA,
    getGenericWorkoutPlan,
    getGenericNutritionPlan
}
