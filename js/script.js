// Global variables
let originalSubtitles = []; // Az eredeti feliratokat tárolja
let translatedSubtitles = []; // A lefordított feliratokat tárolja
let originalSrtContent = ''; // Az eredeti SRT fájl teljes tartalma
let fileName = ''; // A betöltött fájl neve
let originalFilePath = ''; // Az eredeti fájl elérési útja
let translationMemory = {}; // Fordítási memória a konzisztencia érdekében
let isTranslationPaused = false; // Fordítás szüneteltetése
let currentTranslationIndex = 0; // Aktuális fordítási index
let isTranslationRunning = false; // Fordítás folyamatban
let rowsBeingRetranslated = new Set(); // Újrafordítás alatt álló sorok
let temperature = 1.0; // Fordítási szabadságfok alapértéke
let currentLangCode = 'en'; // Aktuális nyelv alapértéke

// Globális DOM elem változók
let srtFileInput;
let startTranslationBtn;
let stopTranslationBtn;
let resetTranslationBtn;
let saveTranslationBtn;
let saveWorkFileBtn;
let subtitleTable;
let fileInfoDiv;
let fileNameSpan;
let lineCountSpan;
let sourceLanguageSelect;
let targetLanguageSelect;
let progressContainer;
let progressBar;
let temperatureSlider;
let temperatureValue;
let languageSelector;
let uiLanguageMenu;
let originalHeader;
let translatedHeader;
let actionsHeader;
let cardTitles; // A kártya címeket tároló változó
let fileInputLabel; // A fájl input labeljét tároló változó
let translationModeSelect;
let apiKeyContainer;
let apiKeyInput;
let apiKeyInputGroup; // API kulcs input csoport
let showApiKeyFieldBtn; // API kulcs mező megjelenítő gomb
let saveSourceBlockBtn; // Forrás blokkmentése gomb
let toggleApiKeyVisibilityBtn; // API kulcs láthatóság kapcsoló gomb
let apiKeyVisibilityIcon; // API kulcs láthatóság ikon

// API kulcs titkosítási funkciók
// Titkosító kulcs (alkalmazás-specifikus konstans)
const encryptionKey = "SRT_Felirat_Fordito_App_Secret_Key";

// API kulcs titkosítása
function encryptApiKey(apiKey) {
    return CryptoJS.AES.encrypt(apiKey, encryptionKey).toString();
}

// Titkosított API kulcs visszafejtése
function decryptApiKey(encryptedApiKey) {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedApiKey, encryptionKey);
        const decryptedKey = bytes.toString(CryptoJS.enc.Utf8);
        
        // Ellenőrizzük, hogy sikerült-e a visszafejtés
        if (decryptedKey) {
            return decryptedKey;
        }
        return null;
    } catch (error) {
        console.error('Hiba történt az API kulcs visszafejtése során:', error);
        return null;
    }
}

// API kulcs mentése titkosítva
function saveApiKey(apiKey) {
    try {
        const encryptedKey = encryptApiKey(apiKey);
        localStorage.setItem('encryptedApiKey', encryptedKey);
        console.log('API kulcs titkosítva elmentve a localStorage-ba');
        return true;
    } catch (error) {
        console.error('Hiba történt az API kulcs mentése során:', error);
        return false;
    }
}

// Titkosított API kulcs betöltése
function loadApiKey() {
    try {
        const encryptedKey = localStorage.getItem('encryptedApiKey');
        if (encryptedKey) {
            return decryptApiKey(encryptedKey);
        }
        return null;
    } catch (error) {
        console.error('Hiba történt az API kulcs betöltése során:', error);
        return null;
    }
}

// OpenRouter API kulcs mentése titkosítva
function saveOpenRouterApiKey(apiKey) {
    try {
        const encryptedKey = encryptApiKey(apiKey);
        localStorage.setItem('encryptedOpenRouterApiKey', encryptedKey);
        console.log('OpenRouter API kulcs titkosítva elmentve a localStorage-ba');
        return true;
    } catch (error) {
        console.error('Hiba történt az OpenRouter API kulcs mentése során:', error);
        return false;
    }
}

