import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from 'pages/Login/LoginPage';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/auth/login' component={LoginPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
