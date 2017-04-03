var App = App || {}

App.Posts = Backbone.Collection.extend({
  model: App.Post,
  url: "/posts"
});
