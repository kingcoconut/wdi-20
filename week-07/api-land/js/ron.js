var ronApiURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"

var getRonQuote = function(){
  console.log("Fetching a quote from Ron...");
  $.ajax({
    url: ronApiURL,
    method: "GET",
    dataType: "JSON",
    success: displayRonQuote
  });
}

var displayRonQuote = function(data){
  var joke = data[0];
  var $p = $("<p>").html(joke);
  $(".swanson .content").append($p);
};

$(document).ready(function(){
  var ronTimer = window.setInterval(getRonQuote, 1500);
  $(".swanson button").on("click", function(){
    window.clearInterval(ronTimer);
  });
});
