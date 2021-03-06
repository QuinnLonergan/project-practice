class CostumesController < ApplicationController
    wrap_parameters format:[]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        costumes = Costume.all
        render json: costumes, status: :ok
    end

    def show 
        costume = find_costume
        render json: costume, status: :ok
    end

    def create 
        costume = Costume.create!(costume_params)
        render json: costume, status: :created
    end

    def update
        costume = find_costume
        costume.update!(costume_params)
        render json: costume, status: :accepted
    end

    def destroy
        costume = find_costume
        costume.destroy
        head :costume
    end

    private 

    def find_costume
        Costume.find(params[:id])
    end

    def costume_params
        params.permit(:person, :img_url, :name, :vote)
    end

    def render_not_found_response(invalid)
        render json: {error: "costume not found" }, status: :not_found
    end

end
