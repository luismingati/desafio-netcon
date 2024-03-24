import React from 'react';
import { Outlet } from 'react-router-dom';

const NavLayout: React.FC = () => {
  return (
    <div>
      <h1>Nav layout</h1>
      <Outlet />
    </div>
  );
};

export default NavLayout;