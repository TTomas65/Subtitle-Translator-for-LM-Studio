// עברית language file
const he = {
    // Main title
    appTitle: "מתרגם כתוביות SRT",
    
    // File upload
    fileUploadTitle: "העלאת קובץ כתוביות",
    fileInputLabel: "בחר קובץ",
    browseButton: "עיון...",
    noFileSelected: "לא נבחר קובץ",
    fileInfo: "שורות",
    
    // Translation temperature
    temperatureTitle: "חופש תרגום",
    temperatureAccurate: "מדויק",
    temperatureBalanced: "מאוזן",
    temperatureCreative: "יצירתי",
    
    // Translation mode and API key
    languageTitle: "תרגום",
    translationModeTitle: "מצב תרגום",
    apiKeyLabel: "מפתח API",
    showApiKeyButton: "הצג",
    sourceLanguage: "שפת מקור",
    targetLanguage: "שפת יעד",
    
    // Buttons
    startTranslation: "התחל תרגום",
    continueTranslation: "המשך תרגום",
    stopTranslation: "עצור תרגום",
    resetTranslation: "איפוס",
    saveTranslation: "שמור תרגום",
    saveWorkFile: "שמור קובץ עבודה",
    saveSourceBlock: "שמור בלוק מקור",
    
    // Table
    originalSubtitle: "כתובית מקורית",
    translatedSubtitle: "טקסט מתורגם",
    actions: "פעולות",
    retranslate: "תרגם מחדש",
    
    // Status
    translationProgress: "התקדמות תרגום",
    translationComplete: "תרגום הושלם",
    translationStopped: "תרגום נעצר",
    translationReset: "תרגום אופס",
    translationSaved: "תרגום נשמר",
    workFileSaved: "קובץ עבודה נשמר",
    
    // Success messages
    successTranslation: "התרגום הושלם בהצלחה!",
    translationCompleted: "התרגום הושלם בהצלחה!",
    successLoadWorkFile: "קובץ העבודה נטען בהצלחה! אתה יכול להמשיך בתרגום.",
    successSaveWorkFile: "קובץ העבודה נשמר בהצלחה!",
    
    // Error messages
    errorFileLoad: "שגיאה בטעינת הקובץ",
    errorTranslation: "אירעה שגיאה במהלך התרגום!",
    errorSave: "שגיאה בשמירת הקובץ",
    errorNoFile: "אנא בחר קובץ!",
    errorTranslationRunning: "אנא עצור את התרגום לפני טעינת קובץ חדש!",
    errorInvalidFile: "ניתן לטעון רק קבצי .srt, .wrk או .mmm!",
    errorNoSubtitles: "הקובץ אינו מכיל כתוביות תקפות!",
    errorNoSrtFirst: "אנא טען קובץ .srt תחילה לפני טעינת קובץ .mmm!",
    errorNoValidText: "הקובץ אינו מכיל טקסט תקף או שמספרי השורות אינם תואמים לכתוביות שנטענו!",
    errorNoTranslation: "אין מה לשמור! אנא תרגם את הכתוביות תחילה.",
    errorNoSubtitleToSave: "אין כתוביות טעונות לשמירה!",
    errorApiNotAvailable: "ה-API של LM Studio אינו זמין. אנא בדוק אם LM Studio פועל ברקע.",
    errorRetranslation: "אירעה שגיאה במהלך התרגום מחדש!",
    errorLoadWorkFile: "אירעה שגיאה בטעינת קובץ העבודה. אנא בדוק את פורמט הקובץ!",
    errorServerConnection: "לא ניתן להתחבר לשרת LM Studio"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = he;
} else {
    // For browser environment
    window.he = he;
}
