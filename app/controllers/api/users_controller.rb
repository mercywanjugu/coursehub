class Api::UsersController < ApplicationController
    before_action :check_admin, except: [:update, :create]
    skip_before_action :authorize, only: [:update, :create]

    # def index
    #     users = User.all
    #     render json: users
    # end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :ok
    end

    def update
        @current_user.update!(params.permit(:email, :username))
        render json: @current_user
    end

    # def sort_by_name
    #     render json: User.sort_movie
    # end

    def destroy
        @current_user.destroy
        head :no_content
      end



    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :username, :role)
    end

    def check_admin
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user.admin?
      end

end
