var i = 0;
var txt = "Hello! Welcome to Nathan's Website";
var speed = 3000;
const individualSpeed = speed / txt.length;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("scrolling").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, individualSpeed);
  }
}
const checkpoint = 100;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.getElementById("fade").style.opacity = opacity;
});

$(function () {
  typeWriter();
});
