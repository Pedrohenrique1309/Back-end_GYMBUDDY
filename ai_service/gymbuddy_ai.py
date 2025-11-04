"""
GymBuddy AI - Sistema inteligente otimizado para fitness
Versão compacta do AgentPyLing focada em performance
"""

import os
import json
import asyncio
from typing import Dict, Any, List, Optional
from datetime import datetime
from openai import OpenAI
from dotenv import load_dotenv

# Carrega variáveis de ambiente
load_dotenv()

class GymBuddyAI:
    """
    Sistema de IA otimizado para GymBuddy
    Integra as funcionalidades principais do AgentPyLing
    """
    
    def __init__(self):
        # Configuração da IA (fallback local se não tiver API)
        self.has_api = bool(os.environ.get("HF_TOKEN") or os.environ.get("OPENAI_API_KEY"))
        
        if self.has_api:
            try:
                # Prioriza Hugging Face, fallback para OpenAI
                if os.environ.get("HF_TOKEN"):
                    self.client = OpenAI(
                        base_url="https://router.huggingface.co/v1",
                        api_key=os.environ.get("HF_TOKEN")
                    )
                    self.model = "deepseek-ai/DeepSeek-V3.2-Exp:novita"
                else:
                    self.client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
                    self.model = "gpt-3.5-turbo"
            except:
                self.has_api = False
        
        self.conversations = {}
        self.system_prompt = self._create_system_prompt()
        
    def _create_system_prompt(self) -> str:
        """Sistema prompt otimizado para GymBuddy"""
        return """Você é o GymBuddy, um personal trainer virtual expert e amigável.

# PERSONALIDADE:
- Tom profissional mas amigável 
- Sempre motivador e prático
- Respostas específicas e detalhadas
- Use emojis estrategicamente

# EXPERTISE:
- Musculação e hipertrofia
- Nutrição esportiva e macros
- Cálculos de fitness (IMC, TMB, TDEE)
- Planejamento de treinos personalizados
- Composição corporal

# FORMATO DE RESPOSTA:
- Use markdown para formatação
- Seja específico nos planos de treino
- Inclua séries, repetições e descanso
- Forneça dicas práticas
- Motive o usuário

# CÁLCULOS IMPORTANTES:
- IMC = peso / (altura_m²)
- TMB Homem = (10×peso) + (6.25×altura) - (5×idade) + 5
- TMB Mulher = (10×peso) + (6.25×altura) - (5×idade) - 161
- TDEE = TMB × fator_atividade

Sempre seja preciso, motivador e focado em resultados práticos."""

    async def process_message(self, message: str, user_id: str, context: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Processa mensagem do usuário com IA ou fallback local
        """
        try:
            if self.has_api:
                return await self._process_with_ai(message, user_id, context)
            else:
                return self._process_local_fallback(message, user_id, context)
                
        except Exception as e:
            # Fallback em caso de erro
            return self._process_local_fallback(message, user_id, context)
    
    async def _process_with_ai(self, message: str, user_id: str, context: Optional[Dict] = None) -> Dict[str, Any]:
        """Processa com API de IA"""
        
        # Inicializa conversa
        if user_id not in self.conversations:
            self.conversations[user_id] = []
        
        # Histórico recente
        recent_history = self.conversations[user_id][-3:] if self.conversations[user_id] else []
        
        # Monta mensagens
        messages = [{"role": "system", "content": self.system_prompt}]
        
        # Adiciona contexto se disponível
        if context:
            context_msg = f"Contexto do usuário: {json.dumps(context, indent=2)}"
            messages.append({"role": "system", "content": context_msg})
        
        # Adiciona histórico
        for conv in recent_history:
            messages.append({"role": "user", "content": conv["user"]})
            messages.append({"role": "assistant", "content": conv["assistant"]})
        
        # Mensagem atual
        messages.append({"role": "user", "content": message})
        
        # Chama IA
        completion = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            max_tokens=1200,
            temperature=0.7
        )
        
        response = completion.choices[0].message.content
        
        # Salva conversa
        self.conversations[user_id].append({
            "user": message,
            "assistant": response,
            "timestamp": datetime.now()
        })
        
        # Manter apenas últimas 10 mensagens por performance
        if len(self.conversations[user_id]) > 10:
            self.conversations[user_id] = self.conversations[user_id][-10:]
        
        return {
            "success": True,
            "message": response,
            "user_id": user_id,
            "model_used": self.model
        }
    
    def _process_local_fallback(self, message: str, user_id: str, context: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Fallback local para quando não há API disponível
        Respostas inteligentes baseadas em palavras-chave
        """
        message_lower = message.lower()
        
        # Saudações
        if any(word in message_lower for word in ["oi", "olá", "hey", "bom dia", "boa tarde"]):
            return {
                "success": True,
                "message": "## 🔥 Fala, parceiro! Bem-vindo ao GymBuddy! 💪\n\nSou seu personal trainer virtual. Posso te ajudar com:\n\n- **Planos de treino** personalizados\n- **Orientação nutricional** \n- **Cálculos de fitness** (IMC, TMB, TDEE)\n- **Dicas de exercícios** e técnicas\n\nO que você gostaria de saber? 🏋️‍♂️",
                "user_id": user_id,
                "suggestions": ["Criar plano de treino", "Calcular meu IMC", "Dicas de nutrição"]
            }
        
        # Treino/Massa
        elif any(word in message_lower for word in ["treino", "massa", "hipertrofia", "musculação"]):
            return {
                "success": True,
                "message": """## 💪 Vamos criar seu plano de treino para hipertrofia!

### 🎯 Fundamentos para ganho de massa:

**Frequência ideal:**
- **3-4x por semana** para iniciantes
- **4-5x por semana** para intermediários

**Exercícios essenciais:**
- **Agachamento**: 4x6-8 reps
- **Supino reto**: 4x6-8 reps  
- **Terra**: 3x5 reps
- **Remada curvada**: 4x8-10 reps

**Progressão:**
- Aumente 2,5kg por semana nos compostos
- Foque na técnica sempre!

> 💡 **Dica Pro**: Descanso de 2-3 minutos entre séries pesadas

**Para um plano personalizado, me conte:**
- Quantos dias pode treinar?
- Já treina ou é iniciante?
- Tem alguma limitação?

Bora dominar! 🚀""",
                "user_id": user_id,
                "suggestions": ["Plano 3x semana", "Plano 4x semana", "Dicas de técnica"]
            }
        
        # Nutrição
        elif any(word in message_lower for word in ["nutrição", "dieta", "alimentação", "macro", "caloria"]):
            return {
                "success": True,
                "message": """## 🥗 Orientação nutricional para seus objetivos!

### 📊 Cálculos básicos:

**Para ganho de massa:**
- **Superávit**: +300-500 calorias do TDEE
- **Proteína**: 2g por kg de peso
- **Carboidratos**: 4-6g por kg 
- **Gorduras**: 1g por kg

**Para perda de peso:**
- **Déficit**: -300-500 calorias do TDEE
- **Proteína**: 2,2g por kg (manter massa)

### 🍽️ Exemplo de refeições:

**Café da manhã:**
- 3 ovos + 1 gema
- Aveia (50g) + banana
- Café com leite

**Almoço/Jantar:**
- Peito de frango (150g)
- Arroz integral (80g cru)
- Legumes variados

> 💡 **Dica Pro**: Beba 35ml de água por kg de peso!

**Me conta seu peso e objetivo para calcular suas macros exatas!** ⚖️""",
                "user_id": user_id,
                "suggestions": ["Calcular minhas macros", "Exemplos de refeições", "Suplementação"]
            }
        
        # Cálculos
        elif any(word in message_lower for word in ["imc", "peso", "altura", "calcular", "tmb", "tdee"]):
            return {
                "success": True,
                "message": """## 📊 Vamos calcular suas métricas de fitness!

### 🧮 Cálculos importantes:

**IMC (Índice de Massa Corporal):**
- Fórmula: peso ÷ (altura em metros)²
- Normal: 18,5 - 24,9

**TMB (Taxa Metabólica Basal):**
- **Homens**: (10×peso) + (6,25×altura) - (5×idade) + 5
- **Mulheres**: (10×peso) + (6,25×altura) - (5×idade) - 161

**TDEE (Gasto Energético Total):**
- Sedentário: TMB × 1,2
- Levemente ativo: TMB × 1,375  
- Moderadamente ativo: TMB × 1,55
- Muito ativo: TMB × 1,725

### 📝 Para calcular exato, preciso:
- **Idade**
- **Peso** (kg)
- **Altura** (cm)
- **Sexo**
- **Nível de atividade**

> 💡 **Exemplo**: Homem, 25 anos, 80kg, 180cm, moderadamente ativo = TDEE ~2.800 cal

**Me envie seus dados que faço os cálculos! 🎯**""",
                "user_id": user_id,
                "suggestions": ["Enviar meus dados", "Explicar TDEE", "Planejar dieta"]
            }
        
        # Geral
        else:
            return {
                "success": True,
                "message": f"""## 🤔 Entendi que você quer saber sobre: "{message[:50]}..."

### 💪 Posso te ajudar com:

**Treinos:**
- Planos personalizados de musculação
- Técnicas de exercícios
- Periodização e progressão

**Nutrição:**
- Cálculo de macros
- Planos alimentares
- Orientações para objetivos específicos

**Cálculos:**
- IMC, TMB, TDEE
- Análise de composição corporal

**Outros:**
- Dicas de recuperação
- Suplementação básica
- Motivação e disciplina

> 💡 **Dica**: Seja mais específico para eu poder te ajudar melhor!

**Exemplos do que você pode perguntar:**
- "Crie um treino de 4 dias para ganhar massa"
- "Calcule meu TDEE: 25 anos, 70kg, 175cm, mulher, ativa"
- "Quantas calorias devo comer para emagrecer?"

Bora focar nos seus objetivos! 🚀""",
                "user_id": user_id,
                "suggestions": ["Criar plano de treino", "Calcular meu TDEE", "Dicas de nutrição"]
            }

    def analyze_profile(self, profile_data: Dict) -> Dict[str, Any]:
        """Analisa perfil e calcula métricas"""
        if not profile_data:
            return {"error": "Dados do perfil não fornecidos"}
        
        try:
            height_m = profile_data.get("altura", 175) / 100
            weight = profile_data.get("peso", 70)
            age = profile_data.get("idade", 30)
            gender = profile_data.get("sexo", "male")
            
            # IMC
            bmi = weight / (height_m ** 2)
            
            if bmi < 18.5:
                bmi_category = "Abaixo do peso"
            elif bmi < 25:
                bmi_category = "Peso normal"
            elif bmi < 30:
                bmi_category = "Sobrepeso"
            else:
                bmi_category = "Obesidade"
            
            # TMB
            if gender.lower() in ["male", "masculino", "m"]:
                bmr = (10 * weight) + (6.25 * profile_data.get("altura", 175)) - (5 * age) + 5
            else:
                bmr = (10 * weight) + (6.25 * profile_data.get("altura", 175)) - (5 * age) - 161
            
            # TDEE
            activity_multipliers = {
                "sedentary": 1.2,
                "lightly_active": 1.375,
                "moderately_active": 1.55,
                "very_active": 1.725,
                "extremely_active": 1.9
            }
            
            activity_level = profile_data.get("nivel_atividade", "moderately_active")
            tdee = bmr * activity_multipliers.get(activity_level, 1.55)
            
            return {
                "bmi": round(bmi, 2),
                "bmi_category": bmi_category,
                "bmr": round(bmr, 2),
                "tdee": round(tdee, 2),
                "ideal_weight_min": round(18.5 * (height_m ** 2), 1),
                "ideal_weight_max": round(24.9 * (height_m ** 2), 1)
            }
            
        except Exception as e:
            return {"error": f"Erro no cálculo: {str(e)}"}

    async def generate_workout_plan(self, profile_data: Dict, preferences: Dict = None) -> Dict[str, Any]:
        """Gera plano de treino otimizado"""
        
        goal = profile_data.get("objetivo", "muscle_gain")
        frequency = preferences.get("frequencia", 4) if preferences else 4
        
        # Planos base otimizados
        if goal in ["muscle_gain", "strength"]:
            if frequency <= 3:
                plan = {
                    "type": "Treino Full Body 💪",
                    "frequency": f"{frequency}x/semana",
                    "description": "Treino completo para iniciantes focado em ganho de massa",
                    "sessions": [
                        {
                            "day": "Dia A - Full Body",
                            "exercises": [
                                {"name": "Agachamento", "sets": 3, "reps": "8-10", "rest": "90s"},
                                {"name": "Supino reto", "sets": 3, "reps": "8-10", "rest": "90s"},
                                {"name": "Remada curvada", "sets": 3, "reps": "8-10", "rest": "90s"},
                                {"name": "Desenvolvimento", "sets": 3, "reps": "10-12", "rest": "60s"},
                                {"name": "Rosca direta", "sets": 2, "reps": "10-12", "rest": "60s"},
                                {"name": "Tríceps testa", "sets": 2, "reps": "10-12", "rest": "60s"}
                            ]
                        }
                    ],
                    "notes": "Execute com técnica perfeita. Progrida 2,5kg por semana nos compostos."
                }
            else:
                plan = {
                    "type": "Treino Upper/Lower 🔥",
                    "frequency": f"{frequency}x/semana", 
                    "description": "Divisão otimizada para ganho de massa muscular",
                    "sessions": [
                        {
                            "day": "Upper Body - Membros Superiores",
                            "exercises": [
                                {"name": "Supino reto", "sets": 4, "reps": "6-8", "rest": "2-3min"},
                                {"name": "Remada curvada", "sets": 4, "reps": "6-8", "rest": "2-3min"},
                                {"name": "Desenvolvimento", "sets": 3, "reps": "8-10", "rest": "90s"},
                                {"name": "Puxada frente", "sets": 3, "reps": "8-10", "rest": "90s"},
                                {"name": "Rosca direta", "sets": 3, "reps": "10-12", "rest": "60s"},
                                {"name": "Tríceps pulley", "sets": 3, "reps": "10-12", "rest": "60s"}
                            ]
                        },
                        {
                            "day": "Lower Body - Membros Inferiores", 
                            "exercises": [
                                {"name": "Agachamento", "sets": 4, "reps": "6-8", "rest": "2-3min"},
                                {"name": "Terra romena", "sets": 4, "reps": "8-10", "rest": "2min"},
                                {"name": "Leg press", "sets": 3, "reps": "12-15", "rest": "90s"},
                                {"name": "Stiff", "sets": 3, "reps": "10-12", "rest": "90s"},
                                {"name": "Panturrilha", "sets": 3, "reps": "15-20", "rest": "45s"},
                                {"name": "Abdominal", "sets": 3, "reps": "15-20", "rest": "45s"}
                            ]
                        }
                    ],
                    "notes": "Foque na conexão mente-músculo. Progressive overload é essencial!"
                }
        
        return plan

    def generate_nutrition_plan(self, profile_data: Dict, metrics: Dict) -> Dict[str, Any]:
        """Gera plano nutricional otimizado"""
        
        tdee = metrics.get("tdee", 2000)
        weight = profile_data.get("peso", 70)
        goal = profile_data.get("objetivo", "maintenance")
        
        # Ajuste calórico baseado no objetivo
        if goal == "weight_loss":
            calories = int(tdee - 400)
            message = "🔥 Déficit para queima de gordura!"
        elif goal == "muscle_gain":
            calories = int(tdee + 300)
            message = "💪 Superávit para ganho de massa!"
        else:
            calories = int(tdee)
            message = "⚖️ Manutenção para recomposição corporal!"
        
        # Cálculo de macros otimizado
        protein = weight * 2.0  # 2g por kg
        fat = weight * 1.0      # 1g por kg
        carbs = (calories - (protein * 4) - (fat * 9)) / 4
        
        return {
            "calories_target": calories,
            "message": message,
            "macros": {
                "protein": round(protein),
                "carbs": round(max(carbs, 100)),  # Mínimo 100g carbos
                "fat": round(fat)
            },
            "meals": [
                {
                    "name": "☀️ Café da Manhã",
                    "foods": ["3 ovos mexidos", "Aveia (40g)", "Banana", "Café"],
                    "calories": round(calories * 0.25),
                    "macros": f"P: {round(protein*0.3)}g | C: {round(carbs*0.35)}g | G: {round(fat*0.25)}g"
                },
                {
                    "name": "🍽️ Almoço",
                    "foods": ["Peito frango (150g)", "Arroz integral (80g cru)", "Brócolis", "Azeite (1 colher)"],
                    "calories": round(calories * 0.35),
                    "macros": f"P: {round(protein*0.35)}g | C: {round(carbs*0.4)}g | G: {round(fat*0.3)}g"
                },
                {
                    "name": "🌙 Jantar", 
                    "foods": ["Salmão (120g)", "Batata doce (150g)", "Salada verde", "Castanhas (10 unidades)"],
                    "calories": round(calories * 0.3),
                    "macros": f"P: {round(protein*0.25)}g | C: {round(carbs*0.25)}g | G: {round(fat*0.35)}g"
                },
                {
                    "name": "🥤 Lanche/Pós-treino",
                    "foods": ["Whey protein (30g)", "Banana", "Aveia (20g)"],
                    "calories": round(calories * 0.1),
                    "macros": f"P: {round(protein*0.1)}g | C: {round(carbs*0.1)}g | G: {round(fat*0.1)}g"
                }
            ],
            "hydration": f"💧 Meta: {round(weight * 35)}ml de água por dia",
            "tips": [
                "🕐 Coma de 3 em 3 horas",
                "💊 Considere suplementar: Whey, Creatina, Multivitamínico",
                "🏋️ Pós-treino: Carbos + proteína em até 1h",
                "😴 Sono de 7-9h é essencial para resultados"
            ]
        }
