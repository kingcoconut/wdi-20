$(document).ready(function(){
  var afterFadeOut = function(){
    $(this).css({
        fontSize: "4em",
        color:"pink",
        border:"5px yellow solid"
      })
      .fadeIn();
  }

  var magic = function(){
    $("p").css("color", "red")
      .html("Welcome!")
      .slideUp(afterFadeOut)
  }

  setTimeout(magic,2000);
});
