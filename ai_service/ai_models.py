"""
Modelos de dados otimizados para o serviço de IA GymBuddy
Baseado nos modelos do AgentPyLing com melhorias de performance
"""

from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum

class GenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    OTHER = "other"

class ActivityLevelEnum(str, Enum):
    SEDENTARY = "sedentary"
    LIGHTLY_ACTIVE = "lightly_active"
    MODERATELY_ACTIVE = "moderately_active"
    VERY_ACTIVE = "very_active"
    EXTREMELY_ACTIVE = "extremely_active"

class GoalEnum(str, Enum):
    WEIGHT_LOSS = "weight_loss"
    MUSCLE_GAIN = "muscle_gain"
    MAINTENANCE = "maintenance"
    ENDURANCE = "endurance"
    STRENGTH = "strength"
    GENERAL_FITNESS = "general_fitness"

class UserProfile(BaseModel):
    """Modelo de perfil do usuário otimizado"""
    user_id: str
    name: str
    email: str
    age: int = Field(ge=13, le=120)
    gender: GenderEnum
    height: float = Field(ge=50, le=300, description="Altura em cm")
    weight: float = Field(ge=20, le=500, description="Peso em kg")
    activity_level: ActivityLevelEnum
    goal: GoalEnum
    health_conditions: List[str] = []
    dietary_restrictions: List[str] = []

    @property
    def bmi(self) -> float:
        """Calcula o Índice de Massa Corporal"""
        height_m = self.height / 100
        return round(self.weight / (height_m ** 2), 2)
    
    @property
    def bmi_category(self) -> str:
        """Categoriza o IMC"""
        bmi = self.bmi
        if bmi < 18.5:
            return "Abaixo do peso"
        elif bmi < 25:
            return "Peso normal"
        elif bmi < 30:
            return "Sobrepeso"
        else:
            return "Obesidade"
    
    @property
    def bmr(self) -> float:
        """Calcula a Taxa Metabólica Basal usando Mifflin-St Jeor"""
        if self.gender == GenderEnum.MALE:
            return (10 * self.weight) + (6.25 * self.height) - (5 * self.age) + 5
        else:
            return (10 * self.weight) + (6.25 * self.height) - (5 * self.age) - 161
    
    @property
    def tdee(self) -> float:
        """Calcula o Gasto Energético Diário Total"""
        activity_multipliers = {
            ActivityLevelEnum.SEDENTARY: 1.2,
            ActivityLevelEnum.LIGHTLY_ACTIVE: 1.375,
            ActivityLevelEnum.MODERATELY_ACTIVE: 1.55,
            ActivityLevelEnum.VERY_ACTIVE: 1.725,
            ActivityLevelEnum.EXTREMELY_ACTIVE: 1.9
        }
        return round(self.bmr * activity_multipliers[self.activity_level], 2)

class ChatRequest(BaseModel):
    """Requisição de chat otimizada"""
    message: str = Field(..., description="Mensagem do usuário")
    user_id: str = Field(..., description="ID do usuário")
    context: Optional[Dict[str, Any]] = Field(None, description="Contexto adicional")

class ChatResponse(BaseModel):
    """Resposta de chat otimizada"""
    success: bool = True
    message: str
    user_id: str
    suggestions: Optional[List[str]] = None
    workout_plan: Optional[Dict[str, Any]] = None
    nutrition_plan: Optional[Dict[str, Any]] = None
    analysis: Optional[Dict[str, Any]] = None
    timestamp: datetime = Field(default_factory=datetime.now)

class WorkoutPlan(BaseModel):
    """Modelo de plano de treino"""
    plan_id: str
    user_id: str
    type: str
    frequency: str
    description: str
    sessions: List[Dict[str, Any]]
    duration_weeks: int = 4
    created_at: datetime = Field(default_factory=datetime.now)

class NutritionPlan(BaseModel):
    """Modelo de plano nutricional"""
    plan_id: str
    user_id: str
    calories_target: int
    macros: Dict[str, float]
    meals: List[Dict[str, Any]]
    hydration_target: int
    created_at: datetime = Field(default_factory=datetime.now)

class FitnessMetrics(BaseModel):
    """Métricas de fitness calculadas"""
    bmi: float
    bmi_category: str
    bmr: float
    tdee: float
    ideal_weight_range: Dict[str, float]
    body_fat_estimate: Optional[float] = None
