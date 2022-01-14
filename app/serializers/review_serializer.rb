class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_text
  has_one :user
  has_one :item
end
