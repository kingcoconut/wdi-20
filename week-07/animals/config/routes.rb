Rails.application.routes.draw do
  root "pages#home"
  get "/animals/:id", to: "animals#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
