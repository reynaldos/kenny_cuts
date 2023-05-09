import React from 'react';
import { SectionContainer, Header,Text } from './globals/styles';
import styled from 'styled-components';

const serviceInfo = [
  {
    title: 'Hair Cut',
    price: '35',
    body: "Men's haircuts can vary widely in terms of length, style, and technique, with popular options including the buzz cut, crew cut, undercut, fade, pompadour, side part, and textured crop."
  },
  {
    title: 'Hair Cut & Beard',
    price: '40',
    body: "In addition to haircuts, I also offer beard grooming services, with your haircut experience which includes trimming, shaping, and styling of facial hair."
  },
  {
    title: 'Clean Up',
    price: '25',
    body: 'A "clean up" is a grooming service for men that tidies up the hair around the neck, sideburns, and hairline using clippers or trimmers without fading or changing the hair length significantly.'
  },
]


const Services = () => {
  return (
    <SectionContainer id='services'>
       <Header>Services</Header>

      <Wrapper>
        {serviceInfo.map((info, index)=>{
          return (
          <div key={index}>
            <h5>{info.title}</h5>
            <h3>${info.price}</h3>
            <Text style={{flex:'1.5'}}>{info.body}</Text>
          </div>)
        })}

      </Wrapper>
      </SectionContainer>
  )
}

export default Services



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;



  div{  
   
      /* flex-grow: 1;  */
      background-color: rgba(0,0,0,.25);
      backdrop-filter: blur(4px);
      width: 325px;
      min-height: 400px;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
 
      align-items: center;
      border: 2px solid white;
      border-radius: ${({theme}) => theme.borderRadius};



    h5,h3{
      font-family: Palatino, 'Times New Roman', Times, serif;
      text-align: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 100;
      color: white;
    }

     h3{
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin: 1.5rem auto;
        flex: 2;
        display: flex;
        align-items: center;

        
    }

      @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
       width: calc(100% - 2rem);
        min-height: auto;
       height: 300px;



       h5{
        font-size: 1.5rem;
        line-height: 1.5rem;

       }
       h3{
        font-size: 2rem;
        line-height: 2rem;
       }
      }
   

  }

`