class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :price
  has_many :carts
  has_one :item_category
  has_many :reviews
end
