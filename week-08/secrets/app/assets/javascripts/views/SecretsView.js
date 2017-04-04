var App = App || {}

App.SecretsView = Backbone.View.extend({
  events: {
    "click button":"create"
  },
  el: "#main",
  render: function(){
    this.$el.html($("#secretsTemplate").html());
    var view = new App.SecretsListView({collection: this.collection});
    view.render();
  },
  create: function(){
    var contentz = this.$el.find("input").val();
    this.collection.create({content: contentz});
    this.$el.find("input").val("").focus();
  }
})
