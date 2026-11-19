/* 도쿄 3박 4일 — 일정 데이터
 * 여기만 고치고 git push 하면 페이지에 바로 반영됩니다.
 * 이미지: images/<파일명>.jpg (880x587) · 구글맵: maps 링크
 */
window.TRIP_DATA = {
  meta: {
    title: "도쿄 3박 4일",
    subtitle: "2026.11.21(토) – 11.24(화)",
    party: "성인 3인 · 호진 · 어머니 · 여동생",
    hotel: "신주쿠 워싱턴 호텔 본관 (니시신주쿠 3-2-9) · 3박",
    hotelTel: "+81 3-3343-3111",
    flightOut: "TW257 대구 15:00 → 나리타 T2 17:10",
    flightIn: "TW252 나리타 T2 14:20 → 대구 16:50",
    updated: "2026-11-19",
    notice: "식사 슬롯과 이동 시간은 2026-11-19 확인 기준입니다. 도보 시간은 Google Maps 실측, 전철은 조회 시각표 기준이며, 식사 자리를 넣느라 일부 시각을 5~15분 조정했습니다.",
    startDate: "2026-11-21",
    endDate: "2026-11-24"
  },

  days: [
    /* ───────────────────────── 1일차 ───────────────────────── */
    {
      id: "d1",
      tab: "1일차 (토)",
      date: "11/21",
      weekday: "토",
      title: "도착 · 나리타 → 신주쿠",
      summary: "17:10 나리타 T2 → 리무진 18:20 → 20:15 체크인 → 시부야 돈키호테",
      accent: "#d1503a",
      stats: [
        { k: "이동", v: "리무진 1시간 55분" },
        { k: "체크인", v: "20:15" },
        { k: "일정", v: "4곳" }
      ],
      items: [
        {
          id: "d1-1",
          time: "13:00",
          title: "대구국제공항",
          jp: "대구공항 TAE",
          hours: "TW257 15:00 출발 · 위탁 15kg / 기내 10kg",
          note: "국제선은 2시간 전 도착이 안전합니다. 대구공항은 규모가 작아 13:00이면 여유. 기내식이 없으니 공항에서 가볍게 점심을 드세요.",
          img: null,
          map: null
        },
        {
          id: "d1-2",
          time: "17:10",
          title: "나리타국제공항 제2터미널 도착",
          jp: "成田空港 第2ターミナル",
          hours: "입국심사·수하물 수취 약 40~60분",
          note: "내려서 1층 도착 로비로 내려가면 리무진버스 카운터와 발권기가 있습니다. 다음 차 표를 현장에서 끊는 편이 안전하고, 짐 1인 2개까지 무료로 실립니다.",
          img: "images/narita-arrival.jpg",
          map: "https://maps.google.com/?cid=525036222910129328",
          leg: {
            type: "bus",
            label: "리무진버스 18:20 → 20:15",
            detail: "1층 카운터·발권기 현장 구매 · 16·17번 승강장 · 1인 3,600엔 · 약 1시간 55분 · 호텔 정문 앞 하차",
            alt: "다음 차 18:50 → 20:40 / 전철 대안: 空港第2ビル 18:22 스카이라이너 → 日暮里 19:04 → JR 山手線 → 新宿 19:32 (2,820엔·환승 1회)"
          }
        },
        {
          id: "d1-3",
          time: "20:15",
          title: "신주쿠 워싱턴 호텔 본관 체크인",
          jp: "新宿ワシントンホテル 本館",
          hours: "프런트 24시간 · 체크인 14:00부터",
          note: "3박 내내 같은 방(리뉴얼 플로어 트리플룸·금연)입니다. 아고다 예약 2건(11/21 1박 + 11/22~24 2박)을 이어 붙인 구조라, 체크인 때 같은 방 배정을 한 번 더 확인하세요. 1층 24시간 패밀리마트, 3층 전자레인지·당일 무료 짐보관, 각 층 제빙기.",
          img: "images/washington-hotel.jpg",
          map: "https://maps.google.com/?cid=6872319874272201570",
          leg: {
            type: "walk",
            label: "버스에서 내려 바로",
            detail: "리무진 정류장이 호텔 정문 앞입니다. 캐리어는 벨보이에 맡기고 3층 프런트로.",
            alt: ""
          }
        },
        {
          id: "d1-4",
          time: "21:45",
          title: "MEGA 돈키호테 시부야",
          jp: "MEGAドン・キホーテ 渋谷",
          hours: "24시간 영업",
          note: "시부야 센터가이 입구 3층 규모. 드럭·과자·생활잡화·기념품을 한 번에 사기 좋습니다. 하치코 출구에서 도보 3~4분. 22:45까지 보고 숙소로 돌아갑니다.",
          img: "images/shibuya-donki.jpg",
          map: "https://maps.google.com/?cid=9124525651654476405",
          leg: {
            type: "walk",
            label: "호텔 → 신주쿠역 도보 8분 + JR 7분",
            detail: "신주쿠역 지하보도로 내려가 JR 山手線(시부야 방면) 2정거장 · 7분 → 시부야역 ハチ公口 → 도보 3~4분",
            alt: "택시로는 약 15분(2,000엔 전후). 어머니가 피곤하시면 택시 추천."
          }
        },
        {
          id: "d1-5",
          time: "22:45",
          title: "숙소 복귀 · 취침",
          jp: "新宿ワシントンホテル",
          hours: "프런트 24시간",
          note: "다음 날 09:40 출발이라 이날은 일찍 정리하는 편이 좋습니다. 운동을 하고 싶으면 본관 지하 에니타임(비지터 10:00~18:30 접수·19:00 퇴관) 또는 도보 5분 FIT PLACE24(24시간·¥2,178) — 꿀팁 탭 참고.",
          img: null,
          map: "https://maps.google.com/?cid=6872319874272201570",
          leg: {
            type: "walk",
            label: "시부야역 → JR 7분 + 도보 8분",
            detail: "ハチ公口에서 山手線 승차 → 신주쿠역 → 지하보도로 니시신주쿠 방면 도보 8분",
            alt: ""
          }
        }
      ],
      meals: [
        {
          slot: "저녁",
          icon: "🍚",
          time: "20:45 ~ 21:20",
          after: "d1-3",
          area: "니시신주쿠 · 호텔 도보 5~10분",
          why: "체크인 직후라 짐을 두고 나갈 수 있고, 21:20에 시부야로 넘어가면 24시간 돈키호테에 늦지 않습니다.",
          options: [
            {
              name: "우오야 후나마사 신주쿠 (魚や舟政)",
              rating: "구글 4.5 (1,301)",
              tabelog: "타베로그 3.29",
              menu: "해산물 이자카야 — 모둠 사시미·숯불구이·사케",
              price: "1인 4,000~6,000엔",
              hours: "15:00~24:00 · 연중무휴",
              tip: "전석 개인실·전좌석 금연이라 어머니 모시고 편합니다. 토요일 밤이라 예약 권장.",
              walk: "호텔 도보 6분",
              img: "images/r-uoya.jpg",
              map: "https://maps.google.com/?cid=7102176867648003687"
            },
            {
              name: "신파치 식당 신주쿠 (しんぱち食堂)",
              rating: "구글 4.0 (1,953)",
              tabelog: "타베로그 3.33",
              menu: "숯불 생선구이 정식(연어·고등어·호케)",
              price: "500~700엔",
              hours: "07:00~22:40",
              tip: "예약 없이 바로 들어가고 10분이면 식사 끝. 도착이 늦어질 때 가장 안전한 선택.",
              walk: "호텔 도보 6분",
              img: "images/r-shimpachi.jpg",
              map: "https://maps.google.com/?cid=14023482379824896455"
            },
            {
              name: "호텔 1층 패밀리마트 · 지하 로손",
              rating: "24시간",
              tabelog: "",
              menu: "도시락·오니기리·샌드위치",
              price: "500~1,200엔",
              hours: "24시간",
              tip: "21:30 넘게 도착하면 이쪽. 3층 프런트 옆 공용 전자레인지를 쓸 수 있습니다.",
              walk: "호텔 건물 안",
              img: null,
              map: "https://maps.google.com/?cid=6872319874272201570"
            }
          ]
        }
      ],
      spots: [
        {
          name: "도쿄도청 남쪽 전망대",
          rating: "구글 4.7 (3,523)",
          walk: "호텔 도보 5분",
          hours: "9:30~21:30 · 화요일 휴관 · 무료",
          note: "45층에서 도쿄 야경. 11/21~23 모두 영업(월요일도 21:30까지). 돈키호테 다녀와서 힘들면 다음 날 밤으로 미뤄도 됩니다.",
          img: "images/s-tokei.jpg",
          map: "https://maps.google.com/?cid=9849659820499292991"
        }
      ]
    },

    /* ───────────────────────── 2일차 ───────────────────────── */
    {
      id: "d2",
      tab: "2일차 (일)",
      date: "11/22",
      weekday: "일",
      title: "신주쿠 → 아카사카 → 하라주쿠 → 시부야",
      summary: "이세탄 10:00 → 아카사카 벼룩시장 → 하라주쿠·오모테산도 8곳 → 시부야 4곳",
      accent: "#2f6f5e",
      stats: [
        { k: "쇼핑", v: "17곳" },
        { k: "이동", v: "도보 중심" },
        { k: "귀숙", v: "20:00" }
      ],
      items: [
        {
          id: "d2-1",
          time: "09:40",
          title: "호텔 출발",
          jp: "新宿ワシントンホテル 出発",
          hours: "24시간 프런트",
          note: "3박 내내 같은 숙소라 짐은 두고 나갑니다. 신주쿠역 지하보도로 동쪽으로 나와 이세탄까지 도보 18분. 오전 5곳 중 이세탄만 10:00에 열어서 여기부터 시작합니다.",
          img: null,
          map: "https://maps.google.com/?cid=6872319874272201570",
          leg: {
            type: "walk",
            label: "도보 약 18분",
            detail: "호텔 → 신주쿠역 지하보도 → 동쪽 출구 → 이세탄 신주쿠",
            alt: "지하보도가 복잡하면 지상으로 나와 新宿三丁目 방면으로 걸어도 같은 시간입니다."
          }
        },
        {
          id: "d2-2",
          time: "10:00",
          title: "이세탄 신주쿠 (본관·멘즈관)",
          jp: "伊勢丹新宿店",
          hours: "10:00~20:00",
          note: "남성복은 멘즈관. 지하 식품관(デパ地下)은 오픈 직후가 가장 한산합니다. 오늘 오전 5곳 중 유일하게 10:00 오픈이라 여기부터 서쪽으로 한 줄로 이동합니다.",
          img: "images/isetan.jpg",
          map: "https://maps.google.com/?cid=10048688310454447541",
          leg: { type: "walk", label: "도보 5분", detail: "이세탄 → 오카다야 빌딩(신주쿠 3-23-17)", alt: "" }
        },
        {
          id: "d2-3",
          time: "10:45",
          title: "오카다야 빌딩 — 키디랜드 1~4F · 짱구 5F",
          jp: "オカダヤビル",
          hours: "10:30~20:30",
          note: "키디랜드(수예·원단)와 짱구 오카시나 모구모구 월드가 한 건물. 엘리베이터 한 번으로 위층까지 이어집니다. 짱구 굿즈는 5층.",
          img: "images/okadaya.jpg",
          map: "https://maps.google.com/?cid=15038129067309236490",
          leg: { type: "walk", label: "도보 1분 (45m)", detail: "오카다야 → ARC'TERYX 신주쿠", alt: "" }
        },
        {
          id: "d2-4",
          time: "11:10",
          title: "ARC'TERYX 신주쿠 브랜드 스토어",
          jp: "アークテリクス 新宿ブランドストア",
          hours: "11:00~20:00",
          note: "11:00 오픈이라 이 순서면 딱 맞습니다. 한국보다 사이즈·색상이 넓고, 면세는 여권 지참.",
          img: "images/arcteryx.jpg",
          map: "https://maps.google.com/?cid=12258450041815044576",
          leg: { type: "walk", label: "도보 6분", detail: "아크테릭스 → 루미네에스트 신주쿠 B2F", alt: "" }
        },
        {
          id: "d2-5",
          time: "11:40",
          title: "BEAMS 신주쿠 (루미네에스트 B2F)",
          jp: "ビームス 新宿",
          hours: "10:30~21:00",
          note: "신주쿠역 동쪽 출구 바로 위. 여기서 新宿三丁目역(丸ノ内線)으로 내려가 아카사카로 넘어갑니다.",
          img: "images/beams.jpg",
          map: "https://maps.google.com/?cid=4571059030974543044",
          leg: {
            type: "train",
            label: "丸ノ内線 新宿三丁目 → 赤坂見附 8분",
            detail: "BEAMS에서 新宿三丁目역 도보 4분 → 丸ノ内線 8분(178엔) → 赤坂見附 하차 → 溜池山王 방면 지하통로 → 13번 출구로 나오면 광장까지 도보 1분",
            alt: "赤坂見附에서 지상으로 나와 걸으면 16분(1.2km)이라 지하통로 쪽이 편합니다."
          }
        },
        {
          id: "d2-6",
          time: "12:10",
          title: "아카사카 벼룩시장 (아크힐즈 카라얀 광장)",
          jp: "赤坂蚤の市 · アークヒルズ カラヤン広場",
          hours: "11:00~18:00 · 입장 무료 · 우천 시 중단",
          note: "제152회 크리스마스 특별회, 130여 부스. 안티크·빈티지 의류·주얼리 중심. 광장 안이 아니라 아크 모리 빌딩 쪽으로 들어가면 실내 대기 공간도 있습니다.",
          img: "images/akasaka-market.jpg",
          map: "https://maps.google.com/?cid=7184286848769593977",
          leg: {
            type: "train",
            label: "銀座線 → 表参道 환승 → 明治神宮前 13분",
            detail: "13:30 광장 출발 → 溜池山王역 銀座線 → 表参道에서 千代田線 환승 → 明治神宮前 하차 (약 13분) → 2·3번 출구 도보 1분",
            alt: "タクシーなら約15분(2,000엔 전후). 3인이라 전철과 비용 차이가 크지 않습니다."
          }
        },
        {
          id: "d2-7",
          time: "14:00",
          title: "OSHMAN'S 하라주쿠",
          jp: "オッシュマンズ 原宿店",
          hours: "11:00~20:00",
          note: "明治神宮前역 2·3번 출구 도보 1분, 위드 하라주쿠 2·3F. 여기서부터 하라주쿠~시부야를 북 → 남으로 한 줄로 내려옵니다(되돌아감 없음).",
          img: "images/oshmans.jpg",
          map: "https://maps.google.com/?cid=9882180480728706498",
          leg: { type: "walk", label: "도보 7분", detail: "OSHMAN'S → Hummingbirds' hill (진구마에 3-27-22)", alt: "" }
        },
        {
          id: "d2-8",
          time: "14:40",
          title: "Hummingbirds' hill shop",
          jp: "ハミングバーズヒル ショップ",
          hours: "11:00~20:00",
          note: "이 구간의 최북단. 여기까지 올라온 뒤로는 남쪽으로만 내려갑니다.",
          img: "images/hummingbirds.jpg",
          map: "https://maps.google.com/?cid=1374394553814675223",
          leg: { type: "walk", label: "도보 4분", detail: "오모테산도 가로수를 따라 내려옵니다", alt: "" }
        },
        {
          id: "d2-9",
          time: "15:05",
          title: "côte&ciel Tokyo",
          jp: "コートエシエル 東京",
          hours: "11:00~19:00",
          note: "진구마에 3-18-22. 가방·백팩 위주라 20분이면 충분합니다.",
          img: "images/cote-ciel.jpg",
          map: "https://maps.google.com/?cid=7071675195158719693",
          leg: { type: "walk", label: "도보 2분", detail: "", alt: "" }
        },
        {
          id: "d2-10",
          time: "15:25",
          title: "Ralph Lauren Omotesando",
          jp: "ラルフローレン 表参道",
          hours: "11:00~20:00",
          note: "매장 안에 랄프스 커피가 있습니다. 여기서 20분 쉬어 가는 걸 권합니다 — 오늘 유일한 앉는 구간입니다.",
          img: "images/ralph-lauren.jpg",
          map: "https://maps.google.com/?cid=18134942615298900179",
          leg: { type: "walk", label: "도보 6분", detail: "오모테산도 → 하라주쿠 방향", alt: "" }
        },
        {
          id: "d2-11",
          time: "15:55",
          title: "Harry Potter Shop Harajuku",
          jp: "ハリー・ポッター ショップ 原宿",
          hours: "11:00~21:00",
          note: "2층 버터비어 바에서 버터비어와 아이스크림. 여동생분과 사진 남기기 좋은 곳입니다.",
          img: "images/harry-potter.jpg",
          map: "https://maps.google.com/?cid=3840542123008475986",
          leg: { type: "walk", label: "도보 6분", detail: "", alt: "" }
        },
        {
          id: "d2-12",
          time: "16:25",
          title: "RAGTAG 하라주쿠",
          jp: "ラグタグ 原宿",
          hours: "11:00~20:00",
          note: "휴릭 진구마에 1·2F. 중고 명품·빈티지. 상태 등급이 표기돼 있어 비교 shopping이 편합니다.",
          img: "images/ragtag.jpg",
          map: "https://maps.google.com/?cid=15427969971660052394",
          leg: { type: "walk", label: "도보 3분", detail: "", alt: "" }
        },
        {
          id: "d2-13",
          time: "16:50",
          title: "DANTON TOKYO",
          jp: "ダントン 東京",
          hours: "11:00~20:00",
          note: "진구마에 6-12-17 다이아몬드 빌딩 1F. 작업복 계열 아우터가 많습니다.",
          img: "images/danton.jpg",
          map: "https://maps.google.com/?cid=3286721948833497824",
          leg: { type: "walk", label: "도보 3분", detail: "", alt: "" }
        },
        {
          id: "d2-14",
          time: "17:10",
          title: "Patagonia Tokyo Shibuya",
          jp: "パタゴニア 東京 渋谷",
          hours: "11:00~19:00 (수요일 휴무)",
          note: "진구마에 6-16-8. 19:00 마감이라 이 시간대가 마지막입니다.",
          img: "images/patagonia.jpg",
          map: "https://maps.google.com/?cid=9042211536900144705",
          leg: { type: "walk", label: "도보 7분", detail: "미야시타파크 방향", alt: "" }
        },
        {
          id: "d2-15",
          time: "17:40",
          title: "Maison Kitsuné 미야시타파크 (RAYARD NORTH 2F)",
          jp: "メゾン キツネ 宮下パーク",
          hours: "11:00~21:00",
          note: "이번 일정은 미야시타파크점으로 확정. 파타고니아에서 330m, 이어지는 진난 상점가까지 130m라 동선이 끊기지 않습니다.",
          img: "images/kitsune.jpg",
          map: "https://maps.google.com/?cid=14579441227567108828",
          leg: { type: "walk", label: "도보 3분", detail: "", alt: "" }
        },
        {
          id: "d2-16",
          time: "18:15",
          title: "FREAK'S STORE 시부야",
          jp: "フリークス ストア 渋谷",
          hours: "12:00~20:30 (일요일 12:00 오픈)",
          note: "진난 1-13-1 M빌딩. 미국 캐주얼 편집숍.",
          img: "images/freaks.jpg",
          map: "https://maps.google.com/?cid=13016080179487620260",
          leg: { type: "walk", label: "도보 1분", detail: "", alt: "" }
        },
        {
          id: "d2-17",
          time: "18:40",
          title: "SUN HOUSE 진난",
          jp: "サンハウス 神南",
          hours: "11:00~20:30",
          note: "진난 1-16-3. 오늘 문 연 곳 중 마감이 가장 늦어 마지막 쇼핑으로 좋습니다.",
          img: "images/sunhouse.jpg",
          map: "https://maps.google.com/?cid=14088655221653192636",
          leg: { type: "walk", label: "도보 2분", detail: "", alt: "" }
        },
        {
          id: "d2-18",
          time: "19:00",
          title: "2nd STREET 시부야 진난점",
          jp: "セカンドストリート 渋谷神南店",
          hours: "11:00~21:00",
          note: "시부야 구간 최남단. 여기서 숙소로 올라가기만 하면 됩니다.",
          img: "images/secondstreet.jpg",
          map: "https://maps.google.com/?cid=3790135795445788292",
          leg: {
            type: "train",
            label: "시부야역 도보 3분 + JR 7분",
            detail: "19:40 시부야역 → JR 山手線 → 신주쿠역 19:47 → 지하보도 도보 8분 → 호텔 20:00",
            alt: ""
          }
        },
        {
          id: "d2-19",
          time: "20:00",
          title: "신주쿠 워싱턴 복귀",
          jp: "新宿ワシントンホテル",
          hours: "24시간",
          note: "짐 내려놓고 바로 저녁. 호텔 1층 편의점에서 맥주 한 캔 사다 놓으면 방에서 마무리하기 좋습니다.",
          img: "images/shinjuku-station.jpg",
          map: "https://maps.google.com/?cid=6872319874272201570"
        }
      ],
      meals: [
        {
          slot: "아침",
          icon: "🌅",
          time: "08:30 ~ 09:15",
          after: "__start",
          area: "숙소 도보 6분 · 니시신주쿠",
          why: "예약에 조식이 포함돼 있지 않습니다. 09:40 출발 전에 07:00 오픈하는 생선구이 정식집에서 먹으면 오전 일정이 12시까지 끊기지 않습니다.",
          options: [
            {
              name: "신파치 식당 신주쿠 (しんぱち食堂)",
              rating: "구글 4.0 (1,953)",
              tabelog: "타베로그 3.33",
              menu: "숯불 생선구이 아침정식 · 미소시루 · 반찬",
              price: "500~700엔",
              hours: "07:00~22:40",
              tip: "주문 후 5분이면 나옵니다. 3명이 앉을 테이블도 있습니다.",
              walk: "호텔 도보 6분",
              img: "images/r-shimpachi.jpg",
              map: "https://maps.google.com/?cid=14023482379824896455"
            },
            {
              name: "호텔 1층 패밀리마트",
              rating: "24시간",
              tabelog: "",
              menu: "오니기리·샌드위치·커피",
              price: "300~800엔",
              hours: "24시간",
              tip: "시간이 밀릴 때. 3층 전자레인지로 데워 먹을 수 있습니다.",
              walk: "호텔 1층",
              img: null,
              map: "https://maps.google.com/?cid=6872319874272201570"
            }
          ]
        },
        {
          slot: "점심",
          icon: "🍣",
          time: "12:10 ~ 13:20",
          after: "d2-6",
          area: "아크힐즈 안 · 시장에서 도보 1~3분",
          why: "벼룩시장이 12:10에 가장 붐비는 시간이라, 시장을 30분 본 뒤 아크 모리 빌딩 안에서 먹고 다시 나오는 편이 줄을 덜 섭니다.",
          options: [
            {
              name: "쯔지한 아크힐즈점 (つじ半)",
              rating: "구글 4.5 (1,892)",
              tabelog: "타베로그 3.51",
              menu: "해산물동 '제이타쿠동' 梅·竹·松·特上 (마지막에 다시마 국물을 부어 오차즈케로)",
              price: "1,200~2,500엔 · 예산 1,000~1,999엔",
              hours: "11:00~20:30 (일요일) · 전석 금연 20석",
              tip: "예약 가능하지만 12시 넘으면 20~30분 줄. 12:00 전 입장을 권합니다.",
              walk: "광장에서 도보 1분 (아크 모리 빌딩 3F)",
              img: "images/r-tsujihan.jpg",
              map: "https://maps.google.com/?cid=2653783987035612021"
            },
            {
              name: "교토타츠 아크힐즈 사우스타워 (京辰)",
              rating: "구글 4.3 (120)",
              tabelog: "",
              menu: "스시·회 정식",
              price: "1,500~3,000엔",
              hours: "11:00~15:00 / 17:00~21:30",
              tip: "쯔지한 줄이 길면 여기. 같은 블록이라 2분.",
              walk: "광장에서 도보 2분",
              img: "images/r-kyotatsu.jpg",
              map: "https://maps.google.com/?cid=2037384882661278806"
            },
            {
              name: "라멘 다나카 소바 아크힐즈 (ラーメン田中そば)",
              rating: "구글 4.1 (577)",
              tabelog: "",
              menu: "기타카타 라멘·차슈멘",
              price: "900~1,400엔",
              hours: "11:00~20:00",
              tip: "빠르게 먹고 시장으로 복귀할 때. 아크 모리 빌딩 3F.",
              walk: "광장에서 도보 1분",
              img: "images/r-tanaka.jpg",
              map: "https://maps.google.com/?cid=1077148071017739501"
            }
          ],
          note: "돈카츠 백명점 '마사무네'(타베로그 3.70)는 일요일 휴무라 이번 날은 뺐습니다."
        },
        {
          slot: "카페",
          icon: "☕",
          time: "15:25 ~ 15:45",
          after: "d2-10",
          area: "오모테산도 · 랄프로렌 매장 1층",
          why: "오후 3시 반이 오늘 걸음이 가장 많은 구간입니다. 여기서 20분 앉아야 남은 8곳을 무리 없이 돕니다.",
          options: [
            {
              name: "랄프스 커피 오모테산도 (Ralph's Coffee)",
              rating: "구글 4.0 (735)",
              tabelog: "",
              menu: "아메리카노·라테·스콘",
              price: "600~1,200엔",
              hours: "10:00~19:00",
              tip: "매장 안이라 쇼핑과 함께. 테라스 자리 있음.",
              walk: "랄프로렌 매장 안",
              img: "images/r-ralphs.jpg",
              map: "https://maps.google.com/?cid=13180997183820413679"
            },
            {
              name: "차테이 하토 (茶亭 羽当) — 시부야",
              rating: "구글 4.1 (2,165)",
              tabelog: "",
              menu: "핸드드립 커피·치즈케이크 (1970년대 찻집)",
              price: "1,000~2,000엔",
              hours: "11:00~23:00",
              tip: "시부야 구간(18:40)으로 미룰 수 있는 대안. 진난에서 도보 6분.",
              walk: "시부야 1-15-19 · 진난에서 도보 6분",
              img: "images/s-hatou.jpg",
              map: "https://maps.google.com/?cid=9376497034417561664"
            }
          ]
        },
        {
          slot: "저녁",
          icon: "🍖",
          time: "20:05 ~ 21:30",
          after: "d2-19",
          area: "신주쿠 · 호텔 도보 5~10분",
          why: "20:00 귀숙 후라 짐을 두고 나갈 수 있습니다. 시부야에서 먼저 먹고 오려면 19:00에 2nd STREET을 나와야 해서 조금 빡빡합니다.",
          options: [
            {
              name: "우오야 후나마사 신주쿠 (魚や舟政)",
              rating: "구글 4.5 (1,301)",
              tabelog: "타베로그 3.29",
              menu: "해산물 이자카야 — 사시미·숯불구이·사케",
              price: "1인 4,000~6,000엔",
              hours: "15:00~24:00 · 연중무휴",
              tip: "전석 개인실·금연. 어머니와 3인이 저녁 술 한잔하기 가장 편한 구조입니다.",
              walk: "호텔 도보 6분",
              img: "images/r-uoya.jpg",
              map: "https://maps.google.com/?cid=7102176867648003687"
            },
            {
              name: "USHIGORO S. 신주쿠",
              rating: "구글 4.3 (644)",
              tabelog: "타베로그 3.76",
              menu: "야끼니꾸 코스 (전석 완전 개인실)",
              price: "3인 디너 25,000엔(Q코스)부터",
              hours: "17:00~23:30 (월요일은 12:00 런치도)",
              tip: "오늘의 하이라이트로 쓰기 좋은 곳. 예약 필수, 3인은 코스만 가능합니다.",
              walk: "호텔 도보 5분",
              img: "images/r-ushigoro.jpg",
              map: "https://maps.google.com/?cid=12701156086639784456"
            },
            {
              name: "교토 가츠규 시부야 도겐자카 (규카츠)",
              rating: "구글 4.8 (6,389)",
              tabelog: "타베로그 3.10",
              menu: "규카츠 정식·규카츠 스키야키",
              price: "1,500~2,500엔",
              hours: "10:30~22:00",
              tip: "시부야에서 먹고 21:00 귀숙하는 대안. 테이블석 위주라 모토무라(대기 30~60분)보다 편합니다.",
              walk: "2nd STREET에서 도보 5분",
              img: "images/r-katsugyu.jpg",
              map: "https://maps.google.com/?cid=11439916912159261095"
            }
          ]
        }
      ],
      spots: [
        {
          name: "도큐 플라자 오모테산도 'OMOKADO' 옥상정원",
          rating: "구글 4.1 (3,742)",
          walk: "오모테산도 교차로 · 랄프로렌에서 도보 4분",
          hours: "11:00~20:00 · 무료",
          note: "6층 옥상정원에서 오모테산도 가로수길이 한눈에. 15:25 카페 앞뒤 15분이면 충분합니다.",
          img: "images/s-omokado.jpg",
          map: "https://maps.google.com/?cid=14615084664525387832"
        },
        {
          name: "차테이 하토 (茶亭 羽当)",
          rating: "구글 4.1 (2,165)",
          walk: "시부야 1-15-19 · 2nd STREET에서 도보 6분",
          hours: "11:00~23:00",
          note: "1970년대 그대로인 찻집. 오늘 걷느라 지쳤으면 랄프스 커피 대신 여기서 30분 쉬고 귀숙해도 됩니다.",
          img: "images/s-hatou.jpg",
          map: "https://maps.google.com/?cid=9376497034417561664"
        }
      ]
    },

    /* ───────────────────────── 3일차 ───────────────────────── */
    {
      id: "d3",
      tab: "3일차 (월)",
      date: "11/23",
      weekday: "월 · 공휴일",
      title: "유라쿠초 → 마루노우치 → 긴자 → 에비스 → 롯폰기",
      summary: "오에도 골동품시장 09:00 → 긴자 → 카피탈 에비스 → 롯폰기 일루미네이션 → 생일 저녁",
      accent: "#b0741e",
      stats: [
        { k: "공휴일", v: "근로감사의 날" },
        { k: "점심", v: "긴자 스시" },
        { k: "생일 저녁", v: "20:10" }
      ],
      items: [
        {
          id: "d3-1",
          time: "08:20",
          title: "호텔 출발 → 신주쿠역",
          jp: "新宿駅 08:38発",
          hours: "中央線快速 → 神田 환승 → 山手線",
          note: "신주쿠역까지 도보 10분. 08:38 中央線快速(東京 방면) → 神田에서 山手線 환승 → 有楽町 08:59 도착, 21분·253엔.",
          img: "images/shinjuku-station.jpg",
          map: "https://maps.google.com/?cid=2031864442327465429",
          leg: {
            type: "train",
            label: "JR 21분 · 253엔",
            detail: "新宿 08:38 → 神田 환승 → 有楽町 08:59 → 국제포럼까지 도보 2분 (D5 출구 지하 콘코스 직결)",
            alt: "08:30 이전 출발이면 山手線만으로 30분. 공휴일 아침이라 좌석은 여유롭습니다."
          }
        },
        {
          id: "d3-2",
          time: "09:00",
          title: "오에도 골동품 시장 (도쿄국제포럼 지상광장)",
          jp: "大江戸骨董市 · 東京国際フォーラム地上広場",
          hours: "09:00~16:00 · 입장 무료 · 우천 중지",
          note: "250여 점포, 11/23 공휴일 개최 확정. 유라쿠초역 D5 출구에서 지하 콘코스로 바로 연결됩니다. 오전 9~10시가 골동품 상태가 가장 좋고 사람도 적습니다.",
          img: "images/tokyo-forum.jpg",
          map: "https://maps.google.com/?cid=18267525591821019257",
          leg: {
            type: "walk",
            label: "도보 7분 (550m)",
            detail: "국제포럼 → 도쿄역 마루노우치 방향 → 신마루노우치 빌딩 4F",
            alt: ""
          }
        },
        {
          id: "d3-3",
          time: "11:00",
          title: "THE NORTH FACE 마루노우치",
          jp: "ザ・ノース・フェイス 丸の内",
          hours: "11:00~21:00",
          note: "신마루노우치 빌딩 4F. 퍼플라벨 라인이 있는 매장. 11:00 오픈이라 이 순서입니다.",
          img: "images/tnf-marunouchi.jpg",
          map: "https://maps.google.com/?cid=1025198435240098873",
          leg: {
            type: "walk",
            label: "도보 18분 (1.5km)",
            detail: "마루노우치 → 교바시. 도쿄역 八重洲 쪽을 지나 남동으로",
            alt: "걷기 부담되면 東京역에서 山手線 1정거장(有楽町) 후 도보 6분, 또는 タクシー 5분"
          }
        },
        {
          id: "d3-4",
          time: "11:45",
          title: "mont-bell 도쿄 교바시점",
          jp: "モンベル 東京京橋店",
          hours: "11:00~21:00",
          note: "도쿄 스퀘어 가든 1·2F, 교바시역 직결. 아웃도어 장비가 넓게 있어 아크테릭스와 비교하기 좋습니다.",
          img: "images/montbell.jpg",
          map: "https://maps.google.com/?cid=18111296058751286170",
          leg: { type: "walk", label: "도보 4분 (300m)", detail: "교바시 → 긴자 2초메", alt: "" }
        },
        {
          id: "d3-5",
          time: "12:15",
          title: "KOMEHYO GINZA",
          jp: "コメ兵 銀座",
          hours: "11:00~20:00",
          note: "긴자 2-7-18, 중고 명품. 1층 시계·주얼리, 위층 가방. 여권 지참하면 면세.",
          img: "images/komehyo.jpg",
          map: "https://maps.google.com/?cid=17159265092369514558",
          leg: { type: "walk", label: "도보 3분", detail: "긴자 2초메 → 3초메 (MUJI 긴자)", alt: "" }
        },
        {
          id: "d3-6",
          time: "13:45",
          title: "MUJI 긴자 (무인양품)",
          jp: "無印良品 銀座",
          hours: "11:00~21:00",
          note: "지하 1층부터 6층까지. 문구·식품·의류를 한 번에. 6층에는 디자인 문화 공간이 있습니다.",
          img: "images/muji-ginza.jpg",
          map: "https://maps.google.com/?cid=771702428473144825",
          leg: {
            type: "train",
            label: "日比谷線 銀座 → 恵比寿 16분",
            detail: "긴자역 도보 5분 → 日比谷線(中目黒 방면) 16분·209엔 → 恵比寿역 東口 → 카피탈까지 도보 6분",
            alt: ""
          }
        },
        {
          id: "d3-7",
          time: "15:20",
          title: "KAPITAL TOKYO NAKED STORE",
          jp: "キャピタル 東京ネイキッドストア",
          hours: "11:00~20:00 · 공휴일 정상 영업",
          note: "에비스미나미 2-20-2. 11/18 전화 확인으로 공휴일 정상 영업(연말연시 외 연중무휴). 카피탈 3개 매장 중 최북단이라 여기서부터 남쪽으로 내려갑니다.",
          img: "images/kapital.jpg",
          map: "https://maps.google.com/?cid=3504688113222414750",
          leg: { type: "walk", label: "도보 1분", detail: "", alt: "" }
        },
        {
          id: "d3-8",
          time: "15:50",
          title: "Duffle with KAPITAL",
          jp: "ダッフル ウィズ キャピタル",
          hours: "11:00~20:00",
          note: "가방·모자·신발·반다나 등 잡화, 아카이브가 3개 층. 2-24-2.",
          img: "images/duffle-kapital.jpg",
          map: "https://maps.google.com/?cid=4955929520084932929",
          leg: { type: "walk", label: "도보 2분", detail: "", alt: "" }
        },
        {
          id: "d3-9",
          time: "16:15",
          title: "KAPITAL Legs Craftsman Store",
          jp: "キャピタル レッグス クラフツマンストア",
          hours: "11:00~20:00",
          note: "데님·팬츠 특화, 수선 공방 병설. 2-23-12.",
          img: "images/legs-kapital.jpg",
          map: "https://maps.google.com/?cid=8243935970920433661",
          leg: { type: "walk", label: "도보 1분", detail: "", alt: "" }
        },
        {
          id: "d3-10",
          time: "16:40",
          title: "RECTOHALL (에비스)",
          jp: "レクトホール",
          hours: "12:00~19:00 · 공휴일 영업",
          note: "공식 안내는 '월요일 휴무, 단 공휴일 월요일은 영업하고 다음날 화요일 휴무' → 11/23 정상 영업. 구글 지도에는 '월요일 휴무'로만 나오니 참고.",
          img: "images/rectohall.jpg",
          map: "https://maps.google.com/?cid=16254508638521557928",
          leg: {
            type: "train",
            label: "日比谷線 5분 · 178엔",
            detail: "에비스역 도보 7분 → 日比谷線 2정거장 5분 → 六本木역 1C 출구로 나오면 롯폰기 힐즈와 지하 콘코스 직결",
            alt: "1C 출구가 힐즈 직결이라 계단 없이 올라갑니다."
          }
        },
        {
          id: "d3-11",
          time: "17:00",
          title: "롯폰기 힐즈 크리스마스 마켓 (오야네 광장)",
          jp: "六本木ヒルズ クリスマスマーケット",
          hours: "11:00~21:00 · 입장 무료 (11/21~12/25)",
          note: "20회 기념 특별회 — 독일 10개 매장(글뤼바인·소시지·슈트렌). 해가 지면 불빛이 들어옵니다. 광장은 야외라 얇은 겉옷 챙기세요.",
          img: "images/roppongi-hills.jpg",
          map: "https://maps.google.com/?cid=8309528121310561895",
          leg: { type: "walk", label: "도보 5분", detail: "오야네 광장 → 게야키자카 거리", alt: "" }
        },
        {
          id: "d3-12",
          time: "17:55",
          title: "게야키자카 일루미네이션",
          jp: "けやき坂イルミネーション",
          hours: "17:00~23:00 점등",
          note: "도쿄타워가 겹쳐 보이는 명당은 게야키자카 다리 위. 17시 점등이라 이 시간이 딱 좋습니다.",
          img: "images/roppongi-view.jpg",
          map: "https://maps.google.com/?cid=12063536569698439509",
          leg: {
            type: "train",
            label: "都営大江戸線 9분 · 220엔",
            detail: "六本木역 3번 출구(지상 도보 4분) → 大江戸線 → 新宿역 9분 → 지상으로 나와 도보 10분 → L-Breath",
            alt: "大江戸線 新宿역은 지하 깊어 엘리베이터로 올라옵니다."
          }
        },
        {
          id: "d3-13",
          time: "19:15",
          title: "L-Breath 신주쿠",
          jp: "エルブレス 新宿",
          hours: "11:00~22:00",
          note: "아웃도어 대형 매장. 오늘 마지막 쇼핑. 20:00에 나와 호텔까지 도보 10분.",
          img: "images/lbreath.jpg",
          map: "https://maps.google.com/?cid=67978450380853922",
          leg: { type: "walk", label: "도보 10분", detail: "신주쿠 4-1-11 → 니시신주쿠 호텔", alt: "" }
        },
        {
          id: "d3-14",
          time: "20:10",
          title: "생일 저녁 · 숙소 복귀",
          jp: "新宿ワシントンホテル",
          hours: "24시간",
          note: "오늘은 호진님과 여동생분 음력 생일이 겹치는 날. 저녁은 아래 후보 중 하나로 예약하세요. 식사 후 21:40 호텔, 다음 날 10:38 N'EX라 늦지 않게.",
          img: "images/washington-hotel.jpg",
          map: "https://maps.google.com/?cid=6872319874272201570"
        }
      ],
      meals: [
        {
          slot: "아침",
          icon: "🌅",
          time: "07:40 ~ 08:10",
          after: "__start",
          area: "숙소 도보 6분",
          why: "08:20 출발이라 40분 안에 끝내야 합니다. 07:00에 여는 집이라 시간이 맞습니다.",
          options: [
            {
              name: "신파치 식당 신주쿠 (しんぱち食堂)",
              rating: "구글 4.0 (1,953)",
              tabelog: "타베로그 3.33",
              menu: "생선구이 아침정식",
              price: "500~700엔",
              hours: "07:00~22:40",
              tip: "빠르게 먹고 08:05까지 나오면 08:20 출발에 맞습니다.",
              walk: "호텔 도보 6분",
              img: "images/r-shimpachi.jpg",
              map: "https://maps.google.com/?cid=14023482379824896455"
            },
            {
              name: "호텔 1층 패밀리마트",
              rating: "24시간",
              tabelog: "",
              menu: "오니기리·샌드위치",
              price: "300~800엔",
              hours: "24시간",
              tip: "전날 밤에 미리 사 두면 아침이 가장 빠릅니다.",
              walk: "호텔 1층",
              img: null,
              map: "https://maps.google.com/?cid=6872319874272201570"
            }
          ]
        },
        {
          slot: "점심",
          icon: "🍣",
          time: "12:50 ~ 13:40",
          after: "d3-5",
          area: "긴자 · KOMEHYO·MUJI 도보 3~7분",
          why: "KOMEHYO 보고 MUJI로 넘어가기 전에 먹는 자리. 긴자 스시 런치는 13:30이 지나면 재료가 떨어지는 집이 있어 12:50 입장이 안전합니다.",
          options: [
            {
              name: "긴자 시몬 (銀座 鰤門)",
              rating: "구글 4.4 (796)",
              tabelog: "타베로그 3.52",
              menu: "스시 런치 코스 · 회 정식",
              price: "런치 7,480엔~ · 디너 18,000엔~",
              hours: "11:30~15:00 / 17:00~22:00 · 연중무휴",
              tip: "개인실 5실이라 어머니 모시고 조용히. 공휴일에도 영업, 예약 권장.",
              walk: "KOMEHYO에서 도보 7분 (긴자 5-5-13 6F)",
              img: "images/r-seamon.jpg",
              map: "https://maps.google.com/?cid=3596771567629889380"
            },
            {
              name: "텐동전문 긴자 이츠키 (天丼専門 銀座いつき)",
              rating: "구글 4.3 (1,661)",
              tabelog: "타베로그 3.47",
              menu: "텐동(새우 2·닭 2·계절 채소 4) + 계란찜·미소시루",
              price: "1,000~1,500엔",
              hours: "11:00~15:30 (L.O. 15:00) / 17:30~23:15",
              tip: "예약 불가·현금만. 오픈 직후나 14:00 이후가 줄이 짧습니다.",
              walk: "KOMEHYO에서 도보 5분 (긴자 인즈1 2F)",
              img: "images/r-itsuki.jpg",
              map: "https://maps.google.com/?cid=14057401687032445773"
            },
            {
              name: "MUJI Diner 긴자 (MUJI 긴자 B1)",
              rating: "구글 3.5 (787)",
              tabelog: "",
              menu: "일본 가정식·샐러드·디저트",
              price: "1,500~2,500엔",
              hours: "11:00~21:00",
              tip: "동선 0분. 무인양품 구경하다 바로 내려가 앉기 좋습니다.",
              walk: "MUJI 긴자 건물 B1",
              img: "images/r-muji-diner.jpg",
              map: "https://maps.google.com/?cid=4690048552505918702"
            }
          ],
          note: "긴자 鮨まる伊(구글 4.3)는 월요일 휴무로 표기돼 11/23 후보에서 제외했습니다."
        },
        {
          slot: "카페",
          icon: "☕",
          time: "14:20 ~ 14:55",
          after: "d3-6",
          area: "긴자 4초메 · MUJI에서 도보 5분",
          why: "에비스로 넘어가기 전 30분. 공휴일 오후라 유명 찻집은 줄이 길어, 줄이 길면 MUJI Diner로 바로 대체할 수 있게 두 곳을 넣었습니다.",
          options: [
            {
              name: "喫茶YOU (기사 유)",
              rating: "구글 4.0 (2,062)",
              tabelog: "타베로그 3.72 · 喫茶百名店 2026",
              menu: "명물 오믈렛라이스·푸딩·블렌드 커피",
              price: "1,000~2,000엔",
              hours: "11:00~16:30 (L.O. 16:00) · 수요일 휴무 → 11/23 영업",
              tip: "예약 불가·현금만. 줄이 20분 이상이면 MUJI Diner로.",
              walk: "MUJI에서 도보 5분 (긴자 4-13-17)",
              img: "images/r-kissa-you.jpg",
              map: "https://maps.google.com/?cid=5254053800351163798"
            },
            {
              name: "MUJI Diner 긴자",
              rating: "구글 3.5 (787)",
              tabelog: "",
              menu: "커피·디저트",
              price: "600~1,500엔",
              hours: "11:00~21:00",
              tip: "동선 0분 대체안.",
              walk: "MUJI 긴자 B1",
              img: "images/r-muji-diner.jpg",
              map: "https://maps.google.com/?cid=4690048552505918702"
            }
          ]
        },
        {
          slot: "생일 저녁",
          icon: "🎂",
          time: "20:10 ~ 21:40",
          after: "d3-14",
          area: "신주쿠(기본) · 에비스·롯폰기 조정안 포함",
          why: "원래 일정(롯폰기 야경 17:55)을 지키면 신주쿠 20:10이 가장 자연스럽습니다. 에비스에서 먼저 먹는 안은 롯폰기 야경을 19:30 이후로 미루는 조건입니다.",
          options: [
            {
              name: "우오야 후나마사 신주쿠 (魚や舟政)",
              rating: "구글 4.5 (1,301)",
              tabelog: "타베로그 3.29",
              menu: "해산물 이자카야 — 사시미·숯불구이·사케",
              price: "1인 4,000~6,000엔",
              hours: "15:00~24:00 · 연중무휴",
              tip: "개인실·금연이라 생일 저녁으로 가장 편안. 20:10 예약.",
              walk: "호텔 도보 6분",
              img: "images/r-uoya.jpg",
              map: "https://maps.google.com/?cid=7102176867648003687"
            },
            {
              name: "USHIGORO S. 신주쿠",
              rating: "구글 4.3 (644)",
              tabelog: "타베로그 3.76",
              menu: "야끼니꾸 코스 (전석 완전 개인실)",
              price: "1인 25,000엔(Q코스)부터",
              hours: "17:00~23:30",
              tip: "기념일다운 야끼니꾸. 3인 예약 시 코스만 가능, 미리 예약.",
              walk: "호텔 도보 5분",
              img: "images/r-ushigoro.jpg",
              map: "https://maps.google.com/?cid=12701156086639784456"
            },
            {
              name: "에비스 요로니쿠 (蕃 YORONIKU)",
              rating: "구글 4.6 (1,103)",
              tabelog: "타베로그 4.25 (2026 실버)",
              menu: "야끼니꾸 오마카세 코스",
              price: "1인 14,900엔 + 서비스료 10%",
              hours: "17:00~24:00 · 월요일 영업",
              tip: "에비스 쇼핑 직후 17:00 슬롯으로 잡고 롯폰기를 19:30에 보는 조정안. TableCheck 예약.",
              walk: "에비스역 도보 3분 (GEMS 8F)",
              img: "images/r-yoroniku.jpg",
              map: "https://maps.google.com/?cid=8180550300697386920"
            },
            {
              name: "에비스 스시 하츠메 (恵比寿 鮨 はつめ)",
              rating: "구글 4.7 (686)",
              tabelog: "타베로그 3.55",
              menu: "스시 오마카세 22품",
              price: "1인 10,890엔~",
              hours: "17:00~23:00",
              tip: "같은 조정안. 17:00·19:30 슬롯, 3인 가능. 하이퀄리티 스시를 원하실 때.",
              walk: "에비스역 도보 5분",
              img: "images/r-hatsume.jpg",
              map: "https://maps.google.com/?cid=13486702778845562549"
            },
            {
              name: "야키토리 하치베에 롯폰기",
              rating: "구글 4.3 (296)",
              tabelog: "타베로그 3.54",
              menu: "야키토리 코스·사케",
              price: "1인 6,000~9,000엔",
              hours: "17:30~22:00",
              tip: "마켓 직후 18:00에 가볍게. 개인실 있음.",
              walk: "롯폰기 힐즈에서 도보 6분 (B1F)",
              img: "images/r-hachibei.jpg",
              map: "https://maps.google.com/?cid=7795425068181862802"
            }
          ],
          note: "11/23은 공휴일이라 인기 점은 TableCheck 슬롯이 빨리 닫힙니다. 3인 예약은 출발 전에 넣어 두세요."
        }
      ],
      spots: [
        {
          name: "KITTE 가든 (KITTE 마루노우치 6F 옥상)",
          rating: "구글 4.5 (1,165)",
          walk: "도쿄역 마루노우치 · 국제포럼에서 도보 6분",
          hours: "11:00~23:00 · 무료",
          note: "도쿄역 붉은 벽돌을 정면으로 보는 옥상 정원. 10:40 시장을 나와 11:00 노스페이스 전에 15분 들를 수 있습니다.",
          img: "images/s-kitte.jpg",
          map: "https://maps.google.com/?cid=5275111559213559413"
        },
        {
          name: "나카무라 토키치 긴자점 (中村藤吉)",
          rating: "구글 4.3 (1,724)",
          walk: "긴자 6-10-1 4F · MUJI에서 도보 6분",
          hours: "10:30~20:30",
          note: "우지 말차 전문점. 말차 젤리·파르페가 유명합니다. 오후 카페를 여기로 바꿔도 좋습니다(대기 15~30분).",
          img: "images/s-tokichi.jpg",
          map: "https://maps.google.com/?cid=9988850302213000169"
        }
      ]
    },

    /* ───────────────────────── 4일차 ───────────────────────── */
    {
      id: "d4",
      tab: "4일차 (화)",
      date: "11/24",
      weekday: "화",
      title: "귀국 · 신주쿠 → 나리타",
      summary: "07:40 아침 → 10:05 체크아웃 → N'EX 10:38 → 11:53 나리타 T2 → TW252 14:20",
      accent: "#3a5b8c",
      stats: [
        { k: "N'EX", v: "10:38 → 11:53" },
        { k: "체크인 마감", v: "13:20" },
        { k: "출발", v: "14:20" }
      ],
      items: [
        {
          id: "d4-1",
          time: "07:40",
          title: "아침 · 짐 정리",
          jp: "朝食 · 荷造り",
          hours: "호텔 체크아웃 11:00",
          note: "짐을 미리 묶어 두고 아침. 캐리어 3개면 3층 프런트에 짐 보관을 맡기고 10:05에 찾는 편이 편합니다.",
          img: null,
          map: null
        },
        {
          id: "d4-2",
          time: "10:05",
          title: "체크아웃 → 신주쿠역",
          jp: "新宿駅 へ",
          hours: "도보 10~12분",
          note: "호텔에서 신주쿠역 남쪽 출구까지 지하보도로 도보 10~12분. 10:20까지 도착하면 N'EX 19호 여유.",
          img: "images/washington-hotel.jpg",
          map: "https://maps.google.com/?cid=6872319874272201570",
          leg: {
            type: "train",
            label: "N'EX 19호 10:38 → 11:53",
            detail: "JR 신주쿠역 5·6번선(나리타 익스프레스) · 전좌석 지정석 · 나리타 제2터미널까지 직행 · 3,330엔(3인 지정석 9,990엔)",
            alt: "10:09발(11:23 도착)도 있지만 면세 쇼핑 1시간을 넣으면 10:38이 마지노선입니다."
          }
        },
        {
          id: "d4-3",
          time: "10:38",
          title: "N'EX 19호 탑승 (4·5호차)",
          jp: "成田エクスプレス 19号",
          hours: "신주쿠 10:38 → 空港第2ビル 11:53",
          note: "4호차는 앞문 바로 앞이 에스컬레이터, 뒷문 앞이 엘리베이터 — 캐리어 끌고 내리기 가장 좋습니다. 5호차도 앞문이 에스컬레이터. 출입문 가까운 맨 앞·맨 뒷열에 3자리를 잡고, 큰 캐리어는 출입문 앞뒤 열의 수하물 보관함에 넣으세요.",
          img: "images/nex.jpg",
          map: "https://maps.google.com/?cid=2031864442327465429",
          leg: {
            type: "walk",
            label: "역 → 체크인 카운터",
            detail: "空港第2ビル역 하차 → 3층 출발 로비 → 티웨이항공 카운터 · 수하물 위탁",
            alt: "역에서 3층까지 엘리베이터 1회. 11:53 도착이면 12:30까지 체크인 완료됩니다."
          }
        },
        {
          id: "d4-4",
          time: "11:53",
          title: "나리타국제공항 제2터미널 · 체크인",
          jp: "成田空港 第2ターミナル",
          hours: "체크인 마감 13:20 · TW252 14:20 출발",
          note: "전날(11/23) 14:15부터 온라인 체크인을 할 수 있습니다 — 미리 하면 카운터에서 짐만 맡기면 됩니다. 보안검색·출국심사 15~35분, 면세점 40~50분을 고려하면 여유가 2시간 가까이 남습니다.",
          img: "images/narita-departure.jpg",
          map: "https://maps.google.com/?cid=525036222910129328"
        },
        {
          id: "d4-5",
          time: "14:20",
          title: "TW252 출발 → 16:50 대구 도착",
          jp: "TW252 仁川行",
          hours: "나리타 14:20 → 대구 16:50",
          note: "기내식이 없습니다. 공항에서 식사하거나 기내용 간식을 사 두세요. 입국 후 수하물은 위탁 15kg 기준.",
          img: "images/narita-arrival.jpg",
          map: null
        }
      ],
      meals: [
        {
          slot: "아침",
          icon: "🌅",
          time: "07:40 ~ 08:20",
          after: "__start",
          area: "숙소 도보 6분",
          why: "출국일 아침은 07:00에 여는 집만 가능합니다. 공항 식사까지 5시간이 비니 든든히 먹는 편이 좋습니다.",
          options: [
            {
              name: "신파치 식당 신주쿠 (しんぱち食堂)",
              rating: "구글 4.0 (1,953)",
              tabelog: "타베로그 3.33",
              menu: "생선구이 정식 (연어·고등어)",
              price: "500~700엔",
              hours: "07:00~22:40",
              tip: "짐 정리 전에 다녀오면 09:00 전에 끝납니다.",
              walk: "호텔 도보 6분",
              img: "images/r-shimpachi.jpg",
              map: "https://maps.google.com/?cid=14023482379824896455"
            },
            {
              name: "호텔 1층 패밀리마트",
              rating: "24시간",
              tabelog: "",
              menu: "오니기리·샌드위치·커피",
              price: "300~800엔",
              hours: "24시간",
              tip: "전날 밤에 사 두면 아침 시간이 20분 줄어듭니다.",
              walk: "호텔 1층",
              img: null,
              map: "https://maps.google.com/?cid=6872319874272201570"
            }
          ]
        },
        {
          slot: "점심",
          icon: "🍜",
          time: "12:20 ~ 13:10",
          after: "d4-4",
          area: "나리타 T2 · 출국심사 후",
          why: "출국심사 후 위성 3층에 식당이 있습니다. 13:45 탑승 전에 여기서 먹으면 면세 쇼핑 1시간이 그대로 남습니다.",
          options: [
            {
              name: "BlueSky Miso Kitchen (T2 위성 3F)",
              rating: "구글 4.0 (352)",
              tabelog: "",
              menu: "미소라멘·일본정식",
              price: "1,000~1,800엔",
              hours: "08:00~21:00",
              tip: "출국심사 후 구역이라 면세 쇼핑 동선과 같습니다. 탑승구 90번대면 이동 10~15분 여유.",
              walk: "위성 3F · 탑승구 방향",
              img: "images/r-bluesky.jpg",
              map: "https://maps.google.com/?cid=10650273215742311319"
            },
            {
              name: "출국 전 4F 레스토랑가",
              rating: "스시·라멘·우동",
              tabelog: "",
              menu: "출국 전 마지막 일본식",
              price: "1,200~2,500엔",
              hours: "체크인 후",
              tip: "짐을 맡기고 4F에서 먹고 올라가는 방법. 12:10까지 먹어야 여유.",
              walk: "T2 4F",
              img: null,
              map: "https://maps.google.com/?cid=525036222910129328"
            }
          ]
        }
      ],
      spots: []
    }
  ],

  /* ───────────────────────── 꿀팁 ───────────────────────── */
  tips: [
    {
      icon: "🏨",
      title: "신주쿠 워싱턴 호텔 본관 시설",
      items: [
        "1층: 24시간 패밀리마트(+ATM), 투숙객 전용 코인 세탁실(세제 자동 투입), 공항버스 대기 휴게실",
        "3층(프런트): 24시간 공용 전자레인지, 당일 무료 짐 보관 락커(큰 짐은 프런트), 가습기·충전기 대여",
        "각 층: 무료 제빙기",
        "건물 안 상점가: 로손·미니스톱, 스시·모츠나베·이자카야·카페",
        "대욕장·헬스장은 건물 안에 없습니다. 객실마다 개별 욕조. 출장 마사지 60분 13,000엔~",
        "프런트 " + "+81 3-3343-3111" + " · 3박 같은 방 배정 요청을 체크인 때 한 번 더 확인"
      ]
    },
    {
      icon: "🏋️",
      title: "24시간 헬스장 (호텔 근처)",
      items: [
        "에니타임 피트니스 신주쿠 워싱턴 호텔점 — 본관 지하 1층. 해머스트렝스·인바디·샤워실. 비지터 1일권 ¥3,000 현금만, 스태프가 있는 10:00~18:30 접수·19:00 퇴관",
        "FIT PLACE24 신주쿠 서쪽 출구점 — 호텔 도보 5분(400m). 24시간 비지터 ¥2,178, 카드 결제, 공식 LINE 사전예약 필수, 샤워실 없음",
        "낮에 잠깐이면 에니타임, 밤·새벽이면 FIT PLACE24"
      ],
      links: [
        { label: "에니타임 지도", url: "https://maps.google.com/?cid=2029565529114289040" },
        { label: "FIT PLACE24 지도", url: "https://maps.google.com/?cid=5339844303229501736" }
      ]
    },
    {
      icon: "🚄",
      title: "N'EX 19호 (11/24 신주쿠 10:38 → 11:53)",
      items: [
        "전좌석 지정석 · 나리타 제2터미널까지 직행, 환승 0회",
        "추천 호차 4호차(앞문 에스컬레이터·뒷문 엘리베이터) 또는 5호차(앞문 에스컬레이터)",
        "큰 캐리어는 출입문 앞뒤 열의 수하물 보관함에 — 좌석은 출입문 가까운 맨 앞·맨 뒷열이 편합니다",
        "지정석(승차권+특급권) 3인 9,990엔 — 역 발권기에서 종이 티켓 3장으로 개찰구 통과",
        "e티켓(특급권만) 3인 5,190엔 — 각자 Suica/PASMO 잔액 1,520엔 이상 필요",
        "예약: JR 동일본 공식(에키네트 한국어) https://www.eki-net.com/ko/jreast-train-reservation/Top/Index"
      ]
    },
    {
      icon: "✈️",
      title: "항공·공항",
      items: [
        "TW252 온라인 체크인은 전날(11/23) 14:15부터 — 미리 하면 카운터에서 짐만 맡기면 됩니다",
        "체크인 마감 13:20, 탑승구 마감은 출발 10분 전(14:10)",
        "위탁 15kg·기내 10kg/인, 기내식 없음",
        "나리타 T2역 → 3층 출발 로비는 엘리베이터 1회. 11:53 도착이면 12:30 체크인 완료",
        "첫날 리무진버스는 예약 없이 T2 1층 로비 카운터·발권기에서 현장 구매(18:20 / 18:50)"
      ]
    },
    {
      icon: "🎫",
      title: "교통·결제",
      items: [
        "아이폰 지갑에 모바일 Suica/PASMO를 추가하면 전철·편의점·택시까지 한 장으로",
        "Tokyo Subway Ticket(도쿄메트로·도에이 한정): 24시간 1,000엔 / 48시간 1,500엔 / 72시간 2,000엔 · JR 불가",
        "이번 일정 전철 요금 합계가 약 1,500~1,650엔이라 48시간권은 본전 — JR을 많이 타는 2·3일차엔 Suica가 낫습니다",
        "현금이 필요한 곳: 에니타임 ¥3,000, 긴자 이츠키, 喫茶YOU (카드 불가)"
      ]
    },
    {
      icon: "🎌",
      title: "11/23(월) 공휴일 주의",
      items: [
        "근로감사의 날 — 관공서·일부 전문점 휴무. 유명 스시집(큐베이·핫코쿠·토카미 등)도 휴무",
        "이번 일정의 카피탈 에비스 3곳·RECTOHALL·오에도 시장·롯폰기 마켓은 모두 영업 확인",
        "RECTOHALL은 공휴일 영업, 대신 다음날(11/24 화) 휴무",
        "긴자 시몬·텐동 이츠키·喫茶YOU·무인양품 긴자 모두 공휴일 영업 확인"
      ]
    },
    {
      icon: "🛍️",
      title: "쇼핑·면세",
      items: [
        "면세는 1점포 1일 5,000엔 이상, 여권 지참(여권 사본 불가)",
        "식품·화장품은 출국 전까지 개봉 금지(봉인)",
        "카피탈·RAGTAG·2nd STREET은 사이즈 표기가 브랜드마다 달라 실착 권장",
        "이세탄·MUJI는 층별 계산대가 달라 마지막에 한 번에 계산하는 편이 편합니다"
      ]
    },
    {
      icon: "☎️",
      title: "긴급 연락",
      items: [
        "경찰 110 · 화재·구급 119 (일본은 한국과 동일)",
        "호텔 프런트 +81 3-3343-3111 (24시간)",
        "여권 분실 시 주일 한국대사관 +81 3-3452-7611 · 영사 콜센터 +82 2-3210-0404"
      ]
    }
  ],

  checklist: [
    "여권 3명분 (유효기간 6개월 이상)",
    "전자항공권·예약번호 (1400831430658711 · PNR MD68B6)",
    "신주쿠 워싱턴 예약 2건 (11/21 1박 · 11/22~24 2박)",
    "N'EX 19호 3인 지정석 티켓",
    "엔화 현금 3~5만엔 (에니타임·이츠키·YOU 현금만)",
    "모바일 Suica/PASMO 충전",
    "eSIM 또는 로밍",
    "보조배터리 (기내 반입만, 100Wh 이하)",
    "어머니 상비약·혈압약",
    "우산 1~2개 (11/23 우천 시 시장 중지)",
    "얇은 겉옷 (롯폰기 마켓 야외)",
    "편한 신발 (2일차 도보 6km+)",
    "TW252 온라인 체크인 (11/23 14:15부터)",
    "11/23 생일 저녁 예약"
  ]
};
