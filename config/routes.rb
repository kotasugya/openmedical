Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:update, :show, :create, :destroy]
      post '/login', to: 'sessions#login'
      get '/logged_in', to: 'sessions#logged_in?'
      delete '/logout', to: 'sessions#logout'
      resources :companies, only: [:show, :index, :destroy] do
        resources :review_categories, only: [:show] do
          resources :reviews, only: [:show, :index, :update, :destroy]
        end
        collection do
          get :search
        end
      end
      get '/review_categories', to: 'review_categories#index'
      post 'company/reviews', to: 'reviews#create'
      resources :enrollments, only: [:create, :update, :show, :destroy]
    end
  end
end
