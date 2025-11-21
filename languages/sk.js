// Slovenčina language file
const sk = {
    // Main title
    appTitle: "SRT Prekladač titulkov",
    
    // File upload
    fileUploadTitle: "Nahrať súbor s titulkami",
    fileInputLabel: "Vybrať súbor",
    browseButton: "Prehliadať...",
    noFileSelected: "Nie je vybraný žiadny súbor",
    fileInfo: "riadkov",
    
    // Translation temperature
    temperatureTitle: "Voľnosť prekladu",
    temperatureAccurate: "Presný",
    temperatureBalanced: "Vyvážený",
    temperatureCreative: "Kreatívny",
    
    // Translation mode and API key
    languageTitle: "Preklad",
    translationModeTitle: "Spôsob prekladu",
    apiKeyLabel: "API kľúč",
    showApiKeyButton: "Zobraziť",
    sourceLanguage: "Zdrojový jazyk",
    targetLanguage: "Cieľový jazyk",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Výber modelu OpenRouter:",
    selectModelPlaceholder: "Vyberte model...",
    
    // Buttons
    startTranslation: "Začať preklad",
    continueTranslation: "Pokračovať v preklade",
    stopTranslation: "Zastaviť preklad",
    resetTranslation: "Resetovať",
    saveTranslation: "Uložiť preklad",
    saveWorkFile: "Uložiť pracovný súbor",
    saveSourceBlock: "Uložiť zdrojový blok",
    
    // Table
    originalSubtitle: "Pôvodné titulky",
    translatedSubtitle: "Preložený text",
    actions: "Akcie",
    retranslate: "Preložiť znovu",
    
    // Status
    translationProgress: "Priebeh prekladu",
    translationComplete: "Preklad dokončený",
    translationStopped: "Preklad zastavený",
    translationReset: "Preklad resetovaný",
    translationSaved: "Preklad uložený",
    workFileSaved: "Pracovný súbor uložený",
    
    // Success messages
    successTranslation: "Preklad bol úspešne dokončený!",
    translationCompleted: "Preklad bol úspešne dokončený!",
    successLoadWorkFile: "Pracovný súbor bol úspešne načítaný! Môžete pokračovať v preklade.",
    successSaveWorkFile: "Pracovný súbor bol úspešne uložený!",
    
    // Error messages
    errorFileLoad: "Chyba pri načítaní súboru",
    errorTranslation: "Počas prekladu sa vyskytla chyba!",
    errorSave: "Chyba pri ukládaní súboru",
    errorSaveTranslation: "Chyba pri ukládaní prekladu",
    errorSaveSrt: "Chyba pri ukládaní SRT súboru",
    errorSaveSourceBlock: "Chyba pri ukládaní zdrojového bloku",
    errorLoadLanguage: "Chyba pri načítaní jazykového súboru",
    errorNoFile: "Prosím vyberte súbor!",
    errorTranslationRunning: "Prosím zastavte preklad pred načítaním nového súboru!",
    errorInvalidFile: "Je možné načítať iba súbory .srt, .wrk alebo .mmm!",
    errorNoSubtitles: "Súbor neobsahuje platné titulky!",
    errorNoSrtFirst: "Prosím načítajte najprv súbor .srt pred načítaním súboru .mmm!",
    errorNoValidText: "Súbor neobsahuje platný text alebo čísla riadkov nezodpovedajú načítaným titulkom!",
    errorNoTranslation: "Nie je čo uložiť! Prosím najprv preložte titulky.",
    errorNoSubtitleToSave: "Žiadne titulky na uloženie!",
    errorNoSourceLanguage: "Vyberte zdrojový jazyk",
    errorNoTargetLanguage: "Vyberte cieľový jazyk",
    errorApiKey: "API kľúč je vyžadovaný pre tento režim prekladu",
    errorApiNotAvailable: "LM Studio API nie je dostupné. Prosím skontrolujte, či LM Studio beží na pozadí.",
    errorRetranslation: "Počas opätovného prekladu sa vyskytla chyba!",
    errorLoadWorkFile: "Počas načítavania pracovného súboru sa vyskytla chyba. Prosím skontrolujte formát súboru!",
    errorServerConnection: "Nie je možné sa pripojiť k serveru LM Studio",
    
    // Texty animácie načítania
    loadingGeneral: "Načítanie...",
    loadingFileProcessing: "Spracovanie súboru...",
    loadingTablePopulation: "Napĺňanie tabuľky...",
    loadingWorkFileProcessing: "Spracovanie pracovného súboru...",
    loadingMmmFileProcessing: "Spracovanie MMM súboru...",
    loadingTranslation: "Prekladanie...",
    loadingClickToClose: "Kliknite kdekoľvek vonku pre zatvorenie",
    loadingBatchTranslation: "Prebieha dávkový preklad...",
    
    // Chybové správy pre režim dávkového prekladu
    errorNumberingRetry: "Chyba číslovania, skúšam znova ({0}/{1})...",
    errorRateLimitExceeded: "Prekročený limit rýchlosti API, čakám 10 sekúnd...",
    errorTranslationRetry: "Chyba prekladu, skúšam znova ({0}/{1})...",
    errorTranslationFailed: "Preklad zlyhal po {0} pokusoch, pokračujem...",
    
    // Špeciálny režim prekladu
    batchModeLabel: "Špeciálny režim prekladu s veľkým kontextom",
    batchModeInfo: "Keď je táto funkcia povolená, program spracováva 30 riadkov textu naraz špeciálnym spôsobom, čo umožňuje rýchlejší preklad s lepším porozumením a presnosťou"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sk;
} else {
    // For browser environment
    window.sk = sk;
}
