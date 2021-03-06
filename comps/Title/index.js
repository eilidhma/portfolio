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
  height:100vh;
  font-family:'Porter';
  margin:0;
  padding: 10vw;
`

  const Text = styled.p`
  margin:0;
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


const Title = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
  <Text color={content_themes[theme].color}>
    Development <br></br> is my passion, <br></br> and my trade
  </Text>
  </Cont>
}

export default Title;