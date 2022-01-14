class BlogSerializer < ActiveModel::Serializer
  attributes :id, :blog_text, :user_id
end
