import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';

const EventIndexItem = ({ event }) => {

    if (!event) { return (
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>)
    } else { return (
    <div>
        <Link to={`/events/${event.id}`}>
            <div className="ei-item">
                <div className="ei-item-img"
                    style={
                        {
                            backgroundImage: `url(${event.photoUrl})`
                        }
                    }>
                    <div className="ei-item-price">${event.price}</div>
                </div>
                <div className="ei-item-body">
                    <div className="ei-item-date">{formatDateTime(event.date)}</div>
                    <div className="ei-item-title">{event.name} </div>
                    <div className="ei-item-organizer">{event.organizer}</div>
                </div>

            </div>
        </Link>
        <div className="ei-item-footer">
            <div className="ei-item-category">{event.categories.map((category,i) => <Link key={i} to={`/e/${category}`}> <span> #{category}</span> </Link>)} </div>
        </div>
    </div>
)}
}

export default EventIndexItem;