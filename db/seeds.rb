User.destroy_all

    dolores = User.create!(username: 'Dolores', password: "123456")
    bernard = User.create!(username: 'Bernard',  password: "123456")
    maeve = User.create!(username: "Maeve", password: "123456")
    lee = User.create!(username: "Lee Sizemore", password: "123456")

    #    = File.open('/app/assets/images/')
    # file formate for local db seed:
    # file1 = File.open('./app/assets/images/dolores.jpg')
    # file2 = File.open('./app/assets/images/bernard.jpg')
    # file3 = File.open('./app/assets/images/maeve.jpg')
    file1 = File.open('app/assets/images/dolores.jpg')
    file2 = File.open('app/assets/images/bernard.jpg')
    file3 = File.open('app/assets/images/maeve.jpg')
    lee_avatar = File.open('app/assets/images/lee-avatar.png')

    dolores.avatar.attach(io: file1, filename:'dolores_avatar.jpg' )
    bernard.avatar.attach(io: file2, filename:'bernard_avatar.jpg' )
    maeve.avatar.attach(io: file3, filename:'maeve_avatar.jpg' )
    lee.avatar.attach(io: lee_avatar, filename:'lee_avatar.png' )

  #to upload locally: need leading dot slash File.open('./app...') but on heroku comment those out and just use ('app')

  #Events
    Event.destroy_all

west1 = Event.create!(name: "Sweetwater, Day 1", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "The train will deposit you at Sweetwater, a bustling town full of characters and charm. This vibrant community features a number of friendly people engaged in all sorts of trade, but stay on your toes — the occasional bandit or ne'er-do-well could sneak in. Play a game of faro at the Mariposa Saloon or relax in luxury lodging at the Coronado — no matter what you choose, our hosts aim to please. The hub town of the Westworld park, where guests arrive by steam train and start their adventures. Venturing further from Sweetwater brings any guest into regions and locations with greater gameplay difficulty.", price: 999.99, capacity: 350)


