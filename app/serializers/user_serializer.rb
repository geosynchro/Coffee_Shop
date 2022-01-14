class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :is_admin
  has_one :cart
  has_many :items, through: :cart
  has_many :comments
  has_many :reviews
  has_many :blogs
end
