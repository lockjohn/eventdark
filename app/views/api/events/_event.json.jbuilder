json.extract! event, :id, :name, :description, :date, :time, :price, :capacity

if event.categories
  json.categories do
    json.array! event.categories.map  do |category|
      json.extract! category, :name
    end
  end
end