import React from 'react';

class EventShow extends React.Component {


    componentWillReceiveProps(ownProps) {
        if (this.props.eventId != ownProps.match.params.eventId) {
            this.props.fetchEvent(ownProps.match.params.eventId);
        }
    }
    componentDidMount() {
        // debugger
        this.props.fetchEvent(this.props.eventId);

    }

    render() {
        // debugger
        const { event } = this.props;
        let available;
       

        if (!event) return null; // so component can mount and fetch

        if (event.available === 'sold_out') {
            available = "Sold Out"
        } else {
            available = event.available
        }

        return (
            <div className="outermost-div">
            <div className="event-show-background"></div>
            <div className="event-show-background-boundary"></div>
                <div className="event-info-wrapper">
                    <div className="event-info">
                        <div className="event-hero-wrapper">
                            <div className="hero-img">
                                <img src={window.pic2} alt="" />
                            </div>
                            <div className="hero-detail">
                                <div className="upper-half">
                                    <div className="cal-date">
                                        <a>
                                            <p>AUG</p>
                                            <p className="cal-date-num">18</p>
                                        </a>
                                    </div>
                                    <div className="detail-title">
                                        <h1>{event.name}</h1>
                                        <a>by {event.organizer}</a></div>
                                </div>
                                <div className="lower-half">
                                    <div>${event.price}</div>
                                    <div>{available}</div>
                                </div>
                            </div>
                        </div>
                        <div className="register-bar">
                            <div className="price">{event.price}</div>
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
                                <h3>Description</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                        <div className="event-organizer">
                            <h2>{event.organizer}</h2>
                            <p>{event.organizer_description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}




export default EventShow;