var App = App || {}

App.PostListView = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(options.collection, "change", this.render);
  },
  el: "#main",
  events: {
    "click #new_post": "savePost"
  },
  render: function(){
    var template = _.template($("#postListTemplate").html());
    this.$el.html(template(this.collection));
  },
  savePost: function(){
    var title = this.$el.find("input").val();
    var content = this.$el.find("textarea").val();

    this.collection.create({title: title, content: content});

    this.$el.find("input").val("");
    this.$el.find("textarea").val("");
  }
});
