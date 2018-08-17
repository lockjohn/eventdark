import React from 'react';
import EventIndex from '../event/event_index';
import HomeCarousel from './home_carousel';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllEvents();
    }
    
    handleChange(e) {
        console.log(e.target)
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    handleSubmit (e) {
        console.log("submit:", this.state.value)
        e.preventDefault();
        this.props.history.push(`/search/${this.state.value}`);
    }

    render() {
        const { entities } = this.props;
        if(!entities.events) {
            return (
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            )
        } else
       { return (
            <div className="home-page-wrapper">
                <div className="home-hero">
                    <HomeCarousel />
                </div>
                {/* <div className="home-hero"> /* </div> */}
                <div className="event-index-wrapper">
                    <div className="home-search-container">
                        <h1>Discover a park like no other</h1>
                        <form className="home-search-form" onSubmit={this.handleSubmit}>
                            <input className="search-input-field" placeholder="search by events by name" type="text" 
                                value={this.state.value}
                                onChange={this.handleChange}
                             />
                            <input className="search-button" type="submit" />
                        </form>
                    </div>

                    <header className="event-index-header">Events for you</header>
                    
                    <EventIndex events={entities.events} />
                    
                    <header className="event-index-header">Browse by Top Categories</header>
                    {/* <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div> */}
                    <div className="ei-cat-img-grid">
                        
                        <Link to='/e/Aesthetic' className="ei-cat-link ei-cat-img-1">
                            <div className="ei-cat-img-1">
                            <p> Aesthetic</p>
                            <span className="ei-cat-text">Feast on sensuality, pleasure for all the senses </span>
                            </div>
                        </Link>

                        <Link to='/e/Rugged' className="ei-cat-link ei-cat-img-2">
                          <div className="ei-cat-img-2">
                            <p>Rugged</p>
                            <span className="ei-cat-text">Test your limits in the most extreme terrains </span>
                            </div>
                        </Link>
                        
                        <Link to='/e/Violent' className="ei-cat-link ei-cat-img-3">
                            <div className="ei-cat-img-3">
                            <p> Violent</p><span className="ei-cat-text"> Only the brutal will survive </span>      
                            </div>
                        </Link>
                        
                        <Link to='/e/Culinary' className="ei-cat-link ei-cat-img-4">
                        <div className="ei-cat-img-4">
                        <p> Culinary</p><span className="ei-cat-text">Authentically recreated delights superbly executed for your palate</span>
                         </div>
                        </Link>
                            <Link to='/e/Linguistic' className="ei-cat-link ei-cat-img-5">
                        <div className="ei-cat-img-5"><p> Linguistic</p><span className="ei-cat-text">Exquisite linguisto-cultural detail </span>      </div>
                        </Link>
                    </div>

                </div>
            </div>
        )}
    }

}



export default Home;