json.extract! event, :id, :name, :description, :date, :time, :price, :capacity

if event.categories
    arr = [] 
    event.categories.each do |category|
        arr << category.category
    end
    json.categories arr
end