import Regform from "./components/form/Regform";
import Sigform from "./components/userform/Signup";
import { Button} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navs from "./components/navbar/Navs";
function App() {
  return (
    <Router>
      <Navs></Navs>
      <Switch>
        <Route path="/" exact>
          <div><h1> Guest Registation</h1>
          <Regform />
          </div>  
        </Route>
        <Route path="/signup" exact>
          <div><h1> Signup</h1>
          <Sigform />
          </div> 
        </Route>
      </Switch> 
    </Router>

  );
}

export default App;
