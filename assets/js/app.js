"use strict";
const CONFIG = {
    ad: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN",
        "https://s.click.aliexpress.com/e/_c3m4lztp"
    ],
    temu: "https://temu.to/k/ehsqckgdgv7"
};

const proofs = ["Sara from UAE claimed $100", "Omar from KSA unlocked gift", "Yassine from Morocco got 90% OFF", "Elena from USA claimed Reward"];

function showProof() {
    const p = document.getElementById('proof');
    p.innerText = proofs[Math.floor(Math.random()*proofs.length)];
    p.style.display = 'block';
    setTimeout(() => { p.style.display = 'none'; }, 4000);
}

let adsLoaded = false;
function triggerAds() {
    if(adsLoaded) return;
    const s = document.createElement('script');
    s.src = CONFIG.ad;
    document.body.appendChild(s);
    adsLoaded = true;
}

window.goAli = (i) => { window.location.href = CONFIG.ali[i]; };
window.openLocker = () => { document.getElementById('locker-modal').style.display = 'flex'; };

window.onload = () => {
    setInterval(showProof, 12000);
    if(navigator.language.startsWith('ar')) {
        document.body.style.direction = 'rtl';
        document.getElementById('main-h1').innerText = "هدايا حصرية 2026";
        document.getElementById('main-p').innerText = "احصل على منتجات مجانية وكوبونات خصم 90% فوراً.";
    }
};

document.addEventListener('touchstart', triggerAds, {once:true});
document.addEventListener('mousedown', triggerAds, {once:true});
