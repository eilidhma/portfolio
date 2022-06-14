import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri';
import { device } from '../../utils/breakpoints';
import Router, { useRouter } from 'next/router';

const Cont = styled.footer`
  @media ${device.mobile} { 
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    margin-top:15vh;
    flex-direction:column;
  }
  @media ${device.tablet} { 
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    width:100vw;
    margin-top:15vh;
    flex-direction:column;
  }
  @media ${device.laptop} { 
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    width:100vw;
    margin-top:15vh;
    flex-direction:column;
  }
  @media ${device.desktop} { 
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    width:100vw;
    margin-top:15vh;
    flex-direction:column;
  }
`

const Info = styled.p`
  @media ${device.mobile} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:16px;
    color:${props=>props.color};
    padding-bottom:20px;
  }
  @media ${device.tablet} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:16px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
  @media ${device.laptop} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:16px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
  @media ${device.desktop} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:16px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
`

const InfoSmall = styled.a`
z-index: 1000;
  @media ${device.mobile} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:10px;
    color:${props=>props.color};
    padding-bottom:20px;
  }
  @media ${device.tablet} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:12px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
  @media ${device.laptop} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:14px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
  @media ${device.desktop} {
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:14px;
    color:${props=>props.color};
    padding-bottom:20px;
    padding-left:30px;
  }
`

const Icons = styled.div`
@media ${device.mobile}{
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
  width:100vw;
  z-index: 10;
}
@media ${device.tablet}{
  display:none;
}
@media ${device.laptop}{
  display:none;
}
@media ${device.desktop}{
  display:none;
}
`

const Links = styled.a`

`

const Footer = () => {

  const {theme, setTheme} = useTheme();
  const r = useRouter();

  return <Cont>
   <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, delay:3}}
    style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Icons>
      <Links
        target='_blank' 
        className='social'
        href="https://www.instagram.com/eilidhma/">
          <AiOutlineInstagram style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
        <Links
        target='_blank' 
        className='social'
        href="https://www.linkedin.com/in/eilidh-morrice-ashdown-a222a9132/">
          <RiLinkedinFill style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
        <Links
        target='_blank' 
        className='social'
        href="https://github.com/eilidhma">
            <AiFillGithub style={{marginBottom:20}} color={content_themes[theme].color} size={25}/>
        </Links>
      </Icons>
    </motion.div>
   <Info color={content_themes[theme].color}>© Eilidh Morrice-Ashdown   2022</Info>
   <InfoSmall onClick={()=>r.push('/privacy')} color={content_themes[theme].color}>Privacy Policy</InfoSmall>
  </Cont>
}

export default Footer;