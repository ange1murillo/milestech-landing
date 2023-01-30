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

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const animateOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const animateOnScroll = new IntersectionObserver(function (
  entries,
  animateOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add("animate");
      animateOnScroll.unobserve(entry.target);
    }
  });
},
animateOptions); 

faders.forEach(fader => {
  animateOnScroll.observe(fader);
})

sliders.forEach((slider) => {
  animateOnScroll.observe(slider);
});