module Api
  module V1
    class SessionsController < ApplicationController
      # before_action :current_user

      def login
        @user = User.find_by(email: session_params[:email])
        if @user && @user.authenticate(session_params[:password])
          login!
          render json: { logged_in: true, user: @user, success: 'ログインしました' }
        else
          render json: { status: 400, errors: ['ログイン出来ませんでした', 'メールアドレス又はパスワードが間違っています。'] }
        end
      end

      def logout
        reset_session
        render json: { status: 200, logged_out: true }
      end

      def logged_in?
        if @current_user
          render json: { logged_in: true, user: current_user }
          puts "hoge"
          # puts @current_user
        else
          render json: { logged_in: false, message: 'ユーザーは存在しません' }
        end
      end

      private

      def session_params
        params.require(:user).permit(:name, :email, :password)
      end
    end
  end
end
