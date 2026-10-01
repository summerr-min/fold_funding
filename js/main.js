const foldButton = document.querySelector(".fold-button");
const tumbler = document.querySelector(".tumbler");

foldButton.addEventListener("click", () => {
  const isFolded = tumbler.classList.toggle("is-folded");

  foldButton.textContent = isFolded ? "펼쳐 보기" : "접어 보기";
  foldButton.setAttribute("aria-pressed", isFolded);
});

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  themeButton.setAttribute(
    "aria-label",
    isDark ? "밝은 화면으로 변경" : "어두운 화면으로 변경",
  );
});

const swatches = document.querySelectorAll(".swatch");
const colorName = document.querySelector("#color-name");
const colorParts = document.querySelectorAll(".fill-accent, .preview-accent");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    colorParts.forEach((part) => {
      part.style.fill = swatch.dataset.color;
    });

    swatches.forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    });

    swatch.classList.add("active");
    swatch.setAttribute("aria-pressed", "true");
    colorName.textContent = `선택: ${swatch.dataset.name}`;
  });
});

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${progress}%`;
});
