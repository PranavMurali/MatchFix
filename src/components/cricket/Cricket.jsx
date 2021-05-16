import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import cric from "./img/cric.jpg"
import "./styles.css"
const Cricket = () => {
    return (
        <Jumbotron fluid className="jumbo_bb">
        <Container>
            <h1>Cricket</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="Cricket"
                src={cric}
            />
            <Figure.Caption className="caption_img">
                The ground next to AB2 in VIT Chennai acts as the primary pitch. 
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Cricket
