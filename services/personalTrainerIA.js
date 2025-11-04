/***************************************************************************************
 * Objetivo: Serviço de IA Personal Trainer com acesso direto ao banco de dados
 * Data: 04/11/2024
 * Autor: Sistema personalizado GymBuddy
 * Versão: 2.0
 * 
 * Descrição: Personal trainer virtual que analisa dados reais do usuário para
 * fornecer orientações personalizadas sobre treino, nutrição e motivação
 ***************************************************************************************/

const { OpenAI } = require("openai");
const usuarioDAO = require('../model/DAO/usuario.js');

// Configuração do cliente OpenAI com Hugging Face
const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN,
});

/**
 * Classe PersonalTrainerIA - IA especializada em fitness com acesso ao banco
 */
class PersonalTrainerIA {
    
    constructor() {
        this.model = "openai/gpt-oss-20b";
        this.systemPrompt = this.buildSystemPrompt();
    }

    /**
     * Constrói o prompt base do personal trainer
     */
    buildSystemPrompt() {
        return `Você é GymBuddy, um personal trainer virtual especializado e experiente. 

PERSONALIDADE E PAPEL:
- Profissional de educação física qualificado e motivador
- Conhecimento especializado em treino, nutrição e desenvolvimento físico
- Comunica-se de forma amigável, encorajadora e profissional
- Adapta linguagem ao nível do usuário (iniciante, intermediário, avançado)
- Sempre foca na segurança e progressão gradual

CAPACIDADES PRINCIPAIS:
1. 🏋️ TREINOS: Criar e ajustar planos de treino baseados no perfil completo
2. 🥗 NUTRIÇÃO: Planos alimentares personalizados com base em objetivos e dados físicos
3. 📊 ANÁLISE: Interpretação de dados corporais (IMC, percentual de gordura, etc.)
4. 💪 MOTIVAÇÃO: Encorajamento personalizado baseado no progresso individual
5. 🎯 OBJETIVOS: Estabelecimento de metas realistas e alcançáveis

DIRETRIZES IMPORTANTES:
- SEMPRE considere os dados físicos atuais do usuário
- Personalize completamente as orientações baseadas no histórico
- Seja específico com exercícios, séries, repetições e cargas
- Inclua orientações de segurança e técnica
- Monitore e celebre progressos
- Nunca faça diagnósticos médicos - direcione para profissionais quando necessário
- Não fale nada que o usuário não tenha pedido

FORMATO DE RESPOSTA:
- Não use emojis
- Estruture respostas em seções claras
- Inclua dicas práticas e aplicáveis
- Finalize sempre com encorajamento personalizado
- Sempre responda em portugues e o que o usuario pedir

Você tem acesso aos dados completos do perfil do usuário para fornecer orientações extremamente personalizadas.`;
    }

    /**
     * Busca dados completos do usuário no banco
     */
    async getUserData(userId) {
        try {
            console.log(`[PERSONAL TRAINER IA] Buscando dados do usuário ${userId}`);
            
            const userData = await usuarioDAO.selectByUsuario(userId);
            
            if (userData && userData.length > 0) {
                const user = userData[0];
                
                // Calcula métricas adicionais
                const metrics = this.calculateMetrics(user);
                
                return {
                    ...user,
                    metrics
                };
            }
            
            return null;
        } catch (error) {
            console.log(`[PERSONAL TRAINER IA] Erro ao buscar dados: ${error.message}`);
            return null;
        }
    }

    /**
     * Calcula métricas avançadas baseadas nos dados do usuário
     */
    calculateMetrics(user) {
        const metrics = {};
        
        if (user.peso && user.altura) {
            // IMC
            const alturaM = user.altura / 100;
            metrics.imc = (user.peso / (alturaM * alturaM)).toFixed(1);
            
            // Classificação IMC
            const imc = parseFloat(metrics.imc);
            if (imc < 18.5) metrics.imcClass = "Abaixo do peso";
            else if (imc < 25) metrics.imcClass = "Peso normal";
            else if (imc < 30) metrics.imcClass = "Sobrepeso";
            else metrics.imcClass = "Obesidade";
            
            // TMB aproximada (usando fórmula de Harris-Benedict simplificada)
            // Assumindo sexo masculino por padrão - em versão futura, adicionar campo sexo
            metrics.tmb = Math.round(88.362 + (13.397 * user.peso) + (4.799 * user.altura) - (5.677 * 30)); // idade estimada 30
            
            // TDEE (assumindo atividade moderada)
            metrics.tdee = Math.round(metrics.tmb * 1.55);
        }

        return metrics;
    }

