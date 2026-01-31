"use strict";
const CONFIG = {
    adsterra: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    temu_general: "https://temu.to/k/ehsqckgdgv7",
    temu_coupon: "https://temu.to/k/epxkfkmslwr",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN"
    ]
};

let adActive = false;

// 1. تشغيل Adsterra عند أول لمسة (Touch/Scroll)
function activateAds() {
    if (adActive) return;
    const s = document.createElement('script');
    s.src = CONFIG.adsterra;
    document.body.appendChild(s);
    adActive = true;
}

// 2. تفعيل MyLead Locker
window.unlockDeal = function(e) {
    if(e) e.preventDefault();
    document.getElementById('locker').style.display = 'flex';
};

// 3. توجيه آمن لـ AliExpress
window.openAli = function(index) {
    window.open(CONFIG.ali[index], '_blank', 'noopener,noreferrer');
};

// 4. إشعارات تسويقية تلقائية
function runSocialProof() {
    const msgs = ["Sara claimed a $100 Gift Card", "Alex unlocked AliExpress 90% Deal", "New Coupon Applied: ali223723"];
    const el = document.getElementById('proof-msg');
    setInterval(() => {
        const msg = msgs[Math.floor(Math.random()*msgs.length)];
        if(el) el.innerText = msg;
    }, 4000);
}

document.addEventListener('mousedown', activateAds, {once:true});
document.addEventListener('touchstart', activateAds, {once:true});
window.onload = runSocialProof;
