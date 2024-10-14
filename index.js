const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const sidebar = document.querySelector(".sidebar");



window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Update the position of the cursor dot
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Animate the cursor outline
  cursorOutline.animate([{ left: `${posX}px`, top: `${posY}px` }], {
    duration: 500,
    fill: "forwards",
  });
});

var links = document.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    gsap.to(cursorOutline, {
      scale: 2.5,
      borderWidth: ".5px", // Adjust this value to your desired border width
      duration: 0.3, // Duration for the animation
    });
  });
});

links.forEach(function (link) {
  link.addEventListener("mouseleave", function () {
    gsap.to(cursorOutline, {
      scale: 1,
      borderWidth: "1px", // Adjust back to the original border width
      duration: 0.3, // Duration for the animation
    });
  });
});

/////// Sidebar logic ///////////

function showSidebar() {
  sidebar.style.right = "0%";
}
function closeSidebar() {
  sidebar.style.right = "-100%";
}

/////////////////////////////////////LENIS ////////////////////////
// Initialize Lenis

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

////////////////////////////// GSAP ///////////////////////////////////
//////////Animation for pinning Elements ////////////////////////
gsap.registerPlugin(ScrollTrigger);

gsap.to("s1_tagline", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".s1_tagline",
    start: "top top", // Pin when it reaches the top of the viewport
    pinSpacing: false, // Removes extra spacing after unpinning

    scroller: "body",
    pin: true, // Pin the element
    pinSpacing: false,
    scrub: true,

    start: "top 0", // Start animation when the trigger element's top reaches the center of the viewport
    end: "bottom 200", // End animation when the trigger element's bottom reaches the center of the viewport
    toggleActions: "play reverse play reverse", // Play the animation when the trigger enters the viewport, but don't reverse it when it exits
  },
});

const splitTypes = document.querySelectorAll(".txtAni");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "char" });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 1%",
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});
