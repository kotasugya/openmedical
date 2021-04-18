class Company < ApplicationRecord
  has_many :company_users
  has_many :users, through: :company_users
  has_many :reviews
  has_many :enrollments
  has_many :evaluations
  validates :name, presence: true, uniqueness: true
  accepts_nested_attributes_for :company_users

  def self.search(search)
    if search
      Company.where(['name LIKE ?', "%#{search}%"])
    else
      Company.all
    end
  end
end
