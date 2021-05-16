import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import bball from "./img/bball.jpg"
import "./styles.css"
const Basket = () => {
    return (
        <Jumbotron fluid className="jumbo_bb">
        <Container>
            <h1>Basketball</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="Basketball"
                src={bball}
            />
            <Figure.Caption className="caption_img">
                Basketball courts in VIT Chennai are the Hostel Court and Main court. 
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Basket
