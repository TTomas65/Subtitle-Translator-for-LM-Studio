// العربية language file
const ar = {
    // Main title
    appTitle: "مترجم ترجمات SRT",
    
    // File upload
    fileUploadTitle: "تحميل ملف الترجمة",
    fileInputLabel: "اختر ملفًا",
    browseButton: "تصفح...",
    noFileSelected: "لم يتم اختيار ملف",
    fileInfo: "سطر",
    
    // Translation temperature
    temperatureTitle: "درجة حرية الترجمة",
    temperatureAccurate: "دقيقة",
    temperatureBalanced: "متوازنة",
    temperatureCreative: "إبداعية",
    
    // Translation mode and API key
    languageTitle: "الترجمة",
    translationModeTitle: "وضع الترجمة",
    apiKeyLabel: "مفتاح API",
    showApiKeyButton: "عرض",
    sourceLanguage: "اللغة المصدر",
    targetLanguage: "اللغة الهدف",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "اختيار نموذج OpenRouter:",
    selectModelPlaceholder: "اختر نموذجًا...",
    
    // Buttons
    startTranslation: "بدء الترجمة",
    continueTranslation: "متابعة الترجمة",
    stopTranslation: "إيقاف الترجمة",
    resetTranslation: "إعادة ضبط",
    saveTranslation: "حفظ الترجمة",
    saveWorkFile: "حفظ ملف العمل",
    saveSourceBlock: "حفظ كتلة المصدر",
    
    // Table
    originalSubtitle: "الترجمة الأصلية",
    translatedSubtitle: "النص المترجم",
    actions: "الإجراءات",
    retranslate: "إعادة الترجمة",
    
    // Status
    translationProgress: "تقدم الترجمة",
    translationComplete: "اكتملت الترجمة",
    translationStopped: "توقفت الترجمة",
    translationReset: "تمت إعادة ضبط الترجمة",
    translationSaved: "تم حفظ الترجمة",
    workFileSaved: "تم حفظ ملف العمل",
    
    // Success messages
    successTranslation: "تمت الترجمة بنجاح!",
    translationCompleted: "تمت الترجمة بنجاح!",
    successLoadWorkFile: "تم تحميل ملف العمل بنجاح! يمكنك متابعة الترجمة.",
    successSaveWorkFile: "تم حفظ ملف العمل بنجاح!",
    
    // Error messages
    errorFileLoad: "خطأ في تحميل الملف",
    errorTranslation: "حدث خطأ أثناء الترجمة!",
    errorSave: "خطأ في حفظ الملف",
    errorSaveTranslation: "خطأ في حفظ الترجمة",
    errorSaveSrt: "خطأ في حفظ ملف SRT",
    errorSaveSourceBlock: "خطأ في حفظ كتلة المصدر",
    errorLoadLanguage: "خطأ في تحميل ملف اللغة",
    errorNoFile: "الرجاء اختيار ملف!",
    errorTranslationRunning: "الرجاء إيقاف الترجمة قبل تحميل ملف جديد!",
    errorInvalidFile: "يمكن تحميل ملفات .srt أو .wrk أو .mmm فقط!",
    errorNoSubtitles: "الملف لا يحتوي على ترجمات صالحة!",
    errorNoSrtFirst: "الرجاء تحميل ملف .srt أولاً قبل تحميل ملف .mmm!",
    errorNoValidText: "الملف لا يحتوي على نصوص صالحة أو أرقام الأسطر لا تتطابق مع الترجمات المحملة!",
    errorNoTranslation: "لا يوجد شيء للحفظ! الرجاء ترجمة الترجمات أولاً.",
    errorNoSubtitleToSave: "لا توجد ترجمة محملة لحفظها!",
    errorNoSourceLanguage: "الرجاء تحديد لغة المصدر",
    errorNoTargetLanguage: "الرجاء تحديد لغة الهدف",
    errorApiKey: "مفتاح API مطلوب لهذا وضع الترجمة",
    errorApiNotAvailable: "واجهة برمجة تطبيقات LM Studio غير متاحة. يرجى التحقق من تشغيل LM Studio في الخلفية.",
    errorRetranslation: "حدث خطأ أثناء إعادة الترجمة!",
    errorLoadWorkFile: "حدث خطأ أثناء تحميل ملف العمل. يرجى التحقق من تنسيق الملف!",
    errorServerConnection: "تعذر الاتصال بخادم LM Studio",
    
    // نصوص تحميل الرسوم المتحركة
    loadingGeneral: "جاري التحميل...",
    loadingFileProcessing: "جاري معالجة الملف...",
    loadingTablePopulation: "جاري ملء الجدول...",
    loadingWorkFileProcessing: "جاري معالجة ملف العمل...",
    loadingMmmFileProcessing: "جاري معالجة ملف MMM...",
    loadingTranslation: "جاري الترجمة...",
    loadingClickToClose: "انقر في أي مكان خارج النافذة للإغلاق",
    loadingBatchTranslation: "جاري الترجمة الدفعية...",
    
    // رسائل خطأ وضع الترجمة الدفعية
    errorNumberingRetry: "خطأ في الترقيم، إعادة المحاولة ({0}/{1})...",
    errorRateLimitExceeded: "تم تجاوز حد معدل واجهة برمجة التطبيقات، انتظار 10 ثوانٍ...",
    errorTranslationRetry: "خطأ في الترجمة، إعادة المحاولة ({0}/{1})...",
    errorTranslationFailed: "فشلت الترجمة بعد {0} محاولات، جاري المتابعة...",
    
    // وضع الترجمة الخاص
    batchModeLabel: "وضع ترجمة خاص بسياق كبير",
    batchModeInfo: "عند تفعيل هذه الميزة، يقوم البرنامج بمعالجة 30 سطرًا من النص في وقت واحد بطريقة خاصة، مما يتيح ترجمة أسرع مع فهم ودقة أفضل"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ar;
} else {
    // For browser environment
    window.ar = ar;
}
