const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

const reviewsWrapper = document.querySelector(".reviews-wrapper");
const reviews = gsap.utils.toArray(".reviews");

gsap.to(reviews, {
  xPercent: -100 * (reviews.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: reviewsWrapper,
    scrub: 1,
    snap: 1 / (reviews.length - 1),
    start: "top 20%",
    end: "+=" + reviewsWrapper.offsetWidth,
  },
});
