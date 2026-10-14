

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

function closeMenu({ returnFocus = false } = {}) {
  siteNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "메뉴 열기");

  if (returnFocus) {
    menuButton.focus();
  }
}

function openMenu() {
  siteNav.classList.add("is-open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "메뉴 닫기");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => link.addEventListener("click", () => closeMenu()));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    closeMenu({ returnFocus: true });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
