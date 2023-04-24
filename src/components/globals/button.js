import React from 'react';
import styled from 'styled-components';

const Button = ({text,callback, cursive}) => {
  if (callback === 'book'){
    return (
        <LinkWrap 
          href='https://www.schedulicity.com/scheduling/RBBNUR'
          target='_blank'
          rel="noreferrer"
          cursive={cursive}
        >{text}</LinkWrap>
      )
  }else{
    return (
        <BtnWrap 
          onClick={callback} 
          cursive={cursive}
        >{text}</BtnWrap>
      )
  }

 
}

export default Button


const BtnWrap = styled.button`
  width: fit-content;
  background-color: rgba(0,0,0,.5);
  border: 1px solid white;
  color: white;
  font-family: ${({cursive})=> cursive ? 'Bodoni72, cursive' : 'Palatino, Times, serif' };
  font-size: 1.5rem;

  ${({cursive})=> cursive ? `
    padding: .5rem .75rem;
  ` : `
    padding: .5rem 1rem;
    padding-top: .75rem;
  
  ` };

  
  /* margin: 0 auto; */

  cursor: pointer;

   &:hover{
     background-color: rgba(255,255,255,.2);
   
  }
`

const LinkWrap = styled.a`
  text-decoration: none;
  width: fit-content;
  background-color: rgba(0,0,0,.5);
  border: 1px solid white;
  color: white;
  font-family: ${({cursive})=> cursive ? 'Bodoni72, cursive' : 'Palatino, Times, serif' };
  font-size: 1.5rem;

  ${({cursive})=> cursive ? `
    padding: .5rem .75rem;
  ` : `
    padding: .5rem 1rem;
    padding-top: .75rem;
  
  ` };

  
  /* margin: 0 auto; */

  cursor: pointer;

   &:hover{
     background-color: rgba(255,255,255,.2);
   
  }
`