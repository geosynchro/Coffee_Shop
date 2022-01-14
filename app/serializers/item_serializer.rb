class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :price
  has_one :cart
  has_one :item_category
end
