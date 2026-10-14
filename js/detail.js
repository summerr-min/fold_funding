

const stage = document.querySelector(".detail-stage");
const detailStatus = document.getElementById("detail-status");
const detailButtons = [...document.querySelectorAll("[data-step-target]")];
const detailPanels = [...document.querySelectorAll(".panel")];
const desktopDetail = window.matchMedia("(min-width: 901px)");
const stepLabels = {
  1: "제품 구조 단계입니다.",
  2: "접었을 때 부피 단계입니다.",
  3: "제품 치수 단계입니다.",
};

function setDetailStep(step, { announce = true } = {}) {
  const nextStep = Math.min(3, Math.max(1, Number(step)));
  stage.dataset.step = String(nextStep);

  detailButtons.forEach((button) => {
    const isCurrent = Number(button.dataset.stepTarget) === nextStep;
    button.setAttribute("aria-pressed", String(isCurrent));
  });

  detailPanels.forEach((panel, index) => {
    const isCurrent = index + 1 === nextStep;
    panel.setAttribute(
      "aria-hidden",
      String(desktopDetail.matches ? !isCurrent : false),
    );
  });

  if (announce) {
    detailStatus.textContent = stepLabels[nextStep];
  }
}

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setDetailStep(button.dataset.stepTarget);
  });
});
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  const detailMedia = gsap.matchMedia();
  detailMedia.add("(min-width: 901px)", () => {
    const detailTrigger = ScrollTrigger.create({
      trigger: "#detail",
      start: "top top",
      end: "bottom bottom",
      onUpdate(self) {
        const step = Math.min(3, Math.floor(self.progress * 3) + 1);
        setDetailStep(step, { announce: false });
      },
    });

    return () => detailTrigger.kill();
  });
}

desktopDetail.addEventListener("change", () => {
  setDetailStep(stage.dataset.step, { announce: false });
});

setDetailStep(1, { announce: false });
document.querySelectorAll(".swatch").forEach((swatchButton) => {
  swatchButton.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--product",
      swatchButton.dataset.color,
    );
    document
      .querySelectorAll(".swatch")
      .forEach((button) => button.setAttribute("aria-pressed", "false"));
    swatchButton.setAttribute("aria-pressed", "true");

    const selectedColor = document.getElementById("selected-color");
    selectedColor.innerHTML = `선택한 색상: <strong>${swatchButton.dataset.name}</strong>`;
  });
});
