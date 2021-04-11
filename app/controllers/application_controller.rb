class ApplicationController < ActionController::Base
  include ActionController::Cookies
  skip_before_action :verify_authenticity_token
  helper_method :login!, :current_user, :logged_in?

  def login!(user)
    session[:user_id] = user.id
  end

  def current_user
    if session[:user_id]
      #   # @current_user ||= User.find(session[:user_id])
      puts "test"
    end
    @current_user = "test"
  end

  def logged_in?
    !current_user.nil?
  end
  # def logged_in?
  #   unless search_session_by_user_id
  #     render json: { logged_in: false, message: 'ログインして下さい。'},
  #     status: :unauthorized
  #   end
  # end
end
