import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from 'contexts/AuthProvider';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MainLayout from 'layouts/MainLayout';
import TasksPage from './pages/TasksPage/TasksPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/auth/login' component={LoginPage} />

          <PrivateRoute path='/'>
            <MainLayout>
              <Switch>
                <PrivateRoute exact path='/' component={TasksPage} />
                <PrivateRoute exact path='/search' component={SearchPage} />
              </Switch>
            </MainLayout>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
