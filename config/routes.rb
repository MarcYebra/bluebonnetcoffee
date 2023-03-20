Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/home' , to: 'static_pages#index'
end
