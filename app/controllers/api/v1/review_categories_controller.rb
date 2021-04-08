module Api
  module V1
    class ReviewCategoriesController < ApplicationController
      def index
        @review_categories = ReviewCategory.all
        render json: {review_categories: @review_categories}
      end

      def show
      end

    end
  end
end