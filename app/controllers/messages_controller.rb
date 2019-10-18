class MessagesController < ApplicationController
  protect_from_forgery
  def index
    begin
      p = JSON.parse(request.body.read, { symbolize_names: true })
      if p[:name] && p[:body]
        message = Message.new
        message.name = p[:name]
        message.body = p[:body]
        message.save
      end
    rescue StandardError
    end
    messages = Message.all
    render json: messages
  end
end
