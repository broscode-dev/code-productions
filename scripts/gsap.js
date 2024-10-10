const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

const shoutouts = document.getElementById("shoutouts");
const reviews = gsap.utils.toArray(".reviews");

gsap.to(reviews, {
  xPercent: -100 * (reviews.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: shoutouts,
    pin: "shoutouts",
    scrub: true,
    snap: 1 / (reviews.length - 1),
    start: "top center",
    end: "+=" + shoutouts.offsetWidth,
  },
});
