import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.event;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div> Event Form
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Event Name
                         <input
                            required
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')} />
                    </label>

                    <label>Event Description
                        <textarea
                            required
                            value={this.state.description}
                            onChange={this.update('description')} />
                    </label>

                    <label>Event Capacity
                         <input
                            required
                            type="number"
                            value={this.state.capacity}
                            onChange={this.update('capacity')} />
                    </label>
                    <label>Ticket Price
                         <input
                            required
                            type="number"
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

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(EventForm);