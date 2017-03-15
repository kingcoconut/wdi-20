Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "countries#index"
  get "/countries", to: "countries#show"

  resources :cities, only: [:show]
  resources :activities, only: [:show]
end
