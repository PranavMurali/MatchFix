import {React} from 'react'
import {Jumbotron,Container,CardColumns,Card,Button} from 'react-bootstrap'
import './styles.css'
import {Link} from "react-router-dom"; 
import foot from "./img/football.jpg"
import bball from "./img/bball.jpg"
import cricket from "./img/cricket.jpg"
import more from "./img/more.jpg"
import {useStateValue} from "../../StateProvider";
const RegUserform = ({regid,startTime,endTime}) => {
    const[{user,sport,fields},dispatch] = useStateValue();
    const bookfoot = ()=>{
        dispatch({
            type:"SET_SPORT",
            data:"Football",
            list:["7's ground", "11's ground"],
        },[sport])
    }

    const bookcric = ()=>{
        dispatch({
            type:"SET_SPORT",
            data:"Cricket",
            list:["Hill side", "AB2"],
        },[sport])
    }

    const bookbb = ()=>{
        dispatch({
            type:"SET_SPORT",
            data:"Basketball",
            list:["Hostel court","Main court"],
        },[sport])
    }  

    const bookmore = ()=>{
        dispatch({
            type:"SET_SPORT",
            data:"More games",
        },[sport])
    }  

    console.log(fields)


    return (
        <>
        <Jumbotron fluid className="jumbo_reged">
        <Container className="con_text">
            <h1>Hello, {!user ? 'user' : user.email}</h1>
            <p>
            This is your personal slot booking screen.
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
            <Button variant="success">
            <Link to="/regbookslot" onClick={bookfoot} style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
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
            <Button variant="success">
            <Link to="/regbookslot" onClick={bookbb} style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
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
            <Button variant="success">
            <Link to="/regbookslot"  onClick={bookmore} style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
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
            <Button variant="success">
            <Link to="/regbookslot" onClick={bookcric} style={{textDecoration: "none",color:"white" }}>Book Slot</Link>
            </Button>
            </Card.Footer>
            </Card.Body>
        </Card>

        </CardColumns>
    </>
    )
}

export default RegUserform
