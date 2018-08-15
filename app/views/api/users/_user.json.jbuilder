json.id user.id
json.username user.username
json.userImgUrl url_for(user.avatar)
json.totalTickets user.registrations.count