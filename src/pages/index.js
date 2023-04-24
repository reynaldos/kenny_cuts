import React from 'react';

import Nav from '../components/nav';
import Landing from '../components/landing';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';




const Home = () => {
  return (
    <>
      <Landing/>
      <Nav/>
      <Services/>
      <About/>
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
