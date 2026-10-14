const html = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("fold-theme");

function applyTheme(theme) {
  const isDark = theme === "dark";
  html.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute(
    "aria-label",
    isDark ? "라이트 테마로 변경" : "다크 테마로 변경",
  );
}
applyTheme(savedTheme || "light");
themeButton.addEventListener("click", () => {
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("fold-theme", nextTheme);
});
