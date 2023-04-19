import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Button from './button'

const Landing = () => {
  return (
   <Container>
      <Wrapper>
        <h1>KennyCuts</h1>
        <h3>Kenny Espinosa<br/>est 2018</h3>
        <Button text={'Book Now'} callback={null}/>

        <span>
          <div>Email</div>
          <div>Insta</div>
          <div>Tiktok</div>
        </span>
      </Wrapper>

      <Imgcarousel>

      <CustomCarousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
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
  height: 100vh;
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

  display: grid;
  place-content: center;
  gap: 20px;
  text-align: center;
  color: white;

  h1{
    font-size: 5rem;
    font-weight: 100;
    font-family: Palatino;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  h3{
    font-family: "Bodoni72", cursive;
    font-size: 1.5rem;
    font-weight: 100;
  }

  span{
    display: flex;
    justify-content: center;
    gap: 15px;
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