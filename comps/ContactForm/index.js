import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
`
const ContactForm = () => {

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
        <p>
          <label htmlFor="name">Name</label>
          <input type='text' name="name"/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type='email' name="email"/>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message"/>
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </Cont>
}

export default ContactForm;