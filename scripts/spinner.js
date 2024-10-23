document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const images = document.querySelectorAll(".hero-image");
  let loadedImages = 0;

  function hideLoadingScreen() {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      hideLoadingScreen();
    }
  }

  // Check if images are already cached
  images.forEach((img) => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener("load", imageLoaded);
    }
    img.addEventListener("error", imageLoaded);
  });

  // Fallback to hide loading screen if images take too long
  setTimeout(hideLoadingScreen, 5000);
});
