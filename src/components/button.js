import React from 'react';
import styled from 'styled-components';

const Button = ({text,callback}) => {
  return (
    <BtnWrap onClick={callback}>{text}</BtnWrap>
  )
}

export default Button


const BtnWrap = styled.button`
  width: fit-content;
  background-color: rgba(0,0,0,.5);
  border: 1px solid white;
  color: white;
  font-family: 'Palatino', Times, serif;
  font-size: 1.5rem;
  padding: .5rem 1rem;
  padding-top: .75rem;
  margin: 0 auto;

  cursor: pointer;
`