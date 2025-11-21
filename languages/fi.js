// Suomi language file
const fi = {
    // Main title
    appTitle: "SRT Tekstitys Kääntäjä",
    
    // File upload
    fileUploadTitle: "Lataa tekstitystiedosto",
    fileInputLabel: "Valitse tiedosto",
    browseButton: "Selaa...",
    noFileSelected: "Ei valittua tiedostoa",
    fileInfo: "riviä",
    
    // Translation temperature
    temperatureTitle: "Käännöksen vapausaste",
    temperatureAccurate: "Tarkka",
    temperatureBalanced: "Tasapainoinen",
    temperatureCreative: "Luova",
    
    // Translation mode and API key
    languageTitle: "Käännös",
    translationModeTitle: "Käännöstila",
    apiKeyLabel: "API-avain",
    showApiKeyButton: "Näytä",
    sourceLanguage: "Lähdekieli",
    targetLanguage: "Kohdekieli",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter-mallin valinta:",
    selectModelPlaceholder: "Valitse malli...",
    
    // Buttons
    startTranslation: "Aloita käännös",
    continueTranslation: "Jatka käännöstä",
    stopTranslation: "Pysäytä käännös",
    resetTranslation: "Nollaa",
    saveTranslation: "Tallenna käännös",
    saveWorkFile: "Tallenna työtiedosto",
    saveSourceBlock: "Tallenna lähdelohko",
    
    // Table
    originalSubtitle: "Alkuperäinen tekstitys",
    translatedSubtitle: "Käännetty teksti",
    actions: "Toiminnot",
    retranslate: "Käännä uudelleen",
    
    // Status
    translationProgress: "Käännöksen edistyminen",
    translationComplete: "Käännös valmis",
    translationStopped: "Käännös pysäytetty",
    translationReset: "Käännös nollattu",
    translationSaved: "Käännös tallennettu",
    workFileSaved: "Työtiedosto tallennettu",
    
    // Success messages
    successTranslation: "Käännös onnistui!",
    translationCompleted: "Käännös onnistui!",
    successLoadWorkFile: "Työtiedosto ladattu onnistuneesti! Voit jatkaa käännöstä.",
    successSaveWorkFile: "Työtiedosto tallennettu onnistuneesti!",
    
    // Error messages
    errorFileLoad: "Virhe tiedoston lataamisessa",
    errorTranslation: "Käännöksen aikana tapahtui virhe!",
    errorSave: "Virhe tallennettaessa tiedostoa",
    errorSaveTranslation: "Virhe tallennettaessa käännöstä",
    errorSaveSrt: "Virhe tallennettaessa SRT-tiedostoa",
    errorSaveSourceBlock: "Virhe tallennettaessa lähdelohkoa",
    errorLoadLanguage: "Virhe ladattaessa kielitiedostoa",
    errorNoFile: "Valitse tiedosto!",
    errorTranslationRunning: "Pysäytä käännös ennen uuden tiedoston lataamista!",
    errorInvalidFile: "Vain .srt, .wrk tai .mmm tiedostoja voidaan ladata!",
    errorNoSubtitles: "Tiedosto ei sisällä kelvollisia tekstityksiä!",
    errorNoSrtFirst: "Lataa ensin .srt tiedosto ennen .mmm tiedoston lataamista!",
    errorNoValidText: "Tiedosto ei sisällä kelvollista tekstiä tai rivinumerot eivät vastaa ladattuja tekstityksiä!",
    errorNoTranslation: "Ei mitään tallennettavaa! Käännä tekstitykset ensin.",
    errorNoSubtitleToSave: "Ei ladattuja tekstityksiä tallennettavaksi!",
    errorNoSourceLanguage: "Valitse lähdekieli",
    errorNoTargetLanguage: "Valitse kohdekieli",
    errorApiKey: "API-avain vaaditaan tähän käännöstilaan",
    errorApiNotAvailable: "LM Studio API ei ole käytettävissä. Tarkista, että LM Studio on käynnissä taustalla.",
    errorRetranslation: "Uudelleenkäännöksen aikana tapahtui virhe!",
    errorLoadWorkFile: "Työtiedoston lataamisen aikana tapahtui virhe. Tarkista tiedostomuoto!",
    errorServerConnection: "Yhteys LM Studio -palvelimeen epäonnistui",
    
    // Latausanimaatiotekstit
    loadingGeneral: "Ladataan...",
    loadingFileProcessing: "Käsitellään tiedostoa...",
    loadingTablePopulation: "Täytetään taulukkoa...",
    loadingWorkFileProcessing: "Käsitellään työtiedostoa...",
    loadingMmmFileProcessing: "Käsitellään MMM-tiedostoa...",
    loadingTranslation: "Käännetään...",
    loadingClickToClose: "Napsauta ulkopuolelta sulkeaksesi",
    loadingBatchTranslation: "Eräkäännös käynnissä...",
    
    // Eräkäännöstilan virheilmoitukset
    errorNumberingRetry: "Numerointivirhe, yritetään uudelleen ({0}/{1})...",
    errorRateLimitExceeded: "API-nopeusrajoitus ylitetty, odotetaan 10 sekuntia...",
    errorTranslationRetry: "Käännösvirhe, yritetään uudelleen ({0}/{1})...",
    errorTranslationFailed: "Käännös epäonnistui {0} yrityksen jälkeen, jatketaan...",
    
    // Erikoiskäännöstila
    batchModeLabel: "Erityinen laajan kontekstin käännöstila",
    batchModeInfo: "Kun tämä toiminto on käytössä, ohjelma käsittelee 30 tekstiriviä kerralla erityisellä tavalla, mahdollistaen nopeamman käännöksen paremmalla ymmärryksellä ja tarkkuudella"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fi;
} else {
    // For browser environment
    window.fi = fi;
}
