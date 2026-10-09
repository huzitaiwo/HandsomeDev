(function () {
  "use strict";

  /* Project data lives in js/projects-data.js (shared with the project page). */
  var PROJECTS = window.HANDSOME_PROJECTS || [];

  var ARROW =
    '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var grid = document.getElementById("archive");
  var countEl = document.getElementById("archive-count");
  var filterButtons = document.querySelectorAll(".filter");
  if (!grid) return;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function cardHTML(p) {
    var host = new URL(p.url).host.toUpperCase() + "/";
    return (
      '<a class="project__link" href="project.html?id=' +
      encodeURIComponent(p.id) +
      '"' +
      ' aria-label="' +
      esc(p.title) +
      ' — open live project (opens in a new tab)">' +
      '<div class="project__media">' +
      '<div class="project__chrome" aria-hidden="true">' +
      '<span class="project__dots"><i></i><i></i><i></i></span>' +
      '<span class="project__live">Live project</span>' +
      '<span class="project__host">' +
      esc(host) +
      "</span>" +
      "</div>" +
      '<div class="project__shot">' +
      '<img src="' +
      esc(p.image) +
      '" alt="' +
      esc(p.imageAlt) +
      '" loading="lazy" decoding="async">' +
      '<span class="project__badge" aria-hidden="true">Live site / Supplied showcase</span>' +
      "</div>" +
      "</div>" +
      '<div class="project__meta">' +
      '<p class="project__type">' +
      esc(p.type) +
      " / Live project</p>" +
      '<h3 class="project__title">' +
      esc(p.title) +
      "</h3>" +
      '<p class="project__desc">' +
      esc(p.description) +
      "</p>" +
      '<span class="project__arrow" aria-hidden="true">' +
      ARROW +
      "</span>" +
      "</div>" +
      "</a>"
    );
  }

  var cards = PROJECTS.map(function (p) {
    var el = document.createElement("article");
    el.className = "project reveal";
    el.dataset.tags = p.tags.join("|");
    el.innerHTML = cardHTML(p);
    grid.appendChild(el);
    return el;
  });

  /* Filtering -------------------------------------------------------------- */
  var active = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;

  function layout() {
    var shown = 0;
    cards.forEach(function (el) {
      var match = !active || el.dataset.tags.split("|").indexOf(active) !== -1;
      el.hidden = !match;
      if (!match) return;
      // Editorial rhythm by visible position: one wide lead, then a tall/short pair per row.
      el.dataset.slot =
        shown === 0 ? "hero" : shown % 2 === 1 ? "left" : "right";
      el.style.setProperty("--i", shown % 2);
      shown++;
    });
    countEl.textContent = active
      ? shown + " of " + PROJECTS.length + " projects in the archive"
      : PROJECTS.length + " projects in the archive";
  }

  function setActive(next) {
    active = next;
    filterButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === active));
    });
    window.clearTimeout(timer);
    if (reduce) {
      layout();
      return;
    }
    grid.classList.add("is-switching");
    timer = window.setTimeout(function () {
      layout();
      grid.classList.remove("is-switching");
    }, 200);
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Clicking the active lens again returns to the full archive (there is no visible "All").
      setActive(active === btn.dataset.filter ? null : btn.dataset.filter);
    });
  });

  layout();
})();
