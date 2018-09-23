import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import ResultPage from './components/ResultPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component = {Homepage} />
            <Route exact path="/results/:searchTerm" component = {ResultPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
