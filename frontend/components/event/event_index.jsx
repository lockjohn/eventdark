import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {


render () {
    let { events } = this.props;
    events = Object.values(events);

    return (
        <div className="ei-grid">
            {events.map(event=> <EventIndexItem key={event.id} event={event}/>)}
        </div>

    );
}

}

export default EventIndex;
