// 繁體中文（香港） language file
const zh_hk = {
    // Main title
    appTitle: "SRT字幕翻譯器",
    // File upload
    fileUploadTitle: "上載字幕檔案",
    fileInputLabel: "選擇檔案",
    browseButton: "瀏覽...",
    noFileSelected: "未選擇檔案",
    fileInfo: "行數",
    // Translation temperature
    temperatureTitle: "翻譯自由度",
    temperatureAccurate: "精確",
    temperatureBalanced: "平衡",
    temperatureCreative: "創意",
    // Translation mode and API key
    languageTitle: "翻譯",
    translationModeTitle: "翻譯模式",
    apiKeyLabel: "API金鑰",
    showApiKeyButton: "顯示",
    sourceLanguage: "來源語言",
    targetLanguage: "目標語言",
    // OpenRouter model selector
    openrouterModelLabel: "OpenRouter模型選擇:",
    selectModelPlaceholder: "選擇模型...",
    // Buttons
    startTranslation: "開始翻譯",
    continueTranslation: "繼續翻譯",
    stopTranslation: "停止翻譯",
    resetTranslation: "重設",
    saveTranslation: "儲存翻譯",
    saveWorkFile: "儲存工作檔",
    saveSourceBlock: "儲存來源區塊",
    // Table
    originalSubtitle: "原始字幕",
    translatedSubtitle: "翻譯文字",
    actions: "操作",
    retranslate: "重新翻譯",
    // Status
    translationProgress: "翻譯進度",
    translationComplete: "翻譯完成",
    translationStopped: "翻譯已停止",
    translationReset: "翻譯已重設",
    translationSaved: "翻譯已儲存",
    workFileSaved: "工作檔已儲存",
    // Success messages
    successTranslation: "翻譯成功完成！",
    translationCompleted: "翻譯成功完成！",
    successLoadWorkFile: "成功載入工作檔！您可以繼續翻譯。",
    successSaveWorkFile: "成功儲存工作檔！",
    successWorkFile: "成功儲存工作檔！",
    successSourceBlock: "成功儲存來源區塊！",
    // Error messages
    errorFileLoad: "載入檔案時發生錯誤",
    errorTranslation: "翻譯過程中發生錯誤！",
    errorSave: "儲存檔案時發生錯誤",
    errorSaveTranslation: "儲存翻譯時發生錯誤",
    errorSaveSrt: "儲存 SRT 檔時發生錯誤",
    errorSaveSourceBlock: "儲存來源區塊時發生錯誤",
    errorLoadLanguage: "載入語言檔時發生錯誤",
    errorNoFile: "請選擇檔案！",
    errorTranslationRunning: "載入新檔案前請先停止翻譯！",
    errorInvalidFile: "只可載入 .srt、.wrk 或 .mmm 檔！",
    errorNoSubtitles: "檔案不包含有效字幕！",
    errorNoSrtFirst: "請先載入 .srt 檔，然後再載入 .mmm 檔！",
    errorNoValidText: "檔案不包含有效文字，或行號與載入的字幕不相符！",
    errorNoTranslation: "沒有可儲存的內容！請先翻譯字幕。",
    errorNoSubtitleToSave: "沒有載入可儲存的字幕！",
    errorNoSourceLanguage: "請選擇來源語言",
    errorNoTargetLanguage: "請選擇目標語言",
    errorApiKey: "此翻譯模式需要 API 金鑰",
    errorApiNotAvailable: "LM Studio API 不可用。請檢查 LM Studio 是否在背景執行。",
    errorRetranslation: "重新翻譯過程中發生錯誤！",
    errorLoadWorkFile: "載入工作檔時發生錯誤。請檢查檔案格式！",
    errorServerConnection: "無法連接 LM Studio 伺服器",
    errorFileSave: "儲存檔案時發生錯誤！",
    // API key management
    toggleApiKeyVisibility: "顯示/隱藏 API 金鑰",
    // Loading texts
    loadingGeneral: "載入中...",
    loadingFileProcessing: "檔案處理中...",
    loadingTablePopulation: "填充表格中...",
    loadingWorkFileProcessing: "工作檔處理中...",
    loadingMmmFileProcessing: "MMM 檔處理中...",
    loadingTranslation: "翻譯中...",
    loadingClickToClose: "點擊外部任意位置關閉",
    loadingBatchTranslation: "批次翻譯進行中...",
    // Batch translation messages
    errorNumberingRetry: "編號錯誤，重試中 ({0}/{1})...",
    errorRateLimitExceeded: "API 速率限制超出，等待 10 秒...",
    errorTranslationRetry: "翻譯錯誤，重試中 ({0}/{1})...",
    errorTranslationFailed: "嘗試 {0} 次後翻譯失敗，繼續進行...",
    batchTranslationInProgress: "{0} {1}-{2} 翻譯進行中...",
    // Special mode
    batchModeLabel: "特殊大上下文翻譯模式",
    batchModeInfo: "啟用此功能後，程式會以特殊方式一次處理 30 行文字，從而實現更快、更準確的翻譯"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = zh_hk;
} else {
    window.zh_hk = zh_hk;
}
