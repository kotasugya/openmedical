class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :reviews, dependent: :destroy
end
