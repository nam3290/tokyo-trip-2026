/* 도쿄 3박 4일 — 데이터(itinerary.js)를 읽어 화면을 그립니다. */
(function () {
  const D = window.TRIP_DATA;
  const view = document.getElementById("view");
  const tabsEl = document.getElementById("tabs");
  const heroEl = document.getElementById("hero");

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
    </div>
    <div class="notice">${esc(D.meta.notice)}</div>`;

  /* ── 탭 ── */
  const tabs = [{ id: "all", label: "전체" }]
    .concat(D.days.map((d) => ({ id: d.id, label: d.tab, accent: d.accent, isNow: todayDay && todayDay.id === d.id })))
    .concat([{ id: "tips", label: "꿀팁·체크" }]);
  const initial = location.hash && tabs.some((t) => t.id === location.hash.slice(1)) ? location.hash.slice(1) : (todayDay ? todayDay.id : "all");

  tabsEl.innerHTML = tabs.map((t) => `
    <button class="tab" role="tab" data-tab="${t.id}" ${t.accent ? `data-day style="--tab-accent:${t.accent}"` : ""}
      aria-selected="${t.id === initial}" ${t.id === initial ? 'tabindex="0"' : 'tabindex="-1"'}>
      ${t.isNow ? '<span class="now" aria-hidden="true"></span>' : ""}${esc(t.label)}
    </button>`).join("");

  /* ── 아이템/이동/식사 렌더 ── */
  function photoCard(src, alt) {
    return `<figure><img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async">
      <button class="fig-btn" type="button" data-zoom="${src}" data-cap="${esc(alt)}" aria-label="사진 크게 보기"></button></figure>`;
  }

  function itemHtml(it) {
    const img = it.img ? photoCard(it.img, it.title + " 사진") : "";
    const map = it.map
      ? `<a class="btn" href="${it.map}" target="_blank" rel="noopener">📍 구글맵 열기</a>`
      : "";
    return `
      <span class="node" aria-hidden="true"></span>
      <article class="card">
        <div class="card-head">
          <span class="timechip">${esc(it.time)}</span>
          <h3>${esc(it.title)}</h3>
          ${it.jp ? `<div class="jp">${esc(it.jp)}</div>` : ""}
        </div>
        ${img}
        <div class="meta">
          ${it.hours ? `<div class="meta-row"><span class="ico">🕘</span><span>${esc(it.hours)}</span></div>` : ""}
        </div>
        ${it.note ? `<div class="note">${esc(it.note)}</div>` : ""}
        ${map ? `<div class="actions">${map}</div>` : ""}
      </article>`;
  }

  const LEG_LABEL = { walk: "도보", train: "전철", bus: "버스" };
  function legHtml(leg) {
    return `
      <span class="node leg-node" aria-hidden="true"></span>
      <div class="leg">
        <div class="leg-head">
          <span class="leg-type">${LEG_LABEL[leg.type] || "이동"}</span>
          <span class="leg-label">${esc(leg.label)}</span>
        </div>
        ${leg.detail ? `<div class="leg-detail">${esc(leg.detail)}</div>` : ""}
        ${leg.alt ? `<div class="leg-alt"><b>대안</b> · ${esc(leg.alt)}</div>` : ""}
      </div>`;
  }

  function optionHtml(o, first) {
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
          <span class="walk">${first === 0 ? "1순위" : ""}</span>
          ${o.map ? `<a class="btn ghost" href="${o.map}" target="_blank" rel="noopener">지도</a>` : ""}
        </div>
      </div>`;
  }

  function mealHtml(m) {
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
        ${optionHtml(first, 0)}
        ${rest.length ? `<details class="more"><summary>다른 후보 ${rest.length}곳 보기</summary>${rest.map((o, i) => optionHtml(o, i + 1)).join("")}</details>` : ""}
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
    const meals = d.meals || [];
    const startMeals = meals.filter((m) => m.after === "__start");
    const afterMap = {};
    meals.forEach((m) => { if (m.after !== "__start") (afterMap[m.after] = afterMap[m.after] || []).push(m); });

    let html = "";
    startMeals.forEach((m) => { html += mealHtml(m); });
    d.items.forEach((it) => {
      html += itemHtml(it);
      (afterMap[it.id] || []).filter((m) => !m.afterLeg).forEach((m) => { html += mealHtml(m); });
      if (it.leg) html += legHtml(it.leg);
      (afterMap[it.id] || []).filter((m) => m.afterLeg).forEach((m) => { html += mealHtml(m); });
    });

    return `
      <section id="${d.id}" ${withHeader ? "" : `style="--accent:${d.accent}"`}>
        <div class="day-head" style="--accent:${d.accent}">
          <div class="day-kicker"><span class="bar"></span>DAY ${d.id.slice(1)} · ${esc(d.date)} ${esc(d.weekday)}</div>
          <h2>${esc(d.title)}</h2>
          <p class="summary">${esc(d.summary)}</p>
          <div class="stats">${d.stats.map((s) => `<div class="stat"><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join("")}</div>
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

  /* ── 렌더 ── */
  function render(tabId) {
    if (tabId === "tips") {
      view.innerHTML = tipsHtml();
      bindChecklist();
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
    [...tabsEl.querySelectorAll(".tab")].forEach((t) => t.setAttribute("aria-selected", String(t === b)));
    history.replaceState(null, "", "#" + b.dataset.tab);
    render(b.dataset.tab);
  });

  view.addEventListener("click", (e) => {
    const z = e.target.closest("[data-zoom]");
    if (z) { openModal(z.dataset.zoom, z.dataset.cap); return; }
    const j = e.target.closest("[data-jump]");
    if (j) {
      e.preventDefault();
      const el = document.getElementById(j.dataset.jump);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  render(initial);
})();
