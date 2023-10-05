import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';

const LoginPage = ({ history }) => {
  return (
    <div>
      <Route
        render={() => (
          <Login history={history} />
        )}
      />
    </div>
  );
};

export default LoginPage;
