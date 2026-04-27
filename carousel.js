(function () {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;

  const viewport = root.querySelector(".carousel-viewport");
  const track = root.querySelector(".carousel-track");
  const slides = track ? track.querySelectorAll(".carousel-slide") : [];
  const prev = root.querySelector(".carousel-btn--prev");
  const next = root.querySelector(".carousel-btn--next");
  const dotsContainer = root.querySelector(".carousel-dots");

  if (!viewport || !slides.length || !prev || !next || !dotsContainer) return;

  function slideWidth() {
    const first = slides[0];
    return first ? first.getBoundingClientRect().width : viewport.clientWidth;
  }

  function currentIndex() {
    const w = slideWidth();
    if (!w) return 0;
    return Math.min(
      slides.length - 1,
      Math.max(0, Math.round(viewport.scrollLeft / w))
    );
  }

  function goTo(index) {
    const w = slideWidth();
    viewport.scrollTo({ left: index * w, behavior: "smooth" });
  }

  function step(delta) {
    const n = slides.length;
    let i = currentIndex() + delta;
    if (i < 0) i = n - 1;
    if (i >= n) i = 0;
    goTo(i);
  }

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  function syncDots() {
    const i = currentIndex();
    dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
  }

  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));

  viewport.addEventListener(
    "scroll",
    () => {
      window.requestAnimationFrame(syncDots);
    },
    { passive: true }
  );

  window.addEventListener("resize", syncDots);
  syncDots();
})();
