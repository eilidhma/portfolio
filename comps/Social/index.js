import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri';
import { device } from '../../utils/breakpoints';
import { MouseContext } from '../../utils/mousecontext';

const Cont = styled.div`
  position:fixed;
  top:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-left:30px;
  padding-right:30px;
  height:100%;
  @media ${device.mobile} { 
    display:none;
  }
  @media ${device.tablet} { 
    position:fixed;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-left:30px;
    padding-right:30px;
    height:100%;
  }
  @media ${device.laptop} { 
    position:fixed;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-left:30px;
    padding-right:30px;
    height:100%;
  }
  @media ${device.desktop} { 
    position:fixed;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-left:30px;
    padding-right:30px;
    height:100%;
  }
`

const Icons = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:50px;
  height:11rem;
`

const Line = styled.div`
  width:1px;
  background-color: ${props=>props.color};
  height:15vh;
  margin-bottom:20px;
  border-radius:1px;
`

const Links = styled.a`

`

const Social = ({
  color='black'
}) => {

  const {theme, setTheme} = useTheme();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const variants = {
    default: { rotate: 0 },
    dark: { rotate: 180 }
  }




  return <Cont>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, delay:3}}
    style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Line style={{backgroundColor:content_themes[theme].color}}/>
      <Icons>
        <Links
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        target='_blank' 
        className='social'
        href="https://www.instagram.com/eilidhma/">
          <AiOutlineInstagram style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
        <Links
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        target='_blank' 
        className='social'
        href="https://www.linkedin.com/in/eilidh-morrice-ashdown-a222a9132/">
          <RiLinkedinFill style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
        <Links
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        target='_blank' 
        className='social'
        href="https://github.com/eilidhma">
          <AiFillGithub style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
      </Icons>
    </motion.div>
  </Cont>
}

export default Social;