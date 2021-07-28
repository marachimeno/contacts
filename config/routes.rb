Rails.application.routes.draw do
  root 'contacts#index'

  namespace :api do
    namespace :v1 do
      resources :contacts, param: :slug
    end
  end

  get '*path', to: 'pages#index', via: :all
end
