# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  organizer_id :integer          not null
#  date         :datetime         not null
#  time         :datetime         not null
#  location_id  :integer          not null
#  description  :text             not null
#  price        :float            not null
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
    validates :name, uniqueness: { scope: :organizer_id, message: "Organizer can't use the same event name twice"}
    validates :name, :organizer_id, :description, :price, :capacity, :location_id, :date, :time, presence:true
    
    belongs_to :organizer, class_name: :User, foreign_key: :organizer_id
    has_many :attendees, class_name: :Registration, foreign_key: "event_id"
   

    def self.find_by_id(id)
        @event = Event.find(id)
        return nil unless @event 
        @event
    end

    def num_attendees
        self.attendees.count
    end

    def tickets_left
        available = self.capacity - self.num_attendees
        if available > 0  
            return available
        else 
            :sold_out
        end
        
    end

    def sold_out?
        self.tickets_left == :sold_out
    end
end
