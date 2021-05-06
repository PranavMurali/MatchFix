import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import more from "./img/more.jpg"
import "./styles.css"
const Games = () => {
    return (
        <Jumbotron fluid className="jumbo_bb">
        <Container>
            <h1>Fluid jumbotron</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="400x300"
                src={more}
            />
            <Figure.Caption className="caption_img">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Games
