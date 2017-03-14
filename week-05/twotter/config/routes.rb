Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "tweets#index"
  resources :tweets
  get "/reverse", to: "strings#reverse_form"
  post "/reverse", to: "strings#reverse"
end
