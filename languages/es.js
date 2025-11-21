// Español language file
const es = {
    // Main title
    appTitle: "Traductor de Subtítulos SRT",
    
    // File upload
    fileUploadTitle: "Cargar archivo de subtítulos",
    fileInputLabel: "Seleccionar archivo",
    browseButton: "Examinar...",
    noFileSelected: "Ningún archivo seleccionado",
    fileInfo: "líneas",
    
    // Translation temperature
    temperatureTitle: "Temperatura de traducción",
    temperatureAccurate: "Preciso",
    temperatureBalanced: "Equilibrado",
    temperatureCreative: "Creativo",
    
    // Translation mode and API key
    languageTitle: "Traducción",
    translationModeTitle: "Modo de traducción",
    apiKeyLabel: "Clave API",
    showApiKeyButton: "Mostrar",
    sourceLanguage: "Idioma de origen",
    targetLanguage: "Idioma de destino",
    
    // Selector de modelo OpenRouter
    openrouterModelLabel: "Selección de modelo OpenRouter:",
    selectModelPlaceholder: "Seleccione un modelo...",
    
    // Buttons
    startTranslation: "Iniciar traducción",
    continueTranslation: "Continuar traducción",
    stopTranslation: "Parar traducción",
    resetTranslation: "Reiniciar",
    saveTranslation: "Guardar traducción",
    saveWorkFile: "Guardar archivo de trabajo",
    saveSourceBlock: "Guardar bloque de origen",
    
    // Table
    originalSubtitle: "Subtítulo original",
    translatedSubtitle: "Texto traducido",
    actions: "Acciones",
    retranslate: "Retraducir",
    
    // Status
    translationProgress: "Progreso de traducción",
    translationComplete: "Traducción completada",
    translationStopped: "Traducción detenida",
    translationReset: "Traducción reiniciada",
    translationSaved: "Traducción guardada",
    workFileSaved: "Archivo de trabajo guardado",
    
    // Success messages
    successTranslation: "¡Traducción completada con éxito!",
    translationCompleted: "¡Traducción completada con éxito!",
    successLoadWorkFile: "¡Archivo de trabajo cargado con éxito! Puede continuar la traducción.",
    successSaveWorkFile: "¡Archivo de trabajo guardado con éxito!",
    successWorkFile: "¡Archivo de trabajo guardado con éxito!",
    successSourceBlock: "¡Bloque de origen guardado con éxito!",
    
    // Error messages
    errorFileLoad: "Error al cargar el archivo",
    errorTranslation: "Error durante la traducción",
    errorSave: "Error al guardar el archivo",
    errorSaveTranslation: "Error al guardar la traducción",
    errorSaveSrt: "Error al guardar el archivo SRT",
    errorSaveSourceBlock: "Error al guardar el bloque de origen",
    errorLoadLanguage: "Error al cargar el archivo de idioma",
    errorNoFile: "Por favor, seleccione un archivo primero",
    errorTranslationRunning: "Por favor, detenga la traducción antes de cargar un nuevo archivo!",
    errorInvalidFile: "Solo se pueden cargar archivos .srt, .wrk o .mmm!",
    errorNoSubtitles: "¡El archivo no contiene subtítulos válidos!",
    errorNoSrtFirst: "¡Por favor, cargue un archivo .srt primero antes de cargar un archivo .mmm!",
    errorNoValidText: "¡El archivo no contiene textos válidos o los números de línea no coinciden con los subtítulos cargados!",
    errorNoTranslation: "¡Nada que guardar! Por favor, traduzca los subtítulos primero.",
    errorNoSubtitleToSave: "¡No hay subtítulos cargados para guardar!",
    errorNoSourceLanguage: "Por favor, seleccione el idioma de origen",
    errorNoTargetLanguage: "Por favor, seleccione el idioma de destino",
    errorApiKey: "Se requiere una clave API para este modo de traducción",
    errorApiNotAvailable: "La API de LM Studio no está disponible. Compruebe si LM Studio está ejecutándose en segundo plano.",
    errorRetranslation: "¡Se produjo un error durante la retraducción!",
    errorLoadWorkFile: "Se produjo un error al cargar el archivo de trabajo. ¡Compruebe el formato del archivo!",
    errorServerConnection: "No se puede conectar al servidor LM Studio",
    errorFileSave: "¡Error al guardar el archivo!",
    
    // API key management
    toggleApiKeyVisibility: "Mostrar/Ocultar clave API",
    
    // Textos de animación de carga
    loadingGeneral: "Cargando...",
    loadingFileProcessing: "Procesando archivo...",
    loadingTablePopulation: "Rellenando tabla...",
    loadingWorkFileProcessing: "Procesando archivo de trabajo...",
    loadingMmmFileProcessing: "Procesando archivo MMM...",
    loadingTranslation: "Traduciendo...",
    loadingClickToClose: "Haga clic en cualquier lugar fuera para cerrar",
    loadingBatchTranslation: "Traducción por lotes en progreso...",
    
    // Mensajes de error del modo de traducción por lotes
    errorNumberingRetry: "Error de numeración, reintentando ({0}/{1})...",
    errorRateLimitExceeded: "Límite de velocidad de la API excedido, esperando 10 segundos...",
    errorTranslationRetry: "Error de traducción, reintentando ({0}/{1})...",
    errorTranslationFailed: "Traducción fallida después de {0} intentos, continuando...",
    batchTranslationInProgress: "{0} {1}-{2} traducción en progreso...",
    
    // Modo de traducción especial
    batchModeLabel: "Modo de traducción con contexto amplio especial",
    batchModeInfo: "Cuando esta función está activada, el programa procesa 30 líneas de texto a la vez de una manera especial, lo que permite una traducción más rápida con mejor comprensión y precisión"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = es;
} else {
    // For browser environment
    window.es = es;
}
