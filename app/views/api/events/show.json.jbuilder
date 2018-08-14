
    json.partial! "./api/events/event", event: @event
    json.available @event.tickets_left
    json.organizer @event.organizer.username
    json.organizer_description @event.organizer.organizer_description
