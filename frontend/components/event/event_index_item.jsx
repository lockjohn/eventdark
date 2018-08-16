import React from 'react';
import {Link} from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';

const EventIndexItem = ({event}) => (
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
            <div className="ei-item-footer"> 
                <div className="ei-item-category">{event.categories.map((category) => <Link to={`/events/${category}`}> <span> #{category}</span> </Link> )} </div>
            </div>
    </div>
 </Link>

);

export default EventIndexItem;