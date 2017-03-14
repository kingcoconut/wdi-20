class StringsController < ApplicationController
  def reverse
    @output_string = params[:string].reverse
    render :reverse_form
  end

  def reverse_form
  end
end
