// Türkçe language file
const tr = {
    // Main title
    appTitle: "SRT Altyazı Çevirmeni",
    
    // File upload
    fileUploadTitle: "Altyazı Dosyası Yükle",
    fileInputLabel: "Dosya Seç",
    browseButton: "Gözat...",
    noFileSelected: "Dosya seçilmedi",
    fileInfo: "satır",
    
    // Translation temperature
    temperatureTitle: "Çeviri Serbestliği",
    temperatureAccurate: "Kesin",
    temperatureBalanced: "Dengeli",
    temperatureCreative: "Yaratıcı",
    
    // Translation mode and API key
    languageTitle: "Çeviri",
    translationModeTitle: "Çeviri modu",
    apiKeyLabel: "API Anahtarı",
    showApiKeyButton: "Göster",
    sourceLanguage: "Kaynak Dil",
    targetLanguage: "Hedef Dil",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter model seçimi:",
    selectModelPlaceholder: "Bir model seçin...",
    
    // Buttons
    startTranslation: "Çeviriyi Başlat",
    continueTranslation: "Çeviriye Devam Et",
    stopTranslation: "Çeviriyi Durdur",
    resetTranslation: "Sıfırla",
    saveTranslation: "Çeviriyi Kaydet",
    saveWorkFile: "Çalışma Dosyasını Kaydet",
    saveSourceBlock: "Kaynak Bloğu Kaydet",
    
    // Table
    originalSubtitle: "Orijinal Altyazı",
    translatedSubtitle: "Çevrilmiş Metin",
    actions: "İşlemler",
    retranslate: "Yeniden Çevir",
    
    // Status
    translationProgress: "Çeviri İlerlemesi",
    translationComplete: "Çeviri Tamamlandı",
    translationStopped: "Çeviri Durduruldu",
    translationReset: "Çeviri Sıfırlandı",
    translationSaved: "Çeviri Kaydedildi",
    workFileSaved: "Çalışma Dosyası Kaydedildi",
    
    // Success messages
    successTranslation: "Çeviri başarıyla tamamlandı!",
    translationCompleted: "Çeviri başarıyla tamamlandı!",
    successLoadWorkFile: "Çalışma dosyası başarıyla yüklendi! Çeviriye devam edebilirsiniz.",
    successSaveWorkFile: "Çalışma dosyası başarıyla kaydedildi!",
    
    // Error messages
    errorFileLoad: "Dosya yükleme hatası",
    errorTranslation: "Çeviri sırasında bir hata oluştu!",
    errorSave: "Dosya kaydedilirken hata oluştu",
    errorSaveTranslation: "Çeviri kaydedilirken hata oluştu",
    errorSaveSrt: "SRT dosyası kaydedilirken hata oluştu",
    errorSaveSourceBlock: "Kaynak blok kaydedilirken hata oluştu",
    errorLoadLanguage: "Dil dosyası yüklenirken hata oluştu",
    errorNoFile: "Lütfen bir dosya seçin!",
    errorTranslationRunning: "Yeni bir dosya yüklemeden önce lütfen çeviriyi durdurun!",
    errorInvalidFile: "Sadece .srt, .wrk veya .mmm dosyaları yüklenebilir!",
    errorNoSubtitles: "Dosya geçerli altyazı içermiyor!",
    errorNoSrtFirst: ".mmm dosyasını yüklemeden önce lütfen önce bir .srt dosyası yükleyin!",
    errorNoValidText: "Dosya geçerli metin içermiyor veya satır numaraları yüklenen altyazılarla eşleşmiyor!",
    errorNoTranslation: "Kaydedilecek bir şey yok! Lütfen önce altyazıları çevirin.",
    errorNoSubtitleToSave: "Kaydedilecek alt yazı yüklenmedi!",
    errorNoSourceLanguage: "Lütfen kaynak dili seçin",
    errorNoTargetLanguage: "Lütfen hedef dili seçin",
    errorApiKey: "Bu çeviri modu için API anahtarı gereklidir",
    errorApiNotAvailable: "LM Studio API kullanılamıyor. Lütfen LM Studio'nun arka planda çalıştığını kontrol edin.",
    errorRetranslation: "Yeniden çeviri sırasında bir hata oluştu!",
    errorLoadWorkFile: "Çalışma dosyası yüklenirken bir hata oluştu. Lütfen dosya formatını kontrol edin!",
    errorServerConnection: "LM Studio sunucusuna bağlanılamadı",
    
    // Yükleme animasyonu metinleri
    loadingGeneral: "Yükleniyor...",
    loadingFileProcessing: "Dosya işleniyor...",
    loadingTablePopulation: "Tablo dolduruluyor...",
    loadingWorkFileProcessing: "Çalışma dosyası işleniyor...",
    loadingMmmFileProcessing: "MMM dosyası işleniyor...",
    loadingTranslation: "Çeviri yapılıyor...",
    loadingClickToClose: "Kapatmak için dışarıdaki herhangi bir yere tıklayın",
    loadingBatchTranslation: "Toplu çeviri devam ediyor...",
    
    // Toplu çeviri modu hata mesajları
    errorNumberingRetry: "Numaralandırma hatası, yeniden deneniyor ({0}/{1})...",
    errorRateLimitExceeded: "API hız sınırı aşıldı, 10 saniye bekleniyor...",
    errorTranslationRetry: "Çeviri hatası, yeniden deneniyor ({0}/{1})...",
    errorTranslationFailed: "{0} denemeden sonra çeviri başarısız oldu, devam ediliyor...",
    
    // Özel çeviri modu
    batchModeLabel: "Özel geniş bağlam çeviri modu",
    batchModeInfo: "Bu özellik etkinleştirildiğinde, program özel bir şekilde aynı anda 30 satır metni işleyerek daha iyi anlama ve doğrulukla daha hızlı çeviri yapılmasını sağlar"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tr;
} else {
    // For browser environment
    window.tr = tr;
}
