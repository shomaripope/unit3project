import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Members from './components/Members';
import Member from './components/Member';
import Homepage from './components/Homepage';
import LocationsList from './components/LocationsList';


class App extends Component {
  state = {
    memberList: []
}
  render() {

    return (
      <div>

        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/members" component={Members}/>
            <Route exact path="/members/:memberId" component={Member}/>
            <Route exact path="/locations" component={LocationsList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
