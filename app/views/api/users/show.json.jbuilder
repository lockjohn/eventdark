#payload

json.user do
    json.partial! "./api/users/user", user: @user
end

json.tickets do
        @user.tickets.each do |ticket|
            json.set! ticket.id do #object of event names for which user registered 
                json.extract! ticket, :id, :name, :description, :date, :time, :price, :capacity
                json.photoUrl url_for(ticket.photo)
            end
        end
        
end

