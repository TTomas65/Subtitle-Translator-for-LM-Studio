// Русский language file
const ru = {
    // Main title
    appTitle: "Переводчик субтитров SRT",
    
    // File upload
    fileUploadTitle: "Загрузить файл субтитров",
    fileInputLabel: "Выбрать файл",
    browseButton: "Обзор...",
    noFileSelected: "Файл не выбран",
    fileInfo: "строк",
    
    // Translation temperature
    temperatureTitle: "Температура перевода",
    temperatureAccurate: "Точный",
    temperatureBalanced: "Сбалансированный",
    temperatureCreative: "Творческий",
    
    // Translation mode and API key
    languageTitle: "Перевод",
    translationModeTitle: "Режим перевода",
    apiKeyLabel: "API ключ",
    showApiKeyButton: "Показать",
    sourceLanguage: "Исходный язык",
    targetLanguage: "Целевой язык",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Выбор модели OpenRouter:",
    selectModelPlaceholder: "Выберите модель...",
    
    // Buttons
    startTranslation: "Начать перевод",
    continueTranslation: "Продолжить перевод",
    stopTranslation: "Остановить перевод",
    resetTranslation: "Сбросить",
    saveTranslation: "Сохранить перевод",
    saveWorkFile: "Сохранить рабочий файл",
    saveSourceBlock: "Сохранить исходный блок",
    
    // Table
    originalSubtitle: "Оригинальные субтитры",
    translatedSubtitle: "Переведенный текст",
    actions: "Действия",
    retranslate: "Перевести заново",
    
    // Status
    translationProgress: "Прогресс перевода",
    translationComplete: "Перевод завершен",
    translationStopped: "Перевод остановлен",
    translationReset: "Перевод сброшен",
    translationSaved: "Перевод сохранен",
    workFileSaved: "Рабочий файл сохранен",
    
    // Success messages
    successTranslation: "Перевод успешно завершен!",
    translationCompleted: "Перевод успешно завершен!",
    successLoadWorkFile: "Рабочий файл успешно загружен! Вы можете продолжить перевод.",
    successSaveWorkFile: "Рабочий файл успешно сохранен!",
    successWorkFile: "Рабочий файл успешно сохранен!",
    successSourceBlock: "Исходный блок успешно сохранен!",
    
    // Error messages
    errorFileLoad: "Ошибка загрузки файла",
    errorTranslation: "Произошла ошибка во время перевода",
    errorSave: "Ошибка сохранения файла",
    errorSaveTranslation: "Ошибка сохранения перевода",
    errorSaveSrt: "Ошибка сохранения SRT файла",
    errorSaveSourceBlock: "Ошибка сохранения исходного блока",
    errorLoadLanguage: "Ошибка загрузки языкового файла",
    errorNoFile: "Пожалуйста, выберите файл!",
    errorTranslationRunning: "Пожалуйста, остановите перевод перед загрузкой нового файла!",
    errorInvalidFile: "Можно загружать только файлы .srt, .wrk или .mmm!",
    errorNoSubtitles: "Файл не содержит действительных субтитров!",
    errorNoSrtFirst: "Пожалуйста, загрузите сначала файл .srt перед загрузкой файла .mmm!",
    errorNoValidText: "Файл не содержит допустимых текстов или номера строк не совпадают с загруженными субтитрами!",
    errorNoTranslation: "Нечего сохранять! Пожалуйста, сначала переведите субтитры.",
    errorNoSubtitleToSave: "Нет загруженных субтитров для сохранения!",
    errorNoSourceLanguage: "Пожалуйста, выберите исходный язык",
    errorNoTargetLanguage: "Пожалуйста, выберите целевой язык",
    errorApiKey: "Для этого режима перевода требуется API ключ",
    errorApiNotAvailable: "LM Studio API недоступен. Пожалуйста, проверьте, запущен ли LM Studio в фоновом режиме.",
    errorRetranslation: "Произошла ошибка во время повторного перевода!",
    errorLoadWorkFile: "Произошла ошибка при загрузке рабочего файла. Пожалуйста, проверьте формат файла!",
    errorServerConnection: "Не удалось подключиться к серверу LM Studio",
    errorFileSave: "Произошла ошибка при сохранении файла!",
    
    // Управление API ключом
    toggleApiKeyVisibility: "Показать/скрыть API ключ",
    
    // Тексты анимации загрузки
    loadingGeneral: "Загрузка...",
    loadingFileProcessing: "Обработка файла...",
    loadingTablePopulation: "Заполнение таблицы...",
    loadingWorkFileProcessing: "Обработка рабочего файла...",
    loadingMmmFileProcessing: "Обработка MMM файла...",
    loadingTranslation: "Перевод...",
    loadingClickToClose: "Нажмите в любом месте снаружи, чтобы закрыть",
    loadingBatchTranslation: "Пакетный перевод в процессе...",
    
    // Сообщения об ошибках в режиме пакетного перевода
    errorNumberingRetry: "Ошибка нумерации, повторная попытка ({0}/{1})...",
    errorRateLimitExceeded: "Превышен лимит скорости API, ожидание 10 секунд...",
    errorTranslationRetry: "Ошибка перевода, повторная попытка ({0}/{1})...",
    errorTranslationFailed: "Перевод не удался после {0} попыток, продолжаем...",
    batchTranslationInProgress: "{0} {1}-{2} перевод в процессе...",
    
    // Специальный режим перевода
    batchModeLabel: "Специальный режим перевода с расширенным контекстом",
    batchModeInfo: "Когда эта функция включена, программа обрабатывает 30 строк текста одновременно особым образом, что позволяет выполнять перевод быстрее с лучшим пониманием и точностью"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ru;
} else {
    // For browser environment
    window.ru = ru;
}
