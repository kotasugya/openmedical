class ApplicationController < ActionController::Base
  include ActionController::Cookies
  skip_before_action :verify_authenticity_token
  helper_method :login!, :current_user

  def login!
    session[:user_id] = @user.id
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
      p @current_user
    else
      @current_user = session
      p @current_user
    end
  end
end
