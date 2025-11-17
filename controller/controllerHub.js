/**********************************************************
 * ControllerHub - Arquivo central para gerenciar todas as controllers
 * Data: 11/11/2024
 * Autor: Pedro
 * Versão: 2.0
 * 
 * Este arquivo centraliza o carregamento de todas as controllers
 * evitando dependências circulares através de lazy loading
 * e permitindo acesso fácil a qualquer controller
 **********************************************************/

const path = require('path');
const fs = require('fs');

// Cache interno para armazenar controllers já carregadas
const _controllersCache = {};
const _controllersLoaded = {};

// Lista de controllers para carregar
const controllerList = [
    { name: 'controllerUsuario', path: './usuario/controllerUsuario.js' },
    { name: 'controllerTreino', path: './treino/controllerTreino.js' },
    { name: 'controllerExercicio', path: './exercicio/controllerExercicio.js' },
    { name: 'controllerSerie', path: './serie/controllerSerie.js' },
    { name: 'controllerExercicioTreinoSerie', path: './exercicio_treino_serie/controllerExercicioTreinoSerie.js' },
    { name: 'controllerPublicacao', path: './publicacao/controllerPublicacao.js' },
    { name: 'controllerComentario', path: './comentario/controllerComentario.js' },
    { name: 'controllerCurtida', path: './curtida/controllerCurtida.js' },
    { name: 'controllerCurtidaComentario', path: './curtida_comentario/curtida_comentario.js' },
    { name: 'controllerNotificacao', path: './notificacao/controllerNotificacao.js' },
    { name: 'controllerRecuperacaoSenha', path: './recuperacaoSenha/controllerRecuperacaoSenha.js' },
    { name: 'controllerView', path: './views/controllerViews.js' },
    { name: 'controllerIA', path: './ia/controllerIA.js' }
];

// Função para carregar uma controller sob demanda
const loadControllerLazy = (name, controllerPath) => {
    // Se já foi carregada, retorna do cache
    if (_controllersCache[name]) {
        return _controllersCache[name]
    }
    
    try {
        const fullPath = path.resolve(__dirname, controllerPath)
        
        // Verifica se o arquivo existe
        if (fs.existsSync(fullPath)) {
            // Limpa o cache do require se necessário
            if (require.cache[fullPath]) {
                delete require.cache[fullPath]
            }
            
            try {
                _controllersCache[name] = require(fullPath)
            } catch (requireError) {
                console.error(`[controllerHub] Erro ao carregar controller '${name}' em '${fullPath}':`, requireError)
                return null
            }
            _controllersLoaded[name] = true
            
    
            
            return _controllersCache[name]
        } else {
            console.error(`[controllerHub] Arquivo de controller não encontrado: ${fullPath} (name: ${name})`)
            return null
        }
    } catch (error) {
        console.error(`[controllerHub] Exceção inesperada ao resolver controller '${name}' (${controllerPath}):`, error)
        return null
    }
};

// Objeto base com funções auxiliares
const baseControllers = {
    reloadController: (controllerName) => {
        const controller = controllerList.find(c => c.name === controllerName)
        if (controller) {
            // Limpa o cache para forçar recarregamento
            delete _controllersCache[controller.name]
            delete _controllersLoaded[controller.name]
            
            const fullPath = path.resolve(__dirname, controller.path)
            if (require.cache[fullPath]) {
                delete require.cache[fullPath]
            }
            
            return loadControllerLazy(controller.name, controller.path)
        }
        return null
    },
    
    listControllers: () => {
        return controllerList.map(c => c.name).filter(name => _controllersLoaded[name])
    }
};

// Cria o objeto controllers com lazy loading usando Proxy
const controllers = new Proxy(baseControllers, {
    get(target, property) {
        // Se for uma das funções especiais, retorna ela
        if (property === 'reloadController' || property === 'listControllers') {
            return target[property]
        }
        
        // Procura a controller na lista
        const controllerConfig = controllerList.find(c => c.name === property)
        
        if (controllerConfig) {
            // Carrega a controller sob demanda (lazy loading)
            return loadControllerLazy(controllerConfig.name, controllerConfig.path)
        }
        
        return undefined;
    },
    
    // Define quais propriedades existem
    has(target, property) {
        return controllerList.some(c => c.name === property) || 
               property === 'reloadController' || 
               property === 'listControllers'
    },
    
    // Retorna as chaves disponíveis
    ownKeys(target) {
        return [...controllerList.map(c => c.name), 'reloadController', 'listControllers']
    },
    
    // Necessário para o ownKeys funcionar corretamente
    getOwnPropertyDescriptor(target, property) {
        if (this.has(target, property)) {
            return { enumerable: true, configurable: true }
        }
    }
});


// Exporta o proxy com todas as controllers
module.exports = controllers
