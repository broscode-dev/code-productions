const text = " ";
const intro = document.getElementById("intro");
let i = 0;
let j = 0;

function autoType() {
  if (i === text.length) return;
  if (text.charAt(i) === " ") {
    intro.innerHTML += text.substring(j, i);
    j = i;
  }
  i++;

  setTimeout(autoType, 20);
}
autoType();
//  I excel in crafting intuitive designs for websites and apps, aiding businesses in enhancing user experience, improving key metrics, and achieving digital leadership.
