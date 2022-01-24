class BlogsController < ApplicationController
    
    def index  
        blogs = Blog.all
        render json: blogs, status: :ok
    end

    def show
        blog = Blog.find(params[:id])
        render json: blog, include: ['comments', 'comments.user'], status: :ok
    end
end
