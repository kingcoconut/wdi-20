class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = Post.create(title: params[:title], content: params[:content])
    render json: post
  end
end
