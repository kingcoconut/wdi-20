_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

var Book = Backbone.Model.extend({});
var Books = Backbone.Collection.extend({
  model: Book
})

var BookIndexPage = Backbone.View.extend({
  el: "#main",
  render: function(){
    var mainElement = this.$el;
    this.collection.each(function(book){
      var view = new BookView({model: book})
      view.render();
      mainElement.append(view.el)
    });
  }
});

var BookView = Backbone.View.extend({
  tagName: "div",
  events: {
    "click .author": "authorAlert",
    "click .red": "makeRed"
  },
  render: function(){
    var bookTemplate = _.template($("#bookTemplate").html());
    this.$el.html(bookTemplate(this.model.attributes));
  },
  authorAlert: function(){
    alert("Can you read, the authr's name is: " + this.model.get("author"));
  },
  makeRed: function(){
    this.$el.css({color:"red"});
  }
});

var BookShowPage = Backbone.View.extend({
  el: "#main",
  render: function(){
    var view = new BookView({model: this.model});
    view.render();
    this.$el.html(view.el);
  }
})

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "books/:id": "showBook"
  },
  index: function(){
    var indexPage = new BookIndexPage({collection: App.books});
    indexPage.render();
  },
  showBook: function(id){
    var book = App.books.get(id);
    var view = new BookShowPage({model: book});
    view.render();
  }
});

App = {}
App.books = new Books([
  new Book({id: 1, title: "Harry Potter I", author: "JKRowling", published: "2000"}),
  new Book({id: 2, title: "Lord of the Rings", author: "JRR Tolken", published: "1980"}),
  new Book({id: 3, title: "Green Eggs and Ham", author: "Dr Zues", published: "1970"}),
  new Book({id: 4, title: "Oliver Twist", author: "Charles Dickens", published: "200BC"}),
  new Book({id: 5, title: "The Girl with the Dragon Tattoo", author: "Some Big Danish Dude", published: "2000"})
]);
App.router = new AppRouter();

$(document).ready(function(){
  Backbone.history.start("/");
})
