Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/home' , to: 'static_pages#index'
end
