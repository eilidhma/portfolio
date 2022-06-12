import React, { useEffect, useState, useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import NavBar from "../comps/NavBar";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Title from "../comps/Title";
import SaveThePlate from "../comps/SaveThePlate";
import Garden from "../comps/Garden";
import Contendr from "../comps/Contendr";
import Footer from "../comps/Footer";
import Forage from "../comps/Forage";
import { MouseContext } from "../utils/mousecontext";

export default function Dev() {

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    min-height: 100vh;
  `


const { cursorType, cursorChangeHandler } = useContext(MouseContext);


  return (
    <div>
      <NavBar />
      <Social />
      <SectionCont>
        <Title />
      </SectionCont>
      <SaveThePlate />
      <Forage />
      <Garden />
      <Contendr />
      <Footer />
    </div>
  )
}
