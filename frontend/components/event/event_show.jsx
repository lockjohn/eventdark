import React from 'react';

class EventShow extends React.Component {
    

    componentWillReceiveProps(ownProps) {
        if (this.props.eventId!=ownProps.match.params.eventId){
        this.props.fetchEvent(ownProps.match.params.eventId);
        }
    }
    componentDidMount () {
        // debugger
        this.props.fetchEvent(this.props.eventId);

    }

    render () {
        // debugger
        const {event} = this.props;

        if (!event) return null; // so component can mount and fetch

      return(  
        <div className="outermost-div">
            <div className="event-info-wrapper">
                  <div className="event-info">
                      <div className="event-hero">
                        <div className="hero-img">
                            <img src={window.herotest1} alt=""/>
                        </div>
                        <div className="hero-detail">
                            <div className="hero-detail upper-half">
                                <p>Aug</p>
                                <p>18</p>
                                <h3>{event.name}</h3>
                                <a>{event.organizer}</a>
                            </div>
                            <div className="hero-detail lower-half">
                                <div className="price">{event.price}</div>
                            </div>
                        </div>
                      </div>
                      <div className="register-bar">
                        <button className="register-button">REGISTER</button>
                      </div>
                    <div className="event-description-wrapper">
                      <div className="event-detail">
                        <div>
                          <h3>Date and Time</h3>
                          <p>midnight Aug 18</p>
                          <a>Add to Calendar</a>
                        </div>
                        <div>
                              <h3>Location</h3>
                              <p> egypt</p>
                              <a>View Map</a>
                        </div>
                      </div>
                      <div className="event-description">
                                <p>{event.description}</p>
                      </div>
                      <div className="event-organizer">
                                <h2>{event.organizer}</h2>
                                <p>{event.organizer_description}</p>
                      </div>
                      </div>
                  </div>
            </div>
        </div> 
    
    )
    }


}




export default EventShow;