var App = App || {}

App.Secrets = Backbone.Collection.extend({
  model: App.Secret,
  url: "/secrets"
});
