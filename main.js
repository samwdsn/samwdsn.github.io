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

function toggleActive(element) {
  element.classList.toggle("active");
}

function runAnimations() {
  const timelineSplash = gsap.timeline();

  timelineSplash
    .to(".Navbar", { opacity: 1, width: "95vw", duration: 1.2 })
    .to(".DDBMASK", { height: 0, delay: 0.5, duration: 1 }, "<")
    .from(".DDBContainer", { x: vw(15), delay: 0.01, duration: 1 }, "<")
    .to(
      ".DDBText",
      {
        x: "-=100%",
        duration: 10,
        ease: "none",
        repeat: -1,
        delay: 0.5,
      },
      "<"
    )
    .from(".Splash_Video", { y: 150, delay: -0.4, duration: 1 }, "<")
    .to(".Splash_Video", { opacity: 1, delay: 0.0, duration: 1 }, "<");
}

document.addEventListener("DOMContentLoaded", function () {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    if (performance.navigation.type === 1) {
      runAnimations();
    } else {
      const timelineSplash = gsap.timeline();
      timelineSplash
        .from(".LoadingBar", { width: "0vw" })
        .from(".LoadingScreen", {
          opacity: 1,
          display: "flex",
          duration: 0.25,
        });
      setTimeout(runAnimations, 250);
    }
  } else {
    runAnimations();
  }
});

// Update video + play on vp change
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("SplashVideo");
  video.addEventListener("canplaythrough", function () {
    video.play();
  });
});

// // VideoDelay
// document.addEventListener("DOMContentLoaded", function () {
//   var video = document.getElementById("SplashVideo");
//   setTimeout(function () {
//     video.play().catch((error) => {
//       console.error("Error attempting to play video:", error);
//     });
//   }, 1500);
// });

// NavMenu
function toggleBodyScrollLock() {
  document.body.classList.toggle("no-scroll");
}

function toggleActive(element) {
  element.classList.toggle("active");
}

function toggleBurgerMenu() {
  var burgerMenu = document.querySelector(".BurgerMenu");
  var bunTop = document.querySelector(".BunTop");
  var bunBottom = document.querySelector(".BunBottom");
  var pattyMid = document.querySelector(".PattyMid");

  toggleActive(burgerMenu);
  toggleActive(bunTop);
  toggleActive(bunBottom);
  toggleActive(pattyMid);

  toggleBodyScrollLock();
}

function closeMenuOnClickOutside(event) {
  var burgerMenu = document.querySelector(".BurgerMenu");
  var isActive = burgerMenu.classList.contains("active");
  var isMenuClicked =
    burgerMenu.contains(event.target) ||
    event.target.classList.contains("BurgerNavButton");

  if (!isMenuClicked && isActive) {
    toggleActive(burgerMenu);
    toggleActive(document.querySelector(".BunTop"));
    toggleActive(document.querySelector(".BunBottom"));
    toggleActive(document.querySelector(".PattyMid"));

    toggleBodyScrollLock();
  }
}

document.addEventListener("click", closeMenuOnClickOutside);

window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;
  var burgerMenu = document.querySelector(".BurgerMenu");

  if (windowWidth > 1023 && burgerMenu.classList.contains("active")) {
    toggleActive(burgerMenu);
    toggleActive(document.querySelector(".BunTop"));
    toggleActive(document.querySelector(".BunBottom"));
    toggleActive(document.querySelector(".PattyMid"));

    toggleBodyScrollLock();
  }
});

function buttonPress() {
  toggleBurgerMenu();
}

document
  .querySelector(".BurgerNavButton")
  .addEventListener("click", function (event) {
    buttonPress();
  });

