Rails.application.routes.draw do
  get 'baskets/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, :fruits, :bugs, :baskets, :ingredients
end
