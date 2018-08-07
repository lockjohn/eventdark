```java
{
  entities: {
    events: {
      1: {
        id: 1,
        event_name: "Summer Fan-ceee Fest",
        organizer_id: 111,
        date: 8/7/2018,
        time: 20:00,
        location: "Palo Alto, CA",
        description: "Fancy dinner with a fancy hand fan!",
        price: 159.99,
        available: true,
        event_type: ["Dinner","Outdoors"],
      },
      2: {
        id: 2,
        event_name: "Solo party",
        organizer_id: 11,
        date: 9/1/2018,
        time: 00:00,
        location: "Nowhere, Ca",
        description: "this is a solo party and you can't come",
        price: 0,
        available: false,
        event_type: ["Party"],
      },
    },
    registrations: {
      1: {
        id: 1,
        event_id: 2,
        attendee_id: 111
      },
      2: {
        id: 2,
        event_id: 1,
        attendee_id: 111
      }
      3: {
        id: 3,
        event_id: 1,
        attendee_id: 275
      }
    },
    categories:{
      1: {
        id: 1,
        category: "Family Fun"
      }
      2: {
        id: 2,
        category: "Things to do in Diablo, CA"
      }
    },
    taggings:{
      1: {
        id: 1,
        category_id: 2,
        event_id: 1,
      },
    },
    bookmarks:{
      1: {
        id: 10,
        event_id: 2,
        attendee_id: 111,
      }
    },
    followings:{
      1: {
        id: 1,
        organizer_id: 111,
        attendee_id: 111,
      },
      2: {
        id: 2,
        organizer_id: 111,
        attendee_id: 275,
      }
    },
    users: {
      111: {
        id: 111,
        username: "fancy_diner",
        email: "gourmet@gmail.com",
        profilePic: "http://maxpixel.freegreatpicture.com/static/photo/1x/Wildlife-Tropical-Pet-Colorful-Macaw-Parrot-Bird-410144.jpg",
        organizer_description: "I throw fancy dinner parties, only fancy people allowed!"
      },
      275: {
        id: 275,
        username: "blue_moon",
        email: "bluemoon@moon.com",
        profilePic: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg",
        organizer_description: ""
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    eventForm: ["Please fill out all required fields"],
  },
  session: { currentUserId: 275 }
}
```
