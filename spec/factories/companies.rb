FactoryBot.define do
  factory :company do
    sequence(:name) { |n| "test_copmany#{n}" }
  end
end
