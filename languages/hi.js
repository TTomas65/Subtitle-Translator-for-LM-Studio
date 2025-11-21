// हिन्दी language file
const hi = {
    // Main title
    appTitle: "SRT उपशीर्षक अनुवादक",
    
    // File upload
    fileUploadTitle: "उपशीर्षक फ़ाइल अपलोड करें",
    fileInputLabel: "फ़ाइल चुनें",
    browseButton: "ब्राउज़ करें...",
    noFileSelected: "कोई फ़ाइल नहीं चुनी गई",
    fileInfo: "पंक्तियाँ",
    
    // Translation temperature
    temperatureTitle: "अनुवाद की स्वतंत्रता",
    temperatureAccurate: "सटीक",
    temperatureBalanced: "संतुलित",
    temperatureCreative: "रचनात्मक",
    
    // Translation mode and API key
    languageTitle: "अनुवाद",
    translationModeTitle: "अनुवाद मोड",
    apiKeyLabel: "API कुंजी",
    showApiKeyButton: "दिखाएँ",
    sourceLanguage: "स्रोत भाषा",
    targetLanguage: "लक्षित भाषा",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouter मॉडल चयन:",
    selectModelPlaceholder: "एक मॉडल चुनें...",
    
    // Buttons
    startTranslation: "अनुवाद शुरू करें",
    continueTranslation: "अनुवाद जारी रखें",
    stopTranslation: "अनुवाद रोकें",
    resetTranslation: "रीसेट करें",
    saveTranslation: "अनुवाद सहेजें",
    saveWorkFile: "कार्य फ़ाइल सहेजें",
    saveSourceBlock: "स्रोत ब्लॉक सहेजें",
    
    // Table
    originalSubtitle: "मूल उपशीर्षक",
    translatedSubtitle: "अनुवादित पाठ",
    actions: "कार्रवाइयाँ",
    retranslate: "पुनः अनुवाद करें",
    
    // Status
    translationProgress: "अनुवाद प्रगति",
    translationComplete: "अनुवाद पूर्ण",
    translationStopped: "अनुवाद रुका",
    translationReset: "अनुवाद रीसेट किया गया",
    translationSaved: "अनुवाद सहेजा गया",
    workFileSaved: "कार्य फ़ाइल सहेजी गई",
    
    // Success messages
    successTranslation: "अनुवाद सफलतापूर्वक पूरा हुआ!",
    translationCompleted: "अनुवाद सफलतापूर्वक पूरा हुआ!",
    successLoadWorkFile: "कार्य फ़ाइल सफलतापूर्वक लोड की गई! आप अनुवाद जारी रख सकते हैं।",
    successSaveWorkFile: "कार्य फ़ाइल सफलतापूर्वक सहेजी गई!",
    
    // Error messages
    errorFileLoad: "फ़ाइल लोड करने में त्रुटि",
    errorTranslation: "अनुवाद के दौरान त्रुटि हुई!",
    errorSave: "फ़ाइल सहेजने में त्रुटि",
    errorSaveTranslation: "अनुवाद सहेजने में त्रुटि",
    errorSaveSrt: "SRT फ़ाइल सहेजने में त्रुटि",
    errorSaveSourceBlock: "स्रोत ब्लॉक सहेजने में त्रुटि",
    errorLoadLanguage: "भाषा फ़ाइल लोड करने में त्रुटि",
    errorNoFile: "कृपया एक फ़ाइल चुनें!",
    errorTranslationRunning: "नई फ़ाइल लोड करने से पहले कृपया अनुवाद रोकें!",
    errorInvalidFile: "केवल .srt, .wrk या .mmm फ़ाइलें ही लोड की जा सकती हैं!",
    errorNoSubtitles: "फ़ाइल में वैध उपशीर्षक नहीं हैं!",
    errorNoSrtFirst: ".mmm फ़ाइल लोड करने से पहले कृपया पहले .srt फ़ाइल लोड करें!",
    errorNoValidText: "फ़ाइल में वैध पाठ नहीं है या पंक्ति संख्याएँ लोड किए गए उपशीर्षकों से मेल नहीं खाती हैं!",
    errorNoTranslation: "सहेजने के लिए कुछ नहीं है! कृपया पहले उपशीर्षकों का अनुवाद करें।",
    errorNoSubtitleToSave: "सहेजने के लिए कोई उपशीर्षक लोड नहीं किया गया है!",
    errorNoSourceLanguage: "कृपया स्रोत भाषा चुनें",
    errorNoTargetLanguage: "कृपया लक्ष्य भाषा चुनें",
    errorApiKey: "इस अनुवाद मोड के लिए API कुंजी आवश्यक है",
    errorApiNotAvailable: "LM Studio API उपलब्ध नहीं है। कृपया जाँचें कि LM Studio पृष्ठभूमि में चल रहा है या नहीं।",
    errorRetranslation: "पुनः अनुवाद के दौरान त्रुटि हुई!",
    errorLoadWorkFile: "कार्य फ़ाइल लोड करते समय त्रुटि हुई। कृपया फ़ाइल प्रारूप की जाँच करें!",
    errorServerConnection: "LM Studio सर्वर से कनेक्ट नहीं हो सका",
    
    // लोडिंग एनिमेशन टेक्स्ट
    loadingGeneral: "लोड हो रहा है...",
    loadingFileProcessing: "फ़ाइल प्रोसेसिंग हो रही है...",
    loadingTablePopulation: "तालिका भरी जा रही है...",
    loadingWorkFileProcessing: "कार्य फ़ाइल प्रोसेसिंग हो रही है...",
    loadingMmmFileProcessing: "MMM फ़ाइल प्रोसेसिंग हो रही है...",
    loadingTranslation: "अनुवाद हो रहा है...",
    loadingClickToClose: "बंद करने के लिए बाहर कहीं भी क्लिक करें",
    loadingBatchTranslation: "बैच अनुवाद प्रगति पर है...",
    
    // बैच अनुवाद मोड त्रुटि संदेश
    errorNumberingRetry: "नंबरिंग त्रुटि, पुनः प्रयास किया जा रहा है ({0}/{1})...",
    errorRateLimitExceeded: "API दर सीमा पार हो गई, 10 सेकंड प्रतीक्षा कर रहा है...",
    errorTranslationRetry: "अनुवाद त्रुटि, पुनः प्रयास किया जा रहा है ({0}/{1})...",
    errorTranslationFailed: "{0} प्रयासों के बाद अनुवाद विफल, जारी रख रहा है...",
    
    // विशेष अनुवाद मोड
    batchModeLabel: "विशेष बड़े संदर्भ अनुवाद मोड",
    batchModeInfo: "जब यह सुविधा सक्षम होती है, तो प्रोग्राम एक विशेष तरीके से एक साथ 30 पंक्तियों का टेक्स्ट प्रोसेस करता है, जिससे बेहतर समझ और सटीकता के साथ तेज़ अनुवाद संभव होता है"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hi;
} else {
    // For browser environment
    window.hi = hi;
}
