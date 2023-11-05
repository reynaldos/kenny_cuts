import React from 'react';
import styled from 'styled-components';

import { Header, Text,SectionContainer } from './globals/styles';

const info = {
  body: ["Hi, I'm Kenny Espinosa, a professional barber based in Central Florida. I take pride in providing exceptional grooming services to my clients, and I offer house calls for their convenience.", "As an MLB barber, I've had the privilege of working with top athletes, honing my skills and techniques to meet their exacting standards. In addition, I co-own a barber shop called \"The Neighborhood Studio\", where I welcome clients to experience a premium grooming experience."],
  pic:'assets/about.webp',
}

const About = () => {
  return (
    <SectionContainer id='about'>
      <Wrapper>
        <Header>About</Header>
        <span>
          { info.body.map((data, index)=>{
                    return  <Text key={index}>{data}</Text>
                  })}
        </span>
        
        <img src={info.pic} alt='Kenny Espinosa'/>
      </Wrapper>
      </SectionContainer>
  )
}

export default About



const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img{
    object-fit: contain;
    width: clamp(340px, calc(100% - 2rem), 800px);


    border: 2px solid white;
    border-radius: ${({theme}) => theme.borderRadius};
    margin: 2rem auto;

     -webkit-filter: grayscale(100%); 
    filter: grayscale(100%);
  }

  p{
    margin-bottom: 1rem;
    padding: 0 5rem;
    @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
        padding: 0 2rem;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoint.sm}){
        padding: 0;
      }
        
  }

  @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
      width: calc(100% - 2rem);
    }
`