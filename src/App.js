import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Subscribe from "./Components/Action/Subscribe";
import Home from "./Components/Dashboard/Home";
import Locationmap from './Components/Dashboard/Locationmap';
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subscribe/:email" component={Subscribe} />
            <Route exact path="/map" component={Locationmap} />
        </Switch>
    </Router>
  );
}

export default App;
