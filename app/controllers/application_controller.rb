class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :log_in, :current_user

  def log_in
    session[:user_id] = @user.id
  end

  def current_user
    @current_user ||= User.find_by(id:session[user_id])
  end
end
