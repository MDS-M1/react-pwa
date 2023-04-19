import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../parts';

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};