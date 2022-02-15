import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { GoPrimitiveDot } from 'react-icons/go';
import { Link } from 'react-scroll';
import { MouseContext } from '../../utils/mousecontext';
import Contact from '../Contact';
import { device } from '../../utils/breakpoints';


const Cont = styled.div`
@media ${device.mobile} { 
  display:none;
}
@media ${device.tablet} { 
  position:fixed;
  top:0;
  right:0;
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
  right:0;
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
  right:0;
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

const NavDots = ({
  color='black'
}) => {

  const {theme, setTheme} = useTheme();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [intro, setIntro] = useState(true)
  const [about, setAbout] = useState(false)
  const [work, setWork] = useState(false)
  const [contact, setContact] = useState(false)


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
        <Link
        onSetActive={()=>{setIntro(true)}}
        onSetInactive={()=>{setIntro(false)}}
        activeClass="intro"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        to="intro" 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        >
          <GoPrimitiveDot style={{marginBottom:20, zIndex:500}} color={content_themes[theme].color} size={intro === true ? 25 : 15}/>
        </Link>
        <Link
        onSetActive={()=>{setAbout(true)}}
        onSetInactive={()=>{setAbout(false)}}
        activeClass="about"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        to="about" 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        >
          <GoPrimitiveDot style={{marginBottom:20, zIndex:500}} color={content_themes[theme].color} size={about === true ? 25 : 15}/>
        </Link>
        <Link
        onSetActive={()=>{setWork(true)}}
        onSetInactive={()=>{setWork(false)}}
        activeClass="work"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        to="work" 
        spy={true} 
        smooth={true} 
        offset={-40} 
        duration={500}
        >
          <GoPrimitiveDot style={{marginBottom:20, zIndex:500}} color={content_themes[theme].color} size={work === true ? 25 : 15}/>
        </Link>
        <Link
        onSetActive={()=>{setContact(true)}}
        onSetInactive={()=>{setContact(false)}}
        activeClass="contact"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        to="contact" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
        >
          <GoPrimitiveDot style={{marginBottom:20, zIndex:500}} color={content_themes[theme].color} size={contact === true ? 25 : 15}/>
        </Link>
      </Icons>
    </motion.div>
  </Cont>
}

export default NavDots;