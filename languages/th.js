// ไทย language file
const th = {
    // Main title
    appTitle: "โปรแกรมแปลคำบรรยาย SRT",
    
    // File upload
    fileUploadTitle: "อัปโหลดไฟล์คำบรรยาย",
    fileInputLabel: "เลือกไฟล์",
    browseButton: "เรียกดู...",
    noFileSelected: "ไม่ได้เลือกไฟล์",
    fileInfo: "บรรทัด",
    
    // Translation temperature
    temperatureTitle: "ความอิสระในการแปล",
    temperatureAccurate: "แม่นยำ",
    temperatureBalanced: "สมดุล",
    temperatureCreative: "สร้างสรรค์",
    
    // Translation mode and API key
    languageTitle: "โหมดการแปล",
    translationModeTitle: "โหมดการแปล",
    apiKeyLabel: "คีย์ API",
    showApiKeyButton: "แสดง",
    sourceLanguage: "ภาษาต้นฉบับ",
    targetLanguage: "ภาษาเป้าหมาย",
    
    // Buttons
    startTranslation: "เริ่มการแปล",
    continueTranslation: "ดำเนินการแปลต่อ",
    stopTranslation: "หยุดการแปล",
    resetTranslation: "รีเซ็ต",
    saveTranslation: "บันทึกการแปล",
    saveWorkFile: "บันทึกไฟล์งาน",
    saveSourceBlock: "บันทึกบล็อกต้นฉบับ",
    
    // Table
    originalSubtitle: "คำบรรยายต้นฉบับ",
    translatedSubtitle: "ข้อความที่แปลแล้ว",
    actions: "การกระทำ",
    retranslate: "แปลใหม่",
    
    // Status
    translationProgress: "ความคืบหน้าการแปล",
    translationComplete: "การแปลเสร็จสมบูรณ์",
    translationStopped: "หยุดการแปลแล้ว",
    translationReset: "รีเซ็ตการแปลแล้ว",
    translationSaved: "บันทึกการแปลแล้ว",
    workFileSaved: "บันทึกไฟล์งานแล้ว",
    
    // Success messages
    successTranslation: "การแปลเสร็จสมบูรณ์!",
    translationCompleted: "การแปลเสร็จสมบูรณ์!",
    successLoadWorkFile: "โหลดไฟล์งานสำเร็จ! คุณสามารถดำเนินการแปลต่อได้",
    successSaveWorkFile: "บันทึกไฟล์งานสำเร็จ!",
    
    // Error messages
    errorFileLoad: "เกิดข้อผิดพลาดในการโหลดไฟล์",
    errorTranslation: "เกิดข้อผิดพลาดระหว่างการแปล!",
    errorSave: "เกิดข้อผิดพลาดในการบันทึกไฟล์",
    errorNoFile: "กรุณาเลือกไฟล์!",
    errorTranslationRunning: "กรุณาหยุดการแปลก่อนโหลดไฟล์ใหม่!",
    errorInvalidFile: "สามารถโหลดได้เฉพาะไฟล์ .srt, .wrk หรือ .mmm เท่านั้น!",
    errorNoSubtitles: "ไฟล์ไม่มีคำบรรยายที่ถูกต้อง!",
    errorNoSrtFirst: "กรุณาโหลดไฟล์ .srt ก่อนที่จะโหลดไฟล์ .mmm!",
    errorNoValidText: "ไฟล์ไม่มีข้อความที่ถูกต้องหรือหมายเลขบรรทัดไม่ตรงกับคำบรรยายที่โหลด!",
    errorNoTranslation: "ไม่มีอะไรให้บันทึก! กรุณาแปลคำบรรยายก่อน",
    errorNoSubtitleToSave: "ไม่มีคำบรรยายที่โหลดไว้เพื่อบันทึก!",
    errorApiNotAvailable: "API ของ LM Studio ไม่พร้อมใช้งาน กรุณาตรวจสอบว่า LM Studio กำลังทำงานอยู่เบื้องหลัง",
    errorRetranslation: "เกิดข้อผิดพลาดระหว่างการแปลใหม่!",
    errorLoadWorkFile: "เกิดข้อผิดพลาดขณะโหลดไฟล์งาน กรุณาตรวจสอบรูปแบบไฟล์!",
    errorServerConnection: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ LM Studio ได้"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = th;
} else {
    // For browser environment
    window.th = th;
}
