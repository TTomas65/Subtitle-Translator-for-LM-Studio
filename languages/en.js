// English language file
const en = {
    // Main title
    appTitle: "SRT Subtitle Translator",
    
    // File upload
    fileUploadTitle: "Upload Subtitle File",
    fileInputLabel: "Choose File",
    browseButton: "Browse...",
    noFileSelected: "No file selected",
    fileInfo: "lines",
    
    // Translation temperature
    temperatureTitle: "Translation Temperature",
    temperatureAccurate: "Accurate",
    temperatureBalanced: "Balanced",
    temperatureCreative: "Creative",
    
    // Translation mode and API key
    languageTitle: "Translation",
    translationModeTitle: "Translation Mode",
    apiKeyLabel: "API Key",
    showApiKeyButton: "Show",
    sourceLanguage: "Source Language",
    targetLanguage: "Target Language",
    
    // OpenRouter model selector
    openrouterModelLabel: "OpenRouter model selection:",
    selectModelPlaceholder: "Select a model...",
    
    // Buttons
    startTranslation: "Start Translation",
    continueTranslation: "Continue Translation",
    stopTranslation: "Stop Translation",
    resetTranslation: "Reset",
    saveTranslation: "Save Translation",
    saveWorkFile: "Save Work File",
    saveSourceBlock: "Save Source Block",
    
    // Table
    originalSubtitle: "Original Subtitle",
    translatedSubtitle: "Translated Text",
    actions: "Actions",
    retranslate: "Retranslate",
    
    // Status
    translationProgress: "Translation Progress",
    translationComplete: "Translation Complete",
    translationStopped: "Translation Stopped",
    translationReset: "Translation Reset",
    translationSaved: "Translation Saved",
    workFileSaved: "Work File Saved",
    
    // Success messages
    successTranslation: "Translation successfully completed!",
    translationCompleted: "Translation successfully completed!",
    successLoadWorkFile: "Work file successfully loaded! Translation can continue.",
    successSaveWorkFile: "Work file successfully saved!",
    successWorkFile: "Work file successfully saved!",
    successSourceBlock: "Source block successfully saved!",
    
    // Error messages
    errorFileLoad: "Error loading file",
    errorTranslation: "Error during translation",
    errorSave: "Error saving file",
    errorSaveTranslation: "Error saving translation",
    errorSaveSrt: "Error saving SRT file",
    errorSaveSourceBlock: "Error saving source block",
    errorLoadLanguage: "Error loading language file",
    errorNoFile: "Please select a file!",
    errorTranslationRunning: "Please stop the translation before loading a new file!",
    errorInvalidFile: "Only .srt, .wrk or .mmm files can be loaded!",
    errorNoSubtitles: "The file does not contain valid subtitles!",
    errorNoSrtFirst: "Please load an .srt file first before loading an .mmm file!",
    errorNoValidText: "The file does not contain valid texts or the line numbers do not match the loaded subtitles!",
    errorNoTranslation: "Nothing to save! Please translate the subtitles first.",
    errorNoSubtitleToSave: "No subtitle loaded to save!",
    errorNoSourceLanguage: "Please select source language",
    errorNoTargetLanguage: "Please select target language",
    errorApiKey: "API key is required for this translation mode",
    errorApiNotAvailable: "LM Studio API is not available. Please check if LM Studio is running in the background.",
    errorRetranslation: "Error during retranslation!",
    errorLoadWorkFile: "Error loading work file. Please check the file format!",
    errorServerConnection: "Could not connect to LM Studio server",
    errorFileSave: "Error saving file!",
    
    // API key management
    toggleApiKeyVisibility: "Show/Hide API key",
    
    // Loading animation texts
    loadingGeneral: "Loading...",
    loadingFileProcessing: "Processing file...",
    loadingTablePopulation: "Populating table...",
    loadingWorkFileProcessing: "Processing work file...",
    loadingMmmFileProcessing: "Processing MMM file...",
    loadingTranslation: "Translating...",
    loadingClickToClose: "Click anywhere outside to close",
    loadingBatchTranslation: "Batch translation in progress...",
    
    // Batch translation mode error messages
    errorNumberingRetry: "Numbering error, retrying ({0}/{1})...",
    errorRateLimitExceeded: "API rate limit exceeded, waiting 10 seconds...",
    errorTranslationRetry: "Translation error, retrying ({0}/{1})...",
    errorTranslationFailed: "Translation failed after {0} attempts, moving on...",
    batchTranslationInProgress: "{0} {1}-{2} translation in progress...",
    
    // Special translation mode
    batchModeLabel: "Special large context translation mode",
    batchModeInfo: "When this feature is enabled, the program processes 30 lines of text at once in a special way, allowing for faster translation with better comprehension and accuracy"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = en;
} else {
    // For browser environment
    window.en = en;
}
