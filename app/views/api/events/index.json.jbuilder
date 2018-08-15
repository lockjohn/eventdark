@events.each do |event|
    json.set! event.id do
        json.partial! "./api/events/event", event: event
        if event.photo.attached? 
            json.photoUrl url_for(event.photo)
        end
        json.organizer event.organizer.username 
        json.organizer_description event.organizer.organizer_description
    end
end