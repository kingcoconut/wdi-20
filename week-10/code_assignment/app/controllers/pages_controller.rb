class PagesController < ApplicationController
  before_action :rate_limit, only: [:index]

  def index
    render plain: "OK"
  end
end
