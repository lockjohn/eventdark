import React from 'react';

class EventShow extends React.Component {
    
    componentDidMount () {
        this.props.fetchEvent(this.props.eventId);

    }

    render () {
        const {event} = this.props;

        if (!event) return null; // so component can mount and fetch

      return(  
        <div className="outermost-div">
            <div className="event-info-wrapper">
                  <div className="event-info">
                      <div className="event-hero">
                        <div className="hero-img">
                            <img src="{window.herotest1}" alt=""/>
                        </div>
                        <div className="hero-detail">
                            <div className="hero-detail upper-half">
                                <p>Aug</p>
                                <p>18</p>
                                <h3>{event.name}</h3>
                                <a>{event.organizer}</a>
                            </div>
                            <div className="hero-detail lower-half">
                                <div className="price"></div>
                            </div>
                        </div>
                      </div>
                      <div className="event-detail">
                        {/* <EventDateDetail 
                                date={event.date} 
                                time={event.time}/>
                        <EventLocationDetail 
                                location={event.location}/> */}
                      </div>
                      <div className="event-description"></div>
                      <div className="event-organizer"></div>
                  </div>
            </div>
        </div> 
    
    )
    }


}




export default EventShow;