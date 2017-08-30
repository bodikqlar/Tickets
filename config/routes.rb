Rails.application.routes.draw do
  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      resources :users, except: %i(edit new)
      resources :tickets, except: %i(edit new)
      resources :ticket_statuses, except: %i(edit new)
      resources :closed_tickets, only: %i(index) do
        get :export_pdf, on: :collection
      end
      resources :roles, only: %i(index update)
      resources :ticket_urgencies, only: %i(index)
    end
  end
end
