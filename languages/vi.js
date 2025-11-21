// Tiếng Việt language file
const vi = {
    // Main title
    appTitle: "Trình Dịch Phụ Đề SRT",
    
    // File upload
    fileUploadTitle: "Tải lên tệp phụ đề",
    fileInputLabel: "Chọn tệp",
    browseButton: "Duyệt...",
    noFileSelected: "Chưa chọn tệp nào",
    fileInfo: "dòng",
    
    // Translation temperature
    temperatureTitle: "Mức độ tự do dịch",
    temperatureAccurate: "Chính xác",
    temperatureBalanced: "Cân bằng",
    temperatureCreative: "Sáng tạo",
    
    // Translation mode and API key
    languageTitle: "Dịch thuật",
    translationModeTitle: "Chế độ dịch",
    apiKeyLabel: "Khóa API",
    showApiKeyButton: "Hiển thị",
    sourceLanguage: "Ngôn ngữ nguồn",
    targetLanguage: "Ngôn ngữ đích",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Lựa chọn mô hình OpenRouter:",
    selectModelPlaceholder: "Chọn một mô hình...",
    
    // Buttons
    startTranslation: "Bắt đầu dịch",
    continueTranslation: "Tiếp tục dịch",
    stopTranslation: "Dừng dịch",
    resetTranslation: "Đặt lại",
    saveTranslation: "Lưu bản dịch",
    saveWorkFile: "Lưu tệp công việc",
    saveSourceBlock: "Lưu khối nguồn",
    
    // Table
    originalSubtitle: "Phụ đề gốc",
    translatedSubtitle: "Văn bản đã dịch",
    actions: "Hành động",
    retranslate: "Dịch lại",
    
    // Status
    translationProgress: "Tiến độ dịch",
    translationComplete: "Dịch hoàn thành",
    translationStopped: "Đã dừng dịch",
    translationReset: "Đã đặt lại bản dịch",
    translationSaved: "Đã lưu bản dịch",
    workFileSaved: "Đã lưu tệp công việc",
    
    // Success messages
    successTranslation: "Dịch hoàn thành thành công!",
    translationCompleted: "Dịch hoàn thành thành công!",
    successLoadWorkFile: "Đã tải tệp công việc thành công! Bạn có thể tiếp tục dịch.",
    successSaveWorkFile: "Đã lưu tệp công việc thành công!",
    
    // Error messages
    errorFileLoad: "Lỗi khi tải tệp",
    errorTranslation: "Đã xảy ra lỗi trong quá trình dịch!",
    errorSave: "Lỗi khi lưu tệp",
    errorSaveTranslation: "Lỗi khi lưu bản dịch",
    errorSaveSrt: "Lỗi khi lưu tệp SRT",
    errorSaveSourceBlock: "Lỗi khi lưu khối nguồn",
    errorLoadLanguage: "Lỗi khi tải tệp ngôn ngữ",
    errorNoFile: "Vui lòng chọn một tệp!",
    errorTranslationRunning: "Vui lòng dừng dịch trước khi tải tệp mới!",
    errorInvalidFile: "Chỉ có thể tải các tệp .srt, .wrk hoặc .mmm!",
    errorNoSubtitles: "Tệp không chứa phụ đề hợp lệ!",
    errorNoSrtFirst: "Vui lòng tải tệp .srt trước khi tải tệp .mmm!",
    errorNoValidText: "Tệp không chứa văn bản hợp lệ hoặc số dòng không khớp với phụ đề đã tải!",
    errorNoTranslation: "Không có gì để lưu! Vui lòng dịch phụ đề trước.",
    errorNoSubtitleToSave: "Không có phụ đề nào được tải để lưu!",
    errorNoSourceLanguage: "Vui lòng chọn ngôn ngữ nguồn",
    errorNoTargetLanguage: "Vui lòng chọn ngôn ngữ đích",
    errorApiKey: "Cần khóa API cho chế độ dịch này",
    errorApiNotAvailable: "API LM Studio không khả dụng. Vui lòng kiểm tra xem LM Studio có đang chạy trong nền không.",
    errorRetranslation: "Đã xảy ra lỗi trong quá trình dịch lại!",
    errorLoadWorkFile: "Đã xảy ra lỗi khi tải tệp công việc. Vui lòng kiểm tra định dạng tệp!",
    errorServerConnection: "Không thể kết nối đến máy chủ LM Studio",
    
    // Văn bản hoạt ảnh đang tải
    loadingGeneral: "Đang tải...",
    loadingFileProcessing: "Đang xử lý tệp...",
    loadingTablePopulation: "Đang điền bảng...",
    loadingWorkFileProcessing: "Đang xử lý tệp công việc...",
    loadingMmmFileProcessing: "Đang xử lý tệp MMM...",
    loadingTranslation: "Đang dịch...",
    loadingClickToClose: "Nhấp vào bất kỳ đâu bên ngoài để đóng",
    loadingBatchTranslation: "Đang tiến hành dịch hàng loạt...",
    
    // Thông báo lỗi cho chế độ dịch hàng loạt
    errorNumberingRetry: "Lỗi đánh số, đang thử lại ({0}/{1})...",
    errorRateLimitExceeded: "Vượt quá giới hạn tốc độ API, đang đợi 10 giây...",
    errorTranslationRetry: "Lỗi dịch, đang thử lại ({0}/{1})...",
    errorTranslationFailed: "Dịch thất bại sau {0} lần thử, đang tiếp tục...",
    
    // Chế độ dịch đặc biệt
    batchModeLabel: "Chế độ dịch ngữ cảnh lớn đặc biệt",
    batchModeInfo: "Khi tính năng này được bật, chương trình xử lý 30 dòng văn bản cùng một lúc theo cách đặc biệt, cho phép dịch nhanh hơn với khả năng hiểu và độ chính xác tốt hơn"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vi;
} else {
    // For browser environment
    window.vi = vi;
}