// Titkosított OpenRouter API kulcs betöltése
function loadOpenRouterApiKey() {
    try {
        const encryptedKey = localStorage.getItem('encryptedOpenRouterApiKey');
        if (encryptedKey) {
            return decryptApiKey(encryptedKey);
        }
        return null;
    } catch (error) {
        console.error('Hiba történt az OpenRouter API kulcs betöltése során:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM betöltve, elemek inicializálása");
    
    // DOM elemek kiválasztása és globális változókhoz rendelése
    srtFileInput = document.getElementById('srtFile');
    startTranslationBtn = document.getElementById('startTranslation');
    stopTranslationBtn = document.getElementById('stopTranslation');
    resetTranslationBtn = document.getElementById('resetTranslation');
    saveTranslationBtn = document.getElementById('saveTranslation');
    saveWorkFileBtn = document.getElementById('saveWorkFile');
    subtitleTable = document.getElementById('subtitleTable');
    fileInfoDiv = document.getElementById('fileInfo');
    fileNameSpan = document.getElementById('fileName');
    lineCountSpan = document.getElementById('lineCount');
    sourceLanguageSelect = document.getElementById('sourceLanguage');
    targetLanguageSelect = document.getElementById('targetLanguage');
    progressContainer = document.getElementById('progressContainer');
    progressBar = document.getElementById('progressBar');
    temperatureSlider = document.getElementById('temperatureSlider');
    temperatureValue = document.getElementById('temperatureValue');
    languageSelector = document.getElementById('languageSelector');
    uiLanguageMenu = document.getElementById('uiLanguageMenu');
    originalHeader = document.getElementById('originalHeader');
    translatedHeader = document.getElementById('translatedHeader');
    actionsHeader = document.getElementById('actionsHeader');
    cardTitles = document.querySelectorAll('.card-title'); // Az összes kártya cím kiválasztása
    fileInputLabel = document.querySelector('label.custom-file-label'); // A fájl input labeljének kiválasztása
    translationModeSelect = document.getElementById('translationMode');
    apiKeyContainer = document.getElementById('apiKeyContainer');
    apiKeyInput = document.getElementById('apiKey');
    apiKeyInputGroup = document.getElementById('apiKeyInputGroup'); // API kulcs input csoport
    showApiKeyFieldBtn = document.getElementById('showApiKeyFieldBtn'); // API kulcs mező megjelenítő gomb
    saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn'); // Forrás blokkmentése gomb
    toggleApiKeyVisibilityBtn = document.getElementById('toggleApiKeyVisibility'); // API kulcs láthatóság kapcsoló gomb
    apiKeyVisibilityIcon = document.getElementById('apiKeyVisibilityIcon'); // API kulcs láthatóság ikon
    
    console.log("DOM elemek betöltve:", {
        startTranslationBtn: !!startTranslationBtn,
        cardTitles: cardTitles.length,
        originalHeader: !!originalHeader,
        translatedHeader: !!translatedHeader,
        fileInputLabel: !!fileInputLabel
    });

    // Nyelvválasztó inicializálása
    initLanguageSelector();
    
    // Mentett fordítási mód betöltése
    const savedTranslationMode = localStorage.getItem('translationMode');
    if (savedTranslationMode && (savedTranslationMode === 'lm_studio_local' || 
                               savedTranslationMode === 'chatgpt_4o_mini' || 
                               savedTranslationMode === 'chatgpt_4o' || 
                               savedTranslationMode === 'openrouter_gemma_27b' ||
                               savedTranslationMode === 'openrouter_gemini_flash' ||
                               savedTranslationMode === 'openrouter_gpt4o_mini' ||
                               savedTranslationMode === 'openrouter_qwen3_235b' ||
                               savedTranslationMode === 'openrouter_deepseek_r1' ||
                               savedTranslationMode === 'openrouter_gemini_pro' ||
                               savedTranslationMode === 'openrouter_deepseek_v3' ||
                               savedTranslationMode === 'openrouter_llama_70b' ||
                               savedTranslationMode === 'openrouter_nemotron_ultra' )) {
        translationModeSelect.value = savedTranslationMode;
        
        // Ha a Gemini Flash mód van elmentve, akkor megjelenítjük a batch mód konténert
        if (savedTranslationMode === 'openrouter_gemini_flash' || savedTranslationMode === 'chatgpt_4o_mini' || savedTranslationMode === 'chatgpt_4o' || savedTranslationMode === 'openrouter_qwen3_235b' || savedTranslationMode === 'openrouter_deepseek_r1' || savedTranslationMode === 'openrouter_gemini_pro' || savedTranslationMode === 'openrouter_deepseek_v3' || savedTranslationMode === 'openrouter_llama_70b' || savedTranslationMode === 'openrouter_nemotron_ultra' || savedTranslationMode === 'openrouter_gpt4o_mini' ) {
            const batchModeContainer = document.getElementById('batchModeContainer');
            if (batchModeContainer) {
                batchModeContainer.classList.remove('d-none');
                
                // Batch mód információs tooltip inicializálása
                const batchModeInfo = document.getElementById('batchModeInfo');
                if (batchModeInfo) {
                    // Tooltip inicializálása
                    const tooltip = new bootstrap.Tooltip(batchModeInfo, {
                        title: uiTranslations[currentLangCode]?.batchModeInfo || 'Ezt a funkciót bekapcsolva a program egy speciális módon egyszerre 30 sor szöveget dolgoz fel, így sokkal gyorsabban és nagyobb szövegértéssel és pontossággal tudja a fordítást elvégezni a program'
                    });
                }
            }
        }
        
        // Ha ChatGPT mód van elmentve, akkor betöltjük az API kulcsot is
        if (savedTranslationMode === 'chatgpt_4o_mini' || savedTranslationMode === 'chatgpt_4o') {
            apiKeyContainer.classList.remove('d-none');
            
            // Mentett API kulcs betöltése
            const savedApiKey = loadApiKey();
            if (savedApiKey) {
                apiKeyInput.value = savedApiKey;
                apiKeyInput.type = 'password';
                
                // Elrejtjük az input mezőt és megjelenítjük a gombot
                apiKeyInputGroup.classList.add('d-none');
                showApiKeyFieldBtn.classList.remove('d-none');
            }
        } else if (savedTranslationMode === 'openrouter_gemma_27b' || savedTranslationMode === 'openrouter_gemini_flash' || savedTranslationMode === 'openrouter_qwen3_235b' || savedTranslationMode === 'openrouter_deepseek_r1' || savedTranslationMode === 'openrouter_gemini_pro' || savedTranslationMode === 'openrouter_deepseek_v3' || savedTranslationMode === 'openrouter_llama_70b' || savedTranslationMode === 'openrouter_nemotron_ultra' || savedTranslationMode === 'openrouter_gpt4o_mini') {
            apiKeyContainer.classList.remove('d-none');
            
            // Mentett OpenRouter API kulcs betöltése
            const savedOpenRouterApiKey = loadOpenRouterApiKey();
            if (savedOpenRouterApiKey) {
                apiKeyInput.value = savedOpenRouterApiKey;
                apiKeyInput.type = 'password';
                
                // Elrejtjük az input mezőt és megjelenítjük a gombot
                apiKeyInputGroup.classList.add('d-none');
                showApiKeyFieldBtn.classList.remove('d-none');
            }
        }
    }
    
    // Eseménykezelők hozzáadása
    srtFileInput.addEventListener('change', handleFileSelect);
    startTranslationBtn.addEventListener('click', handleTranslationControl);
    stopTranslationBtn.addEventListener('click', pauseTranslation);
    resetTranslationBtn.addEventListener('click', resetTranslation);
    saveTranslationBtn.addEventListener('click', saveTranslation);
    saveWorkFileBtn.addEventListener('click', saveWorkFile);
    
    // Fordítás módjának eseménykezelője
    translationModeSelect.addEventListener('change', handleTranslationModeChange);
    
    // Fordítási mód kezelése inicializáláskor - hogy a batch mód konténer megfelelően jelenjen meg
    handleTranslationModeChange();
    
    // API kulcs változásának figyelése és mentése
    apiKeyInput.addEventListener('change', function() {
        // API kulcs mentése a localStorage-ba titkosítva
        if (apiKeyInput.value.trim() !== '') {
            const selectedMode = translationModeSelect.value;
            
            // A megfelelő helyre mentjük az API kulcsot a fordítási mód alapján
            if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
                saveApiKey(apiKeyInput.value);
                console.log('ChatGPT API kulcs titkosítva elmentve a localStorage-ba');
            } else if (selectedMode === 'openrouter_gemma_27b' || selectedMode === 'openrouter_gemini_flash' || selectedMode === 'openrouter_qwen3_235b' || selectedMode === 'openrouter_deepseek_r1' || selectedMode === 'openrouter_gemini_pro' || selectedMode === 'openrouter_deepseek_v3' || selectedMode === 'openrouter_llama_70b' || selectedMode === 'openrouter_nemotron_ultra' || selectedMode === 'openrouter_gpt4o_mini') {
                saveOpenRouterApiKey(apiKeyInput.value);
                console.log('OpenRouter API kulcs titkosítva elmentve a localStorage-ba');
            }
        }
    });
    
    // API kulcs láthatóság kapcsoló gomb eseménykezelője
    if (toggleApiKeyVisibilityBtn) {
        toggleApiKeyVisibilityBtn.addEventListener('click', toggleApiKeyVisibility);
    }
    
    // API kulcs mező megjelenítő gomb eseménykezelője
    if (showApiKeyFieldBtn) {
        showApiKeyFieldBtn.addEventListener('click', showApiKeyField);
    }
    
    // Temperature csúszka eseménykezelő
    temperatureSlider.addEventListener('input', function() {
        temperature = parseFloat(this.value);
        temperatureValue.textContent = temperature.toFixed(1);
        
        // Színátmenet a temperature értékhez
        if (temperature < 0.7) {
            temperatureValue.className = 'badge bg-success'; // Pontos
        } else if (temperature <= 1.3) {
            temperatureValue.className = 'badge bg-primary'; // Kiegyensúlyozott
        } else {
            temperatureValue.className = 'badge bg-warning text-dark'; // Kreatív
        }
    });

    // Fordítás vezérlése (indítás/folytatás)
    function handleTranslationControl() {
        // Ellenőrizzük, hogy a fordítás szüneteltetve van-e
        if (!isTranslationRunning || isTranslationPaused) {
            isTranslationPaused = false;
            startTranslation();
        }
    }

    // Fordítás szüneteltetése
    function pauseTranslation() {
        isTranslationPaused = true;
        isTranslationPausedRef.value = true; // Referencia objektum frissítése
        isTranslationRunning = false;
        
        // A fordítás folytatása gomb szövegének beállítása az aktuális nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-play-circle me-2"></i>${uiTranslations[currentLangCode].continueTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-play-circle me-2"></i>Continue Translation';
        }
        
        startTranslationBtn.disabled = false;
        startTranslationBtn.classList.remove('d-none');
        stopTranslationBtn.classList.add('d-none');
        
        // Elrejtjük az aktuális sor megállítás gombját is, ha létezik
        hideCurrentRowStopButton();
        
        // 10 másodperc után jelenítjük meg a Reset gombot
        setTimeout(() => {
            resetTranslationBtn.classList.remove('d-none');
        }, 10000);
    }
    
    // Fordítás alaphelyzetbe állítása
    function resetTranslation() {
        // Fordítás leállítása, ha fut
        isTranslationPaused = true;
        isTranslationRunning = false;
        
        // Alapállapotba állítás
        resetAllTranslations();
        
        // UI elemek frissítése
        stopTranslationBtn.classList.add('d-none');
        resetTranslationBtn.classList.add('d-none');
        startTranslationBtn.classList.remove('d-none');
        
        // A fordítás indítása gomb szövegének beállítása az aktuális nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
        }
        
        // Haladásjelző visszaállítása
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', 0);
        
        // Mentés gombok letiltása
        saveTranslationBtn.disabled = true;
        saveWorkFileBtn.classList.add('d-none');
        
        // Táblázat újratöltése csak az eredeti feliratokkal
        populateTable();
        
        // Fordítási állapot alaphelyzetbe állítása
        isTranslationPaused = false;
        currentTranslationIndex = 0;
        
        // Sor számok frissítése
        lineCountSpan.textContent = originalSubtitles.length;
    }
    
    // Minden fordítás és beállítás alaphelyzetbe állítása
    function resetAllTranslations() {
        // Csak a fordításokat töröljük, az eredeti feliratokat megtartjuk
        translatedSubtitles = [];
        
        // Ha vannak eredeti feliratok, akkor létrehozzuk az üres fordításokat
        if (originalSubtitles.length > 0) {
            for (let i = 0; i < originalSubtitles.length; i++) {
                translatedSubtitles.push('');
            }
        }
        
        // Fordítási állapot alaphelyzetbe állítása
        currentTranslationIndex = 0;
        isTranslationRunning = false;
        isTranslationPaused = false;
        rowsBeingRetranslated.clear();
        
        // Fordítási memória törlése
        translationMemory = {};
        
        // Hőmérséklet visszaállítása alapértékre
        temperature = 1.0;
        temperatureSlider.value = 1.0;
        temperatureValue.textContent = "1.0";
        temperatureValue.className = 'badge bg-primary';
    }

    // Fájl kiválasztása eseménykezelő
    function handleFileSelect(event) {
        // Ellenőrizzük, hogy fut-e a fordítás
        if (isTranslationRunning) {
            // Töröljük a kiválasztást
            event.target.value = '';
            
            // Figyelmeztetés megjelenítése
            alert('Please stop the translation before loading a new file!');
            return;
        }
        
        const file = event.target.files[0];
        if (!file) return;
        
        fileName = file.name;
        originalFilePath = file.path; // Elmentjük az elérési utat
        
        // Ellenőrizzük a fájl kiterjesztését
        if (fileName.toLowerCase().endsWith('.srt')) {
            // SRT fájl feldolgozása
            processSrtFile(file);
        } else if (fileName.toLowerCase().endsWith('.wrk')) {
            // Munkafájl feldolgozása
            processWorkFile(file);
        } else if (fileName.toLowerCase().endsWith('.mmm')) {
            // MMM fájl feldolgozása
            processMmmFile(file);
        } else {
            alert('Only files with the extension .srt, .wrk or .mmm can be loaded!');
            event.target.value = '';
            return;
        }
    }

    // SRT fájl feldolgozása
    function processSrtFile(file) {
        const reader = new FileReader();
        
        // Betöltési animáció megjelenítése
        showLoadingOverlay('loadingFileProcessing');
        
        reader.onload = function(e) {
            // Fájl tartalmának beolvasása
            const content = e.target.result;
            originalSrtContent = content;
            
            // Fájl információk megjelenítése
            fileInfoDiv.classList.remove('d-none');
            fileNameSpan.textContent = fileName;
            
            // Feliratok feldolgozása
            parseSrtFile(content);
            
            // Táblázat feltöltése előtt jelezzük, hogy ez hosszabb időt vehet igénybe
            showLoadingOverlay('loadingTablePopulation');
            
            // Táblázat feltöltése késleltetéssel, hogy a betöltési animáció megjelenjen
            setTimeout(() => {
                // Táblázat feltöltése
                populateTable();
                
                // Fordítás gomb engedélyezése
                startTranslationBtn.disabled = false;
                saveTranslationBtn.disabled = true;
                saveWorkFileBtn.classList.add('d-none');
                
                // Fordítási állapot alaphelyzetbe állítása
                isTranslationPaused = false;
                currentTranslationIndex = 0;
                
                // A fordítás indítása gomb szövegének beállítása az aktuális nyelven
                if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
                    startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
                } else {
                    startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
                }
                
                stopTranslationBtn.classList.add('d-none');
                
                // Sor számok frissítése
                lineCountSpan.textContent = originalSubtitles.length;
                
                // Forrás blokkmentése gomb megjelenítése
                if (saveSourceBlockBtn) {
                    saveSourceBlockBtn.classList.remove('d-none');
                } else {
                    createSaveSourceBlockButton();
                }
                
                // Betöltési animáció elrejtése
                hideLoadingOverlay();
            }, 50); // Rövid késleltetés, hogy a betöltési animáció megjelenjen
        };
        
        reader.readAsText(file);
    }
    
    // Munkafájl feldolgozása
    function processWorkFile(file) {
        const reader = new FileReader();
        
        // Betöltési animáció megjelenítése
        showLoadingOverlay('loadingWorkFileProcessing');
        
        reader.onload = function(e) {
            try {
                // Munkafájl tartalmának beolvasása és feldolgozása
                const workData = JSON.parse(e.target.result);
                
                // Adatok betöltése a munkafájlból
                originalSubtitles = workData.subtitles || [];
                translatedSubtitles = workData.translatedSubtitles || [];
                currentTranslationIndex = workData.currentIndex || 0;
                fileName = workData.originalFileName || file.name.replace('.wrk', '.srt');
                
                // Nyelvek beállítása
                if (workData.sourceLanguage) {
                    sourceLanguageSelect.value = workData.sourceLanguage;
                }
                if (workData.targetLanguage) {
                    targetLanguageSelect.value = workData.targetLanguage;
                }
                
                // Fájl információk megjelenítése
                fileInfoDiv.classList.remove('d-none');
                fileNameSpan.textContent = fileName;
                lineCountSpan.textContent = originalSubtitles.length;
                
                // Táblázat feltöltése előtt jelezzük, hogy ez hosszabb időt vehet igénybe
                showLoadingOverlay('loadingTablePopulation');
                
                // Táblázat feltöltése késleltetéssel, hogy a betöltési animáció megjelenjen
                setTimeout(() => {
                    // Táblázat feltöltése
                    populateTable();
                    
                    // Újrafordítás gombok megjelenítése a már lefordított sorokhoz
                    translatedSubtitles.forEach((subtitle, index) => {
                        if (subtitle) {
                            const retranslateBtn = document.getElementById(`retranslate-${index}`);
                            if (retranslateBtn) {
                                retranslateBtn.classList.remove('d-none');
                            }
                        }
                    });
                    
                    // Folyamatjelző frissítése
                    updateProgressBar(currentTranslationIndex, originalSubtitles.length);
                    
                    // UI frissítése
                    startTranslationBtn.disabled = false;
                    startTranslationBtn.innerHTML = '<i class="bi bi-play-circle me-2"></i>Fordítás folytatása';
                    
                    if (translatedSubtitles.length > 0) {
                        saveTranslationBtn.disabled = false;
                        saveWorkFileBtn.classList.remove('d-none');
                    }
                    
                    // Betöltési animáció elrejtése
                    hideLoadingOverlay();
                    
                    // Sikeres betöltés üzenet a jelenlegi nyelven
                    const successMessage = uiTranslations[currentLangCode]?.successLoadWorkFile || 'Work file successfully loaded! Translation can continue.';
                    alert(successMessage);
                }, 50); // Rövid késleltetés, hogy a betöltési animáció megjelenjen
            } catch (error) {
                // Hiba esetén elrejtjük a betöltési animációt
                hideLoadingOverlay();
                
                console.error('Hiba a munkafájl betöltése során:', error);
                
                // Hibaüzenet a jelenlegi nyelven
                const errorMessage = uiTranslations[currentLangCode]?.errorLoadWorkFile || 'Error loading work file. Please check the file format!';
                alert(errorMessage);
                
                event.target.value = '';
            }
        };
        
        reader.readAsText(file);
    }

    // MMM fájl feldolgozása
    function processMmmFile(file) {
        const reader = new FileReader();
        
        // Betöltési animáció megjelenítése
        showLoadingOverlay('loadingMmmFileProcessing');
        
        reader.onload = function(e) {
            // Fájl tartalmának beolvasása
            const content = e.target.result;
            
            // Fájl információk megjelenítése
            fileInfoDiv.classList.remove('d-none');
            fileNameSpan.textContent = fileName;
            
            // Ellenőrizzük, hogy van-e már betöltött felirat
            if (originalSubtitles.length === 0) {
                // Hiba esetén elrejtjük a betöltési animációt
                hideLoadingOverlay();
                
                // Hibaüzenet a jelenlegi nyelven
                const errorMessage = uiTranslations[currentLangCode]?.errorNoSrtFirst || 'Load an .srt file before loading an .mmm file!';
                alert(errorMessage);
                return;
            }
            
            // MMM fájl feldolgozása - csak a fordított szövegek frissítése
            parseMmmFile(content);
            
            // Táblázat feltöltése előtt jelezzük, hogy ez hosszabb időt vehet igénybe
            showLoadingOverlay('loadingTablePopulation');
            
            // Táblázat feltöltése késleltetéssel, hogy a betöltési animáció megjelenjen
            setTimeout(() => {
                // Táblázat frissítése
                populateTable();
                
                // Fordítás gomb engedélyezése
                startTranslationBtn.disabled = false;
                saveTranslationBtn.disabled = false;
                saveWorkFileBtn.classList.remove('d-none');
                
                // Betöltési animáció elrejtése
                hideLoadingOverlay();
            }, 50); // Rövid késleltetés, hogy a betöltési animáció megjelenjen
        };
        
        reader.readAsText(file);
    }
    
    // SRT fájl feldolgozása
    function parseSrtFile(content) {
        originalSubtitles = [];
        translatedSubtitles = [];
        
        // Felirat blokkok szétválasztása
        const blocks = content.trim().split(/\r?\n\r?\n/);
        
        for (const block of blocks) {
            const lines = block.split(/\r?\n/);
            
            // Ellenőrizzük, hogy van-e elég sor a blokkban
            if (lines.length < 3) continue;
            
            // Az első sor a sorszám, a második az időkód, a többi a szöveg
            const number = parseInt(lines[0].trim());
            const timecode = lines[1].trim();
            
            // A szöveges részek összegyűjtése (a 3. sortól kezdve)
            const textLines = lines.slice(2).join(' ').trim();
            
            if (textLines) {
                originalSubtitles.push({
                    number: number,
                    timecode: timecode,
                    text: textLines
                });
                
                // Kezdetben üres fordítás
                translatedSubtitles.push('');
            }
        }
    }

    // MMM fájl tartalmának feldolgozása
    function parseMmmFile(content) {
        // Sorok szétválasztása
        const lines = content.split('\n');
        
        let currentText = '';
        let currentLineNumber = -1;
        
        // Sorok feldolgozása
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Üres sorok kihagyása
            if (line === '') continue;
            
            // Ellenőrizzük, hogy a sor egy sorszámmal kezdődik-e
            // Módosított regex, ami kezeli a sorszám utáni pontot is (opcionális)
            const match = line.match(/^(\d+)(?:\.|\s+)(.*)/);
            
            if (match) {
                // Sorszám és szöveg kinyerése
                const subtitleNumber = parseInt(match[1]);
                const text = match[2].trim(); // Trimeljük a szöveget, hogy eltávolítsuk a felesleges szóközöket
                
                // Ha új sorszám, akkor az előző szöveget elmentjük
                if (currentLineNumber !== -1 && currentLineNumber !== subtitleNumber) {
                    // Az előző szöveg mentése a megfelelő sorszámú felirathoz
                    if (currentLineNumber > 0 && currentLineNumber <= originalSubtitles.length) {
                        translatedSubtitles[currentLineNumber - 1] = currentText;
                    }
                    currentText = '';
                }
                
                // Aktuális sorszám és szöveg beállítása
                currentLineNumber = subtitleNumber;
                
                // Ha első sor az adott sorszámnál, akkor beállítjuk a szöveget
                if (currentText === '') {
                    currentText = text;
                } else {
                    // Ha már van szöveg, akkor hozzáfűzzük
                    currentText += ' ' + text;
                }
            }
        }
        
        // Az utolsó szöveg mentése, ha van
        if (currentLineNumber !== -1 && currentText !== '') {
            if (currentLineNumber > 0 && currentLineNumber <= originalSubtitles.length) {
                translatedSubtitles[currentLineNumber - 1] = currentText;
            }
        }
        
        // Ellenőrizzük, hogy volt-e érvényes szöveg
        let foundValidText = false;
        for (let i = 0; i < translatedSubtitles.length; i++) {
            if (translatedSubtitles[i] && translatedSubtitles[i].trim && translatedSubtitles[i].trim() !== '') {
                foundValidText = true;
                break;
            }
        }
        
        if (!foundValidText) {
            alert('The file does not contain valid texts or the line numbers do not match the loaded subtitles!');
        }
    }

    // Táblázat feltöltése
    function populateTable() {
        subtitleTable.innerHTML = '';
        
        originalSubtitles.forEach((subtitle, index) => {
            const row = document.createElement('tr');
            row.id = `row-${index}`;
            
            // Sorszám cella
            const numberCell = document.createElement('td');
            numberCell.textContent = index + 1;
            numberCell.classList.add('text-center');
            row.appendChild(numberCell);
            
            // Eredeti szöveg cella
            const originalCell = document.createElement('td');
            originalCell.textContent = subtitle.text;
            row.appendChild(originalCell);
            
            // Fordított szöveg cella - szerkeszthető
            const translatedCell = document.createElement('td');
            translatedCell.id = `translated-${index}`;
            
            // Szerkeszthető tartalom létrehozása
            // Textarea-t használunk div helyett a jobb kompatibilitás érdekében
            const editableTextarea = document.createElement('textarea');
            editableTextarea.className = 'form-control editable-content';
            editableTextarea.value = translatedSubtitles[index] || '';
            editableTextarea.dataset.originalIndex = index;
            editableTextarea.rows = 2;
            
            // Eseménykezelő a szerkesztés befejezéséhez
            editableTextarea.addEventListener('change', function() {
                const editedIndex = parseInt(this.dataset.originalIndex);
                const newText = this.value.trim();
                
                // Csak akkor mentjük, ha változott a szöveg
                if (translatedSubtitles[editedIndex] !== newText) {
                    translatedSubtitles[editedIndex] = newText;
                    
                    // Frissítjük a fordítási memóriát is
                    if (!translationMemory.translations) {
                        translationMemory.translations = {};
                    }
                    translationMemory.translations[originalSubtitles[editedIndex].text] = newText;
                    
                    // Jelezzük, hogy a szöveg módosítva lett
                    const row = document.getElementById(`row-${editedIndex}`);
                    if (row) {
                        row.classList.add('edited-row');
                        
                        // 1 másodperc után eltávolítjuk a kiemelést
                        setTimeout(() => {
                            row.classList.remove('edited-row');
                        }, 1000);
                    }
                    
                    // Újrafordítás gomb megjelenítése, ha van szöveg
                    const retranslateBtn = document.getElementById(`retranslate-${editedIndex}`);
                    if (retranslateBtn) {
                        if (newText) {
                            retranslateBtn.classList.remove('d-none');
                        } else {
                            retranslateBtn.classList.add('d-none');
                        }
                    }
                    
                    // Mentés gomb engedélyezése
                    saveTranslationBtn.disabled = false;
                    
                    // Munkafájl mentés gomb megjelenítése
                    saveWorkFileBtn.classList.remove('d-none');
                }
            });
            
            // Automatikus méretezés
            editableTextarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
            
            translatedCell.appendChild(editableTextarea);
            row.appendChild(translatedCell);
            
            // Műveletek cella
            const actionsCell = document.createElement('td');
            actionsCell.classList.add('text-center');
            
            // Újrafordítás gomb - kezdetben rejtve, de megjelenik, ha van fordított szöveg
            const retranslateBtn = document.createElement('button');
            retranslateBtn.type = 'button';
            retranslateBtn.className = 'btn btn-sm btn-info retranslate-btn';
            retranslateBtn.dataset.bsToggle = 'tooltip';
            retranslateBtn.dataset.bsPlacement = 'left';
            retranslateBtn.dataset.bsTitle = uiTranslations[currentLangCode]?.retranslate || 'Újrafordítás';
            
            // A gomb tartalma: ikon + szöveg (a szöveg a nyelvváltáskor frissül)
            const currentLang = currentLangCode;
            const retranslateText = uiTranslations[currentLang]?.retranslate || 'Újrafordítás';
            retranslateBtn.innerHTML = `<i class="bi bi-arrow-repeat me-1"></i>${retranslateText}`;
            
            retranslateBtn.id = `retranslate-${index}`;
            retranslateBtn.addEventListener('click', () => window.retranslateSubtitle(index, {
                rowsBeingRetranslated,
                sourceLanguageSelect,
                targetLanguageSelect,
                temperatureSlider,
                translationModeSelect,
                apiKeyInput,
                originalSubtitles,
                translatedSubtitles,
                translationMemory,
                updateTranslatedText,
                translateWithChatGpt,
                translateTextWithContext,
                saveTranslationBtn,
                saveWorkFileBtn,
                currentLangCode,
                uiTranslations
            }));
            
            // Ha nincs fordított szöveg, elrejtjük a gombot
            if (!translatedSubtitles[index]) {
                retranslateBtn.classList.add('d-none');
            }
            
            actionsCell.appendChild(retranslateBtn);
            
            // Fordítás megállítása gomb - kezdetben rejtve
            const rowStopBtn = document.createElement('button');
            rowStopBtn.type = 'button';
            rowStopBtn.className = 'btn btn-sm btn-warning d-none';
            rowStopBtn.dataset.bsToggle = 'tooltip';
            rowStopBtn.dataset.bsPlacement = 'left';
            rowStopBtn.dataset.bsTitle = uiTranslations[currentLangCode]?.stopTranslation || 'Fordítás megállítása';
            
            // A gomb tartalma: ikon + szöveg (a szöveg a nyelvváltáskor frissül)
            const stopText = uiTranslations[currentLang]?.stopTranslation || 'Fordítás megállítása';
            rowStopBtn.innerHTML = `<i class="bi bi-pause-circle me-1"></i>${stopText}`;
            
            rowStopBtn.id = `row-stop-${index}`;
            rowStopBtn.addEventListener('click', pauseTranslation);
            
            actionsCell.appendChild(rowStopBtn);
            
            row.appendChild(actionsCell);
            
            subtitleTable.appendChild(row);
            
            // Textarea magasságának beállítása
            editableTextarea.style.height = 'auto';
            editableTextarea.style.height = (editableTextarea.scrollHeight) + 'px';
        });
        
        // Tooltipek inicializálása
        initTooltips();
    }
    
    // Tooltipek inicializálása
    function initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Fordítás indítása
    async function startTranslation() {
        // Ellenőrizzük, hogy van-e betöltött felirat
        if (!originalSubtitles || originalSubtitles.length === 0) {
            alert('Please load a subtitle file first!');
            return;
        }
        
        // Fordítási mód ellenőrzése
        const selectedMode = translationModeSelect.value;
        
        // API kulcs ellenőrzése
        const apiKey = apiKeyInput.value.trim();
        
        // API kulcs ellenőrzése ChatGPT és OpenRouter módban
        if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
            if (!apiKey) {
                alert('Please enter the API key to use ChatGPT!');
                return;
            }
        } else if (selectedMode === 'openrouter') {
            if (!apiKey) {
                alert('Please enter the OpenRouter API key to use the selected model!');
                return;
            }
            
            // OpenRouter modell ellenőrzése
            const selectedModel = document.getElementById('openrouterModel').value;
            if (!selectedModel) {
                alert('Please select an OpenRouter model!');
                return;
            }
        }
        
        // UI elemek frissítése
        startTranslationBtn.classList.add('d-none');
        stopTranslationBtn.classList.remove('d-none');
        resetTranslationBtn.classList.add('d-none');
        progressContainer.classList.remove('d-none');
        
        // Fordítás állapotának beállítása
        isTranslationRunning = true;
        isTranslationPaused = false;
        isTranslationPausedRef.value = false; // Referencia objektum frissítése
        
        // Nyelvi beállítások
        const sourceLanguage = sourceLanguageSelect.value;
        const targetLanguage = targetLanguageSelect.value;
        
        // Hőmérséklet beállítás
        const temperature = parseFloat(temperatureSlider.value);
        
        // Ha még nincs lefordított felirat, akkor inicializáljuk
        if (translatedSubtitles.length === 0) {
            // Inicializáljuk a lefordított feliratokat
            translatedSubtitles = originalSubtitles.map(subtitle => '');
        }
        
        // Szekvenciális fordítás a ChatGPT API-val
        if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
            // Ellenőrizzük, hogy a kötegelt mód be van-e kapcsolva
            const batchModeCheckbox = document.getElementById('batchModeCheckbox');
            
            if (batchModeCheckbox && batchModeCheckbox.checked) {
                // Kötegelt fordítás a ChatGPT modellekkel
                const modelName = selectedMode === 'chatgpt_4o_mini' ? 'gpt-4o-mini' : 'gpt-4o';
                
                const lastProcessedIndex = await window.translateBatchWithChatGpt(currentTranslationIndex, sourceLanguage, targetLanguage, apiKey, temperature, modelName, {
                    originalSubtitles,
                    translatedSubtitles,
                    isTranslationPausedRef, // Globális referencia objektum átadása
                    currentTranslationIndex,
                    updateProgressBar,
                    updateTranslatedText,
                    translationMemory,
                    saveTranslationBtn,
                    saveWorkFileBtn,
                    scrollToRow,
                    pauseTranslation,
                    showCurrentRowStopButton
                });
                
                // Frissítjük a globális indexet a függvény visszatérési értékével
                currentTranslationIndex = lastProcessedIndex;
                
                // Rövid késleltetés, hogy biztosan minden frissülhessen a DOM-ban
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Ha végigértünk a feliratokon és nem szüneteltettük a fordítást
                if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
                    // Fordítás befejezése
                    finishTranslation();
                }
            } else {
                // Normál szekvenciális fordítás
                const lastProcessedIndex = await window.translateSequentially(currentTranslationIndex, sourceLanguage, targetLanguage, apiKey, selectedMode, temperature, {
                    originalSubtitles,
                    translatedSubtitles,
                    isTranslationPausedRef, // Globális referencia objektum átadása
                    currentTranslationIndex,
                    updateProgressBar,
                    updateTranslatedText,
                    translationMemory,
                    saveTranslationBtn,
                    saveWorkFileBtn,
                    scrollToRow,
                    pauseTranslation,
                    translateWithChatGptCustomPrompt,
                    showCurrentRowStopButton,
                    currentLangCode,
                    uiTranslations
                });
                
                // Frissítjük a globális indexet a függvény visszatérési értékével
                currentTranslationIndex = lastProcessedIndex;
                
                // Ha végigértünk a feliratokon és nem szüneteltettük a fordítást
                if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
                    // Fordítás befejezése
                    finishTranslation();
                }
            }
        } else if (selectedMode === 'openrouter') {
            // Ellenőrizzük, hogy a kötegelt mód be van-e kapcsolva
            const batchModeCheckbox = document.getElementById('batchModeCheckbox');
            
            if (batchModeCheckbox && batchModeCheckbox.checked) {
                // Kötegelt fordítás az OpenRouter API-val
                const lastProcessedIndex = await window.translateSubtitleBatch(currentTranslationIndex, {
                    sourceLanguageSelect,
                    targetLanguageSelect,
                    temperatureSlider,
                    translationModeSelect,
                    apiKeyInput,
                    originalSubtitles,
                    translatedSubtitles,
                    isTranslationPausedRef,
                    currentTranslationIndex,
                    updateProgressBar,
                    updateTranslatedText,
                    translationMemory,
                    saveTranslationBtn,
                    saveWorkFileBtn,
                    scrollToRow,
                    pauseTranslation,
                    showCurrentRowStopButton,
                    currentLangCode,
                    uiTranslations
                });
                
                // Frissítjük a globális indexet a függvény visszatérési értékével
                currentTranslationIndex = lastProcessedIndex;
                
                // Rövid késleltetés, hogy biztosan minden frissülhessen a DOM-ban
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Ha végigértünk a feliratokon és nem szüneteltettük a fordítást
                if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
                    // Fordítás befejezése
                    finishTranslation();
                }
            } else {
                // Szekvenciális fordítás az OpenRouter API-val
                const lastProcessedIndex = await window.translateSubtitleSequentially(currentTranslationIndex, {
                    sourceLanguageSelect,
                    targetLanguageSelect,
                    temperatureSlider,
                    translationModeSelect,
                    apiKeyInput,
                    originalSubtitles,
                    translatedSubtitles,
                    isTranslationPausedRef,
                    currentTranslationIndex,
                    updateProgressBar,
                    updateTranslatedText,
                    translationMemory,
                    saveTranslationBtn,
                    saveWorkFileBtn,
                    scrollToRow,
                    pauseTranslation,
                    showCurrentRowStopButton,
                    currentLangCode,
                    uiTranslations
                });
                
                // Frissítjük a globális indexet a függvény visszatérési értékével
                currentTranslationIndex = lastProcessedIndex;
                
                // Ha végigértünk a feliratokon és nem szüneteltettük a fordítást
                if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
                    // Fordítás befejezése
                    finishTranslation();
                }
            }
        } else if (selectedMode === 'lm_studio_local') {
            // LM Studio batch mód támogatás
            const batchModeCheckbox = document.getElementById('batchModeCheckbox');
            if (batchModeCheckbox && batchModeCheckbox.checked) {
                // Kötegelt fordítás LM Studio-val
                const lastProcessedIndex = await window.translateBatchWithLmStudio(
                    currentTranslationIndex,
                    sourceLanguage,
                    targetLanguage,
                    temperature,
                    {
                        originalSubtitles,
                        translatedSubtitles,
                        isTranslationPausedRef,
                        currentTranslationIndex,
                        updateProgressBar,
                        updateTranslatedText,
                        translationMemory,
                        saveTranslationBtn,
                        saveWorkFileBtn,
                        scrollToRow,
                        pauseTranslation,
                        showCurrentRowStopButton
                    }
                );
                currentTranslationIndex = lastProcessedIndex;
            } else {
                // Normál LM Studio fordítás
                await translateWithLmStudio(currentTranslationIndex, sourceLanguage, targetLanguage, temperature);
            }
            // Fordítás befejezése, ha végigértünk a feliratokon
            if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
                finishTranslation();
            }
        }
        
        // Eltávolítjuk a globális befejezés ellenőrzést, mivel minden fordítási mód után külön ellenőrizzük
        // Ha végigértünk a feliratokon és nem szüneteltettük a fordítást
        // if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
        //     // Fordítás befejezése
        //     finishTranslation();
        // }
    }

    // LM Studio fordítás
    async function translateWithLmStudio(startIndex, sourceLanguage, targetLanguage, temperature) {
        // Végigmegyünk a feliratokon
        for (let i = startIndex; i < originalSubtitles.length; i++) {
            // Ha a fordítás szüneteltetve van, akkor kilépünk a ciklusból
            if (isTranslationPausedRef.value) {
                break;
            }
            
            currentTranslationIndex = i;
            
            // Ellenőrizzük, hogy már le van-e fordítva ez a felirat
            if (translatedSubtitles[i]) {
                continue; // Átugorjuk a már lefordított feliratokat
            }
            
            // Folyamatjelző frissítése
            updateProgressBar(i, originalSubtitles.length);
            
            try {
                // Fordítás végrehajtása
                const translatedText = await translateTextWithContext(
                    originalSubtitles,
                    i,
                    sourceLanguage,
                    targetLanguage,
                    0,
                    temperature,
                    { getLanguageName }
                );
                
                // Fordított szöveg mentése
                translatedSubtitles[i] = translatedText;
                
                // Táblázat frissítése
                updateTranslatedText(i, translatedText);
                
                // Újrafordítás gomb megjelenítése
                const retranslateBtn = document.getElementById(`retranslate-${i}`);
                if (retranslateBtn) {
                    retranslateBtn.classList.remove('d-none');
                }
                
                // Görgetés az aktuális sorhoz
                scrollToRow(i);
                
                // Mentés gomb engedélyezése
                saveTranslationBtn.disabled = false;
                
                // Munkafájl mentés gomb megjelenítése
                saveWorkFileBtn.classList.remove('d-none');
                
            } catch (error) {
                console.error('Fordítási hiba:', error);
                
                // Ha sebességkorlát-túllépés (429) hiba, akkor várunk egy ideig és újra próbáljuk
                if (error.message.includes('429')) {
                    console.log('Sebességkorlát-túllépés (429), várakozás 10 másodpercet...');
                    alert('We wait 10 seconds for the API speed limit to be exceeded and then continue translating.');
                    
                    // Várakozás 10 másodpercet
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    
                    // Visszalépünk egy indexet, hogy újra megpróbáljuk ezt a feliratot
                    i--;
                    continue;
                }
                
                alert(`An error occurred during translation: ${error.message}`);
                pauseTranslation();
                break;
            }
        }
    }

    // Segédfüggvény a ChatGPT API-val történő fordításhoz egyedi rendszerüzenettel
    async function translateWithChatGptCustomPrompt(text, systemPrompt, apiKey, model = 'gpt-4o-mini', temperature = 0.7) {
        // Maximum 3 újrapróbálkozás
        const MAX_RETRIES = 3;
        let retryCount = 0;
        let success = false;
        let result = '';
        
        while (!success && retryCount < MAX_RETRIES) {
            try {
                // API kérés előkészítése
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [
                            {
                                role: 'system',
                                content: systemPrompt
                            },
                            {
                                role: 'user',
                                content: text
                            }
                        ],
                        temperature: temperature
                    })
                });
                
                // Válasz feldolgozása
                const data = await response.json();
                
                // Hiba ellenőrzése
                if (!response.ok) {
                    const errorMessage = data.error?.message || 'Unknown error';
                    console.error(`ChatGPT API hiba: ${errorMessage}`);
                    
                    // Rate limit hiba esetén hosszabb várakozás
                    if (errorMessage.includes('Rate limit') || response.status === 429) {
                        await new Promise(resolve => setTimeout(resolve, 5000)); // 5 másodperc várakozás
                    }
                    
                    throw new Error(errorMessage);
                }
                
                // Sikeres válasz feldolgozása
                if (data.choices && data.choices.length > 0) {
                    result = data.choices[0].message.content.trim();
                    success = true;
                } else {
                    throw new Error('No translation result returned');
                }
            } catch (error) {
                console.error(`Hiba a ChatGPT fordítás során (${retryCount + 1}/${MAX_RETRIES}):`, error);
                retryCount++;
                
                // Várakozás újrapróbálkozás előtt (exponenciális backoff)
                if (retryCount < MAX_RETRIES) {
                    const waitTime = Math.pow(2, retryCount) * 1000; // 2^retryCount másodperc
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                }
            }
        }
        
        if (!success) {
            throw new Error('Failed to translate with ChatGPT after multiple retries');
        }
        
        return result;
    }
    
    // Segédfüggvény a ChatGPT API-val történő fordításhoz
    async function translateWithChatGpt(text, sourceLanguage, targetLanguage, apiKey, model = 'gpt-4o-mini', temperature = 0.7) {
        // A rendszerüzenet összeállítása
        const systemPrompt = `Fordítsd le a szöveget ${getLanguageName(sourceLanguage)} nyelvről ${getLanguageName(targetLanguage)} nyelvre. 
Csak a fordítást add vissza, semmi mást. Ne adj hozzá magyarázatot vagy megjegyzést.`;
        
        // Delegáljuk a fordítást a részletes ChatGPT fordító funkciónak
        return translateWithChatGptCustomPrompt(text, systemPrompt, apiKey, model, temperature);
    }

    // Fordított szöveg frissítése a táblázatban
    function updateTranslatedText(index, text) {
        const editableTextarea = document.querySelector(`#translated-${index} textarea`);
        if (editableTextarea) {
            editableTextarea.value = text;
        }
    }
    
    // Görgetés a megadott sorhoz
    function scrollToRow(index) {
        const row = document.getElementById(`row-${index}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // Folyamatjelző frissítése
    function updateProgressBar(currentIndex, totalCount) {
        const progress = Math.round((currentIndex / totalCount) * 100);
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
    }
    
    // Fordítás befejezése
    function finishTranslation() {
        // Haladásjelző 100%-ra állítása
        progressBar.style.width = '100%';
        progressBar.setAttribute('aria-valuenow', 100);
        
        // Gombok állapotának beállítása
        // A fordítás indítása gomb szövegének beállítása az aktuális nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
        }
        
        // Fordítás leállítva
        isTranslationPaused = true;
        isTranslationRunning = false;
        
        // Gombok frissítése
        startTranslationBtn.disabled = false;
        startTranslationBtn.classList.remove('d-none');
        stopTranslationBtn.classList.add('d-none');
        saveTranslationBtn.disabled = false;
        saveWorkFileBtn.classList.remove('d-none');
        
        // Elrejtjük az összes sormegállítás gombot is
        hideCurrentRowStopButton();
        
        // Értesítés a fordítás befejezéséről
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            alert(uiTranslations[currentLangCode].translationCompleted || 'A fordítás sikeresen befejeződött!');
        } else {
            alert('Translation completed successfully!');
        }
    }

    // Fordítás mentése
    function saveTranslation() {
        // Ellenőrizzük, hogy van-e fordítás
        if (translatedSubtitles.length === 0) {
            alert('There is nothing to save! Please translate the subtitles first.');
            return;
        }
        
        // SRT formátumú tartalom létrehozása
        let srtContent = '';
        
        // Fordított feliratok összegyűjtése
        originalSubtitles.forEach((subtitle, index) => {
            // Ha a felhasználó éppen szerkeszt egy sort, akkor frissítjük a fordítást
            const editableTextarea = document.querySelector(`#translated-${index} textarea`);
            if (editableTextarea) {
                // Frissítjük a translatedSubtitles tömböt a legfrissebb szerkesztett szöveggel
                translatedSubtitles[index] = editableTextarea.value.trim();
            }
            
            srtContent += `${subtitle.number}\n`;
            srtContent += `${subtitle.timecode}\n`;
            srtContent += `${translatedSubtitles[index] || ''}\n\n`;
        });
        
        // Fájl létrehozása és letöltése
        const targetLangCode = targetLanguageSelect.value;
