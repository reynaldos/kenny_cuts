import React,{useEffect} from 'react'
import styled from 'styled-components'

export const LoadingWheel = ({email}) => {
  const {emailState,setEmailState} = email;

  useEffect(()=>{
    if(emailState === 'sent' || emailState === 'error')
    setTimeout(() => {
       setEmailState('idle')
    }, 2000);
  },[emailState]);


  return (
    <Container>

      {emailState === 'loading' ?
      
      <Wrapper>
        <Square class="square" id="sq1"/>
        <Square class="square" id="sq2"/>
        <Square class="square" id="sq3"/>
        <Square class="square" id="sq4"/>
        <Square class="square" id="sq5"/>
        <Square class="square" id="sq6"/>
        <Square class="square" id="sq7"/>
        <Square class="square" id="sq8"/>
        <Square class="square" id="sq9"/>
      </Wrapper> 
      :
      <Label><h2>{emailState}</h2></Label>
      }


    </Container>
  )
}


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  /* background-color: black; */
`

const Wrapper =styled.div`

  animation: grow .2s 1;

 @keyframes grow {
    from {
      transform: scale(0);
    }

    to {
     transform: scale(1);
    }
}
`


const Square = styled.div`
  background: white;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -5px;

   filter: drop-shadow(0px 0px 4px #000);
    -webkit-filter: drop-shadow(0px 0px 4px #000);
     will-change: filter;
`


const Label = styled.div`
    z-index: 5;
    width: fit-content;
    background-color: rgba(0,0,0,.95);
    border: 1px solid white;
    padding: .5rem 1rem;
    padding-top: .75rem;
    transition: 
      transform .25s ease;
    border-radius: 1.5px;
    /* width: 25%; */

    &:hover{
        transform-origin:center;
        transform: scale(1.05);
    }


   h2{
    width: min-content;
    margin: auto;
    text-transform: uppercase;
     color: white;
    font-family: Palatino, Times, serif;
    font-size: 1.5rem;
    text-align: center;
    color: white;
   }

  animation: grow 1.5s 1;
  transform-origin: center;
  animation-fill-mode: forwards;

  @keyframes grow {
    0% {
      scale: 0;
    }
    20% {
      scale: 1;
    }
    90% {
      scale: 1;
    }100% {
      scale: 0;
    }

  }
`