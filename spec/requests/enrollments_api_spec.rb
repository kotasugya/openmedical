require 'rails_helper'

RSpec.describe "EnrollmentsApi", type: :request do
  describe "GET /enrollments_api" do
    # 特定のユーザーの、ある企業での在籍情報を取得出来るか
    it 'get the user information' do
      user = build(:user, id: 1)
      company = build(:company, id: 1)
      enrollment = create(:enrollment, id: 1)
      get "http://localhost3001/api/v1/companies/#{company.id}/enrollments/#{enrollment.id}"
      json = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたか確認する。
      expect(response.status).to eq(200)

      # 要求した特定のユーザーの特定の企業での在籍情報を取得出来たか確認する
      p json
      expect(json['enrollment']['id']).to eq(enrollment.id)
    end
  end
end
