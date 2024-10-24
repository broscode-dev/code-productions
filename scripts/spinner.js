document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");

  function hideLoadingScreen() {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }

  // Fallback to hide loading screen if images take too long
  setTimeout(hideLoadingScreen, 5000);
});
