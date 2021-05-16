import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import more from "./img/more.jpg"
import "./styles.css"
const Games = () => {
    return (
        <Jumbotron fluid className="jumbo_bb">
        <Container>
            <h1>More Games</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="Games"
                src={more}
            />
            <Figure.Caption className="caption_img">
                Sports available in VIT Chennai include, Table Tennis, Volleyball, Badminton and Hockey.
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Games
