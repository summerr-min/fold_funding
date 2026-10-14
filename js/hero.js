

const tumbler = document.querySelector(".tumbler");
const foldButton = document.querySelector(".fold-control");
const foldButtonLabel = document.querySelector(".fold-control__label");
const foldStatus = document.querySelector(".fold-status");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setFolded(isFolded, { announce = true } = {}) {
  tumbler.classList.toggle("is-folded", isFolded);
  foldButton.setAttribute("aria-pressed", String(isFolded));
  foldButtonLabel.textContent = isFolded
    ? "텀블러 펼쳐보기"
    : "텀블러 접어보기";

  if (announce) {
    foldStatus.textContent = isFolded
      ? "현재 45mm로 접힌 상태입니다."
      : "현재 180mm로 펼쳐진 상태입니다.";
  }
}

foldButton.addEventListener("click", () => {
  setFolded(!tumbler.classList.contains("is-folded"));
});
if (!reduceMotion.matches && typeof ScrollTrigger !== "undefined") {
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom center",
    onLeave: () => setFolded(true, { announce: false }),
    onEnterBack: () => setFolded(false, { announce: false }),
  });
}
