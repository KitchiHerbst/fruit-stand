class BasketsController < ApplicationController

    def index
        baskets = Basket.all 
        render json: baskets
    end

    def create
        basket = Basket.create(basket_params)
        render json: basket
    end

    def update
        basket = Basket.find_by(id: params[:id])
        basket.update(score: params[:score])
        render json: basket
    end

    def basket_params
        params.require(:basket).permit(:user_id)
    end
  
end
