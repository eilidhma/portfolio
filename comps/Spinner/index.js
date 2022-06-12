import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
  @media ${device.mobile} { 
    display: none;
  }
  @media ${device.tabletS} { 
    display: none;
  }
  @media ${device.laptop} { 
    position:absolute;
    top:70vh;
    left:70vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  @media ${device.laptopL} { 
    position:absolute;
    top:70vh;
    left:75vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`

const Spinner = ({
  color='black'
}) => {

  const {theme, setTheme} = useTheme();

  let size = '150px'

  const variants = {
    default: { rotate: 0 },
    dark: { rotate: 180 }
  }


  return <Cont>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, delay:3.5}}
    style={{display:'flex', justifyContent:'center', alignItems:'center', width:200, height:200}}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease:'linear'  }}
        style={{position:'absolute'}}>
        <svg width={size} height={size} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="170.708" cy="66.5924" r="3.5" transform="rotate(120 170.708 66.5924)" fill={content_themes[theme].color}/>
          <circle cx="104.708" cy="180.908" r="3.5" transform="rotate(120 104.708 180.908)" fill={content_themes[theme].color}/>
          <circle cx="38.9811" cy="66.75" r="3.5" transform="rotate(120 38.9811 66.75)" fill={content_themes[theme].color}/>
          <circle cx="104.799" cy="104.75" r="76" transform="rotate(-60 104.799 104.75)" stroke={content_themes[theme].color}/>
        </svg>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ repeat:Infinity, repeatType:'mirror', duration: 1.5, ease:'linear'  }}
        style={{position:'absolute'}}
        >
        <svg width="8" height="38" viewBox="0 0 8 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.64644 37.3536C3.84171 37.5488 4.15829 37.5488 4.35355 37.3536L7.53553 34.1716C7.73079 33.9763 7.73079 33.6597 7.53553 33.4645C7.34027 33.2692 7.02369 33.2692 6.82842 33.4645L4 36.2929L1.17157 33.4645C0.976308 33.2692 0.659726 33.2692 0.464464 33.4645C0.269201 33.6597 0.269201 33.9763 0.464464 34.1716L3.64644 37.3536ZM3.5 -3.78045e-08L3.5 37L4.5 37L4.5 3.78045e-08L3.5 -3.78045e-08Z" fill={content_themes[theme].color}/>
        </svg>
      </motion.div>
    </motion.div>
  </Cont>
}

export default Spinner;