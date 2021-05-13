class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :reviews, dependent: :destroy

  validates :employment_status, presence: true
  validates :working_now_or_not, presence: true
  validates :join_year, presence: true
  validates :occupation, presence: true
end
