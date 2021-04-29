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
    end
  end
end
