require 'rails_helper'

RSpec.describe "UsersApi", type: :request do
  describe 'GET /users_api' do
    # ユーザー詳細情報を取得出来るか
    it 'get the user information' do
      user = create(:user, id: 1)
      get "http://localhost3001/api/v1/users/#{user.id}"
      json = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたか確認する。
      expect(response.status).to eq(200)

      # 要求した特定のユーザーを取得出来たか確認する
      p json
      expect(json['user']['id']).to eq(user.id)
    end
  end
end
