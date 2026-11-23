/* 다낭 3박 5일 — 일정 데이터
 * 2026.11.25(수)–11.29(일) · 부산(김해) 출발 · 윈덤 다낭 골든 베이 3박
 * 항공: KE2093(11/25 22:10 PUS → 11/26 01:00 DAD) / KE2094(11/29 02:30 DAD → 08:30 PUS)
 * 좌표·평점·영업시간: Google Maps 장소 조회값(2026-11-23 확인). 방문 전 재확인 필요.
 */
window.TRIP_DATA = {
  meta: {
    title: "다낭 3박 5일",
    subtitle: "2026.11.25(수) – 11.29(일) · 부산(김해) 출발 · 대한항공 직항",
    party: "노쇼핑 패키지 · 5성 호텔 3박 · 가이드·기사 경비 포함",
    hotel: "윈덤 다낭 골든 베이 (Wyndham Danang Golden Bay)",
    flightOut: "KE2093 22:10 부산 → 01:00+1 다낭",
    flightIn: "KE2094 02:30 다낭 → 08:30 부산",
    startDate: "2026-11-25",
    notice: "일정은 패키지 일정과 직접 짠 자유시간을 합친 것입니다. 영업시간·요금은 방문 전에 다시 확인하세요. 예약번호·연락처 같은 개인 정보는 이 페이지에 담지 않았습니다."
  },

  days: [
    /* ───────────── 1일차 ───────────── */
    {
      id: "d1", tab: "1일차", date: "11/25", weekday: "수", accent: "#0f766e",
      title: "부산 출발 → 다낭 도착",
      summary: "김해공항 19:40 미팅, 22:10 KE2093 편으로 출발해 다음날 01:00 다낭 도착. 윈덤 골든 베이 체크인 후 바로 휴식.",
      stats: [
        { k: "출발", v: "22:10 PUS" },
        { k: "도착", v: "01:00+1 DAD" },
        { k: "숙소", v: "윈덤 골든베이" }
      ],
      items: [
        {
          id: "d1-1", time: "19:40", kind: "move", priority: "essential",
          title: "김해공항 국제선 3층 미팅",
          jp: "국제선 3층 오른쪽 · 하나투어 안내판 앞",
          hours: "미팅 19:40 · 출발 2시간 30분 전",
          note: "여권과 e-티켓을 손에 들고 오세요. 미팅 후 단체 체크인·수속이 진행됩니다. 위탁 수하물 규정과 액체류는 항공사 안내를 따르세요.",
          map: "https://www.google.com/maps/search/?api=1&query=Gimhae+International+Airport"
        },
        {
          id: "d1-2", time: "22:10", kind: "move", priority: "essential",
          title: "KE2093 부산 → 다낭",
          jp: "4시간 50분 · 석식 기내식",
          hours: "22:10 출발 → 01:00(+1일) 도착",
          note: "베트남은 한국보다 2시간 느립니다. 기내에서 사전 입국신고(PAI) QR 화면을 캡처해 두면 입국 심사가 빠릅니다.",
          leg: { type: "flight", label: "대한항공 KE2093 · 직항", detail: "부산(PUS) 22:10 → 다낭(DAD) 01:00 (현지시각, +1일). 기내식 석식 제공." }
        },
        {
          id: "d1-3", time: "01:00", kind: "move", priority: "essential",
          title: "다낭 국제공항 도착 · 가이드 미팅",
          jp: "Sân bay Quốc tế Đà Nẵng",
          lat: 16.0569804, lng: 108.2025372,
          hours: "입국 심사·수하물 30~50분 예상",
          note: "도착층에서 현지 가이드가 안내판을 들고 기다립니다. 환전·유심은 공항 도착층에서 마무리하고, 짐을 찾은 뒤 단체 차량으로 이동합니다.",
          map: "https://www.google.com/maps/search/?api=1&query=Danang+International+Airport",
          mapLabel: "구글맵"
        },
        {
          id: "d1-4", time: "02:00", kind: "hotel", priority: "essential",
          title: "윈덤 다낭 골든 베이 체크인",
          jp: "Wyndham Danang Golden Bay · 5성급",
          lat: 16.097833, lng: 108.2244123,
          img: "./images/hotel-wyndham.jpg",
          hours: "프런트 24시간",
          note: "3박 전일정 확정 숙소. 한강 하구가 내려다보이는 루프탑 인피니티풀이 있고, 미케비치까지는 차로 10분 안팎입니다. 체크인 후 바로 휴식하세요.",
          source: { label: "호텔 공식", url: "https://dananggoldenbay.com/", checked: "2026-11-23" }
        }
      ]
    },

    /* ───────────── 2일차 ───────────── */
    {
      id: "d2", tab: "2일차", date: "11/26", weekday: "목", accent: "#c2410c",
      title: "오전 자유 · 호이안 올드타운 & 야경",
      summary: "오전은 한시장 쇼핑이나 호텔 인피니티풀 중 골라 쉬고, 점심 뒤 호이안으로 이동해 바구니배·구시가지·야경투어를 이어갑니다. 돌아와서 미케비치 해산물.",
      stats: [
        { k: "자유시간", v: "오전 3시간" },
        { k: "이동", v: "호이안 왕복 60km" },
        { k: "하이라이트", v: "호이안 야경" }
      ],
      items: [
        {
          id: "d2-1", time: "08:00", kind: "meal", priority: "essential",
          title: "조식 · 호텔식",
          jp: "윈덤 다낭 골든 베이 뷔페",
          hours: "호텔 조식 시간대 확인",
          note: "오전 일정이 길지 않으니 천천히 먹고, 쇼핑파는 9시 30분까지 로비 집결로 맞춰 두면 좋습니다."
        },
        {
          id: "d2-2", time: "09:30", kind: "free", priority: "optional",
          title: "[직접 짠 일정] 오전 자유 — 쇼핑파 / 휴식파",
          jp: "한시장 쇼핑 + 마사지  ·  또는 호텔 인피니티풀",
          note: "일행이 둘로 나뉘어도 좋습니다. 쇼핑파는 한시장에서 커피·과자·기념품을 보고 시내 마사지 60분을 넣고, 휴식파는 호텔 수영장에서 쉬다가 12시 점심에 합류합니다. 마사지가 빠듯하면 3일차 밤으로 미루세요.",
          candidates: [
            { id: "han-market", why: "다낭 대표 재래시장. 커피·캐슈넛·건어물·기념품. 흥정 기본", walk: "호텔에서 차 10분" },
            { id: "heart-spa", why: "평점 5.0·리뷰 1.2만. 새벽 2시까지 영업해 시간 맞추기 쉬움", walk: "미케비치 도보권" },
            { id: "lotus-massage", why: "평점 4.9·리뷰 8,800. 시내 쪽 60~90분 코스", walk: "한시장에서 차 5분" },
            { id: "my-khe", why: "수영 대신 해변 산책만 하려면 여기. 호텔에서 차 10분", walk: "차 10분" }
          ]
        },
        {
          id: "d2-3", time: "12:00", kind: "meal", priority: "essential",
          title: "중식 · 리안 레스토랑",
          jp: "리안 Lian · 등갈비 김치찜",
          lat: 16.0627919, lng: 108.2424925,
          img: "./images/lian.jpg",
          hours: "10:00–14:00, 16:00–20:00 (매일)",
          note: "미케비치 앞 한식당. 등갈비 김치찜이 대표 메뉴이고, 매운맛이 부담스러우면 덜 맵게 요청하세요. 패키지 포함 식사지만 음료·주류는 별도인 경우가 많습니다.",
          food: "lian",
          map: "https://www.google.com/maps/search/?api=1&query=%EB%A6%AC%EC%95%88%20Lian%20Da%20Nang"
        },
        {
          id: "d2-4", time: "14:30", kind: "spot", priority: "essential",
          title: "깜타인 바구니배(틴퉁) 체험",
          jp: "Coconut Boat Hoi An · Cam Thanh",
          lat: 15.8872821, lng: 108.3570722,
          img: "./images/basket-boat.jpg",
          hours: "07:30–18:30",
          note: "야자수 물길을 바구니배로 도는 20~30분 코스. 배 위에서 돈다리 돌리기 묘기를 보여주면 작은 팁을 준비하세요. 모자·선크림·방수 가방이 필수입니다.",
          food: "basket-boat",
          leg: { type: "car", label: "리안 → 호이안 깜타인 (차 40~50분)", detail: "단체 차량 이동. 중간에 휴게소 화장실 한 번 들르는 코스가 보통입니다." }
        },
        {
          id: "d2-5", time: "15:30", kind: "spot", priority: "essential",
          title: "투본강 보트 투어",
          jp: "Thu Bồn River",
          note: "바구니배 뒤에 이어지는 강 투어. 강에서 올드타운 지붕선과 배들을 봅니다. 해 질 무렵 물빛이 가장 좋습니다."
        },
        {
          id: "d2-6", time: "16:30", kind: "spot", priority: "essential",
          title: "호이안 구시가지 — 내원교·광조회관·턴키의집·풍흥의집",
          jp: "Phố Cổ Hội An",
          lat: 15.8770873, lng: 108.3260704,
          img: "./images/covered-bridge.jpg",
          hours: "구시가지 상시 · 내원교 09:00–22:00",
          note: "17세기 일본인 다리 내원교(짜우까우)를 시작으로 광조회관, 턴키의 집, 풍흥의 집을 도는 코스. 구시가지 입장권은 패키지에 포함되어 있고, 오래된 집 안은 신발을 벗고 들어갑니다.",
          map: "https://www.google.com/maps/search/?api=1&query=Chua+Cau+Hoi+An",
          map2: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town",
          map2Label: "구시가지 지도"
        },
        {
          id: "d2-7", time: "18:00", kind: "meal", priority: "essential",
          title: "석식 · 모닝글로리 시그니처",
          jp: "Morning Glory Signature · 호이안 미식 세트",
          lat: 15.8759067, lng: 108.326206,
          img: "./images/morning-glory.jpg",
          hours: "10:30–22:30",
          note: "호이안 향토 음식(까오러우·화이트로즈·반쎄오)을 한 번에 맛보는 세트. 2층 창가 자리면 야시장 등불이 잘 보입니다.",
          food: "morning-glory"
        },
        {
          id: "d2-8", time: "19:30", kind: "spot", priority: "essential",
          title: "호이안 야경투어 · 소원배 + 소원등",
          jp: "Hoi An Night Market · Sông Hoài",
          lat: 15.875503, lng: 108.3262087,
          img: "./images/hoian-night.jpg",
          hours: "야시장 09:00–22:00 · 소원배 해 진 뒤",
          note: "투본강에 소원등을 띄우고 소원배를 타는 코스, 음료 1잔 포함. 이어서 씨클로(인력거)로 야시장 골목을 돕니다. 소원등·배 탑승은 현금이 편합니다.",
          food: "hoian-night"
        },
        {
          id: "d2-9", time: "21:00", kind: "move", priority: "essential",
          title: "다낭으로 복귀",
          jp: "호이안 → 다낭 시내",
          hours: "차 45~55분",
          note: "돌아오는 길에 미케비치 쪽으로 바로 내려 2차를 하거나, 피곤하면 호텔로 먼저 들어가도 됩니다.",
          leg: { type: "car", label: "호이안 → 다낭 (차 45~55분)", detail: "야간 이동이라 창밖 풍경은 거의 없습니다. 차 안에서 잠깐 쉬기 좋습니다." }
        },
        {
          id: "d2-10", time: "22:00", kind: "meal", priority: "optional",
          title: "[직접 짠 일정] 미케비치 해산물 2차",
          jp: "Hải sản · 미케비치 해변",
          lat: 16.0668016, lng: 108.2449953,
          img: "./images/be-ni-2.jpg",
          hours: "추천 1순위 Bé Ni 2 · 10:00–05:00",
          note: "패키지 일정이 끝난 뒤라 배가 고프면 여기서 마무리하세요. 1순위는 새벽 5시까지 하는 Bé Ni 2, 2순위는 Bé Biển(7:30–02:00). 게·새우·조개는 100g 단위로 무게를 재고 가격을 먼저 확인하는 게 안전합니다.",
          food: "be-ni-2",
          candidates: [
            { id: "be-ni-2", why: "평점 4.8·리뷰 1.5만. 새벽 5시까지 영업", walk: "미케비치 해변 도로" },
            { id: "be-bien", why: "평점 4.8·리뷰 5,600. 7:30–02:00, 가격표가 비교적 투명", walk: "도보 3분" },
            { id: "them-hai-san", why: "평점 4.8·리뷰 1만. 24시까지, 실내 좌석 넓음", walk: "차 5분" },
            { id: "moc-quan", why: "평점 4.8·리뷰 3.3만. 사람 많아 대기 있음, 22:30 마감", walk: "차 5분" }
          ]
        }
      ]
    },

    /* ───────────── 3일차 ───────────── */
    {
      id: "d3", tab: "3일차", date: "11/27", weekday: "금", accent: "#1d4ed8",
      title: "바나힐 · 다낭 야시장 · 미케비치 한잔",
      summary: "아침 일찍 바나힐로 올라가 케이블카와 골든브릿지를 보고, 내려와 마사지·씨푸드 석식 뒤 사랑의 부두와 손짜 야시장. 마무리는 미케비치에서 한잔.",
      stats: [
        { k: "고도", v: "1,487m" },
        { k: "바나힐", v: "4~5시간" },
        { k: "밤", v: "술자리·마사지" }
      ],
      items: [
        {
          id: "d3-1", time: "07:00", kind: "meal", priority: "essential",
          title: "조식 · 호텔식",
          jp: "출발 전 든든하게",
          hours: "호텔 조식 시간대 확인",
          note: "바나힐은 산 위라 12시 30분까지 점심을 못 먹습니다. 조식을 넉넉히, 물 한 병은 챙기세요."
        },
        {
          id: "d3-2", time: "08:45", kind: "spot", priority: "essential",
          title: "바나힐 테마파크",
          jp: "Sun World Ba Na Hills",
          lat: 16.0265625, lng: 108.0328125,
          img: "./images/ba-na-hills.jpg",
          hours: "08:00–22:00 (케이블카 운행 시간 확인)",
          note: "케이블카로 올라가 골든브릿지(손바닥 다리)·프랑스 마을·정상 전망대를 도는 코스로 4~5시간. 고도 1,487m라 시내보다 5~7도 낮고 바람이 강합니다 — 얇은 긴팔이나 바람막이를 꼭 챙기세요. 오전 일찍 올라가야 골든브릿지 인파를 피합니다.",
          leg: { type: "car", label: "호텔 → 바나힐 (차 40~50분)", detail: "산길 구간이 있어 멀미가 있으면 미리 준비하세요." },
          source: { label: "선월드 공식", url: "https://sunworld.vn/vi/banahills", checked: "2026-11-23" }
        },
        {
          id: "d3-3", time: "12:30", kind: "meal", priority: "essential",
          title: "중식 · 포시즌스 뷔페",
          jp: "Four Seasons Buffet (Ba Na Hills)",
          lat: 15.9956751, lng: 107.9903101,
          img: "./images/four-seasons.jpg",
          hours: "10:30–15:00",
          note: "바나힐 안 뷔페 식당. 단체 시간대와 겹치면 줄이 길어지니 가이드 안내 순서를 따르세요. 표기된 대안(아라팡)은 현장에서 가이드에게 확인하면 됩니다.",
          food: "four-seasons"
        },
        {
          id: "d3-4", time: "14:00", kind: "move", priority: "essential",
          title: "하산 → 다낭 시내",
          jp: "Ba Na Hills → Đà Nẵng",
          hours: "차 40~50분",
          note: "내려오는 케이블카도 줄이 있을 수 있습니다. 오후 일정은 여유를 두고 잡았습니다.",
          leg: { type: "car", label: "바나힐 → 다낭 (차 40~50분)", detail: "하산 뒤 시내 마사지 장소로 바로 이동합니다." }
        },
        {
          id: "d3-5", time: "15:30", kind: "spot", priority: "essential",
          title: "베트남 전통 전신 마사지 60분",
          jp: "패키지 스페셜 포함",
          hours: "60분 코스 · 매너팁 USD 2 별도",
          note: "패키지에 포함된 코스입니다. 장소는 현장에서 가이드가 안내합니다. 매너팁 2달러를 미리 준비하고, 귀중품은 몸에 지니세요. 더 길게 받고 싶으면 90분으로 현장 업그레이드가 가능한지 물어보세요.",
          candidates: [
            { id: "babylon-spa", why: "평점 4.8·리뷰 4,900. 미케비치 도보권, 23시까지", walk: "도보 5분" },
            { id: "lotus-massage", why: "평점 4.9·리뷰 8,800. 22:30 마감", walk: "차 5분" },
            { id: "panda-spa", why: "평점 4.9·리뷰 3,100. 발마사지 위주로도 가능", walk: "차 5분" }
          ]
        },
        {
          id: "d3-6", time: "17:00", kind: "meal", priority: "essential",
          title: "석식 · 씨푸드킹",
          jp: "Seafood King · 씨푸드 셋메뉴",
          lat: 16.0865507, lng: 108.2484208,
          img: "./images/seafood-king.jpg",
          hours: "11:00–14:00, 17:00–21:00",
          note: "미케비치 북쪽 큰길가 씨푸드 식당. 셋메뉴로 나오고, 술은 별도입니다. 19시 전에 들어가면 자리 잡기 편합니다.",
          food: "seafood-king"
        },
        {
          id: "d3-7", time: "18:30", kind: "spot", priority: "essential",
          title: "사랑의 부두 · 용다리",
          jp: "Cầu Tình Yêu · Cầu Rồng",
          lat: 16.0629967, lng: 108.2298146,
          img: "./images/love-bridge.jpg",
          hours: "부두 08:00–21:00 · 용다리 상시",
          note: "한강변 사랑의 부두에서 용다리를 봅니다. 용다리 불·물 분수 쇼는 주말(토·일) 21시라 금요일인 이날은 없습니다. 대신 야경 조명만 봐도 충분합니다.",
          map: "https://www.google.com/maps/search/?api=1&query=Love+Bridge+Da+Nang",
          map2: "https://www.google.com/maps/search/?api=1&query=Dragon+Bridge+Da+Nang",
          map2Label: "용다리"
        },
        {
          id: "d3-8", time: "19:30", kind: "spot", priority: "essential",
          title: "손짜 야시장",
          jp: "Chợ Đêm Sơn Trà",
          lat: 16.0608125, lng: 108.2316875,
          img: "./images/son-tra-night.jpg",
          hours: "17:30–23:45 (토·일 17:00–24:00)",
          note: "해산물 포장·건어물·기념품·길거리 음식이 모인 야시장. 값을 부르면 7~8할로 흥정하는 게 보통이고, 생수와 얼음은 포장된 것만 드세요.",
          food: "son-tra-night"
        },
        {
          id: "d3-9", time: "21:00", kind: "free", priority: "optional",
          title: "[직접 짠 일정] 미케비치에서 한잔",
          jp: "Beach pub · rooftop · local beer",
          lat: 16.06753, lng: 108.2460466,
          img: "./images/the-roof.jpg",
          hours: "추천 1순위 The Roof · 14:00–01:00",
          note: "바다 쪽 루프탑이나 비치펍에서 맥주 한잔. 1순위는 평점 4.8 The Roof(루프탑·바다뷰), 조용히 앉고 싶으면 Lounge Beach Bar, 일찍 들어가야 하면 Esco Beach 쪽이 편합니다. 늦게까지 하려면 Malibu가 02시까지입니다.",
          candidates: [
            { id: "the-roof", why: "평점 4.8·리뷰 2,000. 루프탑 바다뷰, 01시까지", walk: "미케비치 도보 2분" },
            { id: "lounge-beach", why: "평점 4.8·리뷰 4,000. 비치 라운지, 01시까지", walk: "도보 3분" },
            { id: "esco-beach", why: "평점 4.6·리뷰 7,700. 자리 넓고 논알콜 메뉴도 많음", walk: "도보 4분" },
            { id: "malibu", why: "평점 4.8·리뷰 2,400. 새벽 2시까지, 음악 소리 큰 편", walk: "차 3분" }
          ]
        },
        {
          id: "d3-10", time: "22:30", kind: "free", priority: "optional",
          title: "[직접 짠 일정] 마사지 더 받기 (희망자만)",
          jp: "Heart Spa · Lotus Spa · Panda Spa",
          lat: 16.0612265, lng: 108.2453635,
          img: "./images/heart-spa.jpg",
          hours: "Heart Spa 08:00–02:00 · LOTUS SPA My Khe 09:00–02:00",
          note: "술자리를 마친 뒤 늦게까지 하는 곳만 골랐습니다. Heart Spa(평점 5.0·리뷰 1.2만)와 LOTUS SPA My Khe(5.0)는 새벽 2시까지, Panda Spa는 23:45 마감입니다. 늦은 시간엔 60분 코스로 예약하고, 팁은 2~5달러 정도가 보통입니다.",
          candidates: [
            { id: "heart-spa", why: "평점 5.0·리뷰 1.2만. 02:00까지", walk: "도보 5분" },
            { id: "lotus-spa-mykhe", why: "평점 5.0. 02:00까지, 시설 깔끔", walk: "차 5분" },
            { id: "panda-spa", why: "평점 4.9·리뷰 3,100. 23:45 마감이라 이 시간엔 마지막 손님", walk: "차 5분" }
          ]
        },
        {
          id: "d3-11", time: "—", kind: "free", priority: "optional",
          title: "선택관광 안내 (현장 신청)",
          jp: "차밍 다낭쇼 $25 · 다낭 야경 크루즈 $35",
          hours: "가이드에게 당일 신청",
          note: "차밍 다낭쇼는 베트남 전통 공연, 야경 크루즈는 한강 야경을 배에서 보는 코스입니다. 이날은 이미 일정이 길어 무리하지 않는 걸 권합니다."
        }
      ]
    },

    /* ───────────── 4일차 ───────────── */
    {
      id: "d4", tab: "4일차", date: "11/28", weekday: "토", accent: "#9d174d",
      title: "롯데마트 쇼핑 · 마블 마운틴 · 다낭 시내 · 출국",
      summary: "오전에 롯데마트에서 기념품을 사고 체크아웃, 오행산과 시내 사원·성당을 돈 뒤 심야 비행기로 출국합니다.",
      stats: [
        { k: "체크아웃", v: "오전" },
        { k: "관광", v: "오행산·성당·사찰" },
        { k: "출국", v: "02:30+1" }
      ],
      items: [
        {
          id: "d4-1", time: "07:30", kind: "meal", priority: "essential",
          title: "조식 · 호텔식",
          jp: "마지막 호텔 조식",
          hours: "호텔 조식 시간대 확인",
          note: "짐을 미리 싸 두고 조식 뒤 바로 나갈 준비를 하세요. 캐리어 무게를 한 번 재 두면 공항에서 편합니다."
        },
        {
          id: "d4-2", time: "09:00", kind: "spot", priority: "optional",
          title: "[직접 짠 일정] 롯데마트 다낭점",
          jp: "Lotte Mart Supermarket · 6 Nại Nam",
          lat: 16.0348373, lng: 108.2292584,
          img: "./images/lotte-mart.jpg",
          hours: "07:30–22:00",
          note: "기념품·과자·커피를 한 번에 사는 곳. G7·쯩응우옌 커피, 캐슈넛, 라면, 건과일이 인기입니다. 비닐봉투는 유료이고, 액체류·라면은 위탁 수하물에 넣어야 합니다. 1시간 반이면 충분합니다.",
          food: "lotte-mart",
          leg: { type: "car", label: "호텔 → 롯데마트 (차 15~20분)", detail: "체크아웃 후 짐은 차에 실어 두고 이동하는 동선이 편합니다." }
        },
        {
          id: "d4-3", time: "10:30", kind: "spot", priority: "essential",
          title: "마블 마운틴(오행산)",
          jp: "Ngũ Hành Sơn · The Marble Mountains",
          lat: 16.0037104, lng: 108.2631605,
          img: "./images/marble-mountain.jpg",
          hours: "07:00–17:30",
          note: "엘리베이터 포함 관람. 대리석 산 동굴 사원과 전망대를 오르내리니 편한 신발이 필수입니다. 사원 안에서는 어깨와 무릎을 가리는 복장을 지키세요.",
          source: { label: "오행산 안내", url: "https://nguhanhson.org/", checked: "2026-11-23" }
        },
        {
          id: "d4-4", time: "12:00", kind: "meal", priority: "essential",
          title: "중식 · 마담란 레스토랑",
          jp: "Nhà hàng Madame Lân",
          lat: 16.0814063, lng: 108.2232528,
          img: "./images/madame-lan.jpg",
          hours: "06:30–21:30",
          note: "미슐랭 가이드에 소개된 다낭 가정식. 한강변 큰 저택형 식당이라 단체가 편합니다. 반쎄오·분짜·생선 요리가 무난합니다.",
          food: "madame-lan"
        },
        {
          id: "d4-5", time: "13:30", kind: "spot", priority: "essential",
          title: "다낭 대성당(핑크 성당) 외부 관광",
          jp: "Da Nang Cathedral · Nhà thờ Con Gà",
          lat: 16.0666672, lng: 108.2231873,
          img: "./images/cathedral.jpg",
          hours: "08:00–11:30, 13:30–16:30 (일요일 미사 시간 제한)",
          note: "1923년 지어진 분홍빛 성당. 외부 관광이라 담장 밖에서 사진을 찍습니다. 미사 중에는 조용히, 정문 앞은 차가 많아 사진 찍을 때 주의하세요.",
          food: "cathedral"
        },
        {
          id: "d4-6", time: "14:10", kind: "spot", priority: "essential",
          title: "한시장",
          jp: "Chợ Hàn · Han Market",
          lat: 16.0682985, lng: 108.224239,
          img: "./images/han-market.jpg",
          hours: "06:00–19:00",
          note: "2층은 의류·천, 1층은 식품·건어물. 커피와 캐슈넛은 여기서 마지막으로 사기 좋습니다. 흥정은 웃으면서 7할부터.",
          food: "han-market"
        },
        {
          id: "d4-7", time: "15:10", kind: "spot", priority: "essential",
          title: "영응사(린응사) · 레이디 부다",
          jp: "Chùa Linh Ứng · Sơn Trà",
          lat: 16.0996678, lng: 108.2769531,
          img: "./images/linh-ung.jpg",
          hours: "06:30–17:30",
          note: "손짜반도 언덕 위 사찰. 67m 관음상과 다낭 시내·바다 전망이 좋습니다. 사찰 예절상 반팔·반바지는 삼가고, 모자와 선글라스는 벗고 들어가세요.",
          food: "linh-ung",
          source: { label: "Google Maps 장소", url: "https://www.google.com/maps/search/?api=1&query=Lady+Buddha+Da+Nang", checked: "2026-11-23" }
        },
        {
          id: "d4-8", time: "16:30", kind: "meal", priority: "essential",
          title: "석식 · 다낭 타워 스테이크",
          jp: "Danang Tower · 스테이크",
          lat: 16.0708286, lng: 108.2291598,
          img: "./images/danang-tower.jpg",
          hours: "11:00–02:00",
          note: "출국 전 마지막 식사. 스테이크와 양식 메뉴가 있고 늦게까지 합니다. 공항까지 차로 15분 거리라 시간 맞추기 좋습니다.",
          food: "danang-tower"
        },
        {
          id: "d4-9", time: "18:30", kind: "free", priority: "optional",
          title: "선택관광 (시간이 남으면)",
          jp: "차밍 다낭쇼 $25 · 다낭 야경투어 $35",
          hours: "가이드에게 당일 신청",
          note: "출국편이 심야라 21시 이후 시간이 남습니다. 다만 공항 이동·수속 시간을 감안하면 무리하지 않는 편이 좋습니다."
        },
        {
          id: "d4-10", time: "22:30", kind: "move", priority: "essential",
          title: "다낭 공항 이동 · 출국 수속",
          jp: "Sân bay Quốc tế Đà Nẵng · 국제선 터미널",
          lat: 16.0569804, lng: 108.2025372,
          img: "./images/danang-airport.jpg",
          hours: "출발 2시간 30분 전 도착 권장",
          note: "면세점·라운지는 출국 수속 뒤에 있습니다. 액체류와 쇼핑 물품은 위탁 수하물로, 보조배터리는 기내 가방에 넣으세요.",
          leg: { type: "car", label: "시내 → 다낭 공항 (차 15~20분)", detail: "심야라 길이 막히지 않습니다. 단체 차량으로 이동합니다." }
        }
      ]
    },

    /* ───────────── 5일차 ───────────── */
    {
      id: "d5", tab: "5일차", date: "11/29", weekday: "일", accent: "#475569",
      title: "다낭 → 부산 귀국",
      summary: "새벽 2시 30분 다낭을 떠나 오전 8시 30분 부산에 도착합니다. 기내에서 자고 내리면 한국 아침입니다.",
      stats: [
        { k: "출발", v: "02:30 DAD" },
        { k: "도착", v: "08:30 PUS" },
        { k: "비행", v: "4시간" }
      ],
      items: [
        {
          id: "d5-1", time: "02:30", kind: "move", priority: "essential",
          title: "KE2094 다낭 → 부산",
          jp: "4시간 · 조식 기내식",
          hours: "02:30 출발 → 08:30 도착",
          note: "기내에서 자는 편이 좋습니다. 목베개·안대가 있으면 다음 날 컨디션이 다릅니다.",
          lat: 16.0569804, lng: 108.2025372,
          map: "https://www.google.com/maps/search/?api=1&query=Danang+International+Airport",
          leg: { type: "flight", label: "대한항공 KE2094 · 직항", detail: "다낭(DAD) 02:30 → 부산(PUS) 08:30 (현지시각). 조식 기내식." }
        },
        {
          id: "d5-2", time: "08:30", kind: "move", priority: "essential",
          title: "부산 김해공항 도착",
          jp: "Gimhae International Airport",
          hours: "입국 심사·수하물 20~40분",
          note: "택시·리무진 대기 줄이 깁니다. 짐을 찾은 뒤 바로 이동하거나, 시간 여유를 두고 나오세요.",
          map: "https://www.google.com/maps/search/?api=1&query=Gimhae+International+Airport"
        }
      ]
    }
  ],

  /* ── 체크리스트 ── */
  checklist: [
    "여권 유효기간 6개월 이상 + 빈 페이지 2장 확인",
    "여권 사진면 휴대폰 사진으로 백업",
    "e-티켓(항공권) 캡처 + 인쇄본 1부",
    "베트남 사전 입국신고(PAI) QR 등록·캡처",
    "숙소 주소(영문) 저장 — 입국신고서에 필요",
    "여행자보험 가입·증권 캡처",
    "동(VND)·달러 소액 환전 (팁·시장용)",
    "유심/eSIM 준비 또는 공항 수령 확인",
    "보조배터리·충전기·멀티탭 (기내 가방에)",
    "상비약: 소화제·지사제·해열제·밴드",
    "선크림·모자·선글라스",
    "모기 기피제 (야시장·호이안)",
    "수영복·래시가드 (인피니티풀)",
    "얇은 긴팔·바람막이 (바나힐 고도 대비)",
    "접이식 우비 또는 작은 우산",
    "편한 신발 + 사원용으로 어깨·무릎 가리는 옷",
    "마사지 매너팁 USD 2~5 준비",
    "캐리어 무게·액체류 위탁 정리",
    "롯데마트 쇼핑용 에코백·여유 공간",
    "면세 한도·반입 금지품 확인",
    "비상 연락처(영사콜센터 02-3210-0404) 저장",
    "집 열쇠·교통카드·충전 상태 점검"
  ],

  /* ── 여행 정보 ── */
  tips: [
    {
      icon: "🛂", title: "입국·비자·사전 신고",
      items: [
        "대한민국 여권 소지자는 관광 목적 45일 무비자 입국이 가능합니다(결의 44/NQ-CP, 2028년 3월 14일까지). 여권은 입국일 기준 6개월 이상 유효해야 합니다.",
        "2026년부터 베트남이 사전 입국 정보 등록(PAI)을 시범 운영합니다. 입국 3일 전부터 공식 사이트에서 무료로 등록하고 QR을 캡처해 두세요. 다낭 공항도 대상에 포함됐습니다.",
        "등록비를 받거나 카드 정보를 묻는 사이트는 공식이 아닙니다. 주소가 prearrival.immigration.gov.vn, evisa.gov.vn 인지 확인하세요.",
        "긴급여권으로는 무비자 입국이 안 됩니다. 여권 상태(훼손·빈 페이지)를 출발 전에 확인하세요."
      ],
      links: [
        { label: "사전 입국신고(공식)", url: "https://prearrival.immigration.gov.vn" },
        { label: "베트남 e-visa 포털", url: "https://evisa.gov.vn" },
        { label: "주베트남 대사관 출입국 FAQ", url: "https://overseas.mofa.go.kr/vn-ko/brd/m_26405/view.do?seq=11" }
      ]
    },
    {
      icon: "🌤️", title: "11월 날씨와 복장",
      items: [
        "다낭 11월은 우기 끝물로 낮 27~30도, 밤 22~24도 안팎입니다. 짧은 소나기가 오면 30분~1시간 안에 그치는 경우가 많습니다.",
        "습도가 높아 땀이 잘 마르지 않습니다. 면·린넨 소재와 여분 양말을 넉넉히.",
        "바나힐은 해발 1,487m로 시내보다 5~7도 낮고 바람이 강합니다. 얇은 긴팔이나 바람막이 하나는 꼭.",
        "실내 냉방이 강합니다. 얇은 가디건은 식당·차량에서 유용합니다."
      ]
    },
    {
      icon: "💵", title: "돈·환전·팁",
      items: [
        "통화는 베트남 동(VND). 0이 세 개 붙어 1,000동=1천, 100,000동=10만으로 읽으면 덜 헷갈립니다.",
        "시장·야시장·소규모 식당은 현금이 편합니다. 큰 식당·호텔·편의점은 카드가 됩니다.",
        "환전은 김해공항이나 다낭공항, 시내 금은방이 은행보다 나은 경우가 있습니다. 달러 소액권은 팁·선택관광에 유용합니다.",
        "팁 문화: 마사지 매너팁 2~5달러, 가이드·기사 경비는 패키지에 포함되어 있습니다.",
        "해산물은 100g 단위로 무게를 재는 곳이 많으니 주문 전에 총액을 확인하세요."
      ]
    },
    {
      icon: "🚕", title: "이동·교통",
      items: [
        "패키지 일정은 전용 차량으로 이동합니다. 자유시간에는 그랩(Grab)이 가장 편하고 요금이 미리 보입니다.",
        "미터기 택시는 마이린(Mai Linh)·비나선(Vinasun) 같은 브랜드를 이용하세요. 바가지 요금을 부르는 차는 그냥 보내면 됩니다.",
        "호텔(윈덤 골든베이)에서 미케비치까지는 차로 10분 안팎, 시내(한시장)까지 15분 안팎입니다.",
        "호이안은 다낭에서 차로 45~55분. 밤에는 조명이 없어 도보 이동 대신 차를 부르세요."
      ]
    },
    {
      icon: "🍜", title: "먹거리·물·위생",
      items: [
        "생수는 병에 든 것만, 얼음도 컵에 담긴 업소 얼음을 드세요. 길거리 음식은 사람이 많이 몰리는 집이 회전이 빨라 안전합니다.",
        "호이안에서 꼭 먹어볼 것: 까오러우, 화이트로즈(반 바오 바오), 반쎄오.",
        "다낭 향토 음식: 미꽝(국수), 분짜까, 반쎄오, 해산물 구이.",
        "매운맛은 생각보다 약합니다. 고추는 따로 달라고 하세요."
      ]
    },
    {
      icon: "🏮", title: "호이안에서 알아둘 것",
      items: [
        "야시장·구시가지 흥정은 웃으면서 시작하세요. 부른 값의 7~8할이 보통입니다.",
        "소원등·소원배·씨클로는 현금 결제가 편하고, 탑승 전에 요금을 확인하세요.",
        "구시가지 입장권은 패키지에 포함되어 있습니다. 오래된 집은 신발을 벗고 들어갑니다.",
        "해 진 뒤 등불이 켜지는 18시 30분~19시 30분이 사진 찍기 가장 좋습니다."
      ]
    },
    {
      icon: "🚡", title: "바나힐 팁",
      items: [
        "케이블카 줄이 길어질 수 있습니다. 8시대에 올라가면 골든브릿지를 비교적 한산하게 볼 수 있습니다.",
        "정상은 바람이 세고 갑자기 흐려집니다. 우비와 얇은 겉옷을 챙기세요.",
        "골든브릿지는 오전 9~11시가 역광이 덜합니다.",
        "내려오는 시간을 넉넉히 잡으세요. 오후 3시 이후 하산 줄이 깁니다."
      ]
    },
    {
      icon: "💆", title: "마사지·스파",
      items: [
        "패키지 포함 마사지는 60분 코스이고 매너팁 USD 2가 별도입니다.",
        "자유시간에 더 받으려면 60분 기준 대략 25만~45만 동 선(매장·코스별 차이, 현장 확인).",
        "발마사지·전신·오일 중 고르고, 강도는 'medium'이라고 말하면 대체로 무난합니다.",
        "귀중품은 몸에 지니고, 옷은 매장에서 제공하는 것으로 갈아입습니다.",
        "늦은 밤에는 2시까지 하는 곳(Heart Spa, LOTUS SPA My Khe) 위주로 고르세요."
      ]
    },
    {
      icon: "📱", title: "통신·앱",
      items: [
        "eSIM을 미리 사거나 다낭공항에서 유심을 사면 됩니다. 데이터 중심 요금제면 충분합니다.",
        "그랩(Grab: 택시·음식), 구글맵(오프라인 지도 저장), 파파고(사진 번역)를 미리 설치하세요.",
        "구글맵에서 다낭·호이안 지도를 오프라인 저장하면 데이터 없이도 길을 찾을 수 있습니다.",
        "이 페이지는 홈 화면에 추가하면 오프라인에서도 일정과 사진이 열립니다."
      ]
    },
    {
      icon: "🛍️", title: "쇼핑·기념품·세관",
      items: [
        "롯데마트: G7·쯩응우옌 커피, 캐슈넛, 말린 망고, 라면, 커피 필터. 1시간 반이면 충분합니다.",
        "한시장: 커피·건어물·천·기념품. 2층 의류는 사이즈 확인 필수.",
        "액체류·라면·소스는 위탁 수하물에. 보조배터리·전자담배는 기내만 가능합니다.",
        "한국 반입 금지품(육류·과일·씨앗)은 사지 마세요. 면세 한도도 확인하세요."
      ]
    },
    {
      icon: "🆘", title: "안전·비상",
      items: [
        "베트남 긴급번호: 경찰 113, 화재 114, 구급 115.",
        "영사콜센터 +82-2-3210-0404 (24시간, 한국어). 주베트남 대사관 다낭 영사협력 사무소도 있습니다.",
        "바다 수영은 깃발이 있는 구역에서만. 미케비치는 파도가 높은 날이 있습니다.",
        "오토바이 대여는 보험·면허 문제로 권하지 않습니다.",
        "여권 분실 시: 현지 경찰서 신고서 → 대사관 긴급여권 → 항공사 통보 순서입니다."
      ]
    }
  ]
};
