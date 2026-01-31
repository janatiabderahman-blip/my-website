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

const TRANSLATIONS = {
    ar: {
        hero_h1: "تسوق بذكاء. تكلفة صفر.",
        hero_p: "وصول مباشر إلى كوبونات وعروض علي إكسبريس وتيمو السرية لعام 2026.",
        ali_title: "حزمة التكنولوجيا الفاخرة",
        ali_btn1: "اشتري من علي إكسبريس (متجر 1)",
        ali_btn2: "تفحص المتجر العالمي 2",
        hack_h3: "💡 سر: كيف تحصل على هدايا تيمو مجاناً؟",
        hack_p: "وجدنا ثغرة في نظام مكافآت 2026. اتبع خطوات التحقق لفتح رابط الهدية المباشر.",
        unlock_btn: "افتح المكافأة السرية الآن",
        locker_h3: "الخطوة النهائية",
        locker_p: "أكمل عرضاً واحداً بسيطاً للتحقق من أنك إنسان وفتح الرابط."
    },
    en: {
        hero_h1: "Smart Shopping. Zero Cost.",
        hero_p: "Direct access to verified 2026 deals from Temu & AliExpress.",
        ali_title: "Elite Tech Bundle",
        ali_btn1: "Get on AliExpress (Store 1)",
        ali_btn2: "Check Global Store 2",
        hack_h3: "💡 Hack: Get Temu Gifts for $0?",
        hack_p: "We've found a loophole in the 2026 rewards system. Follow the verification to unlock the direct gift link.",
        unlock_btn: "Unlock Secret Reward",
        locker_h3: "Final Step",
        locker_p: "Complete one simple offer to verify you are human and unlock the link."
    }
};

function applyTranslation() {
    const lang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const t = TRANSLATIONS[lang];
    if (lang === 'ar') document.body.style.direction = 'rtl';

    document.querySelector('.hero h1').innerText = t.hero_h1;
    document.querySelector('.hero p').innerText = t.hero_p;
    document.querySelector('.card h3').innerText = t.ali_title;
    document.querySelectorAll('.btn-ali')[0].innerText = t.ali_btn1;
    document.querySelectorAll('.btn-ali')[1].innerText = t.ali_btn2;
    document.querySelector('.edu-section h3').innerText = t.hack_h3;
    document.querySelector('.edu-section p').innerText = t.hack_p;
    document.querySelector('.btn-temu').innerText = t.unlock_btn;
    document.querySelector('.locker-card h3').innerText = t.locker_h3;
    document.querySelector('.locker-card p').innerText = t.locker_p;
}

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
    const text = "Amazing deals found here! 🎁 " + window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
};

document.addEventListener('mousedown', loadAd, {once:true});
document.addEventListener('touchstart', loadAd, {once:true});
window.onload = applyTranslation;
