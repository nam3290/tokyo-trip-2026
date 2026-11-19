# 도쿄 3박 4일 (2026.11.21–24)

가족 도쿄 여행 일정 모바일 페이지 — **https://nam3290.github.io/tokyo-trip-2026/**

아이폰 사파리에서 열고 **공유 → 홈 화면에 추가**하면 앱처럼 열립니다(오프라인 캐시 포함).
검색엔진에는 노출되지 않습니다(`noindex`).

## 구조
- `index.html` — 화면 틀 (데이터를 읽어 그림)
- `data/itinerary.js` — **일정·식사·맛집·꿀팁 데이터 (여기만 고치면 됩니다)**
- `assets/style.css`, `assets/app.js` — 디자인·동작
- `images/` — 장소·맛집 사진 69장 (880×587)
- `manifest.json`, `sw.js`, `icons/` — 홈 화면 앱·오프라인

## 일정 고치는 법
1. `data/itinerary.js`에서 원하는 날짜의 `items` / `meals` / `spots` 수정
2. `git add -A && git commit -m "일정 수정" && git push`
3. 1~2분 뒤 Pages에 반영 (HTML·JS·JSON은 네트워크 우선이라 새로고침만 하면 최신)

사진은 `images/`에 같은 파일명으로 교체하면 됩니다. 새 사진을 추가하면 `sw.js`의 `ASSETS` 목록에도 넣고 `CACHE` 버전을 올리세요.
