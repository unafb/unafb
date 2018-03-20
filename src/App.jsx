import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route render={function notFound() {
              return <p>Not Found</p>;
            }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
