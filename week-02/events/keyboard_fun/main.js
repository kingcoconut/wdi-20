$(document).ready(function(){
  var keyHandler = function(event){
    if(event.key === "a"){
      $("body").css("background", "red");
    }else{
      $("body").css("background", "blue");
    }
  }

  $("input").on("keydown", keyHandler)
})
