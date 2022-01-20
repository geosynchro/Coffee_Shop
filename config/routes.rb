Rails.application.routes.draw do
  resources :reviews
  resources :carts, only: [:index, :create, :destroy]
  resources :items, only: [:index, :show]
  resources :comments
  resources :blogs
  resources :item_categories
  resources :users 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  
#items routes
  get '/items', to: 'items#index'

#Cart Item routes
  get '/cart', to: 'carts#index'
  post '/cart', to: 'carts#create'
  get '/usercart', to: 'carts#user_items'


#Login/logout/sessions/create user
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post '/signup', to: 'users#create'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }


end
