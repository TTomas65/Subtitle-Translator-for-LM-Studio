// Polski language file
const pl = {
    // Main title
    appTitle: "Tłumacz Napisów SRT",
    
    // File upload
    fileUploadTitle: "Wczytaj plik napisów",
    fileInputLabel: "Wybierz plik",
    browseButton: "Przeglądaj...",
    noFileSelected: "Nie wybrano pliku",
    fileInfo: "linii",
    
    // Translation temperature
    temperatureTitle: "Temperatura tłumaczenia",
    temperatureAccurate: "Dokładne",
    temperatureBalanced: "Zrównoważone",
    temperatureCreative: "Kreatywne",
    
    // Translation mode and API key
    languageTitle: "Tłumaczenie",
    translationModeTitle: "Tryb tłumaczenia",
    apiKeyLabel: "Klucz API",
    showApiKeyButton: "Pokaż",
    sourceLanguage: "Język źródłowy",
    targetLanguage: "Język docelowy",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Wybór modelu OpenRouter:",
    selectModelPlaceholder: "Wybierz model...",
    
    // Buttons
    startTranslation: "Rozpocznij tłumaczenie",
    continueTranslation: "Kontynuuj tłumaczenie",
    stopTranslation: "Zatrzymaj tłumaczenie",
    resetTranslation: "Reset",
    saveTranslation: "Zapisz tłumaczenie",
    saveWorkFile: "Zapisz plik roboczy",
    saveSourceBlock: "Zapisz blok źródłowy",
    
    // Table
    originalSubtitle: "Oryginalny napis",
    translatedSubtitle: "Przetłumaczony tekst",
    actions: "Akcje",
    retranslate: "Przetłumacz ponownie",
    
    // Status
    translationProgress: "Postęp tłumaczenia",
    translationComplete: "Tłumaczenie zakończone",
    translationStopped: "Tłumaczenie zatrzymane",
    translationReset: "Tłumaczenie zresetowane",
    translationSaved: "Tłumaczenie zapisane",
    workFileSaved: "Plik roboczy zapisany",
    
    // Success messages
    successTranslation: "Tłumaczenie zakończone pomyślnie!",
    translationCompleted: "Tłumaczenie zakończone pomyślnie!",
    successLoadWorkFile: "Plik roboczy wczytany pomyślnie! Możesz kontynuować tłumaczenie.",
    successSaveWorkFile: "Plik roboczy zapisany pomyślnie!",
    
    // Error messages
    errorFileLoad: "Błąd podczas ładowania pliku",
    errorTranslation: "Wystąpił błąd podczas tłumaczenia",
    errorSave: "Błąd podczas zapisywania pliku",
    errorSaveTranslation: "Błąd podczas zapisywania tłumaczenia",
    errorSaveSrt: "Błąd podczas zapisywania pliku SRT",
    errorSaveSourceBlock: "Błąd podczas zapisywania bloku źródłowego",
    errorLoadLanguage: "Błąd podczas ładowania pliku językowego",
    errorNoFile: "Proszę wybrać plik!",
    errorTranslationRunning: "Proszę zatrzymać tłumaczenie przed załadowaniem nowego pliku!",
    errorInvalidFile: "Można ładować tylko pliki .srt, .wrk lub .mmm!",
    errorNoSubtitles: "Plik nie zawiera prawidłowych napisów!",
    errorNoSrtFirst: "Proszę najpierw załadować plik .srt przed załadowaniem pliku .mmm!",
    errorNoValidText: "Plik nie zawiera prawidłowych tekstów lub numery wierszy nie pasują do załadowanych napisów!",
    errorNoTranslation: "Nie ma czego zapisać! Proszę najpierw przetłumaczyć napisy.",
    errorNoSubtitleToSave: "Nie załadowano napisów do zapisania!",
    errorNoSourceLanguage: "Proszę wybrać język źródłowy",
    errorNoTargetLanguage: "Proszę wybrać język docelowy",
    errorApiKey: "Klucz API jest wymagany dla tego trybu tłumaczenia",
    errorApiNotAvailable: "API LM Studio nie jest dostępne. Sprawdź, czy LM Studio działa w tle.",
    errorRetranslation: "Wystąpił błąd podczas ponownego tłumaczenia!",
    errorLoadWorkFile: "Wystąpił błąd podczas ładowania pliku roboczego. Sprawdź format pliku!",
    errorServerConnection: "Nie można połączyć się z serwerem LM Studio",
    errorFileSave: "Wystąpił błąd podczas zapisywania pliku!",
    
    // Teksty animacji ładowania
    loadingGeneral: "Ładowanie...",
    loadingFileProcessing: "Przetwarzanie pliku...",
    loadingTablePopulation: "Wypełnianie tabeli...",
    loadingWorkFileProcessing: "Przetwarzanie pliku roboczego...",
    loadingMmmFileProcessing: "Przetwarzanie pliku MMM...",
    loadingTranslation: "Tłumaczenie...",
    loadingClickToClose: "Kliknij gdziekolwiek na zewnątrz, aby zamknąć",
    loadingBatchTranslation: "Tłumaczenie wsadowe w toku...",
    
    // Komunikaty o błędach w trybie tłumaczenia wsadowego
    errorNumberingRetry: "Błąd numeracji, ponowna próba ({0}/{1})...",
    errorRateLimitExceeded: "Przekroczono limit szybkości API, oczekiwanie 10 sekund...",
    errorTranslationRetry: "Błąd tłumaczenia, ponowna próba ({0}/{1})...",
    errorTranslationFailed: "Tłumaczenie nie powiodło się po {0} próbach, kontynuowanie...",
    
    // Specjalny tryb tłumaczenia
    batchModeLabel: "Specjalny tryb tłumaczenia z dużym kontekstem",
    batchModeInfo: "Gdy ta funkcja jest włączona, program przetwarza jednocześnie 30 linii tekstu w specjalny sposób, co umożliwia szybsze tłumaczenie z lepszym zrozumieniem i dokładnością"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pl;
} else {
    // For browser environment
    window.pl = pl;
}
