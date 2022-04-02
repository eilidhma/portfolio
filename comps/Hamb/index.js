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
import { slide as Menu } from 'react-burger-menu'
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
@media ${device.tablet} { 
  display: none;
}
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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  width:50vw;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:16px;
`

const SectionsCont = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:50vw;
  color:${props=>props.color};
`

const Section = styled.a`
  display:flex;
  flex-direction:column;
  text-decoration:none;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1rem;
`

const Hamb = ({
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

  function showSettings(e) {
    e.preventDefault();
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: content_themes[theme].color
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%'
    },
    bmMenu: {
      background: themes[theme].body,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: content_themes[theme].color,
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return <Cont>
            <Menu styles={ styles } customBurgerIcon={ 
            <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="14.5" y2="0.5" stroke={content_themes[theme].color} stroke-linecap="round"/>
                <line x1="4.5" y1="5.5" x2="14.5" y2="5.5" stroke={content_themes[theme].color} stroke-linecap="round"/>
            </svg>
        } right >
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            height: '100%'
        }}>
            <div 
                onClick={()=>r.push('./dev')}
                style={{
                display:'flex',
                flexDirection:'column',
                textDecoration:'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight:300,
                fontSize:'1rem',
                width:'200px',
                padding:'50px'
                }} 
                color={content_themes[theme].color}>
                <text color={content_themes[theme].color}>1.0</text>
                <text color={content_themes[theme].color}>Development</text>
                </div>
                <div 
                onClick={()=>r.push('./design')}
                style={{
                display:'flex',
                flexDirection:'column',
                textDecoration:'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight:300,
                fontSize:'1rem',
                width:'200px',
                padding:'50px'
                }}
                color={content_themes[theme].color}>
                <text color={content_themes[theme].color}>2.0</text>
                <text color={content_themes[theme].color}>Design</text>
                </div>
                <div 
                onClick={()=>r.push('./about')}
                style={{
                display:'flex',
                flexDirection:'column',
                textDecoration:'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight:300,
                fontSize:'1rem',
                width:'200px',
                padding:'50px'
                }}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} 
                className='nav' 
                color={content_themes[theme].color}>
                <text color={content_themes[theme].color}>3.0</text>
                <text color={content_themes[theme].color}>About</text>
                </div>
                <div className='darkmode' style={{zIndex:101}} onClick={handleDarkMode}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")} >
                <DarkModeCont style={{
                top:'20%',
                right:'50%',
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
                    top:'20%',
                    right:'50%',
                    width:30
                }}
                >
                <svg width="47" height="47" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.55 0V47.1C29.7959 47.1 35.7859 44.6188 40.2024 40.2024C44.6189 35.7859 47.1 29.7958 47.1 23.55C47.1 17.3042 44.6189 11.3141 40.2024 6.89764C35.7859 2.48115 29.7959 0 23.55 0V0Z" fill={content_themes[theme].color}/>
                    </svg>      
                </motion.div>
            </div>
        </div>
        </Menu>
      </Cont>
}

export default Hamb;