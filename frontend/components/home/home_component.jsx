import React from 'react';
import EventIndex from '../event/event_index';
import HomeCarousel from './home_carousel';
import { Link } from 'react-router-dom';

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
                        
                        <Link to='/e/Aesthetic' className="cat-link cat-img-1">
                            <div className="cat-img-1">
                            <p> Aesthetic</p>
                            <span className="cat-text">Feast on sensuality, pleasure for all the senses </span>
                            </div>
                        </Link>

                        <Link to='/e/Rugged' className="cat-link cat-img-2">
                          <div className="cat-img-2">
                            <p>Rugged</p>
                            <span className="cat-text">Test your limits in the most extreme terrains </span>
                            </div>
                        </Link>
                        
                        <Link to='/e/Violent' className="cat-link cat-img-3">
                            <div className="cat-img-3">
                            <p> Violent</p><span className="cat-text"> Only the brutal will survive </span>      
                            </div>
                        </Link>
                        
                        <Link to='/e/Culinary' className="cat-link cat-img-4">
                        <div className="cat-img-4">
                        <p> Culinary</p><span className="cat-text">Authentically recreated delights superbly executed for your palate</span>
                         </div>
                        </Link>
                            <Link to='/e/Linguistic' className="cat-link cat-img-5">
                        <div className="cat-img-5"><p> Linguistic</p><span className="cat-text">Exquisite linguisto-cultural detail </span>      </div>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }

}



export default Home;