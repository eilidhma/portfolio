import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';


const Cont = styled.div`
  display:flex;
  width:100vw;
  justify-content:flex-end;
  align-items:flex-end;
  padding-right:10vw;
  position:relative;
  top:-100px;
`

const IntroText = styled.p`
  font-family: 'Italiana', serif;
  font-size:7rem;
  color:${props=>props.color};
`


const Intro = ({
  color='black',
  line1 = "line1",
  line2 = "line2"
}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1, delay:2 }}
        style={{padding:20}}
      >
        <IntroText color={content_themes[theme].color}>
        {line1} <br/>{line2} 
        </IntroText>
      </motion.div>
    </Cont>
}

export default Intro;