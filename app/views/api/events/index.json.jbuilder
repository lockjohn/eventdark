@events.each do |event|
    json.set! event.id do
        json.partial! "./api/events/event", event: event
        json.organizer User.find(event.organizer_id).username 
        json.organizer_description User.find(event.organizer_id).organizer_description
    end
end