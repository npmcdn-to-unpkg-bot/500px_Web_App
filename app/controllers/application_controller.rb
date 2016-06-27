class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil;
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_current_user!
    unless(current_user)
      render json: {error: "You are not logged in."}, status: 400
    end
  end
end
