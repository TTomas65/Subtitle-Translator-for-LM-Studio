// Português (Portugal) language file
const pt_PT = {
    // Main title
    appTitle: "Tradutor de Legendas SRT",
    
    // File upload
    fileUploadTitle: "Carregar Ficheiro de Legendas",
    fileInputLabel: "Escolher Ficheiro",
    browseButton: "Procurar...",
    noFileSelected: "Nenhum ficheiro selecionado",
    fileInfo: "linhas",
    
    // Translation temperature
    temperatureTitle: "Nível da Tradução",
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
    selectModelPlaceholder: "Selecionar um modelo...",
    
    // Buttons
    startTranslation: "Iniciar Tradução",
    continueTranslation: "Continuar Tradução",
    stopTranslation: "Parar Tradução",
    resetTranslation: "Reiniciar",
    saveTranslation: "Guardar Tradução",
    saveWorkFile: "Guardar Ficheiro de Trabalho",
    saveSourceBlock: "Guardar Bloco de Origem",
    
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
    translationSaved: "Tradução Guardada",
    workFileSaved: "Ficheiro de Trabalho Guardado",
    
    // Success messages
    successTranslation: "Tradução concluída com sucesso!",
    translationCompleted: "Tradução concluída com sucesso!",
    successLoadWorkFile: "Ficheiro de trabalho carregado com sucesso! Podes continuar a tradução.",
    successSaveWorkFile: "Ficheiro de trabalho guardado com sucesso!",
    successWorkFile: "Ficheiro de trabalho guardado com sucesso!",
    successSourceBlock: "Bloco de origem guardado com sucesso!",
    
    // Error messages
    errorFileLoad: "Erro ao carregar o ficheiro",
    errorTranslation: "Erro durante a tradução",
    errorSave: "Erro ao guardar o ficheiro",
    errorSaveTranslation: "Erro ao guardar a tradução",
    errorSaveSrt: "Erro ao guardar o ficheiro SRT",
    errorSaveSourceBlock: "Erro ao guardar o bloco de origem",
    errorNoFile: "Seleciona um ficheiro!",
    errorTranslationRunning: "Para a tradução antes de carregar um novo ficheiro!",
    errorInvalidFile: "Apenas ficheiros .srt, .wrk ou .mmm podem ser carregados!",
    errorLoadLanguage: "Erro ao carregar o ficheiro de idioma",
    errorNoSrtFirst: "Carrega primeiro um ficheiro .srt antes de carregar um ficheiro .mmm!",
    errorNoValidText: "O ficheiro não contém texto válido ou a numeração das linhas não corresponde às legendas carregadas!",
    errorNoSubtitles: "Nenhuma legenda carregada",
    errorNoSubtitleToSave: "Nenhuma legenda carregada para guardar!",
    errorNoTranslation: "Nenhuma tradução disponível",
    errorNoSourceLanguage: "Seleciona a língua de origem",
    errorNoTargetLanguage: "Seleciona a língua de destino",
    errorApiKey: "A chave da API é obrigatória para este modo de tradução",
    errorApiNotAvailable: "A API do LM Studio não está disponível. Verifica se o LM Studio está a correr em segundo plano.",
    errorRetranslation: "Ocorreu um erro durante a retradução!",
    errorLoadWorkFile: "Ocorreu um erro ao carregar o ficheiro de trabalho. Verifica o formato do ficheiro!",
    errorServerConnection: "Não foi possível ligar ao servidor do LM Studio",
    errorFileSave: "Erro ao guardar o ficheiro!",
    
    // API key management
    toggleApiKeyVisibility: "Mostrar/Ocultar chave da API",
    
    // Loading animation texts
    loadingGeneral: "A carregar...",
    loadingFileProcessing: "A processar o ficheiro...",
    loadingTablePopulation: "A preencher a tabela...",
    loadingWorkFileProcessing: "A processar o ficheiro de trabalho...",
    loadingMmmFileProcessing: "A processar o ficheiro MMM...",
    loadingTranslation: "A traduzir...",
    loadingClickToClose: "Clica em qualquer parte para fechar",
    loadingBatchTranslation: "Tradução em lote em curso...",
    
    // Batch translation mode error messages
    errorNumberingRetry: "Erro de numeração, a tentar novamente ({0}/{1})...",
    errorRateLimitExceeded: "Limite de pedidos da API excedido, a aguardar 10 segundos...",
    errorTranslationRetry: "Erro de tradução, a tentar novamente ({0}/{1})...",
    errorTranslationFailed: "A tradução falhou após {0} tentativas, a avançar...",
    batchTranslationInProgress: "Tradução em curso: {0} {1}-{2}...",
    
    // Special translation mode
    batchModeLabel: "Modo especial de tradução com contexto alargado",
    batchModeInfo: "Quando esta opção está ativa, o programa processa 30 linhas de texto de cada vez, permitindo uma tradução mais rápida e com melhor compreensão e precisão."
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pt_PT;
} else {
    // For browser environment
    window.pt_PT = pt_PT;
}
