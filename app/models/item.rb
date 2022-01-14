class Item < ApplicationRecord
  belongs_to :item_category
  has_many :reviews, through :users
  has_many :carts
end
