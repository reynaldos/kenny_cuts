import styled from "styled-components";


export const Header = styled.h2`
    font-family: Palatino, 'Times New Roman', Times, serif;
    text-decoration: underline;
    text-decoration-thickness: .1rem;

    font-size: 2.5rem;
    line-height: 2.5rem;
    padding-top: .25rem;
    letter-spacing: .5rem;
    padding-left: 0.5rem;

    font-weight: 100;
    text-transform: uppercase;
   
    text-align: center;

    color: white;
    width: fit-content;
    
    margin: 25px auto;
    /* margin: 50px auto;
    margin-top: 120px; */


    @media screen and (max-width: ${({theme}) => theme.breakpoint.md}){
        font-size: 2rem;
        line-height: 2rem;
        padding-top: .25rem;
        letter-spacing: .25rem;
        padding-left: 0.25rem;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoint.xs}){
        margin-top: 5rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
        padding-top: .25rem;
        letter-spacing: .25rem;
        padding-left: 0.25rem;
    }
`

export const Text = styled.p`
   font-family: Palatino, 'Times New Roman', Times, serif;

    font-size: 1rem;
    line-height: 1rem;
    font-weight: 100;
    text-align: center;
    
    color: white;
`

export const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: ${({theme}) => theme.maxWidth};
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* outline: 1px solid red; */
  overflow: hidden;
  
  `