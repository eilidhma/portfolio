import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'

const Cont = styled.div`
  position:absolute;
  top:60vh;
  left:20vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Spinner = ({
  color='black'
}) => {

  const {theme, setTheme} = useTheme();

  const variants = {
    default: { rotate: 0 },
    dark: { rotate: 180 }
  }


  return <Cont>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, delay:3}}
    style={{display:'flex', justifyContent:'center', alignItems:'center'}}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease:'linear'  }}
        style={{padding:20}}
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
        <svg width="200" height="200" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="170.708" cy="66.5924" r="3.5" transform="rotate(120 170.708 66.5924)" fill={content_themes[theme].color}/>
          <circle cx="104.708" cy="180.908" r="3.5" transform="rotate(120 104.708 180.908)" fill={content_themes[theme].color}/>
          <circle cx="38.9811" cy="66.75" r="3.5" transform="rotate(120 38.9811 66.75)" fill={content_themes[theme].color}/>
          <circle cx="104.799" cy="104.75" r="76" transform="rotate(-60 104.799 104.75)" stroke={content_themes[theme].color}/>
        </svg>
      </motion.div>
    </motion.div>
  </Cont>
}

export default Spinner;