class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: ingredients
    end

    def new
        ingredient = Ingredient.new()
        render json: ingredient
    end

    def create
        ingredient = Ingredient.create(ingredient_params)
        # byebug
        ingredient.save
        render json: ingredient
    end

    def ingredient_params
        params.require(:ingredient).permit(:name, :basket_id)
    end



end
