import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Button from './globals/button';
import { SectionContainer } from './globals/styles'
import { LoadingWheel } from './globals/loading';

// import { LoadingWheel } from '../loadingWheel';

const formPic = 'assets/contact.png'

const Contact = () => {

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);
  const [emailState, setEmailState] = useState('idle')

  const form = useRef();

  useEffect(()=>{
    const checkSize = (e) =>{
      if (window.innerWidth > 767) {setIsDesktop(true);}
      else  {setIsDesktop(false);}
    }

    window.addEventListener('resize',checkSize);

    return ()=>{window.removeEventListener('resize',checkSize);} 
  },[]);


  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailState('loading');

    try {
      const result = await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      // console.log(result.text);
      setEmailState('sent');

      form.current.reset();

    } catch (error) {
      setEmailState('error');
      console.log(error.text);
    }
    
  };

  return (
    <SectionContainer id='contact' style={{minHeight: 'auto'}}>
      

      <Wrapper>

        
      <h3>Feel free to ask any questions you may have...<br/>-Kenny</h3>

      <aside>
          <img src={formPic} alt='kenny espinosa'/>
        </aside>
        

        <FormWrap ref={form} onSubmit={sendEmail}>
            
            <span>
              <label>Name</label>
              {/* name field */}
              <InputWrap>
                  <input type='text' name='user_name' placeholder='' required></input>
              </InputWrap>  
            </span>

            <span>
              <label>Email</label>
              {/* eamil field */}
               <InputWrap>               
                  <input type='email' name='user_email' placeholder='' required></input>
              </InputWrap> 
            </span>

            <span>
               <label>Message</label>
              {/* message field */}
              <InputWrap>
                <textarea 
                  required
                  placeholder=''
                  name="message">
                  </textarea>
              </InputWrap>  
            </span>
            
            {/* submit btn */}
            <Button text={'Send'} callback={null}></Button>
            {/* <SendBtn type='submit' value={'send'}><h2>Send</h2></SendBtn> */}
             {emailState !== 'idle' && <LoadingWheel email={{emailState,setEmailState}}/>}
        </FormWrap>
       
      
      </Wrapper>
    </SectionContainer>
  )
}

export default Contact



const Wrapper = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem auto;
  margin-top: 10rem;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  position: relative;


  h3{
    width: fit-content;
    position: absolute;
    bottom: 100%;
    padding-bottom: 20px;
    font-family: 'Bodoni72', cursive;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: right;

    @media screen and (max-width: ${props => props.theme.breakpoint.md}){
       font-size: 1.25rem;
      line-height: 1.5rem;
    } 

     @media screen and (max-width: ${props => props.theme.breakpoint.xs}){
       font-size: 1.1rem;
      line-height: 1.5rem;
      position: static;
      align-self: center;
      padding-bottom: 0px;
    }

  }

  aside{
    width: 50%;
    height: 450px;
    border: 2px solid white;
    overflow: hidden;

    img{
      
      border-radius: ${props => props.theme.borderRadius};
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }

     @media screen and (max-width: ${props => props.theme.breakpoint.md}){
     display: none;
     
    } 

  }
  
  @media screen and (max-width: ${props => props.theme.breakpoint.xs}){
    position: relative;
    width: calc(100% + 2rem);
    left: -1rem;

    flex-direction: column;
    justify-content: center;
     background-color: rgba(0,0,0,.25);
      border: white 2px solid;
      padding: 20px 0;
  } 

`

const FormWrap = styled.form`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;


 @media screen and (max-width: ${props => props.theme.breakpoint.md}){
    width: 100%;
    height: 400px;
  } 

  @media screen and (max-width: ${props => props.theme.breakpoint.xs}){
      padding: 0 2rem;
  } 

  span{
    width: 100%;
    /* height: 36px; */
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* justify-content: space-between; */

    &:nth-child(3){
      height: max-content;
      flex-grow: 2;
    }

    label{
          font-family: Palatino, 'Times New Roman', Times, serif;
    }
    
  }

  button{
    align-self: flex-start;
  }
`

const InputWrap = styled.div`
  position: relative;
  background-color: rgba(0,0,0,.25);
  border: rgba(255,255,255,.75) 2px solid;

  width: 100%;
  height: 100%;;
  backdrop-filter: blur(4px);
  border-radius: 1.5px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .5rem;

  color: white;
  font-weight: bold;
  font-family: 'Helvetica';

  input, textarea, span, select{
    color: white;
    font-weight: bold;
    font-family: 'Helvetica';
    
    height: calc(100%);
    width: calc(100%);
    padding: .5rem;
    transition: all ease-in-out .15s;

    font-size: 1rem;

    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    resize: none;
    


    &::placeholder{
      font-weight: normal;
      color: rgba(255,255,255,.75);
      font-family: 'Helvetica';
      filter: brightness(70%);
      -webkit-filter: brightness(70%);
    }

  }


    &:hover{
      border: white 2px solid;
    }


  input:focus, textarea:focus, select:focus {
    -webkit-box-shadow:0px 0px 10px 2px rgba(255,255,255,0.4);
    -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.4);
    box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.4);
  }



`


const SendBtn = styled.button`
    border: none;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 5;
    height: min-content;
    padding: .6rem 1rem;
    background-color: #BCD167;
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
    font-size: .75rem;
    line-height: .75rem;
    text-align: center;
    color: #221A2B;
    
   }


`

