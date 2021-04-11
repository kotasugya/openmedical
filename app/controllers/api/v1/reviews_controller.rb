module Api
  module V1
    class ReviewsController < ApplicationController
      def index
        @company = Company.find(params[:company_id])
        @reviews = @company.reviews
        render json: { reviews: @reviews }
      end

      def create
        @review = Review.new(review_params)
        if @review.save
          render json: { status: :created, review: @review }
        else
          render json: { status: 500, errors: @review.errors.full_messages }
        end
      end

      def show
        @review = Review.find(params[:id])
        render json: { review: @review }
      end

      def update
      end

      private

      def review_params
        params.require(:review).permit(:review_content, :user_id, :company_id, :review_category_id)
      end
    end
  end
end
