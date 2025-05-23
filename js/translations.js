// Managing user interface translations
let uiTranslations = {};
let currentLanguageModule = null;

// Nyelvi fájlok betöltése
function loadLanguage(langCode) {
    // Töröljük a korábban betöltött script elemet, ha létezik
    if (currentLanguageModule) {
        document.head.removeChild(currentLanguageModule);
        currentLanguageModule = null;
    }
    
    return new Promise((resolve, reject) => {
        // Új script elem létrehozása a nyelvi fájl betöltéséhez
        const script = document.createElement('script');
        script.src = `languages/${langCode}.js`;
        script.onload = function() {
            // A betöltött nyelvi objektum hozzáadása a uiTranslations objektumhoz
            if (window[langCode]) {
                uiTranslations[langCode] = window[langCode];
                currentLanguageModule = script;
                resolve(window[langCode]);
            } else {
                reject(new Error(`A(z) ${langCode} nyelvi modul nem tartalmaz érvényes nyelvi objektumot`));
            }
        };
        script.onerror = function() {
            reject(new Error(`Nem sikerült betölteni a(z) ${langCode} nyelvi fájlt`));
        };
        
        // Script elem hozzáadása a dokumentumhoz
        document.head.appendChild(script);
    });
}

// Alapértelmezett nyelv betöltése (magyar)
document.addEventListener('DOMContentLoaded', function() {
    // Ellenőrizzük, hogy van-e mentett nyelvi beállítás
    const savedLang = localStorage.getItem('uiLanguage') || 'hu';
    
    // Betöltjük a mentett vagy alapértelmezett nyelvet
    loadLanguage(savedLang)
        .then(translations => {
            console.log(`A(z) ${savedLang} nyelvi fájl sikeresen betöltve`);
        })
        .catch(error => {
            console.error('Hiba a nyelvi fájl betöltése során:', error);
            // Hiba esetén próbáljuk a magyar nyelvet betölteni
            if (savedLang !== 'hu') {
                loadLanguage('hu')
                    .then(translations => {
                        console.log('A magyar nyelvi fájl sikeresen betöltve');
                    })
                    .catch(err => {
                        console.error('Nem sikerült betölteni a magyar nyelvi fájlt sem:', err);
                        // Végső esetben próbáljuk az angol nyelvet
                        loadLanguage('en')
                            .then(translations => {
                                console.log('Az angol nyelvi fájl sikeresen betöltve');
                            })
                            .catch(finalErr => {
                                console.error('Nem sikerült betölteni az angol nyelvi fájlt sem:', finalErr);
                            });
                    });
            }
        });
});
