var App = App || {}

App.PostShowView = Backbone.View.extend({
  el: "#main",
  render: function(){
    var postView = new App.PostView({model: this.model});
    postView.render();
    this.$el.html(postView.el);
  }
});
