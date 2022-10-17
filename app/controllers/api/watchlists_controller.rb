class Api::WatchlistsController < ApplicationController

    def index
        watchlists = Watchlist.all
        render json: watchlists
    end

    def show
        watchlist = Watchlist.find(params[:id])
        render json: watchlist
    end

    def create
        movie = Movie.find(params[:movie_id])
        watchlist = Watchlist.find_by(movie: movie, user: @current_user)
        if watchlist
            watchlist.update!(watchlist_params)
        else
            watchlist = @current_user.watchlists.create!(movie: movie, rating: params[:rating], comment: params[:comment])
        end
        render json: watchlist, status: :created

    end

    private

    def watchlist_params
        params.permit(:user_id, :movie_id, :rating, :comment)
    end
end
