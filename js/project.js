/* Handsome. — Individual project page.
   Reads ?id=<project-id>, renders the case study from js/projects-data.js. */
(function () {
  "use strict";

  var root = document.getElementById("project-root");
  var PROJECTS = window.HANDSOME_PROJECTS || [];
  if (!root) return;

  // Same on every case study in the reference. Edit here to change them all.
  var ROLE = "UI/UX design & frontend implementation";
  var YEAR = "2026";
  var DEV = [
    "Responsive interface implementation",
    "Reusable component structure",
    "Accessible interaction states",
  ];
  var LESSONS = [
    "Keep the primary decision visible at every viewport.",
    "Let content hierarchy carry the experience before ornament.",
    "Use motion and interaction only where they clarify the next step.",
  ];
  var FRAMES = [
    "Supplied showcase",
    "Interface composition",
    "Responsive direction",
  ];

  var ARROW =
    '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var EXTERNAL =
    '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M5 2.5H2.5v7h7V7M7 2.5h2.5V5M9.5 2.5 5.5 6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var BACK =
    '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M10.5 6H1.5M5.5 2 1.5 6l4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var EXPAND =
    '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M7 1.5h3.5V5M5 10.5H1.5V7M10.5 1.5 7 5M1.5 10.5 5 7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function num(i) {
    return (i < 9 ? "0" : "") + (i + 1);
  }
  function list(items, fn) {
    return items.map(fn).join("");
  }

  var id = new URLSearchParams(window.location.search).get("id");
  var index = -1;
  PROJECTS.forEach(function (p, i) {
    if (p.id === id) index = i;
  });

  if (index === -1) {
    renderMissing();
    return;
  }

  var p = PROJECTS[index];
  var next = PROJECTS[(index + 1) % PROJECTS.length];
  var host = new URL(p.url).host.toUpperCase() + "/";

  document.title = p.title + " — Hussen Taiwo";
  var meta = document.querySelector('meta[name="description"]');
  if (meta)
    meta.setAttribute(
      "content",
      p.title +
        " — " +
        p.description +
        " A project case study by Hussen Taiwo.",
    );

  var NAV = [
    ["overview", "Overview"],
    ["challenge", "Challenge"],
    ["process", "Process"],
    ["design", "Design"],
    ["responsive", "Responsive"],
    ["interactions", "Interactions"],
    ["development", "Development"],
    ["gallery", "Gallery"],
  ];

  function frame(img, alt) {
    return (
      '<div class="pj-frame">' +
      '<div class="pj-frame__chrome" aria-hidden="true"><span class="pj-dots"><i></i><i></i><i></i></span><span>Live project</span><span class="pj-frame__host">' +
      esc(host) +
      "</span></div>" +
      '<div class="pj-frame__shot"><img src="' +
      esc(img) +
      '" alt="' +
      esc(alt) +
      '" decoding="async">' +
      '<span class="pj-frame__badge" aria-hidden="true">Live site / Supplied showcase</span></div></div>'
    );
  }

  var html =
    '<section class="pj-hero" aria-labelledby="pj-title">' +
    '<div class="container">' +
    '<a class="pj-back" href="work.html">' +
    BACK +
    "All work</a>" +
    '<div class="pj-hero__grid">' +
    '<div class="pj-hero__main">' +
    '<p class="index-label reveal">( Live project / ' +
    esc(p.type) +
    " )</p>" +
    '<h1 class="pj-title reveal" id="pj-title" style="--i:1">' +
    esc(p.title) +
    "</h1>" +
    '<p class="pj-tagline reveal" style="--i:2">' +
    esc(p.description) +
    "</p>" +
    '<div class="pj-actions reveal" style="--i:3">' +
    '<a class="btn btn-primary btn-sm" href="' +
    esc(p.url) +
    '" target="_blank" rel="noopener noreferrer">Visit live site' +
    EXTERNAL +
    '<span class="sr-only"> (opens in a new tab)</span></a>' +
    '<a class="btn btn-outline btn-sm" href="contact.html">Work with me' +
    ARROW +
    "</a>" +
    "</div>" +
    "</div>" +
    '<dl class="pj-meta reveal" style="--i:2">' +
    "<div><dt>Role</dt><dd>" +
    esc(ROLE) +
    "</dd></div>" +
    "<div><dt>Year</dt><dd>" +
    YEAR +
    "</dd></div>" +
    "<div><dt>Services</dt><dd>" +
    esc(p.services) +
    "</dd></div>" +
    "</dl>" +
    "</div>" +
    '<figure class="pj-hero__media reveal">' +
    '<div class="pj-frame pj-frame--hero">' +
    '<div class="pj-frame__chrome" aria-hidden="true"><span class="pj-dots"><i></i><i></i><i></i></span><span>Live project</span><span class="pj-frame__host">' +
    esc(host) +
    "</span></div>" +
    '<div class="pj-frame__shot"><img src="' +
    esc(p.image) +
    '" alt="' +
    esc(p.imageAlt) +
    '" decoding="async">' +
    '<span class="pj-chip-badge">' +
    esc(p.badge) +
    "</span>" +
    '<span class="pj-frame__badge" aria-hidden="true">Live site / Supplied showcase</span></div>' +
    "</div>" +
    (p.caption
      ? '<figcaption class="pj-caption">' + esc(p.caption) + "</figcaption>"
      : "") +
    "</figure>" +
    "</div>" +
    "</section>" +
    '<div class="container pj-layout">' +
    '<div class="pj-body">' +
    '<section class="pj-section pj-summary reveal" id="overview" aria-labelledby="h-overview">' +
    '<p class="index-label" id="h-overview">01 / Executive summary</p>' +
    '<h2 class="pj-lead">' +
    esc(p.summary) +
    "</h2>" +
    '<ul class="pj-chips">' +
    list(p.chips, function (c) {
      return "<li>" + esc(c) + "</li>";
    }) +
    "</ul>" +
    "</section>" +
    '<section class="pj-section pj-split reveal" id="challenge" aria-labelledby="h-challenge">' +
    '<div><p class="index-label">02 / Challenge</p><h2 class="pj-h2" id="h-challenge">Make the problem visible before making the interface.</h2></div>' +
    '<p class="pj-text">' +
    esc(p.challenge) +
    "</p>" +
    "</section>" +
    '<section class="pj-section reveal" aria-labelledby="h-objectives">' +
    '<p class="index-label" id="h-objectives">03 / Objectives</p>' +
    '<ol class="pj-rows">' +
    list(p.objectives, function (o, i) {
      return "<li><span>" + num(i) + "</span>" + esc(o) + "</li>";
    }) +
    "</ol>" +
    "</section>" +
    '<section class="pj-section reveal" id="process" aria-labelledby="h-process">' +
    '<p class="index-label" id="h-process">04 / Process</p>' +
    '<ol class="pj-cards pj-cards--fill">' +
    list(p.process, function (s, i) {
      return "<li><span>" + num(i) + "</span><h3>" + esc(s) + "</h3></li>";
    }) +
    "</ol>" +
    "</section>" +
    '<section class="pj-section reveal" id="design" aria-labelledby="h-design">' +
    '<div class="pj-design">' +
    '<div class="pj-panel"><p class="index-label">05 / Design</p><h2 class="pj-h2" id="h-design">Visual decisions that carry the story.</h2><p class="pj-text">' +
    esc(p.design) +
    "</p></div>" +
    '<div class="pj-panel"><p class="index-label">Design system</p><ul class="pj-checks">' +
    list(p.system, function (s) {
      return "<li>" + esc(s) + "</li>";
    }) +
    "</ul></div>" +
    "</div>" +
    "</section>" +
    '<section class="pj-section pj-split reveal" id="responsive" aria-labelledby="h-responsive">' +
    '<div><p class="index-label">06 / Responsive views</p><h2 class="pj-h2" id="h-responsive">One direction, considered at every width.</h2></div>' +
    '<p class="pj-text">' +
    esc(p.responsive) +
    "</p>" +
    "</section>" +
    '<section class="pj-section reveal" aria-labelledby="h-features">' +
    '<p class="index-label" id="h-features">07 / Features</p>' +
    '<ul class="pj-cards pj-cards--line">' +
    list(p.features, function (f) {
      return (
        '<li><span class="pj-cards__arrow" aria-hidden="true">' +
        ARROW +
        "</span><h3>" +
        esc(f) +
        "</h3></li>"
      );
    }) +
    "</ul>" +
    "</section>" +
    '<section class="pj-section pj-split reveal" id="interactions" aria-labelledby="h-interactions">' +
    '<div><p class="index-label">08 / Interactions</p><h2 class="pj-h2" id="h-interactions">Make the next useful action feel close.</h2></div>' +
    '<p class="pj-text">' +
    esc(p.interactions) +
    "</p>" +
    "</section>" +
    '<section class="pj-section pj-split reveal" id="development" aria-labelledby="h-development">' +
    '<div><p class="index-label">09 / Development</p><h2 class="pj-h2" id="h-development">Design intent should survive contact with code.</h2></div>' +
    '<ul class="pj-checks pj-checks--loose">' +
    list(DEV, function (d) {
      return "<li>" + esc(d) + "</li>";
    }) +
    "</ul>" +
    "</section>" +
    '<section class="pj-outcome reveal" aria-labelledby="h-outcome">' +
    '<p class="index-label" id="h-outcome">10 / Outcome</p>' +
    '<p class="pj-outcome__text">' +
    esc(p.outcome) +
    "</p>" +
    "</section>" +
    '<section class="pj-section pj-gallery reveal" id="gallery" aria-labelledby="h-gallery">' +
    '<p class="index-label">11 / Presentation</p>' +
    '<div class="pj-gallery__head"><h2 class="pj-h2 pj-h2--wide" id="h-gallery">Read the experience in frames.</h2>' +
    '<span class="pj-hint">' +
    EXPAND +
    "Select a frame</span></div>" +
    '<div class="pj-frames" id="pj-frames"></div>' +
    "</section>" +
    '<section class="pj-section reveal" aria-labelledby="h-lessons">' +
    '<p class="index-label" id="h-lessons">12 / Lessons</p>' +
    '<ul class="pj-arrows">' +
    list(LESSONS, function (l) {
      return "<li>" + esc(l) + "</li>";
    }) +
    "</ul>" +
    "</section>" +
    "</div>" +
    '<nav class="pj-toc" aria-label="On this page"><p class="index-label">On this page</p><ul>' +
    list(NAV, function (n) {
      return '<li><a href="#' + n[0] + '">' + n[1] + "</a></li>";
    }) +
    "</ul></nav>" +
    "</div>" +
    '<div class="container"><a class="pj-next" href="project.html?id=' +
    encodeURIComponent(next.id) +
    '">' +
    '<span class="pj-next__label index-label">Next project</span>' +
    '<span class="pj-next__row"><span class="pj-next__title">' +
    esc(next.title) +
    '</span><span class="pj-next__arrow" aria-hidden="true">' +
    ARROW +
    "</span></span>" +
    "</a></div>";

  root.innerHTML = html;

  /* Frames: one large + two small. Selecting a small one makes it the large one. */
  var framesEl = document.getElementById("pj-frames");
  var current = 0;
  function renderFrames(focusIdx) {
    var others = [0, 1, 2].filter(function (i) {
      return i !== current;
    });
    function fig(i, big) {
      var inner =
        '<span class="pj-shot' +
        (big ? " pj-shot--big" : "") +
        '">' +
        frame(p.image, p.imageAlt + " — " + FRAMES[i]) +
        "</span>";
      if (big)
        return (
          '<figure class="pj-fig pj-fig--big">' +
          inner +
          "<figcaption>" +
          FRAMES[i] +
          "</figcaption></figure>"
        );
      return (
        '<figure class="pj-fig"><button type="button" class="pj-fig__btn" data-frame="' +
        i +
        '" aria-pressed="false" aria-label="Show frame: ' +
        FRAMES[i] +
        '">' +
        inner +
        "</button><figcaption>" +
        FRAMES[i] +
        "</figcaption></figure>"
      );
    }
    framesEl.innerHTML =
      fig(current, true) +
      '<div class="pj-frames__small">' +
      others
        .map(function (i) {
          return fig(i, false);
        })
        .join("") +
      "</div>";
    if (focusIdx != null) {
      var b = framesEl.querySelector('[data-frame="' + focusIdx + '"]');
      if (b) b.focus();
    }
  }
  framesEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-frame]");
    if (!b) return;
    var chosen = Number(b.dataset.frame);
    var prev = current;
    current = chosen;
    renderFrames(prev); // the previously large frame takes the clicked slot, so focus stays on a button
  });
  framesEl.setAttribute("aria-live", "polite");
  renderFrames();

  /* "On this page": mark the section in view. */
  var links = document.querySelectorAll(".pj-toc a");
  if ("IntersectionObserver" in window && links.length) {
    var map = {};
    links.forEach(function (a) {
      map[a.getAttribute("href").slice(1)] = a;
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) {
            a.removeAttribute("aria-current");
          });
          var a = map[en.target.id];
          if (a) a.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    Object.keys(map).forEach(function (k) {
      var el = document.getElementById(k);
      if (el) io.observe(el);
    });
  }

  function renderMissing() {
    document.title = "Project not found — Hussen Taiwo";
    root.innerHTML =
      '<section class="pj-hero pj-missing"><div class="container">' +
      '<p class="index-label">( Project / Not found )</p>' +
      '<h1 class="pj-title">That project doesn’t exist.</h1>' +
      '<p class="pj-tagline">The link may be out of date. Browse the full archive instead.</p>' +
      '<div class="pj-actions"><a class="btn btn-primary btn-sm" href="work.html">All work' +
      ARROW +
      "</a></div>" +
      "</div></section>";
  }
})();
