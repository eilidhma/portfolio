import styled from 'styled-components';
import { motion } from "framer-motion";
import React, { useState, useContext, useRef } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { MouseContext } from '../../utils/mousecontext';
import { debounce } from '../../utils/debounce';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:70vh;
`

const Section = styled.div`
  width:100%;
  min-height:50px;
`

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-weight:300;
  font-size:1.5rem;
  color:${props=>props.color};
  text-align:center;
  width:100%;
  min-height:50px;
`

const Label = styled.label`
    @media ${device.mobile} {
      display: block;
      font-size: 1.2rem;
    }
    @media ${device.tablet} {
      display:inline-block;
      font-size:1.5rem; 
  }
    font-family: 'Italiana', serif;
    font-weight:300;
    color:${props=>props.color};
    width: 100px;
`

const Input = styled.input`
@media ${device.mobile} {
    min-width:70vw;
    border-top:none;
  border-left:none;
  border-right:none;
  border-bottom: 1px solid ${props=>props.color};
  background-color:${props=>props.background};
  }
  @media ${device.tablet} {
    min-width:40vw;
    border-top:none;
  border-left:none;
  border-right:none;
  border-bottom: 1px solid ${props=>props.color};
  background-color:${props=>props.background};
  }
  
`

const TextArea = styled.textarea`
@media ${device.mobile} {
  max-width:70vw;
    min-width:70vw;
  }
  @media ${device.tablet} {
    max-width:40vw;
    min-width:40vw;
  }
  border-top:none;
  border-left:none;
  border-right:none;
  background-color:${props=>props.background};
  border-bottom-color:${props=>props.color};
  resize:none;
`

const Submit = styled.input`
  font-family: 'Poppins', sans-serif;
    font-weight:300;
    border:1px solid ${props=>props.color};
    color:${props=>props.color};
    background-color:${props=>props.background};
    padding:10px;
    text-align: center;
  @media ${device.mobile} { 
    width: 200px;
    font-size:1rem;
    margin-right: 10px;
  }
  @media ${device.tablet} {
    width:200px;
    font-size:1.2rem;
    margin-right: 20px;
  }
  &:hover{
    border:1px solid ${props=>props.background};
    color:${props=>props.background};
    background-color:${props=>props.color};
  }
`

const ContactForm = ({}) => {

  const {theme, setTheme} = useTheme();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mj0oxtr', 'template_mo1amod', form.current, 'Zv4txRxGpVFL5PPpK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      alert('sent!')
      
  };

  return <Cont>
        <form ref={form} onSubmit={sendEmail}>
        <Title color={content_themes[theme].color}>Let's connect.</Title>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="name">Name:</Label>
          <Input type='text' name="from_name" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="email">Email:</Label>
          <Input type='email' name="from_email" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="message">Message:</Label>
          <TextArea name="message" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Submit 
          type={"submit"}
          value={"Send"}
          background={themes[theme].body} 
          color={content_themes[theme].color}
          onMouseOver={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} />
        </Section>
      </form>
    </Cont>

    
}

export default ContactForm;