json.id user.id
json.username user.username
json.userImgUrl url_for(user.avatar)
json.totalTickets user.registrations.count
if user.events
        json.events user.events.pluck(:id)
end