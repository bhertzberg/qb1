(function () {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.getElementById("site-drawer");
  const backdrop = document.querySelector(".nav-backdrop");
  const closeBtn = document.querySelector(".nav-drawer-close");

  if (!toggle || !drawer || !backdrop) return;

  const focusable =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function openDrawer() {
    drawer.hidden = false;
    backdrop.hidden = false;
    backdrop.setAttribute("aria-hidden", "false");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-drawer-open");
    const first = drawer.querySelector(focusable);
    first?.focus();
  }

  function closeDrawer() {
    drawer.hidden = true;
    backdrop.hidden = true;
    backdrop.setAttribute("aria-hidden", "true");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-drawer-open");
    if (toggle.offsetParent !== null) toggle.focus();
  }

  function isOpen() {
    return !drawer.hidden;
  }

  toggle.addEventListener("click", () => {
    if (isOpen()) closeDrawer();
    else openDrawer();
  });

  backdrop.addEventListener("click", closeDrawer);
  closeBtn?.addEventListener("click", closeDrawer);

  drawer.querySelectorAll(".nav-drawer a").forEach((link) => {
    link.addEventListener("click", () => closeDrawer());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeDrawer();
  });
})();
