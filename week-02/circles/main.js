$(document).ready(function(){
  var maxCircles = 100;
  var stepSize = 20;
  var stepTime = 300;
  var circles = [];

  var makeCircle = function(){
    if(circles.length < maxCircles){
      var circle = $("<div class='circle'></div>");
      circle.css({
        background: randomRgba(),
        position: 'absolute',
        left: Math.round(Math.random() * window.innerWidth),
        top: Math.round(Math.random() * window.innerHeight)
      });
      circles.push(circle);
      $("body").append(circle);
      return circle;
    }else{
      clearInterval(circleMaker);
    }
  }

  var randomRgba = function(){
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgba("+ red + ", " + green + ", " + blue + ", 1)";
  }

  var moveCircle = function(circle){
    var x = parseInt(circle.css("left"));
    var y = parseInt(circle.css("top"));
    circle.animate({
      left: x + (2 * stepSize * Math.random() - stepSize ) + "px",
      top: y + (2 * stepSize * Math.random() - stepSize) + "px",
      backgroundColor: randomRgba()
    },stepTime)
  }

  var moveCircles = function(){
    for (var i = 0; i < circles.length; i++) {
      moveCircle(circles[i])
    }
  }

  var circleMaker = setInterval(makeCircle, stepTime);
  setInterval(moveCircles, stepTime);
});
