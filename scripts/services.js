function showContent(serviceId) {
  const allContent = document.querySelectorAll(".service-content");

  allContent.forEach((div) => div.classList.add("hidden"));

  if (serviceId) {
    serviceId.classList.remove("hidden");
    serviceId.classList.add("block");
  }
}
