import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <Header />
      <Hero />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
