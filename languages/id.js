// Bahasa Indonesia language file
const id = {
    // Main title
    appTitle: "Penerjemah Subtitle SRT",
    
    // File upload
    fileUploadTitle: "Unggah File Subtitle",
    fileInputLabel: "Pilih File",
    browseButton: "Jelajahi...",
    noFileSelected: "Tidak ada file yang dipilih",
    fileInfo: "baris",
    
    // Translation temperature
    temperatureTitle: "Kebebasan Terjemahan",
    temperatureAccurate: "Akurat",
    temperatureBalanced: "Seimbang",
    temperatureCreative: "Kreatif",
    
    // Translation mode and API key
    languageTitle: "Terjemahan",
    translationModeTitle: "Mode Terjemahan",
    apiKeyLabel: "Kunci API",
    showApiKeyButton: "Tampilkan",
    sourceLanguage: "Bahasa Sumber",
    targetLanguage: "Bahasa Target",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "Pemilihan Model OpenRouter:",
    selectModelPlaceholder: "Pilih model...",
    
    // Buttons
    startTranslation: "Mulai Terjemahan",
    continueTranslation: "Lanjutkan Terjemahan",
    stopTranslation: "Hentikan Terjemahan",
    resetTranslation: "Reset",
    saveTranslation: "Simpan Terjemahan",
    saveWorkFile: "Simpan File Kerja",
    saveSourceBlock: "Simpan Blok Sumber",
    
    // Table
    originalSubtitle: "Subtitle Asli",
    translatedSubtitle: "Teks Terjemahan",
    actions: "Tindakan",
    retranslate: "Terjemahkan Ulang",
    
    // Status
    translationProgress: "Kemajuan Terjemahan",
    translationComplete: "Terjemahan Selesai",
    translationStopped: "Terjemahan Dihentikan",
    translationReset: "Terjemahan Direset",
    translationSaved: "Terjemahan Disimpan",
    workFileSaved: "File Kerja Disimpan",
    
    // Success messages
    successTranslation: "Terjemahan berhasil diselesaikan!",
    translationCompleted: "Terjemahan berhasil diselesaikan!",
    successLoadWorkFile: "File kerja berhasil dimuat! Anda dapat melanjutkan terjemahan.",
    successSaveWorkFile: "File kerja berhasil disimpan!",
    
    // Error messages
    errorFileLoad: "Kesalahan saat memuat file",
    errorTranslation: "Terjadi kesalahan selama proses terjemahan!",
    errorSave: "Kesalahan saat menyimpan file",
    errorSaveTranslation: "Kesalahan saat menyimpan terjemahan",
    errorSaveSrt: "Kesalahan saat menyimpan file SRT",
    errorSaveSourceBlock: "Kesalahan saat menyimpan blok sumber",
    errorLoadLanguage: "Kesalahan saat memuat file bahasa",
    errorNoFile: "Silakan pilih file!",
    errorTranslationRunning: "Silakan hentikan terjemahan sebelum memuat file baru!",
    errorInvalidFile: "Hanya file .srt, .wrk, atau .mmm yang dapat dimuat!",
    errorNoSubtitles: "File tidak berisi subtitle yang valid!",
    errorNoSrtFirst: "Silakan muat file .srt terlebih dahulu sebelum memuat file .mmm!",
    errorNoValidText: "File tidak berisi teks yang valid atau nomor baris tidak cocok dengan subtitle yang dimuat!",
    errorNoTranslation: "Tidak ada yang bisa disimpan! Silakan terjemahkan subtitle terlebih dahulu.",
    errorNoSubtitleToSave: "Tidak ada subtitle yang dimuat untuk disimpan!",
    errorNoSourceLanguage: "Silakan pilih bahasa sumber",
    errorNoTargetLanguage: "Silakan pilih bahasa target",
    errorApiKey: "Kunci API diperlukan untuk mode terjemahan ini",
    errorApiNotAvailable: "API LM Studio tidak tersedia. Silakan periksa apakah LM Studio berjalan di latar belakang.",
    errorRetranslation: "Terjadi kesalahan selama proses terjemahan ulang!",
    errorLoadWorkFile: "Terjadi kesalahan saat memuat file kerja. Silakan periksa format file!",
    errorServerConnection: "Tidak dapat terhubung ke server LM Studio",
    
    // Teks animasi pemuatan
    loadingGeneral: "Memuat...",
    loadingFileProcessing: "Memproses file...",
    loadingTablePopulation: "Mengisi tabel...",
    loadingWorkFileProcessing: "Memproses file kerja...",
    loadingMmmFileProcessing: "Memproses file MMM...",
    loadingTranslation: "Menerjemahkan...",
    loadingClickToClose: "Klik di mana saja di luar untuk menutup",
    loadingBatchTranslation: "Terjemahan batch sedang berlangsung...",
    
    // Pesan kesalahan untuk mode terjemahan batch
    errorNumberingRetry: "Kesalahan penomoran, mencoba lagi ({0}/{1})...",
    errorRateLimitExceeded: "Batas kecepatan API terlampaui, menunggu 10 detik...",
    errorTranslationRetry: "Kesalahan terjemahan, mencoba lagi ({0}/{1})...",
    errorTranslationFailed: "Terjemahan gagal setelah {0} percobaan, melanjutkan...",
    
    // Mode terjemahan khusus
    batchModeLabel: "Mode terjemahan konteks besar khusus",
    batchModeInfo: "Saat fitur ini diaktifkan, program memproses 30 baris teks sekaligus dengan cara khusus, memungkinkan terjemahan lebih cepat dengan pemahaman dan akurasi yang lebih baik"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = id;
} else {
    // For browser environment
    window.id = id;
}
