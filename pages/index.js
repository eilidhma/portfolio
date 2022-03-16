import React, { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import Loading from "../comps/Loading";
import NavBar from "../comps/NavBar";
import Intro from "../comps/Intro";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Spinner from "../comps/Spinner";
import Title from "../comps/Title";
import Girl from "../comps/Girl";
import Cursor from "../comps/Cursor";
import { motion } from "framer-motion";
import About from "../comps/About";
import Text from "../comps/Text";
import Tools from "../comps/Tools";
import Work from "../comps/Work";
import WorkCont from "../comps/WorkCont";
import Contact from "../comps/Contact";
import ContactForm from "../comps/ContactForm";
import SaveThePlate from "../comps/SaveThePlate";
import Garden from "../comps/Garden";
import Contendr from "../comps/Contendr";
import Footer from "../comps/Footer";

export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    min-height: 100vh;
  `

  return (
    <div>
      <NavBar />
      <Social />
      <NavDots />
      <div id="intro">
        <SectionCont>
          <Loading />
          <Intro line1="My name" line2="is Eilidh"/>
          <Spinner /> 
          <Text />
          <Footer />
        </SectionCont>
        {/* <SectionCont>
          <Title />
          <Girl />
        </SectionCont> */}
      </div>
      {/* <SectionCont id="about">
        <About />
      </SectionCont> */}
      {/* <SectionCont id="work">
        <Work />
        <WorkCont onClickContendr={()=>{setContendr(true)}} onClickGarden={()=>{setGarden(true)}} onClickSaveThePlate={()=>{setDev(true)}}/>
      </SectionCont>
      <SectionCont id="contact">
        <Contact />
        <ContactForm />
      </SectionCont> */}
    </div>
  )
}
