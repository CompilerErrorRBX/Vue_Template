Rails.application.routes.draw do
  get 'home/home'

  get '/home', to: 'home#index'
end