let newFileName;

// EllenĹ‘rizzĂĽk a fĂˇjl kiterjesztĂ©sĂ©t
if (fileName.toLowerCase().endsWith('.wrk') || fileName.toLowerCase().endsWith('.mmm')) {
    // .wrk vagy .mmm fĂˇjlok esetĂ©n: "Translated subtitles" + cĂ©lnyelv kĂłdja + .srt
    newFileName = `Translated subtitles-${targetLangCode}.srt`;
} else {
    // .srt fĂˇjlok esetĂ©n marad az eredeti logika: Eredeti fĂˇjlnĂ©v + cĂ©lnyelv kĂłdja + .srt
    newFileName = fileName.replace('.srt', `-${targetLangCode}.srt`);
}
        
        // Blob lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©se
        const blob = new Blob([srtContent], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, newFileName);
    }

    // Munkafájl mentése
    function saveWorkFile() {
        // Ellenőrizzük, hogy van-e betöltött felirat
        if (originalSubtitles.length === 0) {
            alert('No loaded subtitle to save!');
            return;
        }
        
        // Frissítjük a fordításokat a szerkesztett mezőkből
        translatedSubtitles.forEach((subtitle, index) => {
            const editableTextarea = document.querySelector(`#translated-${index} textarea`);
            if (editableTextarea) {
                translatedSubtitles[index] = editableTextarea.value.trim();
            }
        });
        
        // Munkafájl adatok összeállítása
        const workData = {
            originalFileName: fileName,
            subtitles: originalSubtitles,
            translatedSubtitles: translatedSubtitles,
            currentIndex: currentTranslationIndex,
            sourceLanguage: sourceLanguageSelect.value,
            targetLanguage: targetLanguageSelect.value,
            temperature: temperatureSlider.value
        };
        
        // JSON formátumú tartalom létrehozása
        const jsonContent = JSON.stringify(workData, null, 2);
        
        // Fájl létrehozása és letöltése
        const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
        const downloadFileName = `${fileNameWithoutExt}.wrk`;
        
        const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8' });
        saveAs(blob, downloadFileName);
    }
    
    // Segédfüggvény a nyelv kódjának névvé alakításához
    function getLanguageName(languageCode) {
        const languages = {
            'en': 'angol',
            'hu': 'magyar',
            'de': 'német',
            'fr': 'francia',
            'es': 'spanyol',
            'it': 'olasz',
            'pt_PT': 'portugál (Portugália)',
            'pt_BR': 'portugál (Brazília)',
            'nl': 'holland',
            'pl': 'lengyel',
            'ru': 'orosz',
            'ja': 'japán',
            'zh': 'kínai',
            'ko': 'koreai',
            'ar': 'arab',
            'hi': 'hindi',
            'tr': 'török',
            'sv': 'svéd',
            'da': 'dán',
            'fi': 'finn',
            'no': 'norvég',
            'cs': 'cseh',
            'sk': 'szlovák',
            'ro': 'román',
            'bg': 'bolgár',
            'hr': 'horvát',
            'sr': 'szerb',
            'uk': 'ukrán',
            'el': 'görög',
            'he': 'héber',
            'vi': 'vietnámi',
            'th': 'thai',
            'id': 'indonéz',
            'ms': 'maláj',
            'fa': 'perzsa',
            'ur': 'urdu'
        };
        
        return languages[languageCode] || languageCode;
    }

    // Nyelvválasztó inicializálása
    function initLanguageSelector() {
        console.log("Nyelvválasztó inicializálása");
        
        // Nyelvválasztó eseménykezelők
        document.querySelectorAll('#uiLanguageMenu a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeUiLanguage(lang);
            });
        });

        // Mentett nyelv betöltése
        const savedLanguage = localStorage.getItem('uiLanguage');
        if (savedLanguage && uiTranslations[savedLanguage]) {
            console.log("Mentett nyelv betöltése: " + savedLanguage);
            currentLangCode = savedLanguage; // Globális változó frissítése
            changeUiLanguage(savedLanguage);
        } else {
            // Alapértelmezett angol nyelv
            console.log("Alapértelmezett angol nyelv beállítása");
            currentLangCode = 'en'; // Globális változó frissítése
            changeUiLanguage('en');
        }
    }

    // Batch mode translation for LM Studio
    async function translateBatchWithLmStudio(startIndex, sourceLanguage, targetLanguage, temperature, {
        originalSubtitles,
        translatedSubtitles,
        isTranslationPausedRef,
        currentTranslationIndex,
        updateProgressBar,
        updateTranslatedText,
        translationMemory,
        saveTranslationBtn,
        saveWorkFileBtn,
        scrollToRow,
        pauseTranslation,
        showCurrentRowStopButton
    }) {
        console.warn('LM Studio batch mód használata: 30 soronként feldolgozás');
        
        // Köteg mérete (egyszerre ennyi sort küldünk fordításra)
        const BATCH_SIZE = 30;
        
        // API kérések közötti késleltetés (ms) - 0.5 másodperc
        const API_DELAY = 500;
        
        // Az utolsó feldolgozott index nyomon követése
        let lastProcessedIndex = startIndex;
        
        // Végigmegyünk a feliratokon kötegekben
        for (let batchStart = startIndex; batchStart < originalSubtitles.length; batchStart += BATCH_SIZE) {
            // Ha a fordítás szüneteltetése be van kapcsolva, akkor kilépünk a ciklusból
            if (isTranslationPausedRef.value) {
                break;
            }
            
            // Aktuális köteg végének meghatározása
            const batchEnd = Math.min(batchStart + BATCH_SIZE, originalSubtitles.length);
            
            // Folyamatjelző frissítése
            updateProgressBar(batchStart, originalSubtitles.length);
            
            // Megjelenítjük az aktuális sor megállítás gombját
            if (showCurrentRowStopButton) {
                showCurrentRowStopButton(batchStart);
            }
            
            // Homokóra animáció megjelenítése többnyelvű üzenettel
            let batchMessage;
            if (uiTranslations[currentLangCode] && uiTranslations[currentLangCode].batchTranslationInProgress) {
                // Helyettesítjük a paramétereket a fordítási szövegben
                batchMessage = uiTranslations[currentLangCode].batchTranslationInProgress
                    .replace('{0}', 'sorok')
                    .replace('{1}', batchStart+1)
                    .replace('{2}', batchEnd);
            } else if (uiTranslations['en'] && uiTranslations['en'].batchTranslationInProgress) {
                // Ha nincs fordítás az aktuális nyelven, használjuk az angol fordítást
                batchMessage = uiTranslations['en'].batchTranslationInProgress
                    .replace('{0}', 'lines')
                    .replace('{1}', batchStart+1)
                    .replace('{2}', batchEnd);
            } else {
                // Alapértelmezett üzenet, ha nincs fordítás
                batchMessage = `Lines ${batchStart+1}-${batchEnd} translation in progress...`;
            }
            window.showLoadingOverlay(batchMessage);
            
            // Végigmegyünk a kötegen és lefordítjuk a sorokat
            for (let i = batchStart; i < batchEnd; i++) {
                // Ha a fordítás szüneteltetése be van kapcsolva, akkor kilépünk a ciklusból
                if (isTranslationPausedRef.value) {
                    break;
                }
                
                // Aktuális fordítási index frissítése
                lastProcessedIndex = i;
                
                // Ellenőrizzük, hogy már le van-e fordítva ez a felirat
                if (translatedSubtitles[i]) {
                    continue; // Átugorjuk a már lefordított feliratokat
                }
                
                try {
                    // Fordítás végrehajtása
                    const translatedText = await translateTextWithContext(
                        originalSubtitles,
                        i,
                        sourceLanguage,
                        targetLanguage,
                        0,
                        temperature,
                        { getLanguageName }
                    );
                    
                    // Fordított szöveg mentése
                    translatedSubtitles[i] = translatedText;
                    
                    // Táblázat frissítése
                    updateTranslatedText(i, translatedText);
                    
                    // Újrafordítás gomb megjelenítése
                    const retranslateBtn = document.getElementById(`retranslate-${i}`);
                    if (retranslateBtn) {
                        retranslateBtn.classList.remove('d-none');
                    }
                    
                    // Mentés gomb engedélyezése
                    saveTranslationBtn.disabled = false;
                    
                    // Munkafájl mentés gomb megjelenítése
                    saveWorkFileBtn.classList.remove('d-none');
                    
                } catch (error) {
                    console.error('Fordítási hiba:', error);
                    
                    // Ha sebességkorlát-túllépés (429) hiba, akkor várunk egy ideig és újra próbáljuk
                    if (error.message.includes('429')) {
                        console.log('Sebességkorlát-túllépés (429), várakozás 10 másodpercet...');
                        alert('We wait 10 seconds for the API speed limit to be exceeded and then continue translating.');
                        
                        // Várakozás 10 másodpercet
                        await new Promise(resolve => setTimeout(resolve, 10000));
                        
                        // Visszalépünk egy indexet, hogy újra megpróbáljuk ezt a feliratot
                        i--;
                        continue;
                    }
                    
                    alert(`An error occurred during translation: ${error.message}`);
                    pauseTranslation();
                    window.hideLoadingOverlay();
                    return lastProcessedIndex;
                }
            }
            
            // Köteg feldolgozása után elrejtjük a homokóra animációt
            window.hideLoadingOverlay();
            
            // Görgetés az utolsó feldolgozott sorhoz
            scrollToRow(lastProcessedIndex);
            
            // Kis szünet a következő köteg előtt
            await new Promise(resolve => setTimeout(resolve, API_DELAY));
        }
        
        return lastProcessedIndex;
    }

    // Globális elérhetőség biztosítása
    window.translateBatchWithLmStudio = translateBatchWithLmStudio;

    // Sequential LM Studio fallback for translationFunctions.js
    async function translateSequentiallyWithLMStudio(startIndex, sourceLanguage, targetLanguage, temperature, {
        originalSubtitles,
        translatedSubtitles,
        isTranslationPausedRef,
        currentTranslationIndex,
        updateProgressBar,
        updateTranslatedText,
        translationMemory,
        saveTranslationBtn,
        saveWorkFileBtn,
        scrollToRow,
        pauseTranslation,
        showCurrentRowStopButton
    }) {
        console.warn('LM Studio sequential fallback: translateWithLmStudio használata');
        await translateWithLmStudio(startIndex, sourceLanguage, targetLanguage, temperature);
        return currentTranslationIndex;
    }
    // Globális elérhetőség biztosítása
    window.translateSequentiallyWithLMStudio = translateSequentiallyWithLMStudio;

    // Bootstrap tooltipek inicializálása
    function initTooltips() {
        // Meglévő tooltipek eltávolítása
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
            const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
            if (tooltip) {
                tooltip.dispose();
            }
        });
        
        // Új tooltipek inicializálása
        const newTooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        newTooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        console.log("Tooltipek újrainicializálva");
    }
    
    console.log("UI szövegek frissítése befejezve!");
});

