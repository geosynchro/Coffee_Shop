class CartsController < ApplicationController

    
    def index
        carts = Cart.all
        render json: cart, status: :ok
    end
    
    def create
        cart_item = Cart.create!(cart_params)
        render json: cart_item, status: :created
    end

    def destroy
        cart = Cart.find(params[:id])
        render json: cart.destroy, status: :ok
    end

    


    private

    def cart_params
        params.permit(:user_id, :item_id)
    end
end
