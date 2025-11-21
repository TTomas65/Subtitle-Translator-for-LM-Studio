// 日本語 language file
const ja = {
    // Main title
    appTitle: "SRT字幕翻訳ツール",
    
    // File upload
    fileUploadTitle: "字幕ファイルのアップロード",
    fileInputLabel: "ファイルを選択",
    browseButton: "参照...",
    noFileSelected: "ファイルが選択されていません",
    fileInfo: "行",
    
    // Translation temperature
    temperatureTitle: "翻訳の自由度",
    temperatureAccurate: "正確",
    temperatureBalanced: "バランス",
    temperatureCreative: "創造的",
    
    // Translation mode and API key
    languageTitle: "翻訳",
    translationModeTitle: "翻訳モード",
    apiKeyLabel: "APIキー",
    showApiKeyButton: "表示",
    sourceLanguage: "原語",
    targetLanguage: "対象言語",
    
    // OpenRouter modellválasztó
    openrouterModelLabel: "OpenRouterモデル選択:",
    selectModelPlaceholder: "モデルを選択...",
    
    // Buttons
    startTranslation: "翻訳開始",
    continueTranslation: "翻訳を続ける",
    stopTranslation: "翻訳停止",
    resetTranslation: "リセット",
    saveTranslation: "翻訳を保存",
    saveWorkFile: "作業ファイルを保存",
    saveSourceBlock: "ソースブロックを保存",
    
    // Table
    originalSubtitle: "原文字幕",
    translatedSubtitle: "翻訳されたテキスト",
    actions: "アクション",
    retranslate: "再翻訳",
    
    // Status
    translationProgress: "翻訳の進行状況",
    translationComplete: "翻訳完了",
    translationStopped: "翻訳停止",
    translationReset: "翻訳リセット",
    translationSaved: "翻訳保存済み",
    workFileSaved: "作業ファイル保存済み",
    
    // Success messages
    successTranslation: "翻訳が正常に完了しました！",
    translationCompleted: "翻訳が正常に完了しました！",
    successLoadWorkFile: "作業ファイルが正常に読み込まれました！翻訳を続行できます。",
    successSaveWorkFile: "作業ファイルが正常に保存されました！",
    successWorkFile: "作業ファイルが正常に保存されました！",
    successSourceBlock: "ソースブロックが正常に保存されました！",
    
    // Error messages
    errorFileLoad: "ファイルの読み込みエラー",
    errorTranslation: "翻訳中にエラーが発生しました",
    errorSave: "ファイルの保存エラー",
    errorSaveTranslation: "翻訳の保存エラー",
    errorSaveSrt: "SRTファイルの保存エラー",
    errorSaveSourceBlock: "ソースブロックの保存エラー",
    errorLoadLanguage: "言語ファイルの読み込みエラー",
    errorNoFile: "ファイルを選択してください",
    errorTranslationRunning: "新しいファイルを読み込む前に翻訳を停止してください!",
    errorInvalidFile: ".srt、.wrk、.mmm ファイルのみ読み込むことができます!",
    errorNoSubtitles: "ファイルに有効な字幕が含まれていません!",
    errorNoSrtFirst: ".mmm ファイルを読み込む前に .srt ファイルを読み込んでください!",
    errorNoValidText: "ファイルに有効なテキストが含まれていないか、行番号が読み込まれた字幕と一致しません!",
    errorNoTranslation: "保存するものがありません!まず字幕を翻訳してください。",
    errorNoSubtitleToSave: "保存する字幕が読み込まれていません!",
    errorNoSourceLanguage: "ソース言語を選択してください",
    errorNoTargetLanguage: "ターゲット言語を選択してください",
    errorApiKey: "この翻訳モードにはAPIキーが必要です",
    errorApiNotAvailable: "LM Studio API が利用できません。LM Studio がバックグラウンドで実行されているか確認してください。",
    errorRetranslation: "再翻訳中にエラーが発生しました!",
    errorLoadWorkFile: "作業ファイルの読み込みエラー。ファイル形式を確認してください!",
    errorServerConnection: "LM Studio サーバーに接続できません",
    errorFileSave: "ファイルの保存中にエラーが発生しました!",
    
    // APIキー管理
    toggleApiKeyVisibility: "APIキーの表示/非表示",
    
    // 読み込みアニメーションテキスト
    loadingGeneral: "読み込み中...",
    loadingFileProcessing: "ファイル処理中...",
    loadingTablePopulation: "テーブル作成中...",
    loadingWorkFileProcessing: "作業ファイル処理中...",
    loadingMmmFileProcessing: "MMMファイル処理中...",
    loadingTranslation: "翻訳中...",
    loadingClickToClose: "外側をクリックして閉じる",
    loadingBatchTranslation: "バッチ翻訳処理中...",
    
    // バッチ翻訳モードのエラーメッセージ
    errorNumberingRetry: "番号付けエラー、再試行中 ({0}/{1})...",
    errorRateLimitExceeded: "APIレート制限を超えました、10秒待機中...",
    errorTranslationRetry: "翻訳エラー、再試行中 ({0}/{1})...",
    errorTranslationFailed: "{0}回の試行後に翻訳に失敗しました、続行中...",
    batchTranslationInProgress: "{0} {1}-{2} 翻訳処理中...",
    
    // 特別翻訳モード
    batchModeLabel: "特別な大規模コンテキスト翻訳モード",
    batchModeInfo: "この機能を有効にすると、プログラムは特別な方法で一度に30行のテキストを処理し、より速い翻訳と良好な理解度と精度を実現します"
};

// Export the language object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ja;
} else {
    // For browser environment
    window.ja = ja;
}
