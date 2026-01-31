(function() {
    const links = {
        ali1: "https://s.click.aliexpress.com/e/_oE1Vz9K",
        ali2: "https://s.click.aliexpress.com/e/_ooS317K",
        ali3: "https://s.click.aliexpress.com/e/_olI81i6",
        ali4: "https://s.click.aliexpress.com/e/_olpM2Nq",
        temu: "https://temu.to/m/u1325o45b3p",
        mylead: "https://smarturl.it/FixlyHubLocker"
    };
    Object.keys(links).forEach(id => {
        const el = document.getElementById(id);
        if(el) el.href = links[id];
    });
    console.log("💎 FixlyHub: System Optimized & Polished.");
})();
