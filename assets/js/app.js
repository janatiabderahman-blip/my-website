const SITE_CONFIG = {
    ad: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN",
        "https://s.click.aliexpress.com/e/_c3m4lztp"
    ],
    temu: "https://temu.to/k/ehsqckgdgv7"
};

function loadAds() {
    const s = document.createElement('script');
    s.src = SITE_CONFIG.ad;
    document.body.appendChild(s);
}

window.goAli = (i) => { window.location.href = SITE_CONFIG.ali[i]; };
window.openLocker = () => { document.getElementById('locker-modal').style.display = 'flex'; };

window.onload = () => {
    if(navigator.language.startsWith('ar')) {
        document.body.style.direction = 'rtl';
    }
    // إظهار إشعارات وهمية لزيادة الثقة
    setInterval(() => {
        const notif = document.getElementById('live-notif');
        notif.innerText = "شخص ما حصل للتو على قسيمة $100";
        notif.style.display = 'block';
        setTimeout(() => { notif.style.display = 'none'; }, 3000);
    }, 15000);
};

document.addEventListener('mousedown', loadAds, {once:true});
