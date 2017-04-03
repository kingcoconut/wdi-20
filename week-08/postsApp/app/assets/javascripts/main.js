_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

App.blogPosts = new App.Posts();

App.router = new App.Router();

$(document).ready(function(){
  App.blogPosts.fetch().done(function(){
    Backbone.history.start();
  });
});
