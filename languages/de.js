// Deutsch language file
const de = {
    // Main title
    appTitle: "SRT Untertitel-Übersetzer",
    
    // File upload
    fileUploadTitle: "Untertiteldatei hochladen",
    fileInputLabel: "Datei auswählen",
    browseButton: "Durchsuchen...",
    noFileSelected: "Keine Datei ausgewählt",
    fileInfo: "Zeilen",
    
    // Translation temperature
    temperatureTitle: "Übersetzungstemperatur",
    temperatureAccurate: "Genau",
    temperatureBalanced: "Ausgewogen",
    temperatureCreative: "Kreativ",
    
    // Translation mode and API key
    languageTitle: "Übersetzung",
    translationModeTitle: "Übersetzungsmodus",
    apiKeyLabel: "API-Schlüssel",
    showApiKeyButton: "Anzeigen",
    sourceLanguage: "Quellsprache",
    targetLanguage: "Zielsprache",
    
    // OpenRouter Modellauswahl
    openrouterModelLabel: "OpenRouter Modellauswahl:",
    selectModelPlaceholder: "Wählen Sie ein Modell...",
    
    // Buttons
    startTranslation: "Übersetzung starten",
    continueTranslation: "Übersetzung fortsetzen",
    stopTranslation: "Übersetzung stoppen",
    resetTranslation: "Zurücksetzen",
    saveTranslation: "Übersetzung speichern",
    saveWorkFile: "Arbeitsdatei speichern",
    saveSourceBlock: "Quellblock speichern",
    
    // Table
    originalSubtitle: "Originaler Untertitel",
    translatedSubtitle: "Übersetzter Text",
    actions: "Aktionen",
    retranslate: "Neu übersetzen",
    
    // Status
    translationProgress: "Übersetzungsfortschritt",
    translationComplete: "Übersetzung abgeschlossen",
    translationStopped: "Übersetzung gestoppt",
    translationReset: "Übersetzung zurückgesetzt",
    translationSaved: "Übersetzung gespeichert",
    workFileSaved: "Arbeitsdatei gespeichert",
    
    // Success messages
    successTranslation: "Übersetzung erfolgreich abgeschlossen!",
    translationCompleted: "Übersetzung erfolgreich abgeschlossen!",
    successLoadWorkFile: "Arbeitsdatei erfolgreich geladen! Sie können die Übersetzung fortsetzen.",
    successSaveWorkFile: "Arbeitsdatei erfolgreich gespeichert!",
    successWorkFile: "Arbeitsdatei erfolgreich gespeichert!",
    successSourceBlock: "Quellblock erfolgreich gespeichert!",
    
    // Error messages
    errorFileLoad: "Fehler beim Laden der Datei",
    errorTranslation: "Fehler während der Übersetzung",
    errorSave: "Fehler beim Speichern der Datei",
    errorSaveTranslation: "Fehler beim Speichern der Übersetzung",
    errorSaveSrt: "Fehler beim Speichern der SRT-Datei",
    errorSaveSourceBlock: "Fehler beim Speichern des Quellblocks",
    errorLoadLanguage: "Fehler beim Laden der Sprachdatei",
    errorNoFile: "Bitte wählen Sie zuerst eine Datei aus",
    errorTranslationRunning: "Bitte stoppen Sie die Übersetzung bevor Sie eine neue Datei laden!",
    errorInvalidFile: "Nur .srt, .wrk oder .mmm Dateien können geladen werden!",
    errorNoSubtitles: "Die Datei enthält keine gültigen Untertitel!",
    errorNoSrtFirst: "Bitte laden Sie zuerst eine .srt Datei bevor Sie eine .mmm Datei laden!",
    errorNoValidText: "Die Datei enthält keine gültigen Texte oder die Zeilennummern stimmen nicht mit den geladenen Untertiteln überein!",
    errorNoTranslation: "Nichts zu speichern! Bitte übersetzen Sie zuerst die Untertitel.",
    errorNoSubtitleToSave: "Keine Untertitel zum Speichern geladen!",
    errorNoSourceLanguage: "Bitte wählen Sie die Ausgangssprache",
    errorNoTargetLanguage: "Bitte wählen Sie die Zielsprache",
    errorApiKey: "API-Schlüssel ist für diesen Übersetzungsmodus erforderlich",
    errorApiNotAvailable: "LM Studio API ist nicht verfügbar. Bitte überprüfen Sie, ob LM Studio im Hintergrund läuft.",
    errorRetranslation: "Fehler bei der erneuten Übersetzung!",
    errorLoadWorkFile: "Fehler beim Laden der Arbeitsdatei. Bitte überprüfen Sie das Dateiformat!",
    errorServerConnection: "Verbindung zum LM Studio-Server nicht möglich",
    errorFileSave: "Fehler beim Speichern der Datei!",
    
    // API kulcs kezelés
    toggleApiKeyVisibility: "API-Schlüssel anzeigen/ausblenden",
    
    // Ladeanimationstexte
    loadingGeneral: "Wird geladen...",
    loadingFileProcessing: "Datei wird verarbeitet...",
    loadingTablePopulation: "Tabelle wird gefüllt...",
    loadingWorkFileProcessing: "Arbeitsdatei wird verarbeitet...",
    loadingMmmFileProcessing: "MMM-Datei wird verarbeitet...",
    loadingTranslation: "Übersetzung läuft...",
    loadingClickToClose: "Klicken Sie außerhalb, um zu schließen",
    loadingBatchTranslation: "Stapelübersetzung läuft...",
    
    // Fehlermeldungen im Stapelübersetzungsmodus
    errorNumberingRetry: "Nummerierungsfehler, Wiederholung ({0}/{1})...",
    errorRateLimitExceeded: "API-Ratenlimit überschritten, warte 10 Sekunden...",
    errorTranslationRetry: "Übersetzungsfehler, Wiederholung ({0}/{1})...",
    errorTranslationFailed: "Übersetzung nach {0} Versuchen fehlgeschlagen, weiter geht's...",
    batchTranslationInProgress: "{0} {1}-{2} Übersetzung läuft...",
    
    // Spezieller Übersetzungsmodus
    batchModeLabel: "Spezieller Übersetzungsmodus mit großem Kontext",
    batchModeInfo: "Wenn diese Funktion aktiviert ist, verarbeitet das Programm auf besondere Weise 30 Textzeilen gleichzeitig, was eine schnellere Übersetzung mit besserem Verständnis und höherer Genauigkeit ermöglicht"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = de;
} else {
    // For browser environment
    window.de = de;
}
