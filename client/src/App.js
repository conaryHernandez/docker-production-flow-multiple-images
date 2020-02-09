import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

console.log('app?');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page link</Link>
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
