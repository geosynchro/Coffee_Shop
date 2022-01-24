class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :user
  has_one :user
  has_one :blog
end
