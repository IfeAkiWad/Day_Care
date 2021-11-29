Rails.application.routes.draw do
  get '/signup', to: 'admins#new'
  post '/signup', to: 'admins#create'
  
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  resources :admins
  resources :toddlers

  resources :daycares, only: [:index, :show] do
    resources :toddlers
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
