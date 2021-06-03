require 'rails_helper'

RSpec.describe Review, type: :model do
  # 正常にテストデータが登録された事
  it "has a valid factory" do
    expect(build(:review)).to be_valid
  end

  # 雇用形態が無ければ無効
  it "is invalid without a review_content" do
    review = build(:review, review_content: nil)
    review.valid?
    expect(review.errors[:review_content]).to include("can't be blank")
  end
end
