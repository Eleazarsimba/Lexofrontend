import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import screenshot1 from '../../Images/image7.png'
import screenshot2 from '../../Images/image5.png'
import screenshot3 from '../../Images/image6.png'
const Mycarousel1 = () => {
    return (
        <div className="carouselpage">
            <Carousel>
                <Carousel.Item>
                    <img
                    // className="d-block w-100"
                    src={screenshot1} width="100%" height="auto"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    // className="d-block w-100"
                    src={screenshot2} width="100%" height="auto"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    // className="d-block w-100"
                    src={screenshot3} width="100%" height="auto"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Mycarousel1
