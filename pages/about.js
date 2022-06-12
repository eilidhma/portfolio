import React, { useEffect, useState, useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import NavBar from "../comps/NavBar";
import Social from "../comps/Social";
import Girl from "../comps/Girl";
import Cursor from "../comps/Cursor";
import { motion } from "framer-motion";
import About from "../comps/About";
import Tools from "../comps/Tools";
import Contact from "../comps/Contact";
import ContactForm from "../comps/ContactForm";
import Footer from "../comps/Footer";
import { MouseContext } from "../utils/mousecontext";

export default function Dev() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
  `

const { cursorType, cursorChangeHandler } = useContext(MouseContext);


  return (
    <div>
      <NavBar />
      <Social />
      <SectionCont>
        <About />
        <Girl />
        <div style={{paddingTop:100}}>
          <Tools />
        </div>
      </SectionCont>
      <SectionCont>
        <Contact />
        <ContactForm />
        <Footer />
      </SectionCont>
    </div>
  )
}



