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
`

const IntroText = styled.p`
  font-family: 'Italiana', serif;
  font-size:4rem;
  color:${props=>props.color};
`


const Text = ({}) => {

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
        I am a front-end develoer <br/>with knowledge and <br/>experience in UX/UI design   
        </IntroText>
      </motion.div>
    </Cont>
}

export default Text;