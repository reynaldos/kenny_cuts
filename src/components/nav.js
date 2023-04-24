import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'


import Button from './globals/button';
import logo from '../assets/kennyLogo.png';


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

  // const goto = (e, location) =>{
  //   e.preventDefault();

  //   scroll.scrollTo()
  // }

  const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
      const offset=window.scrollY;
      const hieght = window.innerHeight
      // console.table(offset, hieght)

      if(offset  > (hieght - 75)){
        setScrolled(true);
        // console.log('scrolled')
      }
      else{
        // console.log('not scrolled')
        setScrolled(false);
      }
    }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return ()=>{
       window.removeEventListener('scroll',handleScroll);
    }
  })

  return (
      <Container 
      scrolled={scrolled}>

        <Wrapper>

          <LinkS
            style={{height:'80%'}}
            to={'home'} 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact={'true'} 
            activeClass='active'
            offset={-75} >
               <LogoWrap>
                  <img src={logo} alt=''/>
                </LogoWrap>
          </LinkS>
         

          {/* nav btns */}
          <BtnWrap type={'desktop'}>
            {link.map((value, index) => {
              return(
                 <LinkS
                    key={index}
                    to={value.id} 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact={'true'} 
                    activeClass='active'
                    offset={-75}>
                      <NavBtn>
                          {value.label}
                      </NavBtn> 
                </LinkS>
              )})}
            
            {scrolled && <Button text={'Book'} cursive={true} callback={'book'}/>}
          </BtnWrap>

          {/* hamburger */}
          <BtnWrap type={'mobile'}>
            <div>
              <RxHamburgerMenu color='white' size={'100%'}/>
            </div>
          </BtnWrap>


            
        </Wrapper>
      </Container>
  )
}

export default Nav


const Container = styled.nav`
  width: 100%;
  height: 75px;
  background-color: rgba(0,0,0,.75);
  backdrop-filter: blur(4px);
  position: relative;
  /* bottom: 60px; */
  z-index: 5;

  ${({scrolled})=> scrolled === true ?
  `
    position: sticky;
    top: 0;
    left: 0;
  `
  :''}



 @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
   position: fixed;
    top: 0;
    left: 0;
 }

`


const Wrapper = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`


const NavBtn = styled.button`
  background-color: transparent;
  /* border: 1px solid white; */
  border: none;
  cursor: pointer;

  padding: .25rem .5rem; 

  font-family: "Bodoni72", cursive;
  color: white;
  font-size: 1.75rem;

  &:hover{
    background-color: rgba(255,255,255,.1);
    outline: 1px white solid;
  }

` 

const LogoWrap = styled.button`
  height: 100%;
  padding: 0;
  border: 1px white solid;
  cursor: pointer;

  img{
    height: 100%;
  }
`


const BtnWrap = styled.div`
  display: none;
  gap: 20px;
  height: 100%;

  ${({type, theme})=>type === 'desktop' ? `

    @media screen and (min-width: ${theme.breakpoint.md}){
       display: flex;
       height: min-content;
      justify-content: space-between;
      }


   
  
  `:`
   @media screen and (max-width: ${theme.breakpoint.md}){
       display: flex;
       align-items: center;
      justify-content: flex-start;
      }


     @media screen and (max-width: ${theme.breakpoint.xs}){
       aspect-ratio:1;
      }

  
  `}


div{
  height: 80%;
  padding: .5rem;
   
  cursor: pointer;
}

`