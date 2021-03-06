class CommentsController < ApplicationController
    skip_before_action :authorize
    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end



    private

    def comment_params
        params.permit(:user_id, :blog_id, :comment_text)
    end

end
