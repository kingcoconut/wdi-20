var App = App || {}

App.PostView = Backbone.View.extend({
  tagName: "div",
  className: "post",
  render: function(){
    var postTemplate = _.template($("#postTemplate").html());
    this.$el.html(postTemplate(this.model.attributes));
  }
});