    /**
     * Cria contexto personalizado baseado nos dados do usuário
     */
    createPersonalizedContext(userData, userMessage) {
        if (!userData) {
            return {
                context: "Usuário sem dados cadastrais completos",
                needsData: true
            };
        }

        const context = {
            nome: userData.nome,
            nickname: userData.nickname,
            dadosFisicos: {
                peso: userData.peso ? `${userData.peso}kg` : "Não informado",
                altura: userData.altura ? `${userData.altura}cm` : "Não informado",
                imc: userData.metrics?.imc ? `${userData.metrics.imc} (${userData.metrics.imcClass})` : "Não calculado"
            },
            metricas: userData.metrics ? {
                tmb: `${userData.metrics.tmb} kcal/dia`,
                tdee: `${userData.metrics.tdee} kcal/dia`
            } : null,
            localizacao: userData.localizacao || "Não informado",
            descricao: userData.descricao || "Sem descrição adicional",
            context: `Este é ${userData.nome} (${userData.nickname || 'sem apelido'}). `,
            needsData: false
        };

        // Adiciona contexto específico baseado na mensagem
        const messageContext = this.analyzeMessageIntent(userMessage);
        context.intent = messageContext;

        return context;
    }

    /**
     * Analisa a intenção da mensagem do usuário
     */
    analyzeMessageIntent(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('treino') || msg.includes('exercício') || msg.includes('musculação')) {
            return { type: 'treino', focus: 'Foco em orientações de treino e exercícios' };
        }
        
        if (msg.includes('dieta') || msg.includes('alimentação') || msg.includes('nutrição') || msg.includes('comer')) {
            return { type: 'nutricao', focus: 'Foco em orientações nutricionais e alimentares' };
        }
        
        if (msg.includes('peso') || msg.includes('emagrecer') || msg.includes('engordar') || msg.includes('ganhar massa')) {
            return { type: 'objetivo', focus: 'Foco em objetivos de mudança corporal' };
        }
        
        if (msg.includes('motivação') || msg.includes('desânimo') || msg.includes('difícil') || msg.includes('cansado')) {
            return { type: 'motivacao', focus: 'Foco em motivação e suporte emocional' };
        }

