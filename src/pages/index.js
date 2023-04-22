import React from 'react';
import styled from 'styled-components';

import Nav from '../components/nav';
import Landing from '../components/landing';
import Services from '../components/services';
import About from '../components/about'


const Home = () => {
  return (
    <>
      <Landing/>
      <Nav/>
      <Services/>
      <About/>
     
    </>
  )
}

export default Home
