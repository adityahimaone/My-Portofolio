import React from 'react';
import Navbar from '@/components/UI/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="dark:bg-accentDark">
        <Outlet />
      </main>
    </>
  );
}
