import React from 'react';
import PageDetails_Header from '../components/comman/PageDetails_Header';
import { Outlet } from 'react-router-dom';

const HeaderPageRough: React.FC = () => {
  return (
    <>
      <PageDetails_Header />
      <Outlet />
    </>
  );
};

export default HeaderPageRough;
