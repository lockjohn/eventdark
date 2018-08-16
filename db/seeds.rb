# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    # Users
    User.destroy_all
    
    dolores = User.create!(username: 'Dolores', password: "123456")
    bernard = User.create!(username: 'Bernard',  password: "123456")
    maeve = User.create!(username: "Maeve", password: "123456")

    #    = File.open('/app/assets/images/')
    # file formate for local db seed:
    # file1 = File.open('./app/assets/images/dolores.jpg')
    # file2 = File.open('./app/assets/images/bernard.jpg')
    # file3 = File.open('./app/assets/images/maeve.jpg')
    file1 = File.open('app/assets/images/dolores.jpg')
    file2 = File.open('app/assets/images/bernard.jpg')
    file3 = File.open('app/assets/images/maeve.jpg')

    dolores.avatar.attach(io: file1, filename:'dolores_avatar.jpg' )
    bernard.avatar.attach(io: file2, filename:'bernard_avatar.jpg' )
    maeve.avatar.attach(io: file3, filename:'maeve_avatar.jpg' )

  #to upload locally: need leading dot slash File.open('./app...') but on heroku comment those out and just use ('app')

  #Events
    Event.destroy_all

    west = Event.create!(name: "The Wild Old West", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 159.99, capacity: 7)

    japan = Event.create!(name: "Feudal Japan", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 259.99, capacity: 2)

    raj = Event.create!(name: "The British Raj", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 19.99, capacity: 250)

    medieval = Event.create!(name: "Medieval Times", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 100.00, capacity: 10)

    aztec = Event.create!(name: "Aztec Empire", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 400.00, capacity: 25)

    rome = Event.create!(name: "Roman Empire", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 0, capacity: 15)

    serengeti = Event.create!(name: "Serengeti", organizer_id: bernard.id, date: Time.now.to_datetime, time: Time.now.to_datetime, 
    location_id: 1, description: "Fancy dinner with a fancy hand fan!", price: 0, capacity: 5)

    file4 = File.open('app/assets/images/westworld.jpg')
    file5 = File.open('app/assets/images/japan.jpg')
    file6 = File.open('app/assets/images/raj.jpg')
    file7 = File.open('app/assets/images/medieval.jpg')
    file8 = File.open('app/assets/images/chitchen-itza.jpg')
    file9 = File.open('app/assets/images/rome.png')
    file10 = File.open('app/assets/images/serengeti.jpg')
    #file formate for local db seed:
    # file4 = File.open('./app/assets/images/westworld.jpg')
    # file5 = File.open('./app/assets/images/japan.jpg')
    # file6 = File.open('./app/assets/images/raj.jpg')
    # file7 = File.open('./app/assets/images/medieval.jpg')
    # file8 = File.open('./app/assets/images/chitchen-itza.jpg')
    # file9 = File.open('./app/assets/images/rome.png')
    # file10 = File.open('./app/assets/images/serengeti.jpg')

    west.photo.attach(io: file4, filename:'westworld.jpg')
    japan.photo.attach(io: file5, filename:'japan.jpg')
    raj.photo.attach(io: file6, filename:'raj.jpg')
    medieval.photo.attach(io: file7, filename:'medieval.jpg')
    aztec.photo.attach(io: file8, filename:'aztec.jpg')
    rome.photo.attach(io: file9, filename:'rome.png')
    serengeti.photo.attach(io: file10, filename:'serengeti.jpg')

    #registrations

    Registration.destroy_all

    Registration.create!(user_id: dolores.id, event_id: west.id)
    Registration.create!(user_id: bernard.id, event_id:west.id)
    Registration.create!(user_id: maeve.id, event_id:west.id)
  

    Registration.create!(user_id: dolores.id, event_id:japan.id)
    Registration.create!(user_id: maeve.id, event_id:japan.id)
   
    Registration.create!(user_id: dolores.id, event_id:raj.id)
    Registration.create!(user_id: bernard.id, event_id:raj.id)
    Registration.create!(user_id: maeve.id, event_id:raj.id)

    Registration.create!(user_id: dolores.id, event_id:medieval.id)
    Registration.create!(user_id: bernard.id, event_id:medieval.id)
    Registration.create!(user_id: maeve.id, event_id:medieval.id)
    Registration.create!(user_id: dolores.id, event_id:aztec.id)
    Registration.create!(user_id: bernard.id, event_id:aztec.id)
    Registration.create!(user_id: maeve.id, event_id:aztec.id)
    Registration.create!(user_id: dolores.id, event_id: rome.id)
    Registration.create!(user_id: maeve.id, event_id: rome.id)
    Registration.create!(user_id: bernard.id, event_id: rome.id)
    
    rugged = Category.create!(category:"Rugged")
    anachronistic = Category.create!(category:"Anachronistic")
    despotic = Category.create!(category:"Despotic")
    urbane = Category.create!(category:"Urbane")
    violent = Category.create!(category:"Violent")
    militaristic = Category.create!(category:"Militaristic")
    labor-intensive = Category.create!(category:"Labor-intensive")
    equestrian = Category.create!(category:"Equestrian")
    linguistic = Category.create!(category:"Linguistic")
    culinary = Category.create!(category:"Culinary")
    aesthetic = Category.create!(category:"Aesthetic")
    performative = Category.create!(category:"Uber-Performative")
    philanthropic = Category.create!(category:"Philanthropic")
    academic = Category.create!(category:"Academic")

    Categorization.create!(category_id: rugged.id, event_id: west.id)
    Categorization.create!(category_id: rugged.id, event_id: medieval.id)
    Categorization.create!(category_id: labor-intensive.id, event_id: medieval.id)
    Categorization.create!(category_id: labor-intensive.id, event_id: west.id)
    Categorization.create!(category_id: violent.id, event_id: west.id)
    Categorization.create!(category_id: violent.id, event_id: japan.id)
    Categorization.create!(category_id: violent.id, event_id: aztec.id)
    Categorization.create!(category_id: linguistic.id, event_id: rome.id)
    Categorization.create!(category_id: urbane.id, event_id: rome.id)
    Categorization.create!(category_id: philanthropic.id, event_id: rome.id)
    Categorization.create!(category_id: academic.id, event_id: rome.id)
    Categorization.create!(category_id: academic.id, event_id: japan.id)
    Categorization.create!(category_id: linguistic.id, event_id: japan.id)
    Categorization.create!(category_id: equestrian.id, event_id: west.id)
    Categorization.create!(category_id: equestrian.id, event_id: medieval.id)
    Categorization.create!(category_id: despotic.id, event_id: medieval.id)
    Categorization.create!(category_id: militaristic.id, event_id: medieval.id)
    Categorization.create!(category_id: militaristic.id, event_id: japan.id)
    Categorization.create!(category_id: rugged.id, event_id: serengeti.id)
    Categorization.create!(category_id: labor-intensive.id, event_id: serengeti.id)
    Categorization.create!(category_id: equestrian.id, event_id: serengeti.id)
    Categorization.create!(category_id: culinary.id, event_id: rome.id)
    Categorization.create!(category_id: culinary.id, event_id: japan.id)
    Categorization.create!(category_id: culinary.id, event_id: aztec.id)
    Categorization.create!(category_id: aesthetic.id, event_id: aztec.id)
    Categorization.create!(category_id: aesthetic.id, event_id: medieval.id)
    Categorization.create!(category_id: aesthetic.id, event_id: raj.id)
    Categorization.create!(category_id: aesthetic.id, event_id: culinary.id)
    Categorization.create!(category_id: aesthetic.id, event_id: academic.id)
  

