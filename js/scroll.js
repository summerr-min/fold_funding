if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: { start: 0, end: "max", scrub: true },
  });
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
} else {
  const progressBar = document.querySelector(".progress-bar");
  window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  });
}
