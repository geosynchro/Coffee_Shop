class CartsController < ApplicationController

    
    def index
        carts = Cart.all
        render json: carts, status: :ok
    end
    
    def create
        cart_item = Cart.create!(cart_params)
        render json: cart_item, status: :created
    end

    # def user_items
    #     items = Cart.find_by()
    # end
    


    private

    def cart_params
        params.permit(:user_id, :item_id)
    end
end
