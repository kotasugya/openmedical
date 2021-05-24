module Api
  module V1
    class UsersController < ApplicationController
      # before_action :logged_in_user, only: [:show, :update]

      def create
        @user = User.new(user_params)
        if @user.save
          render json: { status: :created, user: @user }
        else
          render json: { status: 500, errors: @user.errors.full_messages }
        end
      end

      def show
        @user = User.find(params[:id])
        render json: { user: @user }
      end

      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          render json: { user: @user }
        else
          render json: { status: 500, errors: @user.errors.full_messages }
        end
      end

      private

      def user_params
        params.require(:user).
          permit(:name,
                 :email,
                 :password,
                 :password_confirmation,
                 :birthday,
                 :salary)
      end
    end
  end
end
