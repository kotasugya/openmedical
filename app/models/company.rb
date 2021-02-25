class Company < ApplicationRecord
  has_mamy :users
  has_mamy :reviews
  validates :name, presence: true, uniqueness: true
end
