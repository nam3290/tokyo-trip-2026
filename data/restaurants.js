/* 도쿄 3박 4일 — 식당 추천 데이터
 * 세 가이드(끼니별 94 · 생일저녁 57 · 해산물 15)를 CID 기준으로 중복 정리했습니다.
 * 좌표·평점·전화·영업시간: 2026-11-20 Google Maps 조회값.
 * 고칠 때: items 배열에서 값만 바꾸고 index.html의 ?v= 와 sw.js 캐시 버전을 올리세요.
 */
window.RESTAURANTS = {
 "meta": {
  "updated": "2026-11-23",
  "count": 168,
  "sources": "끼니별 가이드 94곳 + 생일 저녁 가이드 57곳 + 생일 해산물 가이드 15곳 + 호진님이 보낸 10곳 중 8곳(2026-11-21 검증) + 인스타 게시물 8곳 중 5곳(2026-11-21 검증) + 노다핀(2026-11-22 만석으로 이번 일정 제외) + 인스타 릴스 7곳(2026-11-22 추가) → 중복 정리(167) + 우니야 신주쿠점(2026-11-23 생일 저녁 예약 확정) → 총 168곳",
  "photoNote": "사진 167곳 · 600px JPEG 32~56KB · images/restaurants/{id}.jpg (2026-11-21 추가 14곳은 타베로그·구글맵 게시 사진, 2026-11-22 인스타 릴스 7곳은 구글맵 장소 사진) · 2026-11-23 추가 1곳(우니야 신주쿠점)은 구글맵 장소 사진",
  "note": "영업시간 167곳 중 146곳은 2026-11-20 기준 Google Maps 참고값, 2026-11-21에 추가한 14곳은 공식 사이트·타베로그·구글맵 다음 7일로 대조했고, 2026-11-22에 추가한 인스타 릴스 7곳은 구글맵 다음 7일 영업시간(11/21~24 해당 요일)을 그대로 옮겼습니다. 날짜·공휴일·임시휴무·예약 가능 여부는 방문 직전 공식 채널에서 확인하세요. 2026-11-23 추가한 우니야 신주쿠점은 구글맵 다음 7일(매일 17:00~23:00·L.O. 22:00)과 타베로그로 대조했습니다.",
  "hoursVerification": "146곳은 지도 참고값 · 2026-11-21 추가 14곳 공식·타베로그·구글맵 대조 · 2026-11-22 추가 7곳 구글맵 다음 7일"
 },
 "slots": [
  {
   "id": "d1-dinner",
   "day": "d1",
   "label": "1일차 저녁",
   "time": "20:30~21:20"
  },
  {
   "id": "d1-late",
   "day": "d1",
   "label": "1일차 2차",
   "time": "21:45~23:00"
  },
  {
   "id": "d2-breakfast",
   "day": "d2",
   "label": "2일차 아침",
   "time": "08:30~09:15"
  },
  {
   "id": "d2-lunch",
   "day": "d2",
   "label": "2일차 점심",
   "time": "14:00~14:35"
  },
  {
   "id": "d2-cafe",
   "day": "d2",
   "label": "2일차 카페",
   "time": "15:50경 10분"
  },
  {
   "id": "d2-dinner",
   "day": "d2",
   "label": "2일차 저녁",
   "time": "20:00~21:30 (미정)"
  },
  {
   "id": "d3-breakfast",
   "day": "d3",
   "label": "3일차 아침",
   "time": "07:40~08:10"
  },
  {
   "id": "d3-lunch",
   "day": "d3",
   "label": "3일차 점심",
   "time": "마루노우치에서 마침 · 긴자 대체 후보"
  },
  {
   "id": "d3-cafe",
   "day": "d3",
   "label": "3일차 카페",
   "time": "스킵 · MUJI·팡 메종 제외로 카페 자리 없음"
  },
  {
   "id": "d3-birthday",
   "day": "d3",
   "label": "3일차 생일 저녁",
   "time": "20:00~22:00 · 우니야 신주쿠점"
  },
  {
   "id": "d4-breakfast",
   "day": "d4",
   "label": "4일차 아침",
   "time": "07:30~08:10"
  },
  {
   "id": "d4-lunch",
   "day": "d4",
   "label": "4일차 점심",
   "time": "12:45~13:15 (수속 후 여유 시)"
  }
 ],
 "bigAreas": [
  "신주쿠",
  "시부야",
  "에비스·다이칸야마",
  "롯폰기·아자부",
  "긴자·마루노우치",
  "아카사카",
  "나리타공항"
 ],
 "tags": [
  "생일저녁",
  "고급해산물",
  "야키니쿠",
  "스시·텐푸라",
  "이자카야·사케",
  "라멘·면류",
  "카페·디저트",
  "정식·돈카츠·카레",
  "해산물·회",
  "기타"
 ],
 "items": [
  {
   "id": "r001",
   "image": "./images/restaurants/r001.jpg",
   "name": "카모토네기 신주쿠西口",
   "jp": "らーめん 鴨to葱 新宿西口店",
   "google_name": "Ramen Kamo to Negi - Shinjuku West Exit",
   "genre": "라멘",
   "genre_full": "라멘 · 鴨らーめん(오리 간장)",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": "3.45",
   "google": 4.8,
   "reviews": "2,278",
   "hours": {
    "d21": "10:00~翌04:00",
    "d22": "10:00~翌04:00",
    "d23": "10:00~翌04:00",
    "d24": "10:00~翌04:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5937-5886",
   "walk": "호텔 도보 19분(1.4km) · 신주쿠역 서구에서 5분",
   "note": "한국인 후기에서 최근 급상승한 곳. 물·오리·파만으로 낸 맑은 스프.",
   "tip": "입구 식권기 선결제. 심야까지 하므로 첫날 늦은 도착의 최적 안전판. 3인이면 카운터+테이블 혼합.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−9−12 鈴和ビル",
   "lat": 35.6951163,
   "lng": 139.6983965,
   "map": "https://maps.google.com/?cid=8049434134546372547",
   "cid": "8049434134546372547",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r002",
   "image": "./images/restaurants/r002.jpg",
   "name": "코슈 이치바 西新宿",
   "jp": "広州市場 西新宿店",
   "google_name": "Kosyu Ichiba",
   "genre": "완탕면",
   "genre_full": "완탕면 · 広州肉汁雲呑麺",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 900~1,300엔",
   "tabelog": "3.58",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "10:50~23:00",
    "d22": "10:50~23:00",
    "d23": "10:50~23:00",
    "d24": "10:50~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5322-9322",
   "walk": "호텔 도보 10분(0.7km)",
   "note": "현지 직장인 점심·야식 단골. 20시 이후 대기 거의 없음(타베로그 후기).",
   "tip": "완탕 6알이 기본, 밥 세트 있음. 3인 3,000엔대로 마무리 가능.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−12−7 アベビル",
   "lat": 35.6895271,
   "lng": 139.6971039,
   "map": "https://maps.google.com/?cid=10403909404534889484",
   "cid": "10403909404534889484",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r003",
   "image": "./images/restaurants/r003.jpg",
   "name": "무소우 탄멘 나카모토 新宿",
   "jp": "蒙古タンメン中本 新宿店",
   "google_name": "모코 탄멘 나카모토 신주쿠점",
   "genre": "매운 탄멘",
   "genre_full": "매운 탄멘 · 北極라멘",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 900~1,500엔",
   "tabelog": "3.47",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "10:00~23:00",
    "d22": "10:00~23:00",
    "d23": "10:00~23:00",
    "d24": "10:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3363-3321",
   "walk": "호텔 도보 20분(1.5km) · 西武新宿역 3분",
   "note": "한국인 '매운 라멘' 리스트 단골. 각자 매운맛 단계 선택 가능.",
   "tip": "현금 위주(카드 가능). 매운 것 못 드시는 어머니는 味噌タンメン(순한 편)으로.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−8−11 美笠ビル B1Ｆ",
   "lat": 35.695727,
   "lng": 139.698164,
   "map": "https://maps.google.com/?cid=11740999548917112354",
   "cid": "11740999548917112354",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r004",
   "image": "./images/restaurants/r004.jpg",
   "name": "멘야 무사시 新宿본점",
   "jp": "麺屋武蔵 新宿本店",
   "google_name": "멘야무사시",
   "genre": "라멘",
   "genre_full": "라멘·츠케멘 · 武蔵らー麺",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "3,830",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3363-4634",
   "walk": "호텔 도보 20분(1.5km)",
   "note": "도쿄 츠케멘 붐을 만든 대표 브랜드. 관광객 비중 높음.",
   "tip": "21:20 도착하면 마지막 주문과 겹칩니다. 늦어질 것 같으면 위 鴨to葱로.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−2−6 西新宿Ｋ－１ビル 1F",
   "lat": 35.6955679,
   "lng": 139.6986477,
   "map": "https://maps.google.com/?cid=8971049026698303002",
   "cid": "8971049026698303002",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r005",
   "image": "./images/restaurants/r005.jpg",
   "name": "우오토오사케 오후지",
   "jp": "魚とお酒 新宿おふじ",
   "google_name": "魚とお酒 新宿おふじ",
   "genre": "해산물 이자카야",
   "genre_full": "해산물 이자카야 · 사시미·탄야키",
   "area": "가부키초",
   "bigArea": "신주쿠",
   "tags": [
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 4,000~6,000엔",
   "tabelog": null,
   "google": 4.6,
   "reviews": "162",
   "hours": {
    "d21": "18:30~翌04:00",
    "d22": "18:00~23:00",
    "d23": "18:30~翌04:00",
    "d24": "18:30~翌04:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6233-7980",
   "walk": "호텔 도보 24분(1.6km) · 가부키초 1초메(신주쿠역 동구 6분)",
   "note": "리뷰 수는 적지만 평점 최상위. 현지인 위주 소규모.",
   "tip": "자리 적어 전화 예약 권장(03-6233-7980). 첫날 밤 술까지 원할 때.",
   "awards": "",
   "addr": "일본 〒160-0021 Tokyo, Shinjuku City, Kabukicho, 1 Chome−2−13 新光ビル B1F 魚とお酒 新宿おふじ",
   "lat": 35.69479,
   "lng": 139.704377,
   "map": "https://maps.google.com/?cid=137190596671462639",
   "cid": "137190596671462639",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r006",
   "image": "./images/restaurants/r006.jpg",
   "name": "야키토리 이마이야 西新宿",
   "jp": "焼き鳥 今井屋 西新宿",
   "google_name": "Yakitori Nishishinjyuku Imaiya",
   "genre": "야키토리",
   "genre_full": "야키토리 · 히나도리 꼬치",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "이자카야·사케"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 4,000~6,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "607",
   "hours": {
    "d21": "16:00~23:00",
    "d22": "16:00~23:00",
    "d23": "17:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5326-4933",
   "walk": "호텔 도보 10분(0.7km)",
   "note": "호텔 코앞에서 술 한잔. 한국인 후기 드묾(직장인 비중).",
   "tip": "콜키지 가능, 코스 4,000엔대. 예약 없이 21시 이전 입장 무난.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−18−15 岡本ビル B1F",
   "lat": 35.688846,
   "lng": 139.6982172,
   "map": "https://maps.google.com/?cid=7689037245409775572",
   "cid": "7689037245409775572",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r007",
   "image": "./images/restaurants/r007.jpg",
   "name": "도쿄 아부라구미 西新宿",
   "jp": "東京油組総本店 西新宿",
   "google_name": "아부라소바 니시신주쿠구미",
   "genre": "아부라소바(국물 없는 라멘)",
   "genre_full": "아부라소바(국물 없는 라멘)",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 800~1,200엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "1,423",
   "hours": {
    "d21": "11:00~翌04:00",
    "d22": "11:00~22:00",
    "d23": "11:00~翌04:00",
    "d24": "11:00~翌04:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3340-4411",
   "walk": "호텔 도보 9분(0.6km)",
   "note": "한국인 사이 '기름 비빔면'으로 알려진 곳. 3인 회전 빠름.",
   "tip": "식권기 선결제. 밥 추가 무료. 4시까지 영업이라 항공 지연에도 안전.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−13−6 아부라소바 니시신주쿠구미 西新宿ビル 1F",
   "lat": 35.6894063,
   "lng": 139.696655,
   "map": "https://maps.google.com/?cid=7650629044564724124",
   "cid": "7650629044564724124",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r008",
   "image": "./images/restaurants/r008.jpg",
   "name": "톤친칸",
   "jp": "豚珍館",
   "google_name": "톤친칸",
   "genre": "돈카츠",
   "genre_full": "돈카츠 · 로스카츠 정식",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": "3.49",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:00~15:00 · 17:00~21:30",
    "d22": "휴무",
    "d23": "11:00~15:00 · 17:00~21:30",
    "d24": "11:00~15:00 · 17:00~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3348-5774",
   "walk": "호텔 도보 10분(0.7km)",
   "note": "40년 넘은 신주쿠 돈카츠 노포. 두툼한 로스로 유명.",
   "tip": "21:30 마감이라 20:40 입장이면 여유. 11/21(토) 영업 확인.",
   "awards": "",
   "addr": "1 Chome-13-8 Nishishinjuku Shinjuku City, Tokyo 160-0023 일본",
   "lat": 35.6895624,
   "lng": 139.6967792,
   "map": "https://maps.google.com/?cid=3498904465486226463",
   "cid": "3498904465486226463",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r009",
   "image": "./images/restaurants/r009.jpg",
   "name": "토리시게(모츠야키)",
   "jp": "鳥茂",
   "google_name": "쿠시야키 토리시게",
   "genre": "모츠야키(내장 꼬치)",
   "genre_full": "모츠야키(내장 꼬치) · 오마카세 코스",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d1-dinner",
    "d3-birthday"
   ],
   "budget": "약 8,000~10,000엔",
   "tabelog": "4.07",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "17:00~24:00",
    "d22": "휴무",
    "d23": "17:00~24:00",
    "d24": "17:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3379-5188",
   "walk": "호텔 도보 10분(0.7km)",
   "note": "타베로그 4.07 · The Tabelog Award 2026 Bronze. 신주쿠 내장 꼬치의 정점.",
   "tip": "예약·문의 번호 03-3379-5188 (공식 사이트 확인). 3인 예약 가능 여부와 공휴일 영업은 전화 확인 필수.",
   "awards": "Tabelog Award 2026 Bronze",
   "addr": "2 Chome-6-5 Yoyogi Shibuya, Tokyo 151-0053 일본",
   "lat": 35.6879695,
   "lng": 139.698852,
   "map": "https://maps.google.com/?cid=9203701092652979101",
   "cid": "9203701092652979101",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "공식/공공자료 확인",
    "checked": "2026-11-20",
    "source": "https://torishige-shinjuku.com/ja"
   }
  },
  {
   "id": "r010",
   "image": "./images/restaurants/r010.jpg",
   "name": "코히 사이부 西新宿",
   "jp": "珈琲西武 西新宿店",
   "google_name": "Coffee Seibu Nishi-Shinjuku",
   "genre": "킷사텐",
   "genre_full": "킷사텐 · 오므라이스·푸딩",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": "3.58",
   "google": 4.1,
   "reviews": "546",
   "hours": {
    "d21": "11:00~21:30",
    "d22": "11:00~21:00",
    "d23": "11:00~21:30",
    "d24": "11:00~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3361-2828",
   "walk": "호텔 도보 18분(1.3km)",
   "note": "한국인 '레트로 킷사텐' 리스트에 자주 오르는 곳. 두툼 오므라이스.",
   "tip": "저녁을 가볍게 먹었을 때 디저트·커피 마무리용. 21:30 마감.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−9−16 西新宿メトロビル",
   "lat": 35.6946526,
   "lng": 139.6982172,
   "map": "https://maps.google.com/?cid=9106978833430361630",
   "cid": "9106978833430361630",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r011",
   "image": "./images/restaurants/r011.jpg",
   "name": "AFURI 渋谷道玄坂",
   "jp": "AFURI 渋谷道玄坂",
   "google_name": "Afuri Shibuya Dōgenzaka",
   "genre": "라멘",
   "genre_full": "라멘 · 유자소금라멘",
   "area": "도겐자카",
   "bigArea": "도겐자카",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d1-late"
   ],
   "budget": "약 1,300~1,800엔",
   "tabelog": "3.24",
   "google": 4.8,
   "reviews": "4,198",
   "hours": {
    "d21": "11:00~翌05:00",
    "d22": "11:00~23:00",
    "d23": "11:00~23:00",
    "d24": "11:00~23:00"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "돈키호테 도보 7분(0.4km)",
   "note": "한국인 도쿄 라멘 1순위로 꼽히는 브랜드. 유자 향의 맑은 국물.",
   "tip": "새벽 5시까지. 3인이면 회전 빠른 카운터.",
   "awards": "",
   "addr": "일본 〒150-0043 Tokyo, Shibuya, Dogenzaka, 1 Chome−19−12 ReRaiMa渋谷道玄坂 ホーム 1",
   "lat": 35.6570682,
   "lng": 139.6960173,
   "map": "https://maps.google.com/?cid=16867039336592962851",
   "cid": "16867039336592962851",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r012",
   "image": "./images/restaurants/r012.jpg",
   "name": "우오가시 니혼이치 道玄坂",
   "jp": "魚がし日本一 渋谷道玄坂",
   "google_name": "스시 우오가시니혼이치 시부야 도겐자카점",
   "genre": "입식 스시",
   "genre_full": "입식 스시 · 1관 100엔대",
   "area": "도겐자카",
   "bigArea": "도겐자카",
   "tags": [
    "스시·텐푸라",
    "해산물·회"
   ],
   "slots": [
    "d1-late"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": null,
   "google": 4.5,
   "reviews": "1,170",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~21:30",
    "d23": "11:00~23:00",
    "d24": "11:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5428-4851",
   "walk": "돈키호테 도보 3분(0.2km)",
   "note": "서서 먹는 스시로 한국인 가성비 후기 다수.",
   "tip": "현금·카드 모두. 22:00 마감이라 21:50 입장은 촉박.",
   "awards": "",
   "addr": "2 Chome-9-1 Dogenzaka Shibuya, Tokyo 150-0043 일본",
   "lat": 35.6589379,
   "lng": 139.6981904,
   "map": "https://maps.google.com/?cid=5796466028926882103",
   "cid": "5796466028926882103",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r013",
   "image": "./images/restaurants/r013.jpg",
   "name": "토리타케 총본점",
   "jp": "鳥竹 総本店",
   "google_name": "토리타케",
   "genre": "야키토리 노포",
   "genre_full": "야키토리 노포 · 모츠 꼬치",
   "area": "도겐자카",
   "bigArea": "도겐자카",
   "tags": [
    "이자카야·사케"
   ],
   "slots": [
    "d1-late"
   ],
   "budget": "약 3,000~4,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "2,276",
   "hours": {
    "d21": "12:00~23:00",
    "d22": "12:00~23:00",
    "d23": "12:00~23:00",
    "d24": "12:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3461-1627",
   "walk": "돈키호테 도보 5분(0.3km)",
   "note": "도겐자카의 오래된 야키토리집. 현지인 비중 높고 가격 착함.",
   "tip": "연기·소음 있는 대중주점. 어머니 동석이면 구석 테이블 요청.",
   "awards": "",
   "addr": "1 Chome-6-1 Dogenzaka Shibuya, Tokyo 150-0043 일본",
   "lat": 35.6580323,
   "lng": 139.6989737,
   "map": "https://maps.google.com/?cid=10806649970888955694",
   "cid": "10806649970888955694",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r014",
   "image": "./images/restaurants/r014.jpg",
   "name": "하카타 사카바 스미요시야",
   "jp": "博多酒場 住吉屋 渋谷",
   "google_name": "하카타 술집 스미요시야",
   "genre": "하카타 이자카야",
   "genre_full": "하카타 이자카야 · 모츠나베·교자",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "이자카야·사케"
   ],
   "slots": [
    "d1-late"
   ],
   "budget": "약 3,000~4,000엔",
   "tabelog": null,
   "google": 4.7,
   "reviews": "2,381",
   "hours": {
    "d21": "12:00~翌02:00",
    "d22": "12:00~翌02:00",
    "d23": "12:00~24:00",
    "d24": "12:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 50-5448-6224",
   "walk": "돈키호테 도보 3분",
   "note": "평점 4.7·리뷰 2,381. 한국인 후기에서 '가성비 이자카야'로 자주 언급.",
   "tip": "새벽 2시까지. 3인 예약 가능(당일 전화).",
   "awards": "",
   "addr": "일본 〒150-0042 Tokyo, Shibuya, Udagawacho, 30−2 宇田川ビル",
   "lat": 35.6607062,
   "lng": 139.6981907,
   "map": "https://maps.google.com/?cid=15795650760769127751",
   "cid": "15795650760769127751",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r015",
   "image": "./images/restaurants/r015.jpg",
   "name": "츠지한 아크힐즈",
   "jp": "つじ半 アークヒルズ店",
   "google_name": "츠지한 아크 힐즈점",
   "genre": "해산물동",
   "genre_full": "해산물동 · ぜいたく丼 + 다시차즈케",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "해산물·회"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": "3.51",
   "google": 4.5,
   "reviews": "1,894",
   "hours": {
    "d21": "11:00~20:30",
    "d22": "11:00~20:30",
    "d23": "11:00~21:30",
    "d24": "11:00~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6277-6385",
   "walk": "아크힐즈 도보 5분(0.4km)",
   "note": "한국인 도쿄 해산물동 리스트 최상위. '마지막에 다시를 부어 먹는' 2단 구성.",
   "tip": "일요일 13시 대기 10~20분. 이름 적고 대기. 3인 6,000엔 안쪽. 현금·카드.",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 1 Chome−12−32 Ark Mori Building, 3階",
   "lat": 35.66736119999999,
   "lng": 139.7400189,
   "map": "https://maps.google.com/?cid=2653783987035612021",
   "cid": "2653783987035612021",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r016",
   "image": "./images/restaurants/r016.jpg",
   "name": "텐푸라메시 카네코한노스케 아크힐즈",
   "jp": "天ぷらめし 金子半之助 アークヒルズ店",
   "google_name": "Nihombashi Tempura-meshi Kaneko Hannosuke Ark Hills",
   "genre": "텐동",
   "genre_full": "텐동 · 江戸前天丼",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,200~2,000엔",
   "tabelog": "3.49",
   "google": 4.2,
   "reviews": "512",
   "hours": {
    "d21": "11:00~20:00",
    "d22": "11:00~20:00",
    "d23": "11:00~21:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6277-6649",
   "walk": "아크힐즈 도보 4분",
   "note": "한국인 '텐동 맛집' 대표주자. 일본 현지인도 줄 서는 브랜드.",
   "tip": "같은 건물 안이라 이동 0분. 튀김 양 많아 3인이 나눠 먹기 좋음.",
   "awards": "",
   "addr": "일본 〒107-6003 Tokyo, Minato City, Akasaka, 1 Chome−12−32 Ark Mori Building, 3階",
   "lat": 35.6672265,
   "lng": 139.7398856,
   "map": "https://maps.google.com/?cid=16677727378243220939",
   "cid": "16677727378243220939",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r017",
   "image": "./images/restaurants/r017.jpg",
   "name": "스시 源 赤坂",
   "jp": "鮨 源 赤坂",
   "google_name": "Sushi Gen Akasaka",
   "genre": "스시",
   "genre_full": "스시 · 오마카세/런치 세트",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 2,000~4,000엔(런치)",
   "tabelog": null,
   "google": 4.8,
   "reviews": "668",
   "hours": {
    "d21": "11:30~23:00",
    "d22": "11:30~23:00",
    "d23": "11:30~23:00",
    "d24": "11:30~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5545-5598",
   "walk": "아크힐즈 도보 15분(1.1km)",
   "note": "평점 4.8. 관광지 물가가 아닌 동네 스시집.",
   "tip": "매장 번호 03-5545-5598 (구글맵·타베로그 확인). 11/22 일요일 영업·런치 제공·예약 가능 여부는 별도 확인 필수.",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 3 Chome−13−2 赤坂第一ビル 2F 3F",
   "lat": 35.6735657,
   "lng": 139.7375368,
   "map": "https://maps.google.com/?cid=17847152604740398273",
   "cid": "17847152604740398273",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "공식/공공자료 확인",
    "checked": "2026-11-20",
    "source": "https://tabelog.com/tokyo/A1308/A130801/13309724/"
   }
  },
  {
   "id": "r018",
   "image": "./images/restaurants/r018.jpg",
   "name": "우메다치 스시노미도리 赤坂",
   "jp": "梅丘寿司の美登利 赤坂店",
   "google_name": "스시노미도리 아카사카점",
   "genre": "스시",
   "genre_full": "스시 · 니기리 세트",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 2,000~4,000엔",
   "tabelog": "3.50",
   "google": 4.1,
   "reviews": "1,481",
   "hours": {
    "d21": "11:00~21:00",
    "d22": "11:00~21:00",
    "d23": "11:00~21:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5545-5516",
   "walk": "아크힐즈 도보 18분(1.3km)",
   "note": "한국인 도쿄 스시 '가성비 1티어'. 네타 두껍고 밥 작음.",
   "tip": "일요일 13시 대기 20~40분. 아크힐즈에서 걸어 18분이라 시간이 빠듯하면 후순위.",
   "awards": "",
   "addr": "일본 〒107-6302 Tokyo, Minato City, Akasaka, 5 Chome−3−1 스시노미도리 아카사카점 サカス 赤坂Bizタワー2階",
   "lat": 35.6729108,
   "lng": 139.7358702,
   "map": "https://maps.google.com/?cid=3425757482066941423",
   "cid": "3425757482066941423",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r019",
   "image": "./images/restaurants/r019.jpg",
   "name": "라멘 모즈 赤坂",
   "jp": "Ramen Mozu / らぁ麺 もうず",
   "google_name": "Ramen Mozu",
   "genre": "라멘",
   "genre_full": "라멘 · 닭소유 らぁ麺",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": null,
   "google": 4.6,
   "reviews": "2,417",
   "hours": {
    "d21": "11:00~23:00",
    "d22": "11:00~23:00",
    "d23": "11:00~23:00",
    "d24": "11:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6277-8238",
   "walk": "아크힐즈 도보 17분(1.2km) · 赤坂Biz타워",
   "note": "4.7·2,400리뷰의 화제점. 한국인 후기 빠르게 늘고 있음.",
   "tip": "식권기. 13시 대기 15분 전후. 20분 이상 못 기다리면 츠지한으로.",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 5 Chome−3−1 Akasaka Biz Tower, B1F",
   "lat": 35.6729853,
   "lng": 139.7365164,
   "map": "https://maps.google.com/?cid=1006565916775439393",
   "cid": "1006565916775439393",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r020",
   "image": "./images/restaurants/r020.jpg",
   "name": "규슈 잔가라 赤坂",
   "jp": "九州じゃんがら 赤坂",
   "google_name": "큐슈장가라 라멘 아카사카점",
   "genre": "돈코츠 라멘",
   "genre_full": "돈코츠 라멘",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": null,
   "google": 4.6,
   "reviews": "2,010",
   "hours": {
    "d21": "11:00~15:00",
    "d22": "11:00~15:00",
    "d23": "11:00~21:45",
    "d24": "11:00~21:45"
   },
   "hours23Guide": "",
   "phone": "+81 3-3505-7882",
   "walk": "아크힐즈 도보 14분(1.0km)",
   "note": "한국인에게 익숙한 돈코츠. 일요일은 15시 마감이라 시간 엄수.",
   "tip": "13:05 입장이면 충분하지만 14시 이후엔 마감 임박.",
   "awards": "",
   "addr": "2 Chome-15-15 Akasaka Minato City, Tokyo 107-0052 일본",
   "lat": 35.6716388,
   "lng": 139.7379706,
   "map": "https://maps.google.com/?cid=3330857225177565959",
   "cid": "3330857225177565959",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r021",
   "image": "./images/restaurants/r021.jpg",
   "name": "도쿄 아부라소바 赤坂見附",
   "jp": "東京油そば 赤坂見附",
   "google_name": "도쿄아부라구미",
   "genre": "아부라소바",
   "genre_full": "아부라소바",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 900~1,300엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "1,057",
   "hours": {
    "d21": "11:00~翌05:00",
    "d22": "11:00~22:00",
    "d23": "11:00~翌05:00",
    "d24": "11:00~翌05:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5571-6011",
   "walk": "아크힐즈 도보 13분(0.9km)",
   "note": "빠르고 싸고 확실. 한국인 후기 다수.",
   "tip": "10분 안에 식사 가능. 시장 시간을 아끼고 싶을 때.",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 3 Chome−10−20 第三対翠館ビル",
   "lat": 35.6764185,
   "lng": 139.7365326,
   "map": "https://maps.google.com/?cid=14967072998160824595",
   "cid": "14967072998160824595",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r022",
   "image": "./images/restaurants/r022.jpg",
   "name": "赤坂ランラン",
   "jp": "中華料理 赤坂ランラン",
   "google_name": "中華料理 赤坂ランラン",
   "genre": "중화",
   "genre_full": "중화 · 마파볶음밥",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "기타"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": "3.44",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:00~21:00",
    "d22": "11:00~21:00",
    "d23": "11:00~翌05:00",
    "d24": "11:00~翌05:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6441-2880",
   "walk": "아크힐즈 도보 16분(1.1km)",
   "note": "현지인 단골 마파볶음밥. 관광객 거의 없음.",
   "tip": "리뷰 수 적음(68) = 아직 로컬. 매운맛 조절 요청 가능.",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 5 Chome−1−1 赤坂肥後のれんビル 1階 中華料理 赤坂ランラン",
   "lat": 35.6743004,
   "lng": 139.7363929,
   "map": "https://maps.google.com/?cid=5334886150910298336",
   "cid": "5334886150910298336",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r023",
   "image": "./images/restaurants/r023.jpg",
   "name": "ARK HiLLS CAFE",
   "jp": "ARK HiLLS CAFE",
   "google_name": "아크 힐즈 카페",
   "genre": "카페",
   "genre_full": "카페·양식 · 런치 플레이트",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": "3.48",
   "google": 3.7,
   "reviews": "397",
   "hours": {
    "d21": "10:00~21:00",
    "d22": "11:00~21:00",
    "d23": "11:00~21:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6229-2666",
   "walk": "아크힐즈 도보 5분",
   "note": "가장 가까운 앉아서 먹는 곳. 대기 없이 시간 맞추기 좋음.",
   "tip": "시장 시작 시각을 놓치면 안 될 때의 안전판.",
   "awards": "",
   "addr": "1 Chome-3-40 Roppongi Minato City, Tokyo 106-0032 일본",
   "lat": 35.666236,
   "lng": 139.74022,
   "map": "https://maps.google.com/?cid=9485442097079605508",
   "cid": "9485442097079605508",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r024",
   "image": "./images/restaurants/r024.jpg",
   "name": "버비즈 뉴욕 아크힐즈",
   "jp": "バビーズ ニューヨーク アークヒルズ",
   "google_name": "Bubby's New York ARK Hills",
   "genre": "미국식",
   "genre_full": "미국식 · 팬케이크·버거",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "기타"
   ],
   "slots": [
    "d2-lunch"
   ],
   "budget": "약 2,000~3,500엔",
   "tabelog": "3.42",
   "google": 3.7,
   "reviews": "690",
   "hours": {
    "d21": "10:00~22:00",
    "d22": "10:00~22:00",
    "d23": "10:00~23:00",
    "d24": "10:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6441-0733",
   "walk": "아크 모리 빌딩 2F",
   "note": "여동생 취향 저격용. 팬케이크·버거·스테이크.",
   "tip": "같은 빌딩 2F. 3인이면 팬케이크 1 + 버거 2로 나눠 먹기.",
   "awards": "",
   "addr": "Ark Mori Building, 2F 1 Chome-12-32 Akasaka Minato City, Tokyo 107-6002 일본",
   "lat": 35.6667062,
   "lng": 139.740084,
   "map": "https://maps.google.com/?cid=15406698698042196352",
   "cid": "15406698698042196352",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r025",
   "image": "./images/restaurants/r025.jpg",
   "name": "랄프스 커피 오모테산도",
   "jp": "Ralph's Coffee 表参道",
   "google_name": "랄프스 커피 오모테산도",
   "genre": "카페",
   "genre_full": "카페 · 라떼·아메리카노",
   "area": "하라주쿠",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 700~1,500엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "09:00~20:00",
    "d22": "09:00~20:00",
    "d23": "10:00~19:00",
    "d24": "10:00~19:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6438-5803",
   "walk": "랄프 로렌 매장에서 도보 1분(0.1km)",
   "note": "한국인 '오모테산도 카페' 리스트 단골. 매장 2F.",
   "tip": "매장 안이라 쇼핑 동선 그대로. 좌석 적어 테이크아웃이 빠를 때 많음.",
   "awards": "",
   "addr": "4 Chome-25-15 Jingumae Shibuya, Tokyo 150-0001 일본",
   "lat": 35.6681566,
   "lng": 139.707277,
   "map": "https://maps.google.com/?cid=13180997183820413679",
   "cid": "13180997183820413679",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r026",
   "image": "./images/restaurants/r026.jpg",
   "name": "판토 에스프레소토 表参道",
   "jp": "パンとエスプレッソと 表参道",
   "google_name": "빵토 에스프레소토",
   "genre": "베이커리 카페",
   "genre_full": "베이커리 카페 · 무치빵",
   "area": "하라주쿠",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 500~1,200엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "08:00~19:00",
    "d22": "08:00~19:00",
    "d23": "08:00~19:00",
    "d24": "08:00~19:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5410-2040",
   "walk": "도보 3분(0.2km)",
   "note": "한국인 '도쿄 빵집' 리스트에 자주 등장. 무치빵+에스프레소.",
   "tip": "빵만 사서 걸어 먹기 좋음. 짧은 휴식 자리에 최적.",
   "awards": "",
   "addr": "3 Chome-4-9 Jingumae Shibuya, Tokyo 150-0001 일본",
   "lat": 35.6689132,
   "lng": 139.7126189,
   "map": "https://maps.google.com/?cid=5881028304963752426",
   "cid": "5881028304963752426",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r027",
   "image": "./images/restaurants/r027.jpg",
   "name": "블루보틀 커피 青山",
   "jp": "ブルーボトルコーヒー 青山",
   "google_name": "블루보틀커피 아오야마",
   "genre": "스페셜티 커피",
   "genre_full": "스페셜티 커피",
   "area": "기타",
   "bigArea": "기타",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 700~1,500엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "3,190",
   "hours": {
    "d21": "08:00~19:00",
    "d22": "08:00~19:00",
    "d23": "08:00~19:00",
    "d24": "08:00~19:00"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "도보 12분(0.8km)",
   "note": "한국인에게 가장 익숙한 브랜드. 좌석·화장실 쾌적.",
   "tip": "오모테산도에서 青山 쪽으로 내려오는 길. 다음 동선(하라주쿠)과 반대라 후순위.",
   "awards": "",
   "addr": "일본 〒107-0062 Tokyo, Minato City, Minamiaoyama, 3 Chome−13−14 増田ビル 2階",
   "lat": 35.6652485,
   "lng": 139.7138799,
   "map": "https://maps.google.com/?cid=5183820147445012076",
   "cid": "5183820147445012076",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r028",
   "image": "./images/restaurants/r028.jpg",
   "name": "코피 마메야",
   "jp": "KOFFEE MAMEYA",
   "google_name": "커피 마메야",
   "genre": "커피 스탠드",
   "genre_full": "커피 스탠드 · 원두 상담",
   "area": "하라주쿠",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 800~1,800엔",
   "tabelog": null,
   "google": 4.6,
   "reviews": "1,971",
   "hours": {
    "d21": "10:00~18:00",
    "d22": "10:00~18:00",
    "d23": "10:00~18:00",
    "d24": "10:00~18:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5413-9422",
   "walk": "도보 8분(0.6km)",
   "note": "4.6·2,000리뷰. 커피 좋아하면 여기. 서서 마시는 스탠드형.",
   "tip": "좌석 없음. 앉아 쉬어야 하면 랄프스커피/스타벅스.",
   "awards": "",
   "addr": "4 Chome-15-3 Jingumae Shibuya, Tokyo 150-0001 일본",
   "lat": 35.668368,
   "lng": 139.710888,
   "map": "https://maps.google.com/?cid=5064916712424889855",
   "cid": "5064916712424889855",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r029",
   "image": "./images/restaurants/r029.jpg",
   "name": "더 로스터리 바이 노지",
   "jp": "THE ROASTERY BY NOZY COFFEE",
   "google_name": "더 로스터리 바이 노지 커피",
   "genre": "로스터리 카페",
   "genre_full": "로스터리 카페",
   "area": "하라주쿠",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 700~1,500엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "2,433",
   "hours": {
    "d21": "10:00~20:00",
    "d22": "10:00~20:00",
    "d23": "10:00~20:00",
    "d24": "10:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6450-5755",
   "walk": "도보 12분(0.9km) · 神宮前5초메",
   "note": "하라주쿠 안쪽. 테라스 좌석 있고 규모 큼.",
   "tip": "캣스트리트 쪽 동선이면 여기로 우회.",
   "awards": "",
   "addr": "Reveur Jingumae 5 Chome-17-13 Jingumae Shibuya, Tokyo 150-0001 일본",
   "lat": 35.66557239999999,
   "lng": 139.7047658,
   "map": "https://maps.google.com/?cid=14377700849968291546",
   "cid": "14377700849968291546",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r030",
   "image": "./images/restaurants/r030.jpg",
   "name": "스타벅스 表参道ヒルズ점",
   "jp": "スターバックス 表参道ヒルズ店",
   "google_name": "스타벅스 오모테산도힐즈점",
   "genre": "카페",
   "genre_full": "카페",
   "area": "하라주쿠",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 600~1,200엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "08:00~22:30",
    "d22": "08:00~22:30",
    "d23": "07:00~22:30",
    "d24": "07:00~22:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6271-1626",
   "walk": "도보 5분(0.4km)",
   "note": "확실한 좌석+화장실. 관광객·현지인 모두 많음.",
   "tip": "22:30까지라 일정이 밀려도 여유. 3인 자리 잡기 가장 쉬움.",
   "awards": "",
   "addr": "일본 〒150-0001 Tokyo, Shibuya, Jingumae, 4 Chome−12−10 表参道ヒルズ",
   "lat": 35.66772419999999,
   "lng": 139.7075981,
   "map": "https://maps.google.com/?cid=3694575997661442948",
   "cid": "3694575997661442948",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r031",
   "image": "./images/restaurants/r031.jpg",
   "name": "아니베르셀 카페 表参道",
   "jp": "アニヴェルセルカフェ 表参道",
   "google_name": "Anniversaire Café Omotesando",
   "genre": "카페",
   "genre_full": "카페·디저트 · 케이크",
   "area": "기타",
   "bigArea": "기타",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 1,200~2,500엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "424",
   "hours": {
    "d21": "10:00~21:00",
    "d22": "10:00~21:00",
    "d23": "11:00~21:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5411-5988",
   "walk": "도보 10분(0.7km) · 北青山3초메",
   "note": "결혼식장 병설 카페. 정원 자리에서 쉬기 좋음.",
   "tip": "디저트 플레이트가 예쁨. 어머니 쉬어가기 좋은 조용한 분위기.",
   "awards": "",
   "addr": "3 Chome-5-30 Kita-Aoyama Minato City, Tokyo 107-0061 일본",
   "lat": 35.6660468,
   "lng": 139.7112093,
   "map": "https://maps.google.com/?cid=15858446459667208279",
   "cid": "15858446459667208279",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r032",
   "image": "./images/restaurants/r032.jpg",
   "name": "후글렌 도쿄",
   "jp": "フグレン 東京 (Fuglen)",
   "google_name": "후글렌 도쿄 시부야",
   "genre": "노르웨이식 카페",
   "genre_full": "노르웨이식 카페 · 7시 오픈",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 700~1,500엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "3,878",
   "hours": {
    "d21": "07:00~翌01:00",
    "d22": "07:00~翌01:00",
    "d23": "07:00~翌01:00",
    "d24": "07:00~23:00"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "도보 25분(1.8km) · 富ヶ谷",
   "note": "한국인 '도쿄 감성 카페' 최상위. 다만 지금 동선에서 1.8km.",
   "tip": "이날은 무리. 다음에 하라주쿠 북쪽(요요기공원) 코스일 때.",
   "awards": "",
   "addr": "1 Chome-16-11 Tomigaya Shibuya, Tokyo 151-0063 일본",
   "lat": 35.6666181,
   "lng": 139.6923999,
   "map": "https://maps.google.com/?cid=17164645774726874279",
   "cid": "17164645774726874279",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r033",
   "image": "./images/restaurants/r033.jpg",
   "name": "우오야 후나마사 신주쿠",
   "jp": "魚や舟政 新宿店",
   "google_name": "魚や舟政 新宿店",
   "genre": "해산물 이자카야",
   "genre_full": "해산물 이자카야 · 짚불구이·사시미",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d2-dinner",
    "d3-birthday"
   ],
   "budget": "약 4,000~5,000엔",
   "tabelog": "3.29",
   "google": 4.5,
   "reviews": "1,301",
   "hours": {
    "d21": "12:00~24:00",
    "d22": "12:00~24:00",
    "d23": "15:00~24:00",
    "d24": "15:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6835-1345",
   "walk": "호텔 도보 9분(0.7km)",
   "note": "한국인 후기 다수. 전석 완전 개인실 + 전 좌석 금연 이라 어머니 모시기 가장 편함.",
   "tip": "3인 개인실 예약 권장(050-5594-3260). 짚불구이 가쓰오·부리카마 추천.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−18−13 5F 魚や舟政 新宿店",
   "lat": 35.6887579,
   "lng": 139.6980775,
   "map": "https://maps.google.com/?cid=7102176867648003687",
   "cid": "7102176867648003687",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r034",
   "image": "./images/restaurants/r034.jpg",
   "name": "스시 도쿄 텐 신주쿠",
   "jp": "SUSHI TOKYO TEN、新宿",
   "google_name": "스시 도쿄 텐",
   "genre": "스시 오마카세",
   "genre_full": "스시 오마카세 · 22품",
   "area": "센다가야",
   "bigArea": "센다가야",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d2-dinner",
    "d3-birthday"
   ],
   "budget": "약 9,900~13,200엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:00~23:00",
    "d22": "11:00~23:00",
    "d23": "11:00~23:00",
    "d24": "11:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6274-8540",
   "walk": "호텔 도보 14분(0.9km) · NEWoMan 2F",
   "note": "한국인 '가성비 오마카세'로 널리 알려짐. 21시 이후에도 입장 가능.",
   "tip": "예약 없이도 늦은 시간 가능. 음료 포함 코스 13,200엔.",
   "awards": "",
   "addr": "5 Chome-24-55 Sendagaya Shibuya, Tokyo 151-0051 일본",
   "lat": 35.6884554,
   "lng": 139.7005282,
   "map": "https://maps.google.com/?cid=3032854046184725457",
   "cid": "3032854046184725457",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r035",
   "image": "./images/restaurants/r035.jpg",
   "name": "규카츠 모토무라 신주쿠 남구점",
   "jp": "牛かつもと村 新宿南口店",
   "google_name": "규카츠 모토무라 신주쿠 남쪽출구점",
   "genre": "규카츠 정식",
   "genre_full": "규카츠 정식",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "야키니쿠",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-dinner",
    "d3-birthday"
   ],
   "budget": "약 2,000~3,000엔",
   "tabelog": "3.13",
   "google": 4.6,
   "reviews": "7,478",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 50-1722-0576",
   "walk": "호텔 도보 16분(1.2km)",
   "note": "한국인 도쿄 필수 코스. 돌판에 직접 굽는 방식.",
   "tip": "21시 이후 대기 20~30분. 마지막 주문 21:30이라 촉박 — 20:30 도착 권장.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−32−2 モトビル B1F",
   "lat": 35.6899918,
   "lng": 139.7038118,
   "map": "https://maps.google.com/?cid=10259173076433349501",
   "cid": "10259173076433349501",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r036",
   "image": "./images/restaurants/r036.jpg",
   "name": "신주쿠 3초메 후지야 하나레",
   "jp": "新宿三丁目ふじ屋ハナレ",
   "google_name": "Shinjuku Sanchome Fujiya Hanare",
   "genre": "모츠야키",
   "genre_full": "모츠야키·모츠나베",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "이자카야·사케"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 3,000~4,000엔",
   "tabelog": "3.43",
   "google": 4.7,
   "reviews": "561",
   "hours": {
    "d21": "14:00~24:00",
    "d22": "14:00~24:00",
    "d23": "15:00~24:00",
    "d24": "15:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6457-7229",
   "walk": "호텔 도보 23분(1.6km)",
   "note": "4.7·561리뷰. 신주쿠 3초메 술골목의 실력파.",
   "tip": "일요일 밤 늦게까지. 담배 피우는 손님 많음 — 금연 원하면 舟政.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−9−10 橋塚ビル １F",
   "lat": 35.6911416,
   "lng": 139.7068155,
   "map": "https://maps.google.com/?cid=4996972502994644359",
   "cid": "4996972502994644359",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r037",
   "image": "./images/restaurants/r037.jpg",
   "name": "야키니쿠 우시후지 西新宿본점",
   "jp": "焼肉うしふじ 西新宿本店",
   "google_name": "야키니쿠 우시후지 니시신주쿠본점",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 蟹스키야키 코스",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "야키니쿠"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 10,000~15,000엔",
   "tabelog": "3.61",
   "google": 4.9,
   "reviews": "1,069",
   "hours": {
    "d21": "12:00~15:00 · 17:00~24:00",
    "d22": "17:00~24:00",
    "d23": "17:00~24:00",
    "d24": "12:00~15:00 · 17:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6258-1019",
   "walk": "호텔 도보 15분(1.1km)",
   "note": "4.9·1,068리뷰. 호텔 가까운 프리미엄 야키니쿠.",
   "tip": "개인실 있음. 일요일 20:30 예약 가능성 높음. 생일 후보로도.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 6 Chome−16−9 Pine Needle, ２F",
   "lat": 35.6913872,
   "lng": 139.6874998,
   "map": "https://maps.google.com/?cid=1049692327983619416",
   "cid": "1049692327983619416",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r038",
   "image": "./images/restaurants/r038.jpg",
   "name": "신주쿠 우나테츠",
   "jp": "新宿うな鐵",
   "google_name": "우나테츠",
   "genre": "우나기",
   "genre_full": "우나기 · 히츠마부시",
   "area": "가부키초",
   "bigArea": "신주쿠",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 3,000~6,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "2,256",
   "hours": {
    "d21": "10:00~23:00",
    "d22": "10:00~23:00",
    "d23": "10:00~23:00",
    "d24": "10:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3200-5381",
   "walk": "호텔 도보 12분(0.9km)",
   "note": "한국인 '장어덮밥' 인기점. 23시까지라 밤 일정에 안전.",
   "tip": "우나주 3,000엔대부터. 3인이면 히츠마부시 2 + 사이드.",
   "awards": "",
   "addr": "1 Chome-11-2 Kabukicho Shinjuku City, Tokyo 160-0021 일본",
   "lat": 35.6946984,
   "lng": 139.7026487,
   "map": "https://maps.google.com/?cid=5633907992513733562",
   "cid": "5633907992513733562",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r039",
   "image": "./images/restaurants/r039.jpg",
   "name": "텐푸라 츠나하치 총본점 별관",
   "jp": "天ぷら新宿つな八 総本店 別館",
   "google_name": "天ぷら新宿つな八 総本店 別館",
   "genre": "텐푸라",
   "genre_full": "텐푸라 · 코스/정식",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "스시·텐푸라",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 3,000~6,000엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "40",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5315-0320",
   "walk": "호텔 도보 12분(0.9km)",
   "note": "1923년 창업 텐푸라 노포. 본점은 폐업 해 별관·都하즈안만 영업.",
   "tip": "튀김을 코스로 받으면 30~50분. 시간 없으면 定食.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−28−4 TRES SHINJUKU 6F B1F 天ぷら新宿つな八 総本店 別館",
   "lat": 35.6908134,
   "lng": 139.7026889,
   "map": "https://maps.google.com/?cid=4923231837354338093",
   "cid": "4923231837354338093",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r040",
   "image": "./images/restaurants/r040.jpg",
   "name": "이소마루 스이산 新宿3초메",
   "jp": "磯丸水産 新宿三丁目",
   "google_name": "이소마루수산 신주쿠산초메점",
   "genre": "해산물 이자카야",
   "genre_full": "해산물 이자카야 · 조개구이 24시간",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 3,000~4,000엔",
   "tabelog": null,
   "google": 3.7,
   "reviews": "1,481",
   "hours": {
    "d21": "미확인",
    "d22": "미확인",
    "d23": "미확인",
    "d24": "미확인"
   },
   "hours23Guide": "",
   "phone": "+81 3-5312-6501",
   "walk": "호텔 도보 20분(1.4km)",
   "note": "밤 12시가 넘어도 열려 있는 유일급 안전판. 관광객·현지인 반반.",
   "tip": "가격 착하고 자리 많음. 맛은 무난(체인).",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−17−13 雀のおじさんビル 1-4F",
   "lat": 35.692537,
   "lng": 139.7030539,
   "map": "https://maps.google.com/?cid=8121084490993100929",
   "cid": "8121084490993100929",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r041",
   "image": "./images/restaurants/r041.jpg",
   "name": "네기시 新宿L타워",
   "jp": "ねぎし 新宿エルタワー店",
   "google_name": "네기시 엘타워점",
   "genre": "규탄 정식",
   "genre_full": "규탄 정식",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "739",
   "hours": {
    "d21": "10:30~22:00",
    "d22": "10:30~22:00",
    "d23": "10:30~22:00",
    "d24": "10:30~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3348-2255",
   "walk": "호텔 도보 8분(0.6km)",
   "note": "부담 없이 고기+보리밥. 어머니도 편한 맛.",
   "tip": "호텔 가장 가까운 든든한 한 끼. 21:30 이후엔 마감 임박.",
   "awards": "",
   "addr": "일본 〒163-1590 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−6−1 Shinjuku L Tower, B2F",
   "lat": 35.6923321,
   "lng": 139.6976388,
   "map": "https://maps.google.com/?cid=14215629536858447785",
   "cid": "14215629536858447785",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r042",
   "image": "./images/restaurants/r042.jpg",
   "name": "신파치 식당 西新宿",
   "jp": "炭火焼干物定食 しんぱち食堂 西新宿店",
   "google_name": "신파치 식당 신주쿠",
   "genre": "일본 가정식",
   "genre_full": "일본 가정식 · 히모노 정식",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "아침 정식 약 500~900엔",
   "tabelog": "3.33",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "07:00~22:40",
    "d22": "07:00~22:40",
    "d23": "07:00~22:40",
    "d24": "07:00~22:40"
   },
   "hours23Guide": "",
   "phone": "+81 3-6302-0690",
   "walk": "호텔 도보 9분(0.6km)",
   "note": "2일차 아침을 이미 이곳으로 정하셨습니다. 3일차에도 가장 확실한 선택. 한국인 도쿄 아침밥 리스트 1순위.",
   "tip": "아침 4종(은연어·사바 문화보시·정어리·돼지고기 달걀) 500~600엔. 밥 추가 33~99엔. 카운터 중심, 10분 식사 가능.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−15−9 Kcビル 1F",
   "lat": 35.6890294,
   "lng": 139.6971351,
   "map": "https://maps.google.com/?cid=14023482379824896455",
   "cid": "14023482379824896455",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r043",
   "image": "./images/restaurants/r043.jpg",
   "name": "무사시노 모리 커피 다이너 新宿중앙공원",
   "jp": "武蔵野森珈琲 Diner 新宿中央公園",
   "google_name": "무사시노모리 다이너",
   "genre": "다이너",
   "genre_full": "다이너 · 모닝 세트",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 1,000~1,800엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "1,609",
   "hours": {
    "d21": "07:00~22:00",
    "d22": "07:00~22:00",
    "d23": "07:00~22:00",
    "d24": "07:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5909-0588",
   "walk": "호텔 도보 6분(0.4km)",
   "note": "4.3·1,600리뷰. 공원 옆 넓은 홀, 소파석.",
   "tip": "호텔에서 가장 가까운 '앉아서 먹는' 아침. 모닝 세트+커피. 07:10 입장 여유.",
   "awards": "",
   "addr": "2 Chome-11-5 Nishishinjuku Shinjuku City, Tokyo 160-0023 일본",
   "lat": 35.6910994,
   "lng": 139.6901793,
   "map": "https://maps.google.com/?cid=12587728146073910520",
   "cid": "12587728146073910520",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r044",
   "image": "./images/restaurants/r044.jpg",
   "name": "카메야 新宿",
   "jp": "かめや 新宿",
   "google_name": "카메야 신주쿠점",
   "genre": "입식 소바",
   "genre_full": "입식 소바·우동",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 400~700엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "2,471",
   "hours": {
    "d21": "06:20~23:00",
    "d22": "휴무",
    "d23": "06:20~23:00",
    "d24": "06:20~23:00"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "호텔 도보 18분(1.3km)",
   "note": "4.2·2,471리뷰의 서서 먹는 소바. 현지인 아침 단골.",
   "tip": "가쓰동 세트 600엔대. 5~10분이면 끝나 시간이 빠듯할 때 최적.",
   "awards": "",
   "addr": "1 Chome-2-10 Nishishinjuku Shinjuku City, Tokyo 160-0023 일본",
   "lat": 35.6931112,
   "lng": 139.6994572,
   "map": "https://maps.google.com/?cid=614562487157913321",
   "cid": "614562487157913321",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r045",
   "image": "./images/restaurants/r045.jpg",
   "name": "만하탄 테이블 (호텔 조식)",
   "jp": "マンハッタンタブル / 新宿ワシントンホテル",
   "google_name": "Manhattan Table",
   "genre": "호텔 뷔페 조식",
   "genre_full": "호텔 뷔페 조식",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "기타"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 2,500~3,500엔(1인)",
   "tabelog": null,
   "google": 4.1,
   "reviews": "349",
   "hours": {
    "d21": "06:30~10:30 · 17:30~22:30",
    "d22": "06:30~10:30 · 17:30~22:30",
    "d23": "06:30~10:30 · 17:30~22:30",
    "d24": "06:30~10:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3344-6109",
   "walk": "호텔 내(0분)",
   "note": "이동 0분. 3인 모두 확실하게 먹는 선택.",
   "tip": "조식 포함 여부 예약 확인 필요. 07:40 입장이면 08:10 종료 가능.",
   "awards": "",
   "addr": "일본 〒160-8336 Tokyo, Shinjuku City, Nishishinjuku, 3 Chome−2−9 Shinjuku Washington Hotel, 25F",
   "lat": 35.6866843,
   "lng": 139.6929721,
   "map": "https://maps.google.com/?cid=13869164142502385547",
   "cid": "13869164142502385547",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r046",
   "image": "./images/restaurants/r046.jpg",
   "name": "후지 소바 新宿西口",
   "jp": "富士そば 新宿西口",
   "google_name": "Fuji Soba",
   "genre": "입식 소바",
   "genre_full": "입식 소바",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 400~700엔",
   "tabelog": null,
   "google": 3.6,
   "reviews": "751",
   "hours": {
    "d21": "04:00~翌03:00",
    "d22": "04:00~翌03:00",
    "d23": "04:00~翌03:00",
    "d24": "04:00~翌03:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6276-3527",
   "walk": "호텔 도보 15분(1.1km)",
   "note": "24시간에 가까운 운영. 관광객도 부담 없음.",
   "tip": "호텔에서 조금 멀지만 '무조건 열려 있다'는 안전판.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−19−12 鮎沢ビル",
   "lat": 35.6883288,
   "lng": 139.6967929,
   "map": "https://maps.google.com/?cid=4790566364088927087",
   "cid": "4790566364088927087",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r047",
   "image": "./images/restaurants/r047.jpg",
   "name": "마츠야 西新宿",
   "jp": "松屋 西新宿",
   "google_name": "Matsuya",
   "genre": "규동 체인 24시간",
   "genre_full": "규동 체인 24시간",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "기타"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 500~800엔",
   "tabelog": null,
   "google": 3.5,
   "reviews": "471",
   "hours": {
    "d21": "미확인",
    "d22": "미확인",
    "d23": "미확인",
    "d24": "미확인"
   },
   "hours23Guide": "",
   "phone": "+81 80-5928-0452",
   "walk": "호텔 도보 10분(0.7km)",
   "note": "한국인에게 익숙한 규동. 아침 정식 590엔.",
   "tip": "식권기. 3인 2,000엔 이하. 07:40에도 당연히 영업.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 5 Chome−10−14 西新宿橋谷田ビル Matsuya, 1F・B1F",
   "lat": 35.690556,
   "lng": 139.685704,
   "map": "https://maps.google.com/?cid=3733105804330390523",
   "cid": "3733105804330390523",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r048",
   "image": "./images/restaurants/r048.jpg",
   "name": "요시노야 新宿1초메",
   "jp": "吉野家 新宿1丁目",
   "google_name": "요시노야",
   "genre": "규동 체인 24시간",
   "genre_full": "규동 체인 24시간",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "기타"
   ],
   "slots": [
    "d3-breakfast"
   ],
   "budget": "약 500~800엔",
   "tabelog": null,
   "google": 3.6,
   "reviews": "458",
   "hours": {
    "d21": "미확인",
    "d22": "미확인",
    "d23": "미확인",
    "d24": "미확인"
   },
   "hours23Guide": "",
   "phone": "+81 3-5363-1828",
   "walk": "호텔 도보 18분(1.3km)",
   "note": "가장 무난한 24시간 선택.",
   "tip": "호텔에서 1.3km. 급할 때는 마츠야가 가깝습니다.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 1 Chome−33−10 グランカーサ新宿御苑",
   "lat": 35.6912582,
   "lng": 139.7114981,
   "map": "https://maps.google.com/?cid=9595487602040086625",
   "cid": "9595487602040086625",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r049",
   "image": "./images/restaurants/r049.jpg",
   "name": "도토루 커피 新宿西口",
   "jp": "ドトールコーヒー 新宿西口",
   "google_name": "Doutor",
   "genre": "카페",
   "genre_full": "카페 · 모닝 세트",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "약 500~800엔",
   "tabelog": null,
   "google": 3.6,
   "reviews": "1,110",
   "hours": {
    "d21": "07:00~20:30",
    "d22": "07:00~20:30",
    "d23": "07:00~20:30",
    "d24": "06:30~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3345-9668",
   "walk": "호텔 도보 12분(0.9km)",
   "note": "샌드위치+커피로 가볍게.",
   "tip": "앉아서 5분. 빵 안 먹는 아침이면 여기.",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−13−8 朝日新宿ビル",
   "lat": 35.6895669,
   "lng": 139.6966217,
   "map": "https://maps.google.com/?cid=16651025341470900030",
   "cid": "16651025341470900030",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r050",
   "image": "./images/restaurants/r050.jpg",
   "name": "오히츠젠 탄보 代々木본점",
   "jp": "おひつ膳 田んぼ 代々木本店",
   "google_name": "오히츠젠 탄보 요요기 본점",
   "genre": "일본 가정식",
   "genre_full": "일본 가정식 · おひつごはん",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-breakfast",
    "d4-breakfast"
   ],
   "budget": "아침정식 1,200엔",
   "tabelog": "3.50",
   "google": 4.2,
   "reviews": "1,216",
   "hours": {
    "d21": "08:00~21:00",
    "d22": "08:00~21:00",
    "d23": "08:00~21:00",
    "d24": "08:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3320-0727",
   "walk": "신주쿠역→代々木 1정거장, 역에서 도보 3분",
   "note": "4.2. '일본 가정식 아침'을 제대로 느끼려면 이쪽.",
   "tip": "08:00 오픈 이라 08:20 출발 일정에는 못 씁니다. 4일차(화) 오전이 여유로우면 여기.",
   "awards": "",
   "addr": "일본 〒151-0053 Tokyo, Shibuya, Yoyogi, 1 Chome−41−9 ＤＭＫ代々木ビル １階",
   "lat": 35.6823969,
   "lng": 139.6998808,
   "map": "https://maps.google.com/?cid=9400772576609031271",
   "cid": "9400772576609031271",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r051",
   "image": "./images/restaurants/r051.jpg",
   "name": "텐동 이츠키 銀座",
   "jp": "天丼 いつき 銀座",
   "google_name": "긴자이츠키",
   "genre": "텐동",
   "genre_full": "텐동 · 튀김 덮밥",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "1,662",
   "hours": {
    "d21": "11:00~21:30",
    "d22": "11:00~21:30",
    "d23": "11:00~21:30",
    "d24": "11:00~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6263-2988",
   "walk": "MUJI 도보 3분(0.2km)",
   "note": "한국인 '긴자 가성비 텐동'으로 자주 언급. 회전 빠름.",
   "tip": "40분 점심에 가장 안전. 공휴일에도 영업 확인. 라스트오더 여유.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 西３−1 インズ1 2F",
   "lat": 35.6740082,
   "lng": 139.7643419,
   "map": "https://maps.google.com/?cid=14057401687032445773",
   "cid": "14057401687032445773",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r052",
   "image": "./images/restaurants/r052.jpg",
   "name": "고다이메 하나야마 우동 銀座",
   "jp": "五代目 花山うどん 銀座店",
   "google_name": "고다이메 하나야마 우동 긴자점",
   "genre": "우동",
   "genre_full": "우동 · 鬼ひも川(넓적 우동)",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": "3.63",
   "google": 4.2,
   "reviews": "2,590",
   "hours": {
    "d21": "11:00~16:00",
    "d22": "11:00~16:00",
    "d23": "11:00~16:00",
    "d24": "11:00~15:30 · 17:30~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6264-7336",
   "walk": "MUJI 도보 9분(0.6km)",
   "note": "브리프 기존 후보. 타베로그 우동 百名店, 한국인 블로그 단골(대기 20~40분).",
   "tip": "13시 이후 대기 김. 이름 적고 대기 — 40분 점심엔 위험, 시간 여유 있을 때.",
   "awards": "",
   "addr": "3 Chome-14-13 Ginza Chuo City, Tokyo 104-0061 일본",
   "lat": 35.6699002,
   "lng": 139.7691376,
   "map": "https://maps.google.com/?cid=14087346365638634398",
   "cid": "14087346365638634398",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r053",
   "image": "./images/restaurants/r053.jpg",
   "name": "긴자 사토 요스케",
   "jp": "銀座 佐藤養助",
   "google_name": "긴자 사토요스케",
   "genre": "우동",
   "genre_full": "우동 · 이나니와 우동",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "2,591",
   "hours": {
    "d21": "11:30~14:30 · 17:00~20:00",
    "d22": "11:30~14:30 · 17:00~20:00",
    "d23": "11:30~14:30 · 17:00~21:00",
    "d24": "11:30~14:30 · 17:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6215-6211",
   "walk": "MUJI 도보 8분(0.5km)",
   "note": "브리프 기존 후보. 아키타 이나니와 우동, 차분한 홀.",
   "tip": "13:00 입장이면 충분하나 14:30 마감. 냉우동 2종 비교 세트 추천.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 6 Chome−4−17 銀座出井ビル 1階",
   "lat": 35.6714522,
   "lng": 139.7615542,
   "map": "https://maps.google.com/?cid=12892562419540071658",
   "cid": "12892562419540071658",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r054",
   "image": "./images/restaurants/r054.jpg",
   "name": "히츠마부시 비초 銀座",
   "jp": "ひつまぶし備長 銀座",
   "google_name": "히츠마부시 나고야 빈쵸",
   "genre": "장어 히츠마부시",
   "genre_full": "장어 히츠마부시",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 2,500~4,000엔",
   "tabelog": null,
   "google": 4.5,
   "reviews": "1,721",
   "hours": {
    "d21": "11:00~14:30 · 17:00~20:00",
    "d22": "11:00~14:30 · 17:00~20:00",
    "d23": "11:00~14:30 · 17:00~20:00",
    "d24": "11:00~14:30 · 17:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5159-0231",
   "walk": "MUJI 도보 9분(0.5km)",
   "note": "4.5·1,721리뷰. 장어를 세 가지로 먹는 나고야식.",
   "tip": "14:30 라스트오더라 13:35 종료 가능. 주문 후 15분 소요.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 2 Chome−2−14 マロニエゲート銀座1 12F",
   "lat": 35.6743653,
   "lng": 139.7653544,
   "map": "https://maps.google.com/?cid=11425134349324146809",
   "cid": "11425134349324146809",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r055",
   "image": "./images/restaurants/r055.jpg",
   "name": "우메다치 스시노미도리 銀座",
   "jp": "梅丘寿司の美登利総本店 銀座店",
   "google_name": "스시노미도리 긴자점",
   "genre": "스시",
   "genre_full": "스시 · 니기리·치라시",
   "area": "기타",
   "bigArea": "기타",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 2,500~4,500엔",
   "tabelog": "3.50",
   "google": 4.2,
   "reviews": "5,787",
   "hours": {
    "d21": "11:00~20:30",
    "d22": "11:00~20:30",
    "d23": "11:00~14:00 · 17:00~20:30",
    "d24": "11:00~14:00 · 17:00~20:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-5568-1212",
   "walk": "MUJI 도보 11분(0.8km)",
   "note": "한국인 도쿄 스시 가성비 최상위. 공휴일 대기 30~60분 각오.",
   "tip": "13:00 이후엔 대기 때문에 40분 안에 못 끝날 수 있음. 일정 여유 필요.",
   "awards": "",
   "addr": "東京高速道路山下ビル, １階 中央区銀座８丁目 3番先, 2 Chuo City, Tokyo 104-0061 일본",
   "lat": 35.6704396,
   "lng": 139.7596577,
   "map": "https://maps.google.com/?cid=8679293327778196578",
   "cid": "8679293327778196578",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r056",
   "image": "./images/restaurants/r056.jpg",
   "name": "톤카츠 바이린 銀座본점",
   "jp": "とんかつ ばいりん 銀座本店",
   "google_name": "긴자 바이린 본점",
   "genre": "돈카츠",
   "genre_full": "돈카츠 · 흑돼지 로스",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 2,000~3,000엔",
   "tabelog": null,
   "google": 4.4,
   "reviews": "1,524",
   "hours": {
    "d21": "11:30~20:00",
    "d22": "11:30~20:00",
    "d23": "11:30~20:00",
    "d24": "11:30~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3571-0350",
   "walk": "MUJI 도보 8분(0.6km)",
   "note": "4.4·1,524리뷰. 긴자 돈카츠 노포(1932년).",
   "tip": "회전 보통. 3인이면 로스·히레 각 1 + 사이드.",
   "awards": "",
   "addr": "B1 7 Chome-8-1 Ginza Chuo City, Tokyo 104-0061 일본",
   "lat": 35.6695863,
   "lng": 139.7627483,
   "map": "https://maps.google.com/?cid=8684877893208776297",
   "cid": "8684877893208776297",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r057",
   "image": "./images/restaurants/r057.jpg",
   "name": "그릴 스위스 銀座",
   "jp": "グリルスイス 銀座",
   "google_name": "긴자 스위스 본점",
   "genre": "양식",
   "genre_full": "양식 · 오므라이스·함박",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "기타"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:00~20:30",
    "d22": "11:00~20:30",
    "d23": "11:00~20:30",
    "d24": "11:00~20:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3563-3206",
   "walk": "MUJI 도보 2분(0.2km)",
   "note": "긴자 서양식 노포. 한국인 '긴자 오므라이스' 검색 상위.",
   "tip": "MUJI 바로 옆이라 시간 절약. 오므라이스·함박 15분 내.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 3 Chome−4−4 大倉別館 2F",
   "lat": 35.6730538,
   "lng": 139.7661496,
   "map": "https://maps.google.com/?cid=9940870951959565990",
   "cid": "9940870951959565990",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r058",
   "image": "./images/restaurants/r058.jpg",
   "name": "긴자 시라이시 (소바·우동)",
   "jp": "銀座 白石",
   "google_name": "Ginza Soba Udon Shiraishi",
   "genre": "소바",
   "genre_full": "소바·우동",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": null,
   "google": 4.8,
   "reviews": "1,862",
   "hours": {
    "d21": "11:30~23:00",
    "d22": "11:30~23:00",
    "d23": "11:30~翌06:00",
    "d24": "11:30~翌06:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6821-2232",
   "walk": "MUJI 도보 11분(0.8km)",
   "note": "4.8·1,861리뷰. 늦은 시간까지 하는 소바/우동.",
   "tip": "회전 빠름. 40분 점심에 적합. 공휴일 영업 확인.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 8 Chome−4−3 銀座山田ビル B1F",
   "lat": 35.6693835,
   "lng": 139.7603922,
   "map": "https://maps.google.com/?cid=17626268376939932783",
   "cid": "17626268376939932783",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r059",
   "image": "./images/restaurants/r059.jpg",
   "name": "긴자 오보로즈키",
   "jp": "銀座 朧月",
   "google_name": "긴자 오보로즈키",
   "genre": "라멘",
   "genre_full": "라멘·츠케멘",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,000~1,500엔",
   "tabelog": null,
   "google": 3.9,
   "reviews": "1,927",
   "hours": {
    "d21": "11:00~15:20 · 17:00~22:50",
    "d22": "11:00~15:20 · 17:00~21:50",
    "d23": "11:00~15:20 · 17:00~21:50",
    "d24": "11:00~15:20 · 17:00~21:50"
   },
   "hours23Guide": "",
   "phone": "+81 3-6280-6166",
   "walk": "MUJI 도보 12분(0.8km)",
   "note": "긴자에서 라멘이 당길 때. 15:20까지라 시간 맞음.",
   "tip": "대기 10~20분. 점심 피크 12:30~13:10.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 6 Chome−4−13 浅黄ビル 1F",
   "lat": 35.6712186,
   "lng": 139.7613528,
   "map": "https://maps.google.com/?cid=5637194760360720505",
   "cid": "5637194760360720505",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r060",
   "image": "./images/restaurants/r060.jpg",
   "name": "텐푸라 콘도",
   "jp": "天ぷら 近藤",
   "google_name": "덴푸라 콘도",
   "genre": "텐푸라",
   "genre_full": "텐푸라 · 런치 코스",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "스시·텐푸라"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "런치 약 3,000~5,000엔",
   "tabelog": null,
   "google": 4.4,
   "reviews": "997",
   "hours": {
    "d21": "12:00~15:00 · 17:00~21:00",
    "d22": "휴무",
    "d23": "12:00~15:00 · 17:00~20:00",
    "d24": "12:00~15:00 · 17:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5568-0923",
   "walk": "MUJI 도보 6분(0.4km)",
   "note": "미슐랭 스타 경력의 텐푸라. 런치가 저렴한 편.",
   "tip": "공휴일 영업 여부 전화 확인 필수 (03-5568-0923). 예약 권장.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−5−13 Sakaguchi Bld., ９F",
   "lat": 35.6711696,
   "lng": 139.7631786,
   "map": "https://maps.google.com/?cid=5826650250164247742",
   "cid": "5826650250164247742",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r061",
   "image": "./images/restaurants/r061.jpg",
   "name": "麺屋いしヰ 東京銀座",
   "jp": "麺屋いしヰ 東京銀座 MENYA ISHII",
   "google_name": "麺屋いしヰ 東京銀座 MENYA ISHII WAGYU UDON",
   "genre": "와규 우동",
   "genre_full": "와규 우동",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": "3.30",
   "google": 4.9,
   "reviews": "2,933",
   "hours": {
    "d21": "09:00~20:00",
    "d22": "09:00~20:00",
    "d23": "09:00~20:00",
    "d24": "09:00~20:00"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "MUJI 도보 12분(0.9km)",
   "note": "4.9·2,919리뷰의 화제점. 와규 얹은 우동.",
   "tip": "구글 평점 매우 높지만 타베로그는 3.30(신규). 대기 가능.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 2 Chome−14−17 第2 Watanabe. Bl, 1階 麺屋いしヰ 東京銀座 MENYA ISHII WAGYU UDON",
   "lat": 35.6715097,
   "lng": 139.7703835,
   "map": "https://maps.google.com/?cid=828281333870840107",
   "cid": "828281333870840107",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r062",
   "image": "./images/restaurants/r062.jpg",
   "name": "와코 아넥스 티살롱",
   "jp": "和光 アネックス ティーサロン",
   "google_name": "WAKO Ginza Annex Tea Salon",
   "genre": "티살롱",
   "genre_full": "티살롱 · 케이크 세트",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "579",
   "hours": {
    "d21": "10:30~19:00",
    "d22": "10:30~18:30",
    "d23": "10:30~18:30",
    "d24": "10:30~19:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5250-3100",
   "walk": "MUJI 도보 4분(0.2km)",
   "note": "와코 시계탑 옆. 긴자다운 조용한 티타임.",
   "tip": "14:20이면 대기 거의 없음. 케이크 세트+홍차.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 4 Chome−4−8 和光アネックス",
   "lat": 35.67181679999999,
   "lng": 139.7647701,
   "map": "https://maps.google.com/?cid=4335013421542217133",
   "cid": "4335013421542217133",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r063",
   "image": "./images/restaurants/r063.jpg",
   "name": "트리콜로 본점",
   "jp": "トリコロール 本店",
   "google_name": "토리코로루",
   "genre": "킷사텐",
   "genre_full": "킷사텐 · 푸딩·케이크",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": null,
   "google": 4.3,
   "reviews": "1,674",
   "hours": {
    "d21": "08:00~19:00",
    "d22": "08:00~19:00",
    "d23": "08:00~19:00",
    "d24": "휴무"
   },
   "hours23Guide": "",
   "phone": "+81 3-3571-1811",
   "walk": "MUJI 도보 7분(0.5km)",
   "note": "1936년 창업 긴자 킷사텐. 한국인 '긴자 레트로 카페' 단골.",
   "tip": "푸딩·치즈케이크. 좌석 2층, 회전 보통.",
   "awards": "",
   "addr": "5 Chome-9-17 Ginza Chuo City, Tokyo 104-0061 일본",
   "lat": 35.6702154,
   "lng": 139.7650596,
   "map": "https://maps.google.com/?cid=10794017147597643205",
   "cid": "10794017147597643205",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r064",
   "image": "./images/restaurants/r064.jpg",
   "name": "츠바키야 커피점 銀座",
   "jp": "椿屋珈琲店 銀座",
   "google_name": "츠바키야 커피 긴자본관",
   "genre": "킷사텐",
   "genre_full": "킷사텐 · 사이폰 커피",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,200~2,500엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "10:00~22:30",
    "d22": "10:00~22:30",
    "d23": "10:00~22:30",
    "d24": "10:00~22:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3572-4949",
   "walk": "MUJI 도보 6분(0.4km)",
   "note": "긴자 8초메. 붉은 벨벳 의자 클래식 인테리어.",
   "tip": "22:30까지라 일정 밀려도 안전. 케이크 세트 있음.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 7 Chome−7−11 第一菅原ビル 2F・3F",
   "lat": 35.6689814,
   "lng": 139.7618337,
   "map": "https://maps.google.com/?cid=8320953175893531484",
   "cid": "8320953175893531484",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r065",
   "image": "./images/restaurants/r065.jpg",
   "name": "킷사 YOU",
   "jp": "喫茶YOU",
   "google_name": "킷사 유",
   "genre": "킷사텐",
   "genre_full": "킷사텐 · 오므라이스·계란 샌드",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:00~15:30",
    "d22": "11:00~15:30",
    "d23": "11:00~15:00",
    "d24": "11:00~15:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6226-0482",
   "walk": "MUJI 도보 10분(0.6km)",
   "note": "한국인 '긴자 계란샌드' 최다 언급. 다만 15:00 마감 .",
   "tip": "14:20 입장이면 마지막 주문과 겹칠 수 있음. 대기 있으면 다른 곳.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 4 Chome−13−17 高野ビル 1F・2F",
   "lat": 35.6694644,
   "lng": 139.7686589,
   "map": "https://maps.google.com/?cid=5254053800351163798",
   "cid": "5254053800351163798",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r066",
   "image": "./images/restaurants/r066.jpg",
   "name": "라뒤레 도쿄 긴자",
   "jp": "ラデュレ 東京銀座",
   "google_name": "라뒤레 살롱드테",
   "genre": "프렌치 살롱",
   "genre_full": "프렌치 살롱 · 마카롱·차",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "720",
   "hours": {
    "d21": "10:00~20:00",
    "d22": "10:00~20:00",
    "d23": "10:00~20:00",
    "d24": "10:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6271-0736",
   "walk": "MUJI 도보 3분(0.2km)",
   "note": "긴자 미츠코시 안. 여동생과 디저트 타임용.",
   "tip": "백화점 휴관일만 주의. 마카롱 포장 가능.",
   "awards": "",
   "addr": "일본 〒104-8212 Tokyo, Chuo City, Ginza, 4 Chome−6−16 三越銀座店 本館 地下2F",
   "lat": 35.6712864,
   "lng": 139.7657382,
   "map": "https://maps.google.com/?cid=2787267370133271000",
   "cid": "2787267370133271000",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r067",
   "image": "./images/restaurants/r067.jpg",
   "name": "야키니쿠 요로니쿠 (에비스)",
   "jp": "蕃 YORONIKU",
   "google_name": "에비스 요로니쿠",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 트러플 스키야키 코스",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "코스 14,900엔(3인 약 49,000엔+음료)",
   "tabelog": "4.25",
   "google": 4.6,
   "reviews": "1,103",
   "hours": {
    "d21": "17:00~24:00",
    "d22": "17:00~24:00",
    "d23": "17:00~24:00",
    "d24": "17:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3440-4629",
   "walk": "에비스역 동구 도보 1분(0.1km)",
   "note": "생일 1순위 . 타베로그 4.25 · Tabelog Award 2026 Silver · 야키니쿠 百名店. 3인 슬롯(17:00~22:00) 실시간 확인됨.",
   "tip": "TableCheck 예약(카드 필요). 48시간 전 50%·24시간 전 100% 취소료. 개인실 없음(테이블/반개인실).",
   "awards": "Tabelog Award 2026 Silver · 焼肉 TOKYO 百名店 2026",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 1 Chome−11−5 GEMS恵比寿 8F",
   "lat": 35.6463571,
   "lng": 139.7118057,
   "map": "https://maps.google.com/?cid=8180550300697386920",
   "cid": "8180550300697386920",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r068",
   "image": "./images/restaurants/r068.jpg",
   "name": "USHIGORO S. 신주쿠",
   "jp": "USHIGORO S. SHINJUKU",
   "google_name": "USHIGORO S. SHINJUKU",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 전석 개인실",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "3인은 Q 25,000 / K 32,000엔 코스(+10%)",
   "tabelog": "3.76",
   "google": 4.3,
   "reviews": "644",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:30",
    "d22": "12:00~15:00 · 17:00~23:30",
    "d23": "12:00~15:00 · 17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3341-1129",
   "walk": "호텔 도보 19분(1.3km) · 신주쿠3초메역 직결",
   "note": "전 좌석 완전 개인실 + 전담 구이사. 11/23 디너 슬롯(16:00~21:30) 확인됨.",
   "tip": "식사 후 걸어서 숙소 복귀 가능. '誕生日' 목적을 예약서에 기재.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−17−10 Hulic & New Shinjuku, 11F USHIGORO S. SHINJUKU",
   "lat": 35.6921367,
   "lng": 139.702768,
   "map": "https://maps.google.com/?cid=12701156086639784456",
   "cid": "12701156086639784456",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r069",
   "image": "./images/restaurants/r069.jpg",
   "name": "야키니쿠 잠보 하나레",
   "jp": "焼肉ジャンボ はなれ",
   "google_name": "야키니쿠 잠보 하나레",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 特選 코스",
   "area": "기타",
   "bigArea": "기타",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "特選 15,000 / 샤토브리앙 22,000엔",
   "tabelog": "4.34",
   "google": 4.6,
   "reviews": "699",
   "hours": {
    "d21": "17:00~23:00",
    "d22": "17:00~23:00",
    "d23": "17:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 50-5487-7887",
   "walk": "신주쿠→本郷三丁目 오에도선 21분·220엔",
   "note": "타베로그 4.34 · Award 2026 Bronze. '야키니쿠계의 전설' 2호점. 로컬 비중 높음.",
   "tip": "전화 03-5689-8705. 신주쿠에서 지하철 20분 이동을 감수할 가치가 있는지가 관건.",
   "awards": "",
   "addr": "3 Chome-27-9 Hongo Bunkyo City, Tokyo 113-0033 일본",
   "lat": 35.7066126,
   "lng": 139.7624277,
   "map": "https://maps.google.com/?cid=17595546644543129599",
   "cid": "17595546644543129599",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r070",
   "image": "./images/restaurants/r070.jpg",
   "name": "긴자 시몬",
   "jp": "銀座 鰤門",
   "google_name": "Ginza Seamon",
   "genre": "스시",
   "genre_full": "스시 · 에도마에 코스",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "디너 18,000~27,000엔(+10%)",
   "tabelog": "3.52",
   "google": 4.4,
   "reviews": "796",
   "hours": {
    "d21": "11:30~15:00 · 17:00~22:00",
    "d22": "11:30~15:00 · 17:00~22:00",
    "d23": "11:30~15:00 · 17:00~22:00",
    "d24": "11:30~15:00 · 17:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5537-0010",
   "walk": "긴자역 도보 2분",
   "note": "개인실 5실 보유. 공휴일에도 여는 드문 정통 스시. 3인 예산이 가장 무리 없음.",
   "tip": "전화 03-5537-0010. 13세 이하 카운터 불가 → 성인 3인이라 오히려 조용함.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−5−13 坂口ビル ６階",
   "lat": 35.6711879,
   "lng": 139.7630799,
   "map": "https://maps.google.com/?cid=3596771567629889380",
   "cid": "3596771567629889380",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r071",
   "image": "./images/restaurants/r071.jpg",
   "name": "스시 하츠메 (에비스)",
   "jp": "恵比寿 鮨 はつめ",
   "google_name": "Ebisu Sushi Hatsume",
   "genre": "스시",
   "genre_full": "스시 · 22품 오마카세",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "스탠다드 10,890엔(3인 32,670엔)",
   "tabelog": "3.55",
   "google": 4.7,
   "reviews": "687",
   "hours": {
    "d21": "17:00~23:00",
    "d22": "휴무",
    "d23": "17:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6456-2070",
   "walk": "에비스역 도보 7분(0.5km)",
   "note": "가성비 최강(3인 3만 엔대). 11/23 17:00·19:30 슬롯 확인. 에비스 쇼핑 직후 바로.",
   "tip": "일제 스타트라 늦으면 입장 거절. 3일 전 50%·2일 전 100% 취소료.",
   "awards": "",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 1 Chome−25−11 1F",
   "lat": 35.6465933,
   "lng": 139.7161474,
   "map": "https://maps.google.com/?cid=13486702778845562549",
   "cid": "13486702778845562549",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r072",
   "image": "./images/restaurants/r072.jpg",
   "name": "긴자 이치키",
   "jp": "銀座 一㐂",
   "google_name": "긴자 이치키",
   "genre": "스시",
   "genre_full": "스시 · 오마카세",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "디너 18,000엔(21품)",
   "tabelog": "3.54",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "12:00~14:30 · 17:00~23:00",
    "d22": "12:00~14:30 · 17:00~23:00",
    "d23": "12:00~14:30 · 17:00~23:00",
    "d24": "12:00~14:30 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6264-5390",
   "walk": "긴자역 도보 1분",
   "note": "2~8인 완전 개인실. 공휴일 저녁 리뷰 다수. 당일 예약 가능한 편.",
   "tip": "전화 03-6264-5390. 긴자 낮 동선과 이어 붙이기 가장 쉬움.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−4−15 Nishigo.Building, 4F",
   "lat": 35.671569,
   "lng": 139.7629418,
   "map": "https://maps.google.com/?cid=8310604357826040181",
   "cid": "8310604357826040181",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r073",
   "image": "./images/restaurants/r073.jpg",
   "name": "야키니쿠 우시고로 니시아자부 본점",
   "jp": "焼肉うしごろ 西麻布本店",
   "google_name": "Yakiniku Ushigoro Nishiazabu",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "약 10,000~15,000엔",
   "tabelog": "3.63",
   "google": 4.5,
   "reviews": "328",
   "hours": {
    "d21": "11:30~15:00 · 16:00~23:30",
    "d22": "16:00~23:30",
    "d23": "11:30~15:00 · 16:00~23:30",
    "d24": "16:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3406-4129",
   "walk": "롯폰기 힐즈 도보 9분(0.7km)",
   "note": "완전 개인실 1실+반개인실 4실. 롯폰기 일루미네이션과 결합 최적.",
   "tip": "전화 03-3406-4129 / TableCheck. 18:00 롯폰기안이면 여기.",
   "awards": "",
   "addr": "일본 〒106-0031 Tokyo, Minato City, Nishiazabu, 2 Chome−24−14 Barbizon 73, 1F",
   "lat": 35.6600656,
   "lng": 139.7225208,
   "map": "https://maps.google.com/?cid=16303339659505810183",
   "cid": "16303339659505810183",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r074",
   "image": "./images/restaurants/r074.jpg",
   "name": "야키토리 하치베이 六本木",
   "jp": "焼とりの八兵衛 六本木店",
   "google_name": "Yakitori Hachibei (Roppongi Store)",
   "genre": "야키토리 코스",
   "genre_full": "야키토리 코스",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "약 6,000~8,000엔",
   "tabelog": "3.54",
   "google": 4.3,
   "reviews": "298",
   "hours": {
    "d21": "17:30~22:00",
    "d22": "17:30~22:00",
    "d23": "17:30~22:00",
    "d24": "17:30~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3475-1689",
   "walk": "롯폰기역 도보 4분",
   "note": "개인실 있고 담백한 규슈식. 롯폰기 18시 저녁안.",
   "tip": "생일 2차로도. 코스+프리플로우.",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 7 Chome−4−5 六本木稲垣ビル B1F",
   "lat": 35.6654943,
   "lng": 139.7286427,
   "map": "https://maps.google.com/?cid=7795425068181862802",
   "cid": "7795425068181862802",
   "src": "AB",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r075",
   "image": "./images/restaurants/r075.jpg",
   "name": "규카츠 교토 가쓰규 (JAPAN FOOD HALL)",
   "jp": "京都勝牛 / JAPAN FOOD HALL",
   "google_name": "GYUKATSU Kyoto Katsugyu Narita International Airport JAPAN FOOD HALL",
   "genre": "규카츠 정식",
   "genre_full": "규카츠 정식",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "야키니쿠",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 2,000~3,000엔",
   "tabelog": null,
   "google": 4.8,
   "reviews": "2,394",
   "hours": {
    "d21": "07:30~22:00",
    "d22": "07:30~22:00",
    "d23": "07:30~22:00",
    "d24": "07:30~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-8092",
   "walk": "본관 2F JAPAN FOOD HALL",
   "note": "한국인에게 가장 익숙한 규카츠. 공항에서 마지막 일본식.",
   "tip": "2F 푸드홀. 4F 레스토랑가와 층이 다르니 동선 확인 후 이동.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, 1-1 第2旅客ターミナル本館 2F JAPAN FOOD HALL GYUKATSU Kyoto Katsugyu Narita International Airport JAPAN FOOD HALL, 内",
   "lat": 35.7736397,
   "lng": 140.3898337,
   "map": "https://maps.google.com/?cid=12140851118368643591",
   "cid": "12140851118368643591",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r076",
   "image": "./images/restaurants/r076.jpg",
   "name": "라 톡 (카레)",
   "jp": "ラ・トック",
   "google_name": "La Toque (ラ・トック)",
   "genre": "일본식 카레",
   "genre_full": "일본식 카레 · 할랄 일부",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,200~2,000엔",
   "tabelog": null,
   "google": 4.4,
   "reviews": "417",
   "hours": {
    "d21": "07:30~21:00",
    "d22": "07:30~21:00",
    "d23": "07:30~21:00",
    "d24": "07:30~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6193",
   "walk": "본관 4F (도보 2분)",
   "note": "4.4. 공항치고 진한 카레. 라스트오더 20:30이라 점심 여유.",
   "tip": "보안검색 전 4F. 12:30 입장이면 13:00 종료.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, 1-1 第2旅客ターミナルビル本館 4F Narita International Airport",
   "lat": 35.7730544,
   "lng": 140.3891366,
   "map": "https://maps.google.com/?cid=13036892922385083742",
   "cid": "13036892922385083742",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r077",
   "image": "./images/restaurants/r077.jpg",
   "name": "츠루한 (우동·소바)",
   "jp": "麺処つるはん",
   "google_name": "Tsuruhan Narita International Airport",
   "genre": "우동",
   "genre_full": "우동·소바·가쓰동",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,000~2,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "219",
   "hours": {
    "d21": "07:00~21:00",
    "d22": "07:00~21:00",
    "d23": "07:00~21:00",
    "d24": "07:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6130",
   "walk": "본관 4F",
   "note": "가볍게 국물 한 그릇. 3인 회전 빠름.",
   "tip": "11:00 오픈이라 12:20엔 문제 없음.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, 1-1 Tsuruhan Narita International Airport, 成田国際空港第2旅客ターミナル本館4階",
   "lat": 35.7743865,
   "lng": 140.3879078,
   "map": "https://maps.google.com/?cid=14668969936537797064",
   "cid": "14668969936537797064",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r078",
   "image": "./images/restaurants/r078.jpg",
   "name": "소지보 (信州そば)",
   "jp": "信州そば処 そじ坊",
   "google_name": "Sojibo",
   "genre": "소바",
   "genre_full": "소바 · 생와사비",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,200~2,000엔",
   "tabelog": null,
   "google": 3.9,
   "reviews": "382",
   "hours": {
    "d21": "07:00~21:00",
    "d22": "07:00~21:00",
    "d23": "07:00~21:00",
    "d24": "07:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6133",
   "walk": "본관 4F",
   "note": "직접 가는 생와사비 소바. 비행기 보이는 좌석 있음.",
   "tip": "할랄 표기 메뉴 있음. 07:00부터 영업.",
   "awards": "",
   "addr": "일본 〒282-8601 Chiba, Narita, Furugome, 1-1 第二旅客ターミナルビル本館 ４階 Narita International Airport",
   "lat": 35.7752662,
   "lng": 140.3869315,
   "map": "https://maps.google.com/?cid=5677103685836143873",
   "cid": "5677103685836143873",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r079",
   "image": "./images/restaurants/r079.jpg",
   "name": "T'sたんたん (비건 탄탄면)",
   "jp": "T'sたんたん",
   "google_name": "T's Tantan Terminal 2",
   "genre": "비건 라멘",
   "genre_full": "비건 라멘",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,200~1,800엔",
   "tabelog": null,
   "google": 4.7,
   "reviews": "203",
   "hours": {
    "d21": "07:30~21:00",
    "d22": "07:30~21:00",
    "d23": "07:30~21:00",
    "d24": "07:30~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-32-0031",
   "walk": "본관 4F",
   "note": "4.7. 채식·비건 여행자 필수. 매운맛 조절 가능.",
   "tip": "육수 없이도 진함. 현금·카드.",
   "awards": "",
   "addr": "1-1 Furugome Narita, Chiba 282-0004 일본",
   "lat": 35.7732679,
   "lng": 140.3890873,
   "map": "https://maps.google.com/?cid=13899954962059047000",
   "cid": "13899954962059047000",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r080",
   "image": "./images/restaurants/r080.jpg",
   "name": "츠키지 스시코 (스시)",
   "jp": "築地すし好",
   "google_name": "Tsukiji Sushiko Narita Airport Terminal 2",
   "genre": "스시",
   "genre_full": "스시 · 공항 한정 동",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "스시·텐푸라",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 2,000~4,000엔",
   "tabelog": null,
   "google": 3.9,
   "reviews": "199",
   "hours": {
    "d21": "10:00~21:00",
    "d22": "10:00~21:00",
    "d23": "10:00~21:00",
    "d24": "10:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-33-0505",
   "walk": "본관 4F",
   "note": "마지막 스시. 공항 한정 해산물동 인기.",
   "tip": "12:20 대기 10분 전후. L.O. 20:30.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, 1-1 第2ターミナル 4F Narita International Airport",
   "lat": 35.7745378,
   "lng": 140.3880786,
   "map": "https://maps.google.com/?cid=12977278840548396905",
   "cid": "12977278840548396905",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r081",
   "image": "./images/restaurants/r081.jpg",
   "name": "간조즈시 (회전 스시)",
   "jp": "廻る元祖寿司",
   "google_name": "간소즈시",
   "genre": "회전 스시",
   "genre_full": "회전 스시",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "스시·텐푸라",
    "정식·돈카츠·카레",
    "해산물·회"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,500~3,000엔",
   "tabelog": null,
   "google": 3.9,
   "reviews": "364",
   "hours": {
    "d21": "09:00~21:00",
    "d22": "09:00~21:00",
    "d23": "09:00~21:00",
    "d24": "09:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-8070",
   "walk": "본관 4F",
   "note": "회전이라 아이·어르신 편함. 3인 부담 없음.",
   "tip": "11:00 오픈. 접시 단가제.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, １−1 第2ターミナル 4F 成田国際空港",
   "lat": 35.7745139,
   "lng": 140.3878161,
   "map": "https://maps.google.com/?cid=13290064092537213596",
   "cid": "13290064092537213596",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r082",
   "image": "./images/restaurants/r082.jpg",
   "name": "CAFE & DINING N's COURT",
   "jp": "CAFE & DINING N's COURT",
   "google_name": "Cafe & Dining N's Court",
   "genre": "카페테리아",
   "genre_full": "카페테리아 · 200석",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,200~2,000엔",
   "tabelog": null,
   "google": 3.4,
   "reviews": "283",
   "hours": {
    "d21": "06:45~21:30",
    "d22": "06:45~21:30",
    "d23": "06:45~21:30",
    "d24": "06:45~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6190",
   "walk": "본관 4F",
   "note": "기내식 회사가 운영. 함박·피자·라멘·돈카츠 등 무난한 전부.",
   "tip": "200석이라 자리 걱정 없음. 시간 없을 때 가장 빠름.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, １−1 Terminal 2, 本館4F",
   "lat": 35.773565,
   "lng": 140.3883435,
   "map": "https://maps.google.com/?cid=15865182687940203380",
   "cid": "15865182687940203380",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r083",
   "image": "./images/restaurants/r083.jpg",
   "name": "카미히코키 (일식)",
   "jp": "Japanese cuisine restaurant KAMI-HIKOKI",
   "google_name": "Japanese cuisine restaurant KAMI-HIKOKI",
   "genre": "일식",
   "genre_full": "일식 · 소바·가쓰동",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 3.4,
   "reviews": "142",
   "hours": {
    "d21": "07:00~21:00",
    "d22": "07:00~21:00",
    "d23": "07:00~21:00",
    "d24": "07:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6385",
   "walk": "본관 4F (비행기 뷰)",
   "note": "활주로 보이는 창가석. 단체 대응.",
   "tip": "맛은 무난(3.4). 뷰가 목적이면 여기.",
   "awards": "",
   "addr": "1-1 Furugome Narita, Chiba 282-0004 일본",
   "lat": 35.7746601,
   "lng": 140.3880839,
   "map": "https://maps.google.com/?cid=3292048911042751866",
   "cid": "3292048911042751866",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r084",
   "image": "./images/restaurants/r084.jpg",
   "name": "블루스카이 미소 키친 (보안검색 후)",
   "jp": "BlueSky Miso Kitchen",
   "google_name": "미소 키친",
   "genre": "미소 라멘",
   "genre_full": "미소 라멘 · 위성 3F",
   "area": "나리타공항",
   "bigArea": "나리타공항",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d4-lunch"
   ],
   "budget": "약 1,200~2,000엔",
   "tabelog": "3.70",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "08:00~21:00",
    "d22": "08:00~21:00",
    "d23": "08:00~21:00",
    "d24": "08:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 476-34-6645",
   "walk": "위성 3F(출국심사 후)",
   "note": "보안검색 후 유일한 제대로 된 한 끼. 탑승구 근처.",
   "tip": "출국심사 대기가 길면 여기서 먹는 것도 방법. 4F와 메뉴 다름.",
   "awards": "",
   "addr": "일본 〒282-0004 Chiba, Narita, Furugome, 1-1 Terminal 2, サテライト３階",
   "lat": 35.7749779,
   "lng": 140.39274,
   "map": "https://maps.google.com/?cid=10650273215742311319",
   "cid": "10650273215742311319",
   "src": "A",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r085",
   "image": "./images/restaurants/r085.jpg",
   "name": "히키타 (야키토리)",
   "jp": "ひき田",
   "google_name": "ひき田",
   "genre": "야키토리",
   "genre_full": "야키토리 · ¥20,000~29,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "4.25",
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "17:30~23:00",
    "d22": "17:30~23:00",
    "d23": "17:30~23:00",
    "d24": "휴무"
   },
   "hours23Guide": "",
   "phone": "",
   "walk": "에비스역 도보 2분 (0.2km)",
   "note": "타베로그 리뷰 '장작불·숯불·불씨를 다루는 화입(火入れ)의 미학'",
   "tip": "",
   "awards": "百名店 2026",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 1 Chome−14−15 ラ・レンヌ恵比寿 ４階 ひき田",
   "lat": 35.6456417,
   "lng": 139.709821,
   "map": "https://maps.google.com/?cid=9065919885433972684",
   "cid": "9065919885433972684",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r086",
   "image": "./images/restaurants/r086.jpg",
   "name": "텐푸라 키타가와",
   "jp": "天ぷら 北川",
   "google_name": "덴푸라 키타가와｜에비수의 정통 일식 튀김 전문점",
   "genre": "텐푸라",
   "genre_full": "텐푸라 · ¥20,000~29,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.98",
   "google": 4.8,
   "reviews": "155",
   "hours": {
    "d21": "17:30~22:00",
    "d22": "휴무",
    "d23": "17:30~22:00",
    "d24": "17:30~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 80-3000-7735",
   "walk": "에비스역 도보 4분 (0.2km)",
   "note": "타베로그 리뷰 '사스에(静岡) 생선과 시즈오카 채소, 향·수분·열을 즐기는 텐푸라'",
   "tip": "",
   "awards": "百名店 2025·2026",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 1 Chome−17−15 덴푸라 키타가와｜에비수의 정통 일식 튀김 전문점 EX恵比寿南ビルB1-A",
   "lat": 35.6445323,
   "lng": 139.710238,
   "map": "https://maps.google.com/?cid=1690689513795744845",
   "cid": "1690689513795744845",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r087",
   "image": "./images/restaurants/r087.jpg",
   "name": "소세(Saucer) 다이칸야마",
   "jp": "Saucer（ソーセ）",
   "google_name": "ソーセ Saucer",
   "genre": "프렌치",
   "genre_full": "프렌치 · ¥15,000~19,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.78",
   "google": 4.4,
   "reviews": "49",
   "hours": {
    "d21": "18:00~23:00",
    "d22": "휴무",
    "d23": "18:00~23:00",
    "d24": "18:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6712-7713",
   "walk": "다이칸야마역 도보 8분 (0.6km)",
   "note": "타베로그 리뷰 '소스로 먹는 프렌치', 코스 12품",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 2 Chome−7−10 えびす第３ 地下1階 ソーセ Saucer",
   "lat": 35.6505226,
   "lng": 139.7071529,
   "map": "https://maps.google.com/?cid=6276790317622982230",
   "cid": "6276790317622982230",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r088",
   "image": "./images/restaurants/r088.jpg",
   "name": "야키니쿠 우시미츠 에비스 본점",
   "jp": "焼肉 うしみつ 恵比寿本店",
   "google_name": "Ebisu Ushimitsu",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥8,000~9,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.59",
   "google": 4.8,
   "reviews": "782",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6303-2958",
   "walk": "에비스역 도보 6분 (0.4km)",
   "note": "에비스 역 도보 2분, 우시미츠 그룹의 본점급 매장 / 한국인 후기 포인트 · 한국인 방문 많은 브랜드",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 3 Chome−1−8 ＧＲＡＮ ＥＢＩＳＵ １Ｆ",
   "lat": 35.6455421,
   "lng": 139.7064947,
   "map": "https://maps.google.com/?cid=6857709710348716640",
   "cid": "6857709710348716640",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r089",
   "image": "./images/restaurants/r089.jpg",
   "name": "히로키야 에비스",
   "jp": "ヒロキヤ 恵比寿",
   "google_name": "히로키야 에비스",
   "genre": "야키니쿠(캐주얼)",
   "genre_full": "야키니쿠(캐주얼) · 구글 가격대 '저렴' — 1인 4,000~6,000엔대",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "3,001",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:00",
    "d22": "12:00~15:00 · 17:00~23:00",
    "d23": "12:00~15:00 · 17:00~23:00",
    "d24": "12:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6433-7429",
   "walk": "에비스역 도보 5분 (0.3km)",
   "note": "구글 4.8(리뷰 2,997) — 동네 단위로 리뷰가 두텁게 쌓인 캐주얼 야키니쿠 / 한국인 후기 포인트 · 한국 SNS에서 가성비 야키니쿠로 자주 거론",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 1 Chome−4−7 リエール恵比寿 1F",
   "lat": 35.6483874,
   "lng": 139.7081452,
   "map": "https://maps.google.com/?cid=12903542262972806720",
   "cid": "12903542262972806720",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r090",
   "image": "./images/restaurants/r090.jpg",
   "name": "비프 키친 에비스",
   "jp": "ビーフキッチン 恵比寿店",
   "google_name": "Wagyu beef Yakiniku Beef Kitchen Ebisu",
   "genre": "야키니쿠(캐주얼)",
   "genre_full": "야키니쿠(캐주얼) · ¥8,000~9,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.59",
   "google": 4.7,
   "reviews": "1,292",
   "hours": {
    "d21": "12:00~23:00",
    "d22": "12:00~23:00",
    "d23": "12:00~22:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6452-2291",
   "walk": "에비스역 도보 3분 (0.2km)",
   "note": "에비스 야키니쿠 '예약 인기' 1위(타베로그 11/20 기준)",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 1 Chome−13−3 Gold, 1F",
   "lat": 35.6454959,
   "lng": 139.7103239,
   "map": "https://maps.google.com/?cid=1830549245161587381",
   "cid": "1830549245161587381",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r091",
   "image": "./images/restaurants/r091.jpg",
   "name": "우시고로 칸 에비스 본점",
   "jp": "うしごろ 貫 恵比寿本店",
   "google_name": "Ushigoro Kan Ebisu Honten",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥8,000~9,999",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.65",
   "google": 4.2,
   "reviews": "313",
   "hours": {
    "d21": "11:30~14:30 · 16:00~23:30",
    "d22": "17:00~23:30",
    "d23": "11:30~14:30 · 16:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-5725-2929",
   "walk": "에비스역 도보 1분 (0.1km)",
   "note": "우시고로 그룹 라인 중 '칸'은 가격 대비 만족도 평이 좋은 편",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 1 Chome−8−1 Stm Ebisu Bldg., 1F",
   "lat": 35.646241,
   "lng": 139.7093475,
   "map": "https://maps.google.com/?cid=12352184804547249487",
   "cid": "12352184804547249487",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r092",
   "image": "./images/restaurants/r092.jpg",
   "name": "토리 도쿄 에비스",
   "jp": "TORI TOKYO EBISU",
   "google_name": "TORI TOKYO EBISU",
   "genre": "야키토리",
   "genre_full": "야키토리 · 8,000~12,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.58",
   "google": 4.7,
   "reviews": "133",
   "hours": {
    "d21": "17:00~23:00",
    "d22": "17:00~23:00",
    "d23": "17:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6712-7078",
   "walk": "에비스역 도보 5분 (0.3km)",
   "note": "구글 4.7(133), 타베로그 3.58 — 현지 단골 위주 소규모",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 1 Chome−10−14 Ｂａｒｂｉｚｏｎ８８ 2F TORI TOKYO EBISU",
   "lat": 35.6470441,
   "lng": 139.7074017,
   "map": "https://maps.google.com/?cid=2801985182717088307",
   "cid": "2801985182717088307",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r093",
   "image": "./images/restaurants/r093.jpg",
   "name": "샤부샤부 스키야키 KINTAN 다이칸야마",
   "jp": "しゃぶしゃぶ すき焼き KINTAN 代官山",
   "google_name": "샤부샤부 킨탄 다이칸야마본점",
   "genre": "스키야키",
   "genre_full": "스키야키·샤부샤부 · 8,000~12,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.3,
   "reviews": "796",
   "hours": {
    "d21": "11:00~15:00 · 17:00~23:00",
    "d22": "11:00~15:00 · 17:00~22:00",
    "d23": "11:30~15:00 · 18:00~23:00",
    "d24": "11:30~15:00 · 18:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3770-2941",
   "walk": "다이칸야마역 도보 6분 (0.4km)",
   "note": "구글 4.3(796) — 다이칸야마에서 스키야키 수요를 받는 곳",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 1 Chome−21−8 レジディア恵比寿２",
   "lat": 35.6465846,
   "lng": 139.7056968,
   "map": "https://maps.google.com/?cid=5166015620275975461",
   "cid": "5166015620275975461",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r094",
   "image": "./images/restaurants/r094.jpg",
   "name": "철판야키 에덴",
   "jp": "鉄板焼き 恵伝",
   "google_name": "鉄板焼き 恵伝",
   "genre": "철판(테판야키)",
   "genre_full": "철판(테판야키) · 15,000엔~",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.9,
   "reviews": "102",
   "hours": {
    "d21": "11:30~15:00 · 17:00~23:00",
    "d22": "11:30~15:00 · 17:00~23:00",
    "d23": "11:30~15:00 · 17:00~23:00",
    "d24": "11:30~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5422-7611",
   "walk": "에비스역 도보 13분 (0.9km)",
   "note": "구글 4.9(102) — 리뷰 수는 적지만 평점이 매우 높은 소규모",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 4 Chome−23−8 KOHGA BLDG 1F 鉄板焼き 恵伝",
   "lat": 35.6446451,
   "lng": 139.7156511,
   "map": "https://maps.google.com/?cid=7443664417516472810",
   "cid": "7443664417516472810",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r095",
   "image": "./images/restaurants/r095.jpg",
   "name": "테판야키 KOBE BEEF EBISU84",
   "jp": "Teppanyaki KOBEBeefSteak EBISU84",
   "google_name": "Teppanyaki KOBEBeefSteak EBISU84",
   "genre": "철판(고베규)",
   "genre_full": "철판(고베규) · 15,000엔~",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.9,
   "reviews": "332",
   "hours": {
    "d21": "휴무",
    "d22": "17:00~23:00",
    "d23": "12:00~15:00 · 17:00~23:00",
    "d24": "12:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6456-2284",
   "walk": "에비스역 도보 10분 (0.7km)",
   "note": "구글 4.9(332) — 고베규 철판 전문",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 1 Chome−21−13 ＢＰＲレジデンス恵比寿 １階 Teppanyaki KOBEBeefSteak EBISU84",
   "lat": 35.6466467,
   "lng": 139.7145942,
   "map": "https://maps.google.com/?cid=3981500496899525529",
   "cid": "3981500496899525529",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r096",
   "image": "./images/restaurants/r096.jpg",
   "name": "나가사키 텐푸라 코우텐 에비스",
   "jp": "長崎天ぷら 光天 恵比寿",
   "google_name": "Nagasaki Tempura Kouten Ebisu",
   "genre": "텐푸라(캐주얼)",
   "genre_full": "텐푸라(캐주얼) · 4,000~7,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "335",
   "hours": {
    "d21": "11:30~14:00 · 17:30~23:00",
    "d22": "11:30~14:00 · 17:30~23:00",
    "d23": "11:30~14:00 · 17:30~23:00",
    "d24": "11:30~14:00 · 17:30~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6451-0606",
   "walk": "에비스역 도보 4분 (0.3km)",
   "note": "구글 4.7(335) — 고급 텐푸라 대비 부담 없는 가격대",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 2 Chome−2−7 1階",
   "lat": 35.6457321,
   "lng": 139.7074996,
   "map": "https://maps.google.com/?cid=10019464047237873700",
   "cid": "10019464047237873700",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r097",
   "image": "./images/restaurants/r097.jpg",
   "name": "타르(tar) 에비스",
   "jp": "tar（タァ）恵比寿店",
   "google_name": "tar（タァ）恵比寿店",
   "genre": "이탈리안",
   "genre_full": "이탈리안 · 5,000~8,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "591",
   "hours": {
    "d21": "12:00~23:00",
    "d22": "12:00~22:00",
    "d23": "11:30~15:00 · 17:30~23:00",
    "d24": "11:30~15:00 · 17:30~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6427-3511",
   "walk": "에비스역 도보 6분 (0.4km)",
   "note": "구글 4.7(589) — 에비스 이탈리안 상위, 데이트·가족 모두 무난",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0011 Tokyo, Shibuya, Higashi, 3 Chome−24−13 Sreed EBISU+L 1F tar（タァ）恵比寿店",
   "lat": 35.649449,
   "lng": 139.709323,
   "map": "https://maps.google.com/?cid=6557139725135871859",
   "cid": "6557139725135871859",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r098",
   "image": "./images/restaurants/r098.jpg",
   "name": "하카타 규 모츠나베 시치호 에비스",
   "jp": "博多牛もつ鍋 七宝 恵比寿",
   "google_name": "Hakata Beef-Motsunabe Nanokawa - Ebisu Daikan-yama",
   "genre": "모츠나베",
   "genre_full": "모츠나베 · 6,000~9,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "197",
   "hours": {
    "d21": "17:00~24:00",
    "d22": "17:00~24:00",
    "d23": "17:00~24:00",
    "d24": "17:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5990-4929",
   "walk": "에비스역 도보 8분 (0.5km)",
   "note": "구글 4.8(197) — 소규모 고평점 모츠나베",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 2 Chome−17−8 アイ・ティー・オー代官山 地下1階",
   "lat": 35.6488158,
   "lng": 139.7055372,
   "map": "https://maps.google.com/?cid=16741255293745666387",
   "cid": "16741255293745666387",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r099",
   "image": "./images/restaurants/r099.jpg",
   "name": "나모노야(名物屋) 에비스",
   "jp": "名物屋",
   "google_name": "名物屋",
   "genre": "이자카야",
   "genre_full": "이자카야·와슈쿠 · 3,000~6,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.6,
   "reviews": "528",
   "hours": {
    "d21": "12:00~24:00",
    "d22": "12:00~24:00",
    "d23": "12:00~24:00",
    "d24": "12:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6800-8632",
   "walk": "에비스역 도보 3분 (0.2km)",
   "note": "구글 4.6(528) — 에비스에서 회전 좋은 와슈쿠 이자카야",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 1 Chome−7−4 FPGlinks EBISUビル 1F 名物屋",
   "lat": 35.6478512,
   "lng": 139.7089183,
   "map": "https://maps.google.com/?cid=16424334939079010396",
   "cid": "16424334939079010396",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r100",
   "image": "./images/restaurants/r100.jpg",
   "name": "사타케 토와리 소바 에비스",
   "jp": "佐たけ 十割そば 恵比寿",
   "google_name": "Satake Towari-Soba Ebisu",
   "genre": "소바",
   "genre_full": "소바 · 1,500~3,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.3,
   "reviews": "2,072",
   "hours": {
    "d21": "10:30~翌05:00",
    "d22": "10:30~22:00",
    "d23": "10:30~22:45",
    "d24": "10:30~22:45"
   },
   "hours23Guide": "",
   "phone": "+81 3-5877-2698",
   "walk": "에비스역 도보 3분 (0.2km)",
   "note": "구글 4.3(2,072) — 에비스 소바 최다 리뷰급",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 1 Chome−8−14 大黒ビル 1F",
   "lat": 35.6478136,
   "lng": 139.7098363,
   "map": "https://maps.google.com/?cid=801685679027884663",
   "cid": "801685679027884663",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r101",
   "image": "./images/restaurants/r101.jpg",
   "name": "우동 야마쵸 에비스",
   "jp": "うどん山長 恵比寿",
   "google_name": "우동 야마쵸 에비스점",
   "genre": "우동",
   "genre_full": "우동 · 2,000~5,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.69",
   "google": 4.2,
   "reviews": "1,288",
   "hours": {
    "d21": "11:30~15:30 · 17:00~22:00",
    "d22": "11:30~15:30 · 17:00~22:00",
    "d23": "11:30~15:30 · 17:00~22:00",
    "d24": "11:30~15:30 · 17:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3443-1701",
   "walk": "에비스역 도보 5분 (0.4km)",
   "note": "타베로그 리뷰 '우동집인데 우동 외 요리도 레벨이 높다'",
   "tip": "",
   "awards": "百名店 2024",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 1 Chome−1−5 Ebisu Oak Bldg., 1F",
   "lat": 35.6482915,
   "lng": 139.7111154,
   "map": "https://maps.google.com/?cid=11235737856887368546",
   "cid": "11235737856887368546",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r102",
   "image": "./images/restaurants/r102.jpg",
   "name": "요로니쿠 도쿄 아자부다이힐즈",
   "jp": "YORONIKU TOKYO AZABUDAI HILLS",
   "google_name": "요로니쿠 도쿄 아자부다이힐즈",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥15,000~19,999 · 스페셜 코스 22,000엔대",
   "area": "기타",
   "bigArea": "기타",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "4.37",
   "google": 4.6,
   "reviews": "202",
   "hours": {
    "d21": "17:00~22:00",
    "d22": "17:00~22:00",
    "d23": "17:00~22:00",
    "d24": "17:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5549-4629",
   "walk": "롯폰기 힐즈 도보 21분 (1.5km)",
   "note": "타베로그 리뷰 '완전 개인실 & 풀 아텐던트' — 가족 기념일용",
   "tip": "",
   "awards": "Tabelog Award 2026 Silver · 焼肉 TOKYO 百名店 2026",
   "addr": "일본 〒106-0041 Tokyo, Minato City, Azabudai, 1 Chome−3−1 3階",
   "lat": 35.6611575,
   "lng": 139.7407835,
   "map": "https://maps.google.com/?cid=1016898051006815555",
   "cid": "1016898051006815555",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r103",
   "image": "./images/restaurants/r103.jpg",
   "name": "아자부주반 스시 텐만",
   "jp": "麻布十番 鮨 天万",
   "google_name": "麻布十番 鮨 天万",
   "genre": "스시",
   "genre_full": "스시 · 15,000~25,000엔",
   "area": "아자부주반",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "662",
   "hours": {
    "d21": "11:30~15:00 · 17:00~23:30",
    "d22": "11:30~15:00 · 17:00~23:30",
    "d23": "11:30~15:00 · 17:00~23:30",
    "d24": "11:30~15:00 · 17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 50-5786-6647",
   "walk": "아자부주반역 도보 1분 이내",
   "note": "구글 4.8(662) — 아자부주반 대표급 오마카세",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0045 Tokyo, Minato City, Azabujuban, 1 Chome−10−10 Joule A, 2階 L 区画 麻布十番 鮨 天万",
   "lat": 35.6560447,
   "lng": 139.7367118,
   "map": "https://maps.google.com/?cid=2251034477296878045",
   "cid": "2251034477296878045",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r104",
   "image": "./images/restaurants/r104.jpg",
   "name": "YAKITORI 엔스(燃es)",
   "jp": "YAKITORI 燃 es",
   "google_name": "야키토리 모에 에스",
   "genre": "야키토리",
   "genre_full": "야키토리 · ¥10,000~14,999",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "4.28",
   "google": 4.2,
   "reviews": "169",
   "hours": {
    "d21": "18:00~23:00",
    "d22": "휴무",
    "d23": "18:00~23:00",
    "d24": "18:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6455-4554",
   "walk": "롯폰기 힐즈 도보 10분 (0.7km)",
   "note": "타베로그 리뷰 '프렌치 기법을 살린 한 꼬치, 야키토리 디너의 진화형'",
   "tip": "",
   "awards": "Tabelog Award 2026 Bronze · 焼き鳥 EAST 百名店 2026",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 7 Chome−13−10 야키토리 모에 에스",
   "lat": 35.6637268,
   "lng": 139.7302863,
   "map": "https://maps.google.com/?cid=8921490721516026088",
   "cid": "8921490721516026088",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r105",
   "image": "./images/restaurants/r105.jpg",
   "name": "스키야키 로쿠마츠",
   "jp": "すき焼き 六松",
   "google_name": "SUKIYAKI 六松",
   "genre": "스키야키",
   "genre_full": "스키야키 · 15,000엔~",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.9,
   "reviews": "402",
   "hours": {
    "d21": "11:00~14:30 · 17:00~23:00",
    "d22": "11:00~14:30 · 17:00~23:00",
    "d23": "11:00~14:30 · 17:00~23:00",
    "d24": "11:00~14:30 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6804-5070",
   "walk": "롯폰기 힐즈 도보 11분 (0.8km)",
   "note": "구글 4.9(402) — 롯폰기 스키야키 최상위 평점",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 4 Chome−12−11 竹岡ビル B1階 SUKIYAKI 六松",
   "lat": 35.6645609,
   "lng": 139.7314936,
   "map": "https://maps.google.com/?cid=2465314343081201444",
   "cid": "2465314343081201444",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r106",
   "image": "./images/restaurants/r106.jpg",
   "name": "지큐브(Ji-Cube)",
   "jp": "Ji-Cube",
   "google_name": "지-큐브",
   "genre": "중식",
   "genre_full": "중식·사천 · ¥20,000~29,999 (런치 10,000~14,999)",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "4.36",
   "google": 4.7,
   "reviews": "106",
   "hours": {
    "d21": "11:30~15:00 · 18:00~22:00",
    "d22": "11:30~15:00 · 18:00~22:00",
    "d23": "18:00~22:00",
    "d24": "18:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6434-0076",
   "walk": "롯폰기 힐즈 도보 9분 (0.6km)",
   "note": "타베로그 리뷰 '일본인 감성으로 만든 사천요리, 요리·서비스 모두 만족'",
   "tip": "",
   "awards": "Tabelog Award 2026 Silver · 中国料理 TOKYO 百名店 2026",
   "addr": "일본 〒106-0031 Tokyo, Minato City, Nishiazabu, 3 Chome−18−10 지-큐브",
   "lat": 35.6590832,
   "lng": 139.726066,
   "map": "https://maps.google.com/?cid=10522996068257998883",
   "cid": "10522996068257998883",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r107",
   "image": "./images/restaurants/r107.jpg",
   "name": "야키니쿠 진세키 니시아자부",
   "jp": "焼肉 神石 西麻布",
   "google_name": "야키니쿠 진세키 니시아자부점",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 15,000엔~",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.9,
   "reviews": "324",
   "hours": {
    "d21": "18:00~23:00",
    "d22": "18:00~23:00",
    "d23": "11:30~15:00 · 18:00~23:00",
    "d24": "11:30~15:00 · 18:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5860-5952",
   "walk": "롯폰기 힐즈 도보 11분 (0.8km)",
   "note": "구글 4.9(324) — 리뷰 수 대비 평점 최상위군",
   "tip": "",
   "awards": "",
   "addr": "1 Chome-12-8 Nishiazabu Minato City, Tokyo 106-0031 일본",
   "lat": 35.6601071,
   "lng": 139.723953,
   "map": "https://maps.google.com/?cid=8700525610995744029",
   "cid": "8700525610995744029",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r108",
   "image": "./images/restaurants/r108.jpg",
   "name": "USHIGORO S. 니시아자부",
   "jp": "USHIGORO S. 西麻布",
   "google_name": "우시고로 에스 니시아자부",
   "genre": "야키니쿠(하이엔드)",
   "genre_full": "야키니쿠(하이엔드) · 25,000엔~ (전석 개인실)",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.6,
   "reviews": "631",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:30",
    "d22": "12:00~15:00 · 17:00~23:30",
    "d23": "12:00~15:00 · 17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6419-4129",
   "walk": "롯폰기 힐즈 도보 14분 (0.9km)",
   "note": "구글 4.6(631) — 니시아자부 최상위 라인",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0031 Tokyo, Minato City, Nishiazabu, 2 Chome−24−14 Barbizon 73, B1F",
   "lat": 35.6600569,
   "lng": 139.7225419,
   "map": "https://maps.google.com/?cid=8324198103009521474",
   "cid": "8324198103009521474",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r109",
   "image": "./images/restaurants/r109.jpg",
   "name": "니시아자부 켄시로",
   "jp": "西麻布けんしろう",
   "google_name": "Kenshiro",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 10,000~15,000엔",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.5,
   "reviews": "586",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6427-2949",
   "walk": "롯폰기 힐즈 도보 11분 (0.8km)",
   "note": "구글 4.5(586) — 니시아자부 야키니쿠 중 접근성 좋은 축",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0031 Tokyo, Minato City, Nishiazabu, 4 Chome−2−2 1F",
   "lat": 35.658505,
   "lng": 139.723538,
   "map": "https://maps.google.com/?cid=12499820929665565463",
   "cid": "12499820929665565463",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r110",
   "image": "./images/restaurants/r110.jpg",
   "name": "스시 니노미야 아자부주반",
   "jp": "Sushi Ninomiya 麻布十番",
   "google_name": "Sushi Ninomiya Azabujūban",
   "genre": "스시(캐주얼)",
   "genre_full": "스시(캐주얼) · 5,000~9,000엔",
   "area": "아자부주반",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "1,539",
   "hours": {
    "d21": "11:30~23:15",
    "d22": "11:30~23:15",
    "d23": "11:30~15:00 · 16:30~23:15",
    "d24": "11:30~15:00 · 16:30~23:15"
   },
   "hours23Guide": "",
   "phone": "+81 50-5786-7614",
   "walk": "아자부주반역 도보 1분 이내",
   "note": "구글 4.7(1,539) — 아자부주반에서 가성비 스시로 리뷰 두터움",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0045 Tokyo, Minato City, Azabujuban, 1 Chome−10−10 Joule A, 2階 R区画",
   "lat": 35.6560447,
   "lng": 139.7367118,
   "map": "https://maps.google.com/?cid=6619516724476168883",
   "cid": "6619516724476168883",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r111",
   "image": "./images/restaurants/r111.jpg",
   "name": "샤부샤부 세리나 본점",
   "jp": "しゃぶしゃぶ 瀬里奈 本店",
   "google_name": "세리나 본점",
   "genre": "샤부샤부",
   "genre_full": "샤부샤부 · 12,000엔~",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.5,
   "reviews": "646",
   "hours": {
    "d21": "12:00~15:00 · 17:00~22:30",
    "d22": "12:00~15:00 · 17:00~22:30",
    "d23": "12:00~15:00 · 17:00~23:00",
    "d24": "12:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3402-1051",
   "walk": "롯폰기 힐즈 도보 10분 (0.7km)",
   "note": "구글 4.5(646) — 롯폰기 샤브샤브 노포로 오래된 평가",
   "tip": "",
   "awards": "",
   "addr": "3 Chome-12-2 Roppongi Minato City, Tokyo 106-0032 일본",
   "lat": 35.6631801,
   "lng": 139.7336958,
   "map": "https://maps.google.com/?cid=4761861168475462363",
   "cid": "4761861168475462363",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r112",
   "image": "./images/restaurants/r112.jpg",
   "name": "텐푸라 야마노우에 롯폰기",
   "jp": "天ぷら 山の上 六本木",
   "google_name": "덴뿌라야마노우에",
   "genre": "텐푸라",
   "genre_full": "텐푸라 · 12,000엔~",
   "area": "아카사카",
   "bigArea": "아카사카",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.2,
   "reviews": "228",
   "hours": {
    "d21": "11:00~15:00 · 17:00~23:00",
    "d22": "11:00~15:00 · 17:00~23:00",
    "d23": "11:00~15:00 · 17:00~23:00",
    "d24": "11:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5413-3577",
   "walk": "롯폰기 힐즈 도보 16분 (1.1km)",
   "note": "구글 4.2(228) — 야마노우에 호텔 계열 안정적 텐푸라",
   "tip": "",
   "awards": "",
   "addr": "일본 〒107-0052 Tokyo, Minato City, Akasaka, 9 Chome−7−4 덴뿌라야마노우에 東京ミッドタウン ガーデンテラス3F",
   "lat": 35.66682309999999,
   "lng": 139.7305272,
   "map": "https://maps.google.com/?cid=4559157717495076006",
   "cid": "4559157717495076006",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r113",
   "image": "./images/restaurants/r113.jpg",
   "name": "곤파치 니시아자부",
   "jp": "権八 西麻布",
   "google_name": "곤파치 니시아자부(킬빌)",
   "genre": "이자카야",
   "genre_full": "이자카야·소바 · 5,000~8,000엔",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "이자카야·사케",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "약 4,000~6,000엔",
   "tabelog": "3.38",
   "google": 4.3,
   "reviews": "8,644",
   "hours": {
    "d21": "11:30~翌03:30",
    "d22": "11:30~翌03:30",
    "d23": "11:30~翌03:30",
    "d24": "11:30~翌03:30"
   },
   "hours23Guide": "",
   "phone": "+81 50-5443-1691",
   "walk": "롯폰기 힐즈 도보 12분 (0.8km)",
   "note": "호진님 리스트 03(이미 수록돼 있던 항목을 2026-11-21 재검증). 구글 4.3(8,644)·타베로그 3.38(1,116). 영화 '킬 빌' 배경 모티브로 알려진 대형 이자카야로, 야키토리·소바·사케가 중심입니다.",
   "tip": "롯폰기 힐즈·게야키자카에서 도보 10분 안쪽, 11/23 공휴일에도 11:30~翌03:30 영업이라 일루미네이션 뒤 늦은 저녁까지 가능합니다. 100석 넘는 대형점이라 3인은 당일에도 무난하지만, 조용한 생일 저녁이 목적이면 니쿠겐 쪽이 낫습니다.",
   "awards": "",
   "addr": "1 Chome-13-11 Nishiazabu Minato City, Tokyo 106-0031 일본",
   "lat": 35.6601742,
   "lng": 139.7235797,
   "map": "https://maps.google.com/?cid=1337614840498094983",
   "cid": "1337614840498094983",
   "src": "B",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / tabelog.com 権八 西麻布"
   }
  },
  {
   "id": "r114",
   "image": "./images/restaurants/r114.jpg",
   "name": "주몬 롯폰기(로바타야키)",
   "jp": "じゅうもん 六本木",
   "google_name": "죠몬 롯폰기점",
   "genre": "로바타야키",
   "genre_full": "로바타야키 · 5,000~8,000엔",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.2,
   "reviews": "1,497",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3405-2585",
   "walk": "롯폰기 힐즈 도보 9분 (0.6km)",
   "note": "구글 4.2(1,497) — 롯폰기 로바타야키 스탠더드",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 5 Chome−9−17 1F",
   "lat": 35.6613748,
   "lng": 139.7329948,
   "map": "https://maps.google.com/?cid=5986398684437807624",
   "cid": "5986398684437807624",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r115",
   "image": "./images/restaurants/r115.jpg",
   "name": "노다이와 아자부 이이쿠라 본점",
   "jp": "野田岩 麻布飯倉本店",
   "google_name": "고다이메 노다이와 본점",
   "genre": "우나기",
   "genre_full": "우나기 · 6,000~12,000엔",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.3,
   "reviews": "1,715",
   "hours": {
    "d21": "11:00~14:00 · 17:00~20:00",
    "d22": "휴무",
    "d23": "11:00~13:30 · 17:00~20:00",
    "d24": "11:00~13:30 · 17:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3583-7852",
   "walk": "롯폰기 힐즈 도보 24분 (1.7km)",
   "note": "에도시대 창업의 우나기 명가(현지 평가 오래됨)",
   "tip": "",
   "awards": "",
   "addr": "1 Chome-5-4 Higashiazabu Minato City, Tokyo 106-0044 일본",
   "lat": 35.6581233,
   "lng": 139.7433709,
   "map": "https://maps.google.com/?cid=12647547846201370726",
   "cid": "12647547846201370726",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r116",
   "image": "./images/restaurants/r116.jpg",
   "name": "사라시나 호리이 본점",
   "jp": "更科堀井 本店",
   "google_name": "사라시나 호리이 아자부주반본점",
   "genre": "소바",
   "genre_full": "소바 · 4,000~8,000엔",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.2,
   "reviews": "1,945",
   "hours": {
    "d21": "11:00~20:30",
    "d22": "11:00~20:30",
    "d23": "11:30~15:30 · 17:00~20:30",
    "d24": "11:30~15:30 · 17:00~20:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3403-3401",
   "walk": "롯폰기 힐즈 도보 10분 (0.7km)",
   "note": "구글 4.2(1,945) — 에도 소바 노포, 현지 단골 두터움",
   "tip": "",
   "awards": "",
   "addr": "3 Chome-11-4 Motoazabu Minato City, Tokyo 106-0046 일본",
   "lat": 35.656802,
   "lng": 139.7328803,
   "map": "https://maps.google.com/?cid=4799624521792605391",
   "cid": "4799624521792605391",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r117",
   "image": "./images/restaurants/r117.jpg",
   "name": "신주쿠 우시미츠",
   "jp": "新宿 うしみつ",
   "google_name": "新宿うしみつ",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥10,000~14,999",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.63",
   "google": 4.8,
   "reviews": "602",
   "hours": {
    "d21": "11:00~15:00 · 17:00~23:30",
    "d22": "11:00~15:00 · 17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6709-8829",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 4분 (0.3km)",
   "note": "타베로그 리뷰 '완전 개인실·풀 아텐던트로 즐기는 독창적 고기 요리'",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−28−7 キーストンビル 3F 新宿うしみつ",
   "lat": 35.6908745,
   "lng": 139.7024575,
   "map": "https://maps.google.com/?cid=14196660460782766309",
   "cid": "14196660460782766309",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r118",
   "image": "./images/restaurants/r118.jpg",
   "name": "야키니쿠 츠지무라 신주쿠",
   "jp": "焼肉つじむら 新宿本店",
   "google_name": "焼肉つじむら 新宿本店",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥8,000~9,999",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.57",
   "google": 4.6,
   "reviews": "325",
   "hours": {
    "d21": "16:00~23:00",
    "d22": "16:00~23:00",
    "d23": "16:00~23:00",
    "d24": "16:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5937-4729",
   "walk": "신주쿠 워싱턴 호텔 도보 22분 (1.6km)",
   "note": "백명점 선정, 신주쿠 서쪽의 실력파",
   "tip": "",
   "awards": "百名店 2026",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−4−7 イマス浜田ビル 1階 焼肉つじむら 新宿本店",
   "lat": 35.6961546,
   "lng": 139.6985182,
   "map": "https://maps.google.com/?cid=12095632355816303472",
   "cid": "12095632355816303472",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r119",
   "image": "./images/restaurants/r119.jpg",
   "name": "야키니쿠 우시고로 신주쿠 산초메",
   "jp": "焼肉 うしごろ 新宿三丁目店",
   "google_name": "焼肉 うしごろ 新宿三丁目店",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · ¥10,000~14,999",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "야키니쿠"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": "3.65",
   "google": 4.3,
   "reviews": "69",
   "hours": {
    "d21": "11:30~23:30",
    "d22": "11:30~23:30",
    "d23": "11:30~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3358-4129",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 3분 (0.2km)",
   "note": "타베로그 신주쿠 야키니쿠 예약 1위(11/20 기준)",
   "tip": "",
   "awards": "百名店 2026",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−17−10 12F 焼肉 うしごろ 新宿三丁目店",
   "lat": 35.6921174,
   "lng": 139.7027479,
   "map": "https://maps.google.com/?cid=17500119824352499098",
   "cid": "17500119824352499098",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r120",
   "image": "./images/restaurants/r120.jpg",
   "name": "신주쿠 스시 하츠메",
   "jp": "新宿 鮨 はつめ",
   "google_name": "Shinjuku Sushi Hatsume",
   "genre": "스시",
   "genre_full": "스시 · 10,890엔~",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "22품 9,900엔+세 → 10,890엔 / 16,390 / 22,000엔",
   "tabelog": "3.18",
   "google": 4.9,
   "reviews": "2,539",
   "hours": {
    "d21": "12:00~14:00 · 17:00~22:00",
    "d22": "12:00~14:00 · 17:00~22:00",
    "d23": "17:00~22:00",
    "d24": "17:00~22:00"
   },
   "hours23Guide": "17:00~22:00 · 11/23 영업 (타베로그 캘린더 확인)",
   "phone": "+81 3-6304-0416",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 6분 (0.4km)",
   "note": "구글 4.9(2,539) — 신주쿠 오마카세 중 리뷰 최다급",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−10−10 西村ビル B1F",
   "lat": 35.6940502,
   "lng": 139.6980158,
   "map": "https://maps.google.com/?cid=8652472938840183456",
   "cid": "8652472938840183456",
   "src": "BC",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r121",
   "image": "./images/restaurants/r121.jpg",
   "name": "야키토리 히노토리",
   "jp": "焼き鳥 ひのとり",
   "google_name": "히노토리",
   "genre": "야키토리",
   "genre_full": "야키토리 · 4,000~6,000엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "2,677",
   "hours": {
    "d21": "16:00~22:00",
    "d22": "16:00~22:00",
    "d23": "17:00~22:00",
    "d24": "17:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5338-2207",
   "walk": "신주쿠 워싱턴 호텔 도보 17분 (1.2km)",
   "note": "구글 4.8(2,677) — 신주쿠 야키토리 대표 캐주얼",
   "tip": "",
   "awards": "",
   "addr": "101 7 Chome-22-48 Nishishinjuku Shinjuku City, Tokyo 160-0023 일본",
   "lat": 35.6949791,
   "lng": 139.6956065,
   "map": "https://maps.google.com/?cid=10376264615396629459",
   "cid": "10376264615396629459",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r122",
   "image": "./images/restaurants/r122.jpg",
   "name": "혼카쿠 야키토리 니시신주쿠 토라야 본점",
   "jp": "本格焼鳥 西新宿 とら屋 本店",
   "google_name": "本格焼鳥西新宿とら屋本店",
   "genre": "야키토리",
   "genre_full": "야키토리 · 4,000~7,000엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "475",
   "hours": {
    "d21": "15:00~24:00",
    "d22": "15:00~24:00",
    "d23": "16:00~24:00",
    "d24": "16:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6304-0050",
   "walk": "신주쿠 워싱턴 호텔 도보 18분 (1.3km)",
   "note": "구글 4.7(475) — 니시신주쿠 로컬 야키토리",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−10−12 Daikan Plaza K K D, 1階 本格焼鳥西新宿とら屋本店",
   "lat": 35.6941413,
   "lng": 139.6982313,
   "map": "https://maps.google.com/?cid=16419335787236832445",
   "cid": "16419335787236832445",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r123",
   "image": "./images/restaurants/r123.jpg",
   "name": "테판 베이비",
   "jp": "Teppan Baby",
   "google_name": "테판 베이비",
   "genre": "철판(오코노미야키)",
   "genre_full": "철판(오코노미야키) · 3,000~5,000엔",
   "area": "가부키초",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "3,835",
   "hours": {
    "d21": "17:00~翌02:00",
    "d22": "17:00~24:00",
    "d23": "17:00~翌02:00",
    "d24": "17:00~翌02:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3204-1333",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 3분 (0.2km)",
   "note": "구글 4.7(3,835) — 가부키초 철판 캐주얼 대표 / 한국인 후기 포인트 · 한국인 방문 많은 편",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0021 Tokyo, Shinjuku City, Kabukicho, 1 Chome−17−4 Pocket Building, B1F",
   "lat": 35.6940479,
   "lng": 139.7012389,
   "map": "https://maps.google.com/?cid=5576426787614804085",
   "cid": "5576426787614804085",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r124",
   "image": "./images/restaurants/r124.jpg",
   "name": "테판야키 야마나미",
   "jp": "Teppan-Yaki YAMANAMI",
   "google_name": "Teppan-Yaki YAMANAMI",
   "genre": "철판(와규)",
   "genre_full": "철판(와규) · 12,000엔~",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.5,
   "reviews": "249",
   "hours": {
    "d21": "11:30~15:00 · 17:00~22:30",
    "d22": "11:30~15:00 · 17:00~22:30",
    "d23": "11:30~15:00 · 17:00~22:30",
    "d24": "11:30~15:00 · 17:00~22:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3344-0111",
   "walk": "신주쿠 워싱턴 호텔 도보 8분 (0.6km)",
   "note": "구글 4.5(249) — 니시신주쿠 호텔권 철판야키",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-8330 Tokyo, Shinjuku City, Nishishinjuku, 2 Chome−2−1 京王プラザホテル 内",
   "lat": 35.6901609,
   "lng": 139.6943219,
   "map": "https://maps.google.com/?cid=11427952401817159185",
   "cid": "11427952401817159185",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r125",
   "image": "./images/restaurants/r125.jpg",
   "name": "텐푸라 후나바시야 신주쿠",
   "jp": "天ぷら 船橋屋 新宿",
   "google_name": "덴푸라 후나바시야 신주쿠본점",
   "genre": "텐푸라",
   "genre_full": "텐푸라 · 2,000~5,000엔",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": null,
   "reviews": "",
   "hours": {
    "d21": "11:30~21:00",
    "d22": "11:30~21:00",
    "d23": "11:30~21:00",
    "d24": "11:30~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-3354-2751",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 5분 (0.4km)",
   "note": "구글 4.0(1,180) — 신주쿠 텐푸라 노포",
   "tip": "",
   "awards": "",
   "addr": "3 Chome-28-14 Shinjuku Shinjuku City, Tokyo 160-0022 일본",
   "lat": 35.6910517,
   "lng": 139.7032702,
   "map": "https://maps.google.com/?cid=3422300916219337735",
   "cid": "3422300916219337735",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r126",
   "image": "./images/restaurants/r126.jpg",
   "name": "빌라 비앙키 신주쿠",
   "jp": "ヴィラ・ビアンキ 新宿",
   "google_name": "Villa Bianchi Shinjuku",
   "genre": "이탈리안",
   "genre_full": "이탈리안 · 5,000~8,000엔",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.6,
   "reviews": "2,495",
   "hours": {
    "d21": "11:30~15:00 · 17:00~23:00",
    "d22": "11:30~15:00 · 17:00~22:00",
    "d23": "11:30~15:00 · 17:00~22:00",
    "d24": "11:30~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 50-3176-6532",
   "walk": "신주쿠 워싱턴 호텔 도보 13분 (0.9km)",
   "note": "구글 4.6(2,495) — 니시신주쿠 이탈리안 대표",
   "tip": "",
   "awards": "",
   "addr": "일본 〒151-0053 Tokyo, Shibuya, Yoyogi, 2 Chome−2−1 新宿サザンテラス小田急サザンタワ 3F",
   "lat": 35.686479,
   "lng": 139.7002777,
   "map": "https://maps.google.com/?cid=4972838303836169959",
   "cid": "4972838303836169959",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r127",
   "image": "./images/restaurants/r127.jpg",
   "name": "하카타 모츠나베 마에다야 신주쿠 동구",
   "jp": "博多もつ鍋 前田屋 新宿東口店",
   "google_name": "하카타 모츠나베 마에다야 신주쿠점",
   "genre": "모츠나베",
   "genre_full": "모츠나베 · 4,000~7,000엔",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "313",
   "hours": {
    "d21": "11:00~14:30 · 17:00~24:00",
    "d22": "11:00~14:30 · 17:00~24:00",
    "d23": "11:00~14:30 · 17:00~24:00",
    "d24": "17:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6380-6978",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 2분 (0.1km)",
   "note": "구글 4.8(313) — 모츠나베 카테고리 인기 상위 / 한국인 후기 포인트 · 한국인 방문 많은 브랜드",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−23−12 Pandora Building, 3F 하카타 모츠나베 마에다야 신주쿠점",
   "lat": 35.6933813,
   "lng": 139.7011402,
   "map": "https://maps.google.com/?cid=3063666126766888522",
   "cid": "3063666126766888522",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r128",
   "image": "./images/restaurants/r128.jpg",
   "name": "모츠야키 신주쿠 산초메 후지야",
   "jp": "もつ焼き 新宿三丁目 ふじ屋",
   "google_name": "もつ焼き新宿三丁目ふじ屋",
   "genre": "모츠야키",
   "genre_full": "모츠야키 · 4,000~6,000엔",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "이자카야·사케"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.6,
   "reviews": "1,164",
   "hours": {
    "d21": "14:00~24:00",
    "d22": "14:00~24:00",
    "d23": "15:00~24:00",
    "d24": "15:00~24:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6384-1744",
   "walk": "신주쿠역 동구(L-Breath 쪽) 도보 9분 (0.6km)",
   "note": "구글 4.6(1,164) — 신주쿠 산초메 모츠야키 인기",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−12−4 102 もつ焼き新宿三丁目ふじ屋",
   "lat": 35.691964,
   "lng": 139.7061556,
   "map": "https://maps.google.com/?cid=5564594255663565175",
   "cid": "5564594255663565175",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r129",
   "image": "./images/restaurants/r129.jpg",
   "name": "로바타 사치(ROBATA sachi)",
   "jp": "ROBATA sachi",
   "google_name": "ROBATA sachi",
   "genre": "로바타야키",
   "genre_full": "로바타야키 · 5,000~8,000엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.7,
   "reviews": "2,041",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:00",
    "d23": "17:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5990-5572",
   "walk": "신주쿠 워싱턴 호텔 도보 16분 (1.2km)",
   "note": "구글 4.7(2,041) — 신주쿠 로바타야키 최다 리뷰급",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−3−13 Zenken PlazaⅡ 2F",
   "lat": 35.6933463,
   "lng": 139.6980802,
   "map": "https://maps.google.com/?cid=6665077902899909859",
   "cid": "6665077902899909859",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r130",
   "image": "./images/restaurants/r130.jpg",
   "name": "우나기 이즈모 신주쿠",
   "jp": "うなぎ いづも",
   "google_name": "이즈모 신주쿠",
   "genre": "우나기",
   "genre_full": "우나기 · 3,000~5,000엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.8,
   "reviews": "2,234",
   "hours": {
    "d21": "11:00~23:00",
    "d22": "11:00~23:00",
    "d23": "11:00~15:00 · 17:00~23:00",
    "d24": "11:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-5989-0972",
   "walk": "신주쿠 워싱턴 호텔 도보 8분 (0.6km)",
   "note": "구글 4.8(2,233) — 신주쿠 우나기 최다 리뷰",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−14−5 新宿サンパーク 西口",
   "lat": 35.6886592,
   "lng": 139.6970479,
   "map": "https://maps.google.com/?cid=6910383267302671245",
   "cid": "6910383267302671245",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r131",
   "image": "./images/restaurants/r131.jpg",
   "name": "주와리 소바 와타나베",
   "jp": "十割そば 渡辺",
   "google_name": "Watanabe Soba",
   "genre": "소바",
   "genre_full": "소바 · 2,000~3,500엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.1,
   "reviews": "945",
   "hours": {
    "d21": "11:00~21:30",
    "d22": "휴무",
    "d23": "11:00~21:30",
    "d24": "11:00~21:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-3348-9126",
   "walk": "신주쿠 워싱턴 호텔 도보 10분 (0.7km)",
   "note": "구글 4.1(945) — 니시신주쿠 소바 스탠더드",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−12−10 八洋ビル",
   "lat": 35.6898654,
   "lng": 139.6971447,
   "map": "https://maps.google.com/?cid=14334735506663081780",
   "cid": "14334735506663081780",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r132",
   "image": "./images/restaurants/r132.jpg",
   "name": "사누키 우동 잇푸쿠 니시신주쿠",
   "jp": "讃岐うどん 一福 西新宿",
   "google_name": "Kagawa Ippuku Nishi Shinjuku",
   "genre": "우동",
   "genre_full": "우동 · 1,000~2,500엔",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "",
   "tabelog": null,
   "google": 4.6,
   "reviews": "1,305",
   "hours": {
    "d21": "10:00~21:00",
    "d22": "10:00~21:00",
    "d23": "10:00~22:00",
    "d24": "10:00~22:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6279-3002",
   "walk": "신주쿠 워싱턴 호텔 도보 19분 (1.3km)",
   "note": "구글 4.6(1,304) — 니시신주쿠 우동 최다 리뷰",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−9−15 Shinjuku Daikanplaza Business, 1F",
   "lat": 35.6947711,
   "lng": 139.6983048,
   "map": "https://maps.google.com/?cid=15199065111236672036",
   "cid": "15199065111236672036",
   "src": "B",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r133",
   "image": "./images/restaurants/r133.jpg",
   "name": "긴자 키타후쿠",
   "jp": "銀座 きた福",
   "google_name": "Katsukani Ryōri Ginza Kitafuku",
   "genre": "긴자 키타후쿠",
   "genre_full": "긴자 키타후쿠 · 활게 요리 전문",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "생일저녁",
    "고급해산물",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "活松葉蟹 코스 55,000엔 (44,000 · 58,300엔 코스도 있음)",
   "tabelog": "3.89",
   "google": 4.6,
   "reviews": "239",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "17:00~23:30 · 연중무휴 (타베로그) — 11/23 영업",
   "phone": "+81 3-6280-6368",
   "walk": "銀座역 도보 5분 (0.3km)",
   "note": "눈앞에서 활게를 손질해 무침·구이·사시미·샤브로 내는 집. 2026 타베로그 어워드 Bronze. 개인실이 3실뿐이라 3인이 딱 맞고, 생일 저녁 '한 번 제대로'의 1순위. 시작 시각이 17:00/17:30/18:00/19:00/20:30로 나뉘어 있어 동선에 맞춰 고를 수 있습니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 7 Chome−4−5 3階",
   "lat": 35.6701336,
   "lng": 139.761101,
   "map": "https://maps.google.com/?cid=13824081207128088468",
   "cid": "13824081207128088468",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r134",
   "image": "./images/restaurants/r134.jpg",
   "name": "긴자 우카이테이",
   "jp": "銀座うかい亭",
   "google_name": "긴자 우카이 테이",
   "genre": "긴자 우카이테이",
   "genre_full": "긴자 우카이테이 · 철판야키 (해산물+와규)",
   "area": "긴자",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "생일저녁",
    "고급해산물",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "코스 가격 미확인(예약 시 확인) · 상급",
   "tabelog": "3.93",
   "google": 4.6,
   "reviews": "1,517",
   "hours": {
    "d21": "11:30~21:30",
    "d22": "휴무",
    "d23": "11:30~16:00 · 17:00~21:30",
    "d24": "12:00~21:30"
   },
   "hours23Guide": "土·祝 11:30~16:00(13:30 L.O.) / 17:00~21:30(19:30 L.O.) — 11/23은 '祝' 시간표 적용",
   "phone": "+81 3-3544-5252",
   "walk": "東銀座역 도보 3분 (0.2km)",
   "note": "스테이크·철판 EAST 百名店 2025. 공식 사이트에 '土・祝' 시간표가 따로 있어 공휴일 영업이 확정적입니다. 반개인실 9실이라 세 분 대화가 편하고, 해산물+와규 코스가 있습니다(코스 내용·가격은 예약 시 확인). 저녁 L.O. 19:30이라 늦게는 못 들어갑니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−15−8 時事通信ビル 1F",
   "lat": 35.6680815,
   "lng": 139.7671893,
   "map": "https://maps.google.com/?cid=9657200045435452382",
   "cid": "9657200045435452382",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r135",
   "image": "./images/restaurants/r135.jpg",
   "name": "스시 욘 -하나-",
   "jp": "鮨四 -華- (六本木)",
   "google_name": "Sushi yon hana Roppongi",
   "genre": "스시 욘 -하나-",
   "genre_full": "스시 욘 -하나- · 스시 오마카세",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "10,000~14,999엔 (+서비스료 10%)",
   "tabelog": "3.54",
   "google": 4.7,
   "reviews": "215",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:00",
    "d22": "12:00~15:00 · 17:00~23:00",
    "d23": "12:00~15:00 · 17:00~23:00",
    "d24": "휴무"
   },
   "hours23Guide": "祝日 12:00~15:00 / 17:00~23:00 (L.O. 22:30) — 11/23 영업 (화 휴무)",
   "phone": "+81 3-6432-9099",
   "walk": "六本木역 7·8번 출구 도보 3분 (0.2km)",
   "note": "'생일·기념일'을 내건 집답게 개인실이 있고, 타베로그에 祝日 영업시간(12:00~15:00/17:00~23:00)이 명시돼 있습니다. 1만엔대 코스 + 서비스료 10%. 롯폰기 시나리오에서 가장 안전한 선택.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 7 Chome−6−6 pariero 1F",
   "lat": 35.664318,
   "lng": 139.7285409,
   "map": "https://maps.google.com/?cid=14623430578247601547",
   "cid": "14623430578247601547",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r136",
   "image": "./images/restaurants/r136.jpg",
   "name": "텐푸라 미카와 롯폰기 힐즈",
   "jp": "てんぷら みかわ 六本木ヒルズ",
   "google_name": "덴푸라 미카와 케야키자카도오리점",
   "genre": "텐푸라 미카와 롯폰기 힐즈",
   "genre_full": "텐푸라 미카와 롯폰기 힐즈 · 텐푸라",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "15,000~19,999엔",
   "tabelog": "3.35",
   "google": 4.1,
   "reviews": "105",
   "hours": {
    "d21": "12:00~14:00 · 18:00~21:00",
    "d22": "12:00~14:00 · 18:00~21:00",
    "d23": "12:00~14:00 · 18:00~21:00",
    "d24": "12:00~14:00 · 18:00~21:00"
   },
   "hours23Guide": "17:30~21:30 (L.O. 21:00) — 월요일 영업, 수 휴무",
   "phone": "+81 3-3423-8100",
   "walk": "六本木역 도보 6분 (0.4km) · 롯폰기 힐즈 레지던스 B 3F",
   "note": "케야키자카 일루미네이션(17:00~23:00) 바로 옆. 18:45 일루미네이션 → 19:00 식사가 안 되고, <b>18:00 또는 18:30 시작</b>만 가능합니다. 즉 일루미네이션을 식후(21:00~)로 미루는 일정이 됩니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−12−2 六本木ヒルズレジデンス B 3F",
   "lat": 35.6587599,
   "lng": 139.7294329,
   "map": "https://maps.google.com/?cid=3204237550771424619",
   "cid": "3204237550771424619",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r137",
   "image": "./images/restaurants/r137.jpg",
   "name": "에비스 엔도",
   "jp": "恵比寿 えんどう",
   "google_name": "Ebisu Endou",
   "genre": "에비스 엔도",
   "genre_full": "에비스 엔도 · 스시 오마카세",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "40,000~49,999엔",
   "tabelog": "4.08",
   "google": 4.4,
   "reviews": "167",
   "hours": {
    "d21": "12:00~24:00",
    "d22": "12:00~24:00",
    "d23": "12:00~24:00",
    "d24": "12:00~24:00"
   },
   "hours23Guide": "17:30~19:30 / 20:30~22:30 (2부제) · 祝日 영업 표기, 정기휴무는 '不定休'",
   "phone": "+81 3-6303-1152",
   "walk": "에비스역 도보 10분 (0.2km·남쪽 출구 방면)",
   "note": "2025 타베로그 어워드 Bronze · 스시 百名店 2025. 타베로그 영업시간표에 祝日도 17:30/20:30 두부제로 들어 있어 11/23 영업으로 봅니다(단 '不定休'라 전화 확인 필수). 3일 뒤 슬롯은 어려우니 취소표를 노리는 쪽.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0022 Tokyo, Shibuya, Ebisuminami, 1 Chome−17−2 4F",
   "lat": 35.6446976,
   "lng": 139.7105206,
   "map": "https://maps.google.com/?cid=13786171700231961037",
   "cid": "13786171700231961037",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r138",
   "image": "./images/restaurants/r138.jpg",
   "name": "에비스 스시 교텐",
   "jp": "恵比寿 鮨 暁天",
   "google_name": "恵比寿 鮨 暁天",
   "genre": "에비스 스시 교텐",
   "genre_full": "에비스 스시 교텐 · 스시 오마카세",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "10,000~14,999엔",
   "tabelog": "3.53",
   "google": 4.8,
   "reviews": "1,115",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:30",
    "d22": "12:00~15:00 · 17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "12:00~15:00 · 17:00~23:30"
   },
   "hours23Guide": "12:00~15:00 / 17:00~23:20 (L.O. 22:30) — 祝日 포함 영업",
   "phone": "+81 50-5786-6649",
   "walk": "에비스역 도보 2분 (0.2km)",
   "note": "2026년 5월 오픈한 신장. 리뷰 1,100건이 넘고 23:20까지 해 늦은 저녁에 강합니다. 좌석이 많아 3인·당일 예약 성공률이 이 목록에서 가장 높은 축.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0021 Tokyo, Shibuya, Ebisunishi, 1 Chome−9−5 東急ステイ渋谷 恵比寿 地下1階 恵比寿 鮨 暁天",
   "lat": 35.647047,
   "lng": 139.7083289,
   "map": "https://maps.google.com/?cid=5289924510864060421",
   "cid": "5289924510864060421",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r139",
   "image": "./images/restaurants/r139.jpg",
   "name": "다이칸야마 스시 타케우치",
   "jp": "代官山 鮨 たけうち",
   "google_name": "다이칸야마 스시 타케우치",
   "genre": "다이칸야마 스시 타케우치",
   "genre_full": "다이칸야마 스시 타케우치 · 스시 오마카세",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "코스 8,800엔~ · 예산대 20,000~29,999엔",
   "tabelog": null,
   "google": 4.6,
   "reviews": "230",
   "hours": {
    "d21": "12:00~14:00 · 18:00~22:30",
    "d22": "12:00~14:00 · 18:00~22:30",
    "d23": "12:00~14:00 · 18:00~22:30",
    "d24": "12:00~14:00 · 18:00~22:30"
   },
   "hours23Guide": "12:00~14:00 / 18:00~23:00 — 매일 영업(휴무 표기 없음)",
   "phone": "+81 3-6455-0080",
   "walk": "다이칸야마역 도보 10분 (0.5km)",
   "note": "도요스에서 매일 사 오는 네타로 코스만 내는 집. 가격대가 이 목록에서 가장 낮은 축이지만 생일 연출은 해주지 않고(타베로그 명시) 취소료가 셉니다. 일정이 확실할 때만.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0033 Tokyo, Shibuya, Sarugakucho, 5−8 다이칸야마 스시 타케우치 MI代官山 1F",
   "lat": 35.65242,
   "lng": 139.703894,
   "map": "https://maps.google.com/?cid=17753790264412763285",
   "cid": "17753790264412763285",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r140",
   "image": "./images/restaurants/r140.jpg",
   "name": "카이카야 바이 더 씨",
   "jp": "開花屋 by the sea",
   "google_name": "카이카야",
   "genre": "카이카야 바이 더 씨",
   "genre_full": "카이카야 바이 더 씨 · 해산물 창작요리",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "고급해산물",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "코스 8,580 / 10,780 / 13,200엔 (2시간·음료 별도)",
   "tabelog": null,
   "google": 4.4,
   "reviews": "1,559",
   "hours": {
    "d21": "17:00~22:30",
    "d22": "17:00~22:30",
    "d23": "17:00~22:30",
    "d24": "17:00~22:30"
   },
   "hours23Guide": "17:00~22:30 (L.O. 21:30) · 水 휴무 · 祝日 영업 표기",
   "phone": "+81 3-3770-0878",
   "walk": "신센역 도보 1분 · 시부야역 도보 8분",
   "note": "1985년 창업, 도요스 직송 생선 7종 사시미가 간판. 영어 메뉴·영어 대응 스태프. 타베로그 영업시간에 祝日이 포함돼 있습니다. 다만 대화보다 활기 쪽이고 개인실이 없습니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0044 Tokyo, Shibuya, Maruyamacho, 23−7 星野円山ビル １F 渋谷 카이카야 桑原ビル１F",
   "lat": 35.6567999,
   "lng": 139.6941954,
   "map": "https://maps.google.com/?cid=11972321199625134092",
   "cid": "11972321199625134092",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r141",
   "image": "./images/restaurants/r141.jpg",
   "name": "카니도라쿠 신주쿠 본점",
   "jp": "かに道楽 新宿本店",
   "google_name": "가니도라쿠 신주쿠본점",
   "genre": "카니도라쿠 신주쿠 본점",
   "genre_full": "카니도라쿠 신주쿠 본점 · 게 요리 (즈와이·타라바)",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "10,000~14,999엔 · 런치 6,000~7,999엔",
   "tabelog": "3.37",
   "google": 4.2,
   "reviews": "1,620",
   "hours": {
    "d21": "11:30~22:00",
    "d22": "11:30~22:00",
    "d23": "11:30~22:00",
    "d24": "11:30~22:00"
   },
   "hours23Guide": "11:30~22:00 (L.O. 21:30) · 휴무는 연말연시뿐 — 11/23 영업",
   "phone": "+81 3-3352-0096",
   "walk": "新宿三丁目역 B3 도보 3분 · 新宿역 도보 6분",
   "note": "3일 전에도 3인 개인실이 잡힐 확률이 높은 확실한 카드. 게 코스를 개인실에서 천천히. 화려함은 덜하지만 공휴일 정상 영업이 확인돼 안전합니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−14−20 新宿テアトルビル 가니도라쿠 신주쿠본점 7・8F",
   "lat": 35.6922864,
   "lng": 139.7052181,
   "map": "https://maps.google.com/?cid=6383118177018281933",
   "cid": "6383118177018281933",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r142",
   "image": "./images/restaurants/r142.jpg",
   "name": "잇세키 산초 별저",
   "jp": "一石三鳥 別邸",
   "google_name": "Issekisanncho Bettei",
   "genre": "잇세키 산초 별저",
   "genre_full": "잇세키 산초 별저 · 스시 + 해산물 이자카야",
   "area": "니시아자부",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라",
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "10,000~14,999엔 (개인실 확약은 +3,000엔)",
   "tabelog": "3.53",
   "google": 4.7,
   "reviews": "367",
   "hours": {
    "d21": "11:00~15:00 · 17:00~23:00",
    "d22": "11:30~15:00 · 17:00~22:00",
    "d23": "11:30~15:00 · 17:00~23:00",
    "d24": "11:30~15:00 · 17:00~23:00"
   },
   "hours23Guide": "11:30~15:00 / 17:00~23:00 (구글) — 祝日 표기는 미확인",
   "phone": "+81 3-6434-9495",
   "walk": "六本木역 도보 7분 (0.5km) · 니시아자부 1초메",
   "note": "에도마에 스시와 해산물 츠마미를 같이 내고, 야마유키 참치를 씁니다. 개인실이 있고 21,800엔 VIP 코스(21품)도 있어 '제대로 된 한 끼'가 가능. 휴무가 갈리는 시기라 예약 전 전화로 11/23 확인 필요.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒106-0031 Tokyo, Minato City, Nishiazabu, 1 Chome−8−12 ARISTO西麻布 1F",
   "lat": 35.6606819,
   "lng": 139.7250908,
   "map": "https://maps.google.com/?cid=9555323224194961121",
   "cid": "9555323224194961121",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r143",
   "image": "./images/restaurants/r143.jpg",
   "name": "23번지 신주쿠 동구",
   "jp": "北海道海鮮・個室情緒 23番地 新宿東口",
   "google_name": "北海道海鮮・個室情緒 ～ ２３番地 ～ 新宿東口店",
   "genre": "23번지 신주쿠 동구",
   "genre_full": "23번지 신주쿠 동구 · 홋카이도 해산물 이자카야",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물",
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "3,000~3,999엔",
   "tabelog": "3.43",
   "google": 4.4,
   "reviews": "677",
   "hours": {
    "d21": "11:30~23:30",
    "d22": "11:30~23:30",
    "d23": "11:30~23:30",
    "d24": "11:30~23:30"
   },
   "hours23Guide": "11:30~23:30 (구글) — 공휴일 영업 표기(체인)",
   "phone": "+81 3-5368-3961",
   "walk": "新宿역 도보 2분 (0.1km)",
   "note": "홋카이도 아침 경매(根室·歯舞) 해산물을 내건 대형 개인실 이자카야. 게·우니·호타테를 부담 없이. '고급'보다 '푸짐'이며, 당일 예약도 되는 안전판입니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−21−4 第2サンパークビル 6F 北海道海鮮・個室情緒 ～ ２３番地 ～ 新宿東口店",
   "lat": 35.6931014,
   "lng": 139.7022062,
   "map": "https://maps.google.com/?cid=10619478164008146005",
   "cid": "10619478164008146005",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r144",
   "image": "./images/restaurants/r144.jpg",
   "name": "마루야스 수산 신주쿠",
   "jp": "丸安水産 新宿",
   "google_name": "丸安水産 新宿店",
   "genre": "마루야스 수산 신주쿠",
   "genre_full": "마루야스 수산 신주쿠 · 해산물 이자카야 · 하마야키",
   "area": "신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물",
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "4,000~4,999엔",
   "tabelog": "3.35",
   "google": 4.2,
   "reviews": "1,140",
   "hours": {
    "d21": "12:00~翌02:00",
    "d22": "12:00~24:00",
    "d23": "12:00~24:00",
    "d24": "12:00~24:00"
   },
   "hours23Guide": "12:00~24:00 (금·토 翌2:00) — 공휴일 영업 표기(체인)",
   "phone": "+81 3-6273-2188",
   "walk": "新宿三丁目역 도보 1분 (0.1km)",
   "note": "조개·해산물을 숯불에 바로 구워 먹는 하마야키와 나베. 생일 저녁보다 '가볍게 한 잔 더' 쪽입니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−35−9 永和商事ビル 2Ｆ 丸安水産 新宿店",
   "lat": 35.6899943,
   "lng": 139.7023274,
   "map": "https://maps.google.com/?cid=7747013665565663896",
   "cid": "7747013665565663896",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r145",
   "image": "./images/restaurants/r145.jpg",
   "name": "카니잔마이 신주쿠",
   "jp": "かにざんまい 新宿",
   "google_name": "Kanizanmai Shinjuku-ten",
   "genre": "카니잔마이 신주쿠",
   "genre_full": "카니잔마이 신주쿠 · 게 + 스시 먹방",
   "area": "니시신주쿠",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라",
    "해산물·회"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "기간한정 어린 타라바게 먹방 9,980엔(세금 포함 10,978엔) · 통상 4,000~4,999엔",
   "tabelog": "3.41",
   "google": 4.1,
   "reviews": "465",
   "hours": {
    "d21": "11:00~23:30",
    "d22": "11:00~23:30",
    "d23": "11:00~23:30",
    "d24": "11:00~23:30"
   },
   "hours23Guide": "11:00~23:30 (구글·연중무휴 표기)",
   "phone": "+81 50-1785-4228",
   "walk": "新宿西口역 도보 1분",
   "note": "즈와이·타라바게와 스시를 배불리. 3인 3만엔대로 게를 양껏 먹이는 유일한 선택지지만 '고급'과는 결이 다릅니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 1 Chome−3−2 ヨドバシ大ガードビル 2F-3F",
   "lat": 35.6932917,
   "lng": 139.6989735,
   "map": "https://maps.google.com/?cid=8160063635020594918",
   "cid": "8160063635020594918",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r146",
   "image": "./images/restaurants/r146.jpg",
   "name": "스시 세이다이",
   "jp": "鮨せい大",
   "google_name": "Sushi Seidai",
   "genre": "스시 세이다이",
   "genre_full": "스시 세이다이 · 스시 오마카세",
   "area": "시부야",
   "bigArea": "시부야",
   "tags": [
    "생일저녁",
    "고급해산물",
    "스시·텐푸라"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "야 27,500엔 / 낮 13,200엔(토·일·祝만)",
   "tabelog": "3.66",
   "google": 4.9,
   "reviews": "128",
   "hours": {
    "d21": "17:30~23:00",
    "d22": "17:30~23:00",
    "d23": "17:30~23:00",
    "d24": "17:30~23:00"
   },
   "hours23Guide": "17:30~23:00 · 공식 사이트에 정기휴무 표기 없음 → 11/23 영업 여부는 전화 확인",
   "phone": "+81 50-1794-1794",
   "walk": "에비스역 도보 9분 (0.6km)",
   "note": "'에비스 엔도'에서 독립해 2025년 9월 연 젊은 집. 개인실이 4석 있어 3인이 조용히 앉기 좋고, 구글 4.9(128). 공식 사이트도 낮 코스를 '토·일·祝'로 따로 두고 있어 공휴일 영업 쪽으로 보이지만, 휴무 표기가 없어 전화로 확정하는 게 안전합니다.",
   "tip": "",
   "awards": "",
   "addr": "일본 〒150-0013 Tokyo, Shibuya, Ebisu, 3 Chome−29−16 ＡＢＣアネックスビル 3F",
   "lat": 35.6433095,
   "lng": 139.7154516,
   "map": "https://maps.google.com/?cid=13272053166914718907",
   "cid": "13272053166914718907",
   "src": "C",
   "hoursVerification": {
    "status": "unverified",
    "label": "기존 Google Maps 참고값 · 공식 미검증",
    "checked": "2026-11-20",
    "source": "기존 수집 데이터"
   }
  },
  {
   "id": "r147",
   "image": "./images/restaurants/r147.jpg",
   "name": "오우기스시 신주쿠 중앙구점",
   "jp": "扇寿司 中央口店",
   "google_name": "Ougi Sushi",
   "genre": "스시",
   "genre_full": "스시 · 런치 철화동·해산물동 990~1,430엔",
   "area": "신주쿠 3초메",
   "bigArea": "신주쿠",
   "tags": [
    "스시·텐푸라",
    "해산물·회"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "런치 990~1,430엔 / 저녁 3,000~4,999엔",
   "tabelog": null,
   "google": 3.7,
   "reviews": "414",
   "hours": {
    "d21": "11:30~23:00",
    "d22": "11:30~23:00",
    "d23": "11:30~23:00",
    "d24": "11:30~23:00"
   },
   "hours23Guide": "11/23 공휴일도 11:30~23:00(구글 연중무휴 표기) · 런치 메뉴 11:30~16:00",
   "phone": "+81 3-3354-7105",
   "walk": "JR 신주쿠역 동남구 도보 3분(0.2km) · 호텔 도보 14분(1.1km)",
   "note": "호진님 리스트 01. 신주쿠역 동남구 2분의 오래된 동네 스시집. 타베로그 리뷰상 런치는 철화동 1,100엔·해산물동 1,100엔·연어알동 1,430엔 3종뿐이고 구글 3.7(414)로 평점은 높지 않습니다('가격 대비 무난'). 같은 상호 扇寿司가 구글에 3-22-13(4.2·241)으로도 등록돼 있는데, 타베로그·인스타 공식은 이 3-36-14 중앙구점입니다.",
   "tip": "1일차 저녁(20:45~21:20)용. 23:00 마감이라 여유가 있고, 신주쿠역 동남구라 식사 후 JR로 시부야 메가돈키(21:45)로 넘어가기 좋습니다. 다만 호텔까지 도보 14분(1.1km)이라 일정표의 '호텔 도보 10분 이내'보다는 조금 멉니다.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−36−14 三平酒寮中央口店",
   "lat": 35.6903492,
   "lng": 139.7021222,
   "cid": "10891425294017464041",
   "src": "D",
   "map": "https://maps.google.com/?cid=10891425294017464041",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r148",
   "image": "./images/restaurants/r148.jpg",
   "name": "텐노하쿠 히츠마부시",
   "jp": "関西風地焼きうなぎとひつまぶし 天ノ箔",
   "google_name": "関西風地焼きうなぎとひつまぶし 天ノ箔",
   "genre": "히츠마부시",
   "genre_full": "간사이식 지야키 우나기 · 히츠마부시",
   "area": "신주쿠 1초메(신주쿠교엔마에)",
   "bigArea": "신주쿠",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "런치 2,200엔~ / 저녁 6,000~7,999엔",
   "tabelog": "3.34",
   "google": 4.6,
   "reviews": "170",
   "hours": {
    "d21": "11:00~15:00 · 17:00~22:00",
    "d22": "11:00~15:00 · 17:00~22:00",
    "d23": "11:00~15:00 · 17:00~22:00",
    "d24": "11:00~15:00 · 17:00~22:00"
   },
   "hours23Guide": "11/23(월·공휴일) 11:00~15:00·17:00~22:00 (구글 표기) · 정기휴무는 수요일이라 23일은 영업",
   "phone": "+81 3-6380-0082",
   "walk": "신주쿠교엔마에역 도보 2분 · JR 신주쿠역 도보 14분(1.1km) · 호텔 도보 25분(2.0km)",
   "note": "호진님 리스트 04. 간사이식 지야키(직화) 장어를 히츠마부시로 내는 집. 구글 4.6(170)·타베로그 3.34(96). 수요일 휴무라 11/21~24 중에는 23일(공휴일)까지 모두 영업합니다.",
   "tip": "3일차 생일 저녁(19:30~21:00) 슬롯에 맞습니다 — 22:00 마감이라 19:30 시작이면 충분하고, 신주쿠역에서 도보 14분. 2일차 저녁은 11/22 미정(시부야·신주쿠 후보)이라 이 자리와는 겹치지 않습니다.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 1 Chome−15−18",
   "lat": 35.6895766,
   "lng": 139.7104274,
   "cid": "17961692263931028643",
   "src": "D",
   "map": "https://maps.google.com/?cid=17961692263931028643",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r149",
   "image": "./images/restaurants/r149.jpg",
   "name": "니쿠겐 롯폰기(야키니쿠 10단 모둠)",
   "jp": "和牛焼肉NIKUGEN 六本木店",
   "google_name": "Japanese Yakiniku Nikugen",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 명물 '야키니쿠 10단 모둠' 코스",
   "area": "롯폰기",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "야키니쿠",
    "생일저녁"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "코스 5,489~7,689엔 · 음주 무제한 2,500엔~",
   "tabelog": null,
   "google": 4.5,
   "reviews": "1,548",
   "hours": {
    "d21": "11:00~23:00",
    "d22": "11:00~23:00",
    "d23": "11:00~23:00",
    "d24": "16:00~23:00"
   },
   "hours23Guide": "11/23 공휴일 11:00~23:00 (공식 '토·일·공휴일 11:00–23:00', L.O. 22:00)",
   "phone": "+81 3-6447-2853",
   "walk": "롯폰기역 2번 출구 도보 1분 · 롯폰기 힐즈·게야키자카 도보 4분(0.3km) · JR 신주쿠역에서 20분",
   "note": "호진님 리스트 05. 말씀하신 '10코스'는 이 집 명물 '야키니쿠 10단 모둠(十段盛り)' 코스입니다. ADVANCE 16종 5,489엔, 생일용 SPECIAL 16종 7,689엔(꽃 접시+메시지 카드), SIGNATURE 11품 9,889엔. 구글 4.5(1,548). 아카사카점(2-14-33)도 있습니다.",
   "tip": "생일 저녁을 롯폰기에서 잡는 쪽이 동선상 가장 좋습니다 — 게야키자카(18:25)에서 도보 4분이라 19:30에 바로 앉고, 신주쿠 복귀·L-Breath(19:10)는 건너뜁니다. 신주쿠에서 오려면 19:10 출발해 19:30 착석이 빠듯합니다. SPECIAL 코스 예약 시 '꽃 접시·메시지 카드' 요청.",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 7 Chome−15−17 ユニ六本木ビル 2F",
   "lat": 35.6622982,
   "lng": 139.7296021,
   "cid": "13662869368874631984",
   "src": "D",
   "map": "https://maps.google.com/?cid=13662869368874631984",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r150",
   "image": "./images/restaurants/r150.jpg",
   "name": "로스트비프 오노 하라주쿠점",
   "jp": "ローストビーフ大野 原宿店",
   "google_name": "Roast Beef Ohno Harajuku Branch",
   "genre": "로스트비프덮밥",
   "genre_full": "와규 로스트비프 덮밥",
   "area": "하라주쿠(오모테산도 4초메)",
   "bigArea": "시부야",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 1,000~1,999엔",
   "tabelog": "3.35",
   "google": 4.7,
   "reviews": "9,085",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:00"
   },
   "hours23Guide": "11/23 공휴일도 11:00~22:00(구글 연중무휴 표기)",
   "phone": "+81 3-3478-2160",
   "walk": "랄프로렌 오모테산도 도보 2분(0.2km) · RAGTAG 하라주쿠 도보 6분(0.5km)",
   "note": "호진님 리스트 06. 와규 로스트비프를 산처럼 쌓아 내는 덮밥. 구글 4.7(9,085)·타베로그 3.35(300). 2일차 15:50 카페 슬롯이 랄프로렌 오모테산도 기준이라 도보 2분으로 바로 붙습니다.",
   "tip": "카페 슬롯이 10분뿐이라 대기가 20분을 넘으면 패스하고 하라주쿠 다음 매장으로 넘어가세요. 같은 브랜드 '하라주쿠 다케시타구치점'(神宮前1-8-8, 구글 4.9·11,629)은 다른 매장입니다.",
   "awards": "",
   "addr": "일본 〒150-0001 Tokyo, Shibuya, Jingūmae, 4 Chome−31−10 YMスクウェア原宿 地下1階",
   "lat": 35.6690422,
   "lng": 139.7062561,
   "cid": "15497458384974208223",
   "src": "D",
   "map": "https://maps.google.com/?cid=15497458384974208223",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r151",
   "image": "./images/restaurants/r151.jpg",
   "name": "히비 하레바레 신주쿠 3초메",
   "jp": "日々晴々 新宿三丁目店",
   "google_name": "HIBI HARE BARE Shinjuku",
   "genre": "스시 이자카야",
   "genre_full": "스시 이자카야 · 하레바레 모둠·우니 푸딩",
   "area": "신주쿠 3초메",
   "bigArea": "신주쿠",
   "tags": [
    "스시·텐푸라",
    "이자카야·사케"
   ],
   "slots": [
    "d2-dinner",
    "d3-birthday"
   ],
   "budget": "약 3,000~5,000엔",
   "tabelog": "3.48",
   "google": 4.8,
   "reviews": "8,011",
   "hours": {
    "d21": "15:00~23:00",
    "d22": "15:00~23:00",
    "d23": "15:00~23:00",
    "d24": "17:00~23:00"
   },
   "hours23Guide": "11/23 공휴일 15:00~23:00 (타베로그 '토·일·공휴일 15:00–23:00')",
   "phone": "+81 50-1809-1247",
   "walk": "신주쿠 3초메역 도보 3분 · JR 신주쿠역 도보 8분(0.7km) · 호텔 도보 20분(1.6km)",
   "note": "호진님 리스트 07. 2022년 오픈한 스시 이자카야로 '이 가격에 이 초밥'이라는 평가가 일관됩니다. 구글 4.8(8,011)·타베로그 3.48(617). 54석, 전석 금연, 개인실 없음.",
   "tip": "23:00까지 해 2일차 시부야 저녁(20:00~21:30) 뒤 2차로도 무리 없고, 공휴일 15:00부터 열어 3일차 생일 저녁(19:30) 후보로도 됩니다. 20:30 이후는 전화 예약만 받으니(050-1809-1247) 미리 걸어두세요. 호텔까지 도보 20분이라 늦은 밤 귀숙은 택시가 편합니다.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−6−9 山口ビル 1F",
   "lat": 35.6915575,
   "lng": 139.7060359,
   "cid": "9813917617808352911",
   "src": "D",
   "map": "https://maps.google.com/?cid=9813917617808352911",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r152",
   "image": "./images/restaurants/r152.jpg",
   "name": "와라타코 하라주쿠 오모테산도점",
   "jp": "笑たこ 原宿表参道店",
   "google_name": "WaraTako",
   "genre": "타코야키",
   "genre_full": "타코야키 · 캣스트리트 간식",
   "area": "하라주쿠(캣스트리트)",
   "bigArea": "시부야",
   "tags": [
    "기타"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "~999엔(6개 500엔대)",
   "tabelog": "3.26",
   "google": 3.6,
   "reviews": "600",
   "hours": {
    "d21": "11:00~19:45",
    "d22": "11:00~19:45",
    "d23": "11:00~19:45",
    "d24": "11:00~19:45"
   },
   "hours23Guide": "11/23 공휴일도 11:00~19:45(구글 표기)",
   "phone": "+81 3-3409-8787",
   "walk": "RAGTAG 하라주쿠 도보 2분(0.2km) · 랄프로렌 오모테산도 도보 3분",
   "note": "호진님 리스트 08. 캣스트리트 한복판 타코야키. 구글 3.6(600)·타베로그 3.26(100)으로 맛집이라기보다 이동 중 간식입니다.",
   "tip": "2일차 15:50 카페 슬롯(랄프로렌 기준 도보 3분)이나 그 뒤 캣스트리트 이동 중에 들르기 좋습니다. 3인이 6개 1팩 나눠 먹고, 19:45에 닫습니다.",
   "awards": "",
   "addr": "일본 〒150-0001 Tokyo, Shibuya, Jingūmae, 5 Chome−11−3",
   "lat": 35.6666794,
   "lng": 139.70618,
   "cid": "15399716313715872261",
   "src": "D",
   "map": "https://maps.google.com/?cid=15399716313715872261",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r153",
   "image": "./images/restaurants/r153.jpg",
   "name": "로바타 사카즈키",
   "jp": "炉端 さかずき",
   "google_name": "炉端 さかずき",
   "genre": "로바타야키",
   "genre_full": "로바타야키 이자카야 · 통생선 구이·두툼한 사시미",
   "area": "이케부쿠로(히가시이케부쿠로)",
   "bigArea": "기타",
   "tags": [
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [],
   "budget": "약 4,000~7,999엔",
   "tabelog": null,
   "google": 4.8,
   "reviews": "635",
   "hours": {
    "d21": "12:00~23:00",
    "d22": "12:00~23:00",
    "d23": "12:00~23:00",
    "d24": "15:00~23:00"
   },
   "hours23Guide": "11/23 공휴일 12:00~23:00 (타베로그 '토·일·공휴일 12:00–23:00')",
   "phone": "+81 3-3983-0307",
   "walk": "이케부쿠로역 동구 도보 4분 · 신주쿠역에서 JR 6분 + 도보 4분(총 20분)",
   "note": "호진님 리스트 09. 2026-05-24 오픈한 100년 생선가게 직영 로바타야키로, 통생선 구이와 두툼한 사시미가 간판입니다. 구글 4.8(635). 44석·전석 금연.",
   "tip": "동선 밖입니다 — 이케부쿠로라 3박 4일 일정 어느 날에도 붙지 않습니다. 넣으려면 저녁 한 자리를 비워야 하고, 2~12인 예약(050-5869-5480)이 가능합니다.",
   "awards": "",
   "addr": "일본 〒170-0013 Tokyo, Toshima City, Higashiikebukuro, 1 Chome−28−3 市川ビル 2F",
   "lat": 35.7294512,
   "lng": 139.716262,
   "cid": "16245116526473671884",
   "src": "D",
   "map": "https://maps.google.com/?cid=16245116526473671884",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r154",
   "image": "./images/restaurants/r154.jpg",
   "name": "스시마루(鮨丸)",
   "jp": "鮨丸 すしまる",
   "google_name": "Sushimaru",
   "genre": "스시",
   "genre_full": "스시 · 런치 니기리·해산물동·특상 니기리",
   "area": "신주쿠 3초메",
   "bigArea": "신주쿠",
   "tags": [
    "스시·텐푸라",
    "해산물·회"
   ],
   "slots": [
    "d1-dinner"
   ],
   "budget": "런치 990~3,300엔 / 저녁 8,000~9,999엔",
   "tabelog": "3.47",
   "google": 4.2,
   "reviews": "1,088",
   "hours": {
    "d21": "11:30~23:30",
    "d22": "11:30~22:00",
    "d23": "11:30~22:00",
    "d24": "11:30~23:30"
   },
   "hours23Guide": "11/23 공휴일 11:30~22:00 (일·공휴일 단축, L.O. 21:30) · 점심특선은 평일 11:30~14:00만",
   "phone": "+81 3-3356-7077",
   "walk": "신주쿠 3초메역 A5 도보 1분(0.1km) · JR 신주쿠역 중앙동구 도보 5분(0.4km) · 호텔 도보 16분(1.3km)",
   "note": "호진님 리스트 10. 연 130종 네타를 쓰는 신주쿠 3초메 스시집으로, 후지TV에 '신주쿠역 근처 가성비 점심'으로 소개됐습니다. 구글 4.2(1,088)·타베로그 3.47(571). 특상 니기리 5,500엔·극상 니기리 7,700엔.",
   "tip": "점심특선(990~1,320엔)은 평일 11:30~14:00 한정입니다 — 11/21(토)·11/23(공휴일)·11/24(오전 출국)라 이번 여행에서는 점심특선을 쓰기 어렵습니다. 저녁은 1인 8,000~10,000엔대. 1일차 저녁(20:45)이면 토요일 23:30까지여서 여유롭습니다.",
   "awards": "",
   "addr": "일본 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−31−6",
   "lat": 35.6906959,
   "lng": 139.7034818,
   "cid": "9257308127959887237",
   "src": "D",
   "map": "https://maps.google.com/?cid=9257308127959887237",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r155",
   "image": "./images/restaurants/r155.jpg",
   "name": "멘야 무사시 코쇼 (롯폰기)",
   "jp": "麺屋武蔵 虎嘯",
   "google_name": "Roppongi Menya Musashi Kosho",
   "genre": "라멘",
   "genre_full": "라멘 · 츠케멘(돈코츠 교케)",
   "area": "롯폰기 4초메",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "약 1,000~1,999엔",
   "tabelog": "3.41",
   "google": 4.1,
   "reviews": "1,512",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:30"
   },
   "hours23Guide": "11/23 공휴일은 토·일·祝 시간표 11:00~22:00 · 定休日 없음 · 평일은 22:30까지",
   "phone": "+81 3-3497-0634",
   "walk": "도에이 오에도선 롯폰기역 7번 출구 도보 1분(0.1km) · 히비야선 4a 출구 도보 2분 · 롯폰기 힐즈 오야네 광장 도보 11분(0.8km)",
   "note": "인스타 게시물(호진님 전달) 8곳 중 하나. 멘야무사시가 1996년 창업점 '아오야마(青山)'의 레시피를 되살린 롯폰기점으로, 후추를 반죽에 넣은 평타면과 돈코츠 교케 스프가 간판입니다. 18석뿐이고 구글 4.1(1,512)·타베로그 3.41(1,156). 같은 브랜드 신주쿠본점(r004)과는 다른 가게입니다.",
   "tip": "3일차 저녁을 롯폰기에서 잡는 쪽이면 힐즈 오야네 광장(17:50)에서 도보 11분이라 19:00 전후 한 그릇이 가능합니다 — 신주쿠로 돌아가 19:30에 앉는 대신 쓰는 캐주얼 대안입니다. 카드·전자머니가 안 되니 현금 1,000엔권을 준비하세요. 3인 4,000엔 안쪽.",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 4 Chome−12−6 内田ビル 1F",
   "lat": 35.6643665,
   "lng": 139.7314895,
   "cid": "16048338611796969522",
   "src": "D",
   "map": "https://maps.google.com/?cid=16048338611796969522",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r156",
   "image": "./images/restaurants/r156.jpg",
   "name": "팡 메종 긴자 (소금빵)",
   "jp": "塩パン屋 pain・maison 銀座店",
   "google_name": "pain･maison Ginza",
   "genre": "베이커리",
   "genre_full": "베이커리 · 소금빵·메론소금빵 (테이크아웃)",
   "area": "긴자 2초메(히가시긴자)",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 120~1,000엔 (소금빵 1개 120엔)",
   "tabelog": "3.66",
   "google": 4.3,
   "reviews": "2,871",
   "hours": {
    "d21": "08:30~19:00",
    "d22": "08:30~19:00",
    "d23": "08:30~19:00",
    "d24": "휴무(화요일 정기휴무)"
   },
   "hours23Guide": "11/23 공휴일 정상 08:30~19:00 · 정기휴무는 화요일뿐이라 11/24(화)는 휴무",
   "phone": "+81 3-6264-0679",
   "walk": "히가시긴자역 A7 출구 도보 3분(0.2km) · 긴자역 A13 출구 도보 5분 · MUJI 긴자 도보 10분(0.7km) · 다이코쿠야 긴자점 도보 14분(1.0km)",
   "note": "인스타 게시물 8곳 중 하나. 에히메현에서 시작한 소금빵 전문점의 긴자점으로, 소금빵 120엔·메론소금빵·소금빵 샌드를 테이크아웃만 합니다. 구글 4.3(2,871)·타베로그 3.66(1,267). 예약 불가, 화요일 휴무.",
   "tip": "3일차 일정에 14:50으로 들어가 있습니다 — MUJI 긴자 14:40 출발 → 도보 10분(0.7km) → 14:50 도착·15:05 출발 → 히가시긴자(東銀座)역 A7 출구 도보 3분 → 15:13 히비야선 → 에비스 15:29. 원래 14:30~15:00에 잡았던 카페 자리를 이 테이크아웃으로 바꿨습니다. 2026년 11월 타베로그 후기 기준 매장에서 QR로 대기 접수를 받으니, 도착하면 먼저 QR을 찍고 근처를 둘러보세요. 11/24(화)는 휴무라 마지막 날에는 못 삽니다.",
   "awards": "",
   "addr": "일본 〒104-0061 Tokyo, Chuo City, Ginza, 2 Chome−14−5 1階",
   "lat": 35.6715607,
   "lng": 139.7705344,
   "cid": "17159700221412295500",
   "src": "D",
   "map": "https://maps.google.com/?cid=17159700221412295500",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r157",
   "image": "./images/restaurants/r157.jpg",
   "name": "하브스 마루노우치 (丸ビル)",
   "jp": "ハーブス 丸ビル店",
   "google_name": "HARBS Marunouchi Building",
   "genre": "케이크·카페",
   "genre_full": "케이크·카페 · 밀크레이프·과일 케이크",
   "area": "마루노우치(도쿄역)",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "카페·디저트"
   ],
   "slots": [
    "d3-cafe"
   ],
   "budget": "약 1,000~1,999엔 (케이크 930~1,500엔)",
   "tabelog": "3.34",
   "google": 4.1,
   "reviews": "723",
   "hours": {
    "d21": "11:00~21:00",
    "d22": "11:00~20:00",
    "d23": "11:00~20:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "11/23 공휴일 11:00~20:00 (일·祝 단축) · 이트인 L.O. 19:30, 테이크아웃은 21:00까지(일·연휴 최종일 20:00) · 연중무휴",
   "phone": "+81 3-6269-9595",
   "walk": "JR 도쿄역 마루노우치 남구 도보 1분 · 노스페이스 마루노우치(신마루노우치 빌딩) 도보 3분(0.2km) · 몽벨 교바시 도보 16분(1.1km)",
   "note": "인스타 게시물은 이케부쿠로 루미네점을 소개했지만 그 지점은 우리 동선 밖입니다. 같은 브랜드 중 동선 안 지점인 마루노우치 빌딩 3F로 넣었습니다 — 3일차 11:00 노스페이스 마루노우치에서 도보 3분. 구글 4.1(723)·타베로그 3.34(471). 밀크레이프·과일 케이크가 간판입니다.",
   "tip": "이트인은 주말·공휴일에 30~60분 대기가 기본이고 테이크아웃은 1~2팀이라, 11:00 오픈 직후 테이크아웃 카운터에서 케이크만 사서 교바시로 넘어가는 쪽이 시간을 아낍니다. 3일차 14:30 카페 자리는 14:50 팡 메종 소금빵 테이크아웃으로 대체돼 앉을 자리가 없습니다 — 굳이 앉아 쉬려면 긴자 안 r063·r062·r064 중 하나를 넣고 그만큼 MUJI·에비스 시간을 줄여야 합니다. 롯폰기 힐즈 1F에도 하브스가 있지만 구글 3.8(591)이고 11/23은 20:00 마감입니다.",
   "awards": "",
   "addr": "일본 〒100-0005 Tokyo, Chiyoda City, Marunouchi, 2 Chome−4−1 丸ビル 3F",
   "lat": 35.6813398,
   "lng": 139.7635188,
   "cid": "15254536545380554506",
   "src": "D",
   "map": "https://maps.google.com/?cid=15254536545380554506",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r158",
   "image": "./images/restaurants/r158.jpg",
   "name": "야마모토노 함바그 시부야",
   "jp": "山本のハンバーグ 渋谷食堂",
   "google_name": "Yamamoto no Hamburg Shibuya Shokudo",
   "genre": "함바그",
   "genre_full": "함바그·양식 · 데미글라스 함바그 정식",
   "area": "시부야 3초메",
   "bigArea": "시부야",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 1,000~1,999엔",
   "tabelog": "3.31",
   "google": 4.4,
   "reviews": "1,871",
   "hours": {
    "d21": "11:00~22:00",
    "d22": "11:00~22:00",
    "d23": "11:00~22:00",
    "d24": "11:00~22:00"
   },
   "hours23Guide": "11/23 공휴일 정상 11:00~22:00(L.O. 21:30) · 연중무휴(연말연시 제외)",
   "phone": "+81 3-6427-3221",
   "walk": "시부야역 16b 출구 도보 1분 · 시부야역 0.35km · 2nd STREET 시부야 진난점 도보 11분(0.7km)",
   "note": "인스타 게시물 8곳 중 하나. 2008년 창업한 함바그 전문점으로, 불판에 반죽을 올려 직접 섞어 익히는 스타일의 데미글라스 함바그를 냅니다. 23석(카운터 5·테이블 18), 전석 금연. 구글 4.4(1,871)·타베로그 3.31(617).",
   "tip": "예약 불가·줄서기입니다. 2일차 시부야 쇼핑 마지막(20:10 2nd STREET 진난)에서 도보 11분(0.7km)이라 20:25 입장이면 L.O. 21:30까지 여유가 있습니다 — 2일차 저녁을 시부야에서 먹는 쪽으로 바꿀 때의 대안입니다(지금은 시부야 20:00 저녁이 기본). 21:00 이후 입장은 L.O.에 걸립니다. 카드 불가, PayPay만 됩니다.",
   "awards": "",
   "addr": "일본 〒150-0002 Tokyo, Shibuya, 3 Chome−6−18 第4矢木ビル 1F",
   "lat": 35.6575789,
   "lng": 139.7048184,
   "cid": "12761651627546376733",
   "src": "D",
   "map": "https://maps.google.com/?cid=12761651627546376733",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r159",
   "image": "./images/restaurants/r159.jpg",
   "name": "스시 스즈메 (아자부주반)",
   "jp": "麻布十番 鮨 すずめ",
   "google_name": "Azabu Juban Sushi Suzume",
   "genre": "스시",
   "genre_full": "스시 오마카세 · 카운터 9석",
   "area": "아자부주반(롯폰기 6초메)",
   "bigArea": "롯폰기·아자부",
   "tags": [
    "생일저녁",
    "스시·텐푸라",
    "고급해산물"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "숏 10,780엔 · 오마카세 17,380엔부터 (세금·서비스료 13% 별도)",
   "tabelog": "3.56",
   "google": 4.7,
   "reviews": "277",
   "hours": {
    "d21": "12:00~14:00 · 17:00~22:00",
    "d22": "12:00~14:00 · 17:00~22:00",
    "d23": "12:00~14:00 · 17:00~22:00 (공휴일 시간표 가정)",
    "d24": "12:00~14:00 · 17:30~22:00"
   },
   "hours23Guide": "11/23(월·공휴일)은 不定休 — 2025년 9월 오픈 공지에는 '월요일 휴무, 월요일이 공휴일이면 그다음 날 휴무'였습니다. 공휴일은 토·일·祝 시간표(17:00·19:30 2부제)로 보고, 예약 전에 전화로 11/23 영업 여부를 먼저 확인하세요.",
   "phone": "+81 3-6459-2213",
   "walk": "아자부주반역 7번 출구 도보 5분(0.37km) · 롯폰기역 3번 출구 도보 9분 · 게야키자카 도보 5분(0.3km) · 롯폰기 힐즈 오야네 광장 도보 8분(0.5km)",
   "note": "인스타 게시물 8곳 중 하나. 옛 이름 SUSHI Y로, 아자부주반 카운터 9석뿐인 스시집입니다. 야마유키 참치와 제철 오마카세를 내고 구글 4.7(277)·타베로그 3.56(169). 일제 스타트이고 15분 이상 늦으면 노쇼 처리, 서비스료 13% 별도입니다.",
   "tip": "3일차 생일 저녁을 롯폰기·아자부에서 잡는 쪽이면 게야키자카(18:25)에서 도보 5분이라 19:00~19:30 스타트에 맞고, 신주쿠 복귀·L-Breath는 접으면 됩니다. 다만 不定休라 11/23(월·공휴일) 영업 여부를 먼저 확인해야 합니다 — 2025년 9월 오픈 공지에는 '월요일 휴무, 월요일이 공휴일이면 그다음 날 휴무'였습니다. 코스는 숏 10,780엔·오마카세 17,380엔·VIP 21,780엔(세금·서비스료 13% 별도)이고 9석이라 3인 예약은 지금 전화로 잡아야 합니다. 생일 플레이트는 예약 시 요청.",
   "awards": "",
   "addr": "일본 〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−17−6 4F",
   "lat": 35.6579337,
   "lng": 139.7322781,
   "cid": "6249918309537339646",
   "src": "D",
   "map": "https://maps.google.com/?cid=6249918309537339646",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵+공식·타베로그 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간 / 공식 사이트·타베로그"
   }
  },
  {
   "id": "r160",
   "image": "./images/restaurants/r160.jpg",
   "name": "노다핀 (신주쿠 가부키초)",
   "jp": "居酒屋 のだぴん",
   "google_name": "Nodapin",
   "genre": "이자카야",
   "genre_full": "노포 이자카야 · 사시미·초밥·우니 파스타",
   "area": "가부키초 · 세이부신주쿠역 북쪽 출구 도보 1분",
   "bigArea": "신주쿠",
   "tags": [
    "이자카야·사케",
    "해산물·회"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "1인 3,000~4,500엔 예상(사시미 1,380엔 · 우니 파스타 1,100엔 · 안주 500엔대)",
   "tabelog": "3.64",
   "google": 4.4,
   "reviews": "516",
   "hours": {
    "d21": "17:00~23:30 (L.O. 23:00)",
    "d22": "17:00~23:30 (L.O. 23:00) — 일요일 영업 확인",
    "d23": "휴무 (월요일 정기휴무)",
    "d24": "휴무 (화요일 정기휴무)"
   },
   "phone": "+81 3-6273-8083",
   "walk": "세이부신주쿠역 북쪽 출구 도보 1분 · 신주쿠역 동쪽 출구 도보 8~9분 · 가부키초 2-45-7 石井ビル 3F",
   "note": "가부키초 2-45-7 이시이빌딩 3F. 사시미·초밥·우니 파스타로 알려진 노포 이자카야로 구글 4.4(516)·타베로그 3.64입니다. 한국어 메뉴 태블릿이 있고 카드는 되지만 전자머니는 안 됩니다. 전석 금연(건물 밖 흡연 공간).",
   "tip": "2026-11-22(일) 3인 예약을 문의했으나 만석으로 불가 — 이번 일정의 2일차 저녁에서는 뺐습니다. 다른 날 후보로 볼 때는 일요일 17:00~23:30·L.O. 23:00이고, 월·화 정기휴무라 11/23(월)·11/24(화)에는 갈 수 없습니다. 3인은 전화(+81 3-6273-8083)로 미리 잡아 두세요.",
   "awards": "",
   "addr": "〒160-0021 東京都新宿区歌舞伎町2-45-7 石井ビル3F",
   "lat": 35.6969674,
   "lng": 139.700469,
   "cid": "16059258653864779665",
   "map": "https://maps.google.com/?cid=16059258653864779665",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 + 공식 사이트 대조",
    "checked": "2026-11-21",
    "source": "Google Maps 영업시간(next_7_days) / nodapin.com"
   }
  },
  {
   "id": "r161",
   "image": "./images/restaurants/r161.jpg",
   "name": "히로키야 시부야",
   "jp": "焼肉ヒロキヤ 渋谷",
   "google_name": "Hirokiya Shibuya",
   "genre": "야키니쿠",
   "genre_full": "야키니쿠 · 타레·유케 스타일",
   "area": "우다가와초 (시부야 돈키호테 도보 2분)",
   "bigArea": "시부야",
   "tags": [
    "야키니쿠"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 4,000~6,000엔 (코스·단품 기준 · 현장 확인)",
   "tabelog": null,
   "google": 4.8,
   "reviews": "1,624",
   "hours": {
    "d21": "12:00~15:00 · 17:00~23:00",
    "d22": "12:00~15:00 · 17:00~23:00",
    "d23": "12:00~15:00 · 17:00~23:00",
    "d24": "12:00~15:00 · 17:00~23:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6416-1529",
   "walk": "시부야 돈키호테 도보 2분(160m) · SUN HOUSE 진난 도보 5분(345m) · 우다가와초 34-6 1F",
   "note": "호진님이 보내신 인스타 릴스에서 본 시부야 야키니쿠. 구글 4.8(1,624)로 시부야 야키니쿠 중 평점·리뷰가 가장 앞쪽입니다. 우다가와초 34-6 1F, 시부야 돈키호테에서 도보 2분이라 1일차 밤 쇼핑 동선과도 겹칩니다.",
   "tip": "매일 12:00~15:00 · 17:00~23:00(라스트 오더는 현장 확인). 2일차 시부야 쇼핑(19:35~20:30) 뒤 저녁 대안이지만 23:00 마감이라 21:30 이전 입장이 안전합니다. 인기점이라 3인은 전화(+81 3-6416-1529) 예약을 권합니다.",
   "awards": "",
   "addr": "〒150-0042 東京都渋谷区宇田川町34-6 1F",
   "lat": 35.6611939,
   "lng": 139.6963244,
   "cid": "2426515933921688481",
   "map": "https://maps.google.com/?cid=2426515933921688481",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "https://hirokiya-group.com/ja"
   }
  },
  {
   "id": "r162",
   "image": "./images/restaurants/r162.jpg",
   "name": "야키토리 고룐산 시부야",
   "jp": "五稜山 渋谷",
   "google_name": "Goryonsan - Shibuya",
   "genre": "야키토리",
   "genre_full": "야키토리 · 하카타식 꼬치 코스",
   "area": "미야마스자카 (시부야역 동쪽 출구 도보 4분)",
   "bigArea": "시부야",
   "tags": [
    "이자카야·사케"
   ],
   "slots": [
    "d2-dinner"
   ],
   "budget": "약 3,000~5,000엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "457",
   "hours": {
    "d21": "17:00~23:30",
    "d22": "17:00~23:30",
    "d23": "17:00~23:30",
    "d24": "17:00~23:30"
   },
   "hours23Guide": "",
   "phone": "+81 3-6712-6700",
   "walk": "Maison Kitsuné 미야시타파크 도보 5분(400m) · 2nd STREET 시부야 진난점 도보 6분(425m) · 시부야 1-6-3 Villa First Shibuya B1",
   "note": "하카타식 꼬치를 코스로 내는 야키토리야. 구글 4.1(457). 시부야 1-6-3 빌라퍼스트 시부야 B1로 미야마스자카 입구, 2일차 마지막 쇼핑 구간에서 도보 5분입니다.",
   "tip": "매일 17:00~23:30. B1의 작은 매장이라 3인은 전화(+81 3-6712-6700) 예약이 안전합니다. 2일차 저녁이 미정이라, 시부야에서 바로 먹는 쪽(20:00)의 후보입니다.",
   "awards": "",
   "addr": "〒150-0002 東京都渋谷区渋谷1-6-3 Villa First Shibuya B1",
   "lat": 35.660864,
   "lng": 139.705712,
   "cid": "15558630173052469915",
   "map": "https://maps.google.com/?cid=15558630173052469915",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "Google Maps 장소 정보"
   }
  },
  {
   "id": "r163",
   "image": "./images/restaurants/r163.jpg",
   "name": "스위트체크",
   "jp": "Sweet Check（南青山）",
   "google_name": "Sweet Check",
   "genre": "양식",
   "genre_full": "양식 · 함바그 오므라이스·디저트",
   "area": "미나미아오야마 (오모테산도역 도보 5분)",
   "bigArea": "시부야",
   "tags": [
    "카페·디저트",
    "기타"
   ],
   "slots": [
    "d2-cafe"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.5,
   "reviews": "1,788",
   "hours": {
    "d21": "11:00~20:00",
    "d22": "11:00~20:00",
    "d23": "11:00~20:00",
    "d24": "11:00~20:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6447-4575",
   "walk": "랄프 로렌 오모테산도 도보 9분(680m) · 미나미아오야마 3-18-5 사쿠라아파트먼트 1F",
   "note": "인스타 릴스에서 본 함바그 오므라이스집. 구글 4.5(1,788)로 대기 줄이 있는 편입니다. 미나미아오야마 3-18-5, 오모테산도역에서 도보 5분이지만 2일차 하라주쿠 쇼핑 구간(랄프 로렌)에서는 도보 9분이라 동선에 붙이지 않았습니다.",
   "tip": "매일 11:00~20:00. 2일차 15:50 카페 자리를 여기로 바꾸면 랄프 로렌에서 9분 걸어가야 하고, 20:00 시부야 저녁과 겹치므로 '이른 저녁'으로 쓸 때만 권합니다.",
   "awards": "",
   "addr": "〒107-0062 東京都港区南青山3-18-5 さくらアパートメント1F",
   "lat": 35.6648961,
   "lng": 139.7136236,
   "cid": "8778631504358297266",
   "map": "https://maps.google.com/?cid=8778631504358297266",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "https://sweetcheck-cafe.com/"
   }
  },
  {
   "id": "r164",
   "image": "./images/restaurants/r164.jpg",
   "name": "니혼바시 돈카츠 하지메",
   "jp": "日本橋とんかつ 一 日本橋本店",
   "google_name": "Tonkatsu Hajime Nihonbashi",
   "genre": "돈카츠",
   "genre_full": "돈카츠 · 카츠동·로스카츠",
   "area": "니혼바시 무로마치 (미쓰코시마에역 도보 3분)",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,500~2,500엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "1,286",
   "hours": {
    "d21": "10:00~21:00",
    "d22": "10:00~21:00",
    "d23": "10:00~21:00",
    "d24": "11:00~21:00"
   },
   "hours23Guide": "",
   "phone": "+81 3-6262-5883",
   "walk": "NORTH FACE 마루노우치 도보 14분(1.1km) · 미쓰코시마에역 도보 3분 · 니혼바시 무로마치 1-13-9 이케다빌딩 1F",
   "note": "인스타 릴스에서 본 니혼바시 돈카츠집. 구글 4.2(1,286). 두툼한 로스카츠와 카츠동이 주력이고 10:00에 열어 3일차 오전 동선보다 이릅니다. 다만 3일차 방문지(마루노우치·교바시)에서는 도보 14분(1.1km)이라 '근처 맛집'으로 붙이지 않았습니다.",
   "tip": "11/23(월·공휴일)은 10:00~21:00, 11/24(화)는 11:00~21:00. 마루노우치에서 걸어갈 계획이면 3일차 점심(13:00~13:50)보다 여유 있는 오전 11:00 이전이나, 다이코쿠야 긴자에서 니혼바시 쪽으로 15분 더 걷는 일정이어야 합니다.",
   "awards": "",
   "addr": "〒103-0022 東京都中央区日本橋室町1-13-9 池田ビル1F",
   "lat": 35.6864255,
   "lng": 139.7754729,
   "cid": "6574211571385242520",
   "map": "https://maps.google.com/?cid=6574211571385242520",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "https://tonkatsu-hajime.com/"
   }
  },
  {
   "id": "r165",
   "image": "./images/restaurants/r165.jpg",
   "name": "우동 타니야 본점",
   "jp": "手打ちうどん 谷や",
   "google_name": "Taniya Sanuki Udon",
   "genre": "사누키 우동",
   "genre_full": "수타 사누키우동 · 가케·부카케",
   "area": "닌교초 (닌교초역·스이텐구마에역 도보 4분)",
   "bigArea": "긴자·마루노우치",
   "tags": [
    "라멘·면류"
   ],
   "slots": [
    "d3-lunch"
   ],
   "budget": "약 1,000~1,600엔",
   "tabelog": null,
   "google": 4.1,
   "reviews": "1,952",
   "hours": {
    "d21": "11:00~21:15",
    "d22": "11:00~21:15",
    "d23": "11:00~21:15",
    "d24": "11:00~21:15"
   },
   "hours23Guide": "",
   "phone": "+81 3-5695-3060",
   "walk": "mont-bell 교바시 도보 23분(1.8km) · 닌교초역 도보 4분 · 니혼바시닌교초 2-15-17",
   "note": "인스타 릴스에서 본 수타 사누키 우동집. 구글 4.1(1,952). 니혼바시닌교초 2-15-17로 3일차 교바시·마루노우치 동선에서는 도보 23분(1.8km) 거리라 동선 밖으로 두었습니다.",
   "tip": "매일 11:00~21:15. 닌교초·스이텐구마에 쪽으로 따로 움직일 때 넣는 편이 맞고, 3일차처럼 마루노우치→긴자로 흐르는 날에는 무리입니다.",
   "awards": "",
   "addr": "〒103-0013 東京都中央区日本橋人形町2-15-17",
   "lat": 35.6846278,
   "lng": 139.7857071,
   "cid": "15762964467419992505",
   "map": "https://maps.google.com/?cid=15762964467419992505",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "https://udontaniya.wixsite.com/website"
   }
  },
  {
   "id": "r166",
   "image": "./images/restaurants/r166.jpg",
   "name": "산세츠 (돈카츠·생강구이)",
   "jp": "とんかつ 三節",
   "google_name": "Sansetsu",
   "genre": "돈카츠·정식",
   "genre_full": "돈카츠·카츠동 · 극厚 생강구이 정식",
   "area": "미나미오츠카 (오츠카역 남구 도보 4분)",
   "bigArea": "기타",
   "tags": [
    "정식·돈카츠·카레"
   ],
   "slots": [],
   "budget": "약 1,500~3,400엔 (생강구이 정식 3,400엔)",
   "tabelog": "3.48",
   "google": 4.4,
   "reviews": "365",
   "hours": {
    "d21": "11:30~14:00 · 17:00~20:00",
    "d22": "휴무 (일요일 정기휴무)",
    "d23": "공휴일 휴무 가능 (전화 확인)",
    "d24": "11:30~14:00 (점심만)"
   },
   "hours23Guide": "",
   "phone": "+81 3-3945-9967",
   "walk": "동선 밖 · 오츠카역 남구 도보 4분 · 미나미오츠카 1-60-16",
   "note": "인스타 릴스에서 본 오츠카의 노포 돈카츠집. 두께 3cm급 생강구이 정식(3,400엔)이 대표 메뉴로, 캐벗 위에 세워 담아 나오고 먹기 직전 간장 소스를 부어 줍니다. 구글 4.4(365)·타베로그 3.48. 11/21~24 일정과는 거리가 있어 '그 밖의 후보'로만 담았습니다.",
   "tip": "일요일과 공휴일은 쉬고 화요일은 점심만 합니다(타베로그·구르나비 기준). 이번 여행 날짜(11/21 토·11/22 일·11/23 월 공휴일·11/24 화)에는 토요일 저녁 자리만 가능성이 있어, 가려면 11/21 저녁뿐입니다. 현금 위주 매장입니다.",
   "awards": "",
   "addr": "〒170-0005 東京都豊島区南大塚1-60-16",
   "lat": 35.7307897,
   "lng": 139.7308949,
   "cid": "5400446932192259802",
   "map": "https://maps.google.com/?cid=5400446932192259802",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "타베로그·구르나비 대조",
    "checked": "2026-11-22",
    "source": "https://tabelog.com/tokyo/A1323/A132302/13008857/"
   }
  },
  {
   "id": "r167",
   "image": "./images/restaurants/r167.jpg",
   "name": "오니기리 야도로쿠",
   "jp": "おにぎり浅草宿六",
   "google_name": "Yadoroku Onigiri Asakusa",
   "genre": "오니기리",
   "genre_full": "오니기리 전문점 · 미슐랭 가이드 소개",
   "area": "아사쿠사 (아사쿠사역 도보 7분)",
   "bigArea": "기타",
   "tags": [
    "기타"
   ],
   "slots": [],
   "budget": "약 1,000~2,000엔",
   "tabelog": null,
   "google": 4.2,
   "reviews": "1,051",
   "hours": {
    "d21": "11:30~14:00 · 17:00~20:00",
    "d22": "휴무 (일요일 정기휴무)",
    "d23": "11:30~14:00 · 17:00~20:00",
    "d24": "11:30~14:00 (점심만)"
   },
   "hours23Guide": "",
   "phone": "+81 3-3874-1615",
   "walk": "동선 밖 · 아사쿠사역 도보 7분 · 아사쿠사 3-9-10 캐피털플라자아사쿠사 1F",
   "note": "미슐랭 가이드에 소개된 오니기리 전문점. 구글 4.2(1,051). 밥에 김을 두르는 기본 오니기리부터 연어·명란·우메 등 여러 종류를 그 자리에서 쥐어 줍니다. 아사쿠사 3-9-10 1F로 이번 일정(신주쿠·시부야·긴자)과는 권역이 달라 '그 밖의 후보'입니다.",
   "tip": "일요일 휴무, 화요일은 점심만. 11/23(월·공휴일)은 11:30~14:00·17:00~20:00로 조회됐지만 공휴일 영업은 전화 확인이 필요합니다. 대기 줄이 있는 작은 매장이라 3인은 오픈 직후가 안전합니다.",
   "awards": "",
   "addr": "〒111-0032 東京都台東区浅草3-9-10 キャピタルプラザ浅草1F",
   "lat": 35.716885,
   "lng": 139.794751,
   "cid": "5504304548445465832",
   "map": "https://maps.google.com/?cid=5504304548445465832",
   "src": "C",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-22 조회)",
    "checked": "2026-11-22",
    "source": "Google Maps 영업시간(next_7_days)"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "구글맵 확인",
    "checked": "2026-11-22",
    "source": "http://onigiriyadoroku.com/"
   }
  },
  {
   "id": "r168",
   "image": "./images/restaurants/r168.jpg",
   "name": "海栗屋 新宿店 (우니야 신주쿠점)",
   "jp": "海栗屋 新宿店",
   "google_name": "雲丹専門店 海栗屋（うにや）新宿店 Sea urchin specialty store",
   "genre": "해산물",
   "genre_full": "우니 전문 · 해산물·샤브샤브",
   "area": "신주쿠 5초메",
   "bigArea": "신주쿠",
   "tags": [
    "생일저녁",
    "고급해산물"
   ],
   "slots": [
    "d3-birthday"
   ],
   "budget": "8,000~9,999엔 (후기 집계 10,000~14,999엔)",
   "tabelog": "3.31",
   "google": 3.6,
   "reviews": "235",
   "hours": {
    "d21": "17:00~23:00 (L.O. 22:00)",
    "d22": "17:00~23:00 (L.O. 22:00)",
    "d23": "17:00~23:00 (L.O. 22:00)",
    "d24": "17:00~23:00 (L.O. 22:00)"
   },
   "hours23Guide": "17:00~23:00 L.O. 22:00 · 11/23 영업(구글맵 다음 7일) · 부정휴",
   "phone": "+81 3-5379-5507",
   "walk": "신주쿠산초메역 도보 4분(332m) · 신주쿠역 東南口 도보 10~12분 · L-Breath에서 12분",
   "note": "우니 전문점. 명물 원조 雲丹しゃぶ(우니 샤브샤브), 우니 크로켓, 게·굴·이세에비 등 제철 해산물. 20석 규모에 전석 금연, 예산 8,000~9,999엔(후기 집계 10,000~14,999엔). 20:00 예약으로 2026-11-23 생일 저녁에 들어갔습니다.",
   "tip": "예약 시간부터 15분 넘게 연락 없이 늦으면 매장에서 예약을 취소할 수 있고, 당일 취소는 코스 대금 100%(좌석만이면 1인 8,000엔)입니다. 붐비면 2시간 제한. 카드 가능·전자화폐/QR 불가. 타베로그 https://tabelog.com/tokyo/A1304/A130401/13170928/",
   "awards": "",
   "addr": "〒160-0022 東京都新宿区新宿5-10-4 1F",
   "lat": 35.6921273,
   "lng": 139.708209,
   "cid": "5870550396404838475",
   "map": "https://maps.google.com/?cid=5870550396404838475",
   "src": "D",
   "hoursVerification": {
    "status": "confirmed",
    "label": "구글맵 다음 7일 영업시간(2026-11-23 조회) · 타베로그 定休日 不定休",
    "checked": "2026-11-23",
    "source": "Google Maps 영업시간(next_7_days) · tabelog.com"
   },
   "phoneVerification": {
    "status": "confirmed",
    "label": "타베로그·구글맵 확인",
    "checked": "2026-11-23",
    "source": "tabelog.com/tokyo/A1304/A130401/13170928 · Google Maps"
   }
  }
 ]
};
