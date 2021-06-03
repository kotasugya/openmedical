require 'rails_helper'

RSpec.describe User, type: :model do
  # 正常にテストデータが登録された事
  it "has a valid factory" do
    expect(build(:user)).to be_valid
  end

  # 名前が無ければ無効
  it "is invalid without a name" do
    user = build(:user, name: nil)
    user.valid?
    expect(user.errors[:name]).to include("can't be blank")
  end

  # メールアドレスがなければ無効
  it "is invalid without an email" do
    user = build(:user, email: nil)
    user.valid?
    expect(user.errors[:email]).to include("can't be blank")
  end

  # 重複したメールアドレスなら無効
  it "is invalid with a duplicate email address" do
    create(:user, email: "test@test.com")
    user = build(:user, email: "test@test.com")
    user.valid?
    expect(user.errors[:email]).to include("has already been taken")
  end
end
