import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            value: 1,
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRegistration(this.props.event)
            .then(() => this.props.history.push('/events/tickets'));
        //history push to user tix show page
    }

    handleChange(e) {
        this.setState( {value: e.target.value})
    }

    handleOpenModal () {
        this.setState({showModal: true})
    }

    handleCloseModal () {
        this.setState({showModal: false})
    }

    componentWillReceiveProps(ownProps) {
        if (this.props.eventId != ownProps.match.params.eventId) {
            this.props.fetchEvent(ownProps.match.params.eventId);
        }
    }
    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    renderErrors() {
       
        if (this.props.errors.length > 0) {
            return (
                <ul className="login-errors registration-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        };
    }

    render() {
        const { event } = this.props;
        let available;
        // let selector;

        if (!event) return null; // so component can mount and fetch

        if (event.available === 'sold_out') {
            available = "Sold Out";
            // select = "Sold Out"
        } else {
            available = event.available
            //  `${available} remaining`
        }
        console.log("available is:", available);
        //make constant of the two possible html tags
        // use ternary to set max based on avaiable and then use max for i < max loop

        return (
            <div className="outermost-div">
            <div className="event-show-background"
            style={
                {
                    backgroundImage: `url(${event.photoUrl})`
                }
            }></div>
            <div className="event-show-background-boundary"></div>
                <div className="event-info-wrapper">
                    <div className="event-info">
                        <div className="event-hero-wrapper">
                            <div className="hero-img">
                                <img src={event.photoUrl} alt="" />
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
                                    <div>{available} remaining</div>
                                </div>
                            </div>
                        </div>
                        <div className="register-bar">
                            <div className="price">{event.price}</div>
                            <button className="register-button" onClick={this.handleOpenModal}>REGISTER</button>
                            <ReactModal
                                className="tix-modal-wrapper"
                                isOpen={this.state.showModal}
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={this.handleCloseModal}
                            > 
                                <div className="tix-modal-container">
                                    <header className="tix-modal-header">
                                        <h1>Select Tickets</h1>
                                        <button className="tix-modal-close" onClick={this.handleCloseModal}>x</button>  
                                    </header>
                                    <section className="tix-modal-main">
                                            <div className="tix-price">
                                                <h1>General Admission</h1>
                                                <p>${event.price}</p>
                                                <p>{available}</p>
                                            </div>
                                            <div className="tix-select">
                                                <select className="tix-select-input" 
                                                    value={this.state.value} onChange={this.handleChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                    </section>
                                    {this.renderErrors()}
                                    
                                    <section className="tix-modal-footer">
                                       <p>Quantity: {this.state.value}</p> 
                                       <p>Total: {this.state.value * event.price}</p> 
                                       <button onClick={this.handleSubmit} className="modal-bttn register-button">Check Out</button>
                                    </section>
                                </div>
                            </ReactModal>
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
                                <div className='categories-show-list'>
                                    <h3>Categories</h3>
                                    <ul>
                                        {event.categories.map( category => <li>{category}</li> ) }
                                    </ul>
                                 </div>
                            </div>
                            <div className="event-description">
                                <h3>Description</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                        {/* <div className="event-organizer">
                            <h2>{event.organizer}</h2>
                            <p>{event.organizer_description}</p>
                        </div> */}
                    </div>
                </div>
            </div>

        )
    }


}




export default EventShow;