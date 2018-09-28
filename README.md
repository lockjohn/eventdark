
![large_logo](readme/large_logo.png)
---
**eventdark** is a full-stack web product cloning eventbrite.com, and using thematic content from HBO's WestWorld to demonstrate the site's features and branding potential. **eventdark** is a responsively designed single-page web app built from the backend with Ruby on Rails 5.2 RESTful routes API on top of a PostgreSQL object-relational database supplemented with ActiveStorage/Amazon Web Services cloud storage for image files. The **eventdark** web app's frontend uses Reactjs-Reduxjs architecture bundled by webpack 4.0 and npm. Entire site was delivered within a hard 12 day deadline.

Features
---
- Users can browse events by category and search by event name:


![fullscreen ss](readme/full_screen_splash.png)


- Site is mobile-first reponsive based purely on native CSS3 design using css flex and grid properties
- User account creation and session authentication using BCrpyt encryption and session cookies
- Users can become event organizers: creating and editing their own events
- Events contain images and descriptions, dates and times:

![event detail ss](readme/event_detail.png)


- Users can register for events and track the events for which they have tickets
- Events dynamically track availability based on new registrations and preset capacity

Code Snippet
---
Ruby on Rails customized controller logic

```ruby
class Api::EventsController < ApplicationController

    def index
        cat_name = params[:category]
        if cat_name
         
            if cat = Category.find_by(category: cat_name)
                @events = cat.events
                render "api/events/index"
            else
               
                letter = params[:category][0].upcase
                @events = Event.where("name LIKE :prefix", prefix: "#{letter}%")
                if @events.length > 0 
                     render "api/events/index" 
                else 
                    render json: ["No results for that search"], status: 404
                end
            end
        else
            @events = Event.with_attached_photo
            render "api/events/index"
        end
    end

    def show
        @event = Event.find_by_id(params[:id])
        if @event 
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def create
        @event = Event.new(event_params)
        @event.organizer_id = current_user.id
        @event.location_id = current_user.id
        if @event.save
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])
    
        if  @event.update(event_params)
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    private

    def event_params
        params.require(:event).permit(:photo,
            :name, 
            :organizer_id, 
            :description, 
            :price, :capacity, 
            :date, :time,
            :location_id)
    end

end
```
Higher Order React Component: 
```javascript 
import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const currentUserId = [state.session.id]
    const currentUser = state.entities.users[state.session.id]
    const defaultEvent = {
        name: '',
        description: '',
        price: '',
        date: '', time: '',
        capacity: '',
        photoFile: '',
    };
    const event = state.entities.events[ownProps.match.params.eventId] || defaultEvent;
    const formType = 'Update Event';
    const errors = state.errors.eventErrors || [];
    return { event, formType , errors};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: id => dispatch(fetchEvent(id)),
        action: (event,id) => dispatch(updateEvent(event,id)),
    };
};

class EditEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }



    render() {
        const { action, formType, event, errors } = this.props;
      
        return (
            <EventForm
                action={action}
                formType={formType}
                event={event}
                errors={errors} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
```

Future implementations
---
- Expand user-as-organizer features to include organizer profiles, accessing information about incoming registrations, and see event registerees
- Expand event search functions to include search by time and description
- Integrate with Google Maps API to tag events by location and allow location-based event search
- Expand user tools: bookmarking events for future reference and following a particular event organizer

![event dark logo](readme/logo.png)

