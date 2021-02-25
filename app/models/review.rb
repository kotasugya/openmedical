class Review < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :review_category
end
