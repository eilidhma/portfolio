import React, { useEffect, useState, useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import Loading from "../comps/Loading";
import Intro from "../comps/Intro";
import Spinner from "../comps/Spinner";
import { motion } from "framer-motion";
import Text from "../comps/Text";
import Footer from "../comps/Footer";
import LineDrawing from "../comps/LineDrawing";
import HamMenu from "../comps/Hamb";
import { MouseContext } from "../utils/mousecontext";



export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    min-height: 100vh;
  `


const { cursorType, cursorChangeHandler } = useContext(MouseContext);


  return (
    <div>
      <HamMenu/>
      <div>
        <SectionCont>
          <Loading />
          <Intro line1="My name" line2="is Eilidh"/>
          <Spinner /> 
          <Text />
          <LineDrawing />
          <Footer />
        </SectionCont>
      </div>
    </div>
  )
}
