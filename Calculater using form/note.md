/* scroll */

const fadeIns = document.querySelectorAll(".fade-in");
const sr = ScrollReveal();
sr.reveal(fadeIns, {
  origin: "bottom",
  distance: "20px",
  duration: 1000,
  delay: 200,
  easing: "ease",
  reset: true,
  viewFactor: 0.2,
  opacity: 0,
  scale: 0.9,
});

/* scroll end */