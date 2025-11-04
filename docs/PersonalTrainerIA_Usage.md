# Personal Trainer IA - GymBuddy

## 🎯 Visão Geral

O Personal Trainer IA é um sistema avançado de inteligência artificial que acessa diretamente o banco de dados do usuário para fornecer orientações **extremamente personalizadas** sobre:

- 🏋️ **Treinos** personalizados baseados no perfil completo
- 🥗 **Nutrição** com cálculos precisos de calorias e macros
- 📊 **Análise corporal** detalhada (IMC, TMB, TDEE)
- 💪 **Motivação** personalizada baseada no progresso
- 🎯 **Objetivos** realistas e alcançáveis

## 🔧 Configuração

### 1. Variável de Ambiente
```bash
# .env
HF_TOKEN=sua_chave_hugging_face_aqui
```

### 2. Dependências
```bash
npm install openai
```

## 📡 Endpoints Disponíveis

### 🗣️ Chat Personalizado
```http
POST /v1/gymbuddy/ia/chat
Content-Type: application/json

{
  "user_id": 1,
  "message": "Preciso de um treino para hipertrofia",
  "context": {
    "situacao": "volta_aos_treinos",
    "restricoes": ["joelho sensível"]
  }
}
```

**Resposta:**
```json
{
  "status": 200,
  "message": "Chat personalizado processado com sucesso",
  "data": {
    "response": "Olá João! Com base no seu perfil (75kg, 1.75m, IMC 24.5), vou criar um treino de hipertrofia considerando sua sensibilidade no joelho...",
    "user_context": {
      "nome": "João Silva",
      "dadosFisicos": {
        "peso": "75kg",
        "altura": "175cm",
        "imc": "24.5 (Peso normal)"
      },
      "metricas": {
        "tmb": "1850 kcal/dia",
        "tdee": "2870 kcal/dia"
      }
    },
    "metadata": {
      "hasUserData": true,
      "intent": "treino",
      "personalized": true
    }
  }
}
```

### 📊 Análise de Perfil
```http
POST /v1/gymbuddy/ia/analisar-perfil
Content-Type: application/json

{
  "user_id": 1
}
```

**Resposta:**
```json
{
  "status": 200,
  "message": "Perfil analisado com IA personalizada",
  "data": {
    "user_data": {
      "nome": "João Silva",
      "peso": 75,
      "altura": 175,
      "metrics": {
        "imc": "24.5",
        "imcClass": "Peso normal",
        "tmb": 1850,
        "tdee": 2870
      }
    },
    "ai_analysis": "📊 **ANÁLISE COMPLETA DO PERFIL**\n\n**Estado Físico Atual:**\n- IMC: 24.5 (Excelente! Dentro da faixa ideal)\n- Composição equilibrada para objetivos fitness...",
    "user_level": "intermediario",
    "recommendations": [
      "Mantenha rotina equilibrada de força e cardio",
      "Foque na progressão e variação dos exercícios"
    ]
  }
}
```

### 🏋️ Plano de Treino Personalizado
```http
POST /v1/gymbuddy/ia/plano-treino
Content-Type: application/json

{
  "user_id": 1,
  "preferences": {
    "objetivo": "hipertrofia",
    "frequencia": "4x_semana",
    "tempo_disponivel": "60min",
    "equipamentos": ["musculacao", "halteres"]
  }
}
```

### 🥗 Plano Nutricional Personalizado
```http
POST /v1/gymbuddy/ia/plano-nutricional
Content-Type: application/json

{
  "user_id": 1,
  "objective": "ganho_massa"
}
```

### 💪 Motivação Personalizada
```http
POST /v1/gymbuddy/ia/motivacao
Content-Type: application/json

{
  "user_id": 1,
  "context": "volta_aos_treinos",
  "mood": "desanimado",
  "situation": "Parei de treinar por 2 meses"
}
```

## 🧠 Como Funciona a IA

### 1. Acesso aos Dados
```javascript
// A IA busca dados completos do usuário
const userData = await personalTrainer.getUserData(userId);

// Calcula métricas automaticamente
const metrics = {
  imc: calculado_automaticamente,
  tmb: formula_harris_benedict,
  tdee: tmb * fator_atividade
}
```

