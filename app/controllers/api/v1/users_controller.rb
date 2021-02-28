module Api
  module V1
    class UsersController < ApplicationController
      def create
        @user = User.new(user_params)
        if @user.save
          render json: {user: @user}
        else
          render json: {status: 500}
        end
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