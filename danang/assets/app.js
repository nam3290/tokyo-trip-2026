/* 다낭 3박 5일 — 일정(data/itinerary.js)과 장소 카드(data/places.js)를 읽어 그립니다.
 * 화면: 전체 / 1~5일차 · 맛집·마사지 추천 · 동선지도 · 여행정보·체크리스트
 */
(function () {
  const D = window.TRIP_DATA;
  const P = window.PLACES;
  const view = document.getElementById("view");
  const tabsEl = document.getElementById("tabs");
  const heroEl = document.getElementById("hero");

  const PLACE = new Map((P.items || []).map((p) => [p.id, p]));
  const GROUP = new Map((P.groups || []).map((g) => [g.id, g]));

  /* ── 방문 상태 (이 기기 브라우저에만 저장) ── */
  const VISIT_KEY = "danang-trip-visits-v1";
  let visitState = {};
  try { visitState = JSON.parse(localStorage.getItem(VISIT_KEY) || "{}"); } catch (_) {}
  const getVisit = (id) => visitState[id] || "";
  function setVisit(id, status) {
    visitState[id] = getVisit(id) === status ? "" : status;
    try { localStorage.setItem(VISIT_KEY, JSON.stringify(visitState)); } catch (_) {}
  }

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ── 현지 시간 / D-day ── */
  function localClock() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit",
      day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || "00";
    return { date: `${get("year")}-${get("month")}-${get("day")}`, hhmm: `${get("hour")}:${get("minute")}` };
  }
  const pad = (n) => String(n).padStart(2, "0");
  const isoOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const year = D.meta.startDate.slice(0, 4);
  D.days.forEach((d) => {
    const md = d.date.split("/").map(pad).join("-");
    d.iso = `${year}-${md}`;
  });
  const todayIso = isoOf(new Date());
  const todayDay = D.days.find((d) => d.iso === todayIso) || null;
  const start = new Date(D.meta.startDate + "T00:00:00");
  const now0 = new Date(todayIso + "T00:00:00");
  const dday = Math.round((start - now0) / 86400000);
  const ddayText = dday > 0 ? `D-${dday}` : dday === 0 ? "TODAY" : `D+${-dday}`;

  function nextVisitHtml() {
    const now = localClock();
    const day = D.days.find((x) => x.iso === now.date);
    if (!day) {
      const next = D.days.find((x) => x.iso > now.date);
      return next
        ? `<div class="next-visit"><div><small>베트남 현지시간 ${esc(now.hhmm)} · 여행 전</small><b>${esc(next.date)} ${esc(next.weekday)} · ${esc(next.title)}</b></div></div>`
        : "";
    }
    const next = day.items.find((x) => /^\d\d:\d\d/.test(x.time) && x.time.slice(0, 5) >= now.hhmm && getVisit(x.id) !== "skip" && getVisit(x.id) !== "done");
    if (!next) return `<div class="next-visit"><div><small>🇻🇳 현지시간 ${esc(now.hhmm)}</small><b>오늘 남은 일정 없음</b><span>내일 일정을 확인하세요.</span></div></div>`;
    return `<div class="next-visit"><div><small>🇻🇳 현지시간 ${esc(now.hhmm)} · 다음 일정</small><b>${esc(next.time)} · ${esc(next.title)}</b></div>` +
      (next.map ? `<a href="${esc(next.map)}" target="_blank" rel="noopener">지도</a>` : "") + `</div>`;
  }
  function updateNextVisit() {
    const el = document.getElementById("next-visit");
    if (el) el.innerHTML = nextVisitHtml();
  }

  /* ── 히어로 ── */
  heroEl.innerHTML = `
    <div class="hero-top">
      <div>
        <h1>${esc(D.meta.title)}</h1>
        <div class="dates">${esc(D.meta.subtitle)}</div>
      </div>
      <div class="dday">${ddayText}</div>
    </div>
    <div class="party">${esc(D.meta.party)}</div>
    <div class="chips">
      <span class="chip">🏨 <b>윈덤 다낭 골든 베이</b> · 3박</span>
      <span class="chip">✈️ KE2093 / KE2094</span>
      <span class="chip">🦐 해산물·마사지 ${P.items.length}곳</span>
      <span class="chip">🗺️ 일차별 동선</span>
    </div>
    <div class="notice">${esc(D.meta.notice)}</div>
    <div id="next-visit"></div>`;
  updateNextVisit();

  /* ── 탭 ── */
  const dayTabs = [{ id: "all", label: "전체" }]
    .concat(D.days.map((d) => ({ id: d.id, label: d.tab, accent: d.accent, isNow: todayDay && todayDay.id === d.id })));
  const toolTabs = [
    { id: "food", label: "🍴 맛집·마사지" },
    { id: "map", label: "🗺️ 동선지도" },
    { id: "tips", label: "💡 여행정보" }
  ];
  const allIds = dayTabs.map((t) => t.id).concat(toolTabs.map((t) => t.id));
  const initial = location.hash && allIds.includes(location.hash.slice(1)) ? location.hash.slice(1) : (todayDay ? todayDay.id : "all");

  tabsEl.innerHTML = `
    <div class="tabrow tabrow-days" role="tablist" aria-label="일차·화면 선택">
      ${dayTabs.map((t) => `
        <button class="tab" role="tab" data-tab="${t.id}" ${t.accent ? `data-day style="--tab-accent:${t.accent}"` : ""}
          aria-selected="${t.id === initial}">${t.isNow ? '<span class="now" aria-hidden="true"></span>' : ""}${esc(t.label)}</button>`).join("")}
    </div>
    <div class="tabrow tabrow-tools" role="tablist" aria-label="맛집·지도·여행정보">
      ${toolTabs.map((t) => `
        <button class="tab tool" role="tab" data-tab="${t.id}" aria-selected="${t.id === initial}">${esc(t.label)}</button>`).join("")}
    </div>`;

  /* ── 공통 조각 ── */
  const KIND = {
    move: { label: "이동", cls: "move" },
    spot: { label: "관광", cls: "spot" },
    meal: { label: "식사", cls: "meal" },
    hotel: { label: "숙소", cls: "hotel" },
    free: { label: "자유", cls: "free" }
  };
  const LEG_LABEL = { walk: "도보", car: "차량", flight: "항공", boat: "보트" };
  const LEG_MODE = { walk: "walking", car: "driving", flight: "driving", boat: "driving" };

  function photoCard(src, alt) {
    return `<figure><img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async">
      <button class="fig-btn" type="button" data-zoom="${src}" data-cap="${esc(alt)}" aria-label="사진 크게 보기"></button></figure>`;
  }

  function candsHtml(it) {
    const list = (it.candidates || []).map((c) => ({ c, p: PLACE.get(c.id) })).filter((x) => x.p);
    if (!list.length) return "";
    const rows = list.map(({ c, p }) => {
      const thumb = p.img ? `<img src="${esc(p.img)}" alt="${esc(p.name)} 사진" loading="lazy" decoding="async">` : "";
      const meta = [c.walk, p.rating ? `구글 ${p.rating}` : "", p.hours ? p.hours.split("·")[0].trim() : ""].filter(Boolean).join(" · ");
      return `<a class="near-card" href="${esc(p.map)}" target="_blank" rel="noopener">
        <span class="near-photo">${thumb}</span>
        <span class="near-body">
          <span class="near-name">${esc(p.name)}</span>
          <span class="near-meta">${esc(meta)}</span>
          <span class="near-why">${esc(c.why || p.tip || "")}</span>
        </span>
        <span class="near-go" aria-hidden="true">›</span>
      </a>`;
    }).join("");
    return `<div class="cands">
      <div class="cands-h"><span aria-hidden="true">📍</span> <b>여기서 고르기</b> <span class="sub">${list.length}곳 · 누르면 구글맵</span></div>
      <div class="near-strip">${rows}</div>
    </div>`;
  }

  function itemHtml(it, d) {
    const k = KIND[it.kind] || KIND.spot;
    const state = getVisit(it.id);
    const img = it.img ? photoCard(it.img, it.title + " 사진") : "";
    const actions = [];
    if (it.map) actions.push(`<a class="btn" href="${esc(it.map)}" target="_blank" rel="noopener">📍 구글맵</a>`);
    if (it.map2) actions.push(`<a class="btn ghost" href="${esc(it.map2)}" target="_blank" rel="noopener">📍 ${esc(it.map2Label || "지도")}</a>`);
    if (it.lat && it.lng) actions.push(`<a class="btn ghost" href="https://www.google.com/maps/dir/?api=1&destination=${it.lat},${it.lng}" target="_blank" rel="noopener">🧭 길찾기</a>`);
    const food = it.food ? PLACE.get(it.food) : null;
    const foodBtn = food ? `<div class="actions" style="padding-top:0"><button class="food-jump" type="button" data-gofood="${esc(food.id)}">🍴 추천 카드 보기 · ${esc(GROUP.get(food.group)?.label || "")}</button></div>` : "";
    const visitBtns = `<div class="visit-actions" role="group" aria-label="방문 상태">
        <button type="button" data-visit="done" data-v-id="${esc(it.id)}" aria-pressed="${state === "done"}">✓ 다녀옴</button>
        <button type="button" data-visit="skip" data-v-id="${esc(it.id)}" aria-pressed="${state === "skip"}">↷ 건너뜀</button>
      </div>`;
    const leg = it.leg ? legHtml(it.leg) : "";
    return `
      <span class="node" aria-hidden="true"></span>
      <article class="card ${k.cls === "free" ? "free" : ""}" data-kind="${k.cls}" data-visit-card="${esc(it.id)}" data-status="${esc(state)}"
        style="--accent:${d.accent}">
        <div class="card-head">
          <span class="timechip">${esc(it.time)}</span>
          <span class="priority-badge ${it.priority === "optional" ? "optional" : "essential"}">${k.label}</span>
          <h3>${esc(it.title)}</h3>
          ${it.jp ? `<div class="jp">${esc(it.jp)}</div>` : ""}
        </div>
        ${img}
        <div class="meta">
          ${it.hours ? `<div class="meta-row"><span class="ico">🕘</span><span>${esc(it.hours)}</span></div>` : ""}
        </div>
        ${it.note ? `<div class="note">${esc(it.note)}</div>` : ""}
        ${actions.length ? `<div class="actions">${actions.join("")}</div>` : ""}
        ${candsHtml(it)}
        ${foodBtn}
        ${it.source?.url ? `<div class="source-foot">📎 <a href="${esc(it.source.url)}" target="_blank" rel="noopener">${esc(it.source.label || "출처")}</a> · 확인 ${esc(it.source.checked || "—")}</div>` : ""}
        ${visitBtns}
      </article>${leg}`;
  }

  function legHtml(leg) {
    return `
      <span class="node leg-node" aria-hidden="true"></span>
      <div class="leg">
        <div class="leg-body">
          <div class="leg-head">
            <span class="leg-type">${LEG_LABEL[leg.type] || "이동"}</span>
            <span class="leg-label">${esc(leg.label)}</span>
          </div>
          ${leg.detail ? `<div class="leg-detail">${esc(leg.detail)}</div>` : ""}
        </div>
      </div>`;
  }

  function dayHtml(d, withHeader) {
    return `
      <section id="${d.id}" ${withHeader ? "" : `style="--accent:${d.accent}"`}>
        <div class="day-head" style="--accent:${d.accent}">
          <div class="day-kicker"><span class="bar"></span>DAY ${d.id.slice(1)} · ${esc(d.date)} ${esc(d.weekday)}</div>
          <h2>${esc(d.title)}</h2>
          <p class="summary">${esc(d.summary)}</p>
          <div class="stats">${d.stats.map((s) => `<div class="stat"><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join("")}</div>
          <div class="day-actions">
            <button class="mini-btn" type="button" data-gomap="${d.id}">🗺️ 이 날 동선</button>
            <button class="mini-btn" type="button" data-godayfood="${d.id}">🍴 이 날 맛집</button>
          </div>
        </div>
        <div class="tl" style="--accent:${d.accent}">${d.items.map((it) => itemHtml(it, d)).join("")}</div>
      </section>`;
  }

  /* ══════════════════ 추천 탭 ══════════════════ */
  const FOOD = { g: "", q: "", focus: "" };

  function foodFiltered() {
    const q = FOOD.q.trim().toLowerCase();
    return P.items.filter((it) => {
      if (FOOD.g && it.group !== FOOD.g) return false;
      if (q) {
        const hay = [it.name, it.local, it.area, it.address, it.tip, (it.tags || []).join(" ")].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.reviews || 0) - (a.reviews || 0));
  }

  function pcardHtml(it) {
    const g = GROUP.get(it.group) || {};
    const chips = [
      it.openLate ? `<span class="rchip vh">늦게까지</span>` : "",
      ...(it.tags || []).map((t) => `<span class="rchip tag">${esc(t)}</span>`)
    ].filter(Boolean).join("");
    return `
      <article class="rcard" data-rid="${esc(it.id)}">
        ${it.img ? `<div class="rimg"><img src="${esc(it.img)}" alt="${esc(it.name)} 사진" loading="lazy" decoding="async">
          <button class="fig-btn" type="button" data-zoom="${esc(it.img)}" data-cap="${esc(it.name)}" aria-label="사진 크게 보기"></button></div>` : ""}
        <div class="rtop">
          <div>
            <h3>${esc(it.name)}</h3>
            ${it.local ? `<div class="rjp">${esc(it.local)}</div>` : ""}
            <div class="rloc">${esc(g.icon || "")} ${esc(it.area || "")}</div>
          </div>
          ${it.rating ? `<div class="rscore"><b>${it.rating}</b><span>구글 ${it.reviews ? (it.reviews >= 1000 ? (it.reviews / 1000).toFixed(1).replace(/\.0$/, "") + "천" : it.reviews) : ""}</span></div>` : `<div class="rscore none"><b>–</b><span>미확인</span></div>`}
        </div>
        <div class="rchips">${chips}</div>
        <dl class="rdl">
          ${it.hours ? `<dt>영업</dt><dd>${esc(it.hours)}</dd>` : ""}
          ${it.address ? `<dt>주소</dt><dd>${esc(it.address)}</dd>` : ""}
        </dl>
        ${it.tip ? `<p class="rtip"><b>메모</b> · ${esc(it.tip)}</p>` : ""}
        <div class="racts">
          <a class="btn" href="${esc(it.map)}" target="_blank" rel="noopener">📍 구글맵</a>
          <a class="btn ghost" href="https://www.google.com/maps/dir/?api=1&destination=${it.lat},${it.lng}" target="_blank" rel="noopener">🧭 길찾기</a>
          <button class="btn ghost" type="button" data-showmap="${esc(it.id)}">🗺️ 지도에서</button>
        </div>
      </article>`;
  }

  function foodListHtml() {
    const list = foodFiltered();
    if (!list.length) return `<div class="empty">조건에 맞는 장소가 없습니다. 필터를 풀어 보세요.</div>`;
    if (FOOD.g) {
      const g = GROUP.get(FOOD.g) || {};
      return `<div class="rlist">${list.map(pcardHtml).join("")}</div>`;
    }
    const order = (P.groups || []).map((g) => g.id);
    const groups = new Map();
    list.forEach((it) => {
      if (!groups.has(it.group)) groups.set(it.group, []);
      groups.get(it.group).push(it);
    });
    return [...groups.keys()].sort((a, b) => order.indexOf(a) - order.indexOf(b)).map((gid) => {
      const g = GROUP.get(gid) || { label: gid };
      return `<section class="rgroup">
        <h3 class="rgroup-h">${esc(g.icon || "")} ${esc(g.label)} <b>${groups.get(gid).length}</b></h3>
        ${g.lead ? `<p class="rgroup-lead">${esc(g.lead)}</p>` : ""}
        <div class="rlist">${groups.get(gid).map(pcardHtml).join("")}</div>
      </section>`;
    }).join("");
  }

  function foodHtml() {
    return `
      <div class="foodwrap">
        <div class="foodhead">
          <h2>맛집 · 마사지 추천 <span class="cnt">${P.items.length}곳</span></h2>
          <p class="lead">미케비치 해산물, 술자리, 마사지, 패키지 식당을 한곳에 모았습니다. 평점·영업시간은 2026-11-23 구글맵 조회값이고, 방문 전에 한 번 더 확인하세요.</p>
        </div>
        <div class="searchbox">
          <span aria-hidden="true">🔎</span>
          <input id="fq" type="search" inputmode="search" autocomplete="off" placeholder="가게명 · 지역 검색 (예: 해산물, 마사지, 호이안)" value="${esc(FOOD.q)}">
          <button type="button" id="fq-clear" aria-label="검색 지우기">×</button>
        </div>
        <div class="filters">
          <div class="fg-label">분류</div>
          <div class="frow" data-group="g" role="group">
            <button class="fchip ${FOOD.g === "" ? "on" : ""}" type="button" data-val="">전체</button>
            ${P.groups.map((g) => `<button class="fchip ${FOOD.g === g.id ? "on" : ""}" type="button" data-val="${esc(g.id)}">${esc(g.icon)} ${esc(g.label)}</button>`).join("")}
          </div>
        </div>
        <div class="fmeta"><span id="fcount"></span><button type="button" id="freset">필터 초기화</button></div>
        <div id="flist">${foodListHtml()}</div>
        <p class="foodnote">${esc(P.meta.note)}</p>
      </div>`;
  }

  function updateFoodCount() {
    const el = document.getElementById("fcount");
    if (el) el.textContent = `${foodFiltered().length}곳`;
  }

  function bindFood() {
    const wrap = view.querySelector(".foodwrap");
    if (!wrap) return;
    updateFoodCount();
    const input = document.getElementById("fq");
    const redraw = () => {
      document.getElementById("flist").innerHTML = foodListHtml();
      updateFoodCount();
      if (FOOD.focus) {
        const card = view.querySelector(`[data-rid="${FOOD.focus}"]`);
        if (card) {
          card.classList.add("focus");
          card.scrollIntoView({ block: "center" });
        }
        FOOD.focus = "";
      }
    };
    let t = null;
    input.addEventListener("input", () => {
      FOOD.q = input.value;
      clearTimeout(t);
      t = setTimeout(redraw, 130);
    });
    document.getElementById("fq-clear").addEventListener("click", () => {
      FOOD.q = ""; input.value = ""; redraw(); input.focus();
    });
    document.getElementById("freset").addEventListener("click", () => {
      FOOD.g = FOOD.q = FOOD.focus = "";
      render("food");
    });
    wrap.addEventListener("click", (e) => {
      const chip = e.target.closest('[data-group="g"] .fchip');
      if (!chip) return;
      FOOD.g = chip.dataset.val;
      wrap.querySelectorAll('[data-group="g"] .fchip').forEach((c) => c.classList.toggle("on", c.dataset.val === FOOD.g));
      redraw();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    redraw();
  }

  /* ══════════════════ 동선 지도 ══════════════════ */
  const MAP = { day: "all", places: false, focus: null };
  let leaflet = null;

  function stopsFor(dayId) {
    return D.days
      .filter((d) => dayId === "all" || d.id === dayId)
      .map((d) => {
        const stops = d.items
          .filter((it) => it.lat && it.lng)
          .map((it) => ({
            id: it.id, time: it.time, name: it.title, lat: it.lat, lng: it.lng,
            kind: it.kind, priority: it.priority, map: it.map || `https://www.google.com/maps/search/?api=1&query=${it.lat},${it.lng}`,
            mode: LEG_MODE[it.leg?.type] || "walking"
          }));
        const segments = [];
        for (let i = 0; i < stops.length - 1; i++) {
          const a = stops[i], b = stops[i + 1];
          segments.push({
            from: a.name, to: b.name, mode: b.mode,
            url: `https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${b.lat},${b.lng}&travelmode=${b.mode}`
          });
        }
        return { id: d.id, label: `${d.date} ${d.weekday} · ${d.tab}`, title: d.title, color: d.accent, stops, segments };
      })
      .filter((d) => d.stops.length);
  }

  function mapHtml() {
    const days = stopsFor(MAP.day);
    const total = days.reduce((n, d) => n + d.stops.length, 0);
    return `
      <div class="mapwrap">
        <div class="maphead">
          <h2>동선 지도</h2>
          <p class="lead">일정 데이터의 좌표를 그대로 씁니다. 마커를 누르면 구글맵으로 열리고, 아래 버튼은 구간별 길찾기입니다. 실제 이동 시간은 현장 교통 상황에 따라 다릅니다.</p>
        </div>
        <div class="mapchips">
          <button class="fchip ${MAP.day === "all" ? "on" : ""}" type="button" data-mday="all">전체</button>
          ${stopsFor("all").length ? D.days.map((d) => `<button class="fchip dchip ${MAP.day === d.id ? "on" : ""}" type="button" data-mday="${d.id}" style="--c:${d.accent}">${esc(d.tab)}</button>`).join("") : ""}
          <button class="fchip foodpin ${MAP.places ? "on" : ""}" type="button" id="placepin">📍 추천 장소</button>
        </div>
        <p class="maphint">일차를 고르면 그날 순서만 크게 보입니다 · 마커를 누르면 구글맵</p>
        <div id="mapcanvas" class="map" role="application" aria-label="일차별 동선 지도"></div>
        <div class="mapfallback" id="mapfallback" hidden>지도를 불러오지 못했습니다(오프라인일 수 있습니다). 아래 목록과 구글맵 버튼은 그대로 쓸 수 있습니다.</div>
        <div class="maplegend">${days.map((d) => `<span><i style="background:${d.color}"></i>${esc(d.label)}</span>`).join("")}${MAP.places ? `<span><i class="dot"></i>추천 장소</span>` : ""}</div>

        ${days.map((d) => `
          <section class="mday">
            <h3 class="mday-h" style="--c:${d.color}"><i></i>${esc(d.label)} <span>${esc(d.title)}</span></h3>
            <div class="mseg">
              ${d.segments.map((s, i) => `<a class="btn" href="${s.url}" target="_blank" rel="noopener">${s.mode === "driving" ? "🚗 차량" : "🚶 도보"} ${d.segments.length > 1 ? `${i + 1}/${d.segments.length}` : ""} · ${esc(s.from)}→${esc(s.to)}</a>`).join("")}
            </div>
            <ol class="mstops">
              ${d.stops.map((s, i) => `
                <li>
                  <span class="mnum" style="--c:${d.color}">${i + 1}</span>
                  <div class="mstop-body">
                    <div class="mrow"><span class="mtime">${esc(s.time)}</span><b>${esc(s.name)}</b>${s.kind === "meal" ? '<span class="mkind">식사</span>' : ""}${s.kind === "hotel" ? '<span class="mkind">숙소</span>' : ""}${s.priority === "optional" ? '<span class="mkind">선택</span>' : ""}</div>
                    <div class="mlinks">
                      <a href="${esc(s.map)}" target="_blank" rel="noopener">구글맵</a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}" target="_blank" rel="noopener">길찾기</a>
                    </div>
                  </div>
                </li>`).join("")}
            </ol>
          </section>`).join("")}
        <p class="foodnote">지도 타일: OpenStreetMap · 좌표: Google Maps 장소 조회값(2026-11-23) · ${total}개 지점</p>
      </div>`;
  }

  function markerIcon(n, color, small) {
    const size = small ? 20 : 26;
    return L.divIcon({
      className: "mpin-wrap",
      html: `<span class="mpin${small ? " sm" : ""}" style="--c:${color}">${n}</span>`,
      iconSize: [size, size], iconAnchor: [size / 2, size / 2], popupAnchor: [0, -size / 2]
    });
  }

  function initMap() {
    const box = document.getElementById("mapcanvas");
    if (!box) return;
    if (!window.L) {
      const fb = document.getElementById("mapfallback");
      if (fb) fb.hidden = false;
      box.style.display = "none";
      return;
    }
    const days = stopsFor(MAP.day);
    const map = L.map(box, { zoomControl: true, attributionControl: true, scrollWheelZoom: false, tap: true });
    leaflet = map;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const all = [];
    days.forEach((d) => {
      const pts = d.stops.map((s) => [s.lat, s.lng]);
      if (pts.length > 1) {
        L.polyline(pts, {
          color: d.color, weight: 3, opacity: 0.85,
          dashArray: d.stops.some((s) => s.mode === "driving") ? "6 7" : null,
          lineCap: "round"
        }).addTo(map);
      }
      d.stops.forEach((s, i) => {
        const m = L.marker([s.lat, s.lng], { icon: markerIcon(i + 1, d.color, MAP.day === "all"), title: s.name, riseOnHover: true }).addTo(map);
        m.bindPopup(`<div class="mpop">
          <div class="mpop-t"><span class="mpop-n" style="--c:${d.color}">${i + 1}</span><b>${esc(s.name)}</b></div>
          <div class="mpop-time">${esc(s.time)} · ${esc(d.label)}</div>
          <div class="mpop-a">
            <a href="${esc(s.map)}" target="_blank" rel="noopener">구글맵</a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}" target="_blank" rel="noopener">길찾기</a>
          </div></div>`, { maxWidth: 260, minWidth: 200 });
        all.push([s.lat, s.lng]);
      });
    });

    if (MAP.places) {
      P.items.forEach((p) => {
        if (!p.lat) return;
        const g = GROUP.get(p.group) || {};
        const cm = L.circleMarker([p.lat, p.lng], {
          radius: 5, color: "#ffffff", weight: 1.5, fillColor: g.id === "spa" ? "#7c3aed" : g.id === "bar" ? "#b45309" : "#0f766e", fillOpacity: 0.95
        }).addTo(map);
        cm.bindPopup(`<div class="mpop"><div class="mpop-t"><b>${esc(p.name)}</b></div>
          <div class="mpop-time">${esc(g.label || "")} · ${esc(p.rating ? "구글 " + p.rating : "평점 미확인")}</div>
          <div class="mpop-a"><a href="${esc(p.map)}" target="_blank" rel="noopener">구글맵</a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}" target="_blank" rel="noopener">길찾기</a></div></div>`, { maxWidth: 250 });
      });
    }

    if (MAP.focus) {
      map.setView([MAP.focus.lat, MAP.focus.lng], 16);
    } else if (all.length > 1) {
      map.fitBounds(all, { padding: [28, 28], maxZoom: 14 });
    } else if (all.length === 1) {
      map.setView(all[0], 14);
    } else {
      map.setView([16.0544, 108.2022], 12);
    }
    setTimeout(() => map.invalidateSize(), 60);
  }

  function destroyMap() {
    if (leaflet) { leaflet.remove(); leaflet = null; }
  }

  function bindMap() {
    const wrap = view.querySelector(".mapwrap");
    if (!wrap) return;
    initMap();
    wrap.addEventListener("click", (e) => {
      const day = e.target.closest("[data-mday]");
      if (day) { MAP.day = day.dataset.mday; MAP.focus = null; render("map"); return; }
      if (e.target.closest("#placepin")) { MAP.places = !MAP.places; render("map"); return; }
    });
  }

  /* ══════════════════ 여행정보 ══════════════════ */
  function tipsHtml() {
    return `
      <div class="tips-wrap">
        <h2>여행정보 · 체크리스트</h2>
        <p class="lead">출발 전에 위에서부터 하나씩 지워 보세요. 체크 상태는 이 브라우저에 저장됩니다.</p>
        <div class="progress"><div class="bar"><i id="pg"></i></div><span id="pg-t">0 / ${D.checklist.length}</span></div>
        <div class="check" id="check">
          ${D.checklist.map((c, i) => `<label><input type="checkbox" data-i="${i}"><span>${esc(c)}</span></label>`).join("")}
        </div>
        <div class="tip-list">
          ${D.tips.map((t, i) => `
            <details class="tip" ${i === 0 ? "open" : ""}>
              <summary><span>${esc(t.icon)}</span><span>${esc(t.title)}</span><span class="chev">▾</span></summary>
              <div class="body">
                <ul>${t.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
                ${t.links ? `<div class="links">${t.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
              </div>
            </details>`).join("")}
        </div>
        <p class="foodnote">입국 규정·영업시간·요금은 바뀔 수 있습니다. 출발 전에 항공사·여행사 안내와 공식 사이트에서 최종 확인하세요.</p>
      </div>`;
  }

  function bindChecklist() {
    const box = document.getElementById("check");
    if (!box) return;
    const KEY = "danang-trip-check-v1";
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) { saved = {}; }
    const inputs = [...box.querySelectorAll("input")];
    const paint = () => {
      const n = inputs.filter((i) => i.checked).length;
      document.getElementById("pg").style.width = (n / inputs.length * 100) + "%";
      document.getElementById("pg-t").textContent = `${n} / ${inputs.length}`;
    };
    inputs.forEach((inp) => {
      inp.checked = !!saved[inp.dataset.i];
      inp.addEventListener("change", () => {
        saved[inp.dataset.i] = inp.checked;
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (_) {}
        paint();
      });
    });
    paint();
  }

  /* ── 렌더 ── */
  function selectTab(tabId) {
    [...tabsEl.querySelectorAll(".tab")].forEach((t) => t.setAttribute("aria-selected", String(t.dataset.tab === tabId)));
  }

  function render(tabId) {
    destroyMap();
    selectTab(tabId);
    if (tabId === "tips") {
      view.innerHTML = tipsHtml();
      bindChecklist();
    } else if (tabId === "food") {
      view.innerHTML = foodHtml();
      bindFood();
    } else if (tabId === "map") {
      view.innerHTML = mapHtml();
      bindMap();
    } else if (tabId === "all") {
      view.innerHTML = `
        <div class="jump">${D.days.map((d) => `<a href="#${d.id}" data-jump="${d.id}">${esc(d.date)} ${esc(d.weekday)}</a>`).join("")}</div>
        ${D.days.map((d, i) => (i ? '<hr class="day-sep">' : "") + dayHtml(d, true)).join("")}`;
    } else {
      const d = D.days.find((x) => x.id === tabId);
      view.innerHTML = dayHtml(d, true);
    }
    window.scrollTo(0, 0);
  }

  tabsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    history.replaceState(null, "", "#" + b.dataset.tab);
    render(b.dataset.tab);
  });

  view.addEventListener("click", (e) => {
    const v = e.target.closest("[data-visit]");
    if (v) {
      const id = v.dataset.vId;
      setVisit(id, v.dataset.visit);
      const card = v.closest("[data-visit-card]");
      if (card) {
        const status = getVisit(id);
        card.dataset.status = status;
        card.querySelectorAll("[data-visit]").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.visit === status)));
      }
      updateNextVisit();
      return;
    }
    const z = e.target.closest("[data-zoom]");
    if (z) { openModal(z.dataset.zoom, z.dataset.cap); return; }
    const j = e.target.closest("[data-jump]");
    if (j) {
      e.preventDefault();
      const el = document.getElementById(j.dataset.jump);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const m = e.target.closest("[data-gomap]");
    if (m) {
      MAP.day = m.dataset.gomap; MAP.focus = null;
      history.replaceState(null, "", "#map");
      render("map");
      return;
    }
    const goDayFood = e.target.closest("[data-godayfood]");
    if (goDayFood) {
      FOOD.g = ""; FOOD.q = "";
      history.replaceState(null, "", "#food");
      render("food");
      return;
    }
    const gf = e.target.closest("[data-gofood]");
    if (gf) {
      const p = PLACE.get(gf.dataset.gofood);
      FOOD.g = p ? p.group : "";
      FOOD.q = "";
      FOOD.focus = p ? p.id : "";
      history.replaceState(null, "", "#food");
      render("food");
      return;
    }
    const sm = e.target.closest("[data-showmap]");
    if (sm) {
      const p = PLACE.get(sm.dataset.showmap);
      if (p) {
        MAP.day = "all"; MAP.places = true;
        MAP.focus = { lat: p.lat, lng: p.lng };
        history.replaceState(null, "", "#map");
        render("map");
      }
    }
  });

  /* ── 사진 모달 ── */
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalCap = document.getElementById("modal-cap");
  function openModal(src, cap) {
    modalImg.src = src; modalCap.textContent = cap || "";
    modal.classList.add("open"); document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open"); modalImg.removeAttribute("src");
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.classList.contains("close")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ── 홈 화면 추가 안내 ── */
  const hint = document.getElementById("home-hint");
  const standalone = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  let hintOff = false;
  try { hintOff = localStorage.getItem("danang-trip-hint") === "off"; } catch (_) {}
  if (hint) {
    if (standalone || hintOff) hint.remove();
    else hint.querySelector("button").addEventListener("click", () => {
      try { localStorage.setItem("danang-trip-hint", "off"); } catch (_) {}
      hint.remove();
    });
  }

  /* ── 서비스 워커 ── */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  setInterval(updateNextVisit, 60000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) updateNextVisit(); });
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (id && allIds.includes(id)) render(id);
  });

  render(initial);
})();
