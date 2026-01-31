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

// Social Proof Data
const proofs = [
    { name: "Ahmed S.", city: "Riyadh", action: "claimed $100 Coupon" },
    { name: "Sara W.", city: "Casablanca", action: "unlocked Temu Gift" },
    { name: "Mounir B.", city: "Dubai", action: "got 90% Discount" },
    { name: "John D.", city: "London", action: "unlocked Secret Deal" }
];

function showNotification() {
    const note = document.getElementById('notification');
    const data = proofs[Math.floor(Math.random() * proofs.length)];
    const lang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    
    const msg = lang === 'ar' ? 
        `قام ${data.name} من ${data.city} بـ ${data.action === 'claimed $100 Coupon' ? 'الحصول على كوبون $100' : 'فتح الهدية السرية'}` :
        `${data.name} from ${data.city} just ${data.action}`;
    
    document.getElementById('note-msg').innerText = msg;
    note.style.display = 'flex';
    setTimeout(() => { note.style.display = 'none'; }, 4000);
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        if (--timer < 0) timer = duration;
    }, 1000);
}

let adInjected = false;
function loadAd() {
    if(adInjected) return;
    const s = document.createElement('script');
    s.src = CONFIG.ad;
    document.body.appendChild(s);
    adInjected = true;
}

window.onload = () => {
    startTimer(600, document.querySelector('#timer'));
    setInterval(showNotification, 10000);
    if(navigator.language.startsWith('ar')) {
        document.body.style.direction = 'rtl';
        document.getElementById('scarcity-text').innerText = "عجل! بقي 7 قسائم فقط لهذا اليوم.";
    }
};

window.goAli = (i) => { window.open(CONFIG.ali[i], '_blank'); };
window.openLocker = () => { document.getElementById('locker').style.display = 'flex'; };
window.shareWA = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent("Check this amazing deal! " + window.location.href)}`, '_blank');
};
document.addEventListener('mousedown', loadAd, {once:true});
