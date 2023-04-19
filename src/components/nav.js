import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import logo from '../assets/kennyLogo.png'


const link = [
 {
  id:'services',
  label:'Services'
 },
 {
  id:'about',
  label:'About'
 },
 {
  id:'portfolio',
  label:'Portfolio'
 },
 {
  id:'contact',
  label:'Contact'
 },
]


const Nav = () => {

  // const [scrolled,setScrolled]= useState(false);

  // const handleScroll=() => {
  //     const offset=window.scrollY;
  //     if(offset > 200 ){
  //       setScrolled(true);
  //       console.log('scrolled')
  //     }
  //     else{
  //        console.log('not scrolled')
  //       setScrolled(false);
  //     }
  //   }

  // useEffect(() => {
  //   window.addEventListener('scroll',handleScroll);
  //   return ()=>{
  //      window.removeEventListener('scroll',handleScroll);
  //   }
  // })

  return (
      <Container 
      // scrolled={scrolled}
      >
        <Wrapper>

          <LogoWrap>
            <img src={logo} alt=''/>
          </LogoWrap>

          <div>
            {link.map((value, index) => <NavBtn key={index} className='navText'>{value.label}</NavBtn>)}
          </div>

            
        </Wrapper>
      </Container>
  )
}

export default Nav


const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgba(0,0,0,.75);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  z-index: 5;

  /* ${({scrolled})=> scrolled ?
  `
    position: fixed;
    top: 0;
    left: 0;  
  `
  :''} */

`


const Wrapper = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    gap: 20px;
  }

`


const NavBtn = styled.button`
  background-color: transparent;
  /* border: 1px solid white; */
  border: none;
  cursor: pointer;

  &:hover{

  }

`

const LogoWrap = styled.button`
  height: 75%;
  padding: 0;
  border: 1px white solid;
  cursor: pointer;

  img{
    height: 100%;
  }
`