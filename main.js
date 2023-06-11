// Smooth Scroll "lenis" malarkey
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//GSAP anims etc
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Variables
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

// IfPortraitEtc
if (window.matchMedia("(orientation: landscape)").matches) {
  gsap.from(".AnimButtonUP", {
    opacity: 0,
    y: 20,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  gsap.to(".SplashVideoCropperWIDE", {
    scrollTrigger: {
      trigger: ".SplashVideoCropperWIDE",

      //Where it triggers on obj - where on scroll it starts
      start: "top bottom",
      end: "100% 50%",

      scrub: 2,
      // markers: true,
    },

    y: -vh(40),
  });

  gsap.to(".TextScrollerLEFT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom",
      scrub: 1,
    },
    ease: "none",
    x: -300,
  });

  gsap.to(".TextScrollerRIGHT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom",
      scrub: 1,
    },

    ease: "none",
    x: 300,
  });

  gsap.from(".txtload", {
    scrollTrigger: {
      trigger: ".txtload",
      start: "top bottom",
      end: "bottom 80%",

      toggleActions: "restart none none none",
      // markers: true,
      // scrub: 1,
    },
    opacity: 0,
    y: 20,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  gsap.from(".ddbg", {
    scrollTrigger: {
      trigger: ".ddbg",
      start: "top bottom",
      end: "bottom 80%",

      toggleActions: "restart none none reset",
      // markers: true,
      // scrub: 1,
    },

    y: 20,
    opacity: 0,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  // ________________________________________________
  //_______________________________
  //_______________________________________________
  //_______________________________
  //________________________________________________
  //_______________________________
} else {
  gsap.from(".AnimButtonUP", {
    opacity: 0,
    y: 20,

    stagger: {
      each: 0.25,
      from: 2,
    },

    duration: 1,
    ease: "expo.inout",
  });

  gsap.to(".SplashVideoCropperMOBILE", {
    scrollTrigger: {
      trigger: ".SplashVideoCropperMOBILE",

      start: "top 50%",
      end: "bottom 10%",

      // markers: true,
      scrub: 2,
    },

    y: -vh(25),
  });

  gsap.to(".TextScrollerLEFT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom",
      scrub: 1,
    },
    ease: "none",
    x: -140,
  });

  gsap.to(".TextScrollerRIGHT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom",
      scrub: 1,
    },

    ease: "none",
    x: 140,
  });

  gsap.from(".txtload", {
    scrollTrigger: {
      trigger: ".txtload",
      start: "top 99%",
      end: "bottom 80%",

      toggleActions: "restart none none reset",
      // markers: true,
      // scrub: 1,
    },
    opacity: 0,
    y: 20,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  gsap.from(".ddbg1", {
    scrollTrigger: {
      trigger: ".ddbg1",
      start: "top bottom",
      end: "bottom 80%",

      toggleActions: "restart none none reset",
      // markers: true,
      // scrub: 1,
    },

    y: 20,
    opacity: 0,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  gsap.from(".ddbg2", {
    scrollTrigger: {
      trigger: ".ddbg2",
      start: "top bottom",
      end: "bottom 80%",

      toggleActions: "restart none none reset",
      // markers: true,
      // scrub: 1,
    },

    y: 20,
    opacity: 0,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });

  gsap.from(".ddbg3", {
    scrollTrigger: {
      trigger: ".ddbg3",
      start: "top bottom",
      end: "bottom 80%",

      toggleActions: "restart none none reset",
      // markers: true,
      // scrub: 1,
    },

    y: 20,
    opacity: 0,

    stagger: 0.25,
    duration: 1,
    ease: "expo.inout",
  });
}

gsap.from(".ddbBackgroundAnim", {
  scrollTrigger: {
    trigger: ".ddbBackgroundAnim",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },

  x: -vw(30),

  duration: 1,
  ease: "expo.inout",
});

gsap.from(".ddb01Anim", {
  scrollTrigger: {
    trigger: ".ddb01Anim",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },

  x: -vw(10),
  opacity: 0,

  stagger: 0.2,
  duration: 1,
  ease: "expo.inout",
});

gsap.from(".featwork", {
  scrollTrigger: {
    trigger: ".featwork",
    start: "top 95%",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },

  y: 20,
  opacity: 0,

  stagger: 0.25,
  duration: 1,
  ease: "expo.inout",
});

gsap.from(".GDSNT02", {
  scrollTrigger: {
    trigger: ".GDSNT02",
    start: "top 100%",
    end: "bottom top",

    scrub: 2,
    // markers: true,
  },

  y: -100,
  rotation: -25,
  transformOrigin: "50% 50%",
});

gsap.to(".GDSNT01", {
  scrollTrigger: {
    trigger: ".GDSNT02",
    start: "top 100%",
    end: "bottom top",

    scrub: 0.5,
    // markers: true,
  },
  y: -20,
});

gsap.from(".GITTitle", {
  scrollTrigger: {
    trigger: ".GITTitle",
    start: "top 95%",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },

  y: 20,
  opacity: 0,

  stagger: 0.25,
  duration: 1,
  ease: "expo.inout",
});

gsap.from(".seemore", {
  scrollTrigger: {
    trigger: ".seemore",
    start: "top 99%",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },
  opacity: 0,
  y: 20,

  stagger: 0.25,
  duration: 1,
  ease: "expo.inout",
});

gsap.from(".TitlesFORMS", {
  scrollTrigger: {
    trigger: ".TitlesFORMS",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },

  x: -vw(10),
  opacity: 0,

  stagger: 0.2,
  duration: 0.75,
  ease: "expo.inout",
});

function scrollToTop() {
  gsap.to(window, { duration: 2, scrollTo: 0 });
}

function scrollToContact() {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: ".FooterForm", offsetY: 100 },
  });
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#CB_FWD").on("click", nextSlide);
$("#CB_BCK").on("click", prevSlide);

function nextSlide() {
  var owl = $(".owl-carousel");
  owl.trigger("next.owl.carousel");
}

function prevSlide() {
  var owl = $(".owl-carousel");
  owl.trigger("prev.owl.carousel");
}
