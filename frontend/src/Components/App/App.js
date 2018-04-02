import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>

          <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
