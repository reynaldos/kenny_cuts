import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
import { IoLogoTiktok,IoLogoInstagram, IoMailOutline } from "react-icons/io5";


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


const info= [
  {
    link:'thisiskennycuts@gmail.com'
  },
   {
        name:'Instagram',
        icon: IoLogoInstagram,
        link: 'https://instagram.com/kenny.cuts?igshid=YmMyMTA2M2Y='
      },
       {
        name:'TikTok',
        icon: IoLogoTiktok,
        link: 'https://www.tiktok.com/@kenny.cuts?_t=8biO1SjA5ec&_r=1'
      }
]



const Nav = () => {

  const [scrolled,setScrolled]= useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
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

  const toggleNav = () =>{
    
    if(!isOpen){
      disableScroll();
    }else{
      enableScroll();
    }
    
    setIsOpen(oldVal => !oldVal);
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return ()=>{
       window.removeEventListener('scroll',handleScroll);
    }
  })

  return (
    <>
    {/* desktop */}
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
            offset={-75} 
            onClick={isOpen ? toggleNav : ()=>{}}>
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
                    offset={index===0? 0:-75} >
                      <NavBtn>
                          {value.label}
                      </NavBtn> 
                </LinkS>
              )})}
            
            {scrolled && <Button text={'Book'} cursive={true} callback={'book'}/>}
          </BtnWrap>

          {/* hamburger */}
          <BtnWrap type={'mobile'} onClick={toggleNav}>
            <div>
              <RxHamburgerMenu color='white' size={'100%'}/>
            </div>
          </BtnWrap>


            
        </Wrapper>
      </Container>

      {/* mobile */}
        <MobileNav isOpen={isOpen}>
          <div>
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
                    offset={-75}
                     onClick={toggleNav}>
                      <NavBtn>
                          {value.label}
                      </NavBtn> 
                </LinkS>
              )})}
          </div>
          
          <span style={{height:'auto' }}>
            <Button text={'Book Now'} cursive={true} callback={'book'}/>
          </span>

          <span>
              <a 
                  href={`mailto:${info[0].link}?subject=Barbershop Questions`}
                target='_blank' rel="noreferrer"><IoMailOutline size={'100%'}/></a>
              <a
                href={info[1].link}
                target='_blank' rel="noreferrer"
              ><IoLogoInstagram size={'100%'}/></a>
              <a
                href={info[2].link}
                target='_blank' rel="noreferrer"
              ><IoLogoTiktok size={'100%'}/></a>
            </span>
      </MobileNav>
      
    </>
     


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



 @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
   position: fixed;
    top: 0;
    left: 0;
 }

`

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({isOpen})=> isOpen ? '0%':'100%'};
  z-index: 4;
  width: 100%;
  height: 100vh;
  transition: all 400ms ease;
  background-color: rgba(0,0,0,.99);
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;


  div{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    button{
      padding: 1rem 0;
      width: 100vw;
    }
  }

  span{
    

    display: flex;
    justify-content: center;
    gap: 20px;
    width: 50vw;
    height: 48px;
    margin-bottom: 20px;

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

const disableScroll = () => {
      // Get the current page scroll position
      var scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
  }
          
const enableScroll = () => {
    window.onscroll = function() {};
}