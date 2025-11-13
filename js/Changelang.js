// Nyelvi váltás és UI szövegek frissítése

/**
 * Bootstrap tooltipek inicializálása
 */
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

/**
 * Felhasználói felület nyelvének megváltoztatása
 * @param {string} lang - A nyelv kódja (pl. 'hu', 'en')
 */
function changeUiLanguage(lang) {
    // Aktuális nyelv mentése
    localStorage.setItem('uiLanguage', lang);
    // Globális változó frissítése
    currentLangCode = lang;

    // Nyelvválasztó gomb szövegének frissítése
    const languageNames = {
        'en': 'English',
        'hu': 'Magyar',
        'de': 'Deutsch',
        'es': 'Español',
        'fr': 'Français',
        'it': 'Italiano',
        'pt_PT': 'Português (Portugal)',
        'pt_BR': 'Português (Brasil)',
        'nl': 'Nederlands',
        'pl': 'Polski',
        'ru': 'Русский',
        'ja': '日本語',
        'zh': '中文',
        'zh_tw': '中文 (台灣)',
        'zh_hk': '中文 (香港)',
        'ar': 'العربية',
        'hi': 'हिन्दी',
        'ko': '한국어',
        'tr': 'Türkçe',
        'sv': 'Svenska',
        'da': 'Dansk',
        'fi': 'Suomi',
        'no': 'Norsk',
        'cs': 'Čeština',
        'sk': 'Slovenčina',
        'ro': 'Română',
        'bg': 'Български',
        'el': 'Ελληνικά',
        'uk': 'Українська',
        'he': 'עברית',
        'vi': 'Tiếng Việt',
        'th': 'ไทย',
        'id': 'Bahasa Indonesia'
    };
    
    document.getElementById('currentUiLanguage').textContent = languageNames[lang] || 'English';
    
    // Aktív elem beállítása a menüben
    document.querySelectorAll('#uiLanguageMenu a').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeMenuItem = document.querySelector(`#uiLanguageMenu a[data-lang="${lang}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }

    // Nyelvi fájl betöltése a translations.js-ből
    if (typeof loadLanguage === 'function') {
        loadLanguage(lang)
            .then(translations => {
                console.log("Nyelv sikeresen betöltve: " + lang);
                updateUiTexts(translations);
            })
            .catch(error => {
                console.error("Hiba a nyelvi fájl betöltése során: ", error);
                // Hiba esetén próbáljuk az angol nyelvet betölteni
                if (lang !== 'en') {
                    loadLanguage('en')
                        .then(translations => {
                            console.log('Az angol nyelvi fájl sikeresen betöltve');
                            updateUiTexts(translations);
                        })
                        .catch(err => {
                            console.error('Nem sikerült betölteni az angol nyelvi fájlt sem:', err);
                        });
                }
            });
    } else {
        // Régi módszer, ha a loadLanguage függvény nem elérhető
        if (typeof uiTranslations !== 'undefined' && uiTranslations[lang]) {
            console.log("Nyelv váltás (régi módszer): " + lang);
            updateUiTexts(uiTranslations[lang]);
        } else {
            console.error("A fordítások nem érhetők el: ", lang);
        }
    }
}

/**
 * Felhasználói felület szövegeinek frissítése a kiválasztott nyelven
 * @param {Object} translations - Fordítási kulcsok és értékek objektuma
 */
function updateUiTexts(translations) {
    console.log("UI szövegek frissítése:", translations);
    
    try {
        // Főcím
        const mainTitle = document.querySelector('h1.display-5');
        if (mainTitle) {
            mainTitle.innerHTML = `<i class="bi bi-translate me-2"></i>${translations.appTitle} <small class="fs-6 text-secondary">version 1.91</small>`;
        }
        
        // Kártya címek
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
        
        // API kulcs címke és gomb
        const apiKeyLabel = document.querySelector('label[for="apiKey"]');
        if (apiKeyLabel) apiKeyLabel.textContent = translations.apiKeyLabel || "API kulcs:";
        
        const showApiKeyBtn = document.getElementById('showApiKeyFieldBtn');
        if (showApiKeyBtn) {
            showApiKeyBtn.innerHTML = `<i class="bi bi-key"></i> ${translations.showApiKeyButton || "Megjelenítés"}`;
        }
        
        // Hőmérséklet címkék
        const tempLabels = document.querySelectorAll('.form-range + div small');
        if (tempLabels.length >= 3) {
            tempLabels[0].textContent = `${translations.temperatureAccurate} (0.1)`;
            tempLabels[1].textContent = `${translations.temperatureBalanced} (1.0)`;
            tempLabels[2].textContent = `${translations.temperatureCreative} (2.0)`;
        }
        
        // Nyelvi címkék - ezeket globális változókkal érjük el
        const sourceLabel = document.querySelector('label[for="sourceLanguage"]');
        if (sourceLabel) sourceLabel.textContent = translations.sourceLanguage + ':';
        
        const targetLabel = document.querySelector('label[for="targetLanguage"]');
        if (targetLabel) targetLabel.textContent = translations.targetLanguage + ':';
        
        // OpenRouter modellválasztó címke és placeholder frissítése
        const openrouterModelLabel = document.querySelector('label[for="openrouterModel"]');
        if (openrouterModelLabel) openrouterModelLabel.textContent = translations.openrouterModelLabel || "OpenRouter modell választás:";
        
        const openrouterModelSelect = document.getElementById('openrouterModel');
        if (openrouterModelSelect && openrouterModelSelect.options.length > 0 && openrouterModelSelect.options[0].disabled) {
            openrouterModelSelect.options[0].text = translations.selectModelPlaceholder || "Modellek betöltése...";
        }
        
        // Gombok - ezeket globális változókkal érjük el
        if (startTranslationBtn) {
            startTranslationBtn.innerHTML = `<i class="bi bi-translate me-2"></i>${translations.startTranslation}`;
            console.log("Start gomb szövege frissítve:", translations.startTranslation);
        }
        
        if (stopTranslationBtn) {
            stopTranslationBtn.innerHTML = `<i class="bi bi-pause-circle me-2"></i>${translations.stopTranslation}`;
            console.log("Stop gomb szövege frissítve:", translations.stopTranslation);
        }
        
        if (resetTranslationBtn) {
            resetTranslationBtn.innerHTML = `<i class="bi bi-arrow-counterclockwise me-2"></i>${translations.resetTranslation}`;
            console.log("Reset gomb szövege frissítve:", translations.resetTranslation);
        }
        
        if (saveTranslationBtn) {
            saveTranslationBtn.innerHTML = `<i class="bi bi-download me-2"></i>${translations.saveTranslation}`;
            console.log("Save gomb szövege frissítve:", translations.saveTranslation);
        }
        
        if (saveWorkFileBtn) {
            saveWorkFileBtn.innerHTML = `<i class="bi bi-file-earmark-text me-2"></i>${translations.saveWorkFile}`;
            console.log("Save workfile gomb szövege frissítve:", translations.saveWorkFile);
        }
        
        // Forrás blokkmentése gomb frissítése
        const saveSourceBlockBtn = document.getElementById('saveSourceBlockBtn');
        if (saveSourceBlockBtn) {
            saveSourceBlockBtn.innerHTML = `<i class="bi bi-file-earmark-text me-2"></i>${translations.saveSourceBlock}`;
            console.log("Forrás blokkmentése gomb szövege frissítve:", translations.saveSourceBlock);
        }
        
        // Táblázat fejlécek
        if (originalHeader) {
            originalHeader.textContent = translations.originalSubtitle;
            console.log("Eredeti fejléc szövege frissítve:", translations.originalSubtitle);
        }
        
        if (translatedHeader) {
            translatedHeader.textContent = translations.translatedSubtitle;
            console.log("Fordított fejléc szövege frissítve:", translations.translatedSubtitle);
        }
        
        if (actionsHeader) {
            actionsHeader.textContent = translations.actions;
            console.log("Műveletek fejléc szövege frissítve:", translations.actions);
        }
        
        // Fájl információ
        if (fileNameSpan && fileNameSpan.textContent && fileInfoDiv) {
            fileInfoDiv.innerHTML = `<span id="fileName">${fileNameSpan.textContent}</span> - <span id="lineCount">${lineCountSpan ? lineCountSpan.textContent : ''}</span> ${translations.fileInfo}`;
        }
        
        // Újrafordítás gombok
        const retranslateButtons = document.querySelectorAll('.retranslate-btn');
        retranslateButtons.forEach(btn => {
            // Frissítjük a gomb tartalmát: ikon + szöveg
            btn.innerHTML = `<i class="bi bi-arrow-repeat me-1"></i>${translations.retranslate}`;
            btn.dataset.bsTitle = translations.retranslate;
            console.log("Újrafordítás gomb szövege frissítve:", translations.retranslate);
        });
        
        // Egyéb helyek, ahol még lehet fordítható szöveg
        // Footer copyright szöveg
        const footer = document.querySelector('footer p.text-center');
        if (footer) {
            footer.innerHTML = `&copy; 2025 ${translations.appTitle}`;
        }
        
        // File input label frissítése
        if (fileInputLabel) {
            fileInputLabel.textContent = translations.fileInputLabel;
        }
        
        // Batch mód címke és tooltip frissítése
        const batchModeLabel = document.getElementById('batchModeLabel');
        if (batchModeLabel) {
            batchModeLabel.textContent = translations.batchModeLabel || "Speciális nagy kontextusú fordítási mód";
        }
        
        const batchModeInfo = document.getElementById('batchModeInfo');
        if (batchModeInfo) {
            // Töröljük a régi tooltip-et
            const oldTooltip = bootstrap.Tooltip.getInstance(batchModeInfo);
            if (oldTooltip) {
                oldTooltip.dispose();
            }
            
            // Először távolítsuk el az esetleges korábbi title attribútumot
            batchModeInfo.removeAttribute('title');
            batchModeInfo.removeAttribute('data-bs-original-title');
            
            // Új tooltip létrehozása az aktuális nyelvvel
            const tooltipText = translations.batchModeInfo || "Ezt a funkciót bekapcsolva a program egy speciális módon egyszerre 30 sor szöveget dolgoz fel, így sokkal gyorsabban és nagyobb szövegértéssel és pontossággal tudja a fordítást elvégezni a program";
            
            // Két különböző megközelítés a tooltip frissítésére:
            // 1. Új tooltip objektum létrehozása
            new bootstrap.Tooltip(batchModeInfo, {
                title: tooltipText
            });
            
            // 2. Közvetlenül a data attribútum beállítása (biztosra menve)
            batchModeInfo.setAttribute('data-bs-original-title', tooltipText);
            
            console.log(`Tooltip frissítve: ${tooltipText}`);
        }
        
        console.log("UI szövegek frissítése befejezve!");
    } catch (error) {
        console.error("Hiba történt az UI szövegek frissítése során:", error);
    }
    
    // Tooltipek inicializálása
    initTooltips();
}
