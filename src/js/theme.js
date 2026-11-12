document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  var hasPreference = false;

  if (!toggle) return;

  try {
    var savedTheme = localStorage.getItem("theme");
    hasPreference = savedTheme === "light" || savedTheme === "dark";
  } catch (error) {}

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.querySelector("i").className = isDark ? "fas fa-sun" : "fas fa-moon";
  }

  applyTheme(root.dataset.theme);
  toggle.hidden = false;

  toggle.addEventListener("click", function () {
    var theme = root.dataset.theme === "dark" ? "light" : "dark";
    hasPreference = true;
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {}
  });

  systemTheme.addEventListener("change", function (event) {
    if (!hasPreference) applyTheme(event.matches ? "dark" : "light");
  });

  window.addEventListener("storage", function (event) {
    if (event.key !== "theme" && event.key !== null) return;
    hasPreference = event.newValue === "light" || event.newValue === "dark";
    applyTheme(hasPreference ? event.newValue : systemTheme.matches ? "dark" : "light");
  });
});
