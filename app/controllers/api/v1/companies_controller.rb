module Api
  module V1
    class CompaniesController < ApplicationController
      def index
        @companies = Company.all
        render json: { companies: @companies }
      end

      def create
        @company = Company.new(company_params)
        if @company.save
          render json: { status: :created, company: @company }
        else
          render json: { status: 500, errors: @company.errors.full_messages }
        end
      end

      def show
        @company = Company.find(params[:id])
        render json: { company: @company }
      end

      def update
      end

      def destroy
      end

      def search
        @companies = Company.where("name LIKE ?", "%#{params[:search]}%")
        render json: {companies: @companies}
      end

      private

      def company_params
        params.require(:company).permit(:name)
      end
    end
  end
end