// Fordítás módjának kezelése
function handleTranslationModeChange() {
    const selectedMode = translationModeSelect.value;
    
    // OpenRouter modell konténer kezelése
    const openrouterModelContainer = document.getElementById('openrouterModelContainer');
    if (selectedMode === 'openrouter') {
        openrouterModelContainer.classList.remove('d-none');
        // OpenRouter modellek betöltése
        loadOpenRouterModels();
    } else {
        openrouterModelContainer.classList.add('d-none');
    }
    
    // Batch mód konténer kezelése
    const batchModeContainer = document.getElementById('batchModeContainer');
    if (selectedMode === 'chatgpt_4o_mini' || 
        selectedMode === 'chatgpt_4o' || 
        selectedMode === 'openrouter' ||
        selectedMode === 'lm_studio_local') {
        batchModeContainer.classList.remove('d-none');
        
        // Tooltip inicializálása a batch mód információs ikonhoz
        const batchModeInfo = document.getElementById('batchModeInfo');
        if (batchModeInfo) {
            // Tooltip inicializálása
            const tooltip = new bootstrap.Tooltip(batchModeInfo, {
                title: uiTranslations[currentLangCode]?.batchModeInfo || 'Ezt a funkciót bekapcsolva a program egy speciális módon egyszerre 30 sor szöveget dolgoz fel, így sokkal gyorsabban és nagyobb szövegértéssel és pontossággal tudja a fordítást elvégezni a program'
            });
        }
    } else {
        batchModeContainer.classList.add('d-none');
        // Ha nem támogatott mód, akkor kikapcsoljuk a batch módot
        const batchModeCheckbox = document.getElementById('batchModeCheckbox');
        if (batchModeCheckbox) {
            batchModeCheckbox.checked = false;
        }
    }
    
    if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
        apiKeyContainer.classList.remove('d-none');
        
        // Ha van mentett API kulcs, csak a megjelenítés gombot mutatjuk
        const savedApiKey = loadApiKey();
        if (savedApiKey) {
            apiKeyInput.value = savedApiKey;
            apiKeyInput.type = 'password';
            
            // Elrejtjük az input mezőt és megjelenítjük a gombot
            apiKeyInputGroup.classList.add('d-none');
            showApiKeyFieldBtn.classList.remove('d-none');
        } else {
            // Ha nincs mentett API kulcs, rögtön megjelenítjük az input mezőt
            apiKeyInputGroup.classList.remove('d-none');
            showApiKeyFieldBtn.classList.add('d-none');
        }
        
        // API kulcs címke frissítése
        document.querySelector('label[for="apiKey"]').textContent = 'API kulcs:';
    } else if (selectedMode === 'openrouter') {
        apiKeyContainer.classList.remove('d-none');
        
        // Ha van mentett OpenRouter API kulcs, csak a megjelenítés gombot mutatjuk
        const savedOpenRouterApiKey = loadOpenRouterApiKey();
        if (savedOpenRouterApiKey) {
            apiKeyInput.value = savedOpenRouterApiKey;
            apiKeyInput.type = 'password';
            
            // Elrejtjük az input mezőt és megjelenítjük a gombot
            apiKeyInputGroup.classList.add('d-none');
            showApiKeyFieldBtn.classList.remove('d-none');
        } else {
            // Ha nincs mentett OpenRouter API kulcs, rögtön megjelenítjük az input mezőt
            apiKeyInputGroup.classList.remove('d-none');
            showApiKeyFieldBtn.classList.add('d-none');
        }
        
        // API kulcs címke frissítése
        document.querySelector('label[for="apiKey"]').textContent = 'OpenRouter API kulcs:';
    } else {
        apiKeyContainer.classList.add('d-none');
        apiKeyInput.value = '';
    }
    
    // Mentjük a kiválasztott fordítási módot
    localStorage.setItem('translationMode', selectedMode);
}

