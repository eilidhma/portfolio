import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100vw;
min-height: 100vh;
`

const Title = styled.div`
  display:flex;
  font-family:'Porter', sans-serif;
  color:${props=>props.color};
  @media ${device.mobile} { 
  font-size:1.5rem;
  }
  @media ${device.tablet} { 
  font-size:3rem;
  }
  @media ${device.laptopL} { 
  font-size:5rem;
  }
`

const About = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
   <Title color={content_themes[theme].color}>
    About Me
   </Title>
  </Cont>
}

export default About;