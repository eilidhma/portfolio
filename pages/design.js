import React, { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import NavBar from "../comps/NavBar";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Footer from "../comps/Footer";
import { device } from "../utils/breakpoints";
import Design from "../comps/Design";

export default function Des() {

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
    `

    const Title = styled.h4`
    margin:0;
    font-family:'Porter', sans-serif;
    color:${props=>props.color};
    @media ${device.mobile} { 
    font-size:2rem;
    }
    @media ${device.tablet} { 
    font-size:4rem;
    }
    @media ${device.laptop && device.desktop} { 
    font-size:6rem;
    }
    `


  return (
    <div>
      <NavBar />
      <Social />
      <NavDots />
      <SectionCont>
        <TitleCont>
            <Title>
            Design. It's a lifestyle.</Title>
        </TitleCont>
      </SectionCont>
        <Design 
            src="contendr-2.png"
            title="Contendr: UI/UX Design" 
            subtitle="Work included:"
        />
        <Design 
            src="proms.png"
            title="Illustration" 
            subtitle="Description:"
        />
        <Design 
            width={400}
            src="painting.png"
            title="Digital painting" 
            subtitle="Description:"
        />
        <Design 
            width={400}
            src="femme.png"
            title="Graphic poster" 
            subtitle="Description:"
        />
        <Design 
            src="ediface.png"
            title="Magazine design" 
            subtitle="Description:"
        />
      <Footer />
    </div>
  )
}
