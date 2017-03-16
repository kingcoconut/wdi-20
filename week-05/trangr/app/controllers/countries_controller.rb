class CountriesController < ApplicationController
  def index
    @user = User.find_by_id(session[:user_id])
    @countries = Country.all
  end

  def show
    @country = Country.find(params[:country_id])
  end
end
