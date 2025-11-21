// Nederlands language file
const nl = {
    // Main title
    appTitle: "SRT Ondertitel Vertaler",
    
    // File upload
    fileUploadTitle: "Ondertitelbestand uploaden",
    fileInputLabel: "Bestand kiezen",
    browseButton: "Bladeren...",
    noFileSelected: "Geen bestand geselecteerd",
    fileInfo: "regels",
    
    // Translation temperature
    temperatureTitle: "Vertaaltemperatuur",
    temperatureAccurate: "Nauwkeurig",
    temperatureBalanced: "Gebalanceerd",
    temperatureCreative: "Creatief",
    
    // Translation mode and API key
    languageTitle: "Vertaling",
    translationModeTitle: "Vertaalmodus",
    apiKeyLabel: "API-sleutel",
    showApiKeyButton: "Tonen",
    sourceLanguage: "Brontaal",
    targetLanguage: "Doeltaal",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter modelselectie:",
    selectModelPlaceholder: "Selecteer een model...",
    
    // Buttons
    startTranslation: "Vertaling starten",
    continueTranslation: "Vertaling voortzetten",
    stopTranslation: "Vertaling stoppen",
    resetTranslation: "Resetten",
    saveTranslation: "Vertaling opslaan",
    saveWorkFile: "Werkbestand opslaan",
    saveSourceBlock: "Bronblok opslaan",
    
    // Table
    originalSubtitle: "Originele ondertitel",
    translatedSubtitle: "Vertaalde tekst",
    actions: "Acties",
    retranslate: "Opnieuw vertalen",
    
    // Status
    translationProgress: "Vertaalvoortgang",
    translationComplete: "Vertaling voltooid",
    translationStopped: "Vertaling gestopt",
    translationReset: "Vertaling gereset",
    translationSaved: "Vertaling opgeslagen",
    workFileSaved: "Werkbestand opgeslagen",
    
    // Success messages
    successTranslation: "Vertaling succesvol voltooid!",
    translationCompleted: "Vertaling succesvol voltooid!",
    successLoadWorkFile: "Werkbestand succesvol geladen! U kunt doorgaan met de vertaling.",
    successSaveWorkFile: "Werkbestand succesvol opgeslagen!",
    
    // Error messages
    errorFileLoad: "Fout bij het laden van het bestand",
    errorTranslation: "Er is een fout opgetreden tijdens het vertalen!",
    errorSave: "Fout bij het opslaan van het bestand",
    errorSaveTranslation: "Fout bij het opslaan van de vertaling",
    errorSaveSrt: "Fout bij het opslaan van het SRT-bestand",
    errorSaveSourceBlock: "Fout bij het opslaan van het bronblok",
    errorLoadLanguage: "Fout bij het laden van het taalbestand",
    errorNoFile: "Selecteer een bestand!",
    errorTranslationRunning: "Stop de vertaling voordat u een nieuw bestand laadt!",
    errorInvalidFile: "Alleen .srt, .wrk of .mmm bestanden kunnen worden geladen!",
    errorNoSubtitles: "Het bestand bevat geen geldige ondertitels!",
    errorNoSrtFirst: "Laad eerst een .srt bestand voordat u een .mmm bestand laadt!",
    errorNoValidText: "Het bestand bevat geen geldige teksten of de regelnummers komen niet overeen met de geladen ondertitels!",
    errorNoTranslation: "Niets om op te slaan! Vertaal eerst de ondertitels.",
    errorNoSubtitleToSave: "Geen ondertitel geladen om op te slaan!",
    errorNoSourceLanguage: "Selecteer alstublieft de brontaal",
    errorNoTargetLanguage: "Selecteer alstublieft de doeltaal",
    errorApiKey: "API-sleutel is vereist voor deze vertaalmodus",
    errorApiNotAvailable: "LM Studio API is niet beschikbaar. Controleer of LM Studio op de achtergrond draait.",
    errorRetranslation: "Er is een fout opgetreden tijdens het opnieuw vertalen!",
    errorLoadWorkFile: "Er is een fout opgetreden bij het laden van het werkbestand. Controleer het bestandsformaat!",
    errorServerConnection: "Kan geen verbinding maken met de LM Studio-server",
    
    // Laadanimatieteksten
    loadingGeneral: "Laden...",
    loadingFileProcessing: "Bestand verwerken...",
    loadingTablePopulation: "Tabel vullen...",
    loadingWorkFileProcessing: "Werkbestand verwerken...",
    loadingMmmFileProcessing: "MMM-bestand verwerken...",
    loadingTranslation: "Vertalen...",
    loadingClickToClose: "Klik ergens buiten om te sluiten",
    loadingBatchTranslation: "Batchvertaling bezig...",
    
    // Foutmeldingen voor batchvertaalmodus
    errorNumberingRetry: "Nummeringsfout, opnieuw proberen ({0}/{1})...",
    errorRateLimitExceeded: "API-snelheidslimiet overschreden, 10 seconden wachten...",
    errorTranslationRetry: "Vertaalfout, opnieuw proberen ({0}/{1})...",
    errorTranslationFailed: "Vertaling mislukt na {0} pogingen, doorgaan...",
    
    // Speciale vertaalmodus
    batchModeLabel: "Speciale vertaalmodus met grote context",
    batchModeInfo: "Wanneer deze functie is ingeschakeld, verwerkt het programma 30 regels tekst tegelijk op een speciale manier, wat zorgt voor snellere vertaling met beter begrip en nauwkeurigheid"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = nl;
} else {
    // For browser environment
    window.nl = nl;
}
