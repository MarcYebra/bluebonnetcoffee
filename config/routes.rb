Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/about' , to: 'static_pages#index'
  get '/coffee', to: 'static_pages#index'
  get '/store', to: 'static_pages#index'
  get '/locations', to: 'static_pages#index'
  get '/contact', to: 'static_pages#index'
  get '/menu', to: 'static_pages#index'
  get '/questions', to: 'static_pages#index'

end
