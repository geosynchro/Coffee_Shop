class ItemsController < ApplicationController
    skip_before_action :authorize
    
    def index  
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, include: [:reviews], status: :ok
    end


end
