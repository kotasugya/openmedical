Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :companies
      resources :reviews do
        resources :enrollments
        resources :evaluations
      end
    end
  end
end