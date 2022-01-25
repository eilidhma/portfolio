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
import SaveThePlate from "../comps/SaveThePlate";
import Garden from "../comps/Garden";

export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
  `

  const [dev, setDev] = useState(false)
  const [garden, setGarden] = useState(false)

  return (
    <div>
        {dev === true && <SaveThePlate 
        Back={()=>{setDev(false)}}
        NextArrow={()=>{
          setDev(false);
          setGarden(true);
        }}
        />}
        {garden === true && <Garden 
        Back={()=>{setGarden(false)}}
        BackArrow={()=>{
          setDev(true);
          setGarden(false);
        }}/>}
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
        <WorkCont onClickGarden={()=>{setGarden(true)}} onClickSaveThePlate={()=>{setDev(true)}}/>
      </SectionCont>
      <SectionCont>
        <Contact />
        <ContactForm />
      </SectionCont>
    </div>
  )
}
