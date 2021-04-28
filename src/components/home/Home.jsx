import React from 'react'
import {Carousel} from 'react-bootstrap'
import foot from "./img/football.jpg"
import bball from "./img/bball.jpg"
import cricket from "./img/cricket.jpg"
const Home = () => {
    return (
        <Carousel className="Caro">
        <Carousel.Item style={{'height':"300px"}}>
            <img
            style={{'height':"300px"}}
            className="d-block w-100"
            src={foot}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Football</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"300px"}}>
            <img
            style={{'height':"300px"}}
            className="d-block w-100"
            src={cricket}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Cricket</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"300px"}}>
            <img
            style={{'height':"300px"}}
            className="d-block w-100"
            src={bball}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Basketball</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Home
