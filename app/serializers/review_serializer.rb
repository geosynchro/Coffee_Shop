class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_text, :rating, :user
  has_one :user
  has_one :item
end
