import React from 'react';
import EventIndex from './event/event_index';

class Home extends React.Component  {
   
    componentDidMount () {
        this.props.fetchAllEvents();
    }    

    render () {
        const { entities } = this.props;

        return (
        <div className="home-page-wrapper">
            <div className="home-hero">
                
             </div>
             <div className="event-index-wrapper"> 
                 <div className="home-search-container"> 
                    <h1>Find your next experience</h1>
                    <form className="home-search-form">
                        <input className="search-input-field" type="text" name="" id=""/>
                        <input className="search-button" type="submit"/>
                    </form>
                 </div>
                 <header className="event-index-header">Events for you</header>
                <EventIndex events={this.props.entities.events}/>
            </div>
            <div className="home-categories-wrapper">Categories</div>
        </div>
    )}

}

//don't know if this will work with the props... might need to break it down more in the home container and pass events to event index, etc


export default Home;