class Item < ApplicationRecord
  belongs_to :item_category
  has_many :reviews
  has_many :carts
end
