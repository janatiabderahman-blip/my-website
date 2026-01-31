// 1. Adsterra (Monetization)
let adLoaded = false;
function triggerAds() {
    if(!adLoaded) {
        const s = document.createElement('script');
        s.src = "https://pl28602600.effectivegatecpm.com/ea/11/8e/ea118ebfb63558281df1adbb61290596.js";
        document.body.appendChild(s);
        adLoaded = true;
    }
}
window.addEventListener('click', triggerAds, {once:true});

// 2. AliExpress Links (Direct Redirect)
const aliLinks = [
    "https://s.click.aliexpress.com/e/_c3OAbIL1",
    "https://s.click.aliexpress.com/e/_c2IwzuZV",
    "https://s.click.aliexpress.com/e/_c34H1lJN",
    "https://s.click.aliexpress.com/e/_c3m4lztp"
];
window.goAli = (index) => { window.location.href = aliLinks[index]; };

// 3. MyLead Locker
window.openLocker = () => { document.getElementById('locker-overlay').style.display = 'flex'; };
