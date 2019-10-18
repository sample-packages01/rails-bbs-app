Rails.application.routes.draw do
  root 'root#index'
  match 'messages', to: 'messages#index', via: %i[get post]
end
