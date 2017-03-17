class ActivitiesController < ApplicationController
  def show
    @activity = Activity.find(params[:id])
  end

  def destroy
    city = City.find(params[:city_id])
    activity = Activity.find(params[:activity_id])
    city.activities.delete activity
    redirect_to city_path city
  end
end
