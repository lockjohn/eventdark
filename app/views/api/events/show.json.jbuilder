json.events do 
    json.partial! "./api/events/event", event: @event
    json.organizer @user.username
    json.organizer_description @user.organizer_description
end