# require 'rails_helper'

# RSpec.describe "ReviewApi", type: :request do
#   describe "GET /reviews_api" do
#     # ユーザー詳細情報を取得出来るか
#     it 'get review_informations' do
#       user = build(:user)
#       company = build(:company)
#       enrollment = build(:enrollment)
#       review_category = build(:review_category)
#       enrollment = build(:enrollment)
#       create_list(:review, 10, review_content: "review_test")
#       get "http://localhost3001/api/v1/companies/#{company.id}/review_categories/#{review_category.id}/reviews"
#       json = JSON.parse(response.body)

#       # リクエスト成功を表す200が返ってきたか確認する。
#       expect(response.status).to eq(200)

#       # 要求した特定のユーザーを取得出来たか確認する
#       p json
#       expect(json['review'].length).to eq(10)
#     end
#   end
# end
