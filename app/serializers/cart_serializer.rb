class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :item
end
