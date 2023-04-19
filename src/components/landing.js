import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Button from './button';

import { IoLogoTiktok,IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const Landing = () => {
  return (
   <Container>
      <Wrapper>
        <span style={{flex: '2'}}></span>

        <h1>KennyCuts</h1>
        <h3>Kenny Espinosa<br/>est 2018</h3>
        <Button text={'Book Now'} callback={null}/>

        <span style={{flex: '2'}}></span>

        <span>
          <div><IoMailOutline size={'100%'}/></div>
          <div><IoLogoInstagram size={'100%'}/></div>
          <div><IoLogoTiktok size={'100%'}/></div>
        </span>
       
      </Wrapper>

      <Imgcarousel>

      <CustomCarousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        transitionTime={500}
        interval={4000}
      >
          <div>
              <img src="assets/pic1.png" alt='pic1'/>
          </div> 
          <div>
              <img src="assets/pic1.png" alt='pic1'/>
          </div> 
          <div>
              <img src="assets/pic1.png" alt='pic1'/>
          </div>
        </CustomCarousel>
      
      </Imgcarousel>
    </Container>
  )
}

export default Landing


const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  /* background-color: rgba(255,0,0,.5); */
  position: relative;
  

`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  color: white;
  padding: 25px 0;

  @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
     gap: 15px;
  }

  * {
    filter: ${({theme}) => theme.dropShadow};
    -webkit-filter: ${({theme}) => theme.dropShadow};


  }

  h1{  
  
    font-size: 5rem;
    line-height: 3rem;
    padding-top: 1rem;
    font-weight: 100;
    font-family: Palatino;

    text-transform: uppercase;
    letter-spacing: 1rem;

    @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
      font-size: 3rem;
      line-height: 1.5rem;
      padding-top: .75rem;
      
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
      font-size: 2.5rem;
      line-height: 1.5rem;
      padding-top: .5rem;
      letter-spacing: .75rem;
      
      
    }
  }

  h3{
    font-family: "Bodoni72", cursive;
    font-size: 1.5rem;
    font-weight: 100;

     @media screen and (min-width: ${({theme}) => theme.breakpoint.lg}){
      font-size: 2rem;
    }
  }

  span{
    display: flex;
    justify-content: center;
    gap: 15px;

    div{
      width: 45px;
      height: 45px;
      cursor: pointer;

      @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
        width: 40px;
        height: 40px;
      }
    }
  }

`

const Imgcarousel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`
const CustomCarousel = styled(Carousel)`

  img{
    object-fit: cover;
    object-position: 60%;
    height: 100vh;
  }

`