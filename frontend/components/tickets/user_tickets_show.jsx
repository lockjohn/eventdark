import React from 'react';
import UserTicketEvent from './user_ticket_event';

class UserTickets extends React.Component {

    componentDidMount() {
        this.props.showRegistrations(this.props.user.id);
    }

    render() {
        let { tickets, user } = this.props;

        return (
            <div className="user-show-page-wrapper">
                <div className="user-show-background"><img src={user.userImgUrl} /></div>
                <div className="user-show-background-boundary"></div>
                <div className="user-tix-show-wrapper">
                    <section className="user-show-container">
                        <div className="user-avatar"> <img src={user.userImgUrl} /></div>
                        <div className="user-username">
                            <h1>{user.username}</h1>
                            <p> Tickets: {user.totalTickets}</p>
                        </div>
                    </section>
                    <div className="ticket-wrapper">
                        <header className="tickets-header">Tickets</header>
                        <section className="user-tix-grid">
                            {tickets.map(ticket => <UserTicketEvent key={ticket.id} ticket={ticket} />)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserTickets;