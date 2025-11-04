@echo off
echo 🤖 Iniciando GymBuddy AI Service...
echo.

cd ai_service

echo Verificando Python...
python --version
if %errorlevel% neq 0 (
    echo ❌ Python não encontrado! Instale Python 3.8+ primeiro.
    pause
    exit /b 1
)

echo.
echo Instalando dependências Python...
pip install -r requirements.txt

echo.
echo 🚀 Iniciando serviço de IA na porta 5000...
echo Pressione Ctrl+C para parar
echo.

python app.py
