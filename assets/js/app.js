"use strict";

// 1. Adsterra Fix: Trigger on any interaction
function initAds() {
    const script = document.createElement('script');
    script.src = "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js";
    document.body.appendChild(script);
}

// 2. MyLead Fix: Direct call
window.showLocker = function(e) {
    if(e) e.preventDefault();
    document.getElementById('locker').style.display = 'flex';
};

// 3. AliExpress Redirect Fix
window.goAli = function(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
};

document.addEventListener('mousedown', initAds, { once: true });
document.addEventListener('touchstart', initAds, { once: true });
