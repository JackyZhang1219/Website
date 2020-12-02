var i = 0;
var txt = "Hello! Welcome to Jacky's Website";
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

//get element by id from html and set it to something new
function changesomeHTML(){
  document.getElementbyID('#load_chocolate').innerHTML = "THIS IS NEW CONTENT"
}

function loadGame(){
    $.ajax({url: "/game/game.html", success: loadContent});
}

$(document.getElementbyID("load_game")).click(loadGame);
