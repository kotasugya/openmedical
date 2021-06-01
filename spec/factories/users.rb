FactoryBot.define do
  factory :user do
    name {"test_user"}
    email {"test@test.com"}
    birthday {"1995-01-16"}
    salary {500}
    password {"9740zero"}
  end
end
