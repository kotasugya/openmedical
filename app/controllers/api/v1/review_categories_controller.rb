module Api
  module V1
    class ReviewCategoriesController < ApplicationController
      def index
        @review_categories = ReviewCategory.all
        render json: { review_categories: @review_categories }
      end

      def show
        @review_category = ReviewCategory.find(params[:id])
        render json: { review_category: @review_category }
      end

      def create
        @review_category = ReviewCategory.new(review_category_params)
        if @review_category.save
          render json: { status: :created, review_category: @review_category }
        else
          render json: { status: 500, errors: @review_category.errors.full_messages }
        end
      end

      private
        def review_category_params
          params.require(:reviewCategory).permit(:name)
        end
    end
  end
end
