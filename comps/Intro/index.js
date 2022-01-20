import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';

const MainCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
`

const Cont = styled.div`
  position:absolute;
  top:30vh;
  right:10vw;
`

const IntroText = styled.p`
font-family: 'Italiana', serif;

//font-family: 'Prata', serif;
//font-family: 'Suranna', serif;
font-size:8rem;
color:${props=>props.color};
//line-height:1;
`


const Intro = ({color='black'}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <MainCont>
    <Cont>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1, delay:2 }}
        style={{padding:20}}
      >
        <IntroText color={content_themes[theme].color}>
        My name <br/>is Eilidh
        </IntroText>
      </motion.div>
    </Cont>
  </MainCont>
}

export default Intro;