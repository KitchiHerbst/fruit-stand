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
        user = User.create(user_params)
        render json: user
        # user.errors.size
    end

    # def edit
    #     user = User.find(params[:id])
        
    # end

    def update
        user = User.find(params[:id])
        user.update(name: params[:name])
        render json: user
    end


    def user_params 
        params.require(:user).permit(:name)
    end
end
