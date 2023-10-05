import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

const DashboardPage = () => {
  return (
    <div>
      <Route
        render={() => (
          <Dashboard />
        )}
      />
    </div>
  );
};

export default DashboardPage;
