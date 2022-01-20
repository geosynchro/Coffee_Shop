class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :is_admin
  has_many :carts
  has_many :items, through: :carts
  has_many :comments
  has_many :reviews
  has_many :blogs
end
