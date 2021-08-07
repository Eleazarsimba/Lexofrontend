import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Subscribe from "./Components/Action/Subscribe";
import Home from "./Components/Dashboard/Home";
import Locationmap from './Components/Dashboard/Locationmap';
import Loginform from "./Components/Management/Loginform";
import Sendmail from "./Components/Management/Sendmail";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subscribe/:email" component={Subscribe} />
            <Route exact path="/map" component={Locationmap} />
            <Route exact path="/loginform" component={Loginform} />
            <Route exact path="/sendtoall" component={Sendmail} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </Router>
  );
}

export default App;
