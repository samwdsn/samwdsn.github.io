// window.addEventListener("load", () => {});
var preloadAnimation1 = new Image();
preloadAnimation1.src = "Lottie/Scribble_S_Anim.json";

var preloadAnimation2 = new Image();
preloadAnimation2.src = "Lottie/Scribble_W_Anim.json";

// Smooth Scroll "lenis" malarkey
const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Variables
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

/* Scroll To Buttons _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

function refreshPage() {
  location.reload();
  gsap.to(window, { duration: 1, scrollTo: 0 });
}

function scrollToInfo() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: { y: "#Info", offsetY: 0 },
  });
}
function scrollToWork() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: { y: "#Portfolio", offsetY: 0 },
  });
}

function scrollToTop() {
  gsap.to(window, { duration: 0.5, scrollTo: 0 });
}

if (window.matchMedia("(min-width: 680px)").matches) {
  // mobile + above
  function scrollToContact() {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: "#Contact", offsetY: 0 },
    });
  }
} else {
  // mobile
  function scrollToContact() {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: "#Contact", offsetY: -30 },
    });
  }
}

/* SplashLoad _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

const timelineLoad = gsap.timeline();
timelineLoad
  .to(".load_splash", {
    opacity: 1,
    y: -20,
    stagger: 0.2,
    duration: 1.5,
    delay: 0.1,
    ease: "expo.inout",
  })
  .to(
    ".load_splash2",
    {
      opacity: 1,
      y: -20,
      duration: 1.5,
      delay: 0.0,
      ease: "expo.inout",
    },
    "<"
  )
  .to(
    ".load_nav",
    {
      opacity: 1,
      y: 20,
      duration: 1,
      delay: 0.1,
      ease: "expo.inout",
    },
    "<"
  )
  .to(
    ".load_splash_m",
    {
      opacity: 1,
      y: -20,
      stagger: 0.2,
      duration: 1.5,
      delay: 0.1,
      ease: "expo.inout",
    },
    "<"
  )
  .to(
    ".load_splash2_m",
    {
      opacity: 1,
      y: -20,
      stagger: 0.2,
      duration: 1.5,
      delay: 0.0,
      ease: "expo.inout",
    },
    "<"
  )
  .to(
    ".load_splash3",
    {
      opacity: 1,
      y: -20,
      stagger: 0.2,
      duration: 1.5,
      delay: 0.1,
      ease: "expo.inout",
    },
    "<"
  );

/* SplashVideo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

if (window.matchMedia("(min-width: 680px)").matches) {
  const timelineSplash = gsap.timeline({
    scrollTrigger: {
      trigger: ".splashSection",
      start: "top top",
      endTrigger: ".SplashVideoWrapper",
      end: "40% top",
      scrub: 1,
      pin: true,
      duration: 2,
      ease: "expo.inout",

      onUpdate: (self) => {
        if (self.direction === -1 && self.progress === 0) {
          self.refresh();
        }
      },
    },
  });

  timelineSplash
    .from(".SplashVideoWrapper", { y: vh(90), duration: 1.5 }, "<")
    .to(".DDB_Transformff", { width: vw(60) }, "<")
    .to(".moveup1", { y: -185, duration: 1.5 }, "<")
    .to(".moveup2", { y: -185, duration: 1.5 }, "<")
    .to(".moveup12", { y: -20, duration: 1.5 }, "<")
    .to(".Scribble_LeftContainer", { x: -70, duration: 2 }, "<")
    .to(".Scribble_RightContainer", { x: 70, duration: 2 }, "<")

    .add(() => {
      gsap.to(".splashSection", {
        duration: 0,
        onComplete: ScrollTrigger.unpin,
      });
    }, "+=.25");
} else {
  const timelineSplash = gsap.timeline({
    scrollTrigger: {
      trigger: ".splashSection",
      start: "top top",
      endTrigger: ".SplashVideoWrapper",
      end: "200% 110%",
      scrub: 1,
      pin: true,
      duration: 2,
      ease: "expo.inout",

      onUpdate: (self) => {
        if (self.direction === -1 && self.progress === 0) {
          self.refresh();
        }
      },
    },
  });

  timelineSplash
    .from(".SplashVideoWrapper", { y: vh(70), duration: 4 }, "<")
    .to(".DDB_Transformff", { width: vw(60) }, "<")
    .to(".moveup1", { y: -50 }, "<")
    .to(".movedown1", { y: 35 }, "<")
    .to(".movedown_DB", { y: 125, duration: 5 }, "<")
    .to(".movedown_Done", { y: 60, duration: 5 }, "<")
    .to(".Scribble_LeftContainer", { x: -10, y: -20, duration: 5 }, "<")
    .to(".Scribble_RightContainer", { x: 0, y: 30, duration: 5 }, "<")

    .add(() => {
      gsap.to(".splashSection", {
        duration: 0,
        onComplete: ScrollTrigger.unpin,
      });
    }, "+=.25");
}

/* ScrollerText _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

if (window.matchMedia("(min-width: 680px)").matches) {
  gsap.to(".TextScrollerLEFT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
    x: -150,
  });

  gsap.to(".TextScrollerRIGHT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },

    ease: "none",
    x: 150,
  });
} else {
  gsap.to(".TextScrollerLEFT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
    x: -150,
  });

  gsap.to(".TextScrollerRIGHT", {
    scrollTrigger: {
      trigger: ".TextScrollerWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },

    ease: "none",
    x: 150,
  });
}

/* StaggerReveal _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.from(".txtload_Info", {
  scrollTrigger: {
    trigger: ".txtload_Info",
    start: "20% bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reset",
    // markers: true,
    // scrub: 1,
  },
  opacity: 0,
  y: 20,

  stagger: 0.2,
  duration: 1,
  delay: 0.1,
  ease: "expo.inout",
});

gsap.from(".txtload_GiT", {
  scrollTrigger: {
    trigger: ".txtload_GiT",
    start: "top bottom",
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

/* PortfolioHover _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.to(".Pfol_Hover_Content", {
  y: "500px",
  scrollTrigger: {
    trigger: ".PortfolioListSection",
    start: "70% bottom",
    end: "230% bottom",
    scrub: 1,
  },
});

/* PortfoCLICK _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

function PLI_Click(clickedDiv) {
  const parentDiv = clickedDiv.parentElement;
  const container = parentDiv.querySelector(".Pfol_Container");

  // Deactivate all other .Pfol_Container elements
  const allContainers = document.querySelectorAll(".Pfol_Container");
  allContainers.forEach((otherContainer) => {
    if (otherContainer !== container) {
      otherContainer.classList.remove("active");
      updateText(otherContainer, "View");
    }
  });

  // Toggle the active state for the clicked .Pfol_Container
  container.classList.toggle("active");
  updateText(
    container,
    container.classList.contains("active") ? "Hide" : "View"
  );

  // Call the toggleDisplay function
  toggleDisplay();
}

function toggleDisplay() {
  const contentClasses = [
    ".Pfol_Brand_Content",
    ".Pfol_Web_Content",
    ".Pfol_Motion_Content",
    ".Pfol_Social_Content",
    ".Pfol_3D_Content",
  ];

  var isAnyContainerActive = document.querySelector(".Pfol_Container.active");

  contentClasses.forEach(function (contentClass) {
    var elements = document.querySelectorAll(contentClass);

    elements.forEach(function (element) {
      if (isAnyContainerActive) {
        element.style.display = "none";
      } else {
        if (element.style.display === "none") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      }
    });
  });
}

function updateText(container, newText) {
  const viewProjText = container.parentElement.querySelector(".ViewProj");
  if (viewProjText) {
    if (!viewProjText.hasAttribute("data-original-html")) {
      viewProjText.setAttribute("data-original-html", viewProjText.innerHTML);
    }

    const originalHTML = viewProjText.getAttribute("data-original-html");

    if (container.classList.contains("active")) {
      viewProjText.innerHTML = originalHTML.replace("View", newText);
    } else {
      viewProjText.innerHTML = originalHTML;
    }
  }
}

/* OWLCarousel _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
/* OWLCarousel _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 100,
  stagePadding: 0,
  nav: false,
  dots: true,
  autoWidth: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
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

// Custom Cursor _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

const CCSwipe = document.querySelector(".CCSwipe");
const hoverContainers = document.querySelectorAll(".SwipeCursorHere");

const updateCursorPosition = (event) => {
  CCSwipe.style.top = `${event.clientY}px`;
  CCSwipe.style.left = `${event.clientX}px`;
};

// Iterate through each hover container and attach event listeners
hoverContainers.forEach((hoverContainer) => {
  hoverContainer.addEventListener("mouseenter", () => {
    CCSwipe.classList.add("Show");
  });

  hoverContainer.addEventListener("mouseleave", () => {
    CCSwipe.classList.remove("Show");
  });
});

window.addEventListener("mousemove", (event) => {
  updateCursorPosition(event);
});

// Custom Cursor2 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

if ("ontouchstart" in window || navigator.maxTouchPoints) {
} else {
  const CCMedia = document.querySelector(".CCMedia");
  const hoverMediaContainers = document.querySelectorAll(".MediaCursorHere");
  const bodyElement = document.querySelector("body"); // Get the <body> element

  const updateMediaCursorPosition = (event) => {
    CCMedia.style.top = `${event.clientY}px`;
    CCMedia.style.left = `${event.clientX}px`;
  };

  // Iterate through each hover container and attach event listeners
  hoverMediaContainers.forEach((hoverContainer) => {
    hoverContainer.addEventListener("mouseenter", () => {
      CCMedia.classList.add("Show");
      bodyElement.classList.add("no-cursor"); // Add the class to hide the cursor
    });

    hoverContainer.addEventListener("mouseleave", () => {
      CCMedia.classList.remove("Show");
      bodyElement.classList.remove("no-cursor"); // Remove the class to show the cursor
    });
  });

  // Update cursor position on mousemove event
  window.addEventListener("mousemove", (event) => {
    updateMediaCursorPosition(event);
  });
  function togglePlayPause() {
    var video = document.getElementById("splashVideo");
    var icon = document.getElementById("playPauseIcon");

    if (video.paused) {
      video.play();
      icon.textContent = "⏸"; // Change icon to pause symbol
    } else {
      video.pause();
      icon.textContent = "⏵"; // Change icon to play symbol
    }
  }
}

// LOTTIE _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

function handleViewportChange(mq) {
  if (mq.matches) {
    LottieInteractivity.create({
      player: ".FormScribbles_W",
      mode: "scroll",
      actions: [
        {
          visibility: [0.15, 0.5],
          type: "playOnce",
          loop: false,
        },
      ],
    });
    LottieInteractivity.create({
      player: ".FormScribbles_S",
      mode: "scroll",
      actions: [
        {
          visibility: [0, 0.1],
          type: "playOnce",
          loop: false,
        },
      ],
    });
  } else {
    LottieInteractivity.create({
      player: "#FormScribblesW",
      mode: "scroll",
      actions: [
        {
          visibility: [0, 0.1],
          type: "playOnce",
          loop: false,
        },
      ],
    });
    LottieInteractivity.create({
      player: "#FormScribblesS",
      mode: "scroll",
      actions: [
        {
          visibility: [0.25, 1.0],
          type: "playOnce",
          loop: false,
        },
      ],
    });
  }
}

const viewportMediaQuery = window.matchMedia("(max-width: 1023px)");
handleViewportChange(viewportMediaQuery);

viewportMediaQuery.addListener(handleViewportChange);
