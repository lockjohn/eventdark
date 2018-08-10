import React from 'react';

const EventHeroDetail = ({name, organizer}) => {
    return (
        <div className="event-hero">
            <div className="hero-img">
                <img src={window.herotest1} alt="" />
            </div>
            <div className="hero-detail">
                <div className="hero-detail upper-half">
                    <p>Aug</p>
                    <p>18</p>
                    <h3>{name}</h3>
                    <a>{organizer}</a>
                </div>
                <div className="hero-detail lower-half">
                    <div className="price"></div>
                </div>
            </div>
        </div>
    )
}

export default EventHeroDetail;
