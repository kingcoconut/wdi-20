window.onload = function(){
  var xhr = new XMLHttpRequest();
  console.log(xhr.readyState)
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      // we must have finished downloading the response :)
      alert("Download finished");
      console.log(xhr.responseText);
    }
  };
  xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
  xhr.send();
};
