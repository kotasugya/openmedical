class Company < ApplicationRecord
  has_mamy :comments
  validates :name, presence: true, uniqueness: true
end
