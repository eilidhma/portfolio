import React, { useEffect, useState, useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import NavBar from "../comps/NavBar";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Footer from "../comps/Footer";
import { themes, content_themes } from '../utils/variables';
import { useTheme } from '../utils/provider';
import { MouseContext } from '../utils/mousecontext';
import { device } from "../utils/breakpoints";
import Design from "../comps/Design";
import Design2 from "../comps/Design2";
import Design3 from "../comps/Design3";

export default function Des() {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(()=>{
    cursorChangeHandler("")
  },[])

  const SectionCont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    min-height: 100vh;
  `

    const TitleCont = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family:'Porter';
    margin:0;
    padding: 10vw;
    `

    const Text = styled.p`
    margin:0;
    font-family:'Porter', sans-serif;
    color:${props=>props.color};
    @media ${device.mobile} { 
    font-size:1.5rem;
    }
    @media ${device.tablet} { 
    font-size:3rem;
    }
    @media ${device.laptopL} { 
    font-size:5rem;
    }
    `
const {theme, setTheme} = useTheme();


  return (
    <div>
      <NavBar />
      <Social />
      <SectionCont>
        <TitleCont>
            <Text color={content_themes[theme].color}>Design.<br></br> Its a lifestyle.</Text>
        </TitleCont>
      </SectionCont>
      <Design 
              src="contendr-2.png"
              title="UI/UX Design" 
              subtitle3="Work included concept ideation, design, prototyping, and extensive user testing"
              subtitle="Contendr:"
              subtitle2="Member of the design team for a social media application"
          />
          <Design2 
          title="Digital Artwork"
          src="instax.png"
          src2="girl.png"
          src3="night.png"
           />
           <Design3 
          title="Typography"
          src={"proms.png"}
          subtitle={null}
          subtitle2={null}
          subtitle3={null}
           />
            <Design2 
          title="Magazine design"
          src="1.png"
          src2="2.png"
          src3="3.png"
          width={400}
          width2={400}
          width3={400}
           />
           <Design2 
          title="Website Design"
          src="About.png"
          src2="Contact.png"
          src3="Home.png"
           />
      <Footer />
    </div>
  )
}
