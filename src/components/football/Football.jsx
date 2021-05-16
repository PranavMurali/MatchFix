import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import foot from "./img/foot.jpg"
import "./styles.css"
const Football = () => {
    return (
        <Jumbotron fluid className="jumbo_b">
        <Container>
            <h1>Football</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="Football"
                src={foot}
            />
            <Figure.Caption className="caption_im">
                Football fields in VIT chennai include a 7's and a 11's field.
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Football
