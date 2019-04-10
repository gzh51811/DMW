import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import One from './One.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/one'></Redirect>}></Route>
          <Route path="/one" component={One} />
        </Switch>
      </Router>
    );
  }
}

export default App;
