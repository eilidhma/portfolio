import '../styles/globals.css';
import AppProvider from '../utils/provider';
import Cursor from '../comps/Cursor';
import MouseContextProvider from '../utils/mousecontext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Porter";
    src:url("/fonts/Porter/porter-sans-inline-block-webfont.ttf");
  }
`

function MyApp({ Component, pageProps }) {

  return <AppProvider>
    {/* <Head>
      <meta>
        <title>Eilidh Morrice-Ashdown frontend development UI UX design portfolio, BCIT D3 Program 2022</title>
        <description>This portfolio site offers an overview of my projects in frontend and backend web and app development, UI/UX design, and graphic design. Eilidh Morrice-Ashdown finished the Digital Design and Development program at BCIT in 2022. </description>
      </meta>
    </Head> */}
    <MouseContextProvider>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:3, duration:1}}
      >
        <Cursor />
      </motion.div>
      <Component {...pageProps} />
    </MouseContextProvider>
    <GlobalStyle/>
  </AppProvider>
}

export default MyApp
