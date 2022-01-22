import React, { useEffect, useState } from "react";
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

export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
  `

  return (
    <div>
      <NavBar />
      <Social />
      <NavDots />
      <SectionCont>
        <Loading />
        <Intro line1="My name" line2="is Eilidh"/>
        <Spinner /> 
      </SectionCont>
      <SectionCont>
        <Title />
        <Girl />
      </SectionCont>
      <SectionCont>
        <About />
        <Text />
        <Tools />
      </SectionCont>
      <SectionCont>
        <Work />
        <WorkCont />
      </SectionCont>
      <SectionCont>
        <Contact />
        <ContactForm />
      </SectionCont>
    </div>
  )
}
