FactoryBot.define do
  factory :review do
    user_id { user.id }
    company_id { company.id }
    review_category_id { review_category.id }
    enrollment_id { enrollment.id }
    review_content { "テストです" }

    user
    company
    enrollment
    review_category
  end
end
