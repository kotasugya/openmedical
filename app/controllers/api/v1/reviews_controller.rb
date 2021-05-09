module Api
  module V1
    class ReviewsController < ApplicationController
      def index
        @company = Company.find(params[:company_id])
        @review_category_id = ReviewCategory.find(params[:review_category_id])
        @reviews = (@company && @review_category_id).reviews
        render json: { reviews: @reviews }
      end

      def create
        @review = Review.new(review_params)
        if @review.save
          render json: { status: :created, review: @review }
        else
          render json: { errors: @review.errors.full_messages }, status: :internal_server_error
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
        params.require(:review).
          permit(:user_id, :review_content, :company_id, :review_category_id)
        # .merge(user_id: 1)
      end
    end
  end
end
