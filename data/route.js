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
  "note": "좌표는 각 장소 구글맵 기준. 지도는 Leaflet + OpenStreetMap(CARTO) 타일이며, 구글맵 버튼으로 앱 동선이 바로 열립니다."
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
     "time": "22:45",
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
     "label": "17:10 나리타국제공항 제2터미널 도착 → 22:45 숙소 복귀 · 취침",
     "from": 1,
     "to": 4,
     "count": 4,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.77241,140.38868&destination=35.68691,139.69328&waypoints=35.68691,139.69328|35.66039,139.69782"
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
     "time": "10:50",
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
     "time": "11:10",
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
     "time": "11:38",
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
     "time": "12:18",
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
     "time": "13:00",
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
     "time": "14:55",
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
     "time": "15:27",
     "name": "Hummingbirds' hill shop",
     "jp": "ハミングバーズヒル ショップ",
     "lat": 35.671944,
     "lng": 139.709053,
     "map": "https://maps.google.com/?cid=1374394553814675223",
     "kind": "spot",
     "n": 10
    },
    {
     "id": "d2-10",
     "time": "16:13",
     "name": "Ralph Lauren Omotesando",
     "jp": "ラルフローレン 表参道",
     "lat": 35.66822,
     "lng": 139.707332,
     "map": "https://maps.google.com/?cid=18134942615298900179",
     "kind": "spot",
     "n": 11
    },
    {
     "id": "d2-11",
     "time": "16:44",
     "name": "Harry Potter Shop Harajuku",
     "jp": "ハリー・ポッター ショップ 原宿",
     "lat": 35.668649,
     "lng": 139.70441,
     "map": "https://maps.google.com/?cid=3840542123008475986",
     "kind": "spot",
     "n": 12
    },
    {
     "id": "d2-12",
     "time": "17:10",
     "name": "RAGTAG 하라주쿠",
     "jp": "ラグタグ 原宿",
     "lat": 35.665757,
     "lng": 139.705218,
     "map": "https://maps.google.com/?cid=15427969971660052394",
     "kind": "spot",
     "n": 13
    },
    {
     "id": "d2-13",
     "time": "17:34",
     "name": "DANTON TOKYO",
     "jp": "ダントン 東京",
     "lat": 35.666232,
     "lng": 139.704002,
     "map": "https://maps.google.com/?cid=3286721948833497824",
     "kind": "spot",
     "n": 14
    },
    {
     "id": "d2-14",
     "time": "17:57",
     "name": "Patagonia Tokyo Shibuya",
     "jp": "パタゴニア 東京 渋谷",
     "lat": 35.665217,
     "lng": 139.703582,
     "map": "https://maps.google.com/?cid=9042211536900144705",
     "kind": "spot",
     "n": 15
    },
    {
     "id": "d2-15",
     "time": "18:25",
     "name": "Maison Kitsuné 미야시타파크 (RAYARD NORTH 2F)",
     "jp": "メゾン キツネ 宮下パーク",
     "lat": 35.662638,
     "lng": 139.701827,
     "map": "https://maps.google.com/?cid=14579441227567108828",
     "kind": "spot",
     "n": 16
    },
    {
     "id": "d2-16",
     "time": "18:46",
     "name": "FREAK'S STORE 시부야",
     "jp": "フリークス ストア 渋谷",
     "lat": 35.662956,
     "lng": 139.700405,
     "map": "https://maps.google.com/?cid=13016080179487620260",
     "kind": "spot",
     "n": 17
    },
    {
     "id": "d2-17",
     "time": "19:07",
     "name": "SUN HOUSE 진난",
     "jp": "サンハウス 神南",
     "lat": 35.66303,
     "lng": 139.69939,
     "map": "https://maps.google.com/?cid=14088655221653192636",
     "kind": "spot",
     "n": 18
    },
    {
     "id": "d2-18",
     "time": "19:29",
     "name": "2nd STREET 시부야 진난점",
     "jp": "セカンドストリート 渋谷神南店",
     "lat": 35.661358,
     "lng": 139.701052,
     "map": "https://maps.google.com/?cid=3790135795445788292",
     "kind": "spot",
     "n": 19
    },
    {
     "id": "d2-19",
     "time": "20:15",
     "name": "신주쿠 워싱턴 복귀",
     "jp": "新宿ワシントンホテル",
     "lat": 35.686915,
     "lng": 139.693276,
     "map": "https://maps.google.com/?cid=6872319874272201570",
     "kind": "spot",
     "n": 20
    }
   ],
   "segments": [
    {
     "label": "08:30 신파치 식당 신주쿠 (しんぱち食堂) → 15:27 Hummingbirds' hill shop",
     "from": 1,
     "to": 10,
     "count": 10,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.68903,139.69714&destination=35.67194,139.70905&waypoints=35.68691,139.69328|35.69157,139.70465|35.69299,139.70097|35.69256,139.70138|35.69263,139.70276|35.69186,139.70100|35.66666,139.74036|35.66938,139.70586"
    },
    {
     "label": "15:27 Hummingbirds' hill shop → 19:29 2nd STREET 시부야 진난점",
     "from": 10,
     "to": 19,
     "count": 10,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.67194,139.70905&destination=35.66136,139.70105&waypoints=35.66822,139.70733|35.66865,139.70441|35.66576,139.70522|35.66623,139.70400|35.66522,139.70358|35.66264,139.70183|35.66296,139.70040|35.66303,139.69939"
    },
    {
     "label": "19:29 2nd STREET 시부야 진난점 → 20:15 신주쿠 워싱턴 복귀",
     "from": 19,
     "to": 20,
     "count": 2,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.66136,139.70105&destination=35.68691,139.69328"
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
     "time": "12:20",
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
     "time": "13:40",
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
     "time": "15:25",
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
     "time": "15:52",
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
     "time": "16:17",
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
     "time": "16:44",
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
     "time": "17:35",
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
     "n": 13
    }
   ],
   "segments": [
    {
     "label": "08:20 호텔 출발 → 신주쿠역 → 16:44 RECTOHALL (에비스)",
     "from": 1,
     "to": 10,
     "count": 10,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.68961,139.70057&destination=35.64216,139.70887&waypoints=35.67714,139.76426|35.68217,139.76451|35.67565,139.76906|35.67161,139.76299|35.67321,139.76537|35.64371,139.70982|35.64279,139.71017|35.64211,139.70915"
    },
    {
     "label": "16:44 RECTOHALL (에비스) → 19:10 L-Breath 신주쿠",
     "from": 10,
     "to": 13,
     "count": 4,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.64216,139.70887&destination=35.68921,139.70235&waypoints=35.65993,139.72948|35.65925,139.72994"
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
     "time": "10:05",
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
     "time": "10:38",
     "name": "N'EX 19호 탑승 (4·5호차)",
     "jp": "成田エクスプレス 19号",
     "lat": 35.689607,
     "lng": 139.700571,
     "map": "https://maps.google.com/?cid=2031864442327465429",
     "kind": "spot",
     "n": 2
    },
    {
     "id": "d4-4",
     "time": "11:53",
     "name": "나리타국제공항 제2터미널 · 체크인",
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
     "label": "10:05 체크아웃 → 신주쿠역 → 11:53 나리타국제공항 제2터미널 · 체크인",
     "from": 1,
     "to": 3,
     "count": 3,
     "url": "https://www.google.com/maps/dir/?api=1&origin=35.68691,139.69328&destination=35.77241,140.38868&waypoints=35.68961,139.70057"
    }
   ]
  }
 ]
};
