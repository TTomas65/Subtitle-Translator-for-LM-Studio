// Français language file
const fr = {
    // Main title
    appTitle: "Traducteur de Sous-titres SRT",
    
    // File upload
    fileUploadTitle: "Charger un fichier de sous-titres",
    fileInputLabel: "Choisir un fichier",
    browseButton: "Parcourir...",
    noFileSelected: "Aucun fichier sélectionné",
    fileInfo: "lignes",
    
    // Translation temperature
    temperatureTitle: "Liberté de traduction",
    temperatureAccurate: "Précis",
    temperatureBalanced: "Équilibré",
    temperatureCreative: "Créatif",
    
    // Translation mode and API key
    languageTitle: "Traduction",
    translationModeTitle: "Mode de traduction",
    apiKeyLabel: "Clé API",
    showApiKeyButton: "Afficher",
    sourceLanguage: "Langue source",
    targetLanguage: "Langue cible",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Sélection de modèle OpenRouter:",
    selectModelPlaceholder: "Sélectionnez un modèle...",
    
    // Buttons
    startTranslation: "Démarrer la traduction",
    continueTranslation: "Continuer la traduction",
    stopTranslation: "Arrêter la traduction",
    resetTranslation: "Réinitialiser",
    saveTranslation: "Enregistrer la traduction",
    saveWorkFile: "Enregistrer le fichier de travail",
    saveSourceBlock: "Enregistrer le bloc source",
    
    // Table
    originalSubtitle: "Texte original",
    translatedSubtitle: "Texte traduit",
    actions: "Actions",
    retranslate: "Retraduire",
    
    // Status
    translationProgress: "Progression de la traduction",
    translationComplete: "Traduction terminée",
    translationStopped: "Traduction arrêtée",
    translationReset: "Traduction réinitialisée",
    translationSaved: "Traduction enregistrée",
    workFileSaved: "Fichier de travail enregistré",
    
    // Success messages
    successTranslation: "Traduction terminée avec succès !",
    translationCompleted: "Traduction terminée avec succès !",
    successLoadWorkFile: "Fichier de travail chargé avec succès ! Vous pouvez continuer la traduction.",
    successSaveWorkFile: "Fichier de travail enregistré avec succès !",
    successWorkFile: "Fichier de travail enregistré avec succès !",
    successSourceBlock: "Bloc source enregistré avec succès !",
    
    // Error messages
    errorFileLoad: "Erreur lors du chargement du fichier",
    errorTranslation: "Une erreur s'est produite pendant la traduction !",
    errorSave: "Erreur lors de l'enregistrement du fichier",
    errorSaveTranslation: "Erreur lors de l'enregistrement de la traduction",
    errorSaveSrt: "Erreur lors de l'enregistrement du fichier SRT",
    errorSaveSourceBlock: "Erreur lors de l'enregistrement du bloc source",
    errorLoadLanguage: "Erreur lors du chargement du fichier de langue",
    errorNoFile: "Veuillez sélectionner un fichier !",
    errorTranslationRunning: "Veuillez arrêter la traduction avant de charger un nouveau fichier !",
    errorInvalidFile: "Seuls les fichiers .srt, .wrk ou .mmm peuvent être chargés !",
    errorNoSubtitles: "Le fichier ne contient pas de sous-titres valides !",
    errorNoSrtFirst: "Veuillez d'abord charger un fichier .srt avant de charger un fichier .mmm !",
    errorNoValidText: "Le fichier ne contient pas de textes valides ou les numéros de ligne ne correspondent pas aux sous-titres chargés !",
    errorNoTranslation: "Rien à enregistrer ! Veuillez d'abord traduire les sous-titres.",
    errorNoSubtitleToSave: "Aucun sous-titre chargé à enregistrer !",
    errorNoSourceLanguage: "Veuillez sélectionner la langue source",
    errorNoTargetLanguage: "Veuillez sélectionner la langue cible",
    errorApiKey: "Une clé API est requise pour ce mode de traduction",
    errorApiNotAvailable: "L'API LM Studio n'est pas disponible. Veuillez vérifier si LM Studio fonctionne en arrière-plan.",
    errorRetranslation: "Une erreur s'est produite lors de la retraduction !",
    errorLoadWorkFile: "Une erreur s'est produite lors du chargement du fichier de travail. Veuillez vérifier le format du fichier !",
    errorServerConnection: "Impossible de se connecter au serveur LM Studio",
    errorFileSave: "Erreur lors de l'enregistrement du fichier !",
    
    // API key management
    toggleApiKeyVisibility: "Afficher/Masquer la clé API",
    
    // Textes d'animation de chargement
    loadingGeneral: "Chargement...",
    loadingFileProcessing: "Traitement du fichier...",
    loadingTablePopulation: "Remplissage du tableau...",
    loadingWorkFileProcessing: "Traitement du fichier de travail...",
    loadingMmmFileProcessing: "Traitement du fichier MMM...",
    loadingTranslation: "Traduction en cours...",
    loadingClickToClose: "Cliquez n'importe où à l'extérieur pour fermer",
    loadingBatchTranslation: "Traduction par lots en cours...",
    
    // Messages d'erreur du mode de traduction par lots
    errorNumberingRetry: "Erreur de numérotation, nouvelle tentative ({0}/{1})...",
    errorRateLimitExceeded: "Limite de débit de l'API dépassée, attente de 10 secondes...",
    errorTranslationRetry: "Erreur de traduction, nouvelle tentative ({0}/{1})...",
    errorTranslationFailed: "Échec de la traduction après {0} tentatives, on continue...",
    batchTranslationInProgress: "{0} {1}-{2} traduction en cours...",
    
    // Mode de traduction spécial
    batchModeLabel: "Mode de traduction spécial à contexte large",
    batchModeInfo: "Lorsque cette fonction est activée, le programme traite 30 lignes de texte à la fois d'une manière spéciale, permettant une traduction plus rapide avec une meilleure compréhension et précision"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fr;
} else {
    // For browser environment
    window.fr = fr;
}
