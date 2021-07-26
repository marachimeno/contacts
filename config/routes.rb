Rails.application.routes.draw do
  get 'pages/index'
  root 'contacts#index'
  resources :contacts

  namespace :api do
    namespace :v1 do
      resources :contacts, param: :slug
    end
  end

  get '*path', to: 'pages#index', via: :all
end
