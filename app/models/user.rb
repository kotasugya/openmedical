class User < ApplicationRecord
  has_many :company_users
  has_many :companies, through: :company_users
  has_many :reviews
  has_many :enrollments
  has_many :evaluations
  validates :name, presence: true
  validates :email, presence: true, length: { maximum: 255 },
            uniqueness: true
  has_secure_password
  validates :password, presence: true, length: {minimum: 6}

end
