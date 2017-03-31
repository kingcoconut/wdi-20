_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

var Post = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: Post
});

var PostView = Backbone.View.extend({
  tagName: "div",
  className: "post",
  render: function(){
    var postTemplate = _.template($("#postTemplate").html());
    this.$el.html(postTemplate(this.model.attributes));
  }
});

var AllPostsView = Backbone.View.extend({
  el: "#main",
  render: function(){
    var $header = $("<h1>").text("WELCOME")
    this.$el.html($header)
    var mainElement = this.$el;
    this.collection.each(function(post){
      var postView = new PostView({model: post});
      postView.render();
      mainElement.append(postView.el);
    })
  }
});

var SinglePostView = Backbone.View.extend({
  el: "#main",
  render: function(){
    var postView = new PostView({model: this.model});
    postView.render();
    this.$el.html(postView.el);
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/:id": "showPost"
  },
  index: function(){
    var appView = new AllPostsView({collection: App.blogPosts});
    appView.render();
  },
  showPost: function(id){
    var post = App.blogPosts.get(id);
    var view = new SinglePostView({model: post});
    view.render();
  }
})

var App = {}

var post = new Post({
  id: 1,
  title: "Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

var postTwo = new Post({
  id: 2,
  title: "PART II: Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

var postThree = new Post({
  id: 3,
  title: "PART III: Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

App.blogPosts = new Posts([post, postTwo, postThree]);
App.router = new AppRouter();

$(document).ready(function(){
  Backbone.history.start("/");
});
