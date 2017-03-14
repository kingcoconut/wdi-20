class FoodItemsController < ApplicationController
  def new
    @food_item = FoodItem.new
    @food_category_id = params[:food_category_id]
  end

  def create
    @food_item = FoodItem.new(clean_params)
    if @food_item.save
      redirect_to food_category_path(@food_item.food_category_id)
    else
      render :new
    end
  end

  private

  def clean_params
    params.require(:food_item).permit(:name, :image_src, :food_category_id)
  end
end
