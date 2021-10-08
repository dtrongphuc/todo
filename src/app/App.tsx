import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthProvider from 'contexts/AuthProvider';
import MainLayout from 'layouts/MainLayout';
import TasksPage from './pages/TasksPage/TasksPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CompletedPage from './pages/CompletedPage/CompletedPage';
import ImportantPage from './pages/ImportantPage/ImportantPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/auth/login' component={LoginPage} />
          <PrivateRoute path='/'>
            <MainLayout>
              <PrivateRoute exact path='/' component={TasksPage} />
              <PrivateRoute exact path='/completed' component={CompletedPage} />
              <PrivateRoute exact path='/important' component={ImportantPage} />
              <PrivateRoute exact path='/search' component={SearchPage} />
            </MainLayout>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
