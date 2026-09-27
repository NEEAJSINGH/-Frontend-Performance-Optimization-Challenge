(function () {
  "use strict";

  /*
   * Small, deferred script:
   * - Controls only the mobile navigation.
   * - Uses native DOM APIs.
   * - Avoids unnecessary polling and repeated DOM queries.
   */

  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");

  if (!menuButton || !navigation) {
    console.warn("Navigation elements were not found.");
    return;
  }

  function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Close" : "Menu";
  }

  menuButton.addEventListener("click", function () {
    var open = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!open);
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenu(false);
      menuButton.focus();
    }
  });
})();