// API kulcs láthatóság kapcsolása
function toggleApiKeyVisibility() {
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        apiKeyVisibilityIcon.classList.remove('bi-eye');
        apiKeyVisibilityIcon.classList.add('bi-eye-slash');
    } else {
        apiKeyInput.type = 'password';
        apiKeyVisibilityIcon.classList.remove('bi-eye-slash');
        apiKeyVisibilityIcon.classList.add('bi-eye');
    }
}

// API kulcs mező megjelenítése
function showApiKeyField() {
    apiKeyInputGroup.classList.remove('d-none');
    showApiKeyFieldBtn.classList.add('d-none');
}

// Forrás blokkmentése gomb létrehozása
function createSaveSourceBlockButton() {
    const saveTranslationBtn = document.getElementById('saveTranslation');
    
    // Ha már létezik a gomb, csak megjelenítjük
    let saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn');
    if (saveSourceBlockBtn) {
        saveSourceBlockBtn.classList.remove('d-none');
        console.log('Gomb már létezik, megjelenítve.'); // Debug üzenet
        return saveSourceBlockBtn;
    }
    
    // Különben létrehozzuk a gombot
    saveSourceBlockBtn = document.createElement('button');
    saveSourceBlockBtn.id = 'saveSourceBlockBtn';
    saveSourceBlockBtn.className = 'btn btn-warning me-2';
    saveSourceBlockBtn.innerHTML = '<i class="bi bi-file-earmark-text me-2"></i>' + (uiTranslations[currentLangCode]?.saveSourceBlock || 'Forrás blokkmentése');
    saveSourceBlockBtn.onclick = saveSourceBlock;
    
    // Beszúrjuk a Fordítás mentése gomb elé
    if (saveTranslationBtn && saveTranslationBtn.parentNode) {
        saveTranslationBtn.parentNode.insertBefore(saveSourceBlockBtn, saveTranslationBtn);
        console.log('Gomb létrehozva és beszúrva a DOM-ba.'); // Debug üzenet
    } else {
        console.error('saveTranslation vagy annak szülőeleme nem található!');
    }
    
    return saveSourceBlockBtn;
}

