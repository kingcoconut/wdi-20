require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

configure do
  #make a new connection to our database and store it in the variable db
  set :db, SQLite3::Database.new("database.db")

  #make my sql query results easier to user
  settings.db.results_as_hash = true
end

get "/" do
  @results = settings.db.execute "SELECT * FROM person;"

  erb :index, layout: :main
end

get "/people/:foo" do
  #fetch the id from the params
  id = params[:foo]

  results = settings.db.execute "SELECT * FROM person WHERE id=#{id};"

  #get the person result out of the results and assign to variable which
  #can be used in our show.erb view
  @person = results[0]

  erb :show, layout: :main
end
