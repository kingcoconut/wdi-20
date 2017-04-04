class SecretsController < ApplicationController
  def app
  end

  def index
    render json: Secret.all
  end

  def create
    new_secret = Secret.create(content: params[:content])
    render json: new_secret
  end
end
