import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div id='home'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YZQCQwt/dog01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>YOUR PET’S BEST FRIEND</h3>
                        <p>Excellent pets deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle. Love is the best medicine.Excellent pets deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle. Love is the best medicine.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NTGBKXH/dog02.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>YOUR PET’S BEST FRIEND</h3>
                        <p>Excellent pets deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle. Love is the best medicine.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1bc8cpj/dog03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>YOUR PET’S BEST FRIEND</h3>
                        <p>Excellent pets deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle. Love is the best medicine.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeroSection;