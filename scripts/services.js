function showContent(serviceEl) {
  highlightRadioButton(serviceEl.id);
  const allContent = document.querySelectorAll(".service-content");

  allContent.forEach((div) => {
    div.classList.add("hidden");
    // div.classList.remove("animate-slide-in-right"); // Remove animation on all hidden content
  });

  if (serviceEl) {
    serviceEl.classList.remove("hidden");
    serviceEl.classList.add("flex");
    // serviceEl.classList.add("animate-slide-in-right"); // Add animation when content is shown
  }
}

const highlightRadioButton = (serviceId) => {
  const radioButtonNumber = getNumberFromString(serviceId);
  const radioButtonId = `service-radio-${radioButtonNumber}`;
  const radioButton = document.getElementById(radioButtonId);
  radioButton.checked = true;
};

const getNumberFromString = (string) => {
  // Regex to find a number at the end of the string
  const pattern = /(\d{1,2})$/;
  const match = string.match(pattern);
  return match ? match[0] : null;
};
