class User < ApplicationRecord
    has_secure_password
    has_many :carts, dependent: :destroy
    has_many :items, through: :carts
    has_many :comments, dependent: :destroy
    has_many :blogs, dependent: :destroy
    has_many :reviews, dependent: :destroy

    validates :username,  :email_address, presence: true
    validates :email_address, :username, uniqueness: true
    validates :email_address, email: true
end
