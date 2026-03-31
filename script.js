const body = document.body;
const enterSite = document.getElementById("enterSite");
const doorYes = document.getElementById("doorYes");
let isOpening = false;

enterSite?.addEventListener("click", () => {
  if (isOpening) return;

  isOpening = true;
  if (doorYes instanceof HTMLAudioElement) {
    doorYes.currentTime = 0;
    doorYes.play().catch(() => {
      // Ignore playback rejections so the entry animation still runs.
    });
  }
  window.setTimeout(() => {
    body.classList.add("entry-opening");
  }, 500);

  window.setTimeout(() => {
    body.classList.add("expanding");
  }, 1000);

  window.setTimeout(() => {
    body.classList.add("site-entered");
    body.classList.add("show-main");
    isOpening = false;
    document.body.style.overflow = "auto";
  }, 3000);
});
