require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get "/" do
  #make a new connection to our database and store it in the variable db
  db = SQLite3::Database.new "database.db"

  #make my sql query results easier to user
  db.results_as_hash = true

  @results = db.execute "SELECT * FROM person;"

  erb :index, layout: :main
end
