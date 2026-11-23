/* 다낭 3박 5일 오프라인 캐시 (기존 도쿄 사이트와 완전히 독립)
 * · HTML/JS/CSS = network-first (수정 후 push 하면 바로 최신, 오프라인일 때만 캐시)
 * · 이미지·아이콘 = cache-first
 * 실패해도 페이지 동작에는 영향이 없습니다.
 */
const CACHE = "danang-trip-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/style.css",
  "./assets/app.js",
  "./data/itinerary.js",
  "./data/places.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./images/ba-na-hills.jpg",
  "./images/babylon-spa.jpg",
  "./images/basket-boat.jpg",
  "./images/be-bien.jpg",
  "./images/be-ni-2.jpg",
  "./images/cathedral.jpg",
  "./images/chill-out-spa.jpg",
  "./images/cong-caphe.jpg",
  "./images/covered-bridge.jpg",
  "./images/danang-airport.jpg",
  "./images/danang-tower.jpg",
  "./images/dragon-bridge.jpg",
  "./images/esco-beach.jpg",
  "./images/four-seasons.jpg",
  "./images/han-market.jpg",
  "./images/heart-spa.jpg",
  "./images/hoian-night.jpg",
  "./images/hoian-oldtown.jpg",
  "./images/hotel-wyndham.jpg",
  "./images/lian.jpg",
  "./images/linh-ung.jpg",
  "./images/lotte-mart.jpg",
  "./images/lotus-massage.jpg",
  "./images/lotus-spa-mykhe.jpg",
  "./images/lounge-beach.jpg",
  "./images/love-bridge.jpg",
  "./images/madame-lan.jpg",
  "./images/maia.jpg",
  "./images/malibu.jpg",
  "./images/marble-mountain.jpg",
  "./images/moc-quan.jpg",
  "./images/morning-glory.jpg",
  "./images/my-hanh.jpg",
  "./images/my-khe.jpg",
  "./images/ong-minh.jpg",
  "./images/panda-spa.jpg",
  "./images/seafood-king.jpg",
  "./images/son-tra-night.jpg",
  "./images/the-roof.jpg",
  "./images/them-hai-san.jpg",
];

const isImage = (url) => /\/images\/|\/icons\//.test(url.pathname);
const isDocument = (req, url) => req.mode === "navigate" || /\.(html|js|json|css)$/.test(url.pathname);

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ASSETS.map((u) => cache.add(new Request(u, {cache: "reload"})).catch(() => null)));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    // 다른 사이트(도쿄 등)의 캐시는 건드리지 않고, 이 사이트의 이전 버전만 정리합니다.
    await Promise.all(keys.filter((k) => k.startsWith("danang-trip-") && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req, {cache: "no-store"});
    if (res && res.status === 200 && res.type === "basic") cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (e) {
    const hit = await cache.match(req, {ignoreSearch: true});
    if (hit) return hit;
    if (req.mode === "navigate") {
      const index = await cache.match("./index.html");
      if (index) return index;
    }
    throw e;
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, {ignoreSearch: true});
  if (hit) return hit;
  const res = await fetch(req);
  if (res && res.status === 200 && res.type === "basic") cache.put(req, res.clone()).catch(() => {});
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // 이 사이트 범위(/danang/) 밖 요청은 그대로 둡니다.
  if (!url.pathname.includes("/danang/")) return;
  if (isImage(url)) event.respondWith(cacheFirst(req));
  else event.respondWith(networkFirst(req));
});
