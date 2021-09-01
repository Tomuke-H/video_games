class GamesController < ApplicationController

    def app
        render component: "App"
    end

    def index
        @games = Game.all 
        render json: @games
    end

    def create
        @game = Game.new(games_params)
        if(@game.save)
            render json: @game
        else
            render json: {error: game.error}, status: :unprocessable_entity
        end
    end

    def update
        @game = Game.find(params[:id])
        if(@game.update(games_params))
            render json: @game
        end
    end

    def destroy
        @game = Game.find(params[:id])
        render json: @game.destroy
    end

    private

    def games_params
        params.require(:game).permit(:name, :genre, :platform)
    end

end
