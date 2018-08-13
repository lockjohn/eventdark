import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {


// componentDidMount () {
    // console.log('event index');
    // this.props.fetchAllEvents();
// }

render () {
    let { events } = this.props;
    events = Object.values(events);
    console.log("event component", this.props, events);
    // if (!events) return null;

    return (
        <div className="ei-grid">
            {events.map(event=> <EventIndexItem key={event.id} event={event}/>)}
        </div>

    );
}

}

export default EventIndex;
