import EmptyBackground from 'app/components/EmptyBackground/EmptyBackground';
import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component?: any;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  children,
  ...rest
}) => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <EmptyBackground />;
        } else if (isLoggedIn) {
          return Component ? <Component {...props} /> : children;
        }

        return (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
