import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from 'contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/auth/login' component={LoginPage} />
          <PrivateRoute path='/' component={HomePage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
