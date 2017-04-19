class UsersController < ApplicationController
  def create
    @user = User.new(clean_params)    
    if @user.save
      @user.send_welcome_email
      render "show"
    else
      render "new"
    end
  end

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(clean_params)
      render "show"
    else
      render "edit"
    end
  end

  def destroy
    User.find(params[:id]).destroy
    redirect_to root_path
  end

  private
  def clean_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
