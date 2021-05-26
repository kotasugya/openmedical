module Api
  module V1
    class EnrollmentsController < ApplicationController
      def index
      end

      def create
        @enrollment = Enrollment.new(enrollment_params)
        if @enrollment.save
          render json: { status: :created, enrollment: @enrollment }
        else
          render json: { errors: @enrollment.errors.full_messages }, status: :internal_server_error
        end
      end

      def show
        @enrollment = Enrollment.find(params[:id])
        render json: { enrollment: @enrollment }
      end

      def update
      end

      def destroy
      end

      private

      def enrollment_params
        params.require(:enrollment).permit(
          :user_id,
          :company_id,
          :employment_status,
          :working_now_or_not,
          :join_year,
          :leave_year,
          :occupation
        )
      end
    end
  end
end
