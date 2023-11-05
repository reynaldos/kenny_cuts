import React from 'react';
import styled from 'styled-components';

import { Header, Text,SectionContainer } from './globals/styles';

const galleryPics = [
  {
    pic:'julio.webp',
    title:'Julio Rodrgiuez',
    description:'CF for Seattle Mariners 2022 Rookie of the Year',
    isHOF: true
  },
  {
    pic:'willi.webp',
    title:'Willi Castro ',
    description:'OF for Minnesota Twins',
    isHOF: true
  },
  {
    pic:'nomar.webp',
    title:'Nomar Mazara',
    description:'OF for Baltimore Orioles ',
    isHOF: true
  },
  {
    pic:'akil.webp',
    title:'Akil Baddoo',
    description:'OF for Detroit Tigers',
    isHOF: true
  },
  {
    pic:'jeimer.webp',
    title:'Jeimer Candelario',
    description:'3B for Washington Nationals ',
    isHOF: true
  },
  {
    pic:'riley.webp',
    title:'Riley Green',
    description:'CF for Detroit Tigers ',
    isHOF: true
  },
  {
    pic:'amed.webp',
    title:'Amed Rosario',
    description:'SS for Cleveland Guardians ',
    isHOF: true
  },
  {
    pic:'terrance.webp',
    title:'Terrance Ross',
    description:'SG for Phoenix Suns',
    isHOF: true
  },
  //  {
  //   pic:'assets/gallery1.png',
  //   title: null,
  //   description: null,
  //   isHOF: false
  // }
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
      <img src={`assets/gallery/${pic}`} alt=''/>
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
      cursor: pointer;
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