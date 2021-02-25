class Evaluation < ApplicationRecord
  belongs_to :user
  belongs_to :company
  belongs_to :evaluation_category
end
