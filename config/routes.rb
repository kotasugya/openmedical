Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:update, :show, :create, :destroy]
      post '/login', to: 'sessions#login'
      resources :companies, only: [:create, :show, :index, :destroy] do
        resources :review_categories, only: [:create, :show] do
          resources :reviews, only: [:show, :index, :update, :destroy]
        end
        collection do
          get :search
        end
        resources :enrollments, only: [:create, :update, :show, :destroy]
      end
      get '/review_categories', to: 'review_categories#index'
      post '/review_categories', to: 'review_categories#create'
      post 'company/reviews', to: 'reviews#create'
    end
  end
end