        return { type: 'geral', focus: 'Orientação geral de fitness e bem-estar' };
    }

    /**
     * Processo principal de chat com IA personalizada
     */
    async processChat(userId, message, additionalContext = {}) {
        try {
            console.log(`[PERSONAL TRAINER IA] Processando chat para usuário ${userId}`);
            
            // 1. Buscar dados do usuário
            const userData = await this.getUserData(userId);
            
            // 2. Criar contexto personalizado
            const personalContext = this.createPersonalizedContext(userData, message);
            
            // 3. Construir mensagem contextualizada
            const contextualizedMessage = this.buildContextualizedMessage(
                message, 
                personalContext, 
                additionalContext
            );

            // 4. Chamar IA
            const aiResponse = await this.callAI(contextualizedMessage);
            
            // 5. Processar e personalizar resposta
            const finalResponse = this.processAIResponse(aiResponse, personalContext);

            console.log(`[PERSONAL TRAINER IA] Chat processado com sucesso`);
            
            return {
                success: true,
                response: finalResponse,
                userContext: personalContext,
                metadata: {
                    hasUserData: !personalContext.needsData,
                    intent: personalContext.intent?.type || 'geral',
                    timestamp: new Date().toISOString()
                }
            };

        } catch (error) {
            console.log(`[PERSONAL TRAINER IA] Erro no processamento: ${error.message}`);
            
            return {
                success: false,
                error: error.message,
                fallbackResponse: this.getFallbackResponse(message)
            };
        }
    }

    /**
     * Constrói mensagem contextualizada para a IA
     */
    buildContextualizedMessage(userMessage, personalContext, additionalContext) {
        let contextMessage = `DADOS DO USUÁRIO:
${personalContext.context}

INFORMAÇÕES FÍSICAS:
- Peso: ${personalContext.dadosFisicos?.peso}
- Altura: ${personalContext.dadosFisicos?.altura}  
- IMC: ${personalContext.dadosFisicos?.imc}`;

        if (personalContext.metricas) {
            contextMessage += `
- TMB (Taxa Metabólica Basal): ${personalContext.metricas.tmb}
- TDEE (Gasto Calórico Diário): ${personalContext.metricas.tdee}`;
        }

        if (personalContext.localizacao !== "Não informado") {
            contextMessage += `
- Localização: ${personalContext.localizacao}`;
        }

        if (personalContext.descricao !== "Sem descrição adicional") {
            contextMessage += `
- Informações adicionais: ${personalContext.descricao}`;
        }

        contextMessage += `

FOCO DA CONVERSA: ${personalContext.intent?.focus}

MENSAGEM DO USUÁRIO: ${userMessage}

Responda como GymBuddy, usando os dados específicos deste usuário para dar orientações completamente personalizadas.`;

        return contextMessage;
    }

    /**
     * Chama a API de IA
     */
    async callAI(message) {
        const chatCompletion = await client.chat.completions.create({
            model: this.model,
            messages: [
                {
                    role: "system",
                    content: this.systemPrompt
                },
                {
                    role: "user", 
                    content: message
                }
            ],
            max_tokens: 1000,
            temperature: 0.7
        });

        return chatCompletion.choices[0].message.content;
    }

    /**
     * Processa a resposta da IA
     */
    processAIResponse(aiResponse, personalContext) {
        // Adiciona assinatura personalizada
        let finalResponse = aiResponse;
        
        if (personalContext.nome) {
            finalResponse += `\n\n💪 Continue firme, ${personalContext.nome}! Estou aqui para te ajudar sempre que precisar.`;
        }

        return finalResponse;
    }

    /**
     * Resposta de fallback quando há erro
     */
    getFallbackResponse(message) {
        return `🏋️ Oi! Sou o GymBuddy, seu personal trainer virtual! 

Estou passando por uma atualização rápida, mas posso te ajudar com:

💪 **Treinos personalizados**
🥗 **Planos nutricionais** 
📊 **Análise de progresso**
🎯 **Definição de objetivos**

Para uma experiência mais personalizada, certifique-se de que seus dados estão completos no perfil (peso, altura, objetivos).

O que gostaria de saber sobre fitness hoje?`;
    }

    /**
     * Gera plano de treino personalizado
     */
    async generateWorkoutPlan(userId, preferences = {}) {
        try {
            const userData = await this.getUserData(userId);
            const personalContext = this.createPersonalizedContext(userData, "gerar plano de treino");

            const prompt = `Com base nos dados completos do usuário, crie um plano de treino DETALHADO:

DADOS: ${JSON.stringify(personalContext, null, 2)}
PREFERÊNCIAS: ${JSON.stringify(preferences, null, 2)}

Forneça um plano estruturado com:
1. Divisão semanal
2. Exercícios específicos com séries/repetições
3. Orientações de técnica
4. Progressão sugerida
5. Adaptações baseadas no nível atual`;

            const response = await this.callAI(prompt);
            
            return {
                success: true,
                workoutPlan: response,
                userLevel: this.determineUserLevel(userData),
                recommendations: this.getWorkoutRecommendations(userData)
            };

        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Gera plano nutricional personalizado
     */
    async generateNutritionPlan(userId, objective = 'manutencao') {
        try {
            const userData = await this.getUserData(userId);
            const personalContext = this.createPersonalizedContext(userData, "gerar plano nutricional");

            let calorieAdjustment = 0;
            if (objective === 'emagrecimento') calorieAdjustment = -300;
            else if (objective === 'ganho_massa') calorieAdjustment = 300;

            const targetCalories = (userData.metrics?.tdee || 2000) + calorieAdjustment;

            const prompt = `Crie um plano nutricional PERSONALIZADO:

DADOS USUÁRIO: ${JSON.stringify(personalContext, null, 2)}
OBJETIVO: ${objective}
CALORIAS ALVO: ${targetCalories} kcal/dia

Forneça:
1. Distribuição de macronutrientes
2. Sugestões de refeições
3. Timing nutricional
4. Suplementação (se aplicável)
5. Orientações específicas baseadas no IMC e objetivo`;

            const response = await this.callAI(prompt);
            
            return {
                success: true,
                nutritionPlan: response,
                targetCalories,
                objective,
                userMetrics: userData.metrics
            };

        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Determina nível de experiência do usuário
     */
    determineUserLevel(userData) {
        // Lógica simples baseada em IMC e dados disponíveis
        // Em versão futura, incluir histórico de treinos
        
        if (!userData?.metrics?.imc) return 'iniciante';
        
        const imc = parseFloat(userData.metrics.imc);
        if (imc < 18.5 || imc > 30) return 'iniciante';
        if (imc >= 18.5 && imc <= 25) return 'intermediario';
        return 'iniciante';
    }

    /**
     * Fornece recomendações gerais baseadas no perfil
     */
    getWorkoutRecommendations(userData) {
        const recommendations = [];
        
        if (userData?.metrics?.imc) {
            const imc = parseFloat(userData.metrics.imc);
            
            if (imc < 18.5) {
                recommendations.push("Foque em ganho de massa muscular e peso saudável");
                recommendations.push("Inclua exercícios compostos e treino de força");
            } else if (imc > 25) {
                recommendations.push("Combine treino de força com exercícios cardiovasculares");
                recommendations.push("Priorize queima calórica e fortalecimento muscular");
            } else {
                recommendations.push("Mantenha rotina equilibrada de força e cardio");
                recommendations.push("Foque na progressão e variação dos exercícios");
            }
        }

        return recommendations;
    }
}

module.exports = PersonalTrainerIA;
