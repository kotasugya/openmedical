class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_one :review

end
