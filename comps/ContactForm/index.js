import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { MouseContext } from '../../utils/mousecontext';
import { debounce } from '../../utils/debounce';
import { useForm } from "react-hook-form";

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:70vh;
`

const Section = styled.div`
  width:100%;
  height:50px;
`

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-weight:300;
  font-size:1.5rem;
  color:${props=>props.color};
  text-align:center;
  width:100%;
  height:50px;
`

const Label = styled.label`
  font-family: 'Italiana', serif;
  font-weight:300;
  font-size:1.5rem;
  color:${props=>props.color};
  width:10vw;
  display:inline-block;
`

const Input = styled.input`
  width:40vw;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom: 1px solid ${props=>props.color};
  background-color:${props=>props.background};
`

const TextArea = styled.textarea`
  max-width:40vw;
  min-width:40vw;
  border-top:none;
  border-left:none;
  border-right:none;
  background-color:${props=>props.background};
  border-bottom-color:${props=>props.color};
  resize:none;
`

const Submit = styled.button`
  font-family: 'Italiana', serif;
  font-size:1.2rem;
  background-color:${props=>props.background};
  color:${props=>props.color};
  border:1px solid ${props=>props.color};
  padding:10px 20px 10px 20px;
  margin-top:50px;
`

const ContactForm = ({
  color='black',
  background='white'
}) => {

  const {theme, setTheme} = useTheme();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { reset } = useForm();

  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if(!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('./api/mail', {
      method:'post',
      body: JSON.stringify(formData)
    })
  }
  return <Cont>
        <form method="post" onSubmit={handleOnSubmit}>
        <Title color={content_themes[theme].color}>Let's connect.</Title>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="name">Name:</Label>
          <Input type='text' name="name" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="email">Email:</Label>
          <Input type='email' name="email" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Label color={content_themes[theme].color} htmlFor="message">Message:</Label>
          <TextArea name="message" background={themes[theme].body} color={content_themes[theme].color}/>
        </Section>
        <Section>
          <Submit 
          background={themes[theme].body} 
          color={content_themes[theme].color}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} >
            Submit
          </Submit>
        </Section>
      </form>
    </Cont>
}

export default ContactForm;