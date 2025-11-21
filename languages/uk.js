// Українська language file
const uk = {
    // Main title
    appTitle: "SRT Перекладач субтитрів",
    
    // File upload
    fileUploadTitle: "Завантажити файл субтитрів",
    fileInputLabel: "Вибрати файл",
    browseButton: "Огляд...",
    noFileSelected: "Файл не вибрано",
    fileInfo: "рядків",
    
    // Translation temperature
    temperatureTitle: "Свобода перекладу",
    temperatureAccurate: "Точний",
    temperatureBalanced: "Збалансований",
    temperatureCreative: "Творчий",
    
    // Translation mode and API key
    languageTitle: "Переклад",
    translationModeTitle: "Режим перекладу",
    apiKeyLabel: "API ключ",
    showApiKeyButton: "Показати",
    sourceLanguage: "Вихідна мова",
    targetLanguage: "Цільова мова",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Вибір моделі OpenRouter:",
    selectModelPlaceholder: "Виберіть модель...",
    
    // Buttons
    startTranslation: "Почати переклад",
    continueTranslation: "Продовжити переклад",
    stopTranslation: "Зупинити переклад",
    resetTranslation: "Скинути",
    saveTranslation: "Зберегти переклад",
    saveWorkFile: "Зберегти робочий файл",
    saveSourceBlock: "Зберегти вихідний блок",
    
    // Table
    originalSubtitle: "Оригінальний субтитр",
    translatedSubtitle: "Перекладений текст",
    actions: "Дії",
    retranslate: "Перекласти знову",
    
    // Status
    translationProgress: "Прогрес перекладу",
    translationComplete: "Переклад завершено",
    translationStopped: "Переклад зупинено",
    translationReset: "Переклад скинуто",
    translationSaved: "Переклад збережено",
    workFileSaved: "Робочий файл збережено",
    
    // Success messages
    successTranslation: "Переклад успішно завершено!",
    translationCompleted: "Переклад успішно завершено!",
    successLoadWorkFile: "Робочий файл успішно завантажено! Ви можете продовжити переклад.",
    successSaveWorkFile: "Робочий файл успішно збережено!",
    
    // Error messages
    errorFileLoad: "Помилка завантаження файлу",
    errorTranslation: "Під час перекладу сталася помилка!",
    errorSave: "Помилка збереження файлу",
    errorSaveTranslation: "Помилка збереження перекладу",
    errorSaveSrt: "Помилка збереження SRT файлу",
    errorSaveSourceBlock: "Помилка збереження вихідного блоку",
    errorLoadLanguage: "Помилка завантаження мовного файлу",
    errorNoFile: "Будь ласка, виберіть файл!",
    errorTranslationRunning: "Будь ласка, зупиніть переклад перед завантаженням нового файлу!",
    errorInvalidFile: "Можна завантажувати лише файли .srt, .wrk або .mmm!",
    errorNoSubtitles: "Файл не містить дійсних субтитрів!",
    errorNoSrtFirst: "Будь ласка, спочатку завантажте файл .srt перед завантаженням файлу .mmm!",
    errorNoValidText: "Файл не містить дійсного тексту або номери рядків не відповідають завантаженим субтитрам!",
    errorNoTranslation: "Немає що зберігати! Спочатку перекладіть субтитри.",
    errorNoSubtitleToSave: "Немає завантажених субтитрів для збереження!",
    errorNoSourceLanguage: "Будь ласка, виберіть вихідну мову",
    errorNoTargetLanguage: "Будь ласка, виберіть цільову мову",
    errorApiKey: "API ключ необхідний для цього режиму перекладу",
    errorApiNotAvailable: "API LM Studio недоступний. Перевірте, чи працює LM Studio у фоновому режимі.",
    errorRetranslation: "Під час повторного перекладу сталася помилка!",
    errorLoadWorkFile: "Під час завантаження робочого файлу сталася помилка. Перевірте формат файлу!",
    errorServerConnection: "Не вдалося підключитися до сервера LM Studio",
    
    // Тексти анімації завантаження
    loadingGeneral: "Завантаження...",
    loadingFileProcessing: "Обробка файлу...",
    loadingTablePopulation: "Заповнення таблиці...",
    loadingWorkFileProcessing: "Обробка робочого файлу...",
    loadingMmmFileProcessing: "Обробка MMM файлу...",
    loadingTranslation: "Переклад...",
    loadingClickToClose: "Клацніть будь-де зовні, щоб закрити",
    loadingBatchTranslation: "Пакетний переклад в процесі...",
    
    // Повідомлення про помилки в режимі пакетного перекладу
    errorNumberingRetry: "Помилка нумерації, повторна спроба ({0}/{1})...",
    errorRateLimitExceeded: "Перевищено ліміт швидкості API, очікування 10 секунд...",
    errorTranslationRetry: "Помилка перекладу, повторна спроба ({0}/{1})...",
    errorTranslationFailed: "Переклад не вдався після {0} спроб, продовжуємо...",
    
    // Спеціальний режим перекладу
    batchModeLabel: "Спеціальний режим перекладу з великим контекстом",
    batchModeInfo: "Коли ця функція увімкнена, програма обробляє 30 рядків тексту одночасно особливим способом, що дозволяє швидше виконувати переклад з кращим розумінням та точністю"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = uk;
} else {
    // For browser environment
    window.uk = uk;
}
