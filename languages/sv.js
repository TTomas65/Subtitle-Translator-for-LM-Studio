// Svenska language file
const sv = {
    // Main title
    appTitle: "SRT Undertextöversättare",
    
    // File upload
    fileUploadTitle: "Ladda upp undertextfil",
    fileInputLabel: "Välj fil",
    browseButton: "Bläddra...",
    noFileSelected: "Ingen fil vald",
    fileInfo: "rader",
    
    // Translation temperature
    temperatureTitle: "Översättningsfrihet",
    temperatureAccurate: "Exakt",
    temperatureBalanced: "Balanserad",
    temperatureCreative: "Kreativ",
    
    // Translation mode and API key
    languageTitle: "Översättning",
    translationModeTitle: "Översättningsläge",
    apiKeyLabel: "API-nyckel",
    showApiKeyButton: "Visa",
    sourceLanguage: "Källspråk",
    targetLanguage: "Målspråk",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter modellval:",
    selectModelPlaceholder: "Välj en modell...",
    
    // Buttons
    startTranslation: "Starta översättning",
    continueTranslation: "Fortsätt översättning",
    stopTranslation: "Stoppa översättning",
    resetTranslation: "Återställ",
    saveTranslation: "Spara översättning",
    saveWorkFile: "Spara arbetsfil",
    saveSourceBlock: "Spara källblock",
    
    // Table
    originalSubtitle: "Originaltext",
    translatedSubtitle: "Översatt text",
    actions: "Åtgärder",
    retranslate: "Översätt igen",
    
    // Status
    translationProgress: "Översättningsförlopp",
    translationComplete: "Översättning klar",
    translationStopped: "Översättning stoppad",
    translationReset: "Översättning återställd",
    translationSaved: "Översättning sparad",
    workFileSaved: "Arbetsfil sparad",
    
    // Success messages
    successTranslation: "Översättningen har slutförts!",
    translationCompleted: "Översättningen har slutförts!",
    successLoadWorkFile: "Arbetsfilen har laddats! Du kan fortsätta översättningen.",
    successSaveWorkFile: "Arbetsfilen har sparats!",
    
    // Error messages
    errorFileLoad: "Fel vid laddning av fil",
    errorTranslation: "Ett fel uppstod under översättningen!",
    errorSave: "Fel vid sparande av fil",
    errorSaveTranslation: "Fel vid sparande av översättning",
    errorSaveSrt: "Fel vid sparande av SRT-fil",
    errorSaveSourceBlock: "Fel vid sparande av källblock",
    errorLoadLanguage: "Fel vid laddning av språkfil",
    errorNoFile: "Välj en fil!",
    errorTranslationRunning: "Stoppa översättningen innan du laddar en ny fil!",
    errorInvalidFile: "Endast .srt, .wrk eller .mmm filer kan laddas!",
    errorNoSubtitles: "Filen innehåller inga giltiga undertexter!",
    errorNoSrtFirst: "Ladda först en .srt-fil innan du laddar en .mmm-fil!",
    errorNoValidText: "Filen innehåller ingen giltig text eller radnumren matchar inte de laddade undertexterna!",
    errorNoTranslation: "Inget att spara! Översätt undertexterna först.",
    errorNoSubtitleToSave: "Inga undertexter laddade att spara!",
    errorNoSourceLanguage: "Välj källspråk",
    errorNoTargetLanguage: "Välj målspråk",
    errorApiKey: "API-nyckel krävs för detta översättningsläge",
    errorApiNotAvailable: "LM Studio API är inte tillgängligt. Kontrollera att LM Studio körs i bakgrunden.",
    errorRetranslation: "Ett fel uppstod under återöversättningen!",
    errorLoadWorkFile: "Ett fel uppstod vid laddning av arbetsfilen. Kontrollera filformatet!",
    errorServerConnection: "Kunde inte ansluta till LM Studio-servern",
    
    // Laddningsanimationstexter
    loadingGeneral: "Laddar...",
    loadingFileProcessing: "Bearbetar fil...",
    loadingTablePopulation: "Fyller tabell...",
    loadingWorkFileProcessing: "Bearbetar arbetsfil...",
    loadingMmmFileProcessing: "Bearbetar MMM-fil...",
    loadingTranslation: "Översätter...",
    loadingClickToClose: "Klicka var som helst utanför för att stänga",
    loadingBatchTranslation: "Batchöversättning pågår...",
    
    // Felmeddelanden för batchöversättningsläge
    errorNumberingRetry: "Numreringsfel, försöker igen ({0}/{1})...",
    errorRateLimitExceeded: "API-hastighetsgräns överskriden, väntar 10 sekunder...",
    errorTranslationRetry: "Översättningsfel, försöker igen ({0}/{1})...",
    errorTranslationFailed: "Översättning misslyckades efter {0} försök, fortsätter...",
    
    // Speciellt översättningsläge
    batchModeLabel: "Speciellt översättningsläge med stor kontext",
    batchModeInfo: "När denna funktion är aktiverad bearbetar programmet 30 textrader samtidigt på ett speciellt sätt, vilket möjliggör snabbare översättning med bättre förståelse och noggrannhet"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sv;
} else {
    // For browser environment
    window.sv = sv;
}
