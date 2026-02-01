// FixlyHub — Advanced Service Worker
const CACHE_NAME = "fixlyhub-cache-v1";
const ASSETS_TO_CACHE = [
  "/", 
  "/FixlyHub/",
  "index.html",
  "offers.html",
  "blog.html",
  "contact.html",
  "post.html",
  "assets/img/favicon.png",
  "assets/css/style.css"
];

// Install event — cache essential files
self.addEventListener("install", event => {
  console.log("FixlyHub Service Worker Installed");

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );

  self.skipWaiting(); // Activate immediately
});

// Activate event — cleanup old caches
self.addEventListener("activate", event => {
  console.log("FixlyHub Service Worker Activated");

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

// Fetch event — serve cached content when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          // Optional: fallback page
          return caches.match("index.html");
        })
      );
    })
  );
});

// Push Notifications
self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  self.registration.showNotification(data.title || "FixlyHub Update", {
    body: data.body || "New deals are available now!",
    icon: "assets/img/favicon.png",
    badge: "assets/img/favicon.png"
  });
});
