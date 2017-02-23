$(document).ready(function(){
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var url = link.href;
    var imgSrc = youtube.generateThumbnailUrl(url);
    var img = document.createElement("img");
    img.src = imgSrc;
    link.appendChild(img);
  }
  $("img").addClass("pop");
});
