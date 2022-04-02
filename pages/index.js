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

import Text from "../comps/Text";
import Tools from "../comps/Tools";
import Footer from "../comps/Footer";
import LineDrawing from "../comps/LineDrawing";
import HamMenu from "../comps/Hamb";

export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    min-height: 100vh;
  `

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
