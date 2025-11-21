// Italiano language file
const it = {
    // Main title
    appTitle: "Traduttore di Sottotitoli SRT",
    
    // File upload
    fileUploadTitle: "Carica file sottotitoli",
    fileInputLabel: "Scegli un file",
    browseButton: "Sfoglia...",
    noFileSelected: "Nessun file selezionato",
    fileInfo: "righe",
    
    // Translation temperature
    temperatureTitle: "Libertà di traduzione",
    temperatureAccurate: "Preciso",
    temperatureBalanced: "Bilanciato",
    temperatureCreative: "Creativo",
    
    // Translation mode and API key
    languageTitle: "Traduzione",
    translationModeTitle: "Modalità di traduzione",
    apiKeyLabel: "Chiave API",
    showApiKeyButton: "Mostra",
    sourceLanguage: "Lingua di origine",
    targetLanguage: "Lingua di destinazione",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Selezione modello OpenRouter:",
    selectModelPlaceholder: "Seleziona un modello...",
    
    // Buttons
    startTranslation: "Avvia traduzione",
    continueTranslation: "Continua traduzione",
    stopTranslation: "Ferma traduzione",
    resetTranslation: "Reimposta",
    saveTranslation: "Salva traduzione",
    saveWorkFile: "Salva file di lavoro",
    saveSourceBlock: "Salva blocco di origine",
    
    // Table
    originalSubtitle: "Testo originale",
    translatedSubtitle: "Testo tradotto",
    actions: "Azioni",
    retranslate: "Ritradurre",
    
    // Status
    translationProgress: "Progresso della traduzione",
    translationComplete: "Traduzione completata",
    translationStopped: "Traduzione interrotta",
    translationReset: "Traduzione reimpostata",
    translationSaved: "Traduzione salvata",
    workFileSaved: "File di lavoro salvato",
    
    // Success messages
    successTranslation: "Traduzione completata con successo!",
    translationCompleted: "Traduzione completata con successo!",
    successLoadWorkFile: "File di lavoro caricato con successo! Puoi continuare la traduzione.",
    successSaveWorkFile: "File di lavoro salvato con successo!",
    successWorkFile: "File di lavoro salvato con successo!",
    successSourceBlock: "Blocco di origine salvato con successo!",
    
    // Error messages
    errorFileLoad: "Errore durante il caricamento del file",
    errorTranslation: "Si è verificato un errore durante la traduzione!",
    errorSave: "Errore durante il salvataggio del file",
    errorSaveTranslation: "Errore durante il salvataggio della traduzione",
    errorSaveSrt: "Errore durante il salvataggio del file SRT",
    errorSaveSourceBlock: "Errore durante il salvataggio del blocco di origine",
    errorLoadLanguage: "Errore durante il caricamento del file di lingua",
    errorNoFile: "Seleziona un file!",
    errorTranslationRunning: "Ferma la traduzione prima di caricare un nuovo file!",
    errorInvalidFile: "È possibile caricare solo file .srt, .wrk o .mmm!",
    errorNoSubtitles: "Il file non contiene sottotitoli validi!",
    errorNoSrtFirst: "Carica prima un file .srt prima di caricare un file .mmm!",
    errorNoValidText: "Il file non contiene testi validi o i numeri di riga non corrispondono ai sottotitoli caricati!",
    errorNoTranslation: "Niente da salvare! Traduci prima i sottotitoli.",
    errorNoSubtitleToSave: "Nessun sottotitolo caricato da salvare!",
    errorNoSourceLanguage: "Seleziona la lingua di origine",
    errorNoTargetLanguage: "Seleziona la lingua di destinazione",
    errorApiKey: "La chiave API è richiesta per questa modalità di traduzione",
    errorApiNotAvailable: "L'API di LM Studio non è disponibile. Verifica che LM Studio sia in esecuzione in background.",
    errorRetranslation: "Si è verificato un errore durante la ritraduzione!",
    errorLoadWorkFile: "Si è verificato un errore durante il caricamento del file di lavoro. Controlla il formato del file!",
    errorServerConnection: "Impossibile connettersi al server LM Studio",
    errorFileSave: "Errore durante il salvataggio del file!",
    
    // API key management
    toggleApiKeyVisibility: "Mostra/Nascondi chiave API",
    
    // Testi di animazione di caricamento
    loadingGeneral: "Caricamento in corso...",
    loadingFileProcessing: "Elaborazione del file in corso...",
    loadingTablePopulation: "Compilazione della tabella in corso...",
    loadingWorkFileProcessing: "Elaborazione del file di lavoro in corso...",
    loadingMmmFileProcessing: "Elaborazione del file MMM in corso...",
    loadingTranslation: "Traduzione in corso...",
    loadingClickToClose: "Clicca ovunque all'esterno per chiudere",
    loadingBatchTranslation: "Traduzione in batch in corso...",
    
    // Messaggi di errore della modalità di traduzione in batch
    errorNumberingRetry: "Errore di numerazione, nuovo tentativo ({0}/{1})...",
    errorRateLimitExceeded: "Limite di velocità API superato, attesa di 10 secondi...",
    errorTranslationRetry: "Errore di traduzione, nuovo tentativo ({0}/{1})...",
    errorTranslationFailed: "Traduzione fallita dopo {0} tentativi, proseguimento...",
    batchTranslationInProgress: "{0} {1}-{2} traduzione in corso...",
    
    // Modalità di traduzione speciale
    batchModeLabel: "Modalità di traduzione speciale a contesto ampio",
    batchModeInfo: "Quando questa funzione è attivata, il programma elabora 30 righe di testo contemporaneamente in modo speciale, consentendo una traduzione più veloce con una migliore comprensione e precisione"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = it;
} else {
    // For browser environment
    window.it = it;
}
