
const imageUrls = [
  "https://angelmurillo.com/wp-content/uploads/meeting-room.webp",
  "https://angelmurillo.com/wp-content/uploads/team-collaborating.webp",
];

const images = [];

for (let i = 0; i < imageUrls.length; i++) {
  const img = new Image();
  img.src = imageUrls[i];
  images.push(img);
}

// Wait for all the images to be fully loaded
Promise.all(
  images.map((img) => {
    return new Promise((resolve) => {
      img.onload = resolve;
      console.log("images loaded!");
    });
  })
).then(() => {
  const mediaQuery = window.matchMedia("(min-width: 769px)");

  function slideIn(element, trigger, amount) {
    if (mediaQuery.matches) {
      gsap.from(element, {
        // ease: "power2.inOut",
        ease: "power1.out",
        duration: 0.5,
        stagger: 0.15,
        autoAlpha: 0.01,
        x: amount,
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom-=40%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }

  const goalsRows = document.querySelectorAll(".goals__row");

  goalsRows.forEach((row) => {
    const slideInLeftElements = row.querySelectorAll(".slide-in-left");
    const slideInRightElements = row.querySelectorAll(".slide-in-right");

    slideInLeftElements.forEach((element) => {
      const trigger = row;
      const amount = -200;
      slideIn(element, trigger, amount);
    });

    slideInRightElements.forEach((element) => {
      const trigger = row;
      const amount = 200;
      slideIn(element, trigger, amount);
    });
  });
});

/** Google Chrome Browser Gsap Compatible -Most recent after newest- **/

// document.addEventListener("DOMContentLoaded", function () {


//   gsap.registerPlugin(ScrollTrigger);

//   /** Current **/

//   gsap.fromTo(
//     ".goals__acheive.slide-in-left",
//     {
//       // transform: "translateX(-200px)",
//       x: -200,
//       autoAlpha: 0.01,
//     },
//     {
//       // transform: "translateX(0)",
//       x: 0,
//       autoAlpha: 1,
//       duration: 0.5,
//       stagger: 0.15,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: ".goals__acheive.slide-in-left",
//         start: "top center",
//       },
//     }
//   );
//   gsap.fromTo(
//     ".goals__acheive.slide-in-right",
//     {
//       x: 200,
//       autoAlpha: 0,
//     },
//     {
//       x: 0,
//       autoAlpha: 1,
//       duration: 0.5,
//       stagger: 0.15,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: ".goals__acheive.slide-in-right",
//         start: "top center",
//       },
//     }
//   );
//   gsap.fromTo(
//     ".goals__strategy.slide-in-left",
//     {
//       x: -200,
//       autoAlpha: 0.01,
//     },
//     {
//       x: 0,
//       autoAlpha: 1,
//       duration: 0.5,
//       stagger: 0.15,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: ".goals__strategy.slide-in-left",
//         start: "top center",
//       },
//     }
//   );
//   gsap.fromTo(
//     ".goals__strategy.slide-in-right",
//     {
//       x: 200,
//       autoAlpha: 0.01,
//     },
//     {
//       x: 0,
//       autoAlpha: 1,
//       duration: 0.5,
//       stagger: 0.15,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: ".goals__strategy.slide-in-right",
//         start: "top center",
//       },
//     }
//   );

//   window.addEventListener("load", function () {
//     ScrollTrigger.refresh();
//   });
//   window.addEventListener("resize", function () {
//     ScrollTrigger.refresh();
//   });
// });

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
