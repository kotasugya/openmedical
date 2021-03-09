module Api
  module V1
    class UsersController < ApplicationController
      def create
        @user = User.new(user_params)
        if @user.save
          login!
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
    end
  end
end