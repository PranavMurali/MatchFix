import {React} from 'react'
import foot from "./img/Footbal.svg"
import {useStateValue} from "../../StateProvider"
import "./styles.css"
import {Button,Card} from "react-bootstrap"
import ring from "./img/Ring.svg"
import github from "./img/github.jpg"
const Home = () => {
    const[{user}]=useStateValue();
    return (
        <>
        <span class="p2">Fixing your matches</span>
        <h1 className="p1">
            Never miss a match!
        </h1>
        <div className="butmain"><Button style={{backgroundColor:"rgba(0, 79, 152, 1)"}} href={!user ? "/login" :"/userbooking"} >Play Now!</Button></div>
        <div className="imghome">
            <img src={foot} alt="Home" />
        </div>
        <div className="lefthome">
        <span class="p3">Sports Resource and equipment management using the power of the web.
        Using web application technology to allow you to play your favourite sport at your own university without having to come in close contact with sports faculty.
        the application also simplifies the logging and management process for the faculty as they can maintian a log of the resources used without having
        to use traditional pen and paper methods.</span>
        </div>

        <div className="ringcenter">
            <img src={ring} alt="ring"/>
        </div>
        <div className="righthome">  
        <Card border="light" bg="dark" style={{ width: '18rem' }} className="cardlink">
        <Card.Img variant="top" src={github}/>
        <Card.Body>
            <Card.Title style={{color: "white"}}>Github</Card.Title>
            <Button variant="primary" href="https://github.com/PranavMurali/MatchFix" target="_blank" rel="noopener noreferrer">Repository</Button>
        </Card.Body>
        </Card>
        <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
        </div>

    </>
    )
}

export default Home
