class Item < ApplicationRecord
  belongs_to :item_category
  has_many :reviews, dependent: :destroy
  has_many :carts, dependent: :destroy
end
