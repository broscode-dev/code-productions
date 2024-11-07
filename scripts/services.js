function showContent(serviceEl) {
  highlightRadioButton(serviceEl.id);
  const allContent = document.querySelectorAll(".service-content");

  allContent.forEach((div) => div.classList.add("hidden"));

  if (serviceEl) {
    serviceEl.classList.remove("hidden");
    serviceEl.classList.add("block");
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
