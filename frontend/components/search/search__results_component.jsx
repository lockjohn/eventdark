import React from 'react';
import {Link} from 'react-router-dom';
import CategoryIndexItem from '../category/category_index_item';


class SearchResults extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params)
        this.props.fetchAllEvents(this.props.match.params.category);
        window.scrollTo(0, 0);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.match.params.category != nextProps.match.params.category) {
    //         this.props.fetchAllEvents(nextProps.match.params.category);
    //         window.scrollTo(0, 0);
    //     }
    // }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <ul className="login-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        };
    }

    render() {
        let { events } = this.props;
        events = Object.values(events);

        if (!event) {
            <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>}
    else {
        return (
            <div className="home-page-wrapper">
                <div className="event-index-wrapper">
                    <header className="event-index-header">{this.props.match.params.category}</header>
                    <header className="event-index-header">{this.renderErrors()}</header>
                    <div className="ei-grid">
                        <ul>{events.map(event => <li><CategoryIndexItem key={event.id} event={event} /></li>)}</ul>
                    </div>
                    <header className="event-index-header">Browse by Top Categories</header>
                    <div className="cat-img-grid">
                        <Link to='/e/Aesthetic' className="cat-link">
                            <div className="cat-img-1">
                                <p> Aesthetic</p>
                                <span className="cat-text">Feast on sensuality, pleasure for all the senses </span>
                            </div>
                        </Link>

                        <Link to='/e/Rugged' className="cat-link">
                            <div className="cat-img-2">
                                <p>Rugged</p>
                                <span className="cat-text">Test your limits in the most extreme terrains </span>
                            </div>
                        </Link>

                        <Link to='/e/Violent' className="cat-link">
                            <div className="cat-img-3">
                                <p> Violent</p><span className="cat-text"> Only the brutal will survive </span>
                            </div>
                        </Link>

                        <Link to='/e/Culinary' className="cat-link">
                            <div className="cat-img-4">
                                <p> Culinary</p><span className="cat-text">Authentically recreated delights superbly executed for your palate</span>
                            </div>
                        </Link>
                        <Link to='/e/Linguistic' className="cat-link">
                            <div className="cat-img-5"><p> Linguistic</p><span className="cat-text">Exquisite linguisto-cultural detail </span>      </div>
                        </Link>
                    </div>
                </div>
            </div>
        )}
    }

}


export default SearchResults;