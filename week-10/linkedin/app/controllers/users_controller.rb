class UsersController < ApplicationController
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

  private
  def clean_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
