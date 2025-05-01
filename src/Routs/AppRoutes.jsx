import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Analytics from '../Pages/Analytics/Analytics';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Verification from '../Pages/Verification/Verification';
import AllTransactions from '../Pages/AllTransactions/AllTransactions';

const AppRoutes = () => {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <div>Login Page</div>
            </PublicRoute>
          }
        />
        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/yearly' element={<h1>Yearly Reports</h1>} />
          <Route path='/yearly/:id' element={<h1>Particullar Transactions</h1>} />
          <Route path='/all-transaction' element={<AllTransactions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
