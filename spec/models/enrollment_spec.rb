require 'rails_helper'

RSpec.describe Enrollment, type: :model do
  # 正常にテストデータが登録された事
  it "has a valid factory" do
    expect(FactoryBot.build(:enrollment)).to be_valid
  end

  # 雇用形態が無ければ無効
  it "is invalid without a employment_status" do
    enrollment = FactoryBot.build(:enrollment, employment_status: nil)
    enrollment.valid?
    expect(enrollment.errors[:name]).to include("can't be blank")
  end
end
