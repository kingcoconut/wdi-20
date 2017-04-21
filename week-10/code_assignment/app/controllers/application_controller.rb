class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def rate_limit
    ip = request.remote_ip

    RequestCount.where(ip: ip).where("created_at < ?", Time.now - Rails.application.config.rate_limit_seconds.seconds).destroy_all

    if request_count = RequestCount.find_by_ip(ip)
      if request_count.count >= Rails.application.config.rate_limit_count
        time_til_expiry = Rails.application.config.rate_limit_seconds - (Time.now - request_count.created_at).ceil
        render plain: "Rate limit exceeded. Expired in #{time_til_expiry} seconds"
     else
       request_count.count += 1
       request_count.save
     end
    else
      RequestCount.create(ip: ip, count: 1)
    end
  end
end