// Forrás szöveg blokkokba mentése
function saveSourceBlock() {
    if (!originalSubtitles || originalSubtitles.length === 0) {
        alert(uiTranslations[currentLangCode]?.errorNoSubtitleToSave || 'No loaded subtitle to save!');
        return;
    }
    
    // Blokkos szöveg összeállítása
    let blockText = '';
    for (let i = 0; i < originalSubtitles.length; i++) {
        // Sorszám és szöveg hozzáadása
        blockText += (i + 1) + '. ' + originalSubtitles[i].text + '\n';
        
        // Minden 50. sor után 5 üres sor
        if ((i + 1) % 50 === 0) {
            blockText += '\n\n\n\n\n';
        }
    }
    
    // Fájl létrehozása és letöltése
    const newFileName = fileName.replace('.srt', '_block.txt');
    
    // Blob létrehozása és letöltés
    const blob = new Blob([blockText], { type: 'text/plain;charset=utf-8' });
    downloadTextFile(blockText, newFileName);
}

// Szövegfájl letöltése
function downloadTextFile(text, fileName) {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Referencia objektum a szüneteltetés változóhoz
let isTranslationPausedRef = { value: false };

// Aktuális sor megállítás gombjának megjelenítése
function showCurrentRowStopButton(index) {
    // Először elrejtjük az összes sormegállítás gombot
    hideCurrentRowStopButton();
    
    // Megjelenítjük az aktuális sor megállítás gombját
    const rowStopBtn = document.getElementById(`row-stop-${index}`);
    if (rowStopBtn) {
        rowStopBtn.classList.remove('d-none');
    }
}

// Aktuális sor megállítás gombjának elrejtése
function hideCurrentRowStopButton() {
    const allRowStopBtns = document.querySelectorAll('[id^="row-stop-"]');
    allRowStopBtns.forEach(btn => {
        btn.classList.add('d-none');
    });
}

// OpenRouter modellek lekérdezése és betöltése
async function loadOpenRouterModels() {
    const openrouterModelSelect = document.getElementById('openrouterModel');
    const apiKey = apiKeyInput.value || loadOpenRouterApiKey();
    
    if (!apiKey) {
        openrouterModelSelect.innerHTML = '<option value="" disabled selected>Adja meg először az OpenRouter API kulcsot</option>';
        return;
    }
    
    try {
        openrouterModelSelect.innerHTML = '<option value="" disabled selected>Modellek betöltése...</option>';
        
        const response = await fetch('https://openrouter.ai/api/v1/models', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': window.location.href,
                'X-Title': 'SRT Subtitle Translator'
            }
        });
        
        if (!response.ok) {
            throw new Error(`API hiba: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const models = data.data || [];
        
        // Modellek rendezése név szerint
        models.sort((a, b) => a.name.localeCompare(b.name));
        
        // Legördülő menü feltöltése
        // A kiválasztott nyelv alapján meghatározzuk a placeholder szöveget
        let placeholderText = "Select a model...";
        
        // Betöltjük a megfelelő fordítást a kiválasztott nyelv alapján
        if (typeof loadLanguage === 'function' && currentLangCode) {
            try {
                // Aszinkron művelet, de itt szinkron módon használjuk
                const translations = window[currentLangCode];
                if (translations && translations.selectModelPlaceholder) {
                    placeholderText = translations.selectModelPlaceholder;
                }
            } catch (error) {
                console.error('Hiba a fordítás betöltésekor:', error);
            }
        }
        
        openrouterModelSelect.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
        
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model.id;
            
            // Modell név és ár információ megjelenítése
            let displayName = model.name;
            if (model.pricing && model.pricing.prompt) {
                const promptPrice = parseFloat(model.pricing.prompt);
                if (promptPrice === 0) {
                    displayName += ' (free)';
                } else {
                    displayName += ` ($${promptPrice}/1M tokens)`;
                }
            }
            
            option.textContent = displayName;
            openrouterModelSelect.appendChild(option);
        });
        
        console.log(`${models.length} OpenRouter modell betöltve`);
        
    } catch (error) {
        console.error('Hiba az OpenRouter modellek betöltésekor:', error);
        openrouterModelSelect.innerHTML = '<option value="" disabled selected>Hiba a modellek betöltésekor</option>';
    }
}

window.addEventListener('DOMContentLoaded', function() {
    // UI elemek betöltése
    loadUiElements();
    
    // Eseménykezelők beállítása
    setupEventListeners();
    
    // Nyelvi beállítások inicializálása
    initLanguageSelector();
    
    // Tooltipek inicializálása
    initTooltips();
    
    // Mentett fordítási mód betöltése
    const savedTranslationMode = localStorage.getItem('translationMode');
    if (savedTranslationMode) {
        translationModeSelect.value = savedTranslationMode;
    }
    
    // Fordítási mód kezelése inicializáláskor
    handleTranslationModeChange();
    
    console.log('Eseménykezelők beállítva');
});
