function loadNewsJSONAsHTML(result) {
  var newsfeed = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    myString += "<h2>" + nextResult['headline'] + "</h2>" + "<p>" + nextResult['body'] + "</p>";
  }

  $("newsfeed-contet").html(myString);

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
})
