import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { BsDot } from 'react-icons/bs';
import { MouseContext } from '../../utils/mousecontext';
import { debounce } from '../../utils/debounce';
import { Link } from 'react-scroll';
import Router, { useRouter } from 'next/router';
import { device } from '../../utils/breakpoints';
import Cursor from '../Cursor';

const Cont = styled.div`
justify-content: space-between;
  @media ${device.mobile} { 
  display: none;
  }
  @media ${device.tablet} { 
  display: inline-block;
  }
  @media ${device.laptop} { 
  display: inline-block;
  }
  @media ${device.desktop} { 
  display: inline-block;
  }
`

const NavCont = styled.div`
  background-color:${props=>props.color};
`

const navbarStyles = {
  position:'fixed',
  display:'flex',
  flexDirection:'row',
  width:'100vw',
  height:100,
  justifyContent:'center',
  alignItems:'center',
  paddingLeft:30,
  paddingRight:30,
  zIndex:100,
  transition: 'top 0.5s'
}

const DarkModeCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
`

const LogoCont = styled.div`
  width: 50vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:16px;
`

const SectionsCont = styled.div`
  width: 90vw;
  display:flex;
  justify-content:space-around;
  align-items:center;
  color:${props=>props.color};
  @media ${device.laptop} { 
    width:50vw;
  }
  /* &:hover {
    .dot {
      position: fixed;
      top: 50%;
      left: 50%;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      z-index: 999;
      pointer-events: none;
      width: 70px;
      height: 70px;
      opacity: 0.5;
    }
  } */
`


const Section = styled.a`
  display:flex;
  flex-direction:column;
  text-decoration:none;
  font-family: Poppins, sans-serif;
  font-weight:300;
  font-size:1rem;
  &:hover {
    border-top: 1px solid ${props=>props.bg};
    border-bottom: 1px solid ${props=>props.color};
  }
