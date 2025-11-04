#!/usr/bin/env python3
"""
GymBuddy AI Service - Serviço de IA otimizado para integração com o back-end Node.js
Baseado no AgentPyLing com melhorias de performance
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
import asyncio
import os
from datetime import datetime
import json

from ai_models import UserProfile, ChatRequest, ChatResponse
from gymbuddy_ai import GymBuddyAI

# Inicializa FastAPI
app = FastAPI(
    title="GymBuddy AI Service",
    description="Serviço de IA integrado ao back-end GymBuddy",
    version="1.0.0"
)

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://10.107.134.26:8080", "http://localhost:8080", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Instância da IA
ai_service = GymBuddyAI()

@app.get("/")
async def root():
    """Status do serviço AI"""
    return {
        "service": "GymBuddy AI Service",
        "version": "1.0.0",
        "status": "online",
        "timestamp": datetime.now().isoformat()
    }

@app.post("/api/ai/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    """
    Processa mensagens de chat com a IA
    Endpoint principal para comunicação com o back-end Node.js
    """
    try:
        result = await ai_service.process_message(
            message=request.message,
            user_id=request.user_id,
            context=request.context
        )
        
        return ChatResponse(**result)
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao processar mensagem: {str(e)}"
        )

@app.post("/api/ai/analyze-profile")
async def analyze_profile(profile_data: Dict[str, Any]):
    """
    Analisa perfil do usuário e calcula métricas
    """
    try:
        metrics = ai_service.analyze_profile(profile_data)
        return {
            "success": True,
            "metrics": metrics
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Erro na análise do perfil: {str(e)}"
        )

@app.post("/api/ai/workout-plan")
async def generate_workout_plan(request: Dict[str, Any]):
    """
    Gera plano de treino personalizado
    """
    try:
        plan = await ai_service.generate_workout_plan(
            profile_data=request.get("profile", {}),
            preferences=request.get("preferences", {})
        )
        
        return {
            "success": True,
            "workout_plan": plan
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Erro ao gerar plano de treino: {str(e)}"
        )

@app.post("/api/ai/nutrition-plan")  
async def generate_nutrition_plan(request: Dict[str, Any]):
    """
    Gera plano nutricional personalizado
    """
    try:
        plan = ai_service.generate_nutrition_plan(
            profile_data=request.get("profile", {}),
            metrics=request.get("metrics", {})
        )
        
        return {
            "success": True,
            "nutrition_plan": plan
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Erro ao gerar plano nutricional: {str(e)}"
        )

@app.get("/health")
async def health_check():
    """Health check para monitoramento"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "ai_model": "operational"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=5000,
        reload=True,
        log_level="info"
    )
