import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/camilo-jimenez-vGu08RYjO-s-unsplash.jpg';
import img2 from '../../Images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg'
import img3 from '../../Images/myriam-zilles-KltoLK6Mk-g-unsplash.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner-section'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height='400px'
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >"Ambulance"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height='400px'
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>"Heart-Beat"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height='400px'
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>"Medicine"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;