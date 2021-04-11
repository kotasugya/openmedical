class Company < ApplicationRecord
  has_many :company_users
  has_many :users, through: :company_users
  has_many :reviews
  has_many :enrollments
  has_many :evaluations
  validates :name, presence: true, uniqueness: true
  accepts_nested_attributes_for :company_users
end
