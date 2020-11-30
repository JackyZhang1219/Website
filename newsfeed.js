function loadNewsJSONAsHTML(result) {
  var myString = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    myString += "<h2>" + nextResult['type'] + "</h2>";
  }

  // Set the HTML
  $("#list_chocolates").html(myString);

}

function requestNewsFeed() {
  $.ajax({
    dataType: "json",
    url: "/newsfeed.json",
    success : loadNewsJSONAsHTML,
  });
}

$('#news_button').click(function() {
  requestNewsFeed();
}
