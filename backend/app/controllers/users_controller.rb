class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def new
        user = User.create
        render json: user
    end

    def show
        user = User.find()
    end

    def create
        user = User.create(name: params[:name])
        render json: user
    end
end
