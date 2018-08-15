class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render "api/events/index"
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
