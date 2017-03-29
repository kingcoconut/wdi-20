Rails.application.routes.draw do
  root "characters#index"
  get "/generator", to: "characters#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
