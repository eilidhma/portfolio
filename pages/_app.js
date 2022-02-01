import '../styles/globals.css';
import AppProvider from '../utils/provider';
import Cursor from '../comps/Cursor';
import MouseContextProvider from '../utils/mousecontext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Porter";
    src:url("/fonts/Porter/porter-sans-inline-block-webfont.ttf");
  }
`

function MyApp({ Component, pageProps }) {

  return <AppProvider>
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
