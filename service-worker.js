self.addEventListener("install", () => {
  console.log("FixlyHub Service Worker Installed");
});

self.addEventListener("push", function(event) {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "assets/img/favicon.png"
  });
});
