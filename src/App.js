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
          <Regform />
        </Route>
        <Route path="/signup" exact>
          <Sigform />
        </Route>
      </Switch> 
    </Router>

  );
}

export default App;
