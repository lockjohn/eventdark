//this code adapted from: https://github.com/leandrowd/demo-react-responsive-carousel-es6

import React from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

// general styles
// import 'style!css!react-responsive-carousel/lib/styles/main.css';

// carousel styles
// import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

class HomeCarousel extends React.Component {
    render() {
       return (
            <Carousel showArrows={false} showThumbs={false} dynamicHeight={true} showIndicators={false} autoPlay interval={5000} infiniteLoop>
                <div>
                    <img src="https://s3-us-west-1.amazonaws.com/eventdarkphotos/westworld-s1-1920x1080.jpg" />
                </div>
                <div>
                    <img src="https://s3-us-west-1.amazonaws.com/eventdarkphotos/pic2.jpg" />    
                </div>
                <div>
                    <img src="https://s3-us-west-1.amazonaws.com/eventdarkphotos/canyon-daylight-desert-774123.jpg" />    
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