import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';

const UserTicketEvent = ({ ticket }) => (
    <Link to={`/events/${ticket.id}`}>
        <div className="ei-item">
            <div className="ei-item-img"
                style={
                    {
                        backgroundImage: `url(${ticket.photoUrl})`
                    }
                }>
                <div className="ei-item-price">${ticket.price}</div>
            </div>
            <div className="ei-item-body">
                <div className="ei-item-date">{formatDateTime(ticket.date)}</div>
                <div className="ei-item-title">{ticket.name} </div>
                <div className="ei-item-organizer">{ticket.organizer}</div>
            </div>
            <div className="ei-item-footer">
                <div className="ei-item-category"> </div>
            </div>
        </div>
    </Link>

);

export default UserTicketEvent;