const hamburgerIcon = document.querySelector(
  ".page-header__hamburger-icon .fa-bars"
);
const mobileNav = document.querySelector(".page-header__nav--mobile");
const overlay = document.querySelector(".overlay");

hamburgerIcon.addEventListener("click", () => {
  event.stopPropagation();
  mobileNav.classList.toggle("page-header__nav--mobile-open");
  overlay.classList.toggle("overlay-open");
});

const closeDrawer = document.querySelector("#close-drawer");

closeDrawer.addEventListener("click", () => {
  mobileNav.classList.remove("page-header__nav--mobile-open");
  overlay.classList.remove("overlay-open");
});

document.body.addEventListener("click", (event) => {
  if (event.target !== hamburgerIcon && event.target !== mobileNav) {
    mobileNav.classList.remove("page-header__nav--mobile-open");
    overlay.classList.remove("overlay-open");
  }
});
