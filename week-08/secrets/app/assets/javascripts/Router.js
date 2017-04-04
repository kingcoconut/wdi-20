var App = App || {}

App.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function(){
    var view = new App.SecretsView({collection: App.secrets});
    view.render();
  }
})
