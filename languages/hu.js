// Magyar nyelvi fájl
const hu = {
    // Főcím
    appTitle: "SRT Felirat Fordító",
    
    // Fájl betöltés
    fileUploadTitle: "Feliratfájl betöltése",
    fileInputLabel: "Fájl kiválasztása",
    browseButton: "Tallózás...",
    noFileSelected: "Nincs kijelölve fájl",
    fileInfo: "sor",
    
    // Fordítási szabadságfok
    temperatureTitle: "Fordítási szabadságfok",
    temperatureAccurate: "Pontos",
    temperatureBalanced: "Kiegyensúlyozott",
    temperatureCreative: "Kreatív",
    
    // Fordítás módja és API kulcs
    languageTitle: "Fordítás",
    translationModeTitle: "Fordítás módja",
    apiKeyLabel: "API kulcs",
    showApiKeyButton: "Megjelenítés",
    sourceLanguage: "Forrásnyelv",
    targetLanguage: "Célnyelv",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter modell választás:",
    selectModelPlaceholder: "Válasszon egy modellt...",
    
    // Gombok
    startTranslation: "Fordítás indítása",
    continueTranslation: "Fordítás folytatása",
    stopTranslation: "Fordítás megállítása",
    resetTranslation: "Reset",
    saveTranslation: "Fordítás mentése",
    saveWorkFile: "Munkafájl mentése",
    saveSourceBlock: "Forrás blokkmentése",
    
    // Táblázat
    originalSubtitle: "Eredeti felirat",
    translatedSubtitle: "Fordított szöveg",
    actions: "Műveletek",
    retranslate: "Újrafordítás",
    
    // Állapot
    translationProgress: "Fordítás állapota",
    translationComplete: "Fordítás befejezve",
    translationStopped: "Fordítás leállítva",
    translationReset: "Fordítás visszaállítva",
    translationSaved: "Fordítás elmentve",
    workFileSaved: "Munkafájl elmentve",
    
    // Sikeres műveletek
    successTranslation: "A fordítás sikeresen befejeződött!",
    translationCompleted: "A fordítás sikeresen befejeződött!",
    successLoadWorkFile: "Munkafájl sikeresen betöltve! A fordítás folytatható.",
    successSaveWorkFile: "Munkafájl sikeresen elmentve!",
    successWorkFile: "A munkafájl sikeresen elmentve!",
    successSourceBlock: "A forrás blokk sikeresen elmentve!",
    
    // Hibaüzenetek
    errorFileLoad: "Hiba a fájl betöltése során",
    errorTranslation: "Hiba történt a fordítás során!",
    errorSave: "Hiba a fájl mentése során",
    errorSaveTranslation: "Hiba történt a fordítás mentése során",
    errorSaveSrt: "Hiba történt az SRT fájl mentése során",
    errorSaveSourceBlock: "Hiba történt a forrás blokk mentése során",
    errorLoadLanguage: "Hiba történt a nyelvi fájl betöltése során",
    errorNoFile: "Kérjük, válasszon ki egy fájlt!",
    errorTranslationRunning: "Kérjük, először állítsa le a fordítást, mielőtt új fájlt töltene be!",
    errorInvalidFile: "Csak .srt, .wrk vagy .mmm kiterjesztésű fájlokat lehet betölteni!",
    errorNoSubtitles: "A fájl nem tartalmaz érvényes feliratokat!",
    errorNoSrtFirst: "Először töltsön be egy .srt fájlt, mielőtt .mmm fájlt töltene be!",
    errorNoValidText: "A fájl nem tartalmaz érvényes szövegeket vagy a sorszámok nem egyeznek a betöltött feliratokkal!",
    errorNoTranslation: "Nincs mit menteni! Kérjük, először fordítsa le a feliratokat.",
    errorNoSubtitleToSave: "Nincs betöltött felirat a mentéshez!",
    errorNoSourceLanguage: "Kérjük, válassza ki a forrásnyelvet",
    errorNoTargetLanguage: "Kérjük, válassza ki a célnyelvet",
    errorApiKey: "Ehhez a fordítási módhoz API kulcs szükséges",
    errorApiNotAvailable: "Az LM Studio API nem érhető el. Kérjük, ellenőrizze, hogy fut-e az LM Studio a háttérben.",
    errorRetranslation: "Hiba történt az újrafordítás során!",
    errorLoadWorkFile: "Hiba történt a munkafájl betöltése során. Ellenőrizze a fájl formátumát!",
    errorServerConnection: "Nem sikerült kapcsolódni az LM Studio szerverhez",
    errorFileSave: "Hiba történt a fájl mentése során!",
    
    // API kulcs kezelés
    toggleApiKeyVisibility: "API kulcs megjelenítése/elrejtése",
    
    // Betöltési animáció szövegei
    loadingGeneral: "Betöltés...",
    loadingFileProcessing: "Fájl betöltése folyamatban...",
    loadingTablePopulation: "Táblázat feltöltése folyamatban...",
    loadingWorkFileProcessing: "Munkafájl betöltése folyamatban...",
    loadingMmmFileProcessing: "MMM fájl betöltése folyamatban...",
    loadingTranslation: "Fordítás folyamatban...",
    loadingClickToClose: "Kattints bárhova az ablakon kívül a bezáráshoz",
    loadingBatchTranslation: "Kötegelt fordítás folyamatban...",
    
    // Kötegelt fordítási mód hibaüzenetei
    errorNumberingRetry: "Sorszámozási hiba, újrapróbálkozás ({0}/{1})...",
    errorRateLimitExceeded: "API sebességkorlát túllépve, várakozás 10 másodpercet...",
    errorTranslationRetry: "Fordítási hiba, újrapróbálkozás ({0}/{1})...",
    errorTranslationFailed: "Sikertelen fordítás {0} próbálkozás után, továbblépés...",
    batchTranslationInProgress: "{0} {1}-{2} fordítása folyamatban...",
    
    // Speciális fordítási mód
    batchModeLabel: "Speciális nagy kontextusú fordítási mód",
    batchModeInfo: "Ezt a funkciót bekapcsolva a program egy speciális módon egyszerre 30 sor szöveget dolgoz fel, így sokkal gyorsabban és nagyobb szövegértéssel és pontossággal tudja a fordítást elvégezni a program"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hu;
} else {
    // For browser environment
    window.hu = hu;
}
