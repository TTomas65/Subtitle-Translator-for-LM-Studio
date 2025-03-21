// Global variables
let originalSubtitles = []; // Az eredeti feliratokat tĂˇrolja
let translatedSubtitles = []; // A lefordĂ­tott feliratokat tĂˇrolja
let originalSrtContent = ''; // Az eredeti SRT fĂˇjl teljes tartalma
let fileName = ''; // A betĂ¶ltĂ¶tt fĂˇjl neve
let originalFilePath = ''; // Az eredeti fĂˇjl elĂ©rĂ©si Ăştja
let translationMemory = {}; // FordĂ­tĂˇsi memĂłria a konzisztencia Ă©rdekĂ©ben
let isTranslationPaused = false; // FordĂ­tĂˇs szĂĽneteltetĂ©se
let currentTranslationIndex = 0; // AktuĂˇlis fordĂ­tĂˇsi index
let isTranslationRunning = false; // FordĂ­tĂˇs folyamatban
let rowsBeingRetranslated = new Set(); // ĂšjrafordĂ­tĂˇs alatt ĂˇllĂł sorok
let temperature = 1.0; // FordĂ­tĂˇsi szabadsĂˇgfok alapĂ©rtĂ©ke
let currentLangCode = 'en'; // AktuĂˇlis nyelv alapĂ©rtĂ©ke

// GlobĂˇlis DOM elem vĂˇltozĂłk
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
let cardTitles; // A kĂˇrtya cĂ­meket tĂˇrolĂł vĂˇltozĂł
let fileInputLabel; // A fĂˇjl input labeljĂ©t tĂˇrolĂł vĂˇltozĂł
let translationModeSelect;
let apiKeyContainer;
let apiKeyInput;
let apiKeyInputGroup; // API kulcs input csoport
let showApiKeyFieldBtn; // API kulcs mezĹ‘ megjelenĂ­tĹ‘ gomb
let saveSourceBlockBtn; // ForrĂˇs blokkmentĂ©se gomb
let toggleApiKeyVisibilityBtn; // API kulcs lĂˇthatĂłsĂˇg kapcsolĂł gomb
let apiKeyVisibilityIcon; // API kulcs lĂˇthatĂłsĂˇg ikon

// API kulcs titkosĂ­tĂˇsi funkciĂłk
// TitkosĂ­tĂł kulcs (alkalmazĂˇs-specifikus konstans)
const encryptionKey = "SRT_Felirat_Fordito_App_Secret_Key";

// API kulcs titkosĂ­tĂˇsa
function encryptApiKey(apiKey) {
    return CryptoJS.AES.encrypt(apiKey, encryptionKey).toString();
}

// TitkosĂ­tott API kulcs visszafejtĂ©se
function decryptApiKey(encryptedApiKey) {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedApiKey, encryptionKey);
        const decryptedKey = bytes.toString(CryptoJS.enc.Utf8);
        
        // EllenĹ‘rizzĂĽk, hogy sikerĂĽlt-e a visszafejtĂ©s
        if (decryptedKey) {
            return decryptedKey;
        }
        return null;
    } catch (error) {
        console.error('Hiba tĂ¶rtĂ©nt az API kulcs visszafejtĂ©se sorĂˇn:', error);
        return null;
    }
}

// API kulcs mentĂ©se titkosĂ­tva
function saveApiKey(apiKey) {
    try {
        const encryptedKey = encryptApiKey(apiKey);
        localStorage.setItem('encryptedApiKey', encryptedKey);
        console.log('API kulcs titkosĂ­tva elmentve a localStorage-ba');
        return true;
    } catch (error) {
        console.error('Hiba tĂ¶rtĂ©nt az API kulcs mentĂ©se sorĂˇn:', error);
        return false;
    }
}

