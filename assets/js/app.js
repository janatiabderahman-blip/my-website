/**
 * 👑 THE SOVEREIGN CORE (2026) - OPEN ACCESS
 * AUTHORIZED BY: THE DIRECTOR | OWNER: ABDULRAHMAN
 */
(function() {
    "use strict";

    // تفعيل النظام للجمهور فوراً (بدون قيود دخول)
    window.onload = function() {
        console.log("%c 🚀 FIXLYHUB: SYSTEM LIVE & OPEN ACCESS ", "color: white; background: #27ae60; padding: 10px; font-weight: bold;");
        initializeSystem();
    };

    function initializeSystem() {
        // الروابط الستة المعتمدة
        window.links = {
            ali1: "https://s.click.aliexpress.com/e/_oE1Vz9K",
            ali2: "https://s.click.aliexpress.com/e/_ooS317K",
            ali3: "https://s.click.aliexpress.com/e/_olI81i6",
            ali4: "https://s.click.aliexpress.com/e/_olpM2Nq",
            temu: "https://temu.to/m/u1325o45b3p",
            mylead: "https://smarturl.it/FixlyHubLocker"
        };
        
        // تفعيل أزرار الربح برمجياً
        const buttons = document.querySelectorAll('.btn-profit');
        buttons.forEach((btn, index) => {
            const keys = Object.keys(window.links);
            btn.href = window.links[keys[index]] || window.links.ali1;
            btn.target = "_blank";
        });

        document.body.style.display = "block";
        console.log("💎 All Profit Streams are now Publicly Active.");
    }
})();
