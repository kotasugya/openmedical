module Api
  module V1
    class UsersController < ApplicationController
      # before_action :logged_in_user, only: [:show, :update]

      def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          render json: { status: :created, user: @user }
        else
          render json: { status: 500, errors:@user.errors.full_messages }
        end
      end

      def show
        @user = User.find(params[:id])
        render json: {user: @user}
      end

      def update
      end


      private
        def user_params
          params.require(:user).permit(:name, :email, :password, :password_confirmation)
        end

      # beforeアクション
        def logged_in_user
          puts @current_user
          unless logged_in?
            render json: { logged_in: false, message: 'ログインして下さい。'},
            status: :unauthorized
          end
        end
    end
  end
end