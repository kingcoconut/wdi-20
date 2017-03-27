window.onload = function(){
  document.getElementById('search').addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        // we must have finished downloading the response :)
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el){
          var heading = document.createElement("h2");
          title = document.createTextNode(el.Title);
          heading.appendChild(title);
          document.body.append(heading);
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  })
};
