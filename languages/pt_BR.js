// Português (Brasil) language file
const pt_BR = {
    // Main title
    appTitle: "Tradutor de Legendas SRT",
    
    // File upload
    fileUploadTitle: "Carregar Arquivo de Legendas",
    fileInputLabel: "Escolher Arquivo",
    browseButton: "Navegar...",
    noFileSelected: "Nenhum arquivo selecionado",
    fileInfo: "linhas",
    
    // Translation temperature
    temperatureTitle: "Temperatura de Tradução",
    temperatureAccurate: "Preciso",
    temperatureBalanced: "Equilibrado",
    temperatureCreative: "Criativo",
    
    // Translation mode and API key
    languageTitle: "Tradução",
    translationModeTitle: "Modo de tradução",
    apiKeyLabel: "Chave API",
    showApiKeyButton: "Mostrar",
    sourceLanguage: "Idioma de Origem",
    targetLanguage: "Idioma de Destino",
    
    // OpenRouter modellválasztó
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
    
    // Error messages
    errorFileLoad: "Erro ao carregar o arquivo",
    errorTranslation: "Ocorreu um erro durante a tradução!",
    errorSave: "Erro ao salvar arquivo",
    errorSaveTranslation: "Erro ao salvar tradução",
    errorSaveSrt: "Erro ao salvar arquivo SRT",
    errorSaveSourceBlock: "Erro ao salvar bloco de origem",
    errorLoadLanguage: "Erro ao carregar arquivo de idioma",
    errorNoFile: "Por favor, selecione um arquivo!",
    errorTranslationRunning: "Por favor, pare a tradução antes de carregar um novo arquivo!",
    errorInvalidFile: "Apenas arquivos .srt, .wrk ou .mmm podem ser carregados!",
    errorNoSubtitles: "O arquivo não contém legendas válidas!",
    errorNoSrtFirst: "Por favor, carregue um arquivo .srt primeiro antes de carregar um arquivo .mmm!",
    errorNoValidText: "O arquivo não contém textos válidos ou os números de linha não correspondem às legendas carregadas!",
    errorNoTranslation: "Nada para salvar! Por favor, traduza as legendas primeiro.",
    errorNoSubtitleToSave: "Nenhuma legenda carregada para salvar!",
    errorNoSourceLanguage: "Por favor, selecione o idioma de origem",
    errorNoTargetLanguage: "Por favor, selecione o idioma de destino",
    errorApiKey: "Chave de API é necessária para este modo de tradução",
    errorApiNotAvailable: "A API do LM Studio não está disponível. Verifique se o LM Studio está sendo executado em segundo plano.",
    errorRetranslation: "Ocorreu um erro durante a retradução!",
    errorLoadWorkFile: "Ocorreu um erro ao carregar o arquivo de trabalho. Verifique o formato do arquivo!",
    errorServerConnection: "Não foi possível conectar ao servidor LM Studio",
    
    // Textos de animação de carregamento
    loadingGeneral: "Carregando...",
    loadingFileProcessing: "Processando arquivo...",
    loadingTablePopulation: "Preenchendo tabela...",
    loadingWorkFileProcessing: "Processando arquivo de trabalho...",
    loadingMmmFileProcessing: "Processando arquivo MMM...",
    loadingTranslation: "Traduzindo...",
    loadingClickToClose: "Clique em qualquer lugar fora para fechar",
    loadingBatchTranslation: "Tradução em lote em andamento...",
    
    // Mensagens de erro do modo de tradução em lote
    errorNumberingRetry: "Erro de numeração, tentando novamente ({0}/{1})...",
    errorRateLimitExceeded: "Limite de taxa da API excedido, aguardando 10 segundos...",
    errorTranslationRetry: "Erro de tradução, tentando novamente ({0}/{1})...",
    errorTranslationFailed: "Tradução falhou após {0} tentativas, continuando...",
    
    // Modo de tradução especial
    batchModeLabel: "Modo de tradução especial de contexto amplo",
    batchModeInfo: "Quando este recurso está ativado, o programa processa 30 linhas de texto de uma vez de maneira especial, permitindo uma tradução mais rápida com melhor compreensão e precisão"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pt_BR;
} else {
    // For browser environment
    window.pt_BR = pt_BR;
}
