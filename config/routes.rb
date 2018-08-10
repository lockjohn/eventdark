Rails.application.routes.draw do
  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, except: [:destroy, :new, :edit]
  end
end
