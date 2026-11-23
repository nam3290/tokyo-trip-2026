/* 다낭 추천 장소 카드 — 해산물 · 술자리 · 마사지 · 패키지 식당 · 카페
 * 평점·리뷰 수·영업시간·좌표: Google Maps 장소 조회값 (2026-11-23 확인)
 * 영업시간은 방문일 기준으로 다시 확인해야 합니다.
 */
window.PLACES = {
  meta: {
    count: 38,
    checked: "2026-11-23",
    note: "평점·리뷰 수·영업시간은 2026-11-23 구글맵 조회값입니다. 임시 휴무·조기 마감이 있을 수 있으니 방문 전에 구글맵에서 한 번 더 확인하세요. 가격은 매장 가격표 기준이며 환율·시즌에 따라 달라집니다."
  },
  groups: [
    { id: "seafood", label: "미케비치 해산물", icon: "🦐", lead: "패키지 일정 뒤 2차나 야식으로 좋은 곳. 새벽까지 하는 집을 1순위에 두었습니다." },
    { id: "bar", label: "미케비치 술자리", icon: "🍺", lead: "바다 쪽 루프탑·비치펍. 3일차 밤 일정 마무리용." },
    { id: "spa", label: "다낭 마사지", icon: "💆", lead: "늦은 밤까지 하는 곳 위주. 60분 기준, 팁 별도." },
    { id: "package", label: "패키지 식당", icon: "🍽️", lead: "패키지에 포함된 식사 장소. 위치와 영업시간만 정리했습니다." },
    { id: "spot", label: "명소·쇼핑", icon: "📍", lead: "일정에 들어 있는 장소의 위치·영업시간·입장 정보." },
    { id: "cafe", label: "카페·디저트", icon: "☕", lead: "자유시간에 들르기 좋은 곳." }
  ],
  items: [
    /* ── 해산물 ── */
    {
      id: "be-ni-2", group: "seafood", name: "Bé Ni 2", local: "Bé Ni 2",
      rating: 4.8, reviews: 14973, area: "미케비치 해변 (Võ Nguyên Giáp)",
      address: "228 Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "10:00–05:00 (매일)", openLate: true,
      lat: 16.0668016, lng: 108.2449953, img: "./images/be-ni-2.jpg",
      tip: "새벽 5시까지 해서 야식 마무리로 가장 안전한 선택. 해변 도로변 대형 매장이라 자리도 많습니다.",
      tags: ["새벽까지", "1순위"], map: "https://www.google.com/maps/search/?api=1&query=B%C3%A9+Ni+2+Da+Nang"
    },
    {
      id: "be-bien", group: "seafood", name: "Bé Biển", local: "Hải Sản Đà Nẵng Bé Biển",
      rating: 4.8, reviews: 5592, area: "미케비치 해변 (Võ Nguyên Giáp)",
      address: "202 Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "07:30–02:00 (매일)", openLate: true,
      lat: 16.0685271, lng: 108.2449805, img: "./images/be-bien.jpg",
      tip: "가격표가 비교적 투명하다는 평이 많습니다. 2차로 30분~1시간이면 충분한 규모.",
      tags: ["새벽 2시", "가격 투명"], map: "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i+S%E1%BA%A3n+B%C3%A9+Bi%E1%BB%83n+Da+Nang"
    },
    {
      id: "moc-quan", group: "seafood", name: "Mộc Quán", local: "Mộc quán Seafood",
      rating: 4.8, reviews: 33062, area: "미케비치 안쪽 (Tô Hiến Thành)",
      address: "26 Tô Hiến Thành, An Hải, Đà Nẵng",
      hours: "10:30–22:30 (매일)", openLate: false,
      lat: 16.0640292, lng: 108.2415578, img: "./images/moc-quan.jpg",
      tip: "리뷰 3만 건이 넘는 인기집이라 저녁엔 대기가 있습니다. 일찍(17~18시) 가면 편합니다.",
      tags: ["인기", "대기 있음"], map: "https://www.google.com/maps/search/?api=1&query=M%E1%BB%99c+qu%C3%A1n+Seafood+Da+Nang"
    },
    {
      id: "them-hai-san", group: "seafood", name: "Thèm Hải Sản", local: "Thèm Hải Sản",
      rating: 4.8, reviews: 10558, area: "미케비치 남쪽 (Trần Bạch Đằng)",
      address: "39 Trần Bạch Đằng, An Hải, Đà Nẵng",
      hours: "11:00–24:00 (매일)", openLate: true,
      lat: 16.0570832, lng: 108.245463, img: "./images/them-hai-san.jpg",
      tip: "실내 좌석이 넓어 단체·비 오는 날에 편합니다. 자정까지 영업.",
      tags: ["실내", "자정까지"], map: "https://www.google.com/maps/search/?api=1&query=Th%C3%A8m+H%E1%BA%A3i+S%E1%BA%A3n+Da+Nang"
    },
    {
      id: "ong-minh", group: "seafood", name: "Ông Minh", local: "Quán Hải Sản Ông Minh",
      rating: 4.5, reviews: 2083, area: "미케비치 북쪽 (Võ Nguyên Giáp)",
      address: "94 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
      hours: "10:00–02:00 (매일)", openLate: true,
      lat: 16.0802935, lng: 108.2466356, img: "./images/ong-minh.jpg",
      tip: "숙소(윈덤 골든베이)에서 가까운 편. 늦은 시간에도 열려 있어 심야 2차로 무난합니다.",
      tags: ["숙소 근처", "새벽 2시"], map: "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n+H%E1%BA%A3i+S%E1%BA%A3n+%C3%94NG+MINH+Da+Nang"
    },
    {
      id: "my-hanh", group: "seafood", name: "Mỹ Hạnh", local: "My Hanh Seafood",
      rating: 4.4, reviews: 4067, area: "미케비치 해변 (Võ Nguyên Giáp)",
      address: "03-05 Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "09:00–23:00 (매일)", openLate: false,
      lat: 16.0654025, lng: 108.2461698, img: "./images/my-hanh.jpg",
      tip: "해변 바로 앞 테이블. 낮 술자리나 이른 저녁에 분위기가 좋습니다.",
      tags: ["해변 앞", "이른 저녁"], map: "https://www.google.com/maps/search/?api=1&query=My+Hanh+Seafood+Da+Nang"
    },

    /* ── 술자리 ── */
    {
      id: "the-roof", group: "bar", name: "The Roof", local: "The Roof - Da Nang",
      rating: 4.8, reviews: 2064, area: "미케비치 (Võ Nguyên Giáp 1a)",
      address: "1a Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "14:00–01:00 (매일)", openLate: true,
      lat: 16.06753, lng: 108.2460466, img: "./images/the-roof.jpg",
      tip: "루프탑에서 바다와 해변 도로가 내려다보입니다. 해 질 무렵(17시 30분~18시) 자리를 잡으면 좋습니다.",
      tags: ["루프탑", "바다뷰", "1순위"], map: "https://www.google.com/maps/search/?api=1&query=The+Roof+Da+Nang"
    },
    {
      id: "lounge-beach", group: "bar", name: "Lounge Beach Bar", local: "Lounge Beach Bar - Restaurant",
      rating: 4.8, reviews: 3994, area: "미케비치 (Võ Nguyên Giáp 1c)",
      address: "1c Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "07:30–01:00 (매일)", openLate: true,
      lat: 16.067333, lng: 108.2461194, img: "./images/lounge-beach.jpg",
      tip: "소파 좌석이 많은 비치 라운지. 대화하기 좋은 볼륨입니다.",
      tags: ["비치 라운지", "조용한 편"], map: "https://www.google.com/maps/search/?api=1&query=Lounge+Beach+Bar+Da+Nang"
    },
    {
      id: "esco-beach", group: "bar", name: "Esco Beach", local: "Esco Beach, Bar Lounge & Restaurant",
      rating: 4.6, reviews: 7672, area: "미케비치 (Võ Nguyên Giáp Lô 12)",
      address: "Lô 12 Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "08:00–24:00 (매일)", openLate: false,
      lat: 16.0659264, lng: 108.2460097, img: "./images/esco-beach.jpg",
      tip: "규모가 커서 단체로 가도 자리가 나옵니다. 논알콜 칵테일·주스도 다양합니다.",
      tags: ["단체", "자정까지"], map: "https://www.google.com/maps/search/?api=1&query=Esco+Beach+Da+Nang"
    },
    {
      id: "malibu", group: "bar", name: "Malibu Beach Club", local: "Malibu Beach Club",
      rating: 4.8, reviews: 2436, area: "미케비치 북쪽 (Võ Nguyên Giáp 3)",
      address: "3 Võ Nguyên Giáp, An Hải, Đà Nẵng",
      hours: "07:00–02:00 (매일)", openLate: true,
      lat: 16.0738647, lng: 108.2461281, img: "./images/malibu.jpg",
      tip: "음악 볼륨이 큰 클럽형. 새벽 2시까지여서 늦게까지 놀 때 선택지가 됩니다.",
      tags: ["새벽 2시", "음악 큰 편"], map: "https://www.google.com/maps/search/?api=1&query=Malibu+Beach+Club+Da+Nang"
    },
    {
      id: "maia", group: "bar", name: "Maia Beach Bar", local: "Maia Beach Bar",
      rating: 4.7, reviews: 5537, area: "미케비치 남쪽 (Võ Nguyên Giáp 284)",
      address: "284 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng",
      hours: "07:00–01:00 (매일)", openLate: true,
      lat: 16.0516973, lng: 108.2486229, img: "./images/maia.jpg",
      tip: "모래 위 선베드에서 마시는 분위기. 마블 마운틴 쪽 동선과 묶기 좋습니다.",
      tags: ["선베드", "해변"], map: "https://www.google.com/maps/search/?api=1&query=Maia+Beach+Bar+Da+Nang"
    },

    /* ── 마사지 ── */
    {
      id: "heart-spa", group: "spa", name: "Heart Spa", local: "Heart Spa",
      rating: 5.0, reviews: 12378, area: "미케비치 (Lâm Hoành)",
      address: "46 Lâm Hoành, Sơn Trà, Đà Nẵng",
      hours: "08:00–02:00 (매일)", openLate: true,
      lat: 16.0612265, lng: 108.2453635, img: "./images/heart-spa.jpg",
      tip: "평점 5.0에 리뷰 1.2만. 새벽 2시까지라 술자리 뒤에 들르기 좋습니다. 늦은 시간엔 60분 코스로 미리 전화 예약하세요.",
      tags: ["새벽 2시", "1순위"], map: "https://www.google.com/maps/search/?api=1&query=Heart+Spa+Da+Nang"
    },
    {
      id: "lotus-massage", group: "spa", name: "Lotus Massage", local: "Lotus Massage",
      rating: 4.9, reviews: 8875, area: "미케비치 북쪽 (Đình Nghệ)",
      address: "77 Đình Nghệ, An Hải, Đà Nẵng",
      hours: "09:00–22:30 (매일)", openLate: false,
      lat: 16.0686421, lng: 108.241679, img: "./images/lotus-massage.jpg",
      tip: "리뷰 8,800의 대형 스파. 오전 자유시간(2일차)이나 마사지 포함 일정 대체로 무난합니다.",
      tags: ["대형", "오전 가능"], map: "https://www.google.com/maps/search/?api=1&query=Lotus+Massage+Da+Nang"
    },
    {
      id: "babylon-spa", group: "spa", name: "Babylon Spa", local: "Babylon Spa Massage",
      rating: 4.8, reviews: 4894, area: "미케비치 (Hà Bổng)",
      address: "30 Hà Bổng, An Hải, Đà Nẵng",
      hours: "09:00–23:00 (매일)", openLate: false,
      lat: 16.0672167, lng: 108.2441068, img: "./images/babylon-spa.jpg",
      tip: "미케비치 골목 안쪽. 전신·발마사지 모두 되고 23시까지입니다.",
      tags: ["전신·발", "23시까지"], map: "https://www.google.com/maps/search/?api=1&query=Babylon+Spa+Da+Nang"
    },
    {
      id: "chill-out-spa", group: "spa", name: "Chill Out Spa", local: "Chill Out Spa",
      rating: 4.9, reviews: 2232, area: "미케비치 남쪽 (Đỗ Bá)",
      address: "60 Đỗ Bá, Ngũ Hành Sơn, Đà Nẵng",
      hours: "08:30–23:30 (매일)", openLate: true,
      lat: 16.0515934, lng: 108.2451999, img: "./images/chill-out-spa.jpg",
      tip: "조용한 분위기 위주. 마블 마운틴·미케비치 남쪽 동선과 묶기 좋습니다.",
      tags: ["조용함", "23:30까지"], map: "https://www.google.com/maps/search/?api=1&query=Chill+Out+Spa+Da+Nang"
    },
    {
      id: "lotus-spa-mykhe", group: "spa", name: "LOTUS SPA My Khe", local: "LOTUS SPA - Premium Massage My Khe Beach",
      rating: 5.0, reviews: 394, area: "미케비치 남쪽 (Đỗ Bá)",
      address: "170 Đỗ Bá, Ngũ Hành Sơn, Đà Nẵng",
      hours: "09:00–02:00 (매일)", openLate: true,
      lat: 16.0504049, lng: 108.2409143, img: "./images/lotus-spa-mykhe.jpg",
      tip: "리뷰는 적지만 평점 5.0. 시설이 깔끔하고 새벽 2시까지여서 늦은 시간 대안으로 좋습니다.",
      tags: ["새벽 2시", "깔끔"], map: "https://www.google.com/maps/search/?api=1&query=LOTUS+SPA+My+Khe+Da+Nang"
    },
    {
      id: "panda-spa", group: "spa", name: "Panda Spa", local: "Panda Spa Body & Foot Massage",
      rating: 4.9, reviews: 3164, area: "미케비치 (Nguyễn Văn Thoại)",
      address: "229 Nguyễn Văn Thoại, An Hải, Đà Nẵng",
      hours: "09:00–23:45 (매일)", openLate: false,
      lat: 16.0561522, lng: 108.2453775, img: "./images/panda-spa.jpg",
      tip: "발마사지 위주로도 받을 수 있습니다. 23:45 마감이라 늦게 가면 마지막 손님이 됩니다.",
      tags: ["발마사지", "23:45까지"], map: "https://www.google.com/maps/search/?api=1&query=Panda+Spa+Da+Nang"
    },

    /* ── 패키지 식당 ── */
    {
      id: "lian", group: "package", name: "리안 Lian", local: "리안 · 등갈비 김치찜",
      rating: 4.6, reviews: 56, area: "미케비치 (Võ Văn Kiệt)",
      address: "81 Võ Văn Kiệt, An Hải, Đà Nẵng",
      hours: "10:00–14:00, 16:00–20:00", openLate: false,
      lat: 16.0627919, lng: 108.2424925, img: "./images/lian.jpg",
      tip: "2일차 중식. 등갈비 김치찜 정식. 리뷰 수가 적은 신생 한식당이라 붐비지 않습니다.",
      tags: ["2일차 중식", "한식"], map: "https://www.google.com/maps/search/?api=1&query=%EB%A6%AC%EC%95%88+Lian+Da+Nang"
    },
    {
      id: "morning-glory", group: "package", name: "모닝글로리 시그니처", local: "Morning Glory Signature",
      rating: 4.5, reviews: 2101, area: "호이안 (Nguyễn Phúc Chu)",
      address: "41 Nguyễn Phúc Chu, An Hội, Hội An",
      hours: "10:30–22:30 (매일)", openLate: false,
      lat: 15.8759067, lng: 108.326206, img: "./images/morning-glory.jpg",
      tip: "2일차 석식. 호이안 향토 음식 세트. 2층 창가 자리면 야시장 등불이 보입니다.",
      tags: ["2일차 석식", "호이안"], map: "https://www.google.com/maps/search/?api=1&query=Morning+Glory+Signature+Hoi+An"
    },
    {
      id: "four-seasons", group: "package", name: "포시즌스 뷔페", local: "Four Seasons Buffet (Ba Na Hills)",
      rating: 3.2, reviews: 1030, area: "바나힐 (해발 1,400m)",
      address: "Ba Na, Da Nang",
      hours: "10:30–15:00", openLate: false,
      lat: 15.9956751, lng: 107.9903101, img: "./images/four-seasons.jpg",
      tip: "3일차 중식. 단체 시간대와 겹치면 줄이 깁니다. 평점은 3.2로 높지 않은 편 — 기대는 뷔페 수준으로.",
      tags: ["3일차 중식", "바나힐"], map: "https://www.google.com/maps/search/?api=1&query=Four+Seasons+Buffet+Ba+Na+Hills"
    },
    {
      id: "seafood-king", group: "package", name: "씨푸드킹", local: "Seafood King",
      rating: 3.7, reviews: 725, area: "미케비치 북쪽 (Võ Nguyên Giáp 28)",
      address: "28 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
      hours: "11:00–14:00, 17:00–21:00", openLate: false,
      lat: 16.0865507, lng: 108.2484208, img: "./images/seafood-king.jpg",
      tip: "3일차 석식. 셋메뉴로 나옵니다. 21시에 닫으니 늦게 가지 마세요.",
      tags: ["3일차 석식", "셋메뉴"], map: "https://www.google.com/maps/search/?api=1&query=Seafood+King+Da+Nang"
    },
    {
      id: "madame-lan", group: "package", name: "마담란", local: "Nhà hàng Madame Lân",
      rating: 4.3, reviews: 14926, area: "다낭 시내 한강변 (Bạch Đằng)",
      address: "04 Bạch Đằng, Hải Châu, Đà Nẵng",
      hours: "06:30–21:30 (매일)", openLate: false,
      lat: 16.0814063, lng: 108.2232528, img: "./images/madame-lan.jpg",
      tip: "4일차 중식. 미슐랭 가이드 소개 다낭 가정식. 단체석이 많습니다.",
      tags: ["4일차 중식", "가정식"], map: "https://www.google.com/maps/search/?api=1&query=Madame+Lan+Da+Nang"
    },
    {
      id: "danang-tower", group: "package", name: "다낭 타워 스테이크", local: "Danang Tower",
      rating: 4.5, reviews: 1099, area: "다낭 시내 (Trần Hưng Đạo)",
      address: "341 Trần Hưng Đạo, An Hải, Đà Nẵng",
      hours: "11:00–02:00 (매일)", openLate: true,
      lat: 16.0708286, lng: 108.2291598, img: "./images/danang-tower.jpg",
      tip: "4일차 석식. 공항까지 차 15분이라 출국 전 마지막 식사로 동선이 좋습니다.",
      tags: ["4일차 석식", "공항 근처"], map: "https://www.google.com/maps/search/?api=1&query=Danang+Tower+Da+Nang"
    },

    /* ── 명소·쇼핑 ── */
    {
      id: "hotel-wyndham", group: "spot", name: "윈덤 다낭 골든 베이", local: "Wyndham Danang Golden Bay",
      rating: 4.7, reviews: 11575, area: "손짜 (Lê Văn Duyệt)",
      address: "01 Lê Văn Duyệt, Sơn Trà, Đà Nẵng",
      hours: "프런트 24시간", openLate: true,
      lat: 16.097833, lng: 108.2244123, img: "./images/hotel-wyndham.jpg",
      tip: "3박 숙소. 루프탑 인피니티풀과 한강 하구 뷰. 미케비치까지 차 10분.",
      tags: ["숙소", "3박"], map: "https://dananggoldenbay.com/"
    },
    {
      id: "han-market", group: "spot", name: "한시장", local: "Chợ Hàn · Han Market",
      rating: 3.9, reviews: 46586, area: "다낭 시내 (Trần Phú)",
      address: "119 Trần Phú, Hải Châu, Đà Nẵng",
      hours: "06:00–19:00 (매일)", openLate: false,
      lat: 16.0682985, lng: 108.224239, img: "./images/han-market.jpg",
      tip: "커피·캐슈넛·건어물·기념품. 2층은 의류·천. 흥정은 부른 값의 7할부터.",
      tags: ["기념품", "시장"], map: "https://www.google.com/maps/search/?api=1&query=Han+Market+Da+Nang"
    },
    {
      id: "lotte-mart", group: "spot", name: "롯데마트 다낭점", local: "Lotte Mart Supermarket",
      rating: 4.2, reviews: 15687, area: "다낭 (Nại Nam)",
      address: "6 Nại Nam, Hòa Cường, Đà Nẵng",
      hours: "07:30–22:00 (매일)", openLate: false,
      lat: 16.0348373, lng: 108.2292584, img: "./images/lotte-mart.jpg",
      tip: "기념품·커피·과자 한 번에. 비닐봉투 유료, 액체류는 위탁 수하물로.",
      tags: ["쇼핑", "기념품"], map: "https://www.google.com/maps/search/?api=1&query=Lotte+Mart+Supermarket+Da+Nang"
    },
    {
      id: "my-khe", group: "spot", name: "미케비치", local: "My Khe Beach · Bãi biển Mỹ Khê",
      rating: 4.7, reviews: 4790, area: "미케비치",
      address: "My Khe Beach, Da Nang",
      hours: "상시 (해수욕은 깃발 구역만)", openLate: true,
      lat: 16.0616944, lng: 108.2469346, img: "./images/my-khe.jpg",
      tip: "모래가 고운 해변. 이른 아침·해질 무렵 산책이 좋고, 파도가 높은 날은 수영 금지.",
      tags: ["해변", "산책"], map: "https://www.google.com/maps/search/?api=1&query=My+Khe+Beach+Da+Nang"
    },
    {
      id: "basket-boat", group: "spot", name: "깜타인 바구니배", local: "Coconut Boat Hoi An",
      rating: 4.8, reviews: 6033, area: "호이안 깜타인",
      address: "Cam Thanh village, Hội An Đông, Đà Nẵng",
      hours: "07:30–18:30", openLate: false,
      lat: 15.8872821, lng: 108.3570722, img: "./images/basket-boat.jpg",
      tip: "야자수 물길 20~30분 코스. 배 위 묘기 팁 소액 준비, 모자·선크림 필수.",
      tags: ["체험", "호이안"], map: "https://www.google.com/maps/search/?api=1&query=Coconut+Boat+Hoi+An"
    },
    {
      id: "hoian-night", group: "spot", name: "호이안 야시장", local: "Hoi An Night Market",
      rating: 4.4, reviews: 50366, area: "호이안 안호이",
      address: "3 Nguyễn Hoàng, An Hội, Hội An",
      hours: "09:00–22:00 (등불은 해 진 뒤)", openLate: false,
      lat: 15.875503, lng: 108.3262087, img: "./images/hoian-night.jpg",
      tip: "소원등·소원배·야시장. 18시 30분~19시 30분이 사진 찍기 가장 좋습니다.",
      tags: ["야경", "호이안"], map: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Night+Market"
    },
    {
      id: "son-tra-night", group: "spot", name: "손짜 야시장", local: "Chợ Đêm Sơn Trà",
      rating: 3.6, reviews: 2219, area: "다낭 시내 강변",
      address: "An Hải, Đà Nẵng",
      hours: "17:30–23:45 (토·일 17:00–24:00)", openLate: true,
      lat: 16.0608125, lng: 108.2316875, img: "./images/son-tra-night.jpg",
      tip: "해산물 포장·건어물·길거리 음식. 생수와 얼음은 포장된 것만.",
      tags: ["야시장", "길거리 음식"], map: "https://www.google.com/maps/search/?api=1&query=Son+Tra+Night+Market"
    },
    {
      id: "cathedral", group: "spot", name: "다낭 대성당(핑크 성당)", local: "Nhà thờ Con Gà",
      rating: 4.3, reviews: 2793, area: "다낭 시내 (Trần Phú)",
      address: "156 Trần Phú, Hải Châu, Đà Nẵng",
      hours: "08:00–11:30, 13:30–16:30 · 일요일 미사 시간 제한", openLate: false,
      lat: 16.0666672, lng: 108.2231873, img: "./images/cathedral.jpg",
      tip: "담장 밖 외부 관광. 미사 중에는 조용히, 정문 앞 차량 주의.",
      tags: ["사진", "시내"], map: "https://www.google.com/maps/search/?api=1&query=Da+Nang+Cathedral"
    },
    {
      id: "linh-ung", group: "spot", name: "영응사(린응사)", local: "Chùa Linh Ứng · Lady Buddha",
      rating: 4.8, reviews: 4907, area: "손짜반도",
      address: "Hoàng Sa, Sơn Trà, Đà Nẵng",
      hours: "06:30–17:30", openLate: false,
      lat: 16.0996678, lng: 108.2769531, img: "./images/linh-ung.jpg",
      tip: "67m 관음상과 바다 전망. 어깨·무릎 가리는 복장, 모자·선글라스는 벗고.",
      tags: ["사찰", "전망"], map: "https://www.google.com/maps/search/?api=1&query=Lady+Buddha+Da+Nang"
    },
    {
      id: "marble-mountain", group: "spot", name: "마블 마운틴(오행산)", local: "Ngũ Hành Sơn",
      rating: 4.4, reviews: 43789, area: "응우한선",
      address: "81 Huyền Trân Công Chúa, Ngũ Hành Sơn, Đà Nẵng",
      hours: "07:00–17:30", openLate: false,
      lat: 16.0037104, lng: 108.2631605, img: "./images/marble-mountain.jpg",
      tip: "엘리베이터 포함. 계단 많아 편한 신발. 동굴 사원은 복장 단정히.",
      tags: ["동굴 사원", "전망"], map: "https://www.google.com/maps/search/?api=1&query=The+Marble+Mountains+Da+Nang"
    },
    {
      id: "love-bridge", group: "spot", name: "사랑의 부두·용다리", local: "Cầu Tình Yêu · Cầu Rồng",
      rating: 4.6, reviews: 824, area: "다낭 한강",
      address: "Trần Hưng Đạo, An Hải, Đà Nẵng",
      hours: "부두 08:00–21:00 · 용다리 상시", openLate: false,
      lat: 16.0629967, lng: 108.2298146, img: "./images/love-bridge.jpg",
      tip: "용다리 불·물 분수 쇼는 토·일 21시. 야경 조명은 매일 켜집니다.",
      tags: ["야경", "한강"], map: "https://www.google.com/maps/search/?api=1&query=Love+Bridge+Da+Nang"
    },
    {
      id: "hoian-oldtown", group: "spot", name: "호이안 구시가지", local: "Phố Cổ Hội An",
      rating: 4.8, reviews: 939, area: "호이안",
      address: "Hoi An, Da Nang",
      hours: "상시 (입장권은 패키지 포함)", openLate: true,
      lat: 15.8786082, lng: 108.3326924, img: "./images/hoian-oldtown.jpg",
      tip: "내원교·광조회관·턴키의집·풍흥의집 코스. 오래된 집은 신발을 벗고 들어갑니다.",
      tags: ["구시가지", "호이안"], map: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town"
    },
    {
      id: "dragon-bridge", group: "spot", name: "용다리", local: "Cầu Rồng · Dragon Bridge",
      rating: 4.5, reviews: 10186, area: "다낭 한강",
      address: "Cầu Rồng, An Hải, Đà Nẵng",
      hours: "상시 · 불·물 분수쇼 토·일 21:00", openLate: true,
      lat: 16.0611042, lng: 108.2276926, img: "./images/dragon-bridge.jpg",
      tip: "주말 21시 불꽃·물 분수쇼. 11/27(금)에는 쇼가 없고 조명만 켜집니다.",
      tags: ["야경", "주말 쇼"], map: "https://www.google.com/maps/search/?api=1&query=Dragon+Bridge+Da+Nang"
    },
    {
      id: "ba-na-hills", group: "spot", name: "바나힐 테마파크", local: "Sun World Ba Na Hills",
      rating: 4.5, reviews: 73213, area: "바나 (해발 1,487m)",
      address: "Ba Na, Đà Nẵng",
      hours: "08:00–22:00", openLate: false,
      lat: 16.0265625, lng: 108.0328125, img: "./images/ba-na-hills.jpg",
      tip: "케이블카·골든브릿지·프랑스 마을. 시내보다 5~7도 낮고 바람이 강합니다.",
      tags: ["테마파크", "케이블카"], map: "https://www.google.com/maps/search/?api=1&query=Sun+World+Ba+Na+Hills"
    },

    /* ── 카페 ── */
    {
      id: "cong-caphe", group: "cafe", name: "Cộng Cà Phê", local: "Cộng Cà Phê (Bạch Đằng)",
      rating: 4.1, reviews: 10265, area: "다낭 시내 한강변",
      address: "98-96 Bạch Đằng, Hải Châu, Đà Nẵng",
      hours: "07:00–23:30 (매일)", openLate: true,
      lat: 16.0690486, lng: 108.2248767, img: "./images/cong-caphe.jpg",
      tip: "코코넛 스무디 커피가 대표 메뉴. 한강뷰 창가 자리가 좋습니다. 한시장·대성당 동선 사이에 있습니다.",
      tags: ["코코넛 커피", "한강뷰"], map: "https://www.google.com/maps/search/?api=1&query=Cong+Ca+Phe+Bach+Dang+Da+Nang"
    }
  ]
};
