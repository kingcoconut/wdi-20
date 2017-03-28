var apiURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]"

var getChuckQuote = function(){
  console.log("Fetching a joke for Chuck...");
  $.ajax({
    url: apiURL,
    method: "GET",
    dataType: "JSON",
    success: displayChuckQuote
  });
}

var displayChuckQuote = function(data){
  var joke = data.value.joke;
  var $p = $("<p>").html(joke);
  $(".chuck .content").append($p);
};

$(document).ready(function(){
  var chuckTimer = window.setInterval(getChuckQuote, 2000);
  $(".chuck button").on("click", function(){
    window.clearInterval(chuckTimer);
    alert("You cannot stop Chuck Norries");
    chuckTimer = window.setInterval(getChuckQuote, 2000);
  });
});
