import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Button from './globals/button';

import { IoLogoTiktok,IoLogoInstagram, IoMailOutline } from "react-icons/io5";

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

const Landing = () => {
  return (
   <Container id='home'>
      <Wrapper>
        <span style={{flex: '2'}}></span>

        <h1>KennyCuts</h1>
        <h3>Kenny Espinosa<br/>est 2018</h3>
        <Button text={'Book Now'} callback={'book'}/>

        <span style={{flex: '2'}}></span>

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
  height: calc(100vh - 75px);
  /* background-color: rgba(255,0,0,.5); */
  position: relative;

   @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
   height:100vh;
 }
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
  padding: 25px 1rem;


  @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
     gap: 15px;
  }

 

  h1{  
     filter: ${({theme}) => theme.dropShadow};
    -webkit-filter: ${({theme}) => theme.dropShadow};
  
    font-size: 5rem;
    line-height: 3rem;
    padding-top: 1rem;
    font-weight: 100;
    font-family: Palatino;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1rem;
     padding-left: 1rem;

    @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
      font-size: 3rem;
      line-height: 1.5rem;
      padding-top: .75rem;
      letter-spacing: .75rem;
      padding-left: .75rem;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
      font-size: 2.25rem;
      line-height: 1.75rem;
      padding-top: .5rem;
      letter-spacing: .5rem;
      padding-left: .5rem;
      
    }
  }

  h3{
     filter: ${({theme}) => theme.dropShadow};
    -webkit-filter: ${({theme}) => theme.dropShadow};

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
     filter: ${({theme}) => theme.dropShadow};
    -webkit-filter: ${({theme}) => theme.dropShadow};
    

    a{
      border: none;
      background-color: transparent;
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