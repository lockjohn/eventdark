import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllEvents(this.props.match.params.category);
    }

    render() {
        let { events } = this.props;
        events = Object.values(events);

        return (
            <div className="home-page-wrapper">
                {/* <div className="home-hero"> /* </div> */}
                <div className="event-index-wrapper">
                    {/* <div className="home-search-container">
                        <h1>Find your next experience</h1>
                        <form className="home-search-form">
                            <input className="search-input-field" type="text" name="" id="" />
                            <input className="search-button" type="submit" />
                        </form>
                    </div> */}
                    <header className="event-index-header">{this.props.match.params.category}</header>
                    <div className="ei-grid">
                        {events.map(event => <CategoryIndexItem key={event.id} event={event} />)}
                    </div>
                </div>
            </div>
        )
    }

}



export default CategoryIndex;