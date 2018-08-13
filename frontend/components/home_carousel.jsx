//this code adapted from: https://github.com/leandrowd/demo-react-responsive-carousel-es6

import React from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

// general styles
import 'style!css!react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel showArrows={false} autoPlay interval={1000} infiniteLoop>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/1/" />
                    
                </div>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/2/" />
                    
                </div>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/3/" />
                    
                </div>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/4/" />
                    
                </div>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/5/" />
                   
                </div>
                <div>
                    <img src="http://lorempixel.com/900/500/sports/6/" />
                    
                </div>
            </Carousel>
        );
    }
}

export default HomeCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls