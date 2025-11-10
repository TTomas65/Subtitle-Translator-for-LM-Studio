// Portuguese (Brazil) language file
const pt_br = {
    // Main title
    appTitle: "Tradutor de Legendas SRT",
    
    // File upload
    fileUploadTitle: "Carregar Arquivo de Legendas",
    fileInputLabel: "Escolher Arquivo",
    browseButton: "Procurar...",
    noFileSelected: "Nenhum arquivo selecionado",
    fileInfo: "linhas",
    
    // Translation temperature
    temperatureTitle: "Temperatura da Tradução",
    temperatureAccurate: "Precisa",
    temperatureBalanced: "Equilibrada",
    temperatureCreative: "Criativa",
    
    // Translation mode and API key
    languageTitle: "Tradução",
    translationModeTitle: "Modo de Tradução",
    apiKeyLabel: "Chave da API",
    showApiKeyButton: "Mostrar",
    sourceLanguage: "Idioma de Origem",
    targetLanguage: "Idioma de Destino",
    
    // OpenRouter model selector
    openrouterModelLabel: "Seleção de modelo OpenRouter:",
    selectModelPlaceholder: "Selecione um modelo...",
    
    // Buttons
    startTranslation: "Iniciar Tradução",
    continueTranslation: "Continuar Tradução",
    stopTranslation: "Parar Tradução",
    resetTranslation: "Reiniciar",
    saveTranslation: "Salvar Tradução",
    saveWorkFile: "Salvar Arquivo de Trabalho",
    saveSourceBlock: "Salvar Bloco de Origem",
    
    // Table
    originalSubtitle: "Legenda Original",
    translatedSubtitle: "Texto Traduzido",
    actions: "Ações",
    retranslate: "Retraduzir",
    
    // Status
    translationProgress: "Progresso da Tradução",
    translationComplete: "Tradução Concluída",
    translationStopped: "Tradução Interrompida",
    translationReset: "Tradução Reiniciada",
    translationSaved: "Tradução Salva",
    workFileSaved: "Arquivo de Trabalho Salvo",
    
    // Success messages
    successTranslation: "Tradução concluída com sucesso!",
    translationCompleted: "Tradução concluída com sucesso!",
    successLoadWorkFile: "Arquivo de trabalho carregado com sucesso! Você pode continuar a tradução.",
    successSaveWorkFile: "Arquivo de trabalho salvo com sucesso!",
    successWorkFile: "Arquivo de trabalho salvo com sucesso!",
    successSourceBlock: "Bloco de origem salvo com sucesso!",
    
    // Error messages
    errorFileLoad: "Erro ao carregar o arquivo",
    errorTranslation: "Erro durante a tradução",
    errorSaveTranslation: "Erro ao salvar a tradução",
    errorSaveSrt: "Erro ao salvar o arquivo SRT",
    errorSaveSourceBlock: "Erro ao salvar o bloco de origem",
    errorLoadLanguage: "Erro ao carregar o arquivo de idioma",
    errorNoSubtitles: "Nenhuma legenda carregada",
    errorNoTranslation: "Nenhuma tradução disponível",
    errorNoSourceLanguage: "Por favor, selecione o idioma de origem",
    errorNoTargetLanguage: "Por favor, selecione o idioma de destino",
    errorApiKey: "A chave da API é obrigatória para este modo de tradução",
    errorApiNotAvailable: "A API do LM Studio não está disponível. Verifique se o LM Studio está sendo executado em segundo plano.",
    errorRetranslation: "Ocorreu um erro durante a retradução!",
    errorLoadWorkFile: "Ocorreu um erro ao carregar o arquivo de trabalho. Verifique o formato do arquivo!",
    errorServerConnection: "Não foi possível conectar ao servidor LM Studio",
    errorFileSave: "Erro ao salvar o arquivo!",
    
    // API key management
    toggleApiKeyVisibility: "Mostrar/Ocultar chave da API",
    
    // Loading animation texts
    loadingGeneral: "Carregando...",
    loadingFileProcessing: "Processando arquivo...",
    loadingTablePopulation: "Preenchendo tabela...",
    loadingWorkFileProcessing: "Processando arquivo de trabalho...",
    loadingMmmFileProcessing: "Processando arquivo MMM...",
    loadingTranslation: "Traduzindo...",
    loadingClickToClose: "Clique em qualquer lugar para fechar",
    loadingBatchTranslation: "Tradução em lote em andamento...",
    
    // Batch translation mode error messages
    errorNumberingRetry: "Erro de numeração, tentando novamente ({0}/{1})...",
    errorRateLimitExceeded: "Limite de taxa da API excedido, aguardando 10 segundos...",
    errorTranslationRetry: "Erro de tradução, tentando novamente ({0}/{1})...",
    errorTranslationFailed: "A tradução falhou após {0} tentativas, continuando...",
    batchTranslationInProgress: "Tradução em andamento: {0} {1}-{2}...",
    
    // Special translation mode
    batchModeLabel: "Modo especial de tradução com contexto ampliado",
    batchModeInfo: "Quando este recurso está ativado, o programa processa 30 linhas de texto por vez, permitindo uma tradução mais rápida e com melhor compreensão e precisão."
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pt_br;
} else {
    window.pt_BR = pt_br;
}
