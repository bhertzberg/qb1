const body = document.body;
const enterSite = document.getElementById("enterSite");
let isOpening = false;

enterSite?.addEventListener("click", () => {
  if (isOpening) return;

  isOpening = true;
  body.classList.add("entry-opening");

  window.setTimeout(() => {
    body.classList.add("expanding");
  }, 500);

  window.setTimeout(() => {
    body.classList.add("site-entered");
    body.classList.add("show-main");
    isOpening = false;
    document.body.style.overflow = "auto";
  }, 2500);
});
