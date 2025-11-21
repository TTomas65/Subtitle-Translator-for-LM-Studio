// Čeština language file
const cs = {
    // Main title
    appTitle: "SRT Překladač titulků",
    
    // File upload
    fileUploadTitle: "Nahrát soubor s titulky",
    fileInputLabel: "Vybrat soubor",
    browseButton: "Procházet...",
    noFileSelected: "Není vybrán žádný soubor",
    fileInfo: "řádků",
    
    // Translation temperature
    temperatureTitle: "Volnost překladu",
    temperatureAccurate: "Přesný",
    temperatureBalanced: "Vyvážený",
    temperatureCreative: "Kreativní",
    
    // Translation mode and API key
    languageTitle: "Překlad",
    translationModeTitle: "Režim překladu",
    apiKeyLabel: "API klíč",
    showApiKeyButton: "Zobrazit",
    sourceLanguage: "Zdrojový jazyk",
    targetLanguage: "Cílový jazyk",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Výběr modelu OpenRouter:",
    selectModelPlaceholder: "Vyberte model...",
    
    // Buttons
    startTranslation: "Zahájit překlad",
    continueTranslation: "Pokračovat v překladu",
    stopTranslation: "Zastavit překlad",
    resetTranslation: "Resetovat",
    saveTranslation: "Uložit překlad",
    saveWorkFile: "Uložit pracovní soubor",
    saveSourceBlock: "Uložit zdrojový blok",
    
    // Table
    originalSubtitle: "Původní titulky",
    translatedSubtitle: "Přeložený text",
    actions: "Akce",
    retranslate: "Přeložit znovu",
    
    // Status
    translationProgress: "Průběh překladu",
    translationComplete: "Překlad dokončen",
    translationStopped: "Překlad zastaven",
    translationReset: "Překlad resetován",
    translationSaved: "Překlad uložen",
    workFileSaved: "Pracovní soubor uložen",
    
    // Success messages
    successTranslation: "Překlad byl úspěšně dokončen!",
    translationCompleted: "Překlad byl úspěšně dokončen!",
    successLoadWorkFile: "Pracovní soubor byl úspěšně načten! Můžete pokračovat v překladu.",
    successSaveWorkFile: "Pracovní soubor byl úspěšně uložen!",
    
    // Error messages
    errorFileLoad: "Chyba při načítání souboru",
    errorTranslation: "Během překladu došlo k chybě!",
    errorSave: "Chyba při ukládání souboru",
    errorSaveTranslation: "Chyba při ukládání překladu",
    errorSaveSrt: "Chyba při ukládání SRT souboru",
    errorSaveSourceBlock: "Chyba při ukládání zdrojového bloku",
    errorLoadLanguage: "Chyba při načítání jazykového souboru",
    errorNoFile: "Prosím vyberte soubor!",
    errorTranslationRunning: "Prosím zastavte překlad před načtením nového souboru!",
    errorInvalidFile: "Lze načíst pouze soubory .srt, .wrk nebo .mmm!",
    errorNoSubtitles: "Soubor neobsahuje platné titulky!",
    errorNoSrtFirst: "Prosím načtěte nejprve soubor .srt před načtením souboru .mmm!",
    errorNoValidText: "Soubor neobsahuje platný text nebo čísla řádků neodpovídají načteným titulkům!",
    errorNoTranslation: "Není co uložit! Prosím nejprve přeložte titulky.",
    errorNoSubtitleToSave: "Žádné titulky k uložení!",
    errorNoSourceLanguage: "Vyberte zdrojový jazyk",
    errorNoTargetLanguage: "Vyberte cílový jazyk",
    errorApiKey: "API klíč je vyžadován pro tento režim překladu",
    errorApiNotAvailable: "LM Studio API není dostupné. Prosím zkontrolujte, zda LM Studio běží na pozadí.",
    errorRetranslation: "Během opětovného překladu došlo k chybě!",
    errorLoadWorkFile: "Během načítání pracovního souboru došlo k chybě. Prosím zkontrolujte formát souboru!",
    errorServerConnection: "Nelze se připojit k serveru LM Studio",
    
    // Texty animace načítání
    loadingGeneral: "Načítání...",
    loadingFileProcessing: "Zpracování souboru...",
    loadingTablePopulation: "Plnění tabulky...",
    loadingWorkFileProcessing: "Zpracování pracovního souboru...",
    loadingMmmFileProcessing: "Zpracování MMM souboru...",
    loadingTranslation: "Překládání...",
    loadingClickToClose: "Klikněte kamkoliv vně pro zavření",
    loadingBatchTranslation: "Probíhá dávkový překlad...",
    
    // Chybové zprávy pro režim dávkového překladu
    errorNumberingRetry: "Chyba číslování, zkouším znovu ({0}/{1})...",
    errorRateLimitExceeded: "Překročen limit rychlosti API, čekám 10 sekund...",
    errorTranslationRetry: "Chyba překladu, zkouším znovu ({0}/{1})...",
    errorTranslationFailed: "Překlad selhal po {0} pokusech, pokračuji...",
    
    // Speciální režim překladu
    batchModeLabel: "Speciální režim překladu s velkým kontextem",
    batchModeInfo: "Když je tato funkce povolena, program zpracovává 30 řádků textu najednou speciálním způsobem, což umožňuje rychlejší překlad s lepším porozuměním a přesností"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cs;
} else {
    // For browser environment
    window.cs = cs;
}
