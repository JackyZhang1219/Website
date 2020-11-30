
//get element by id from html and set it to something new
function changesomeHTML(){
  document.getElementbyID('#load_chocolate').innerHTML = "THIS IS NEW CONTENT"
}

function loadGame(){
    $.ajax({url: "/game/game.html", success: loadContent});
}

$(document.getElementbyID("load_game")).click(loadGame);
