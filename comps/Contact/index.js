import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';

const Cont = styled.div`
display:flex;
@media ${device.mobile} { 
  justify-content:center;
    align-items:center;
    margin-top:15vh;
  }
  @media ${device.tablet} { 
    justify-content:center;
    align-items:center;
    width:100vw;
    margin-top:15vh;
  }
  @media ${device.laptop} { 
    justify-content:center;
    align-items:center;
    width:100vw;
    margin-top:15vh;
  }
`

const Title = styled.div`
  display:flex;
  font-family:'Porter', sans-serif;
  color:${props=>props.color};
  @media ${device.mobile} { 
  font-size:1.5rem;
  }
  @media ${device.tablet} { 
  font-size:2rem;
  }
  @media ${device.laptop} { 
  font-size:2rem;
  }
`

const Contact = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
   <Title color={content_themes[theme].color}>
   Contact Me
   </Title>
  </Cont>
}

export default Contact;