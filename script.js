// Tailwind yapılandırma
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                ruby: {
                    light: '#FFD1D1',
                    DEFAULT: '#CC342D',
                    dark: '#8B0000',
                }
            }
        }
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Tüm dil içeriklerini gizle
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Seçilen dildeki içerikleri göster
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
        el.classList.remove('hidden');
    });
    
    // Aktif dil butonunu vurgula
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang-active') === lang;
        btn.classList.toggle('font-bold', isActive);
        btn.classList.toggle('underline', isActive);
    });
    
    // Dil tercihini localStorage'a kaydet
    localStorage.setItem('preferredLanguage', lang);
}

// Sayfa yüklendiğinde tarayıcı dilini veya kaydedilmiş dil tercihini kullan
document.addEventListener('DOMContentLoaded', () => {
    let preferredLanguage = localStorage.getItem('preferredLanguage');
    
    if (!preferredLanguage) {
        // Tarayıcı dilini kontrol et
        const browserLang = navigator.language || navigator.userLanguage;
        preferredLanguage = browserLang.startsWith('tr') ? 'tr' : 'en';
    }
    
    changeLanguage(preferredLanguage);
});
