Rails.application.routes.draw do
  resources :costumes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"
end
