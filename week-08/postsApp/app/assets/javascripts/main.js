_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

var post = new App.Post({
  id: 1,
  title: "Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

var postTwo = new App.Post({
  id: 2,
  title: "PART II: Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

var postThree = new App.Post({
  id: 3,
  title: "PART III: Interesting Developments in Geopolitics",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
});

App.blogPosts = new App.Posts([post, postTwo, postThree]);

App.router = new App.Router();

$(document).ready(function(){
  Backbone.history.start("/");
});
