document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".PrimaryNav").forEach(function (nav) {
    var active = nav.querySelector(".is-active");

    function moveIndicator(item) {
      nav.style.setProperty("--indicator-x", item.offsetLeft + "px");
      nav.style.setProperty("--indicator-width", item.offsetWidth + "px");
    }

    function restoreIndicator() {
      var focused = nav.querySelector("a:focus-visible");
      var hovered = nav.querySelector(".Nav-item:hover");
      var target = focused ? focused.parentElement : hovered || active;

      if (target) {
        moveIndicator(target);
      } else {
        nav.style.setProperty("--indicator-width", "0px");
      }
    }

    if (active) moveIndicator(active);
    requestAnimationFrame(function () {
      nav.classList.add("is-ready");
    });

    nav.querySelectorAll(".Nav-item").forEach(function (item) {
      item.addEventListener("pointerenter", function (event) {
        if (event.pointerType !== "touch") moveIndicator(item);
      });
      item.addEventListener("focusin", function () {
        moveIndicator(item);
      });
    });

    nav.addEventListener("pointerleave", restoreIndicator);
    nav.addEventListener("focusout", function () {
      requestAnimationFrame(restoreIndicator);
    });
    window.addEventListener("resize", restoreIndicator);
  });
});
