import {React} from 'react'
import {Jumbotron,Container,Figure} from 'react-bootstrap'
import './styles.css'
import foot from "./football.jpg"
import bball from "./bball.jpg"
import cricket from "./cricket.jpg"
const RegUserform = () => {
    return (
        <>
        <Jumbotron fluid className="jumbotron">
        <Container>
            <h1>Hello registered user!</h1>
            <p>
            This is your personal reg.
            </p>
        </Container>
        </Jumbotron>
        <div>
            <Figure>
                <Figure.Image
                    className="Fig"
                    width={400}
                    height={400}
                    alt="171x180"
                    src={foot}
                />
            </Figure>
        </div>

        <div>
            <Figure>
                <Figure.Image
                    className="Fig"
                    width={400}
                    height={400}
                    alt="171x180"
                    src={bball}
                />
            </Figure>
        </div>

        <div>
            <Figure>
                <Figure.Image
                    className="Fig"
                    width={400}
                    height={400}
                    alt="171x180"
                    src={cricket}
                />
            </Figure>
        </div>
    </>
    )
}

export default RegUserform
