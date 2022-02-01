import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
  display:flex;
  align-items:center;
  width:100vw;
  @media ${device.mobile} { 
    justify-content:center;
    height:30vh;
    padding-top:5rem;
  }
  @media ${device.tablet} { 
    justify-content:flex-start;
    padding-left:8vw;
    padding-top:5rem;
  }
  @media ${device.laptop} { 
    justify-content:flex-start;
    padding-left:8vw;
    padding-top:8rem;
  }
`

const Hello = styled.div`
  display:flex;
  flex-direction:row;
  font-family:'Porter';
  margin:0;
`

const Letter = styled.p`
  margin:0;
  font-family:'Porter', sans-serif;
  color:${props=>props.color};
  @media ${device.mobile} { 
    font-size:2rem;
  }
  @media ${device.tablet} { 
    font-size:5rem;
  }
  @media ${device.laptop} { 
    font-size:7rem;
  }
`

const Loading = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
   <Hello>
     <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1 }}
      style={{padding:20}}
     >
      <motion.div
        initial={{x:100, y:40}}
        animate={{x:0, y:0}}
        transition={{ duration: 0.5, delay:1 }}
      >
        <Letter color={content_themes[theme].color}>H</Letter>
      </motion.div>
     </motion.div>

     <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1, delay:0.2 }}
      style={{padding:20}}
     >
      <motion.div
        initial={{x:500, y:220}}
        animate={{x:0, y:0}}
        transition={{ duration: 0.5, delay:1.2 }}
      >
        <Letter color={content_themes[theme].color}>E</Letter>
      </motion.div>
     </motion.div>
    
     <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1, delay:0.4 }}
      style={{padding:20}}
     >
      <motion.div
        initial={{x:100, y:-50}}
        animate={{x:0, y:0}}
        transition={{ duration: 0.5, delay:1.4 }}
      >
        <Letter color={content_themes[theme].color}>L</Letter>
      </motion.div>
     </motion.div>

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1, delay:0.6 }}
      style={{padding:20}}
    >
      <motion.div
        initial={{x:400, y:-10}}
        animate={{x:0, y:0}}
        transition={{ duration: 0.5, delay:1.6 }}
      >
       <Letter color={content_themes[theme].color}>L</Letter>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1, delay:0.6 }}
      style={{padding:20}}
    >
      <motion.div
        initial={{x:-400, y:400}}
        animate={{x:0, y:0}}
        transition={{ duration: 0.5, delay:1.8 }}
      >
      <Letter color={content_themes[theme].color}>O</Letter>
      </motion.div>
    </motion.div>
   </Hello>
  </Cont>
}

export default Loading;