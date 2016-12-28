Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      resources :users, except: %i(edit new)
      resources :tickets, except: %i(edit new)
    end
  end
end
