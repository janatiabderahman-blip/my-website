"use strict";
const CONFIG = {
    ad: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN",
        "https://s.click.aliexpress.com/e/_c3m4lztp"
    ]
};

let adInjected = false;
function loadAd() {
    if(adInjected) return;
    const s = document.createElement('script');
    s.src = CONFIG.ad;
    s.async = true;
    document.body.appendChild(s);
    adInjected = true;
}

window.goAli = (i) => { window.open(CONFIG.ali[i], '_blank', 'noopener,noreferrer'); };
window.openLocker = () => { document.getElementById('locker').style.display = 'flex'; };
window.shareWA = () => {
    const text = "Amazing 90% OFF deals found here! 🎁 " + window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
};

document.addEventListener('mousedown', loadAd, {once:true});
document.addEventListener('touchstart', loadAd, {once:true});
