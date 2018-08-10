class Event < ApplicationRecord
    validates :name, uniqueness: { scope: :organizer_id, message: "Organizer can't use the same event name twice"}
    validates :name, :organizer_id, :description, :price, :capacity, :location_id, :date, :time, presence:true
    
    belongs_to :organizer, class_name: :User, foreign_key: :organizer_id
end
