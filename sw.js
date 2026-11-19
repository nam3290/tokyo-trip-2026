/* 도쿄 3박 4일 오프라인 캐시
 * · 일정/HTML/JS = network-first (수정 후 push 하면 바로 최신, 오프라인일 때만 캐시)
 * · 이미지·아이콘 = cache-first (용량이 커서 한 번 받으면 재사용)
 * 실패해도 페이지 동작에는 영향이 없습니다.
 */
const CACHE = "tokyo-trip-v3";
const ASSETS = [
 "./",
 "./index.html",
 "./manifest.json",
 "./assets/style.css",
 "./assets/app.js",
 "./data/itinerary.js",
 "./icons/apple-touch-icon.png",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./images/akasaka-market.jpg",
 "./images/arcteryx.jpg",
 "./images/beams.jpg",
 "./images/cote-ciel.jpg",
 "./images/danton.jpg",
 "./images/duffle-kapital.jpg",
 "./images/ebisu-station.jpg",
 "./images/freaks.jpg",
 "./images/ginza.jpg",
 "./images/hachiko.jpg",
 "./images/harajuku-station.jpg",
 "./images/harry-potter.jpg",
 "./images/hummingbirds.jpg",
 "./images/isetan.jpg",
 "./images/kapital.jpg",
 "./images/kitsune.jpg",
 "./images/komehyo.jpg",
 "./images/kyobashi.jpg",
 "./images/lbreath.jpg",
 "./images/legs-kapital.jpg",
 "./images/limousine.jpg",
 "./images/miyashita-park.jpg",
 "./images/montbell.jpg",
 "./images/muji-ginza.jpg",
 "./images/narita-arrival.jpg",
 "./images/narita-departure.jpg",
 "./images/nex.jpg",
 "./images/okadaya.jpg",
 "./images/omotesando.jpg",
 "./images/oshmans.jpg",
 "./images/patagonia.jpg",
 "./images/r-bluesky.jpg",
 "./images/r-hachibei.jpg",
 "./images/r-hatsume.jpg",
 "./images/r-itsuki.jpg",
 "./images/r-katsugyu.jpg",
 "./images/r-kissa-you.jpg",
 "./images/r-kyotatsu.jpg",
 "./images/r-motomura.jpg",
 "./images/r-muji-diner.jpg",
 "./images/r-ralphs.jpg",
 "./images/r-seamon.jpg",
 "./images/r-shimpachi.jpg",
 "./images/r-tanaka.jpg",
 "./images/r-tsujihan.jpg",
 "./images/r-uoya.jpg",
 "./images/r-ushigoro.jpg",
 "./images/r-yoroniku.jpg",
 "./images/ragtag.jpg",
 "./images/ralph-lauren.jpg",
 "./images/rectohall.jpg",
 "./images/roppongi-hills.jpg",
 "./images/roppongi-view.jpg",
 "./images/s-hatou.jpg",
 "./images/s-kitte.jpg",
 "./images/s-omokado.jpg",
 "./images/s-tokei.jpg",
 "./images/s-tokichi.jpg",
 "./images/secondstreet.jpg",
 "./images/shibuya-crossing.jpg",
 "./images/shibuya-donki.jpg",
 "./images/shinjuku-sanchome.jpg",
 "./images/shinjuku-station.jpg",
 "./images/sunhouse.jpg",
 "./images/tnf-marunouchi.jpg",
 "./images/tokyo-forum.jpg",
 "./images/tokyo-station.jpg",
 "./images/washington-hotel.jpg",
 "./images/yurakucho.jpg"
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
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
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

  if (isImage(url)) event.respondWith(cacheFirst(req));
  else if (isDocument(req, url)) event.respondWith(networkFirst(req));
  else event.respondWith(networkFirst(req));
});