// TitkosĂ­tott API kulcs betĂ¶ltĂ©se
function loadApiKey() {
    try {
        const encryptedKey = localStorage.getItem('encryptedApiKey');
        if (encryptedKey) {
            return decryptApiKey(encryptedKey);
        }
        return null;
    } catch (error) {
        console.error('Hiba tĂ¶rtĂ©nt az API kulcs betĂ¶ltĂ©se sorĂˇn:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM betĂ¶ltve, elemek inicializĂˇlĂˇsa");
    
    // DOM elemek kivĂˇlasztĂˇsa Ă©s globĂˇlis vĂˇltozĂłkhoz rendelĂ©se
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
    cardTitles = document.querySelectorAll('.card-title'); // Az Ă¶sszes kĂˇrtya cĂ­m kivĂˇlasztĂˇsa
    fileInputLabel = document.querySelector('label.custom-file-label'); // A fĂˇjl input labeljĂ©nek kivĂˇlasztĂˇsa
    translationModeSelect = document.getElementById('translationMode');
    apiKeyContainer = document.getElementById('apiKeyContainer');
    apiKeyInput = document.getElementById('apiKey');
    apiKeyInputGroup = document.getElementById('apiKeyInputGroup'); // API kulcs input csoport
    showApiKeyFieldBtn = document.getElementById('showApiKeyFieldBtn'); // API kulcs mezĹ‘ megjelenĂ­tĹ‘ gomb
    saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn'); // ForrĂˇs blokkmentĂ©se gomb
    toggleApiKeyVisibilityBtn = document.getElementById('toggleApiKeyVisibility'); // API kulcs lĂˇthatĂłsĂˇg kapcsolĂł gomb
    apiKeyVisibilityIcon = document.getElementById('apiKeyVisibilityIcon'); // API kulcs lĂˇthatĂłsĂˇg ikon
    
    console.log("DOM elemek betĂ¶ltve:", {
        startTranslationBtn: !!startTranslationBtn,
        cardTitles: cardTitles.length,
        originalHeader: !!originalHeader,
        translatedHeader: !!translatedHeader,
        fileInputLabel: !!fileInputLabel
    });

    // NyelvvĂˇlasztĂł inicializĂˇlĂˇsa
    initLanguageSelector();
    
    // Mentett fordĂ­tĂˇsi mĂłd betĂ¶ltĂ©se
    const savedTranslationMode = localStorage.getItem('translationMode');
    if (savedTranslationMode && (savedTranslationMode === 'lm_studio_local' || 
                               savedTranslationMode === 'chatgpt_4o_mini' || 
                               savedTranslationMode === 'chatgpt_4o')) {
        translationModeSelect.value = savedTranslationMode;
        
        // Ha ChatGPT mĂłd van elmentve, akkor betĂ¶ltjĂĽk az API kulcsot is
        if (savedTranslationMode === 'chatgpt_4o_mini' || savedTranslationMode === 'chatgpt_4o') {
            apiKeyContainer.classList.remove('d-none');
            
            // Mentett API kulcs betĂ¶ltĂ©se
            const savedApiKey = loadApiKey();
            if (savedApiKey) {
                apiKeyInput.value = savedApiKey;
            }
        }
    }
    
    // EsemĂ©nykezelĹ‘k hozzĂˇadĂˇsa
    srtFileInput.addEventListener('change', handleFileSelect);
    startTranslationBtn.addEventListener('click', handleTranslationControl);
    stopTranslationBtn.addEventListener('click', pauseTranslation);
    resetTranslationBtn.addEventListener('click', resetTranslation);
    saveTranslationBtn.addEventListener('click', saveTranslation);
    saveWorkFileBtn.addEventListener('click', saveWorkFile);
    
    // FordĂ­tĂˇs mĂłdjĂˇnak esemĂ©nykezelĹ‘je
    translationModeSelect.addEventListener('change', handleTranslationModeChange);
    
    // API kulcs vĂˇltozĂˇsĂˇnak figyelĂ©se Ă©s mentĂ©se
    apiKeyInput.addEventListener('change', function() {
        // API kulcs mentĂ©se a localStorage-ba titkosĂ­tva
        if (apiKeyInput.value.trim() !== '') {
            saveApiKey(apiKeyInput.value);
            console.log('API kulcs titkosĂ­tva elmentve a localStorage-ba');
        }
    });
    
    // API kulcs lĂˇthatĂłsĂˇg kapcsolĂł gomb esemĂ©nykezelĹ‘je
    if (toggleApiKeyVisibilityBtn) {
        toggleApiKeyVisibilityBtn.addEventListener('click', toggleApiKeyVisibility);
    }
    
    // API kulcs mezĹ‘ megjelenĂ­tĹ‘ gomb esemĂ©nykezelĹ‘je
    if (showApiKeyFieldBtn) {
        showApiKeyFieldBtn.addEventListener('click', showApiKeyField);
    }
    
    // Temperature csĂşszka esemĂ©nykezelĹ‘
    temperatureSlider.addEventListener('input', function() {
        temperature = parseFloat(this.value);
        temperatureValue.textContent = temperature.toFixed(1);
        
        // SzĂ­nĂˇtmenet a temperature Ă©rtĂ©khez
        if (temperature < 0.7) {
            temperatureValue.className = 'badge bg-success'; // Pontos
        } else if (temperature <= 1.3) {
            temperatureValue.className = 'badge bg-primary'; // KiegyensĂşlyozott
        } else {
            temperatureValue.className = 'badge bg-warning text-dark'; // KreatĂ­v
        }
    });

    // FordĂ­tĂˇs vezĂ©rlĂ©se (indĂ­tĂˇs/folytatĂˇs)
    function handleTranslationControl() {
        // EllenĹ‘rizzĂĽk, hogy a fordĂ­tĂˇs szĂĽneteltetve van-e
        if (!isTranslationRunning || isTranslationPaused) {
            isTranslationPaused = false;
            startTranslation();
        }
    }

    // FordĂ­tĂˇs szĂĽneteltetĂ©se
    function pauseTranslation() {
        isTranslationPaused = true;
        isTranslationRunning = false;
        
        // A fordĂ­tĂˇs folytatĂˇsa gomb szĂ¶vegĂ©nek beĂˇllĂ­tĂˇsa az aktuĂˇlis nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-play-circle me-2"></i>${uiTranslations[currentLangCode].continueTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-play-circle me-2"></i>Continue Translation';
        }
        
        startTranslationBtn.disabled = false;
        startTranslationBtn.classList.remove('d-none');
        stopTranslationBtn.classList.add('d-none');
        
        // 10 mĂˇsodperc utĂˇn jelenĂ­tjĂĽk meg a Reset gombot
        setTimeout(() => {
            resetTranslationBtn.classList.remove('d-none');
        }, 10000);
    }
    
    // FordĂ­tĂˇs alaphelyzetbe ĂˇllĂ­tĂˇsa
    function resetTranslation() {
        // FordĂ­tĂˇs leĂˇllĂ­tĂˇsa, ha fut
        isTranslationPaused = true;
        isTranslationRunning = false;
        
        // AlapĂˇllapotba ĂˇllĂ­tĂˇs
        resetAllTranslations();
        
        // UI elemek frissĂ­tĂ©se
        stopTranslationBtn.classList.add('d-none');
        resetTranslationBtn.classList.add('d-none');
        startTranslationBtn.classList.remove('d-none');
        
        // A fordĂ­tĂˇs indĂ­tĂˇsa gomb szĂ¶vegĂ©nek beĂˇllĂ­tĂˇsa az aktuĂˇlis nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
        }
        
        // HaladĂˇsjelzĹ‘ visszaĂˇllĂ­tĂˇsa
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', 0);
        
        // MentĂ©s gombok letiltĂˇsa
        saveTranslationBtn.disabled = true;
        saveWorkFileBtn.classList.add('d-none');
        
        // TĂˇblĂˇzat ĂşjratĂ¶ltĂ©se csak az eredeti feliratokkal
        populateTable();
        
        // FordĂ­tĂˇsi Ăˇllapot alaphelyzetbe ĂˇllĂ­tĂˇsa
        isTranslationPaused = false;
        currentTranslationIndex = 0;
        
        // Sor szĂˇmok frissĂ­tĂ©se
        lineCountSpan.textContent = originalSubtitles.length;
    }
    
    // Minden fordĂ­tĂˇs Ă©s beĂˇllĂ­tĂˇs alaphelyzetbe ĂˇllĂ­tĂˇsa
    function resetAllTranslations() {
        // Csak a fordĂ­tĂˇsokat tĂ¶rĂ¶ljĂĽk, az eredeti feliratokat megtartjuk
        translatedSubtitles = [];
        
        // Ha vannak eredeti feliratok, akkor lĂ©trehozzuk az ĂĽres fordĂ­tĂˇsokat
        if (originalSubtitles.length > 0) {
            for (let i = 0; i < originalSubtitles.length; i++) {
                translatedSubtitles.push('');
            }
        }
        
        // FordĂ­tĂˇsi Ăˇllapot alaphelyzetbe ĂˇllĂ­tĂˇsa
        currentTranslationIndex = 0;
        isTranslationRunning = false;
        isTranslationPaused = false;
        rowsBeingRetranslated.clear();
        
        // FordĂ­tĂˇsi memĂłria tĂ¶rlĂ©se
        translationMemory = {};
        
        // HĹ‘mĂ©rsĂ©klet visszaĂˇllĂ­tĂˇsa alapĂ©rtĂ©kre
        temperature = 1.0;
        temperatureSlider.value = 1.0;
        temperatureValue.textContent = "1.0";
        temperatureValue.className = 'badge bg-primary';
    }

    // FĂˇjl kivĂˇlasztĂˇsa esemĂ©nykezelĹ‘
    function handleFileSelect(event) {
        // EllenĹ‘rizzĂĽk, hogy fut-e a fordĂ­tĂˇs
        if (isTranslationRunning) {
            // TĂ¶rĂ¶ljĂĽk a kivĂˇlasztĂˇst
            event.target.value = '';
            
            // FigyelmeztetĂ©s megjelenĂ­tĂ©se
            alert('KĂ©rjĂĽk, elĹ‘szĂ¶r ĂˇllĂ­tsa le a fordĂ­tĂˇst, mielĹ‘tt Ăşj fĂˇjlt tĂ¶ltene be!');
            return;
        }
        
        const file = event.target.files[0];
        if (!file) return;
        
        fileName = file.name;
        originalFilePath = file.path; // ElmentjĂĽk az elĂ©rĂ©si utat
        
        // EllenĹ‘rizzĂĽk a fĂˇjl kiterjesztĂ©sĂ©t
        if (fileName.toLowerCase().endsWith('.srt')) {
            // SRT fĂˇjl feldolgozĂˇsa
            processSrtFile(file);
        } else if (fileName.toLowerCase().endsWith('.wrk')) {
            // MunkafĂˇjl feldolgozĂˇsa
            processWorkFile(file);
        } else if (fileName.toLowerCase().endsWith('.mmm')) {
            // MMM fĂˇjl feldolgozĂˇsa
            processMmmFile(file);
        } else {
            alert('Csak .srt, .wrk vagy .mmm kiterjesztĂ©sĹ± fĂˇjlokat lehet betĂ¶lteni!');
            event.target.value = '';
            return;
        }
    }

    // SRT fĂˇjl feldolgozĂˇsa
    function processSrtFile(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // FĂˇjl tartalmĂˇnak beolvasĂˇsa
            const content = e.target.result;
            originalSrtContent = content;
            
            // FĂˇjl informĂˇciĂłk megjelenĂ­tĂ©se
            fileInfoDiv.classList.remove('d-none');
            fileNameSpan.textContent = fileName;
            
            // Feliratok feldolgozĂˇsa
            parseSrtFile(content);
            
            // TĂˇblĂˇzat feltĂ¶ltĂ©se
            populateTable();
            
            // FordĂ­tĂˇs gomb engedĂ©lyezĂ©se
            startTranslationBtn.disabled = false;
            saveTranslationBtn.disabled = true;
            saveWorkFileBtn.classList.add('d-none');
            
            // FordĂ­tĂˇsi Ăˇllapot alaphelyzetbe ĂˇllĂ­tĂˇsa
            isTranslationPaused = false;
            currentTranslationIndex = 0;
            
            // A fordĂ­tĂˇs indĂ­tĂˇsa gomb szĂ¶vegĂ©nek beĂˇllĂ­tĂˇsa az aktuĂˇlis nyelven
            if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
                startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
            } else {
                startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
            }
            
            stopTranslationBtn.classList.add('d-none');
            
            // Sor szĂˇmok frissĂ­tĂ©se
            lineCountSpan.textContent = originalSubtitles.length;
            
            // ForrĂˇs blokkmentĂ©se gomb megjelenĂ­tĂ©se
            if (saveSourceBlockBtn) {
                saveSourceBlockBtn.classList.remove('d-none');
            } else {
                createSaveSourceBlockButton();
            }
        };
        
        reader.readAsText(file);
    }
    
    // MunkafĂˇjl feldolgozĂˇsa
    function processWorkFile(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                // MunkafĂˇjl tartalmĂˇnak beolvasĂˇsa Ă©s feldolgozĂˇsa
                const workData = JSON.parse(e.target.result);
                
                // Adatok betĂ¶ltĂ©se a munkafĂˇjlbĂłl
                originalSubtitles = workData.subtitles || [];
                translatedSubtitles = workData.translatedSubtitles || [];
                currentTranslationIndex = workData.currentIndex || 0;
                fileName = workData.originalFileName || file.name.replace('.wrk', '.srt');
                
                // Nyelvek beĂˇllĂ­tĂˇsa
                if (workData.sourceLanguage) {
                    sourceLanguageSelect.value = workData.sourceLanguage;
                }
                if (workData.targetLanguage) {
                    targetLanguageSelect.value = workData.targetLanguage;
                }
                
                // FĂˇjl informĂˇciĂłk megjelenĂ­tĂ©se
                fileInfoDiv.classList.remove('d-none');
                fileNameSpan.textContent = fileName;
                lineCountSpan.textContent = originalSubtitles.length;
                
                // TĂˇblĂˇzat feltĂ¶ltĂ©se
                populateTable();
                
                // ĂšjrafordĂ­tĂˇs gombok megjelenĂ­tĂ©se a mĂˇr lefordĂ­tott sorokhoz
                translatedSubtitles.forEach((subtitle, index) => {
                    if (subtitle) {
                        const retranslateBtn = document.getElementById(`retranslate-${index}`);
                        if (retranslateBtn) {
                            retranslateBtn.classList.remove('d-none');
                        }
                    }
                });
                
                // FolyamatjelzĹ‘ frissĂ­tĂ©se
                updateProgressBar(currentTranslationIndex, originalSubtitles.length);
                
                // UI frissĂ­tĂ©se
                startTranslationBtn.disabled = false;
                startTranslationBtn.innerHTML = '<i class="bi bi-play-circle me-2"></i>FordĂ­tĂˇs folytatĂˇsa';
                
                if (translatedSubtitles.length > 0) {
                    saveTranslationBtn.disabled = false;
                    saveWorkFileBtn.classList.remove('d-none');
                }
                
                alert('MunkafĂˇjl sikeresen betĂ¶ltve! A fordĂ­tĂˇs folytathatĂł.');
            } catch (error) {
                console.error('Hiba a munkafĂˇjl betĂ¶ltĂ©se sorĂˇn:', error);
                alert('Hiba tĂ¶rtĂ©nt a munkafĂˇjl betĂ¶ltĂ©se sorĂˇn. EllenĹ‘rizze a fĂˇjl formĂˇtumĂˇt!');
                event.target.value = '';
            }
        };
        
        reader.readAsText(file);
    }

    // MMM fĂˇjl feldolgozĂˇsa
    function processMmmFile(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // FĂˇjl tartalmĂˇnak beolvasĂˇsa
            const content = e.target.result;
            
            // FĂˇjl informĂˇciĂłk megjelenĂ­tĂ©se
            fileInfoDiv.classList.remove('d-none');
            fileNameSpan.textContent = fileName;
            
            // EllenĹ‘rizzĂĽk, hogy van-e mĂˇr betĂ¶ltĂ¶tt felirat
            if (originalSubtitles.length === 0) {
                alert('ElĹ‘szĂ¶r tĂ¶ltsĂ¶n be egy .srt fĂˇjlt, mielĹ‘tt .mmm fĂˇjlt tĂ¶ltene be!');
                return;
            }
            
            // MMM fĂˇjl feldolgozĂˇsa - csak a fordĂ­tott szĂ¶vegek frissĂ­tĂ©se
            parseMmmFile(content);
            
            // TĂˇblĂˇzat frissĂ­tĂ©se
            populateTable();
            
            // FordĂ­tĂˇs gomb engedĂ©lyezĂ©se
            startTranslationBtn.disabled = false;
            saveTranslationBtn.disabled = false;
            saveWorkFileBtn.classList.remove('d-none');
        };
        reader.readAsText(file);
    }
    
    // SRT fĂˇjl feldolgozĂˇsa
    function parseSrtFile(content) {
        originalSubtitles = [];
        translatedSubtitles = [];
        
        // Felirat blokkok szĂ©tvĂˇlasztĂˇsa
        const blocks = content.trim().split(/\r?\n\r?\n/);
        
        for (const block of blocks) {
            const lines = block.split(/\r?\n/);
            
            // EllenĹ‘rizzĂĽk, hogy van-e elĂ©g sor a blokkban
            if (lines.length < 3) continue;
            
            // Az elsĹ‘ sor a sorszĂˇm, a mĂˇsodik az idĹ‘kĂłd, a tĂ¶bbi a szĂ¶veg
            const number = parseInt(lines[0].trim());
            const timecode = lines[1].trim();
            
            // A szĂ¶veges rĂ©szek Ă¶sszegyĹ±jtĂ©se (a 3. sortĂłl kezdve)
            const textLines = lines.slice(2).join(' ').trim();
            
            if (textLines) {
                originalSubtitles.push({
                    number: number,
                    timecode: timecode,
                    text: textLines
                });
                
                // Kezdetben ĂĽres fordĂ­tĂˇs
                translatedSubtitles.push('');
            }
        }
    }

    // MMM fĂˇjl tartalmĂˇnak feldolgozĂˇsa
    function parseMmmFile(content) {
        // Sorok szĂ©tvĂˇlasztĂˇsa
        const lines = content.split('\n');
        
        let currentText = '';
        let currentLineNumber = -1;
        
        // Sorok feldolgozĂˇsa
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Ăśres sorok kihagyĂˇsa
            if (line === '') continue;
            
            // EllenĹ‘rizzĂĽk, hogy a sor egy sorszĂˇmmal kezdĹ‘dik-e
            // MĂłdosĂ­tott regex, ami kezeli a sorszĂˇm utĂˇni pontot is (opcionĂˇlis)
            const match = line.match(/^(\d+)(?:\.|\s+)(.*)/);
            
            if (match) {
                // SorszĂˇm Ă©s szĂ¶veg kinyerĂ©se
                const subtitleNumber = parseInt(match[1]);
                const text = match[2].trim(); // TrimeljĂĽk a szĂ¶veget, hogy eltĂˇvolĂ­tsuk a felesleges szĂłkĂ¶zĂ¶ket
                
                // Ha Ăşj sorszĂˇm, akkor az elĹ‘zĹ‘ szĂ¶veget elmentjĂĽk
                if (currentLineNumber !== -1 && currentLineNumber !== subtitleNumber) {
                    // Az elĹ‘zĹ‘ szĂ¶veg mentĂ©se a megfelelĹ‘ sorszĂˇmĂş felirathoz
                    if (currentLineNumber > 0 && currentLineNumber <= originalSubtitles.length) {
                        translatedSubtitles[currentLineNumber - 1] = currentText;
                    }
                    currentText = '';
                }
                
                // AktuĂˇlis sorszĂˇm Ă©s szĂ¶veg beĂˇllĂ­tĂˇsa
                currentLineNumber = subtitleNumber;
                
                // Ha elsĹ‘ sor az adott sorszĂˇmnĂˇl, akkor beĂˇllĂ­tjuk a szĂ¶veget
                if (currentText === '') {
                    currentText = text;
                } else {
                    // Ha mĂˇr van szĂ¶veg, akkor hozzĂˇfĹ±zzĂĽk
                    currentText += ' ' + text;
                }
            }
        }
        
        // Az utolsĂł szĂ¶veg mentĂ©se, ha van
        if (currentLineNumber !== -1 && currentText !== '') {
            if (currentLineNumber > 0 && currentLineNumber <= originalSubtitles.length) {
                translatedSubtitles[currentLineNumber - 1] = currentText;
            }
        }
        
        // EllenĹ‘rizzĂĽk, hogy volt-e Ă©rvĂ©nyes szĂ¶veg
        let foundValidText = false;
        for (let i = 0; i < translatedSubtitles.length; i++) {
            if (translatedSubtitles[i] && translatedSubtitles[i].trim && translatedSubtitles[i].trim() !== '') {
                foundValidText = true;
                break;
            }
        }
        
        if (!foundValidText) {
            alert('A fĂˇjl nem tartalmaz Ă©rvĂ©nyes szĂ¶vegeket vagy a sorszĂˇmok nem egyeznek a betĂ¶ltĂ¶tt feliratokkal!');
        }
    }

    // TĂˇblĂˇzat feltĂ¶ltĂ©se
    function populateTable() {
        subtitleTable.innerHTML = '';
        
        originalSubtitles.forEach((subtitle, index) => {
            const row = document.createElement('tr');
            row.id = `row-${index}`;
            
            // SorszĂˇm cella
            const numberCell = document.createElement('td');
            numberCell.textContent = index + 1;
            numberCell.classList.add('text-center');
            row.appendChild(numberCell);
            
            // Eredeti szĂ¶veg cella
            const originalCell = document.createElement('td');
            originalCell.textContent = subtitle.text;
            row.appendChild(originalCell);
            
            // FordĂ­tott szĂ¶veg cella - szerkeszthetĹ‘
            const translatedCell = document.createElement('td');
            translatedCell.id = `translated-${index}`;
            
            // SzerkeszthetĹ‘ tartalom lĂ©trehozĂˇsa
            // Textarea-t hasznĂˇlunk div helyett a jobb kompatibilitĂˇs Ă©rdekĂ©ben
            const editableTextarea = document.createElement('textarea');
            editableTextarea.className = 'form-control editable-content';
            editableTextarea.value = translatedSubtitles[index] || '';
            editableTextarea.dataset.originalIndex = index;
            editableTextarea.rows = 2;
            
            // EsemĂ©nykezelĹ‘ a szerkesztĂ©s befejezĂ©sĂ©hez
            editableTextarea.addEventListener('change', function() {
                const editedIndex = parseInt(this.dataset.originalIndex);
                const newText = this.value.trim();
                
                // Csak akkor mentjĂĽk, ha vĂˇltozott a szĂ¶veg
                if (translatedSubtitles[editedIndex] !== newText) {
                    translatedSubtitles[editedIndex] = newText;
                    
                    // FrissĂ­tjĂĽk a fordĂ­tĂˇsi memĂłriĂˇt is
                    if (!translationMemory.translations) {
                        translationMemory.translations = {};
                    }
                    translationMemory.translations[originalSubtitles[editedIndex].text] = newText;
                    
                    // JelezzĂĽk, hogy a szĂ¶veg mĂłdosĂ­tva lett
                    const row = document.getElementById(`row-${editedIndex}`);
                    if (row) {
                        row.classList.add('edited-row');
                        
                        // 1 mĂˇsodperc utĂˇn eltĂˇvolĂ­tjuk a kiemelĂ©st
                        setTimeout(() => {
                            row.classList.remove('edited-row');
                        }, 1000);
                    }
                    
                    // ĂšjrafordĂ­tĂˇs gomb megjelenĂ­tĂ©se, ha van szĂ¶veg
                    const retranslateBtn = document.getElementById(`retranslate-${editedIndex}`);
                    if (retranslateBtn) {
                        if (newText) {
                            retranslateBtn.classList.remove('d-none');
                        } else {
                            retranslateBtn.classList.add('d-none');
                        }
                    }
                    
                    // MentĂ©s gomb engedĂ©lyezĂ©se
                    saveTranslationBtn.disabled = false;
                    
                    // MunkafĂˇjl mentĂ©s gomb megjelenĂ­tĂ©se
                    saveWorkFileBtn.classList.remove('d-none');
                }
            });
            
            // Automatikus mĂ©retezĂ©s
            editableTextarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
            
            translatedCell.appendChild(editableTextarea);
            row.appendChild(translatedCell);
            
            // MĹ±veletek cella
            const actionsCell = document.createElement('td');
            actionsCell.classList.add('text-center');
            
            // ĂšjrafordĂ­tĂˇs gomb - kezdetben rejtve, de megjelenik, ha van fordĂ­tott szĂ¶veg
            const retranslateBtn = document.createElement('button');
            retranslateBtn.type = 'button';
            retranslateBtn.className = 'btn btn-sm btn-info retranslate-btn';
            retranslateBtn.dataset.bsToggle = 'tooltip';
            retranslateBtn.dataset.bsPlacement = 'left';
            retranslateBtn.dataset.bsTitle = uiTranslations[currentLangCode]?.retranslate || 'ĂšjrafordĂ­tĂˇs';
            
            // A gomb tartalma: ikon + szĂ¶veg (a szĂ¶veg a nyelvvĂˇltĂˇskor frissĂĽl)
            const currentLang = currentLangCode;
            const retranslateText = uiTranslations[currentLang]?.retranslate || 'ĂšjrafordĂ­tĂˇs';
            retranslateBtn.innerHTML = `<i class="bi bi-arrow-repeat me-1"></i>${retranslateText}`;
            
            retranslateBtn.id = `retranslate-${index}`;
            retranslateBtn.addEventListener('click', () => retranslateSubtitle(index));
            
            // Ha nincs fordĂ­tott szĂ¶veg, elrejtjĂĽk a gombot
            if (!translatedSubtitles[index]) {
                retranslateBtn.classList.add('d-none');
            }
            
            actionsCell.appendChild(retranslateBtn);
            
            row.appendChild(actionsCell);
            
            subtitleTable.appendChild(row);
            
            // Textarea magassĂˇgĂˇnak beĂˇllĂ­tĂˇsa
            editableTextarea.style.height = 'auto';
            editableTextarea.style.height = (editableTextarea.scrollHeight) + 'px';
        });
        
        // Tooltipek inicializĂˇlĂˇsa
        initTooltips();
    }
    
    // Tooltipek inicializĂˇlĂˇsa
    function initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Egy felirat ĂşjrafordĂ­tĂˇsa
    async function retranslateSubtitle(index) {
        // EllenĹ‘rizzĂĽk, hogy fut-e mĂˇr ĂşjrafordĂ­tĂˇs erre a sorra
        if (rowsBeingRetranslated.has(index)) {
            return;
        }
        
        // JelezzĂĽk, hogy ez a sor ĂşjrafordĂ­tĂˇs alatt Ăˇll
        rowsBeingRetranslated.add(index);
        
        // FordĂ­tĂˇs gomb ĂˇllapotĂˇnak mĂłdosĂ­tĂˇsa
        const retranslateBtn = document.getElementById(`retranslate-${index}`);
        if (retranslateBtn) {
            retranslateBtn.disabled = true;
            retranslateBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
        }
        
        // Nyelvi beĂˇllĂ­tĂˇsok
        const sourceLanguage = sourceLanguageSelect.value;
        const targetLanguage = targetLanguageSelect.value;
        
        // HĹ‘mĂ©rsĂ©klet beĂˇllĂ­tĂˇs
        const temperature = parseFloat(temperatureSlider.value);
        
        // FordĂ­tĂˇsi mĂłd ellenĹ‘rzĂ©se
        const selectedMode = translationModeSelect.value;
        const apiKey = apiKeyInput.value;

        try {
            let translatedText = '';
            
            // A kivĂˇlasztott fordĂ­tĂˇsi mĂłd alapjĂˇn hĂ­vjuk meg a megfelelĹ‘ fordĂ­tĂˇsi fĂĽggvĂ©nyt
            if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
                // EllenĹ‘rizzĂĽk, hogy van-e API kulcs
                if (!apiKey) {
                    alert(uiTranslations[currentLangCode]?.errorNoApiKey || 'KĂ©rjĂĽk, adja meg az API kulcsot a ChatGPT hasznĂˇlatĂˇhoz!');
                    return;
                }
                
                // ChatGPT modell kivĂˇlasztĂˇsa
                const model = selectedMode === 'chatgpt_4o_mini' ? 'gpt-4o-mini' : 'gpt-4o';
                
                // ChatGPT fordĂ­tĂˇs
                translatedText = await translateWithChatGpt(
                    originalSubtitles[index].text,
                    sourceLanguage,
                    targetLanguage,
                    apiKey,
                    model,
                    temperature
                );
            } else {
                // LM Studio fordĂ­tĂˇs
                translatedText = await translateTextWithContext(
                    originalSubtitles,
                    index,
                    sourceLanguage,
                    targetLanguage,
                    0,
                    temperature
                );
            }
            
            // FordĂ­tott szĂ¶veg mentĂ©se
            translatedSubtitles[index] = translatedText;
            
            // TĂˇblĂˇzat frissĂ­tĂ©se
            updateTranslatedText(index, translatedText);
            
            // FordĂ­tĂˇsi memĂłria frissĂ­tĂ©se
            if (!translationMemory.translations) {
                translationMemory.translations = {};
            }
            translationMemory.translations[originalSubtitles[index].text] = translatedText;
            
            // MentĂ©s gomb engedĂ©lyezĂ©se
            saveTranslationBtn.disabled = false;
            
            // MunkafĂˇjl mentĂ©s gomb megjelenĂ­tĂ©se
            saveWorkFileBtn.classList.remove('d-none');
            
        } catch (error) {
            console.error('ĂšjrafordĂ­tĂˇsi hiba:', error);
            alert(`Hiba tĂ¶rtĂ©nt az ĂşjrafordĂ­tĂˇs sorĂˇn: ${error.message}`);
        } finally {
            // FordĂ­tĂˇs gomb visszaĂˇllĂ­tĂˇsa
            if (retranslateBtn) {
                retranslateBtn.disabled = false;
                retranslateBtn.innerHTML = `<i class="bi bi-arrow-repeat me-1"></i>${uiTranslations[currentLangCode]?.retranslate || 'ĂšjrafordĂ­tĂˇs'}`;
                retranslateBtn.classList.remove('d-none');
            }
            
            // TĂ¶rĂ¶ljĂĽk a sort az ĂşjrafordĂ­tĂˇs alatt ĂˇllĂłk kĂ¶zĂĽl
            rowsBeingRetranslated.delete(index);
        }
    }

    // FordĂ­tĂˇs indĂ­tĂˇsa
    async function startTranslation() {
        // FordĂ­tĂˇsi mĂłd ellenĹ‘rzĂ©se
        const selectedMode = translationModeSelect.value;
        const apiKey = apiKeyInput.value;

        if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
            if (!apiKey) {
                alert('KĂ©rjĂĽk, adja meg az API kulcsot a ChatGPT hasznĂˇlatĂˇhoz!');
                return;
            }
        }

        // UI elemek frissĂ­tĂ©se
        startTranslationBtn.classList.add('d-none');
        stopTranslationBtn.classList.remove('d-none');
        resetTranslationBtn.classList.add('d-none');
        progressContainer.classList.remove('d-none');
        
        // FordĂ­tĂˇs ĂˇllapotĂˇnak beĂˇllĂ­tĂˇsa
        isTranslationRunning = true;
        isTranslationPaused = false;
        
        // Nyelvi beĂˇllĂ­tĂˇsok
        const sourceLanguage = sourceLanguageSelect.value;
        const targetLanguage = targetLanguageSelect.value;
        
        // HĹ‘mĂ©rsĂ©klet beĂˇllĂ­tĂˇs
        const temperature = parseFloat(temperatureSlider.value);
        
        // Ha mĂ©g nincs lefordĂ­tott felirat, akkor inicializĂˇljuk
        if (translatedSubtitles.length === 0) {
            // InicializĂˇljuk a lefordĂ­tott feliratokat
            translatedSubtitles = originalSubtitles.map(subtitle => '');
        }
        
        // SzekvenciĂˇlis fordĂ­tĂˇs a ChatGPT API-val
        if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
            await translateSequentially(currentTranslationIndex, sourceLanguage, targetLanguage, apiKey, selectedMode, temperature);
        } else {
            // LM Studio fordĂ­tĂˇs - eredeti logika
            await translateWithLmStudio(currentTranslationIndex, sourceLanguage, targetLanguage, temperature);
        }
        
        // Ha vĂ©gigĂ©rtĂĽnk a feliratokon Ă©s nem szĂĽneteltettĂĽk a fordĂ­tĂˇst
        if (currentTranslationIndex >= originalSubtitles.length - 1 && !isTranslationPaused) {
            // FordĂ­tĂˇs befejezĂ©se
            finishTranslation();
        }
    }

    // SzekvenciĂˇlis fordĂ­tĂˇs a ChatGPT API-val
    async function translateSequentially(startIndex, sourceLanguage, targetLanguage, apiKey, mode, temperature) {
        // ChatGPT API kĂ©rĂ©sek kĂ¶zĂ¶tti kĂ©sleltetĂ©s (ms) - 0.2 mĂˇsodperc
        const API_DELAY = 200;
        
        // A megfelelĹ‘ modell kivĂˇlasztĂˇsa
        const model = mode === 'chatgpt_4o_mini' ? 'gpt-4o-mini' : 'gpt-4o';
        
        // VĂ©gigmegyĂĽnk a feliratokon egyesĂ©vel, szekvenciĂˇlisan
        for (let i = startIndex; i < originalSubtitles.length; i++) {
            // Ha a fordĂ­tĂˇs szĂĽneteltetĂ©se be van kapcsolva, akkor kilĂ©pĂĽnk a ciklusbĂłl
            if (isTranslationPaused) {
                break;
            }
            
            currentTranslationIndex = i;
            
            // EllenĹ‘rizzĂĽk, hogy mĂˇr le van-e fordĂ­tva ez a felirat
            if (translatedSubtitles[i]) {
                continue; // Ătugorjuk a mĂˇr lefordĂ­tott feliratokat
            }
            
            // FolyamatjelzĹ‘ frissĂ­tĂ©se
            updateProgressBar(i, originalSubtitles.length);
            
            try {
                // Kontextus Ă¶sszeĂˇllĂ­tĂˇsa (elĹ‘zĹ‘ Ă©s kĂ¶vetkezĹ‘ mondatok)
                const currentSubtitle = originalSubtitles[i].text;
                
                // ElĹ‘zĹ‘ 4 mondat Ă¶sszegyĹ±jtĂ©se (ha van)
                let previousContext = "";
                for (let j = Math.max(0, i - 4); j < i; j++) {
                    if (originalSubtitles[j] && originalSubtitles[j].text) {
                        previousContext += originalSubtitles[j].text + "\n";
                    }
                }
                
                // KĂ¶vetkezĹ‘ 4 mondat Ă¶sszegyĹ±jtĂ©se (ha van)
                let nextContext = "";
                for (let j = i + 1; j < Math.min(originalSubtitles.length, i + 5); j++) {
                    if (originalSubtitles[j] && originalSubtitles[j].text) {
                        nextContext += originalSubtitles[j].text + "\n";
                    }
                }
                
                // Egyedi azonosĂ­tĂł a fordĂ­tandĂł sorhoz
                const uniqueMarker = "###FORDĂŤTANDĂ“_SOR###";
                const endMarker = "###FORDĂŤTĂS_VĂ‰GE###";
                
                // Teljes kontextus Ă¶sszeĂˇllĂ­tĂˇsa
                let contextText = "";
                if (previousContext) {
                    contextText += "ElĹ‘zĹ‘ sorok kontextuskĂ©nt (NEM kell fordĂ­tani):\n" + previousContext + "\n";
                }
                contextText += uniqueMarker + "\n" + currentSubtitle + "\n" + endMarker + "\n";
                if (nextContext) {
                    contextText += "KĂ¶vetkezĹ‘ sorok kontextuskĂ©nt (NEM kell fordĂ­tani):\n" + nextContext;
                }
                
                // FordĂ­tĂˇsi utasĂ­tĂˇs
                const systemPrompt = `FordĂ­tsd le CSAK a "${uniqueMarker}" Ă©s "${endMarker}" kĂ¶zĂ¶tti szĂ¶veget ${getLanguageNameLocal(sourceLanguage)} nyelvrĹ‘l ${getLanguageNameLocal(targetLanguage)} nyelvre. 
A tĂ¶bbi szĂ¶veg csak kontextus, azt NE fordĂ­tsd le. 
A fordĂ­tĂˇsodban KIZĂRĂ“LAG a lefordĂ­tott szĂ¶veget add vissza, semmilyen jelĂ¶lĂ©st, magyarĂˇzatot vagy egyĂ©b szĂ¶veget NE adj hozzĂˇ.
NE hasznĂˇld a "${uniqueMarker}" vagy "${endMarker}" jelĂ¶lĂ©seket a vĂˇlaszodban.`;
                
                // SegĂ©dfĂĽggvĂ©ny a nyelv kĂłdjĂˇnak nĂ©vvĂ© alakĂ­tĂˇsĂˇhoz
                function getLanguageNameLocal(languageCode) {
                    const languages = {
                        'en': 'angol',
                        'hu': 'magyar',
                        'de': 'nĂ©met',
                        'fr': 'francia',
                        'es': 'spanyol',
                        'it': 'olasz',
                        'pt': 'portugĂˇl',
                        'ru': 'orosz',
                        'ja': 'japĂˇn',
                        'zh': 'kĂ­nai',
                        'ko': 'koreai',
                        'ar': 'arab',
                        'hi': 'hindi',
                        'tr': 'tĂ¶rĂ¶k',
                        'pl': 'lengyel',
                        'nl': 'holland',
                        'sv': 'svĂ©d',
                        'da': 'dĂˇn',
                        'fi': 'finn',
                        'no': 'norvĂ©g',
                        'cs': 'cseh',
                        'sk': 'szlovĂˇk',
                        'ro': 'romĂˇn',
                        'bg': 'bolgĂˇr',
                        'hr': 'horvĂˇt',
                        'sr': 'szerb',
                        'uk': 'ukrĂˇn',
                        'el': 'gĂ¶rĂ¶g',
                        'he': 'hĂ©ber',
                        'vi': 'vietnĂˇmi',
                        'th': 'thai',
                        'id': 'indonĂ©z',
                        'ms': 'malĂˇj',
                        'fa': 'perzsa',
                        'ur': 'urdu'
                    };
                    
                    return languages[languageCode] || languageCode;
                }
                
                // FordĂ­tĂˇs vĂ©grehajtĂˇsa
                const translatedText = await translateWithChatGptCustomPrompt(contextText, systemPrompt, apiKey, model, temperature);
                
                // FordĂ­tott szĂ¶veg mentĂ©se
                translatedSubtitles[i] = translatedText.trim();
                
                // TĂˇblĂˇzat frissĂ­tĂ©se
                updateTranslatedText(i, translatedText.trim());
                
                // FordĂ­tĂˇsi memĂłria frissĂ­tĂ©se
                if (!translationMemory.translations) {
                    translationMemory.translations = {};
                }
                translationMemory.translations[originalSubtitles[i].text] = translatedText.trim();
                
                // MentĂ©s gomb engedĂ©lyezĂ©se
                saveTranslationBtn.disabled = false;
                
                // MunkafĂˇjl mentĂ©s gomb megjelenĂ­tĂ©se
                saveWorkFileBtn.classList.remove('d-none');
                
                // ĂšjrafordĂ­tĂˇs gomb megjelenĂ­tĂ©se
                const retranslateBtn = document.getElementById(`retranslate-${i}`);
                if (retranslateBtn) {
                    retranslateBtn.classList.remove('d-none');
                }
                
                // GĂ¶rgetĂ©s az aktuĂˇlis sorhoz
                scrollToRow(i);
                
                // KĂ©sleltetĂ©s a kĂ¶vetkezĹ‘ API kĂ©rĂ©s elĹ‘tt, hogy elkerĂĽljĂĽk a sebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©st
                if (i < originalSubtitles.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, API_DELAY));
                }
                
            } catch (error) {
                console.error('FordĂ­tĂˇsi hiba:', error);
                
                // Ha sebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s (429) hiba, akkor vĂˇrunk egy ideig Ă©s Ăşjra prĂłbĂˇljuk
                if (error.message.includes('429')) {
                    console.log('SebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s (429), vĂˇrakozĂˇs 10 mĂˇsodpercet...');
                    alert('Az API sebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s miatt vĂˇrakozunk 10 mĂˇsodpercet, majd folytatjuk a fordĂ­tĂˇst.');
                    
                    // VĂˇrakozĂˇs 10 mĂˇsodpercet
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    
                    // VisszalĂ©pĂĽnk egy indexet, hogy Ăşjra megprĂłbĂˇljuk ezt a feliratot
                    i--;
                    continue;
                }
                
                alert(`Error during translation: ${error.message}`);
                pauseTranslation();
                break;
            }
        }
    }

    // LM Studio fordĂ­tĂˇs
    async function translateWithLmStudio(startIndex, sourceLanguage, targetLanguage, temperature) {
        // VĂ©gigmegyĂĽnk a feliratokon
        for (let i = startIndex; i < originalSubtitles.length; i++) {
            // Ha a fordĂ­tĂˇs szĂĽneteltetĂ©se be van kapcsolva, akkor kilĂ©pĂĽnk a ciklusbĂłl
            if (isTranslationPaused) {
                break;
            }
            
            currentTranslationIndex = i;
            
            // EllenĹ‘rizzĂĽk, hogy mĂˇr le van-e fordĂ­tva ez a felirat
            if (translatedSubtitles[i]) {
                continue; // Ătugorjuk a mĂˇr lefordĂ­tott feliratokat
            }
            
            // FolyamatjelzĹ‘ frissĂ­tĂ©se
            updateProgressBar(i, originalSubtitles.length);
            
            try {
                // FordĂ­tĂˇs vĂ©grehajtĂˇsa
                const translatedText = await translateTextWithContext(
                    originalSubtitles,
                    i,
                    sourceLanguage,
                    targetLanguage,
                    0,
                    temperature
                );
                
                // FordĂ­tott szĂ¶veg mentĂ©se
                translatedSubtitles[i] = translatedText;
                
                // TĂˇblĂˇzat frissĂ­tĂ©se
                updateTranslatedText(i, translatedText);
                
                // ĂšjrafordĂ­tĂˇs gomb megjelenĂ­tĂ©se
                const retranslateBtn = document.getElementById(`retranslate-${i}`);
                if (retranslateBtn) {
                    retranslateBtn.classList.remove('d-none');
                }
                
                // GĂ¶rgetĂ©s az aktuĂˇlis sorhoz
                scrollToRow(i);
                
                // MentĂ©s gomb engedĂ©lyezĂ©se
                saveTranslationBtn.disabled = false;
                
                // MunkafĂˇjl mentĂ©s gomb megjelenĂ­tĂ©se
                saveWorkFileBtn.classList.remove('d-none');
                
            } catch (error) {
                console.error('FordĂ­tĂˇsi hiba:', error);
                
                // Ha sebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s (429) hiba, akkor vĂˇrunk egy ideig Ă©s Ăşjra prĂłbĂˇljuk
                if (error.message.includes('429')) {
                    console.log('SebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s (429), vĂˇrakozĂˇs 10 mĂˇsodpercet...');
                    alert('Az API sebessĂ©gkorlĂˇt-tĂşllĂ©pĂ©s miatt vĂˇrakozunk 10 mĂˇsodpercet, majd folytatjuk a fordĂ­tĂˇst.');
                    
                    // VĂˇrakozĂˇs 10 mĂˇsodpercet
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    
                    // VisszalĂ©pĂĽnk egy indexet, hogy Ăşjra megprĂłbĂˇljuk ezt a feliratot
                    i--;
                    continue;
                }
                
                alert(`Hiba tĂ¶rtĂ©nt a fordĂ­tĂˇs sorĂˇn: ${error.message}`);
                pauseTranslation();
                break;
            }
        }
    }

    // SzĂ¶veg fordĂ­tĂˇsa kontextussal az LM Studio API-val
    async function translateTextWithContext(subtitles, currentIndex, sourceLanguage, targetLanguage, retryCount = 0, temperature) {
        try {
            // Kontextus Ă¶sszeĂˇllĂ­tĂˇsa (elĹ‘zĹ‘ Ă©s kĂ¶vetkezĹ‘ mondatok)
            const currentSubtitle = subtitles[currentIndex].text;
            
            // Kontextus vĂˇltozĂł inicializĂˇlĂˇsa
            let context = "";
            
            // ElĹ‘zĹ‘ mondatok hozzĂˇadĂˇsa a kontextushoz (max 4)
            for (let i = 1; i <= 4; i++) {
                if (currentIndex - i >= 0) {
                    context += `ElĹ‘zĹ‘ mondat ${i}: "${subtitles[currentIndex - i].text}"\n`;
                }
            }
            
            // KĂ¶vetkezĹ‘ mondatok hozzĂˇadĂˇsa a kontextushoz (max 4)
            for (let i = 1; i <= 4; i++) {
                if (currentIndex + i < subtitles.length) {
                    context += `KĂ¶vetkezĹ‘ mondat ${i}: "${subtitles[currentIndex + i].text}"\n`;
                }
            }
            
            // LM Studio API vĂ©gpont
            const apiUrl = 'http://localhost:1234/v1/completions';
            
            // FordĂ­tĂˇsi prompt Ă¶sszeĂˇllĂ­tĂˇsa kontextussal
            let prompt = `Te egy professzionĂˇlis fordĂ­tĂł vagy, aki ${getLanguageName(sourceLanguage)} nyelvrĹ‘l ${getLanguageName(targetLanguage)} nyelvre fordĂ­t egy filmfeliratot. A fordĂ­tĂˇsnak termĂ©szetesnek Ă©s folyĂ©konynak kell lennie, mikĂ¶zben megĹ‘rzi az eredeti jelentĂ©st Ă©s stĂ­lust. Ne hasznĂˇlj formĂˇzĂˇst, kĂłdjelĂ¶lĂ©st vagy idĂ©zĹ‘jeleket a fordĂ­tĂˇsban.\n\n`;
            
            if (context) {
                prompt += `Kontextus a jobb fordĂ­tĂˇshoz:\n${context}\n`;
            }
            
            prompt += `FordĂ­tandĂł mondat: "${currentSubtitle}"\n\nFordĂ­tĂˇs:`;
            
            // FordĂ­tĂˇsi kĂ©rĂ©s Ă¶sszeĂˇllĂ­tĂˇsa
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 500,
                    temperature: temperature, // A csĂşszkĂˇval beĂˇllĂ­tott Ă©rtĂ©k hasznĂˇlata
                    stream: false
                })
            });
            
            if (!response.ok) {
                throw new Error(`API hiba: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // EllenĹ‘rizzĂĽk, hogy van-e vĂˇlasz
            if (data.choices && data.choices.length > 0 && data.choices[0].text) {
                // TisztĂ­tjuk a fordĂ­tĂˇst
                let translatedText = data.choices[0].text.trim();
                
                // EllenĹ‘rizzĂĽk, hogy a fordĂ­tĂˇs tartalmaz-e hibĂˇs formĂˇzĂˇst vagy kĂłdjelĂ¶lĂ©st
                if (translatedText.includes('```') || 
                    translatedText.startsWith('`') || 
                    translatedText.includes('```')) {
                    
                    // EltĂˇvolĂ­tjuk a ``` jelĂ¶lĂ©seket Ă©s a kĂ¶ztĂĽk lĂ©vĹ‘ nyelvi azonosĂ­tĂłt (ha van)
                    translatedText = translatedText.replace(/```[a-z]*\n?/g, '');
                    translatedText = translatedText.replace(/```/g, '');
                    
                    // EltĂˇvolĂ­tjuk az egyszeres ` jeleket is
                    translatedText = translatedText.replace(/`/g, '');
                }
                
                // IdĂ©zĹ‘jelek eltĂˇvolĂ­tĂˇsa a fordĂ­tĂˇs elejĂ©rĹ‘l Ă©s vĂ©gĂ©rĹ‘l, ha vannak
                if ((translatedText.startsWith('"') && translatedText.endsWith('"')) || 
                    (translatedText.startsWith('"') && translatedText.endsWith('"'))) {
                    translatedText = translatedText.substring(1, translatedText.length - 1);
                }
                
                // EllenĹ‘rizzĂĽk, hogy a fordĂ­tĂˇs nem tartalmaz-e hibĂˇs vagy Ă©rtelmetlen szĂ¶veget
                // (pl. hibaĂĽzenet, vagy tĂşl rĂ¶vid a fordĂ­tĂˇs az eredetihez kĂ©pest)
                const originalLength = currentSubtitle.length;
                const translatedLength = translatedText.length;
                const isTranslationSuspicious = 
                    translatedText.includes("error") || 
                    translatedText.includes("hiba") || 
                    translatedText.includes("unexpected") ||
                    (translatedLength < originalLength * 0.3 && originalLength > 10) || // TĂşl rĂ¶vid fordĂ­tĂˇs
                    translatedText.includes("API") ||
                    translatedText.includes("endpoint");
                
                // Ha gyanĂşs a fordĂ­tĂˇs Ă©s mĂ©g nem prĂłbĂˇltuk Ăşjra tĂşl sokszor, prĂłbĂˇljuk Ăşjra
                if (isTranslationSuspicious && retryCount < 3) {
                    console.warn(`GyanĂşs fordĂ­tĂˇs, ĂşjraprĂłbĂˇlkozĂˇs (${retryCount + 1}/3): "${translatedText}"`);
                    
                    // VĂˇrjunk egy kicsit az ĂşjraprĂłbĂˇlkozĂˇs elĹ‘tt
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    // ĂšjraprĂłbĂˇlkozĂˇs
                    return translateTextWithContext(subtitles, currentIndex, sourceLanguage, targetLanguage, retryCount + 1, temperature);
                }
                
                return translatedText;
            } else {
                throw new Error('Nem Ă©rkezett fordĂ­tĂˇsi eredmĂ©ny');
            }
        } catch (error) {
            console.error('FordĂ­tĂˇsi hiba:', error);
            
            // ĂšjraprĂłbĂˇlkozĂˇs hiba esetĂ©n, de csak korlĂˇtozott szĂˇmĂş alkalommal
            if (retryCount < 3) {
                console.warn(`FordĂ­tĂˇsi hiba, ĂşjraprĂłbĂˇlkozĂˇs (${retryCount + 1}/3): ${error.message}`);
                
                // VĂˇrjunk egy kicsit az ĂşjraprĂłbĂˇlkozĂˇs elĹ‘tt
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // ĂšjraprĂłbĂˇlkozĂˇs
                return translateTextWithContext(subtitles, currentIndex, sourceLanguage, targetLanguage, retryCount + 1, temperature);
            }
            
            throw new Error(`FordĂ­tĂˇsi hiba (${retryCount} prĂłbĂˇlkozĂˇs utĂˇn): ${error.message}`);
        }
    }

    // SzĂ¶veg fordĂ­tĂˇsa az LM Studio API-val (rĂ©gi metĂłdus, megtartva kompatibilitĂˇs miatt)
    async function translateText(text, sourceLang, targetLang) {
        return translateTextWithContext(
            [{ text: text }], // Egyetlen felirat
            0, // Az elsĹ‘ (Ă©s egyetlen) elem indexe
            sourceLang,
            targetLang,
            0, // Nincs ĂşjraprĂłbĂˇlkozĂˇs
            temperature
        );
    }

    // FordĂ­tott szĂ¶veg frissĂ­tĂ©se a tĂˇblĂˇzatban
    function updateTranslatedText(index, text) {
        const editableTextarea = document.querySelector(`#translated-${index} textarea`);
        if (editableTextarea) {
            editableTextarea.value = text;
        }
    }
    
    // GĂ¶rgetĂ©s a megadott sorhoz
    function scrollToRow(index) {
        const row = document.getElementById(`row-${index}`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // FolyamatjelzĹ‘ frissĂ­tĂ©se
    function updateProgressBar(currentIndex, totalCount) {
        const progress = Math.round((currentIndex / totalCount) * 100);
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
    }
    
    // FordĂ­tĂˇs befejezĂ©se
    function finishTranslation() {
        // HaladĂˇsjelzĹ‘ 100%-ra ĂˇllĂ­tĂˇsa
        progressBar.style.width = '100%';
        progressBar.setAttribute('aria-valuenow', 100);
        
        // Gombok ĂˇllapotĂˇnak beĂˇllĂ­tĂˇsa
        // A fordĂ­tĂˇs indĂ­tĂˇsa gomb szĂ¶vegĂ©nek beĂˇllĂ­tĂˇsa az aktuĂˇlis nyelven
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${uiTranslations[currentLangCode].startTranslation}`;
        } else {
            startTranslationBtn.innerHTML = '<i class="bi bi-translate me-2"></i>Start Translation';
        }
        
        startTranslationBtn.disabled = false;
        startTranslationBtn.classList.remove('d-none');
        stopTranslationBtn.classList.add('d-none');
        saveTranslationBtn.disabled = false;
        saveWorkFileBtn.classList.remove('d-none');
        isTranslationRunning = false;
        
        // Ă‰rtesĂ­tĂ©s a fordĂ­tĂˇs befejezĂ©sĂ©rĹ‘l
        if (typeof uiTranslations !== 'undefined' && uiTranslations[currentLangCode]) {
            alert(uiTranslations[currentLangCode].translationCompleted || 'A fordĂ­tĂˇs sikeresen befejezĹ‘dĂ¶tt!');
        } else {
            alert('Translation completed successfully!');
        }
    }

    // FordĂ­tĂˇs mentĂ©se
    function saveTranslation() {
        // EllenĹ‘rizzĂĽk, hogy van-e fordĂ­tĂˇs
        if (translatedSubtitles.length === 0) {
            alert('Nincs mit menteni! KĂ©rjĂĽk, elĹ‘szĂ¶r fordĂ­tsa le a feliratokat.');
            return;
        }
        
        // SRT formĂˇtumĂş tartalom lĂ©trehozĂˇsa
        let srtContent = '';
        
        // FordĂ­tott feliratok Ă¶sszegyĹ±jtĂ©se
        originalSubtitles.forEach((subtitle, index) => {
            // Ha a felhasznĂˇlĂł Ă©ppen szerkeszt egy sort, akkor frissĂ­tjĂĽk a fordĂ­tĂˇst
            const editableTextarea = document.querySelector(`#translated-${index} textarea`);
            if (editableTextarea) {
                // FrissĂ­tjĂĽk a translatedSubtitles tĂ¶mbĂ¶t a legfrissebb szerkesztett szĂ¶veggel
                translatedSubtitles[index] = editableTextarea.value.trim();
            }
            
            srtContent += `${subtitle.number}\n`;
            srtContent += `${subtitle.timecode}\n`;
            srtContent += `${translatedSubtitles[index] || ''}\n\n`;
        });
        
        // FĂˇjl lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©se
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
        
        
        // Blob lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©s
        const blob = new Blob([srtContent], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, newFileName);
    }

    // MunkafĂˇjl mentĂ©se
    function saveWorkFile() {
        // EllenĹ‘rizzĂĽk, hogy van-e betĂ¶ltĂ¶tt felirat
        if (originalSubtitles.length === 0) {
            alert('Nincs betĂ¶ltĂ¶tt felirat a mentĂ©shez!');
            return;
        }
        
        // FrissĂ­tjĂĽk a fordĂ­tĂˇsokat a szerkesztett mezĹ‘kbĹ‘l
        translatedSubtitles.forEach((subtitle, index) => {
            const editableTextarea = document.querySelector(`#translated-${index} textarea`);
            if (editableTextarea) {
                translatedSubtitles[index] = editableTextarea.value.trim();
            }
        });
        
        // MunkafĂˇjl adatok Ă¶sszeĂˇllĂ­tĂˇsa
        const workData = {
            originalFileName: fileName,
            subtitles: originalSubtitles,
            translatedSubtitles: translatedSubtitles,
            currentIndex: currentTranslationIndex,
            sourceLanguage: sourceLanguageSelect.value,
            targetLanguage: targetLanguageSelect.value,
            temperature: temperatureSlider.value
        };
        
        // JSON formĂˇtumĂş tartalom lĂ©trehozĂˇsa
        const jsonContent = JSON.stringify(workData, null, 2);
        
        // FĂˇjl lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©se
        const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
        const downloadFileName = `${fileNameWithoutExt}.wrk`;
        
        const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8' });
        saveAs(blob, downloadFileName);
    }
    
    // SegĂ©dfĂĽggvĂ©ny a nyelv kĂłdjĂˇnak nĂ©vvĂ© alakĂ­tĂˇsĂˇhoz
    function getLanguageName(languageCode) {
        const languages = {
            'en': 'angol',
            'hu': 'magyar',
            'de': 'nĂ©met',
            'fr': 'francia',
            'es': 'spanyol',
            'it': 'olasz',
            'pt': 'portugĂˇl',
            'ru': 'orosz',
            'ja': 'japĂˇn',
            'zh': 'kĂ­nai',
            'ko': 'koreai',
            'ar': 'arab',
            'hi': 'hindi',
            'tr': 'tĂ¶rĂ¶k',
            'pl': 'lengyel',
            'nl': 'holland',
            'sv': 'svĂ©d',
            'da': 'dĂˇn',
            'fi': 'finn',
            'no': 'norvĂ©g',
            'cs': 'cseh',
            'sk': 'szlovĂˇk',
            'ro': 'romĂˇn',
            'bg': 'bolgĂˇr',
            'hr': 'horvĂˇt',
            'sr': 'szerb',
            'uk': 'ukrĂˇn',
            'el': 'gĂ¶rĂ¶g',
            'he': 'hĂ©ber',
            'vi': 'vietnĂˇmi',
            'th': 'thai',
            'id': 'indonĂ©z',
            'ms': 'malĂˇj',
            'fa': 'perzsa',
            'ur': 'urdu'
        };
        
        return languages[languageCode] || languageCode;
    }

    // NyelvvĂˇlasztĂł inicializĂˇlĂˇsa
    function initLanguageSelector() {
        console.log("NyelvvĂˇlasztĂł inicializĂˇlĂˇsa");
        
        // NyelvvĂˇlasztĂł esemĂ©nykezelĹ‘k
        document.querySelectorAll('#uiLanguageMenu a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeUiLanguage(lang);
            });
        });

        // Mentett nyelv betĂ¶ltĂ©se
        const savedLanguage = localStorage.getItem('uiLanguage');
        if (savedLanguage && uiTranslations[savedLanguage]) {
            console.log("Mentett nyelv betĂ¶ltĂ©se: " + savedLanguage);
            currentLangCode = savedLanguage; // GlobĂˇlis vĂˇltozĂł frissĂ­tĂ©se
            changeUiLanguage(savedLanguage);
        } else {
            // AlapĂ©rtelmezett angol nyelv
            console.log("AlapĂ©rtelmezett angol nyelv beĂˇllĂ­tĂˇsa");
            currentLangCode = 'en'; // GlobĂˇlis vĂˇltozĂł frissĂ­tĂ©se
            changeUiLanguage('en');
        }
    }

    // FelhasznĂˇlĂłi felĂĽlet nyelvĂ©nek megvĂˇltoztatĂˇsa
    function changeUiLanguage(lang) {
        // AktuĂˇlis nyelv mentĂ©se
        localStorage.setItem('uiLanguage', lang);
        // GlobĂˇlis vĂˇltozĂł frissĂ­tĂ©se
        currentLangCode = lang;

        // NyelvvĂˇlasztĂł gomb szĂ¶vegĂ©nek frissĂ­tĂ©se
        const languageNames = {
            'en': 'English',
            'hu': 'Magyar',
            'de': 'Deutsch',
            'es': 'EspaĂ±ol',
            'fr': 'FranĂ§ais',
            'it': 'Italiano',
            'pt': 'PortuguĂŞs',
            'nl': 'Nederlands',
            'pl': 'Polski',
            'ru': 'Đ ŃŃŃĐşĐ¸Đą',
            'ja': 'ć—Ąćś¬čŞž',
            'zh': 'ä¸­ć–‡',
            'ar': 'Ř§Ů„ŘąŘ±Ř¨ŮŠŘ©',
            'hi': 'ŕ¤ąŕ¤żŕ¤¨ŕĄŤŕ¤¦ŕĄ€',
            'ko': 'í•śęµ­ě–´',
            'tr': 'TĂĽrkĂ§e',
            'sv': 'Svenska',
            'da': 'Dansk',
            'fi': 'Suomi',
            'no': 'Norsk',
            'cs': 'ÄŚeĹˇtina',
            'sk': 'SlovenÄŤina',
            'ro': 'RomĂ˘nÄ',
            'bg': 'Đ‘ŃŠĐ»ĐłĐ°Ń€ŃĐşĐ¸',
            'el': 'Î•Î»Î»Î·Î˝ÎąÎşÎ¬',
            'uk': 'ĐŁĐşŃ€Đ°Ń—Đ˝ŃŃŚĐşĐ°',
            'he': '×˘×‘×¨×™×Ş',
            'th': 'ŕą„ŕ¸—ŕ¸˘',
            'vi': 'Tiáşżng Viá»‡t',
            'id': 'Bahasa Indonesia'
        };
        
        document.getElementById('currentUiLanguage').textContent = languageNames[lang] || 'English';
        
        // AktĂ­v elem beĂˇllĂ­tĂˇsa a menĂĽben
        document.querySelectorAll('#uiLanguageMenu a').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeMenuItem = document.querySelector(`#uiLanguageMenu a[data-lang="${lang}"]`);
        if (activeMenuItem) {
            activeMenuItem.classList.add('active');
        }

        // Nyelvi fĂˇjl betĂ¶ltĂ©se a translations.js-bĹ‘l
        if (typeof loadLanguage === 'function') {
            loadLanguage(lang)
                .then(translations => {
                    console.log("Nyelv sikeresen betĂ¶ltve: " + lang);
                    updateUiTexts(translations);
                })
                .catch(error => {
                    console.error("Hiba a nyelvi fĂˇjl betĂ¶ltĂ©se sorĂˇn: ", error);
                    // Hiba esetĂ©n prĂłbĂˇljuk az angol nyelvet betĂ¶lteni
                    if (lang !== 'en') {
                        loadLanguage('en')
                            .then(translations => {
                                console.log('Az angol nyelvi fĂˇjl sikeresen betĂ¶ltve');
                                updateUiTexts(translations);
                            })
                            .catch(err => {
                                console.error('Nem sikerĂĽlt betĂ¶lteni az angol nyelvi fĂˇjlt sem:', err);
                            });
                    }
                });
        } else {
            // RĂ©gi mĂłdszer, ha a loadLanguage fĂĽggvĂ©ny nem elĂ©rhetĹ‘
            if (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) {
                console.log("Nyelv vĂˇltĂˇs (rĂ©gi mĂłdszer): " + lang);
                updateUiTexts(uiTranslations[lang]);
            } else {
                console.error("A fordĂ­tĂˇsok nem Ă©rhetĹ‘k el: ", lang);
            }
        }
    }
    
    // FelhasznĂˇlĂłi felĂĽlet szĂ¶vegeinek frissĂ­tĂ©se
    function updateUiTexts(translations) {
        console.log("UI szĂ¶vegek frissĂ­tĂ©se:", translations);
        
        try {
            // FĹ‘cĂ­m
            const mainTitle = document.querySelector('h1.display-5');
            if (mainTitle) {
                mainTitle.innerHTML = `<i class="bi bi-translate me-2"></i>${translations.appTitle} <small class="fs-6 text-secondary">version 1.0</small>`;
            }
            
            // KĂˇrtya cĂ­mek
            cardTitles.forEach((cardTitle, index) => {
                switch (index) {
                    case 0:
                        cardTitle.textContent = translations.fileUploadTitle;
                        break;
                    case 1:
                        cardTitle.textContent = translations.temperatureTitle;
                        break;
                    case 2:
                        cardTitle.textContent = translations.translationModeTitle || translations.languageTitle;
                        break;
                    case 3:
                        cardTitle.textContent = translations.languageTitle;
                        break;
                }
            });
            
            // API kulcs cĂ­mke Ă©s gomb
            const apiKeyLabel = document.querySelector('label[for="apiKey"]');
            if (apiKeyLabel) apiKeyLabel.textContent = translations.apiKeyLabel || "API kulcs:";
            
            const showApiKeyBtn = document.getElementById('showApiKeyFieldBtn');
            if (showApiKeyBtn) {
                showApiKeyBtn.innerHTML = `<i class="bi bi-key"></i> ${translations.showApiKeyButton || "MegjelenĂ­tĂ©s"}`;
            }
            
            // HĹ‘mĂ©rsĂ©klet cĂ­mkĂ©k
            const tempLabels = document.querySelectorAll('.form-range + div small');
            if (tempLabels.length >= 3) {
                tempLabels[0].textContent = `${translations.temperatureAccurate} (0.1)`;
                tempLabels[1].textContent = `${translations.temperatureBalanced} (1.0)`;
                tempLabels[2].textContent = `${translations.temperatureCreative} (2.0)`;
            }
            
            // Nyelvi cĂ­mkĂ©k - ezeket globĂˇlis vĂˇltozĂłkkal Ă©rjĂĽk el
            const sourceLabel = document.querySelector('label[for="sourceLanguage"]');
            if (sourceLabel) sourceLabel.textContent = translations.sourceLanguage + ':';
            
            const targetLabel = document.querySelector('label[for="targetLanguage"]');
            if (targetLabel) targetLabel.textContent = translations.targetLanguage + ':';
            
            // Gombok - ezeket globĂˇlis vĂˇltozĂłkkal Ă©rjĂĽk el
            if (startTranslationBtn) {
                startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${translations.startTranslation}`;
                console.log("Start gomb szĂ¶vege frissĂ­tve:", translations.startTranslation);
            }
            
            if (stopTranslationBtn) {
                stopTranslationBtn.innerHTML = `<i class="bi bi-pause-circle me-2"></i>${translations.stopTranslation}`;
                console.log("Stop gomb szĂ¶vege frissĂ­tve:", translations.stopTranslation);
            }
            
            if (resetTranslationBtn) {
                resetTranslationBtn.innerHTML = `<i class="bi bi-arrow-counterclockwise me-2"></i>${translations.resetTranslation}`;
                console.log("Reset gomb szĂ¶vege frissĂ­tve:", translations.resetTranslation);
            }
            
            if (saveTranslationBtn) {
                saveTranslationBtn.innerHTML = `<i class="bi bi-download me-2"></i>${translations.saveTranslation}`;
                console.log("Save gomb szĂ¶vege frissĂ­tve:", translations.saveTranslation);
            }
            
            if (saveWorkFileBtn) {
                saveWorkFileBtn.innerHTML = `<i class="bi bi-file-earmark-text me-2"></i>${translations.saveWorkFile}`;
                console.log("Save workfile gomb szĂ¶vege frissĂ­tve:", translations.saveWorkFile);
            }
            
            // ForrĂˇs blokkmentĂ©se gomb frissĂ­tĂ©se
            const saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn');
            if (saveSourceBlockBtn) {
                saveSourceBlockBtn.innerHTML = `<i class="bi bi-file-earmark-text me-2"></i>${translations.saveSourceBlock}`;
                console.log("ForrĂˇs blokkmentĂ©se gomb szĂ¶vege frissĂ­tve:", translations.saveSourceBlock);
            }
            
            // TĂˇblĂˇzat fejlĂ©cek
            if (originalHeader) {
                originalHeader.textContent = translations.originalSubtitle;
                console.log("Eredeti fejlĂ©c szĂ¶vege frissĂ­tve:", translations.originalSubtitle);
            }
            
            if (translatedHeader) {
                translatedHeader.textContent = translations.translatedSubtitle;
                console.log("FordĂ­tott fejlĂ©c szĂ¶vege frissĂ­tve:", translations.translatedSubtitle);
            }
            
            if (actionsHeader) {
                actionsHeader.textContent = translations.actions;
                console.log("MĹ±veletek fejlĂ©c szĂ¶vege frissĂ­tve:", translations.actions);
            }
            
            // FĂˇjl informĂˇciĂł
            if (fileNameSpan && fileNameSpan.textContent && fileInfoDiv) {
                fileInfoDiv.innerHTML = `<span id="fileName">${fileNameSpan.textContent}</span> - <span id="lineCount">${lineCountSpan ? lineCountSpan.textContent : ''}</span> ${translations.fileInfo}`;
            }
            
            // ĂšjrafordĂ­tĂˇs gombok
            const retranslateButtons = document.querySelectorAll('.retranslate-btn');
            retranslateButtons.forEach(btn => {
                // FrissĂ­tjĂĽk a gomb tartalmĂˇt: ikon + szĂ¶veg
                btn.innerHTML = `<i class="bi bi-arrow-repeat me-1"></i>${translations.retranslate}`;
                btn.dataset.bsTitle = translations.retranslate;
                console.log("ĂšjrafordĂ­tĂˇs gomb szĂ¶vege frissĂ­tve:", translations.retranslate);
            });
            
            // EgyĂ©b helyek, ahol mĂ©g lehet fordĂ­thatĂł szĂ¶veg
            // Footer copyright szĂ¶veg
            const footer = document.querySelector('footer p.text-center');
            if (footer) {
                footer.innerHTML = `&copy; 2025 ${translations.appTitle}`;
            }
            
            // File input label frissĂ­tĂ©se
            if (fileInputLabel) {
                fileInputLabel.textContent = translations.fileInputLabel;
            }
            
            console.log("UI szĂ¶vegek frissĂ­tĂ©se befejezve!");
        } catch (error) {
            console.error("Hiba tĂ¶rtĂ©nt az UI szĂ¶vegek frissĂ­tĂ©se sorĂˇn:", error);
        }
        
        // Tooltipek inicializĂˇlĂˇsa
        initTooltips();
    }

    // Bootstrap tooltipek inicializĂˇlĂˇsa
    function initTooltips() {
        // MeglĂ©vĹ‘ tooltipek eltĂˇvolĂ­tĂˇsa
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
            const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
            if (tooltip) {
                tooltip.dispose();
            }
        });
        
        // Ăšj tooltipek inicializĂˇlĂˇsa
        const newTooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        newTooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        console.log("Tooltipek ĂşjrainicializĂˇlva");
    }
    
    console.log("UI szĂ¶vegek frissĂ­tĂ©se befejezve!");
});

// FordĂ­tĂˇs mĂłdjĂˇnak kezelĂ©se
function handleTranslationModeChange() {
    const selectedMode = translationModeSelect.value;
    if (selectedMode === 'chatgpt_4o_mini' || selectedMode === 'chatgpt_4o') {
        apiKeyContainer.classList.remove('d-none');
        
        // Ha van mentett API kulcs, csak a megjelenĂ­tĂ©s gombot mutatjuk
        const savedApiKey = loadApiKey();
        if (savedApiKey) {
            apiKeyInput.value = savedApiKey;
            apiKeyInput.type = 'password';
            
            // ElrejtjĂĽk az input mezĹ‘t Ă©s megjelenĂ­tjĂĽk a gombot
            apiKeyInputGroup.classList.add('d-none');
            showApiKeyFieldBtn.classList.remove('d-none');
        } else {
            // Ha nincs mentett API kulcs, rĂ¶gtĂ¶n megjelenĂ­tjĂĽk az input mezĹ‘t
            apiKeyInputGroup.classList.remove('d-none');
            showApiKeyFieldBtn.classList.add('d-none');
        }
    } else {
        apiKeyContainer.classList.add('d-none');
        apiKeyInput.value = '';
    }
    
    // MentjĂĽk a kivĂˇlasztott fordĂ­tĂˇsi mĂłdot
    localStorage.setItem('translationMode', selectedMode);
}

// API kulcs lĂˇthatĂłsĂˇg kapcsolĂˇsa
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

// API kulcs mezĹ‘ megjelenĂ­tĂ©se
function showApiKeyField() {
    apiKeyInputGroup.classList.remove('d-none');
    showApiKeyFieldBtn.classList.add('d-none');
}

// FordĂ­tĂˇsi fĂĽggvĂ©nyek
async function translateWithLmStudio(text, sourceLang, targetLang) {
    // LM Studio fordĂ­tĂˇsi logika
    console.log('LM Studio fordĂ­tĂˇs:', text);
}

async function translateWithChatGpt(subtitle, sourceLang, targetLang, apiKey, model = 'gpt-4o-mini', temperature = 0.7, retryCount = 0) {
    // Maximum ĂşjraprĂłbĂˇlkozĂˇsok szĂˇma
    const MAX_RETRIES = 3;
    // VĂˇrakozĂˇsi idĹ‘ milliszekundumban (exponenciĂˇlisan nĂ¶vekszik)
    const RETRY_DELAY = 2000 * Math.pow(2, retryCount);
    
    // SegĂ©dfĂĽggvĂ©ny a nyelv kĂłdjĂˇnak nĂ©vvĂ© alakĂ­tĂˇsĂˇhoz
    function getLanguageNameLocal(languageCode) {
        const languages = {
            'en': 'angol',
            'hu': 'magyar',
            'de': 'nĂ©met',
            'fr': 'francia',
            'es': 'spanyol',
            'it': 'olasz',
            'pt': 'portugĂˇl',
            'ru': 'orosz',
            'ja': 'japĂˇn',
            'zh': 'kĂ­nai',
            'ko': 'koreai',
            'ar': 'arab',
            'hi': 'hindi',
            'tr': 'tĂ¶rĂ¶k',
            'pl': 'lengyel',
            'nl': 'holland',
            'sv': 'svĂ©d',
            'da': 'dĂˇn',
            'fi': 'finn',
            'no': 'norvĂ©g',
            'cs': 'cseh',
            'sk': 'szlovĂˇk',
            'ro': 'romĂˇn',
            'bg': 'bolgĂˇr',
            'hr': 'horvĂˇt',
            'sr': 'szerb',
            'uk': 'ukrĂˇn',
            'el': 'gĂ¶rĂ¶g',
            'he': 'hĂ©ber',
            'vi': 'vietnĂˇmi',
            'th': 'thai',
            'id': 'indonĂ©z',
            'ms': 'malĂˇj',
            'fa': 'perzsa',
            'ur': 'urdu'
        };
        
        return languages[languageCode] || languageCode;
    }

    // EllenĹ‘rizzĂĽk, hogy a subtitle egy objektum-e
    if (typeof subtitle === 'object' && subtitle !== null) {
        const textToTranslate = subtitle.text;
        console.log('ChatGPT fordĂ­tĂˇs:', textToTranslate, 'API kulcs:', apiKey);
        
        try {
            // ChatGPT API hĂ­vĂˇs
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
                            role: "system",
                            content: `FordĂ­tsd le a kĂ¶vetkezĹ‘ szĂ¶veget ${getLanguageNameLocal(sourceLang)} nyelvrĹ‘l ${getLanguageNameLocal(targetLang)} nyelvre. Csak a fordĂ­tĂˇst add vissza, semmilyen egyĂ©b magyarĂˇzatot vagy megjegyzĂ©st ne fĹ±zz hozzĂˇ.`
                        },
                        {
                            role: "user",
                            content: textToTranslate
                        }
                    ],
                    temperature: temperature
                })
            });
            
            // Ha 429-es hiba (tĂşl sok kĂ©rĂ©s), akkor ĂşjraprĂłbĂˇlkozunk
            if (response.status === 429 && retryCount < MAX_RETRIES) {
                console.log(`429 hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
                // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                // ĂšjraprĂłbĂˇlkozĂˇs
                return translateWithChatGpt(subtitle, sourceLang, targetLang, apiKey, model, temperature, retryCount + 1);
            }
            
            if (!response.ok) {
                throw new Error(`API hiba: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            const translatedText = data.choices[0].message.content.trim();
            console.log('FordĂ­tĂˇs eredmĂ©nye:', translatedText);
            
            return translatedText;
        } catch (error) {
            console.error('FordĂ­tĂˇsi hiba:', error);
            
            // Ha hĂˇlĂłzati hiba vagy egyĂ©b ideiglenes problĂ©ma, ĂşjraprĂłbĂˇlkozunk
            if ((error.message.includes('fetch') || error.message.includes('network') || error.message.includes('timeout')) && retryCount < MAX_RETRIES) {
                console.log(`HĂˇlĂłzati hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
                // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                // ĂšjraprĂłbĂˇlkozĂˇs
                return translateWithChatGpt(subtitle, sourceLang, targetLang, apiKey, model, temperature, retryCount + 1);
            }
            
            throw error;
        }
    } else {
        // Ha nem objektum, akkor feltĂ©telezzĂĽk, hogy szĂ¶veg
        console.log('ChatGPT fordĂ­tĂˇs (szĂ¶veg):', subtitle, 'API kulcs:', apiKey);
        
        try {
            // ChatGPT API hĂ­vĂˇs
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
                            role: "system",
                            content: `FordĂ­tsd le a kĂ¶vetkezĹ‘ szĂ¶veget ${getLanguageNameLocal(sourceLang)} nyelvrĹ‘l ${getLanguageNameLocal(targetLang)} nyelvre. Csak a fordĂ­tĂˇst add vissza, semmilyen egyĂ©b magyarĂˇzatot vagy megjegyzĂ©st ne fĹ±zz hozzĂˇ.`
                        },
                        {
                            role: "user",
                            content: subtitle
                        }
                    ],
                    temperature: temperature
                })
            });
            
            // Ha 429-es hiba (tĂşl sok kĂ©rĂ©s), akkor ĂşjraprĂłbĂˇlkozunk
            if (response.status === 429 && retryCount < MAX_RETRIES) {
                console.log(`429 hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
                // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                // ĂšjraprĂłbĂˇlkozĂˇs
                return translateWithChatGpt(subtitle, sourceLang, targetLang, apiKey, model, temperature, retryCount + 1);
            }
            
            if (!response.ok) {
                throw new Error(`API hiba: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            const translatedText = data.choices[0].message.content.trim();
            console.log('FordĂ­tĂˇs eredmĂ©nye:', translatedText);
            
            return translatedText;
        } catch (error) {
            console.error('FordĂ­tĂˇsi hiba:', error);
            
            // Ha hĂˇlĂłzati hiba vagy egyĂ©b ideiglenes problĂ©ma, ĂşjraprĂłbĂˇlkozunk
            if ((error.message.includes('fetch') || error.message.includes('network') || error.message.includes('timeout')) && retryCount < MAX_RETRIES) {
                console.log(`HĂˇlĂłzati hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
                // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                // ĂšjraprĂłbĂˇlkozĂˇs
                return translateWithChatGpt(subtitle, sourceLang, targetLang, apiKey, model, temperature, retryCount + 1);
            }
            
            throw error;
        }
    }
}

function startTranslation() {
    const selectedMode = translationModeSelect.value;
    const apiKey = apiKeyInput.value;
    if (selectedMode === 'lm_studio_local') {
        // LM Studio fordĂ­tĂˇs
        translateWithLmStudio('pĂ©lda szĂ¶veg', 'en', 'hu');
    } else if (selectedMode === 'chatgpt_4o_mini' && apiKey) {
        // ChatGPT-4o mini fordĂ­tĂˇs
        translateWithChatGpt('pĂ©lda szĂ¶veg', 'en', 'hu', apiKey, 'gpt-4o-mini');
    } else if (selectedMode === 'chatgpt_4o' && apiKey) {
        // ChatGPT-4o fordĂ­tĂˇs
        translateWithChatGpt('pĂ©lda szĂ¶veg', 'en', 'hu', apiKey, 'gpt-4o');
    } else {
        alert('KĂ©rjĂĽk, adja meg az API kulcsot a ChatGPT hasznĂˇlatĂˇhoz!');
    }
}

// FordĂ­tĂˇs ChatGPT-vel egyedi rendszerĂĽzenettel
async function translateWithChatGptCustomPrompt(text, systemPrompt, apiKey, model = 'gpt-4o-mini', temperature = 0.7, retryCount = 0) {
    // Maximum ĂşjraprĂłbĂˇlkozĂˇsok szĂˇma
    const MAX_RETRIES = 3;
    // VĂˇrakozĂˇsi idĹ‘ milliszekundumban (exponenciĂˇlisan nĂ¶vekszik)
    const RETRY_DELAY = 2000 * Math.pow(2, retryCount);
    
    console.log('ChatGPT fordĂ­tĂˇs egyedi prompttal:', text.substring(0, 100) + '...', 'API kulcs:', apiKey);
    
    try {
        // ChatGPT API hĂ­vĂˇs
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
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: text
                    }
                ],
                temperature: temperature
            })
        });
        
        // Ha 429-es hiba (tĂşl sok kĂ©rĂ©s), akkor ĂşjraprĂłbĂˇlkozunk
        if (response.status === 429 && retryCount < MAX_RETRIES) {
            console.log(`429 hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
            // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            // ĂšjraprĂłbĂˇlkozĂˇs
            return translateWithChatGptCustomPrompt(text, systemPrompt, apiKey, model, temperature, retryCount + 1);
        }
        
        if (!response.ok) {
            throw new Error(`API hiba: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const translatedText = data.choices[0].message.content.trim();
        console.log('FordĂ­tĂˇs eredmĂ©nye:', translatedText);
        
        return translatedText;
    } catch (error) {
        console.error('FordĂ­tĂˇsi hiba:', error);
        
        // Ha hĂˇlĂłzati hiba vagy egyĂ©b ideiglenes problĂ©ma, ĂşjraprĂłbĂˇlkozunk
        if ((error.message.includes('fetch') || error.message.includes('network') || error.message.includes('timeout')) && retryCount < MAX_RETRIES) {
            console.log(`HĂˇlĂłzati hiba, ĂşjraprĂłbĂˇlkozĂˇs ${retryCount + 1}/${MAX_RETRIES} (vĂˇrakozĂˇs: ${RETRY_DELAY}ms)...`);
            // VĂˇrakozĂˇs nĂ¶vekvĹ‘ idĹ‘vel
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            // ĂšjraprĂłbĂˇlkozĂˇs
            return translateWithChatGptCustomPrompt(text, systemPrompt, apiKey, model, temperature, retryCount + 1);
        }
        
        throw error;
    }
}

// ForrĂˇs blokkmentĂ©se gomb lĂ©trehozĂˇsa
function createSaveSourceBlockButton() {
    const saveTranslationBtn = document.getElementById('saveTranslation');
    
    // Ha mĂˇr lĂ©tezik a gomb, csak megjelenĂ­tjĂĽk
    let saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn');
    if (saveSourceBlockBtn) {
        saveSourceBlockBtn.classList.remove('d-none');
        console.log('Gomb mĂˇr lĂ©tezik, megjelenĂ­tve.'); // Debug ĂĽzenet
        return saveSourceBlockBtn;
    }
    
    // KĂĽlĂ¶nben lĂ©trehozzuk a gombot
    saveSourceBlockBtn = document.createElement('button');
    saveSourceBlockBtn.id = 'saveSourceBlockBtn';
    saveSourceBlockBtn.className = 'btn btn-warning me-2';
    saveSourceBlockBtn.innerHTML = '<i class="bi bi-file-earmark-text me-2"></i>' + (uiTranslations[currentLangCode]?.saveSourceBlock || 'ForrĂˇs blokkmentĂ©se');
    saveSourceBlockBtn.onclick = saveSourceBlock;
    
    // BeszĂşrjuk a FordĂ­tĂˇs mentĂ©se gomb elĂ©
    if (saveTranslationBtn && saveTranslationBtn.parentNode) {
        saveTranslationBtn.parentNode.insertBefore(saveSourceBlockBtn, saveTranslationBtn);
        console.log('Gomb lĂ©trehozva Ă©s beszĂşrva a DOM-ba.'); // Debug ĂĽzenet
    } else {
        console.error('saveTranslation vagy annak szĂĽlĹ‘eleme nem talĂˇlhatĂł!');
    }
    
    return saveSourceBlockBtn;
}

// ForrĂˇs szĂ¶veg blokkokba mentĂ©se
function saveSourceBlock() {
    if (!originalSubtitles || originalSubtitles.length === 0) {
        alert(uiTranslations[currentLangCode]?.errorNoSubtitleToSave || 'Nincs betĂ¶ltĂ¶tt felirat a mentĂ©shez!');
        return;
    }
    
    // Blokkos szĂ¶veg Ă¶sszeĂˇllĂ­tĂˇsa
    let blockText = '';
    for (let i = 0; i < originalSubtitles.length; i++) {
        // SorszĂˇm Ă©s szĂ¶veg hozzĂˇadĂˇsa
        blockText += (i + 1) + '. ' + originalSubtitles[i].text + '\n';
        
        // Minden 50. sor utĂˇn 5 ĂĽres sor
        if ((i + 1) % 50 === 0) {
            blockText += '\n\n\n\n\n';
        }
    }
    
    // FĂˇjl lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©se
    const newFileName = fileName.replace('.srt', '_block.txt');
    
    // Blob lĂ©trehozĂˇsa Ă©s letĂ¶ltĂ©s
    const blob = new Blob([blockText], { type: 'text/plain;charset=utf-8' });
    downloadTextFile(blockText, newFileName);
}

// SzĂ¶vegfĂˇjl letĂ¶ltĂ©se
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
