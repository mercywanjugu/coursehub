class Api::MoviesController < ApplicationController
   before_action :check_admin, except: [:index, :show, :sort_by_name]
    skip_before_action :authorize, only: [:index, :show, :sort_by_name]
    before_action :find_movie, except: [:index, :create]

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        #movie = find_movie
        render json: @movie
    end

    def create
        movie = @current_user.created_movies.create!(movie_params)
        render json: movie, status: :created
    end

    def update
        #movie = find_movie
        @movie&.update!(movie_params)
        render json: @movie, status: :created
        end

    def destroy
        #movie = find_movie
        @movie&.destroy
        render json: {}, status: :no_content
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :image_url, :genre, :plot, :total_time)
    end

    def find_movie
        @movie = Movie.find_by!(id: params[:id])
    end


  def check_admin
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user.admin?
  end
end
