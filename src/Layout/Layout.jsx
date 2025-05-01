import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumb from '../Components/Common/BreadCrumb/Breadcrumb';

const Layout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
