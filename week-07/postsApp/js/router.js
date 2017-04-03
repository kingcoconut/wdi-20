var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/:id": "showPost"
  },
  index: function(){
    var appView = new App.PostListView({collection: App.blogPosts});
    appView.render();
  },
  showPost: function(id){
    var post = App.blogPosts.get(id);
    var view = new App.PostShowView({model: post});
    view.render();
  }
})
