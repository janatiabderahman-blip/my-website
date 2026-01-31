const SITE_CONFIG = {
    ad: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN",
        "https://s.click.aliexpress.com/e/_c3m4lztp"
    ]
};

const proofs = ["Sarah from UAE claimed $100 Coupon", "Ahmed from KSA unlocked Temu Gift", "Mounir from Morocco got 90% OFF"];

function showLiveProof() {
    const el = document.getElementById('live-notif');
    el.innerText = proofs[Math.floor(Math.random()*proofs.length)];
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 4000);
}

let adTriggered = false;
function loadAd() {
    if(adTriggered) return;
    const s = document.createElement('script');
    s.src = SITE_CONFIG.ad;
    document.body.appendChild(s);
    adTriggered = true;
}

window.goAli = (i) => { window.location.href = SITE_CONFIG.ali[i]; };
window.openLocker = () => { document.getElementById('locker-modal').style.display = 'flex'; };

window.onload = () => {
    setInterval(showLiveProof, 10000);
    if(navigator.language.startsWith('ar')) {
        document.body.style.direction = 'rtl';
        document.getElementById('h1').innerText = "تسوق بذكاء. عروض حصرية 2026.";
    }
};

document.addEventListener('mousedown', loadAd, {once:true});
