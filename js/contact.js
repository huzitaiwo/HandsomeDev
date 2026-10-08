(function () {
  "use strict";

  // TODO: change if you want inquiries to go to another address.
  var TO = "devhandsome10@gmail.com";

  var form = document.getElementById("inquiry");
  var status = document.getElementById("inquiry-status");
  if (!form) return;

  var rules = {
    name: function (v) {
      return v.trim() ? "" : "Please enter your name.";
    },
    email: function (v) {
      if (!v.trim()) return "Please enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ""
        : "That email address doesn't look right.";
    },
    direction: function (v) {
      return v ? "" : "Please choose a direction.";
    },
    note: function (v) {
      return v.trim() ? "" : "Please add a short project note.";
    },
  };

  var ids = {
    name: "f-name",
    email: "f-email",
    direction: "f-direction",
    note: "f-note",
  };

  function setError(key, message) {
    var field = document.getElementById(ids[key]);
    var out = document.getElementById("e-" + key);
    if (message) {
      field.setAttribute("aria-invalid", "true");
      out.textContent = message;
      out.hidden = false;
    } else {
      field.removeAttribute("aria-invalid");
      out.textContent = "";
      out.hidden = true;
    }
    return !message;
  }

  function check(key) {
    return setError(key, rules[key](document.getElementById(ids[key]).value));
  }

  Object.keys(rules).forEach(function (key) {
    var el = document.getElementById(ids[key]);
    el.addEventListener("blur", function () {
      if (el.value || el.hasAttribute("aria-invalid")) check(key);
    });
    el.addEventListener("input", function () {
      if (el.hasAttribute("aria-invalid")) check(key);
    });
    el.addEventListener("change", function () {
      if (el.hasAttribute("aria-invalid")) check(key);
    });
  });

  function showStatus(text, isError) {
    status.textContent = text;
    status.hidden = false;
    status.classList.toggle("is-error", !!isError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = true;

    var firstBad = null;
    Object.keys(rules).forEach(function (key) {
      if (!check(key) && !firstBad)
        firstBad = document.getElementById(ids[key]);
    });
    if (firstBad) {
      firstBad.focus();
      showStatus("Please fix the highlighted fields and try again.", true);
      return;
    }

    var v = function (id) {
      return document.getElementById(id).value.trim();
    };
    var body = [
      "Name: " + v("f-name"),
      "Email: " + v("f-email"),
      "Looking to make: " + v("f-direction"),
      "Budget range: " + (v("f-budget") || "Not specified"),
      "",
      v("f-note"),
    ].join("\n");

    var href =
      "mailto:" +
      TO +
      "?subject=" +
      encodeURIComponent("Project inquiry from " + v("f-name")) +
      "&body=" +
      encodeURIComponent(body);

    showStatus(
      "Your email app should now open with this inquiry ready to send. Nothing has been sent yet — if nothing opens, email " +
        TO +
        " directly.",
      false,
    );
    window.location.href = href;
  });
})();
