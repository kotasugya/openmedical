class Company < ApplicationRecord
  has_many :company_users
  has_mamy :users, through: :company_users
  has_mamy :reviews
  validates :name, presence: true, uniqueness: true
  accepts_nested_attributes_for :company_users

end
