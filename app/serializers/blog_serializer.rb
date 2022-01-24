class BlogSerializer < ActiveModel::Serializer
  attributes :id, :blog_text, :user, :title
  has_one :user
  has_many :comments
end
