import React from 'react';
import { Header,Text } from './globals/styles';
import styled from 'styled-components';

const serviceInfo = [
  {
    title: 'Hair Cut',
    price: '40',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Hair Cut & Beard',
    price: '40',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Clean Up',
    price: '40',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]


const Services = () => {
  return (
    <Container>
       <Header>Services</Header>

      <Wrapper>
        {serviceInfo.map((info, index)=>{
          return (
          <div>
            <h5>{info.title}</h5>
            <h3>${info.price}</h3>
            <Text>{info.body}</Text>
          </div>)
        })}

      </Wrapper>
      </Container>
  )
}

export default Services


const Container = styled.main`
  width: 100%;
  /* outline: 1px red solid; */

`

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;


  div{  
      background-color: rgba(0,0,0,.25);
      backdrop-filter: blur(4px);
      width: 300px;
      height: 300px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
 
      align-items: center;
      border: 2px solid white;
      border-radius: 2px;



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
    }

      @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
       width: calc(100% - 2rem);
      }
   

  }

`