var App = App || {}

App.PostView = Backbone.View.extend({
  tagName: "div",
  className: "post",
  events: {
    "click button": "delete"
  },
  render: function(){
    var postTemplate = _.template($("#postTemplate").html());
    this.$el.html(postTemplate(this.model.attributes));
  },
  delete: function(){
    this.model.destroy();
    Backbone.history.navigate("/", {trigger: true});
  }
});
