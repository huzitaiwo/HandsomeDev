(function () {
  "use strict";

  /* Project data ------------------------------------------------------------
     url   : read from the host label shown on each card in the reference
             screenshot. Click each one once to confirm it opens the right site.
     tags  : Veloura's tags come from the brief. The rest are ASSUMED from the
             category (Ecommerce → UI/UX, Frontend, Shopify, Ecommerce;
             Product Design → UI/UX, Frontend, Product Design). Edit freely.
     image : save your originals under assets/images/projects/ with these names. */
  var ECOM = ["UI/UX", "Frontend", "Shopify", "Ecommerce"];
  var PROD = ["UI/UX", "Frontend", "Product Design"];

  var PROJECTS = [
    {
      id: "veloura",
      title: "Veloura Ecommerce",
      type: "Ecommerce",
      description: "Luxury skincare commerce, softly considered.",
      url: "https://velourashop-4qq7wt3s.manus.space/",
      image: "assets/images/projects/portfolio_2_veloura_nobadge.png",
      imageAlt:
        "Veloura storefront on a laptop with the headline “Luxury skincare, softly considered.”",
      tags: ECOM,
    },
    {
      id: "elvixe",
      title: "Elvixe Skincare",
      type: "Ecommerce",
      description: "Thoughtful skincare, every day.",
      url: "https://elvixeskin-hyfdqpxh.manus.space/",
      image: "assets/images/projects/portfolio_3_elvixe_nobadge.png",
      imageAlt:
        "Elvixe skincare site on a laptop and phone beside a close portrait, headlined “Skincare for body & every skin”",
      tags: ECOM,
    },
    {
      id: "ai-workspace",
      title: "AI Workspace",
      type: "Product design",
      description:
        "Contextual productivity for research, decisions, and shared work.",
      url: "https://aiworkspa-nzdo48cx.manus.space/",
      image: "assets/images/projects/portfolio_4_aiworkspace.png",
      imageAlt:
        "AI Workspace product page headlined “Your work, amplified by AI.”",
      tags: PROD,
    },
    {
      id: "staynest",
      title: "StayNest Marketplace",
      type: "Product design",
      description: "Find a place worth staying for.",
      url: "https://staynest-mra4smen.manus.space/",
      image: "assets/images/projects/portfolio_5_staynest.png",
      imageAlt:
        "StayNest travel marketplace homepage headlined “Find a place worth staying for.”",
      tags: PROD,
    },
    {
      id: "coolteam-saas",
      title: "CoolTeam SaaS",
      type: "Product design",
      description: "One shared rhythm, from first thought to final file.",
      url: "https://coolteamsaas-tq4ccrhg.manus.space/",
      image: "assets/images/projects/portfolio_6_coolteam.png",
      imageAlt:
        "CoolTeam collaboration SaaS homepage headlined “From brief to final delivery, together.”",
      tags: PROD,
    },
    {
      id: "coolteam-v2",
      title: "CoolTeam V2",
      type: "Product design",
      description: "Creative project management, without the drift.",
      url: "https://coolteam-fr4mvpq9.manus.space/",
      image: "assets/images/projects/portfolio_7_coolteam_v2.png",
      imageAlt:
        "CoolTeam V2 homepage on a laptop and phone, headlined “Make the work feel in flow.”",
      tags: PROD,
    },
    {
      id: "foodie",
      title: "Foodie Marketplace",
      type: "Product design",
      description: "Everything you crave, delivered.",
      url: "https://foodiehub-dmeuqz3s.manus.space/",
      image: "assets/images/projects/portfolio_8_foodiehub.png",
      imageAlt: "Foodie Marketplace showcase",
      tags: PROD,
    },
    {
      id: "hirely",
      title: "Hirely Jobs",
      type: "Product design",
      description: "A more considered way to hire.",
      url: "https://hirelyjob-g6az9pqk.manus.space/",
      image: "assets/images/projects/portfolio_9_hirely.png",
      imageAlt:
        "Hirely job marketplace homepage headlined “Work that moves with you.”",
      tags: PROD,
    },
    {
      id: "arvela",
      title: "ARVELA Furniture",
      type: "Ecommerce",
      description: "Thoughtfully designed pieces for calmer rooms.",
      url: "https://tidyfurnish-9ozvvrkn.manus.space/",
      image: "assets/images/projects/portfolio_10_arvela.png",
      imageAlt:
        "ARVELA furniture storefront with the word “harmony” beside an armchair",
      tags: ECOM,
    },
    {
      id: "eloura",
      title: "Eloura Skincare",
      type: "Ecommerce",
      description: "Care that feels considered.",
      url: "https://elouraskin-2m4lvxox.manus.space/",
      image: "assets/images/projects/portfolio_11_eloura.png",
      imageAlt:
        "Eloura skincare homepage headlined “Skincare for Body & Every Skin”",
      tags: ECOM,
    },
    {
      id: "elvixe-editorial",
      title: "Elvixe Editorial (V2)",
      type: "Ecommerce",
      description:
        "A second editorial presentation for the Elvixe skincare experience.",
      url: "https://elvixeskin-hyfdqpxh.manus.space/",
      image: "assets/images/projects/portfolio_12_elvixe_v2.png",
      imageAlt: "Elvixe editorial skincare presentation on a laptop and phone",
      tags: ECOM,
    },
    {
      id: "realty",
      title: "REALTY Marketplace",
      type: "Product design",
      description: "A more considered way to move.",
      url: "https://realtyhub-eyircxnr.manus.space/",
      image: "assets/images/projects/portfolio_13_realtyhub.png",
      imageAlt:
        "REALTY real estate marketplace headlined “Find a place that feels like home.”",
      tags: PROD,
    },
    {
      id: "pulse",
      title: "PULSE Operations",
      type: "Product design",
      description: "An operating picture for the work ahead.",
      url: "https://pulseops-ea4kn5x8.manus.space/",
      image: "assets/images/projects/portfolio_14_pulseops.png",
      imageAlt: "PULSE Operations dark dashboard interface",
      tags: PROD,
    },
  ];

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
      '<a class="project__link" href="' +
      esc(p.url) +
      '" target="_blank" rel="noopener noreferrer"' +
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
