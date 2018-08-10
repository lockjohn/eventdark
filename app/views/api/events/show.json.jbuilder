
    json.partial! "./api/events/event", event: @event
    json.organizer @event.organizer.username
    json.organizer_description @event.organizer.organizer_description
