import React from 'react';
import styled from 'styled-components';

import Nav from '../components/nav';
import Landing from '../components/landing';
import Services from '../components/services';


const Home = () => {
  return (
    <>
      <Landing/>
      <Nav/>
      <Services/>
    <Cntainer/>
     
    </>
  )
}

export default Home


const Cntainer = styled.div`
  height: 900px;
  width: 100%;
  background-color: transparent;
`