import {React} from 'react'
import {Jumbotron,Container,CardColumns,Card,Button} from 'react-bootstrap'
import './styles.css'
import {Link} from "react-router-dom"; 
import foot from "./img/football.jpg"
import bball from "./img/bball.jpg"
import cricket from "./img/cricket.jpg"
import more from "./img/more.jpg"
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

        <CardColumns>
        <Card>
            <Card.Img variant="top" src={foot} />
            <Card.Body>
            <Card.Title>Football</Card.Title>
            <Card.Text>
                Book football.
            </Card.Text>
            <Card.Footer>
            <Button>
            <Link to="/regbookslot" style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
            </Button>
            </Card.Footer>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={bball} />
            <Card.Body>
            <Card.Title>Basketball</Card.Title>
            <Card.Text>
                book Basketball.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button>
            <Link to="/regbookslot" style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
            </Button>
            </Card.Footer>
        </Card>

        <Card>
            <Card.Img variant="top" src={more} />
            <Card.Body>
            <Card.Title>More Sports</Card.Title>
            <Card.Text>
                Book more sports.
            </Card.Text>
            <Card.Footer>
            <Button>
            <Link to="/regbookslot" style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
            </Button>
            </Card.Footer>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={cricket} />
            <Card.Body>
            <Card.Title>Cricket</Card.Title>
            <Card.Text>
                Book cricket.
            </Card.Text>
            <Card.Footer>
            <Button>
            <Link to="/regbookslot" style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
            </Button>
            </Card.Footer>
            </Card.Body>
        </Card>

        </CardColumns>
    </>
    )
}

export default RegUserform