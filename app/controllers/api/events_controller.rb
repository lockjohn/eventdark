class Api::EventsController < ApplicationController

    def index
        cat_name = params[:category]
        if cat_name
         
            if cat = Category.find_by(category: cat_name)
                @events = cat.events
                render "api/events/index"
            else
               
                letter = params[:category][0].upcase
                @events = Event.where("name LIKE :prefix", prefix: "#{letter}%")
                if @events.length > 0 
                     render "api/events/index" 
                else 
                    render json: ["No results for that search"], status: 404
                end
            end
        else
            @events = Event.all
            render "api/events/index"
        end
    end

    def show
        @event = Event.find_by_id(params[:id])
        if @event 
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def create
        @event = Event.new(event_params)
        @event.organizer_id = current_user.id
        @event.location_id = current_user.id
        if @event.save
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])
    
        if  @event.update(event_params)
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    private

    def event_params
        params.require(:event).permit(:photo,
            :name, 
            :organizer_id, 
            :description, 
            :price, :capacity, 
            :date, :time,
            :location_id)
    end

end
