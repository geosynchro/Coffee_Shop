class CartSerializer < ActiveModel::Serializer
  attributes :id, :item, :user
  has_one :user
  has_one :item
end
