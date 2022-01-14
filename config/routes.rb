Rails.application.routes.draw do
  resources :reviews
  resources :carts
  resources :items, only: [:index]
  resources :comments
  resources :blogs
  resources :item_categories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  
#items routes
  get '/items', to: 'items#index'

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }


end
