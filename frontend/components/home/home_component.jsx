import React from 'react';
import EventIndex from '../event/event_index';
import HomeCarousel from './home_carousel';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchAllEvents();
    }

    render() {
        const { entities } = this.props;

        return (
            <div className="home-page-wrapper">
                <div className="home-hero">
                    <HomeCarousel />
                </div>
                {/* <div className="home-hero"> /* </div> */}
                <div className="event-index-wrapper">
                    <div className="home-search-container">
                        <h1>Find your next experience</h1>
                        <form className="home-search-form">
                            <input className="search-input-field" type="text" name="" id="" />
                            <input className="search-button" type="submit" />
                        </form>
                    </div>
                        <header className="event-index-header">Events for you</header>
                        <EventIndex events={this.props.entities.events} />
                    <header className="event-index-header">Browse by Top Categories</header>
                    <div className="ei-cat-img-grid">
                        <div className="cat-img-1"><img src="" alt="" /> <p>Rugged</p></div>
                        <div className="cat-img-2"><img src="" alt="" /><p> Aesthetic</p></div>
                        <div className="cat-img-3"><img src="" alt="" /><p> Violent</p></div>
                        <div className="cat-img-4"><img src="" alt="" /><p> Culinary</p></div>
                        <div className="cat-img-5"><img src="" alt="" /><p> Linguistic</p></div>
                        {/* <div className="cat-img-6"><img src="" alt="" /> Urbane</div>
                        <div className="cat-img-7"><img src="" alt="" /> Equestrian</div> */}
                    </div>
                </div>
            </div>
        )
    }

}



export default Home;