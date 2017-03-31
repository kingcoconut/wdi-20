var RectangleView = Backbone.View.extend({
  tagName: "div",
  className: "rectangle",
  events: {
    "click": "alertMe"
  },
  render: function(){
    this.$el.css({
      height: this.model.get("height"),
      width: this.model.get("width"),
      top: this.model.get("top"),
      left: this.model.get("left")
    });
  },
  alertMe: function(){
    alert("Hey there, you clicked me!");
  }
});

var Rectangle = Backbone.Model.extend({});

$(document).ready(function(){
  var rectangle = new Rectangle({
    width: "300px",
    height: "75px",
    top: "100px",
    left: "300px"
  });

  var rectangleTwo = new Rectangle({
    width: "300px",
    height: "75px",
    top: "500px",
    left: "700px"
  });

  var rectangleView = new RectangleView({model: rectangle});
  rectangleView.render();

  var rectangleViewTwo = new RectangleView({model: rectangleTwo});
  rectangleViewTwo.render()

  $("body").append(rectangleView.el).append(rectangleViewTwo.el);
})
