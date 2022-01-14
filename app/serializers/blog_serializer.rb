class BlogSerializer < ActiveModel::Serializer
  attributes :id, :blog_text, :user_id
  has_one :user
  has_many :comments
end
