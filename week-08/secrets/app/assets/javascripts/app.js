_.templateSettings = {
  interpolate : /\{\{=(.+?)\}\}/g,
  evaluate : /\{\{(.+?)\}\}/g
};

$(document).ready(function(){
  App.router = new App.Router();
  App.secrets = new App.Secrets();
  App.secrets.fetch().done(function(data){
    Backbone.history.start();
  })

  setInterval(function(){
    App.secrets.fetch();
  }, 2000);
})