/* Scroll To Buttons _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

function refreshPage() {
  location.reload();
}

function scrollToInfo() {
  var burgerMenu = document.querySelector(".BurgerMenu");
  var isActive = burgerMenu.classList.contains("active");

  if (isActive) {
    toggleBurgerMenu();
    document.getElementById("Info").scrollIntoView({ behavior: "smooth" });
  } else {
    document.getElementById("Info").scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToWork() {
  var burgerMenu = document.querySelector(".BurgerMenu");
  var isActive = burgerMenu.classList.contains("active");

  if (isActive) {
    toggleBurgerMenu();
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });
  } else {
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });
  }
}
function scrollToContact() {
  var burgerMenu = document.querySelector(".BurgerMenu");
  var isActive = burgerMenu.classList.contains("active");

  if (isActive) {
    toggleBurgerMenu();
    document.getElementById("Footer").scrollIntoView({ behavior: "smooth" });
  } else {
    document.getElementById("Footer").scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  gsap.to(window, { duration: 0.5, scrollTo: 0 });
}

/* SplashVideo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.to(".Splash_Videoxx", {
  scrollTrigger: {
    trigger: ".Section_Splash",
    start: "top top",
    endTrigger: ".Splash_Video",
    end: "80% 90%",
    scrub: 0.5,

    // markers: true,
  },
  ease: "none",
  y: -150,
});

gsap.to(".TextScrollerWrapperxx", {
  scrollTrigger: {
    trigger: ".Section_Splash",
    start: "top top",
    endTrigger: ".Splash_Video",
    end: "80% 90%",
    scrub: 0.5,

    // markers: true,
  },
  ease: "none",
  y: -150,
});
let isMobileView = window.innerWidth <= 1024;

function updateVideoSourceIfNeeded() {
  const newIsMobileView = window.innerWidth <= 1024;

  if (newIsMobileView !== isMobileView) {
    // Only update the video source if the view has changed
    isMobileView = newIsMobileView;
    const videoPlayer = document.getElementById("SplashVideo");
    const videoSource = document.getElementById("videoSource");

    if (isMobileView) {
      videoSource.src = "Video/SWD_Mobile-c.mp4";
    } else {
      videoSource.src = "Video/SWD_Wide-c.mp4";
    }

    videoPlayer.load();
  }
}

updateVideoSourceIfNeeded();
window.addEventListener("resize", updateVideoSourceIfNeeded);

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

/* Logotape _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

if (window.matchMedia("(min-width: 680px)").matches) {
  gsap.from(".LogoTapeTop", {
    scrollTrigger: {
      trigger: ".LogosWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
    x: -150,
  });

  gsap.from(".LogoTapeBottom", {
    scrollTrigger: {
      trigger: ".LogosWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },

    ease: "none",
    x: 150,
  });
} else {
  gsap.from(".LogoTapeTop", {
    scrollTrigger: {
      trigger: ".LogosWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "none",
    x: -100,
  });

  gsap.from(".LogoTapeBottom", {
    scrollTrigger: {
      trigger: ".LogosWrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },

    ease: "none",
    x: 150,
  });
}
/*Info _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.from(".txtload_Info1", {
  scrollTrigger: {
    trigger: ".txtload_Info1",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reverse",
  },
  opacity: 0,
  x: -100,

  stagger: 0.25,
  duration: 1,
  delay: 0.1,
  ease: "expo.inout",
});

gsap.from(".txtload_Info2", {
  scrollTrigger: {
    trigger: ".txtload_Info2",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reverse",
  },
  opacity: 0,
  x: 100,

  stagger: 0.25,
  duration: 1,
  delay: 0.1,
  ease: "expo.inout",
});

var containers = gsap.utils.toArray(".CopyImageBlock");
containers.forEach(function (container) {
  gsap.fromTo(
    container.querySelectorAll(".IMGLOAD"),
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reverse",
        start: "20% bottom",
        end: "bottom 80%",
        immediateRender: false,
      },
    }
  );
});

/* PortfolioHover _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.to(".Pfol_Hover_Content", {
  y: "500px",
  scrollTrigger: {
    trigger: ".Section_PortfolioList",
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

/* Footer _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
gsap.from(".txtload_Footer1", {
  scrollTrigger: {
    trigger: ".txtload_Footer1",
    start: "top bottom",
    end: "bottom 80%",

    toggleActions: "restart none none reverse",
  },
  opacity: 0,
  x: -100,

  stagger: 0.25,
  duration: 1,
  delay: 0.1,
  ease: "expo.inout",
});

/* OWLCarousel _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
/* OWLCarousel _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */
$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 80,
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

// / Custom Cursor _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */

const customCursor01 = document.querySelector(".customCursor01");
const hoverContainers = document.querySelectorAll(".CustomCursorHere");

const updateCursorPosition = (event) => {
  customCursor01.style.top = `${event.clientY}px`;
  customCursor01.style.left = `${event.clientX}px`;
};

hoverContainers.forEach((hoverContainer) => {
  hoverContainer.addEventListener("mouseenter", () => {
    customCursor01.classList.add("Show");
  });

  hoverContainer.addEventListener("mouseleave", () => {
    customCursor01.classList.remove("Show");
  });
});

window.addEventListener("mousemove", (event) => {
  updateCursorPosition(event);
});
