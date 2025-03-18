// FelhasznĂˇlĂłi felĂĽlet fordĂ­tĂˇsai
let uiTranslations = {};
let currentLanguageModule = null;

// Nyelvi fĂˇjlok betĂ¶ltĂ©se
function loadLanguage(langCode) {
    // TĂ¶rĂ¶ljĂĽk a korĂˇbban betĂ¶ltĂ¶tt script elemet, ha lĂ©tezik
    if (currentLanguageModule) {
        document.head.removeChild(currentLanguageModule);
        currentLanguageModule = null;
    }
    
    return new Promise((resolve, reject) => {
        // Ăšj script elem lĂ©trehozĂˇsa a nyelvi fĂˇjl betĂ¶ltĂ©sĂ©hez
        const script = document.createElement('script');
        script.src = `languages/${langCode}.js`;
        script.onload = function() {
            // A betĂ¶ltĂ¶tt nyelvi objektum hozzĂˇadĂˇsa a uiTranslations objektumhoz
            if (window[langCode]) {
                uiTranslations[langCode] = window[langCode];
                currentLanguageModule = script;
                resolve(window[langCode]);
            } else {
                reject(new Error(`A(z) ${langCode} nyelvi modul nem tartalmaz Ă©rvĂ©nyes nyelvi objektumot`));
            }
        };
        script.onerror = function() {
            reject(new Error(`Nem sikerĂĽlt betĂ¶lteni a(z) ${langCode} nyelvi fĂˇjlt`));
        };
        
        // Script elem hozzĂˇadĂˇsa a dokumentumhoz
        document.head.appendChild(script);
    });
}

// AlapĂ©rtelmezett nyelv betĂ¶ltĂ©se (magyar)
document.addEventListener('DOMContentLoaded', function() {
    // EllenĹ‘rizzĂĽk, hogy van-e mentett nyelvi beĂˇllĂ­tĂˇs
    const savedLang = localStorage.getItem('uiLanguage') || 'hu';
    
    // BetĂ¶ltjĂĽk a mentett vagy alapĂ©rtelmezett nyelvet
    loadLanguage(savedLang)
        .then(translations => {
            console.log(`A(z) ${savedLang} nyelvi fĂˇjl sikeresen betĂ¶ltve`);
        })
        .catch(error => {
            console.error('Hiba a nyelvi fĂˇjl betĂ¶ltĂ©se sorĂˇn:', error);
            // Hiba esetĂ©n prĂłbĂˇljuk a magyar nyelvet betĂ¶lteni
            if (savedLang !== 'hu') {
                loadLanguage('hu')
                    .then(translations => {
                        console.log('A magyar nyelvi fĂˇjl sikeresen betĂ¶ltve');
                    })
                    .catch(err => {
                        console.error('Nem sikerĂĽlt betĂ¶lteni a magyar nyelvi fĂˇjlt sem:', err);
                        // VĂ©gsĹ‘ esetben prĂłbĂˇljuk az angol nyelvet
                        loadLanguage('en')
                            .then(translations => {
                                console.log('Az angol nyelvi fĂˇjl sikeresen betĂ¶ltve');
                            })
                            .catch(finalErr => {
                                console.error('Nem sikerĂĽlt betĂ¶lteni az angol nyelvi fĂˇjlt sem:', finalErr);
                            });
                    });
            }
        });
});
