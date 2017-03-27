$(document).ready(function(){
  $("#search").on("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        // we must have finished downloading the response :)
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el){
          $("body").append($("<h2>").html(el.Title));
          var img = $("<img>").attr("src", el.Poster).attr("movie-id", el.imdbID);
          $("body").append(img);
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  })

  console.log("Setup img event handling");

  $(document).on("click", "img", function(){
    var id = $(this).attr("movie-id");
    console.log("Have fun here :)");
  });
});
