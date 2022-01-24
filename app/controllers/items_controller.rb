class ItemsController < ApplicationController
    def index  
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, include: [:reviews], status: :ok
    end


end