west2 = Event.create!(name: "Las Mudas, Day 2", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Time to expand your horizons. Kick back with some mezcal at Las Mudas. A close-knit community brimming with history, you’ll have chats with the locals that you won’t soon forget. The hosts you meet here are representative of the cutting-edge advances in A.I. that have earned Westworld its world-famous reputation. A rustic border town on the outskirts of the Westworld oil fields, Las Mudas is a charming village that boasts a tightly-knit community and a vintage charm. Escape the heat at the bar or relax in the town square, Las Mudas is the perfect place to enjoy some of Westworld’s simpler draws. Its residents have been living there for generations, so if you are lucky enough to charm yourself a place at their dinner table, family stories and secrets abound.", price: 999.99, capacity: 250)

west3 = Event.create!(name: "Python Pass, Day 3", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "If you’re looking for some adventure, head to Python Pass: the perfect place for hiking, animal watching, and mining for gold. Be sure to dress accordingly; the Pass is one of the most strenuous climbing experiences in the park. The natural beauty only gets better once the sun goes down; get a glimpse of the breathtaking constellations that aren’t dulled by city lights. No need to fear the darkness—our hosts are always monitored and contained.", price: 999.99, capacity: 30)

west4 = Event.create!(name: "Agave Plantation, Day 4", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Rumor is this hidden jewel within the park is not long for this world, so stop in to drink the best tequila you’ve ever had in your life while you can. The distillery is the ultimate Spanish oasis, buttressed against the arid desert winds blown in from the west and south. Stop by for fine dining under our covered veranda or tour the expansive blue agave fields which are the finest for miles. A treasured oasis for years, this tequila distillery gives guests a glimpse at the refined culture and decadent charm of agrarian life. The grounds are a good reminder that beneath the surface, plenty of surprising discoveries await. Our park is ever-evolving, so stop by our famed Agave Plantation, while you still can.", price: 999.99, capacity: 20)

west5 = Event.create!(name: "Pariah, Day 5", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Time to lean into one of the park’s most legendary perks: guilt-free sin.Pariah, a dusty old town 'built on decadence and transgression.' Pariah is a border town located northeast of the New Virginia territory.Decadance knows no bounds in Pariah, Westworld’s capital of sensuality. Pick a side, as war lurks on the fringes of town, but choose carefully: there is no law. While you wait for dates to open up, get in the mood with musical favorites from the Mariposa.", price: 999.99, capacity: 30)

west6 = Event.create!(name: "The Maze, Day 6", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "In the midst of all the action, guests often overlook the most nuanced details of the park. Take a minute to discover something you hadn't noticed before. As you explore the park, you may notice we are breaking ground on our most daring narrative yet. This storyline is guaranteed to bring out the good, bad and ugly... depending on how you play it. In some circles, the maze is rumored to be the sum of a man’s life. At its center lies a man who has been killed over and over—only to come back to life. To keep out his oppressors, he built the maze.", price: 999.99, capacity: 5)

west7 = Event.create!(name: "Ghost Nation Territory, Day 7", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "After a week in the park, you may be ready to explore sections designed for more experienced park visitors. One such area is Ghost Nation Territory; it’s home to the fierce tribe, so enter at your own risk. As you dive in, be prepared to have your limits tested. Westworld storylines are complex and oftentimes difficult decisions stand in the way of your chosen objective. Some people may be left behind in the process; how far are you willing to go?", price: 999.99, capacity: 100)

west8 = Event.create!(name: "Unclaimed Territories, Day 8", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Ready for the stuff of legend? Find your way to the Unclaimed Territories. Word is that a quaint town full of friendly people existed in these parts, but there is no evidence to support those claims. Few have made it this far and even fewer have returned.", price: 999.99, capacity: 100)

west9 = Event.create!(name: "Sweetwater Hills, Day 9", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Should you feel inclined to wear the black hat, head to Sweetwater Hills. Known to be the hideout of murderous criminal Hector Escaton, the Hills offer refuge from the law, but that won't mean you're safe. Remember that anyone you meet could be your next accomplice; all our hosts exist to serve you.", price: 999.99, capacity: 2)

west10 = Event.create!(name: "Escalante and beyond, Day 10", organizer_id: lee.id, date:Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "Ten days in and you are just beginning to uncover all the park has to offer. Assuming you have made it to the Unclaimed Territories, you may have noticed a small town has popped up in the distance: Escalante. Brimming with park history, this charming place once buried by sand is now epicenter of Ford’s new narrative. While you wait for your trip, take a look at how this new storyline came to be and get a glimpse at its grand finale. Next, hear the park creators debrief on all the recent, exciting changes at Westworld and see what those bright, creative minds have in store for the future of the park.", price: 999.99, capacity: 2)

japan = Event.create!(name: "Shogun World", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time, location_id: 1, description: "For those for whom Westworld is not enough, the true connoisseur of gore can indulge their fantasies with the slash of a katana. Modeled after Japan's Edo period, Shogun World offers a chance for guests to embrace their inner warrior, in a landscape of highest beauty and darkest horror. Let your true self take shape in the land where self-discovery is an art form.", price:999.99, capacity: 340)

    raj = Event.create!(name: "The British Imperial Raj", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time,
    location_id: 1, description: "New, breathtaking events are in the workds and coming soon!", price: 1000, capacity: 250)

    medieval = Event.create!(name: "Medieval World", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time,
    location_id: 1, description: "New, breathtaking events are in the workds and coming soon!", price: 10000, capacity: 100)

    #update image
    future = Event.create!(name: "Future World", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time,
    location_id: 1, description: "New, breathtaking events are in the workds and coming soon!", price: 4000, capacity: 250)

    rome = Event.create!(name: "Roman Empire", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time,
    location_id: 1, description: "New, breathtaking events are in the workds and coming soon!", price: 5000, capacity: 150)
    #update image
    spa = Event.create!(name: "Spa World", organizer_id: lee.id, date: Time.now.to_date, time: Time.now.to_time,
    location_id: 1, description: "New, breathtaking events are in the workds and coming soon!", price: 8000, capacity: 500)

    file4 = File.open('app/assets/images/west1.jpg')
    file5 = File.open('app/assets/images/japan.jpg')
    file6 = File.open('app/assets/images/raj.jpg')
    file7 = File.open('app/assets/images/medieval.jpg')
    file8 = File.open('app/assets/images/future.jpg')
    file9 = File.open('app/assets/images/rome.png')
    file10 = File.open('app/assets/images/spa.jpg')

    file11 = File.open('app/assets/images/west2.jpg')
    file12 = File.open('app/assets/images/west3.jpg')
    file13 = File.open('app/assets/images/west4.jpg')
    file14 = File.open('app/assets/images/west5.jpg')
    file15 = File.open('app/assets/images/west6.jpg')
    file16 = File.open('app/assets/images/west7.jpg')
    file17 = File.open('app/assets/images/west8.jpg')
    file18 = File.open('app/assets/images/west9.jpg')
    file19 = File.open('app/assets/images/west10.png')
    #file formate for local db seed:
    # file4 = File.open('./app/assets/images/westworld.jpg')
    # file5 = File.open('./app/assets/images/japan.jpg')
    # file6 = File.open('./app/assets/images/raj.jpg')
    # file7 = File.open('./app/assets/images/medieval.jpg')
    # file8 = File.open('./app/assets/images/chitchen-itza.jpg')
    # file9 = File.open('./app/assets/images/rome.png')
    # file10 = File.open('./app/assets/images/serengeti.jpg')

    west1.photo.attach(io: file4, filename:'west1.jpg')
    west2.photo.attach(io: file11, filename:'west2.jpg')
    west3.photo.attach(io: file12, filename:'west3.jpg')
    west4.photo.attach(io: file13, filename:'west4.jpg')
    west5.photo.attach(io: file14, filename:'west5.jpg')
    west6.photo.attach(io: file15, filename:'west6.jpg')
    west7.photo.attach(io: file16, filename:'west7.jpg')
    west8.photo.attach(io: file17, filename:'west8.jpg')
    west9.photo.attach(io: file18, filename:'west9.jpg')
    west10.photo.attach(io: file19, filename:'west10.jpg')

    japan.photo.attach(io: file5, filename:'japan.jpg')
    raj.photo.attach(io: file6, filename:'raj.jpg')
    medieval.photo.attach(io: file7, filename:'medieval.jpg')
    future.photo.attach(io: file8, filename:'future.jpg')
    rome.photo.attach(io: file9, filename:'rome.png')
    spa.photo.attach(io: file10, filename:'spa.jpg')

    #registrations

    Registration.destroy_all

    Registration.create!(user_id: dolores.id, event_id: west1.id)
    Registration.create!(user_id: bernard.id, event_id:west1.id)
    Registration.create!(user_id: maeve.id, event_id:west1.id)


    Registration.create!(user_id: dolores.id, event_id:japan.id)
    Registration.create!(user_id: maeve.id, event_id:japan.id)

    Registration.create!(user_id: dolores.id, event_id:west5.id)
    Registration.create!(user_id: bernard.id, event_id:west5.id)
    Registration.create!(user_id: maeve.id, event_id:west5.id)

    Registration.create!(user_id: dolores.id, event_id:west6.id)
    Registration.create!(user_id: bernard.id, event_id:west5.id)
    Registration.create!(user_id: maeve.id, event_id:west4.id)
    Registration.create!(user_id: dolores.id, event_id:west3.id)
    Registration.create!(user_id: bernard.id, event_id:west2.id)
    Registration.create!(user_id: maeve.id, event_id:west10.id)
    Registration.create!(user_id: dolores.id, event_id: west3.id)
    Registration.create!(user_id: maeve.id, event_id: west4.id)
    Registration.create!(user_id: bernard.id, event_id: west5.id)

      Category.destroy_all

    rugged = Category.create!(category:"Rugged")
    violent = Category.create!(category:"Violent")
    linguistic = Category.create!(category:"Linguistic")
    culinary = Category.create!(category:"Culinary")
    aesthetic = Category.create!(category:"Aesthetic")


  
        Categorization.destroy_all

    Categorization.create!(category_id: rugged.id, event_id: west3.id)
    Categorization.create!(category_id: aesthetic.id, event_id: west1.id)
    Categorization.create!(category_id: culinary.id, event_id: west1.id)
    Categorization.create!(category_id: rugged.id, event_id: west6.id)
    Categorization.create!(category_id: violent.id, event_id: west7.id)
    Categorization.create!(category_id: violent.id, event_id: japan.id)
    Categorization.create!(category_id: violent.id, event_id: west8.id)
    Categorization.create!(category_id: linguistic.id, event_id: rome.id)
    Categorization.create!(category_id: linguistic.id, event_id: japan.id)
    Categorization.create!(category_id: rugged.id, event_id: west9.id)
    Categorization.create!(category_id: culinary.id, event_id: west4.id)
    Categorization.create!(category_id: culinary.id, event_id: west5.id)
    Categorization.create!(category_id: aesthetic.id, event_id: future.id)
    Categorization.create!(category_id: aesthetic.id, event_id: west10.id)
    Categorization.create!(category_id: violent.id, event_id: medieval.id)
    Categorization.create!(category_id: aesthetic.id, event_id: raj.id)
    Categorization.create!(category_id: culinary.id, event_id: raj.id)
    Categorization.create!(category_id: linguistic.id, event_id: west2.id)
