import React from 'react';
import styled from 'styled-components';

import Button from './globals/button';
import { IoLogoTiktok,IoLogoInstagram, IoMailOutline } from "react-icons/io5";


const info = {
  'contact info':{
    rows: [
      {
        text: '(863) 510 - 8219',
        type: 'phone',
        link: 'tel:+1863-510-8219'
      },
      {
        text: 'thisiskennycuts@gmail.com',
        type: 'email'
      },
      {
        text: '1053 S Florida Ave Lakeland, Florida',
        type: 'address',
        link:'https://goo.gl/maps/6piHuonwQLTVR1xm6'
      },
    ],
    buttons: [
      {
        name:'Book',
        icon: null,
        link: 'book'
      }
    ]
  },
  'hours': {
    rows: [
      {
        text: 'Subject To Change',
        type: 'text'
      },
      {
        text: 'Mon - Fri : 8am - 6pm',
         type: 'text'
      },
      {
        text: 'Sat - Sun : Off',
         type: 'text'
      },
    ],
    buttons: [
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

  }
}


const Footer = () => {
  return (
    <Container>
      { Object.keys(info).map((keyName,index)=>{
        return(
          <Wrapper key={index}>
            <h1>{keyName}</h1>

            {/* row text */}
            <div> 
              {info[keyName].rows.map((data, jndex)=>{

                if(data.type === 'text'){
                   return <h5 key={jndex}>{data.text}</h5>
                }else if(data.type === 'email'){
                  return <a 
                  href={`mailto:${data.text}?subject=Barbershop Questions`}
                  target='_blank' rel="noreferrer"
                  ><h5 key={jndex}>{data.text}</h5></a>
                } 
                else{
                   return <a href={data.link} target='_blank' rel="noreferrer"><h5 key={jndex}>{data.text}</h5></a>
                }
               
                
              })}
            </div>

              {/* bottom buttons */}
              <span>
              {info[keyName].buttons.map((data, kndex)=>{
                if(data.name=== "Book"){
                  return(
                    <Button key={kndex} text={'Book'} callback={'book'}/>   
                  )
                }else{
                  return(
                    <a key={kndex} target='_blank' rel="noreferrer" href={data.link}>{
                      <data.icon size={38}/>}
                      </a>
                  )
                }
              })}
              </span>
            
          </Wrapper>
        )
      })}
    </Container>
  )
}

export default Footer


const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: black;

`

const Wrapper = styled.div`
  min-width: 350px;
  margin: 4rem;
  z-index: 20;


  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: ${({theme}) => theme.breakpoint.sm}){
        margin: 2rem;
    }

  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    a{
      text-decoration: none;
    }

     h5{
      font-size: 1.25rem;
      line-height: 1.25rem;
      text-align: center;
      font-weight: normal;

      @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
        font-size: 1rem;
        line-height: 1rem;
      }
    }

  }

  h1{
    font-size: 2.25rem;
    line-height: 2.25rem;
    text-transform: capitalize;
    font-weight: 100;
    text-align: center;

    @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
  }

 

  span{
    /* outline: purple 1px solid; */
    display: flex;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;
   
 


    svg{
      cursor: pointer;
      color: white;

    }
  }
`