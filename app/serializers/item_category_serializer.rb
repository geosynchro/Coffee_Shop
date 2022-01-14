class ItemCategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name
  has_many :items
end
