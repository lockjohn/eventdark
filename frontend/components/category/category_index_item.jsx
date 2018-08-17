import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';

const CategoryIndexItem = ({ event }) => (
        <Link to={`/events/${event.id}`}>
            <div className="cat-item">
                <div className="cat-item-img"
                    style={
                        {
                            backgroundImage: `url(${event.photoUrl})`
                        }
                    }>
                </div>
                <div className="ei-item-body">
                    <div className="ei-item-price">${event.price}</div>
                    <div className="ei-item-date">{formatDateTime(event.date)}</div>
                    <div className="ei-item-title">{event.name} </div>
                    <div className="ei-item-organizer">{event.organizer}</div>
                </div>

            </div>
        </Link>
);


export default CategoryIndexItem;