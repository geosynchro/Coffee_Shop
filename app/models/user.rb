class User < ApplicationRecord
    has_secure_password
    has_one :cart
    has_many :items, through: :cart
    has_many :comments
    has_many :blogs
    has_many :reviews

    validates :username,  :email_address, presence: true
    validates :email_address, :username, uniqueness: true
    validates :email_address, email: true
end
