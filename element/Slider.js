import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

function Slider({ imgs }) {
    // const [imgs, setImgs] = useState([]);
    return (
        <Carousel>
            {imgs.map((img, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-40" src={img} />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/move/pic2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/move/pic2.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default Slider;
