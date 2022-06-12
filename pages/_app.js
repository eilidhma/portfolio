import '../styles/globals.css';
import AppProvider from '../utils/provider';
import Cursor from '../comps/Cursor';
import MouseContextProvider from '../utils/mousecontext';
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head';
import NavBar from '../comps/NavBar';
import Social from '../comps/Social';
import Hamb from '../comps/Hamb';
import { MouseContext } from '../utils/mousecontext';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Porter";
    src:url("/fonts/Porter/porter-sans-inline-block-webfont.ttf");
  }
`

function MyApp({ Component, pageProps }) {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  useEffect(()=>{
    cursorChangeHandler("")
  },[])

  return <AppProvider>
  
    <NavBar />
    <Social />
    <Hamb />
    <Head>
      <title>Eilidh Morrice-Ashdown • Frontend development</title>
      <meta name='description' content='This portfolio site offers an overview of my projects in frontend and backend web and app development, UI/UX design, and graphic design. Eilidh Morrice-Ashdown finished the Digital Design and Development program at BCIT in 2022.'/>
      <meta name='author' content='Eilidh Morrice-Ashdown'/>
      <meta name='keywords' content='developer front-end back-end UX UI BCIT portfolio'/>
    </Head>
    {/* <MouseContextProvider>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:3, duration:1}}
      >
        <Cursor />
      </motion.div> */}
      <Component {...pageProps} />
    {/* </MouseContextProvider> */}
    <GlobalStyle/>
  </AppProvider>
}

export default MyApp
