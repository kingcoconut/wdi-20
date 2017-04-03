var App = App || {}

App.PostListView = Backbone.View.extend({
  el: "#main",
  render: function(){
    var $header = $("<h1>").text("WELCOME")
    this.$el.html($header)
    var mainElement = this.$el;
    this.collection.each(function(post){
      var postView = new App.PostView({model: post});
      postView.render();
      mainElement.append(postView.el);
    })
  }
});
