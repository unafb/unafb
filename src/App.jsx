import { Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import history from './history';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Calendar from './components/Calendar';
import MyBudget from './components/MyBudget';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/mybudget" component={MyBudget} />
            <Route render={() =>
              <p>Not Found</p>
            }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
