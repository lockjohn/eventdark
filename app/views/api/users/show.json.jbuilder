json.partial! "./api/users/user", user: @user
json.tickets @user.registrations.count #total ticket count over all events
json.registered @user.tickets.map {|tix| tix.name }#array of event names for which user registered 