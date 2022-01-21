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

export default function Home() {

  const SectionCont = styled.div`
    display:flex;
    flex-directin:column;
    width:100vw;
    height:100vh;
  `

  return (
    <div>
      <NavBar />
      <Social />
      <NavDots />
      <SectionCont>
        <Loading />
        <Intro />
        <Spinner /> 
      </SectionCont>
      <SectionCont>
        <Title />
        <Girl />
      </SectionCont>
    </div>
  )
}
