/* Handsome. — View-only document page: renders js/document-data.js and discourages saving.
   The guards are a deterrent, not security: anything a browser can display can still be
   screenshotted or read from the page source. */
(function () {
  "use strict";

  var DOC = window.RSM_DOC;
  var body = document.getElementById("doc-body");
  var index = document.getElementById("doc-index");
  if (!DOC || !body || !index) return;

  var LABELS = [
    "Complete citation",
    "Publisher",
    "DOI & Direct Link",
    "Research objective",
    "Physical Chemistry application",
    "Experimental variables",
    "Response variables",
    "RSM design",
    "Software used",
    "Statistical methods",
    "Actual research findings",
    "Contribution to the seminar",
  ];

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function link(url) {
    return (
      '<a href="' +
      url +
      '" target="_blank" rel="noopener noreferrer">' +
      url +
      "</a>"
    );
  }

  /* Render ---------------------------------------------------------------- */
  var nav = "";
  var cards = "";
  DOC.articles.forEach(function (a, i) {
    var n = i + 1;
    var cells = a.slice(2); // citation, publisher, doi, then the rest
    var rows = LABELS.map(function (label, k) {
      var value =
        k === 2
          ? cells[2] + " | " + link("https://doi.org/" + cells[2])
          : cells[k];
      return (
        '<div class="doc-row"><dt>' +
        label.replace("&", "&amp;") +
        "</dt><dd>" +
        value +
        "</dd></div>"
      );
    }).join("");
    nav +=
      '<li><a href="#article-' +
      n +
      '"><span>' +
      pad(n) +
      "</span>" +
      a[0] +
      "</a></li>";
    cards +=
      '<article class="doc-article" id="article-' +
      n +
      '" aria-labelledby="h-' +
      n +
      '">' +
      '<header class="doc-article__head">' +
      '<p class="index-label">Article ' +
      pad(n) +
      "</p>" +
      '<h2 id="h-' +
      n +
      '">' +
      a[0] +
      "</h2>" +
      '<span class="doc-tag" data-cat="' +
      a[1] +
      '">Category ' +
      a[1] +
      "</span>" +
      "</header>" +
      '<dl class="doc-fields">' +
      rows +
      "</dl>" +
      "</article>";
  });

  var refs = DOC.references
    .map(function (r) {
      return (
        "<li>" +
        r.replace(
          /(https?:\/\/[^\s<]*[^\s<.,;)])/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
        ) +
        "</li>"
      );
    })
    .join("");

  index.innerHTML =
    '<p class="index-label">Articles</p><ol>' +
    nav +
    '</ol><a class="doc-index__refs" href="#references">References</a>';
  body.innerHTML =
    cards +
    '<section class="doc-references" id="references" aria-labelledby="h-refs">' +
    '<header class="doc-article__head"><p class="index-label">Sources</p><h2 id="h-refs">References</h2></header>' +
    '<ol class="doc-reflist">' +
    refs +
    "</ol>" +
    "</section>";

  /* View-only guards ------------------------------------------------------- */
  var guarded = document.querySelectorAll(".doc-hero, .doc-layout");
  function block(e) {
    e.preventDefault();
  }
  ["contextmenu", "copy", "cut", "dragstart", "selectstart"].forEach(
    function (type) {
      guarded.forEach(function (el) {
        el.addEventListener(type, block);
      });
    },
  );
  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    if (
      (e.ctrlKey || e.metaKey) &&
      ["s", "p", "c", "x", "a", "u"].indexOf(k) !== -1
    )
      e.preventDefault();
  });
  window.addEventListener("beforeprint", function () {
    document.documentElement.style.display = "none";
  });
  window.addEventListener("afterprint", function () {
    document.documentElement.style.display = "";
  });

  /* Highlight the article in view in the side index ----------------------- */
  var links = index.querySelectorAll("a[href^='#']");
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
          if (!a) return;
          a.setAttribute("aria-current", "true");
          if (
            a.offsetTop < index.scrollTop ||
            a.offsetTop > index.scrollTop + index.clientHeight - 40
          ) {
            index.scrollTop = a.offsetTop - 60;
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
})();
