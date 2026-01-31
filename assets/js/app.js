const CONFIG = {
    ad: "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js",
    ali: [
        "https://s.click.aliexpress.com/e/_c3OAbIL1",
        "https://s.click.aliexpress.com/e/_c2IwzuZV",
        "https://s.click.aliexpress.com/e/_c34H1lJN",
        "https://s.click.aliexpress.com/e/_c3m4lztp"
    ]
};

function loadAdsterra() {
    const s = document.createElement('script');
    s.src = CONFIG.ad;
    document.body.appendChild(s);
}

window.goAli = (i) => { window.location.href = CONFIG.ali[i]; };
window.openLocker = () => { document.getElementById('locker-modal').style.display = 'flex'; };

window.onload = () => {
    if(navigator.language.startsWith('ar')) {
        document.body.style.direction = 'rtl';
        document.getElementById('h-title').innerText = "عروض حصرية 2026";
        document.getElementById('h-desc').innerText = "تم اختيارك للحصول على خصومات تصل إلى 99%.";
    }
};

document.addEventListener('click', loadAdsterra, {once: true});
