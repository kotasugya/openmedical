class User < ApplicationRecord
  has_many :companies
  has_many :reviews
  validates :name, presence: true
  validates :email, presence: true, length: { maximum: 255 },
            uniqueness: true
  has_secure_password
  validates :password, presence: true, length: {minimum: 6}

end
