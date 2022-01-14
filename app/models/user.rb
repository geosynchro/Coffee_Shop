class User < ApplicationRecord
    has_secure_password
    has_one :cart
    has_many :items, through: :cart
    has_many :comments
    has_many :blogs
end
