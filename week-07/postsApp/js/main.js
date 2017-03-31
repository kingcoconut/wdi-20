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

var AppView = Backbone.View.extend({
  el: "#main",
  render: function(){
    var $header = $("<h1>").text("WELCOME")
    this.$el.html($header)
    var self = this;
    this.collection.each(function(post){
      var postView = new PostView({model: post});
      postView.render();
      self.$el.append(postView.el);
    })
  }
});

$(document).ready(function(){
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

  var blogPosts = new Posts([post, postTwo, postThree]);

  var appView = new AppView({collection: blogPosts});
  appView.render();
})
