// 中文 language file
const zh = {
    // Main title
    appTitle: "SRT字幕翻译器",
    
    // File upload
    fileUploadTitle: "上传字幕文件",
    fileInputLabel: "选择文件",
    browseButton: "浏览...",
    noFileSelected: "未选择文件",
    fileInfo: "行",
    
    // Translation temperature
    temperatureTitle: "翻译自由度",
    temperatureAccurate: "精确",
    temperatureBalanced: "平衡",
    temperatureCreative: "创意",
    
    // Translation mode and API key
    languageTitle: "翻译",
    translationModeTitle: "翻译模式",
    apiKeyLabel: "API密钥",
    showApiKeyButton: "显示",
    sourceLanguage: "源语言",
    targetLanguage: "目标语言",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter模型选择:",
    selectModelPlaceholder: "选择一个模型...",
    
    // Buttons
    startTranslation: "开始翻译",
    continueTranslation: "继续翻译",
    stopTranslation: "停止翻译",
    resetTranslation: "重置",
    saveTranslation: "保存翻译",
    saveWorkFile: "保存工作文件",
    saveSourceBlock: "保存源块",
    
    // Table
    originalSubtitle: "原始字幕",
    translatedSubtitle: "翻译文本",
    actions: "操作",
    retranslate: "重新翻译",
    
    // Status
    translationProgress: "翻译进度",
    translationComplete: "翻译完成",
    translationStopped: "翻译已停止",
    translationReset: "翻译已重置",
    translationSaved: "翻译已保存",
    workFileSaved: "工作文件已保存",
    
    // Success messages
    successTranslation: "翻译成功完成！",
    translationCompleted: "翻译成功完成！",
    successLoadWorkFile: "工作文件成功加载！您可以继续翻译。",
    successSaveWorkFile: "工作文件成功保存！",
    successWorkFile: "工作文件成功保存！",
    successSourceBlock: "源块成功保存！",
    
    // Error messages
    errorFileLoad: "加载文件时出错",
    errorTranslation: "翻译过程中发生错误",
    errorSave: "保存文件时出错",
    errorSaveTranslation: "保存翻译时出错",
    errorSaveSrt: "保存SRT文件时出错",
    errorSaveSourceBlock: "保存源块时出错",
    errorLoadLanguage: "加载语言文件时出错",
    errorNoFile: "请先选择一个文件!",
    errorTranslationRunning: "请在加载新文件之前停止翻译!",
    errorInvalidFile: "只能加载 .srt、.wrk 或 .mmm 文件!",
    errorNoSubtitles: "文件不包含有效的字幕!",
    errorNoSrtFirst: "请先加载 .srt 文件,然后再加载 .mmm 文件!",
    errorNoValidText: "文件不包含有效文本或行号与加载的字幕不匹配!",
    errorNoTranslation: "没有可保存的内容!请先翻译字幕。",
    errorNoSubtitleToSave: "没有加载要保存的字幕!",
    errorNoSourceLanguage: "请选择源语言",
    errorNoTargetLanguage: "请选择目标语言",
    errorApiKey: "此翻译模式需要API密钥",
    errorApiNotAvailable: "LM Studio API 不可用。请检查 LM Studio 是否在后台运行。",
    errorRetranslation: "重新翻译时发生错误!",
    errorLoadWorkFile: "加载工作文件时发生错误。请检查文件格式!",
    errorServerConnection: "无法连接到 LM Studio 服务器",
    errorFileSave: "保存文件时发生错误!",
    
    // API密钥管理
    toggleApiKeyVisibility: "显示/隐藏API密钥",
    
    // 加载动画文本
    loadingGeneral: "加载中...",
    loadingFileProcessing: "文件处理中...",
    loadingTablePopulation: "填充表格中...",
    loadingWorkFileProcessing: "工作文件处理中...",
    loadingMmmFileProcessing: "MMM文件处理中...",
    loadingTranslation: "翻译中...",
    loadingClickToClose: "点击外部任意位置关闭",
    loadingBatchTranslation: "批量翻译进行中...",
    
    // 批量翻译模式错误消息
    errorNumberingRetry: "编号错误，重试中 ({0}/{1})...",
    errorRateLimitExceeded: "API速率限制超出，等待10秒...",
    errorTranslationRetry: "翻译错误，重试中 ({0}/{1})...",
    errorTranslationFailed: "经过{0}次尝试后翻译失败，继续进行...",
    batchTranslationInProgress: "{0} {1}-{2} 翻译进行中...",
    
    // 特殊翻译模式
    batchModeLabel: "特殊大上下文翻译模式",
    batchModeInfo: "启用此功能后，程序会以特殊方式一次处理30行文本，从而实现更快的翻译，具有更好的理解力和准确性"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = zh;
} else {
    // For browser environment
    window.zh = zh;
}
