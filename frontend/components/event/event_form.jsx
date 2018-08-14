import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.event;
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.event.id != nextProps.match.params.eventId) {
            // this.props.fetchEvent(nextProps.match.params.eventId);
            this.setState(nextProps.event);
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    renderErrors() {
        if (this.props.errors.length > 0){
        return (
            <ul className="login-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )};
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="event-form-wrapper">
                <div className="event-form"> <h1>Event Details</h1>
                <h3>{this.props.formType}</h3>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <label>Event Name
                         <input
                                required
                                type="text"
                                value={this.state.name}
                                placeholder="Name your event"
                                onChange={this.update('name')} />
                        </label>

                        <label>Event Description
                        <textarea
                                rows="10"
                                cols="75"
                                required
                                placeholder="Describe your event"
                                value={this.state.description}
                                onChange={this.update('description')} />
                        </label>

                        <label>Event Capacity
                         <input
                                required
                                type="number"
                                placeholder="Max capacity"
                                value={this.state.capacity}
                                onChange={this.update('capacity')} />
                        </label>
                        <label>Ticket Price
                         <input
                                required
                                type="number"
                                placeholder="If free, enter 0"
                                value={this.state.price}
                                onChange={this.update('price')} />
                        </label>
                        <label>Date
                         <input
                                required
                                type="date"
                                value={this.state.date}
                                onChange={this.update('date')} />
                        </label>
                        <label>Time
                         <input
                                required
                                type="time"
                                value={this.state.time}
                                onChange={this.update('time')} />
                        </label>
                        
                        <input placeholder="MAKE YOUR EVENT LIVE" className="event-form-button" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(EventForm);