json.partial! "./api/users/user", user: @user
json.user_img_url url_for(@user.avatar)
json.tickets @user.registrations.count #total ticket count over all events
json.registered @user.tickets #array of event names for which user registered 
