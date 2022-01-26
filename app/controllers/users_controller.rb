class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create, :show]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: ['carts', 'reviews', 'comments']
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :accepted
    end

    def destroy
      user = User.find(params[:id])
      render json: user.destroy, status: :ok
    end

      private

      def user_params
        params.permit(:username, :password, :email_address)
      end

end
