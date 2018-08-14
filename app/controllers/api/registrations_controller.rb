class Api::RegistrationsController < ApplicationController

    def create #need users id from current_user and events id from params
        @registration = Registration.new(event_id: params[:event_id]) #events id
        @user = current_user
        @registration.user_id = @user.id
        event = Event.find(params[:event_id])
        unless event.sold_out?
            @registration.save!
            render "api/users/show" #send this info back to update user show page with new registration
        else
            render json: ["The event is sold out, we'll contact you if space becomes available"]
        end
    end

end