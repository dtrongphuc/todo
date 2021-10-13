import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
// import { shallow, ShallowWrapper } from 'enzyme';
import PrivateRoute from '../PrivateRoute';
import { render } from '@testing-library/react';
import { AuthContext } from 'contexts/AuthProvider';
import { createMemoryHistory } from 'history';
import { defaultAuthHandler } from 'contexts/authHandler';

describe('private route', () => {
  let PrivateComponent: React.FC, PublicComponent: React.FC;

  beforeEach(() => {
    PrivateComponent = () => <div>Private content</div>;
    PublicComponent = () => <div>Public content</div>;
  });

  it('redirect if unauthenticated', () => {
    let history = createMemoryHistory({ initialEntries: ['/'] });
    let provider = {
      loading: false,
      error: null,
      authenticated: false,
      identity: null,
      authHandler: defaultAuthHandler,
      setAuthState: jest.fn(),
    };

    render(
      <Router history={history}>
        <AuthContext.Provider value={provider}>
          <Switch>
            <PrivateRoute exact path='/' component={PrivateComponent} />
            <Route exact path='/auth/login' component={PublicComponent} />
          </Switch>
        </AuthContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe('/auth/login');
  });
});
