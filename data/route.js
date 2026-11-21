/* 도쿄 3박 4일 — 동선 지도 데이터 (data/itinerary.js의 items 순서 + 장소 좌표)
 * 일정을 고치면 이 파일도 다시 만들거나 stops의 좌표만 손보면 됩니다.
 */
window.TRIP_ROUTE = {
 "meta": {
  "updated": "2026-11-20",
  "center": [
   35.6812,
   139.7671
  ],
  "note": "매장 위치는 기존 지도 데이터와 THE H.W.DOG&CO 공식 사이트의 Google 지도 좌표를 참고. 각 방문지의 시간·이름·우선순위는 itinerary.js와 동기화되며 전철·도보 링크를 구분합니다."
 },
 "days": [
  {
   "id": "d1",
   "label": "1일차 · 11/21(토)",
   "tab": "1일차 (토)",
   "date": "11/21",
   "weekday": "토",
   "title": "도착 · 나리타 → 신주쿠",
   "color": "#d1503a",
   "stops": [
    {
     "id": "d1-2",
     "time": "17:10",
     "name": "나리타국제공항 제2터미널 도착",
     "jp": "成田空港 第2ターミナル",
     "lat": 35.772414,
     "lng": 140.38868,
     "map": "https://maps.google.com/?cid=525036222910129328",
     "kind": "spot",
     "n": 1
    },
    {
     "id": "d1-3",
     "time": "20:15",
     "name": "신주쿠 워싱턴 호텔 본관 체크인",
     "jp": "新宿ワシントンホテル 本館",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "hotel",
     "n": 2
    },
    {
     "id": "d1-4",
     "time": "21:45",
     "name": "MEGA 돈키호테 시부야",
     "jp": "MEGAドン・キホーテ 渋谷",
     "lat": 35.660387,
     "lng": 139.697817,
     "map": "https://maps.google.com/?cid=9124525651654476405",
     "kind": "spot",
     "n": 3
    },
    {
     "id": "d1-5",
     "time": "23:20",
     "name": "숙소 복귀 · 취침",
     "jp": "新宿ワシントンホテル",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "hotel",
     "n": 4
    }
   ],
   "segments": [
    {
     "label": "전철/버스 · 17:10 나리타국제공항 제2터미널 도착 → 20:15 신주쿠 워싱턴 호텔 본관 체크인",
     "from": 1,
     "to": 2,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.772414,140.38868&destination=35.686915,139.693276&travelmode=transit"
    },
    {
     "label": "전철/버스 · 20:15 신주쿠 워싱턴 호텔 본관 체크인 → 21:45 MEGA 돈키호테 시부야",
     "from": 2,
     "to": 3,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.686915,139.693276&destination=35.660387,139.697817&travelmode=transit"
    },
    {
     "label": "전철/버스 · 21:45 MEGA 돈키호테 시부야 → 23:20 숙소 복귀 · 취침",
     "from": 3,
     "to": 4,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.660387,139.697817&destination=35.686915,139.693276&travelmode=transit"
    }
   ]
  },
  {
   "id": "d2",
   "label": "2일차 · 11/22(일)",
   "tab": "2일차 (일)",
   "date": "11/22",
   "weekday": "일",
   "title": "신주쿠 → 아카사카 → 하라주쿠 → 시부야",
   "color": "#2f6f5e",
   "stops": [
    {
     "id": "d2-meal-아침",
     "time": "08:30",
     "name": "신파치 식당 신주쿠 (しんぱち食堂)",
     "jp": "신파치 식당 신주쿠",
     "lat": 35.689029,
     "lng": 139.697135,
     "map": "https://maps.google.com/?cid=14023482379824896455",
     "kind": "meal",
     "n": 1
    },
    {
     "id": "d2-1",
     "time": "09:40",
     "name": "호텔 출발",
     "jp": "新宿ワシントンホテル 出発",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "hotel",
     "n": 2
    },
    {
     "id": "d2-2",
     "time": "10:00",
     "name": "이세탄 신주쿠 (본관·멘즈관)",
     "jp": "伊勢丹新宿店",
     "lat": 35.691574,
     "lng": 139.704647,
     "map": "https://maps.google.com/?cid=10048688310454447541",
     "kind": "spot",
     "n": 3
    },
    {
     "id": "d2-3",
     "time": "11:07",
     "name": "오카다야 빌딩 — 키디랜드 1~4F · 짱구 5F",
     "jp": "オカダヤビル",
     "lat": 35.692985,
     "lng": 139.700972,
     "map": "https://maps.google.com/?cid=15038129067309236490",
     "kind": "spot",
     "n": 4
    },
    {
     "id": "d2-4",
     "time": "11:32",
     "name": "ARC'TERYX 신주쿠 브랜드 스토어",
     "jp": "アークテリクス 新宿ブランドストア",
     "lat": 35.692557,
     "lng": 139.701382,
     "map": "https://maps.google.com/?cid=12258450041815044576",
     "kind": "spot",
     "n": 5
    },
    {
     "id": "d2-4b",
     "time": "11:55",
     "name": "KOMEHYO 신주쿠 (남성관 · 여성관 · 시계주얼리관)",
     "jp": "コメ兵 新宿店",
     "lat": 35.692626,
     "lng": 139.702761,
     "map": "https://maps.google.com/?cid=17725956926650995637",
     "kind": "spot",
     "n": 6
    },
    {
     "id": "d2-5",
     "time": "12:35",
     "name": "BEAMS 신주쿠 (루미네에스트 B2F)",
     "jp": "ビームス 新宿",
     "lat": 35.691862,
     "lng": 139.700995,
     "map": "https://maps.google.com/?cid=4571059030974543044",
     "kind": "spot",
     "n": 7
    },
    {
     "id": "d2-6",
     "time": "13:20",
     "name": "아카사카 벼룩시장 (아크힐즈 카라얀 광장)",
     "jp": "赤坂蚤の市 · アークヒルズ カラヤン広場",
     "lat": 35.666664,
     "lng": 139.740359,
     "map": "https://maps.google.com/?cid=7184286848769593977",
     "kind": "spot",
     "n": 8
    },
    {
     "id": "d2-7",
     "time": "16:00",
     "name": "OSHMAN'S 하라주쿠",
     "jp": "オッシュマンズ 原宿店",
     "lat": 35.669384,
     "lng": 139.705856,
     "map": "https://maps.google.com/?cid=9882180480728706498",
     "kind": "spot",
     "n": 9
    },
    {
     "id": "d2-8",
     "time": "16:32",
     "name": "Hummingbirds' hill shop",
     "jp": "ハミングバーズヒル ショップ",
     "lat": 35.671944,
     "lng": 139.709053,
     "map": "https://maps.google.com/?cid=1374394553814675223",
     "kind": "spot",
     "n": 10
    },
    {
     "id": "d2-9",
     "time": "16:57",
     "name": "THE H.W. DOG&CO. — 모자 전문점",
     "jp": "神宮前 3-28-10 ウッズビル 1F",
     "lat": 35.6721344,
     "lng": 139.7095819,
     "map": "https://maps.google.com/?cid=2191060513098770626&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
     "kind": "spot",
     "n": 11
    },
    {
     "id": "d2-10",
     "time": "17:20",
     "name": "Ralph Lauren Omotesando",
     "jp": "ラルフローレン 表参道",
     "lat": 35.66822,
     "lng": 139.707332,
     "map": "https://maps.google.com/?cid=18134942615298900179",
     "kind": "spot",
     "n": 12
    },
    {
     "id": "d2-11",
     "time": "17:40",
     "name": "Harry Potter Shop Harajuku",
     "jp": "ハリー・ポッター ショップ 原宿",
     "lat": 35.668649,
     "lng": 139.70441,
     "map": "https://maps.google.com/?cid=3840542123008475986",
     "kind": "spot",
     "n": 13,
     "priority": "optional"
    },
    {
     "id": "d2-12",
     "time": "17:55",
     "name": "RAGTAG 하라주쿠",
     "jp": "ラグタグ 原宿",
     "lat": 35.665757,
     "lng": 139.705218,
     "map": "https://maps.google.com/?cid=15427969971660052394",
     "kind": "spot",
     "n": 14
    },
    {
     "id": "d2-13",
     "time": "18:10",
     "name": "DANTON TOKYO",
     "jp": "ダントン 東京",
     "lat": 35.666232,
     "lng": 139.704002,
     "map": "https://maps.google.com/?cid=3286721948833497824",
     "kind": "spot",
     "n": 15
    },
    {
     "id": "d2-14",
     "time": "18:25",
     "name": "Patagonia Tokyo Shibuya",
     "jp": "パタゴニア 東京 渋谷",
     "lat": 35.665217,
     "lng": 139.703582,
     "map": "https://maps.google.com/?cid=9042211536900144705",
     "kind": "spot",
     "n": 16
    },
    {
     "id": "d2-15",
     "time": "19:00",
     "name": "Maison Kitsuné 미야시타파크 (RAYARD NORTH 2F)",
     "jp": "メゾン キツネ 宮下パーク",
     "lat": 35.662638,
     "lng": 139.701827,
     "map": "https://maps.google.com/?cid=14579441227567108828",
     "kind": "spot",
     "n": 17
    },
    {
     "id": "d2-16",
     "time": "19:18",
     "name": "FREAK'S STORE 시부야",
     "jp": "フリークス ストア 渋谷",
     "lat": 35.662956,
     "lng": 139.700405,
     "map": "https://maps.google.com/?cid=13016080179487620260",
     "kind": "spot",
     "n": 18,
     "priority": "optional"
    },
    {
     "id": "d2-17",
     "time": "19:35",
     "name": "SUN HOUSE 진난",
     "jp": "サンハウス 神南",
     "lat": 35.66303,
     "lng": 139.69939,
     "map": "https://maps.google.com/?cid=14088655221653192636",
     "kind": "spot",
     "n": 19
    },
    {
     "id": "d2-18",
     "time": "20:10",
     "name": "2nd STREET 시부야 진난점",
     "jp": "セカンドストリート 渋谷神南店",
     "lat": 35.661358,
     "lng": 139.701052,
     "map": "https://maps.google.com/?cid=3790135795445788292",
     "kind": "spot",
     "n": 20
    },
    {
     "id": "d2-19",
     "time": "20:50",
     "name": "신주쿠 워싱턴 복귀",
     "jp": "新宿ワシントンホテル",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "spot",
     "n": 21
    }
   ],
   "segments": [
    {
     "label": "도보 · 08:30 신파치 식당 신주쿠 (しんぱち食堂) → 11:32 ARC'TERYX 신주쿠 브랜드 스토어",
     "from": 1,
     "to": 5,
     "count": 5,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.689029,139.697135&destination=35.692557,139.701382&travelmode=walking&waypoints=35.686915,139.693276%7C35.691574,139.704647%7C35.692985,139.700972"
    },
    {
     "label": "도보 · 11:32 ARC'TERYX 신주쿠 브랜드 스토어 → 12:35 BEAMS 신주쿠 (루미네에스트 B2F)",
     "from": 5,
     "to": 7,
     "count": 3,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.692557,139.701382&destination=35.691862,139.700995&travelmode=walking&waypoints=35.692626,139.702761"
    },
    {
     "label": "전철/버스 · 12:35 BEAMS 신주쿠 (루미네에스트 B2F) → 13:20 아카사카 벼룩시장 (아크힐즈 카라얀 광장)",
     "from": 7,
     "to": 8,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.691862,139.700995&destination=35.666664,139.740359&travelmode=transit"
    },
    {
     "label": "전철/버스 · 13:20 아카사카 벼룩시장 (아크힐즈 카라얀 광장) → 16:00 OSHMAN'S 하라주쿠",
     "from": 8,
     "to": 9,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.666664,139.740359&destination=35.669384,139.705856&travelmode=transit"
    },
    {
     "label": "도보 · 16:00 OSHMAN'S 하라주쿠 → 17:40 Harry Potter Shop Harajuku",
     "from": 9,
     "to": 13,
     "count": 5,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.669384,139.705856&destination=35.668649,139.70441&travelmode=walking&waypoints=35.671944,139.709053%7C35.6721344,139.7095819%7C35.66822,139.707332"
    },
    {
     "label": "도보 · 17:40 Harry Potter Shop Harajuku → 19:00 Maison Kitsuné 미야시타파크 (RAYARD NORTH 2F)",
     "from": 13,
     "to": 17,
     "count": 5,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.668649,139.70441&destination=35.662638,139.701827&travelmode=walking&waypoints=35.665757,139.705218%7C35.666232,139.704002%7C35.665217,139.703582"
    },
    {
     "label": "도보 · 19:00 Maison Kitsuné 미야시타파크 (RAYARD NORTH 2F) → 20:10 2nd STREET 시부야 진난점",
     "from": 17,
     "to": 20,
     "count": 4,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.662638,139.701827&destination=35.661358,139.701052&travelmode=walking&waypoints=35.662956,139.700405%7C35.66303,139.69939"
    },
    {
     "label": "전철/버스 · 20:10 2nd STREET 시부야 진난점 → 20:50 신주쿠 워싱턴 복귀",
     "from": 20,
     "to": 21,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.661358,139.701052&destination=35.686915,139.693276&travelmode=transit"
    }
   ]
  },
  {
   "id": "d3",
   "label": "3일차 · 11/23(월·공휴일)",
   "tab": "3일차 (월)",
   "date": "11/23",
   "weekday": "월 · 공휴일",
   "title": "유라쿠초 → 마루노우치 → 긴자 → 에비스 → 롯폰기",
   "color": "#b0741e",
   "stops": [
    {
     "id": "d3-1",
     "time": "08:20",
     "name": "호텔 출발 → 신주쿠역",
     "jp": "新宿駅 08:38発",
     "lat": 35.689607,
     "lng": 139.700571,
     "map": "https://maps.google.com/?cid=2031864442327465429",
     "kind": "hotel",
     "n": 1
    },
    {
     "id": "d3-2",
     "time": "09:00",
     "name": "오에도 골동품 시장 (도쿄국제포럼 지상광장)",
     "jp": "大江戸骨董市 · 東京国際フォーラム地上広場",
     "lat": 35.677141,
     "lng": 139.764262,
     "map": "https://maps.google.com/?cid=18267525591821019257",
     "kind": "spot",
     "n": 2
    },
    {
     "id": "d3-3",
     "time": "11:00",
     "name": "THE NORTH FACE 마루노우치",
     "jp": "ザ・ノース・フェイス 丸の内",
     "lat": 35.682174,
     "lng": 139.764507,
     "map": "https://maps.google.com/?cid=1025198435240098873",
     "kind": "spot",
     "n": 3
    },
    {
     "id": "d3-4",
     "time": "11:45",
     "name": "mont-bell 도쿄 교바시점",
     "jp": "モンベル 東京京橋店",
     "lat": 35.675655,
     "lng": 139.769057,
     "map": "https://maps.google.com/?cid=18111296058751286170",
     "kind": "spot",
     "n": 4
    },
    {
     "id": "d3-5",
     "time": "12:30",
     "name": "다이코쿠야 긴자점",
     "jp": "大黒屋 銀座店 · PAWN & REUSE BRAND STORE",
     "lat": 35.67161,
     "lng": 139.76299,
     "map": "https://maps.google.com/?cid=13147557066627092318",
     "kind": "spot",
     "n": 5
    },
    {
     "id": "d3-6",
     "time": "14:00",
     "name": "MUJI 긴자 (무인양품)",
     "jp": "無印良品 銀座",
     "lat": 35.673214,
     "lng": 139.765368,
     "map": "https://maps.google.com/?cid=771702428473144825",
     "kind": "spot",
     "n": 6
    },
    {
     "id": "d3-7",
     "time": "15:45",
     "name": "KAPITAL TOKYO NAKED STORE",
     "jp": "キャピタル 東京ネイキッドストア",
     "lat": 35.643709,
     "lng": 139.709824,
     "map": "https://maps.google.com/?cid=3504688113222414750",
     "kind": "spot",
     "n": 7
    },
    {
     "id": "d3-8",
     "time": "16:07",
     "name": "Duffle with KAPITAL",
     "jp": "ダッフル ウィズ キャピタル",
     "lat": 35.642786,
     "lng": 139.710166,
     "map": "https://maps.google.com/?cid=4955929520084932929",
     "kind": "spot",
     "n": 8
    },
    {
     "id": "d3-9",
     "time": "16:30",
     "name": "KAPITAL Legs Craftsman Store",
     "jp": "キャピタル レッグス クラフツマンストア",
     "lat": 35.642106,
     "lng": 139.709148,
     "map": "https://maps.google.com/?cid=8243935970920433661",
     "kind": "spot",
     "n": 9
    },
    {
     "id": "d3-10",
     "time": "16:55",
     "name": "RECTOHALL (에비스)",
     "jp": "レクトホール",
     "lat": 35.642155,
     "lng": 139.708874,
     "map": "https://maps.google.com/?cid=16254508638521557928",
     "kind": "spot",
     "n": 10
    },
    {
     "id": "d3-11",
     "time": "17:45",
     "name": "롯폰기 힐즈 크리스마스 마켓 (오야네 광장)",
     "jp": "六本木ヒルズ クリスマスマーケット",
     "lat": 35.659932,
     "lng": 139.729478,
     "map": "https://maps.google.com/?cid=8309528121310561895",
     "kind": "spot",
     "n": 11
    },
    {
     "id": "d3-12",
     "time": "18:25",
     "name": "게야키자카 일루미네이션",
     "jp": "けやき坂イルミネーション",
     "lat": 35.659247,
     "lng": 139.729942,
     "map": "https://maps.google.com/?cid=12063536569698439509",
     "kind": "spot",
     "n": 12
    },
    {
     "id": "d3-13",
     "time": "19:10",
     "name": "L-Breath 신주쿠",
     "jp": "エルブレス 新宿",
     "lat": 35.689212,
     "lng": 139.702346,
     "map": "https://maps.google.com/?cid=67978450380853922",
     "kind": "spot",
     "n": 13,
     "priority": "optional"
    }
   ],
   "segments": [
    {
     "label": "전철/버스 · 08:20 호텔 출발 → 신주쿠역 → 09:00 오에도 골동품 시장 (도쿄국제포럼 지상광장)",
     "from": 1,
     "to": 2,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.689607,139.700571&destination=35.677141,139.764262&travelmode=transit"
    },
    {
     "label": "도보 · 09:00 오에도 골동품 시장 (도쿄국제포럼 지상광장) → 14:00 MUJI 긴자 (무인양품)",
     "from": 2,
     "to": 6,
     "count": 5,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.677141,139.764262&destination=35.673214,139.765368&travelmode=walking&waypoints=35.682174,139.764507%7C35.675655,139.769057%7C35.67161,139.76299"
    },
    {
     "label": "전철/버스 · 14:00 MUJI 긴자 (무인양품) → 15:45 KAPITAL TOKYO NAKED STORE",
     "from": 6,
     "to": 7,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.673214,139.765368&destination=35.643709,139.709824&travelmode=transit"
    },
    {
     "label": "도보 · 15:45 KAPITAL TOKYO NAKED STORE → 16:55 RECTOHALL (에비스)",
     "from": 7,
     "to": 10,
     "count": 4,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.643709,139.709824&destination=35.642155,139.708874&travelmode=walking&waypoints=35.642786,139.710166%7C35.642106,139.709148"
    },
    {
     "label": "전철/버스 · 16:55 RECTOHALL (에비스) → 17:45 롯폰기 힐즈 크리스마스 마켓 (오야네 광장)",
     "from": 10,
     "to": 11,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.642155,139.708874&destination=35.659932,139.729478&travelmode=transit"
    },
    {
     "label": "도보 · 17:45 롯폰기 힐즈 크리스마스 마켓 (오야네 광장) → 18:25 게야키자카 일루미네이션",
     "from": 11,
     "to": 12,
     "count": 2,
     "mode": "walking",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.659932,139.729478&destination=35.659247,139.729942&travelmode=walking"
    },
    {
     "label": "전철/버스 · 18:25 게야키자카 일루미네이션 → 19:10 L-Breath 신주쿠",
     "from": 12,
     "to": 13,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.659247,139.729942&destination=35.689212,139.702346&travelmode=transit"
    }
   ]
  },
  {
   "id": "d4",
   "label": "4일차 · 11/24(화)",
   "tab": "4일차 (화)",
   "date": "11/24",
   "weekday": "화",
   "title": "귀국 · 신주쿠 → 나리타",
   "color": "#3a5b8c",
   "stops": [
    {
     "id": "d4-2",
     "time": "09:25",
     "name": "체크아웃 → 신주쿠역",
     "jp": "新宿駅 へ",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "spot",
     "n": 1
    },
    {
     "id": "d4-3",
     "time": "10:09",
     "name": "N'EX 17호 탑승 (신주쿠역 5번선)",
     "jp": "成田エクスプレス 17号",
     "lat": 35.689607,
     "lng": 139.700571,
     "map": "https://maps.google.com/?cid=2031864442327465429",
     "kind": "spot",
     "n": 2
    },
    {
     "id": "d4-4",
     "time": "11:23",
     "name": "나리타 T2 · 세관 확인 → 위탁수하물",
     "jp": "成田空港 第2ターミナル",
     "lat": 35.772414,
     "lng": 140.38868,
     "map": "https://maps.google.com/?cid=525036222910129328",
     "kind": "spot",
     "n": 3
    }
   ],
   "segments": [
    {
     "label": "전철/버스 · 09:25 체크아웃 → 신주쿠역 → 10:09 N'EX 17호 탑승 (신주쿠역 5번선)",
     "from": 1,
     "to": 2,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.686915,139.693276&destination=35.689607,139.700571&travelmode=transit"
    },
    {
     "label": "전철/버스 · 10:09 N'EX 17호 탑승 (신주쿠역 5번선) → 11:23 나리타 T2 · 세관 확인 → 위탁수하물",
     "from": 2,
     "to": 3,
     "count": 2,
     "mode": "transit",
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.689607,139.700571&destination=35.772414,140.38868&travelmode=transit"
    }
   ]
  }
 ]
};
