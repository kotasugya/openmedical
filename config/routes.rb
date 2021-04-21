Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:update, :show, :create, :destroy]
      post '/login', to: 'sessions#login'
      # get '/logged_in', to: 'sessions#logged_in?'
      delete '/logout', to: 'sessions#logout'
      resources :companies, only: [:show, :create, :index, :destroym] do
        resources :review_categories do
          resources :reviews
        end
        collection do
          get :search
        end
      end
      resources :enrollments, only: [:create, :update, :show, :destroy]
    end
  end
end
