class Event < ApplicationRecord
    validates :name, uniqueness: { scope: :organizer_id, message: "Organizer can't use the same event name twice"}
    validates :name, :organizer_id, :description, :price, :capacity, :location_id, :date, :time, presence:true
    
end