`

const NavBar = ({
  color='black'
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const r = useRouter();

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const {theme, setTheme} = useTheme();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const variants = {
    default: { rotate: 0 },
    dark: { rotate: 180 }
  }

  const [on, setOn] = useState(false)

  const handleDarkMode = () => {
    if(on === true) {
      setOn(false);
      setTheme('default')
    }
    else {
      setOn(true);
      setTheme('dark')
    }
  }

  return <Cont>
  <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, delay:3}}
  >
    <NavCont style={{...navbarStyles, top: visible ? '0' : '-100px'}} color={themes[theme].body}>
      <LogoCont
      className='nav'
      onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")} 
       onClick={()=>{
        cursorChangeHandler("")
         r.push('/')}}>
        <svg width="105" height="26" viewBox="0 0 105 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.32 10.6H19.59V12.4H4.32V18.52H22.71V20.35H2.46V2.65H22.68V4.48H4.32V10.6ZM5.97 6.16H24.36V0.969999H0.78V22.03H24.39V16.84H5.97V14.05H21.24V8.95H5.97V6.16ZM0.03 22.78V0.22H25.11L28.02 3.31V9.82H23.43L24.9 11.29V16.09L28.05 19.18V25.69H3.12L0.03 22.78ZM34.8401 2.65H36.4001L46.7501 18.01C48.4501 15.41 50.1601 12.84 51.8801 10.3C53.6201 7.76 55.3701 5.21 57.1301 2.65H58.6901V20.35H56.8301V6.43L47.5001 20.35H46.0301L36.7001 6.46V20.35H34.8401V2.65ZM38.3501 11.92L45.1001 22.03H48.4001L55.1801 11.89V22.03H60.3401V0.969999H56.2001L46.7201 15.01L37.3001 0.969999H33.1901V22.03H38.3501V11.92ZM40.6301 3.31L47.1401 13.06L55.8401 0.22H61.0901L64.0001 3.31V25.69H57.5201L54.4301 22.78V21.67L51.7301 25.69H47.7701L44.7401 22.78L42.0101 18.7V25.69H35.5301L32.4401 22.78V0.22H37.6601L40.6301 3.31ZM90.3398 13.84L84.0098 4.87L77.5298 13.84H90.3398ZM87.0998 12.22H80.7398L83.9498 7.72L87.0998 12.22ZM94.8098 20.35L91.5698 15.7H76.2398C75.6798 16.46 75.1298 17.24 74.5898 18.04C74.0698 18.82 73.5298 19.59 72.9698 20.35H70.5698C72.6898 17.37 74.7998 14.42 76.8998 11.5C79.0198 8.58 81.1298 5.63 83.2298 2.65H84.6698L97.0598 20.35H94.8098ZM82.4198 0.969999L67.4198 22.03H73.7798L77.0798 17.38H90.6398L93.9098 22.03H100.27L85.5698 0.969999H82.4198ZM88.9298 3.31L104.53 25.69H96.5498L93.5198 22.78L92.2898 21.04H80.4398C80.1998 21.4 79.9298 21.78 79.6298 22.18C79.3498 22.58 79.0598 22.98 78.7598 23.38C78.4798 23.8 78.1998 24.2 77.9198 24.58C77.6398 24.98 77.3798 25.35 77.1398 25.69H69.1298L65.9498 22.78L82.0298 0.22H85.9598L88.9298 3.31Z" fill={content_themes[theme].color}/>
        </svg>
        <text style={{color:content_themes[theme].color}}>{"<"}Ay<BsDot style={{paddingTop:5, marginLeft:-5, marginRight:-5}}/>lee{"/>"}</text>
      </LogoCont>
      <SectionsCont
      color={content_themes[theme].color}>
        <Section 
        onClick={()=>{
          cursorChangeHandler("")
          r.push('./dev')}}
        style={{
          display:'flex',
          flexDirection:'column',
          textDecoration:'none',
          fontFamily: 'Poppins, sans-serif',
          fontWeight:300,
          fontSize:'1rem'
        }}
        onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        className='nav' 
        bg={themes[theme].body}
        color={content_themes[theme].color}>
          <text>1.0</text>
          <text>Development</text>
        </Section>
        <Section 
        onClick={()=>{
          cursorChangeHandler("")
          r.push('./caseStudy')}}
        style={{
          display:'flex',
          flexDirection:'column',
          textDecoration:'none',
          fontFamily: 'Poppins, sans-serif',
          fontWeight:300,
          fontSize:'1rem'
        }}
        onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        className='nav' 
        bg={themes[theme].body}
        color={content_themes[theme].color}>
          <text>2.0</text>
          <text>Case Study</text>
        </Section>
        <Section  
        onClick={()=>{
          cursorChangeHandler("")
          r.push('./design')}}
        style={{
          display:'flex',
          flexDirection:'column',
          textDecoration:'none',
          fontFamily: 'Poppins, sans-serif',
          fontWeight:300,
          fontSize:'1rem'
        }}
        onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        className='nav' 
        bg={themes[theme].body}
        color={content_themes[theme].color}>
          <text>3.0</text>
          <text>Design</text>
        </Section>
        <Section 
        onClick={()=>{
          cursorChangeHandler("")
          r.push('./about')}}
        style={{
          display:'flex',
          flexDirection:'column',
          textDecoration:'none',
          fontFamily: 'Poppins, sans-serif',
          fontWeight:300,
          fontSize:'1rem'
        }}
        onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        className='nav' 
        bg={themes[theme].body}
        color={content_themes[theme].color}>
          <text>4.0</text>
          <text>About</text>
        </Section>
      </SectionsCont>
      <Section className='darkmode' style={{zIndex:101}} onClick={handleDarkMode}
      onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")} >
        <DarkModeCont style={{
          top:25,
          right:25,
          width:30
        }}>
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23.5" cy="23.5" r="23" stroke={content_themes[theme].color}/>
        </svg>

        </DarkModeCont>
        <motion.div
          initial={false}
          animate={on ? "dark" : "default"}
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:25,
            right:25,
            width:30
          }}
        >
          <svg width="47" height="47" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.55 0V47.1C29.7959 47.1 35.7859 44.6188 40.2024 40.2024C44.6189 35.7859 47.1 29.7958 47.1 23.55C47.1 17.3042 44.6189 11.3141 40.2024 6.89764C35.7859 2.48115 29.7959 0 23.55 0V0Z" fill={content_themes[theme].color}/>
            </svg>      
        </motion.div>
      </Section>
    </NavCont>
  </motion.div>
  </Cont>
}

export default NavBar;