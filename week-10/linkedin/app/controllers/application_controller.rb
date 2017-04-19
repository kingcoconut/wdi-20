class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from ActiveRecord::RecordNotFound do
    render file: "public/404.html", status: :not_found, layout: false
  end
end
