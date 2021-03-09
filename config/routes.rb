  Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post '/login', to: 'sessions#login'
      get '/logged_in', to: 'sessions#loged_in?'
      delete '/logout', to: 'sessions#logout'
      resources :companies
      resources :reviews do
        resources :enrollments
        resources :evaluations
      end
    end
  end
end