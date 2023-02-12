/** Google Chrome Browser Gsap Compatible **/

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".goals__acheive.slide-in-left",
  {
    transform: "translateX(-500px)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1.25,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".goals__acheive.slide-in-left",
      start: "top center",
    }
  }
);
gsap.fromTo(
  ".goals__acheive.slide-in-right",
  {
    transform: "translateX(500px)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1.25,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".goals__acheive.slide-in-right",
      start: "top center",
    }
  }
);
gsap.fromTo(
  ".goals__strategy.slide-in-left",
  {
    transform: "translateX(-500px)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1.25,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".goals__strategy.slide-in-left",
      start: "top center",
    }
  }
);
gsap.fromTo(
  ".goals__strategy.slide-in-right",
  {
    transform: "translateX(500px)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1.25,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".goals__strategy.slide-in-right",
      start: "top center",
    }
  }
);

/****** Works on safari and firefox ******/

// gsap.registerPlugin(ScrollTrigger);
// gsap.fromTo(
//   ".goals__acheive.slide-in-left",
//   {
//     x: -500,
//     opacity: 0,
//   },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".goals__acheive.slide-in-left",
//       start: "top 70%",
//     },
//   }
// );
// gsap.fromTo(
//   ".goals__acheive.slide-in-right",
//   {
//     x: 500,
//     opacity: 0,
//   },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".goals__acheive.slide-in-right",
//       start: "top 70%",
//     },
//   }
// );
// gsap.fromTo(
//   ".goals__strategy.slide-in-left",
//   {
//     x: -500,
//     opacity: 0,
//   },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".goals__strategy.slide-in-left",
//       start: "top 60%",
//     },
//   }
// );
// gsap.fromTo(
//   ".goals__strategy.slide-in-right",
//   {
//     x: 500,
//     opacity: 0,
//   },
//   {
//     x: 0,
//     opacity: 1,
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".goals__strategy.slide-in-right",
//       start: "top 60%",
//     },
//   }
// );

// gsap.from('.slide-in-left', {duration: 1.5, x: -200})
// gsap.to('.slide-in-left', {duration: 1.5, x: 20})
// let tween3 = gsap.fromTo('.slide-in-left', {x: 10, y: 10}, {x: 0, y: 100, duration: 1})


/* Intersect Observer Animation */

// const faders = document.querySelectorAll('.fade-in');
// const sliders = document.querySelectorAll('.slide-in');

// const animateOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const animateOnScroll = new IntersectionObserver(function (
//   entries,
//   animateOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting){
//       return;
//     }else{
//       entry.target.style.willChange = "opacity, transform";
//       entry.target.classList.add("animate");
//       animateOnScroll.unobserve(entry.target);
//     }
//   });
// },
// animateOptions); 

// faders.forEach(fader => {
//   animateOnScroll.observe(fader);
// })

// sliders.forEach((slider) => {
//   animateOnScroll.observe(slider);
// });

/*************** ***********************************/
//Intersect Observer

// const slideInRight = document.querySelectorAll(".slide-in-right");
// const slideInLeft = document.querySelectorAll(".slide-in-left");

// const animateOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px",
// };

// const animateSlideInRight = new IntersectionObserver(function (entries) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//         // entry.target.style.willChange = "opacity, transform";
//         entry.target.classList.add("animated");
//         entry.target.classList.add("slideInRight");
//         animateSlideInRight.unobserve(entry.target);
//     }
//   });
// }, animateOptions);

// const animateSlideInLeft = new IntersectionObserver(function (entries) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       // entry.target.style.willChange = "opacity, transform";
//       entry.target.classList.add("animated");
//       entry.target.classList.add("slideInLeft");
//       animateSlideInLeft.unobserve(entry.target);
//     }
//   });
// }, animateOptions);

// slideInRight.forEach((sInRight) => {
//   animateSlideInRight.observe(sInRight);
// });

// slideInLeft.forEach((sInLeft) => {
//   animateSlideInLeft.observe(sInLeft);
// });
