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
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "בחירת מודל OpenRouter:",
    selectModelPlaceholder: "בחר מודל...",
    
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
    errorSaveTranslation: "שגיאה בשמירת התרגום",
    errorSaveSrt: "שגיאה בשמירת קובץ SRT",
    errorSaveSourceBlock: "שגיאה בשמירת בלוק המקור",
    errorLoadLanguage: "שגיאה בטעינת קובץ השפה",
    errorNoFile: "אנא בחר קובץ!",
    errorTranslationRunning: "אנא עצור את התרגום לפני טעינת קובץ חדש!",
    errorInvalidFile: "ניתן לטעון רק קבצי .srt, .wrk או .mmm!",
    errorNoSubtitles: "הקובץ אינו מכיל כתוביות תקפות!",
    errorNoSrtFirst: "אנא טען קובץ .srt תחילה לפני טעינת קובץ .mmm!",
    errorNoValidText: "הקובץ אינו מכיל טקסט תקף או שמספרי השורות אינם תואמים לכתוביות שנטענו!",
    errorNoTranslation: "אין מה לשמור! אנא תרגם את הכתוביות תחילה.",
    errorNoSubtitleToSave: "לא נטענו כתוביות לשמירה!",
    errorNoSourceLanguage: "אנא בחר שפת מקור",
    errorNoTargetLanguage: "אנא בחר שפת יעד",
    errorApiKey: "מפתח API נדרש למצב תרגום זה",
    errorApiNotAvailable: "ה-API של LM Studio אינו זמין. אנא בדוק אם LM Studio פועל ברקע.",
    errorRetranslation: "אירעה שגיאה במהלך התרגום מחדש!",
    errorLoadWorkFile: "אירעה שגיאה בטעינת קובץ העבודה. אנא בדוק את פורמט הקובץ!",
    errorServerConnection: "לא ניתן להתחבר לשרת LM Studio",
    
    // טקסטים של אנימציית טעינה
    loadingGeneral: "טוען...",
    loadingFileProcessing: "מעבד קובץ...",
    loadingTablePopulation: "ממלא טבלה...",
    loadingWorkFileProcessing: "מעבד קובץ עבודה...",
    loadingMmmFileProcessing: "מעבד קובץ MMM...",
    loadingTranslation: "מתרגם...",
    loadingClickToClose: "לחץ בכל מקום מחוץ כדי לסגור",
    loadingBatchTranslation: "תרגום אצווה בתהליך...",
    
    // הודעות שגיאה למצב תרגום אצווה
    errorNumberingRetry: "שגיאת מספור, מנסה שוב ({0}/{1})...",
    errorRateLimitExceeded: "חריגה ממגבלת קצב ה-API, ממתין 10 שניות...",
    errorTranslationRetry: "שגיאת תרגום, מנסה שוב ({0}/{1})...",
    errorTranslationFailed: "התרגום נכשל לאחר {0} ניסיונות, ממשיך...",
    
    // מצב תרגום מיוחד
    batchModeLabel: "מצב תרגום מיוחד עם הקשר רחב",
    batchModeInfo: "כאשר תכונה זו מופעלת, התוכנית מעבדת 30 שורות טקסט בבת אחת באופן מיוחד, המאפשר תרגום מהיר יותר עם הבנה ודיוק טובים יותר"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = he;
} else {
    // For browser environment
    window.he = he;
}
