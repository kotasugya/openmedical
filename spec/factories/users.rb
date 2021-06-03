FactoryBot.define do
  factory :user do
    sequence(:name) {|n| "test_user#{n}" }
    sequence(:email) { |n| "test#{n}@test.com" }
    birthday { "1995-01-16" }
    salary { 500 }
    password { "9740zero" }
  end
end
