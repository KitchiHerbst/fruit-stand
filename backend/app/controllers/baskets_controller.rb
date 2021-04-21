class BasketsController < ApplicationController

    def index
        baskets = Basket.all 
        render json: baskets
    end
  
end
