/* Handsome. — shared behavior: theme, mobile menu, reveal. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* Theme ---------------------------------------------------------------- */
  var themeButtons = document.querySelectorAll("[data-theme-toggle]");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    themeButtons.forEach(function (btn) {
      var dark = theme === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  themeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("handsome-theme", next); } catch (e) { /* storage unavailable */ }
    });
  });

  /* Mobile menu ---------------------------------------------------------- */
  var menu = document.getElementById("mobile-menu");
  var openBtn = document.querySelector(".menu-toggle");
  var closeBtn = document.querySelector(".menu-close");

  if (menu && openBtn && closeBtn) {
    var lastFocus = null;

    var setMenu = function (open) {
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      openBtn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
      if (open) {
        lastFocus = document.activeElement;
        closeBtn.focus();
      } else if (lastFocus) {
        lastFocus.focus();
      }
    };

    openBtn.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
    closeBtn.addEventListener("click", function () { setMenu(false); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) setMenu(false);
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches && menu.classList.contains("is-open")) setMenu(false);
    });
  }

  /* Reveal on scroll ----------------------------------------------------- */
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  items.forEach(function (el) { io.observe(el); });
})();
