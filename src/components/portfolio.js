import React from 'react';
import styled from 'styled-components';

import { Header, Text,SectionContainer } from './globals/styles';

const galleryPics = [
  {
    pic:'assets/gallery1.png',
    title:'Julio Rodrgiuez',
    description:'Centerfielder for Seatle Mariners',
    isHOF: true
  },
   {
    pic:'assets/gallery1.png',
    title: null,
    description: null,
    isHOF: false
  }
]

const Portfolio = () => {
  return (
    <SectionContainer id='portfolio' type={'grid'}>
      <Wrapper>
        <Header>Portfolio</Header>
        <Grid>

          {galleryPics.map((item, index)=>{
              return (<GridItem info={item} key={index}/>)
          })}

        </Grid>
      </Wrapper>
      </SectionContainer>
  )
}

export default Portfolio


const GridItem = ({info}) => {
  const {pic, title,description, isHOF} = info;
  return (
    <ItemContainer>
     {isHOF &&  <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>}
      <img src={pic} alt=''/>
    </ItemContainer>

  )
}



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`


const Grid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);


  @media screen and (min-width: ${({theme}) => theme.breakpoint.lg}){
    grid-template-columns: repeat(4, 1fr);
  }

   @media screen and (max-width: ${({theme}) => theme.breakpoint.sm}){
    grid-template-columns: repeat(2, 1fr);
  }

`

const ItemContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  height: min-content;

  overflow: hidden;


  div{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0, .85);
    backdrop-filter: blur(4px);
    z-index: 3;
    opacity: 0;
    padding: 1rem;

    display: grid;
    place-content: center;
    gap: .5rem;
    transition: opacity 400ms ease;


    h1{
      text-align: center;
      font-size: 1.5rem;
    }

    h3{
      text-align: center;
      font-size: 1rem;
    }


  }

  img{
    position: relative;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border: none;
    transition: all 300ms ease;

    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%);

  }


   &:hover{

      div{
        opacity: 1;
      transition: opacity 800ms ease 500ms;

      }


      img{
        filter: none;
        -webkit-filter:none;
      }
      
    }
`