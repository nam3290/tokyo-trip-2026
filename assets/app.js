/* 도쿄 3박 4일 — 데이터(itinerary.js)를 읽어 화면을 그립니다.
 * 화면: 전체 / 1~4일차 · 식당추천(data/restaurants.js) · 동선지도(data/route.js) · 꿀팁·체크
 */
(function () {
  const D = window.TRIP_DATA;
  const R = window.RESTAURANTS;
  const M = window.TRIP_ROUTE;
  const N = window.NEARBY;
  const view = document.getElementById("view");
  const tabsEl = document.getElementById("tabs");
  const heroEl = document.getElementById("hero");
  // 방문 진행상태는 해당 기기 브라우저에서만 저장됩니다.
  const VISIT_KEY = "tokyo-trip-visits-2026-v1";
  let visitState = {};
  try { visitState = JSON.parse(localStorage.getItem(VISIT_KEY) || "{}"); } catch (_) {}
  const getVisit = (id) => visitState[id] || "";
  function setVisit(id, status) {
    visitState[id] = getVisit(id) === status ? "" : status;
    try { localStorage.setItem(VISIT_KEY, JSON.stringify(visitState)); } catch (_) {}
  }
  function tokyoClock() {
    const pieces = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit",
      day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    const part = (type) => pieces.find((p) => p.type === type)?.value || "00";
    return { date: part("year") + "-" + part("month") + "-" + part("day"),
      hhmm: part("hour") + ":" + part("minute") };
  }
  function nextVisitHtml() {
    const now = tokyoClock();
    const day = D.days.find((x) => x.iso === now.date);
    if (!day) return "";
    const next = day.items.find((x) => /^\d\d:\d\d/.test(x.time) &&
      x.time.slice(0, 5) >= now.hhmm && getVisit(x.id) !== "skip" && getVisit(x.id) !== "done");
    if (!next) return '<div class="next-visit"><b>오늘 남은 예정 방문지 없음</b><span>완료/건너뛰기 상태를 확인하세요.</span></div>';
    return '<div class="next-visit"><div><small>🇯🇵 도쿄 현지시간 ' + esc(now.hhmm) +
      ' · 다음 방문지</small><b>' + esc(next.time) + ' · ' + esc(next.title) +
      '</b></div>' + (next.map ? '<a href="' + esc(next.map) +
      '" target="_blank" rel="noopener">🧭 길찾기</a>' : '') + '</div>';
  }
  function updateNextVisit() {
    const target = document.getElementById("next-visit");
    if (target) target.innerHTML = nextVisitHtml();
  }

  /* ── 날짜 유틸 ── */
  const pad = (n) => String(n).padStart(2, "0");
  const isoOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const year = D.meta.startDate.slice(0, 4);
  D.days.forEach((d) => { d.iso = `${year}-${d.date.replace("/", "-").split("-").map(pad).join("-")}`; });
  const todayIso = isoOf(new Date());
  const todayDay = D.days.find((d) => d.iso === todayIso) || null;
  const dayMs = 86400000;
  const start = new Date(D.meta.startDate + "T00:00:00");
  const now0 = new Date(todayIso + "T00:00:00");
  const dday = Math.round((start - now0) / dayMs);

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ── 히어로 ── */
  const ddayText = dday > 0 ? `D-${dday}` : dday === 0 ? "TODAY" : `D+${-dday}`;
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
      <span class="chip">🏨 <b>${esc(D.meta.hotel.split("(")[0].trim())}</b> · 3박</span>
      <span class="chip">✈️ ${esc(D.meta.flightOut.split(" ")[0])} / ${esc(D.meta.flightIn.split(" ")[0])}</span>
      <span class="chip">🍽️ 식당 ${esc(R ? R.meta.count : "")}곳</span>
      <span class="chip">🗺️ 동선 지도</span>
    </div>
    <div class="notice">${esc(D.meta.notice)}</div><div id="next-visit"></div>`;
  updateNextVisit();

  /* ── 탭 ── */
  const dayTabs = [{ id: "all", label: "전체" }]
    .concat(D.days.map((d) => ({ id: d.id, label: d.tab, accent: d.accent, isNow: todayDay && todayDay.id === d.id })));
  const toolTabs = [
    { id: "food", label: "🍴 식당추천" },
    { id: "map", label: "🗺️ 동선지도" },
    { id: "tips", label: "💡 꿀팁·체크" },
  ];
  const allIds = dayTabs.map((t) => t.id).concat(toolTabs.map((t) => t.id));
  const initial = location.hash && allIds.includes(location.hash.slice(1)) ? location.hash.slice(1) : (todayDay ? todayDay.id : "all");

  tabsEl.innerHTML = `
    <div class="tabrow tabrow-days" role="tablist" aria-label="일차·화면 선택">
      ${dayTabs.map((t) => `
        <button class="tab" role="tab" data-tab="${t.id}" ${t.accent ? `data-day style="--tab-accent:${t.accent}"` : ""}
          aria-selected="${t.id === initial}">${t.isNow ? '<span class="now" aria-hidden="true"></span>' : ""}${esc(t.label)}</button>`).join("")}
    </div>
    <div class="tabrow tabrow-tools" role="tablist" aria-label="식당·지도·꿀팁">
      ${toolTabs.map((t) => `
        <button class="tab tool" role="tab" data-tab="${t.id}" aria-selected="${t.id === initial}">${esc(t.label)}</button>`).join("")}
    </div>`;

  /* ── 아이템/이동/식사 렌더 ── */
  function photoCard(src, alt) {
    return `<figure><img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async">
      <button class="fig-btn" type="button" data-zoom="${src}" data-cap="${esc(alt)}" aria-label="사진 크게 보기"></button></figure>`;
  }

  /* 일정 방문지마다 반경 450m 안의 식당을 '근처 맛집 메모'로 붙입니다 (data/nearby.js). */
  function nearbyHtml(it) {
    const list = N && N.spots ? N.spots[it.id] : null;
    if (!list || !list.length || !R) return "";
    const rows = list.map((n) => {
      const r = R.items.find((x) => x.id === n.id);
      if (!r) return "";
      const thumb = r.image
        ? `<img src="${esc(r.image)}" alt="${esc(r.name)} 사진" loading="lazy" decoding="async"
            onerror="this.parentNode.classList.add('noimg');this.parentNode.removeChild(this);">`
        : "";
      return `<a class="near-card" href="${esc(r.map)}" target="_blank" rel="noopener" aria-label="${esc(r.name)} 구글맵 열기">
        <span class="near-photo">${thumb}</span>
        <span class="near-body">
          <span class="near-name">${esc(r.name)}</span>
          <span class="near-meta">🚶 도보 ${n.w}분 · ${esc(r.genre || "")}</span>
          <span class="near-why">${esc(n.why || r.note || "")}</span>
        </span>
        <span class="near-go" aria-hidden="true">›</span>
      </a>`;
    }).join("");
    if (!rows) return "";
    const ws = list.map((n) => n.w);
    const lo = Math.min(...ws), hi = Math.max(...ws);
    const walk = lo === hi ? `도보 ${lo}분` : `도보 ${lo}~${hi}분`;
    return `<div class="near">
      <div class="near-h"><span aria-hidden="true">🍽️</span> <b>근처 맛집 메모</b> <span class="near-sub">${list.length}곳 · ${walk}</span></div>
      <div class="near-strip">${rows}</div>
    </div>`;
  }

  function itemHtml(it) {
    const img = it.img ? photoCard(it.img, it.title + " 사진") : "";
    const priority = it.priority === "optional" ? "선택" : "필수";
    const state = getVisit(it.id);
    const visitBtns = '<div class="visit-actions" role="group" aria-label="방문 상태"><button type="button" data-visit="done" data-v-id="' +
      esc(it.id) + '" aria-pressed="' + (state === "done") + '">✓ 방문완료</button>' +
      '<button type="button" data-visit="skip" data-v-id="' + esc(it.id) +
      '" aria-pressed="' + (state === "skip") + '">↷ 건너뛰기</button></div>';
    const map = it.map
      ? `<a class="btn" href="${it.map}" target="_blank" rel="noopener">📍 구글맵 열기</a>`
      : "";
    const map2 = it.map2
      ? `<a class="btn ghost" href="${it.map2}" target="_blank" rel="noopener">📍 ${esc(it.map2Label || "지도")}</a>`
      : "";
    return `
      <span class="node" aria-hidden="true"></span>
      <article class="card" data-visit-card="${esc(it.id)}" data-status="${esc(state)}">
        <div class="card-head">
          <span class="timechip">${esc(it.time)}</span><span class="priority-badge ${it.priority === 'optional' ? 'optional' : 'essential'}">${priority}</span>
          <h3>${esc(it.title)}</h3>
          ${it.jp ? `<div class="jp">${esc(it.jp)}</div>` : ""}
        </div>
        ${img}
        <div class="meta">
          ${it.hours ? `<div class="meta-row"><span class="ico">🕘</span><span>${esc(it.hours)}</span></div>` : ""}
        </div>
        ${it.note ? `<div class="note">${esc(it.note)}</div>` : ""}
        ${map || map2 ? `<div class="actions">${map}${map2}</div>` : ""}
        ${nearbyHtml(it)}
        ${it.source?.url ? `<div class="source-foot">📎 <a href="${esc(it.source.url)}" target="_blank" rel="noopener">${esc(it.source.label || "공식 출처")}</a> · 확인 ${esc(it.source.checked || "날짜 미기재")}</div>` : ""}
        ${visitBtns}
      </article>`;
  }

  const LEG_LABEL = { walk: "도보", train: "전철", bus: "버스" };
  function legHtml(leg) {
    return `
      <span class="node leg-node" aria-hidden="true"></span>
      <div class="leg">
        ${leg.img ? `<img class="leg-thumb" src="${leg.img}" alt="${esc(leg.label)} 사진" loading="lazy" decoding="async">` : ""}
        <div class="leg-body">
          <div class="leg-head">
            <span class="leg-type">${LEG_LABEL[leg.type] || "이동"}</span>
            <span class="leg-label">${esc(leg.label)}</span>
          </div>
          ${leg.detail ? `<div class="leg-detail">${esc(leg.detail)}</div>` : ""}
          ${leg.alt ? `<div class="leg-alt"><b>대안</b> · ${esc(leg.alt)}</div>` : ""}
        </div>
      </div>`;
  }

  function optionHtml(o, first, total) {
    return `
      <div class="opt">
        <div class="opt-name">${esc(o.name)}</div>
        <div class="opt-chips">
          ${o.rating ? `<span class="rate ${/구글/.test(o.rating) ? "google" : ""}">${esc(o.rating)}</span>` : ""}
          ${o.tabelog ? `<span class="rate tabelog">${esc(o.tabelog)}</span>` : ""}
        </div>
        ${o.img ? photoCard(o.img, o.name + " 사진") : ""}
        <dl>
          ${o.menu ? `<dt>메뉴</dt><dd>${esc(o.menu)}</dd>` : ""}
          ${o.price ? `<dt>가격</dt><dd>${esc(o.price)}</dd>` : ""}
          ${o.hours ? `<dt>영업</dt><dd>${esc(o.hours)}</dd>` : ""}
          ${o.walk ? `<dt>거리</dt><dd>${esc(o.walk)}</dd>` : ""}
        </dl>
        ${o.tip ? `<p class="opt-tip">${esc(o.tip)}</p>` : ""}
        <div class="opt-foot">
          <span class="walk">${total === 1 ? "확정" : first === 0 ? "1순위" : ""}</span>
          ${o.map ? `<a class="btn ghost" href="${o.map}" target="_blank" rel="noopener">지도</a>` : ""}
          ${o.link ? `<a class="btn" href="${esc(o.link)}" target="_blank" rel="noopener">${esc(o.linkLabel || "예약")}</a>` : ""}
        </div>
      </div>`;
  }

  /* 식사 자리를 아직 정하지 않은 슬롯 — 카드 대신 조용한 안내만 남깁니다. */
  function pendingHtml(p, dayId) {
    const picks = (p.recommendations || []).map((id) => R?.items.find((x) => x.id === id)).filter(Boolean);
    return `
      <div class="meal-pend">
        <div class="mp-top">
          <span class="mp-badge">${esc(p.icon || "🍽️")} ${esc(p.slot)}</span>
          <span class="mp-time">${esc(p.time || "")}</span>
          <span class="mp-tag">미정 · 미예약</span>
        </div>
        ${p.area ? `<div class="mp-area">${esc(p.area)}</div>` : ""}
        ${p.note ? `<p class="mp-note">${esc(p.note)}</p>` : ""}
        ${picks.length ? `<div class="pending-recs">
          <b>동선 기반 후보 ${picks.length}곳 · 자리/영업 확인 필요</b>
          ${picks.map((it, i) => `<div class="pending-rec">
            <span class="rec-rank">${i === 0 ? "1순위" : "대안 " + i}</span>
            <div><strong>${esc(it.name)}</strong><small>${esc(it.genre || "")} · ${esc(it.budget || "가격 확인 필요")}<span> · 3인석·예약 및 공휴일 영업 미확인</span></small></div>
            <a href="${esc(it.map)}" target="_blank" rel="noopener">지도</a>
          </div>`).join("")}
          ${p.reservationStatus ? `<p class="rec-warning">${esc(p.reservationStatus)}</p>` : ""}
        </div>` : ""}
        ${R ? `<div class="mp-foot"><button class="mini-btn" type="button" data-gofood="${esc(p.slot)}" data-gday="${esc(dayId || "")}">🍴 이 자리 전체 식당추천 보기</button></div>` : ""}
      </div>`;
  }

  function mealHtml(m, dayId) {
    if (!m.options || !m.options.length) return pendingHtml(m, dayId);
    const [first, ...rest] = m.options;
    const leg = m.leg ? legHtml(m.leg) : "";
    return `
      <div class="meal">
        <div class="meal-top">
          <span class="meal-badge">${esc(m.icon)} ${esc(m.slot)}</span>
          <span class="meal-time">${esc(m.time)}</span>
        </div>
        <h3>${esc(m.area)}</h3>
        ${m.why ? `<p class="meal-why">${esc(m.why)}</p>` : ""}
        ${optionHtml(first, 0, m.options.length)}
        ${rest.length ? `<details class="more"><summary>다른 후보 ${rest.length}곳 보기</summary>${rest.map((o, i) => optionHtml(o, i + 1, m.options.length)).join("")}</details>` : ""}
        ${m.note ? `<div class="meal-foot"><b>확인 메모</b> · ${esc(m.note)}</div>` : ""}
      </div>${leg}`;
  }

  function spotsHtml(spots) {
    if (!spots || !spots.length) return "";
    return `
      <section class="spots">
        <h4>선택 들림 스팟 <span class="sub">메인 일정 아님 · 시간 남으면</span></h4>
        <div class="spot-row">
          ${spots.map((s) => `
            <article class="spot">
              ${s.img ? `<img src="${s.img}" alt="${esc(s.name)} 사진" loading="lazy" decoding="async">` : ""}
              <div class="spot-body">
                <span class="spot-badge">선택 들림</span>
                <div class="spot-name">${esc(s.name)}</div>
                <div class="spot-meta">${esc(s.rating)}${s.walk ? ` · ${esc(s.walk)}` : ""}<br>${esc(s.hours)}</div>
                <p class="spot-note">${esc(s.note)}</p>
                <div class="spot-links">
                  ${s.map ? `<a href="${s.map}" target="_blank" rel="noopener">지도</a>` : ""}
                </div>
              </div>
            </article>`).join("")}
        </div>
      </section>`;
  }

  function dayHtml(d, withHeader) {
    const meals = (d.meals || []).concat(d.mealPending || []);
    const startMeals = meals.filter((m) => m.after === "__start");
    const afterMap = {};
    meals.forEach((m) => { if (m.after !== "__start") (afterMap[m.after] = afterMap[m.after] || []).push(m); });

    let html = "";
    startMeals.forEach((m) => { html += mealHtml(m, d.id); });
    d.items.forEach((it) => {
      html += itemHtml(it);
      (afterMap[it.id] || []).filter((m) => !m.afterLeg).forEach((m) => { html += mealHtml(m, d.id); });
      if (it.leg) html += legHtml(it.leg);
      (afterMap[it.id] || []).filter((m) => m.afterLeg).forEach((m) => { html += mealHtml(m, d.id); });
    });

    return `
      <section id="${d.id}" ${withHeader ? "" : `style="--accent:${d.accent}"`}>
        <div class="day-head" style="--accent:${d.accent}">
          <div class="day-kicker"><span class="bar"></span>DAY ${d.id.slice(1)} · ${esc(d.date)} ${esc(d.weekday)}</div>
          <h2>${esc(d.title)}</h2>
          <p class="summary">${esc(d.summary)}</p>
          <div class="stats">${d.stats.map((s) => `<div class="stat"><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join("")}</div>
          <div class="day-actions">
            <button class="mini-btn" type="button" data-gomap="${d.id}">🗺️ 이 날 동선 지도</button>
            <button class="mini-btn" type="button" data-gofood="${d.id}">🍴 이 날 식당</button>
          </div>
        </div>
        <div class="tl" style="--accent:${d.accent}">${html}</div>
        ${spotsHtml(d.spots)}
      </section>`;
  }

  /* ── 꿀팁·체크 ── */
  function tipsHtml() {
    return `
      <div class="tips-wrap">
        <h2>꿀팁 · 체크리스트</h2>
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
                ${t.links ? `<div class="links">${t.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
              </div>
            </details>`).join("")}
        </div>
      </div>`;
  }

  function bindChecklist() {
    const box = document.getElementById("check");
    if (!box) return;
    const KEY = "tokyo-trip-check-v1";
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { saved = {}; }
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
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
        paint();
      });
    });
    paint();
  }

  /* ══════════════════════ 식당추천 ══════════════════════ */
  const FOOD = { slot: "", tag: "", area: "", q: "" };

  const slotOrder = () => {
    const map = {};
    (R.slots || []).forEach((s, i) => { map[s.id] = i; });
    return map;
  };

  function minSlot(item) {
    const ord = slotOrder();
    return Math.min(...(item.slots || []).map((s) => (ord[s] == null ? 99 : ord[s])), 99);
  }

  function slotLabel(id) {
    const s = (R.slots || []).find((x) => x.id === id);
    return s ? s.label : id;
  }

  function slotsForDay(dayId) {
    return (R.slots || []).filter((s) => s.day === dayId).map((s) => s.id);
  }

  function foodFiltered() {
    const q = FOOD.q.trim().toLowerCase();
    return R.items.filter((it) => {
      if (FOOD.slot === "@day") { /* 전체 */ }
      else if (FOOD.slot && FOOD.slot.startsWith("d") && !FOOD.slot.includes("-")) {
        if (!(it.slots || []).some((s) => s.startsWith(FOOD.slot + "-"))) return false;
      } else if (FOOD.slot && !(it.slots || []).includes(FOOD.slot)) return false;
      if (FOOD.tag && !(it.tags || []).includes(FOOD.tag)) return false;
      if (FOOD.area && it.bigArea !== FOOD.area) return false;
      if (q) {
        const hay = [it.name, it.jp, it.google_name, it.area, it.genre, it.genre_full, it.tip, it.note].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => (minSlot(a) - minSlot(b)) || ((b.google || 0) - (a.google || 0)) || a.name.localeCompare(b.name));
  }

  function scoreHtml(it) {
    const g = it.google
      ? `<span class="rate google">구글 ${it.google}${it.reviews ? ` (${esc(it.reviews)})` : ""}</span>`
      : `<span class="rate">구글 미확인</span>`;
    const t = it.tabelog ? `<span class="rate tabelog">타베로그 ${esc(it.tabelog)}</span>` : `<span class="rate">타베로그 미확인</span>`;
    return g + t;
  }

  const DAY_NAME = { d1: "1일차", d2: "2일차", d3: "3일차", d4: "4일차" };
  const HOUR_KEY = { d1: "d21", d2: "d22", d3: "d23", d4: "d24" };

  function visitHours(it) {
    const slots = it.slots || [];
    if (!slots.length) return "";
    const day = slots[0].slice(0, 2);
    const h = (it.hours || {})[HOUR_KEY[day]] || "미확인";
    return { day, h };
  }

  /* 식당 카드 사진 — lazy 로딩, 실패하면 조용히 사진 칸만 사라집니다 */
  function rimgHtml(it) {
    if (!it.image) return "";
    const cap = it.name + (it.jp ? " · " + it.jp : "") + " 사진";
    return `<div class="rimg">
          <img src="${it.image}" alt="${esc(it.name)} 사진" loading="lazy" decoding="async"
            onerror="this.parentNode.classList.add('noimg');this.parentNode.removeChild(this);">
          <button class="fig-btn" type="button" data-zoom="${it.image}" data-cap="${esc(cap)}" aria-label="사진 크게 보기"></button>
        </div>`;
  }

  function rcardHtml(it) {
    const v = visitHours(it);
    const slots = (it.slots || []).map((s) => `<span class="rchip slot">${esc(slotLabel(s))}</span>`).join("");
    const tags = (it.tags || []).map((t) => `<span class="rchip tag t-${esc(t.replace(/[^\w가-힣]/g, ""))}">${esc(t)}</span>`).join("");
    const hoursList = ["d21", "d22", "d23", "d24"].map((k) => {
      const label = k === "d21" ? "11/21" : k === "d22" ? "11/22" : k === "d23" ? "11/23 공휴일" : "11/24";
      return `<li><b>${label}</b><span>${esc((it.hours || {})[k] || "미확인")}</span></li>`;
    }).join("");
    return `
      <article class="rcard" data-rid="${it.id}">
        ${rimgHtml(it)}
        <div class="rtop">
          <div>
            <h3>${esc(it.name)}</h3>
            ${it.jp ? `<div class="rjp">${esc(it.jp)}</div>` : ""}
          </div>
          ${it.google ? `<div class="rscore"><b>${it.google}</b><span>구글</span></div>` : `<div class="rscore none"><b>–</b><span>미확인</span></div>`}
        </div>
        <div class="rchips">
          ${v ? `<span class="rchip vh">${esc(DAY_NAME[v.day] || "")} ${esc(v.h)}</span>` : ""}
          ${it.hoursVerification?.status === "confirmed" ? `<span class="rchip verified">영업시간 확인</span>` : `<span class="rchip unverified">영업시간 공식 미검증</span>`}
          ${slots}${tags}
        </div>
        <p class="rverify">🕒 ${esc(it.hoursVerification?.label || "영업시간 미확인")} · 자료일 ${esc(it.hoursVerification?.checked || "미상")} · 방문 전 공식 영업 확인</p>
        <dl class="rdl">
          ${it.genre ? `<dt>장르</dt><dd>${esc(it.genre_full || it.genre)}</dd>` : ""}
          ${it.area ? `<dt>권역</dt><dd>${esc(it.area)}${it.walk ? ` · ${esc(it.walk)}` : ""}</dd>` : ""}
          ${it.budget ? `<dt>예산</dt><dd>${esc(it.budget)}</dd>` : ""}
          ${it.phone ? `<dt>전화</dt><dd>${esc(it.phone)}${it.phoneVerification?.status === "confirmed" ? ` <a href="${esc(it.phoneVerification.source)}" target="_blank" rel="noopener">번호 출처</a>` : ""}</dd>` : ""}
        </dl>
        <div class="rscores">${scoreHtml(it)}</div>
        ${it.tip ? `<p class="rtip"><b>팁</b> · ${esc(it.tip)}</p>` : ""}
        ${it.note ? `<details class="rmore"><summary>설명·메모</summary><p>${esc(it.note)}</p>${it.awards ? `<p class="award">${esc(it.awards)}</p>` : ""}</details>` : ""}
        <details class="rhours"><summary>11/21~24 영업시간</summary><ul>${hoursList}</ul></details>
        <div class="racts">
          <a class="btn" href="${it.map}" target="_blank" rel="noopener">📍 구글맵</a>
          <a class="btn ghost" href="https://www.google.com/maps/dir/?api=1&destination=${it.lat},${it.lng}" target="_blank" rel="noopener">🧭 길찾기</a>
          <button class="btn ghost" type="button" data-showmap="${it.id}">🗺️ 지도에서</button>
        </div>
      </article>`;
  }

  function foodListHtml() {
    const list = foodFiltered();
    if (!list.length) return `<div class="empty">조건에 맞는 식당이 없습니다. 필터를 하나씩 풀어 보세요.</div>`;
    // 슬롯별 묶음 (슬롯 필터를 쓰지 않을 때)
    const grouped = !FOOD.slot || FOOD.slot === "@day";
    if (!grouped) {
      return `<div class="rlist">${list.map(rcardHtml).join("")}</div>`;
    }
    const groups = new Map();
    list.forEach((it) => {
      const key = (it.slots && it.slots.length) ? it.slots[0] : "etc";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(it);
    });
    const ord = slotOrder();
    const keys = [...groups.keys()].sort((a, b) => (ord[a] == null ? 99 : ord[a]) - (ord[b] == null ? 99 : ord[b]));
    return keys.map((k) => {
      const slot = (R.slots || []).find((s) => s.id === k);
      const head = slot ? `${esc(slot.label)} <span>${esc(slot.time)}</span>` : "그 밖의 후보";
      return `<section class="rgroup"><h3 class="rgroup-h">${head} <b>${groups.get(k).length}</b></h3>
        <div class="rlist">${groups.get(k).map(rcardHtml).join("")}</div></section>`;
    }).join("");
  }

  function chipRow(kind, values, current, labels) {
    return `<div class="frow" data-group="${kind}" role="group">
      <button class="fchip ${current === "" ? "on" : ""}" type="button" data-val="">전체</button>
      ${values.map((v) => {
        const val = typeof v === "string" ? v : v.id;
        const label = labels ? labels(v) : (typeof v === "string" ? v : v.label);
        return `<button class="fchip ${current === val ? "on" : ""}" type="button" data-val="${esc(val)}">${esc(label)}</button>`;
      }).join("")}
    </div>`;
  }

  function foodHtml() {
    const dayChips = D.days.map((d) => ({ id: d.id, label: d.tab.replace(/\s*\(.*\)/, "") + " 일정" }));
    return `
      <div class="foodwrap">
        <div class="foodhead">
          <h2>식당추천 <span class="cnt">${R.meta.count}곳</span></h2>
          <p class="lead">끼니별 가이드 · 생일 저녁 · 고급 해산물을 중복 정리해 한곳에 모았습니다. 11/23은 공휴일이라 영업시간을 날짜별로 확인하세요.</p>
        </div>

        <div class="searchbox">
          <span aria-hidden="true">🔎</span>
          <input id="fq" type="search" inputmode="search" autocomplete="off" placeholder="가게명 · 지역 · 장르 검색 (예: 스시, 신주쿠)" value="${esc(FOOD.q)}">
          <button type="button" id="fq-clear" aria-label="검색 지우기">×</button>
        </div>

        <div class="filters">
          <div class="fg-label">일차</div>
          ${chipRow("days", dayChips.map((d) => d.id), FOOD.slot && FOOD.slot.startsWith("d") && !FOOD.slot.includes("-") ? FOOD.slot : "", (id) => (dayChips.find((d) => d.id === id) || {}).label)}
          <div class="fg-label">끼니</div>
          ${chipRow("slot", R.slots.map((s) => s.id), FOOD.slot.includes("-") ? FOOD.slot : "", (id) => slotLabel(id))}
          <details class="fmore" ${FOOD.tag || FOOD.area ? "open" : ""}>
            <summary>테마 · 권역 필터${FOOD.tag || FOOD.area ? ` <b>${esc(FOOD.tag || FOOD.area)}</b>` : ""}</summary>
            <div class="fg-label">테마</div>
            ${chipRow("tag", R.tags, FOOD.tag)}
            <div class="fg-label">권역</div>
            ${chipRow("area", R.bigAreas, FOOD.area)}
          </details>
        </div>

        <div class="fmeta"><span id="fcount"></span><button type="button" id="freset">필터 초기화</button></div>
        <div id="flist">${foodListHtml()}</div>
        <p class="foodnote">${esc(R.meta.note)}</p>
      </div>`;
  }

  function updateFoodCount() {
    const n = foodFiltered().length;
    const el = document.getElementById("fcount");
    if (el) el.textContent = `${n}곳`;
  }

  function bindFood() {
    const wrap = view.querySelector(".foodwrap");
    if (!wrap) return;
    updateFoodCount();

    const input = document.getElementById("fq");
    const redraw = () => {
      document.getElementById("flist").innerHTML = foodListHtml();
      updateFoodCount();
    };
    let t = null;
    input.addEventListener("input", () => {
      FOOD.q = input.value;
      clearTimeout(t);
      t = setTimeout(redraw, 120);
    });
    document.getElementById("fq-clear").addEventListener("click", () => {
      FOOD.q = ""; input.value = ""; redraw(); input.focus();
    });
    document.getElementById("freset").addEventListener("click", () => {
      FOOD.slot = FOOD.tag = FOOD.area = FOOD.q = "";
      render("food");
    });
    wrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".fchip");
      if (!chip) return;
      const group = chip.closest(".frow").dataset.group;
      const val = chip.dataset.val;
      if (group === "days" || group === "slot") FOOD.slot = val || "";
      if (group === "tag") FOOD.tag = val;
      if (group === "area") FOOD.area = val;
      ["days", "slot"].forEach((g) => {
        const row = wrap.querySelector(`.frow[data-group="${g}"]`);
        if (!row) return;
        row.querySelectorAll(".fchip").forEach((c) => {
          const cv = c.dataset.val;
          const on = g === "days"
            ? (cv === "" && !FOOD.slot.includes("-")) || cv === FOOD.slot
            : (cv === "" && !FOOD.slot.includes("-")) || cv === FOOD.slot;
          c.classList.toggle("on", on);
        });
      });
      wrap.querySelectorAll('.frow[data-group="tag"] .fchip').forEach((c) => c.classList.toggle("on", c.dataset.val === FOOD.tag));
      wrap.querySelectorAll('.frow[data-group="area"] .fchip').forEach((c) => c.classList.toggle("on", c.dataset.val === FOOD.area));
      redraw();
    });
  }

  /* ══════════════════════ 동선 지도 ══════════════════════ */
  const MAP = { day: "all", food: false, focus: null };
  let leaflet = null;

  const MAP_DAYS = () => {
    if (!M) return [];
    return M.days.map((old) => {
      const actual = D.days.find((day) => day.id === old.id);
      if (!actual) return old;
      const byId = new Map(actual.items.map((it) => [it.id, it]));
      const railOrBus = new Set(["d1-2","d1-3","d1-4","d2-5","d2-6","d2-18","d3-1","d3-5","d3-10","d3-12b","d4-2","d4-3"]);
      const stops = old.stops.map((stop) => {
        const it = byId.get(stop.id);
        return it ? { ...stop, time: it.time, name: it.title, priority: it.priority } : stop;
      });
      // 장소의 좌표는 route.js에서 사용하되, 일정·시각·우선순위는 itinerary.js를 단일 진실원으로 사용.
      const pieces = [];
      for (let j = 0; j < stops.length - 1; j++) {
        const from = stops[j], to = stops[j+1], current = byId.get(from.id);
        let mode = railOrBus.has(from.id) || current?.leg?.type === "bus" || current?.leg?.type === "train" ? "transit" : "walking";
        if (from.id === "d4-3") mode = "transit"; // N'EX 본구간
        if (from.id === "d1-2") mode = "transit"; // 공항 리무진
        const last = pieces[pieces.length - 1];
        if (mode === "walking" && last?.mode === "walking" && last.points.length < 5) {
          last.points.push(to);
        } else {
          pieces.push({ mode, points: [from, to] });
        }
      }
      const segments = pieces.map((group) => ({
        mode: group.mode,
        from: group.points[0].name,
        to: group.points[group.points.length - 1].name,
        points: group.points,
        url: googleDir(group.points, group.mode)
      }));
      return { ...old, stops: stops.map((p, i) => ({...p, n:i+1})), segments };
    });
  };

  function stopsFor(dayId) {
    return MAP_DAYS().filter((d) => dayId === "all" || d.id === dayId);
  }

  function googleDir(points, travelmode = "walking") {
    if (!points || points.length < 2) return "";
    const a = points[0], b = points[points.length - 1];
    const mid = points.slice(1, -1);
    let u = `https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${b.lat},${b.lng}&travelmode=${travelmode}`;
    if (mid.length && travelmode === "walking") u += "&waypoints=" + mid.map((p) => `${p.lat},${p.lng}`).join("%7C");
    return u;
  }

  function mapHtml() {
    const day = MAP.day;
    const days = stopsFor(day);
    const total = days.reduce((n, d) => n + d.stops.length, 0);
    return `
      <div class="mapwrap">
        <div class="maphead">
          <h2>동선 지도</h2>
          <p class="lead">방문 순서와 시각은 일정 데이터와 자동 동기화됩니다. 아래 전철/버스 구간과 도보 쇼핑 구간을 나누어 열 수 있습니다. 정확한 열차시각은 현장 확인이 필요합니다.</p>
        </div>
        <div class="mapchips">
          <button class="fchip ${day === "all" ? "on" : ""}" type="button" data-mday="all">전체</button>
          ${MAP_DAYS().map((d) => `<button class="fchip dchip ${day === d.id ? "on" : ""}" type="button" data-mday="${d.id}" style="--c:${d.color}">${esc(d.tab.replace(/\s*\(.*\)/, ""))}</button>`).join("")}
          <button class="fchip foodpin ${MAP.food ? "on" : ""}" type="button" id="foodpin">🍴 식당 핀</button>
        </div>
        <p class="maphint">일차를 고르면 그날 순서만 크게 보입니다 · 마커를 누르면 구글맵으로 열립니다</p>
        <div id="mapcanvas" class="map" role="application" aria-label="일차별 동선 지도"></div>
        <div class="mapfallback" id="mapfallback" hidden>지도를 불러오지 못했습니다(오프라인일 수 있습니다). 아래 목록과 구글맵 버튼은 그대로 쓸 수 있습니다.</div>
        <div class="maplegend">${days.map((d) => `<span><i style="background:${d.color}"></i>${esc(d.label)}</span>`).join("")}${MAP.food ? `<span><i class="dot"></i>추천 식당</span>` : ""}</div>

        ${days.map((d) => `
          <section class="mday">
            <h3 class="mday-h" style="--c:${d.color}"><i></i>${esc(d.label)} <span>${esc(d.title)}</span></h3>
            <div class="mseg">
              ${(d.segments || []).map((s, i) => `
                <a class="btn" href="${s.url}" target="_blank" rel="noopener">${s.mode === "transit" ? "🚆 전철·버스" : "🚶 도보"} 경로 ${d.segments.length > 1 ? `${i + 1}/${d.segments.length}` : ""} · ${esc(s.from)}→${esc(s.to)}</a>`).join("")}
            </div>
            <ol class="mstops">
              ${d.stops.map((s) => `
                <li data-stop="${esc(s.id)}">
                  <span class="mnum" style="--c:${d.color}">${s.n}</span>
                  <div class="mstop-body">
                    <div class="mrow"><span class="mtime">${esc(s.time)}</span><b>${esc(s.name)}</b>${s.kind === "meal" ? '<span class="mkind">식사</span>' : ""}${s.kind === "hotel" ? '<span class="mkind">숙소</span>' : ""}${s.priority === "optional" ? '<span class="mkind">선택</span>' : ""}</div>
                    ${s.jp ? `<div class="mjp">${esc(s.jp)}</div>` : ""}
                    <div class="mlinks">
                      <a href="${s.map}" target="_blank" rel="noopener">구글맵</a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}" target="_blank" rel="noopener">길찾기</a>
                      <button type="button" data-mapto="${esc(s.id)}">지도에서 보기</button>
                    </div>
                  </div>
                </li>`).join("")}
            </ol>
          </section>`).join("")}
        <p class="foodnote">지도 타일: OpenStreetMap / 좌표: 각 장소 구글맵 기준 · ${total}개 지점</p>
      </div>`;
  }

  function markerIcon(n, color, small) {
    const size = small ? 20 : 26;
    return L.divIcon({
      className: "mpin-wrap",
      html: `<span class="mpin${small ? " sm" : ""}" style="--c:${color}">${n}</span>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2],
    });
  }

  function popupHtml(s, color) {
    return `<div class="mpop">
      <div class="mpop-t"><span class="mpop-n" style="--c:${color}">${s.n}</span><b>${esc(s.name)}</b></div>
      ${s.jp ? `<div class="mpop-jp">${esc(s.jp)}</div>` : ""}
      <div class="mpop-time">${esc(s.time)}</div>
      <div class="mpop-a">
        <a href="${s.map}" target="_blank" rel="noopener">구글맵 열기</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}" target="_blank" rel="noopener">길찾기</a>
      </div>
    </div>`;
  }

  function initMap() {
    const box = document.getElementById("mapcanvas");
    if (!box) return;
    if (!window.L) {
      document.getElementById("mapfallback").hidden = false;
      box.style.display = "none";
      return;
    }
    const days = stopsFor(MAP.day);
    const map = L.map(box, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      tap: true,
    });
    leaflet = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const allPts = [];
    days.forEach((d) => {
      const latlngs = d.stops.map((s) => [s.lat, s.lng]);
      if (latlngs.length > 1) {
        L.polyline(latlngs, {
          color: d.color, weight: 3, opacity: 0.85,
          dashArray: MAP.day === "all" ? "1 6" : null, lineCap: "round",
        }).addTo(map);
      }
      d.stops.forEach((s) => {
        const m = L.marker([s.lat, s.lng], { icon: markerIcon(s.n, d.color, MAP.day === "all"), title: s.name, riseOnHover: true }).addTo(map);
        m.bindPopup(popupHtml(s, d.color), { maxWidth: 260, minWidth: 200 });
        allPts.push([s.lat, s.lng]);
      });
    });

    if (MAP.food && R) {
      const dayIds = MAP.day === "all" ? null : [MAP.day];
      R.items.forEach((it) => {
        if (!it.lat) return;
        if (dayIds && !(it.slots || []).some((s) => s.startsWith(dayIds[0] + "-"))) return;
        const bday = (it.tags || []).includes("생일저녁");
        const cm = L.circleMarker([it.lat, it.lng], {
          radius: 4.5, color: bday ? "#b0741e" : "#6b7787", weight: 1,
          fillColor: bday ? "#e8b34b" : "#c9d2dc", fillOpacity: 0.95,
        }).addTo(map);
        cm.bindPopup(`<div class="mpop"><div class="mpop-t"><b>${esc(it.name)}</b></div>
          <div class="mpop-jp">${esc(it.jp || "")}</div>
          <div class="mpop-time">${esc(it.genre || "")} · ${esc(it.area || "")}${it.google ? ` · 구글 ${it.google}` : ""}</div>
          <div class="mpop-a"><a href="${it.map}" target="_blank" rel="noopener">구글맵 열기</a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${it.lat},${it.lng}" target="_blank" rel="noopener">길찾기</a></div></div>`, { maxWidth: 250 });
      });
    }

    if (MAP.focus) {
      map.setView([MAP.focus.lat, MAP.focus.lng], 16);
    } else if (allPts.length) {
      // 전체 보기에서는 공항(나리타·하네다)이 화면을 넓혀 시내가 뭉개지므로, 시내 지점만 기준으로 맞춥니다.
      const cityPts = MAP.day === "all" ? allPts.filter((p) => p[1] < 139.95 && p[1] > 139.5) : allPts;
      map.fitBounds(cityPts.length > 1 ? cityPts : allPts, { padding: [28, 28], maxZoom: 14 });
    } else {
      map.setView(M.meta.center, 12);
    }
    setTimeout(() => map.invalidateSize(), 60);
  }

  function destroyMap() {
    if (leaflet) {
      leaflet.remove();
      leaflet = null;
    }
  }

  function bindMap() {
    const wrap = view.querySelector(".mapwrap");
    if (!wrap) return;
    initMap();
    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("[data-mday]");
      if (b) {
        MAP.day = b.dataset.mday; MAP.focus = null;
        render("map");
        return;
      }
      const t = e.target.closest("#foodpin");
      if (t) {
        MAP.food = !MAP.food;
        render("map");
        return;
      }
      const s = e.target.closest("[data-mapto]");
      if (s && leaflet) {
        const id = s.dataset.mapto;
        const day = MAP_DAYS().find((d) => d.stops.some((x) => x.id === id));
        if (day) {
          const stop = day.stops.find((x) => x.id === id);
          leaflet.setView([stop.lat, stop.lng], 16);
          leaflet.eachLayer((l) => { if (l instanceof L.Marker && l.getLatLng().lat === stop.lat && l.getLatLng().lng === stop.lng) l.openPopup(); });
        }
      }
    });
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
    const g = e.target.closest("[data-gomap]");
    if (g) {
      MAP.day = g.dataset.gomap; MAP.focus = null;
      history.replaceState(null, "", "#map");
      render("map");
      return;
    }
    const f = e.target.closest("[data-gofood]");
    if (f) {
      const v = f.dataset.gofood;
      const gd = f.dataset.gday || "";
      FOOD.tag = FOOD.area = FOOD.q = "";
      if (/^d[1-4]$/.test(v)) {
        FOOD.slot = v;
      } else {
        const slot = (R.slots || []).find((s) => (!gd || s.day === gd) && (s.label.includes(v) || s.id === v)) ||
          (R.slots || []).find((s) => s.label.includes(v) || s.id === v);
        FOOD.slot = slot ? slot.id : "";
      }
      history.replaceState(null, "", "#food");
      render("food");
      return;
    }
    const sm = e.target.closest("[data-showmap]");
    if (sm) {
      const it = R.items.find((x) => x.id === sm.dataset.showmap);
      if (it) {
        MAP.day = (it.slots && it.slots[0]) ? it.slots[0].slice(0, 2) : "all";
        MAP.food = true;
        MAP.focus = { lat: it.lat, lng: it.lng };
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
  let hintDismissed = false;
  try { hintDismissed = localStorage.getItem("tokyo-trip-hint") === "off"; } catch (e) {}
  if (standalone || hintDismissed) {
    hint.remove();
  } else {
    hint.querySelector("button").addEventListener("click", () => {
      try { localStorage.setItem("tokyo-trip-hint", "off"); } catch (e) {}
      hint.remove();
    });
  }

  /* ── 서비스 워커 (오프라인) ── */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {/* 오프라인 캐시는 없어도 동작 */});
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
