import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'

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

const Social = ({
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
    style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Line style={{backgroundColor:content_themes[theme].color}}/>
      <Icons>
        <AiOutlineInstagram style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        <RiLinkedinFill style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        <AiFillGithub style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
      </Icons>
    </motion.div>
  </Cont>
}

export default Social;