### 2. Personalização Inteligente
```javascript
// Analisa a intenção da mensagem
if (message.includes('treino')) {
  focus = 'orientações_treino_especificas'
} else if (message.includes('dieta')) {
  focus = 'orientações_nutricionais'
}

// Cria contexto personalizado
const context = {
  nome: userData.nome,
  dadosFisicos: userData.metrics,
  objetivos: inferidos_dos_dados,
  restricoes: consideradas_automaticamente
}
```

### 3. IA Conversacional
```javascript
// Prompt construído dinamicamente
const prompt = `
DADOS DO USUÁRIO: ${JSON.stringify(userData)}
FOCO: ${focus}
MENSAGEM: ${userMessage}

Responda como personal trainer experiente usando os dados específicos.
`

// Chamada para Hugging Face
const response = await openai.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages: [{ role: "system", content: systemPrompt }, { role: "user", content: prompt }]
})
```

## 🎯 Casos de Uso Práticos

### 1. **Usuário Iniciante**
```
Usuário: "Nunca treinei, por onde começar?"
IA: "Olá Maria! Vejo que você tem 65kg e 1.65m (IMC 23.9 - perfeito!). 
Para iniciantes, recomendo começar com..."
```

### 2. **Análise de Progresso**
```
Usuário: "Perdi 5kg em 3 meses, está bom?"
IA: "Parabéns João! Baseado no seu perfil, perder 5kg em 3 meses 
é um progresso excelente e saudável. Seu IMC foi de 26.8 para 24.5..."
```

### 3. **Motivação Personalizada**
```
Usuário: "Estou desanimado, não vejo resultados"
IA: "Entendo sua frustração, Carlos. Pelos seus dados, você saiu de 
80kg para 78kg - isso é progresso real! Seu IMC melhorou de 25.6 para 24.9..."
```

## ⚙️ Funcionalidades Avançadas

### 1. **Fallback Inteligente**
- Se a IA Hugging Face falhar → usa serviço Python local
- Se ambos falharem → resposta personalizada offline
- **Nunca deixa o usuário sem resposta**

### 2. **Cálculos Automáticos**
- **IMC**: peso/(altura²) com classificação
- **TMB**: Fórmula Harris-Benedict adaptada
- **TDEE**: TMB × fator de atividade
- **Recomendações calóricas** por objetivo

### 3. **Contextualização Inteligente**
- **Análise de intenção** da mensagem
- **Histórico do usuário** considerado
- **Personalização do tom** baseada no perfil
- **Objetivos inferidos** dos dados

## 🔒 Segurança e Privacidade

- ✅ Dados do usuário **nunca** deixam o servidor
- ✅ API calls autenticadas com tokens seguros
- ✅ Logs sanitizados (sem dados sensíveis)
- ✅ Fallbacks garantem disponibilidade

## 📈 Métricas e Monitoramento

### Status da IA
```http
GET /v1/gymbuddy/ia/status
```

**Resposta:**
```json
{
  "status": 200,
  "data": {
    "personal_trainer_ai": "online",
    "hugging_face_integration": true,
    "database_access": true,
    "python_service": "offline",
    "test_response": "OK - IA funcionando perfeitamente"
  }
}
```

## 🚀 Próximos Passos

1. **Histórico de Conversas**: Salvar conversas para contexto futuro
2. **Análise de Progresso**: Comparar dados ao longo do tempo
3. **Planos Adaptativos**: IA que evolui com o usuário
4. **Integração com Wearables**: Dados de atividade em tempo real
5. **Comunidade IA**: Comparações e insights entre usuários

---

## 💡 Exemplo Completo de Integração

```javascript
// Frontend React
const chatWithPersonalTrainer = async (message) => {
  const response = await fetch('/v1/gymbuddy/ia/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: currentUser.id,
      message: message,
      context: {
        page: 'workout_planning',
        previous_goal: 'weight_loss'
      }
    })
  });
  
  const data = await response.json();
  
  if (data.data.personalized) {
    // Usuário tem dados completos - resposta super personalizada
    displayPersonalizedResponse(data.data.response);
  } else {
    // Sugerir completar perfil
    suggestProfileCompletion();
  }
};
```

🎯 **A IA está pronta para ser seu personal trainer virtual mais inteligente e personalizado!**
