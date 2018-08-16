import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {


render () {
    let { events } = this.props;
    events = Object.values(events);

    return (
        <div className="ei-grid">
            {events.map(event=> <EventIndexItem key={event.id} event={event}/>)}
            <div className="ei-cat-img-grid">
                <div className="cat-img-1"><img src="" alt=""/> Rugged</div>
                <div className="cat-img-2"><img src="" alt=""/> Aesthetic</div>
                <div className="cat-img-3"><img src="" alt=""/> Violent</div>
                <div className="cat-img-4"><img src="" alt=""/> Culinary</div>
                <div className="cat-img-5"><img src="" alt=""/> Linguistic</div>
                <div className="cat-img-6"><img src="" alt=""/> Urbane</div>
                <div className="cat-img-7"><img src="" alt=""/> Equestrian</div>
            </div>
        </div>

    );
}

}

export default EventIndex;
