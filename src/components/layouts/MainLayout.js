import React from 'react';
import { Outlet } from 'react-router-dom';
import NAv from '../Navbar/NAv';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <div className="App overflow-clip">
      <NAv />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout; 