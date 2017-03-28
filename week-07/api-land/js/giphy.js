var giphyApiURL = "http://api.giphy.com/v1/gifs/random";
var API_KEY = "dc6zaTOxFJmzC"

var getGiphyImage = function(){
  var tag = $(".giphy input").val();
  $.ajax({
    url: giphyApiURL,
    method: "GET",
    dataType: "JSON",
    data: {
      api_key: API_KEY,
      tag: tag
    },
    success: displayGiphyImage
  });
};

var displayGiphyImage = function(data){
  var imgSrc = data.data.image_url;
  var $img = $("<img>").attr("src", imgSrc);
  $(".giphy .content").append($img);
};

$(document).ready(function(){
  var giphyTimer = window.setInterval(getGiphyImage, 1000);
  $(".giphy button").on("click", function(){
    $(".giphy .content").html("");
    clearInterval(giphyTimer);
    giphyTimer = window.setInterval(getGiphyImage, 2000);
  });
});
