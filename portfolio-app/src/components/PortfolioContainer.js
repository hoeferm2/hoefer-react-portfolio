import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Blog') {
  //     return <Blog />;
  //   }
  //   return <Contact />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <div>
    //   <Header />
    //   <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    //   {renderPage()}
    //   <Footer />
    // </div>
  );
}
