import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';


const Cont = styled.div`
@media ${device.mobile} { 
  display:flex;
  width:100vw;
  justify-content:flex-start;
  align-items:flex-start;
  padding-left:10vw;
}

@media ${device.tablet} { 
  display:flex;
  width:100vw;
  justify-content:flex-start;
  align-items:flex-start;
  position: relative;
  top: -200px;
  padding-left:10vw;
}

@media ${device.desktop && device.laptop} { 
  display:flex;
  width:100vw;
  justify-content:flex-start;
  align-items:flex-start;
  position: relative;
  top: -200px;
  padding-left:10vw;
}
`

const IntroText = styled.p`
@media ${device.mobile} { 
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
}
@media ${device.tablet} { 
  font-family: 'Italiana', serif;
  font-size:3rem;
  color:${props=>props.color};
}
@media ${device.desktop && device.laptop} { 
  font-family: 'Italiana', serif;
  font-size:4rem;
  color:${props=>props.color};
}
`


const Text = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1, delay:3 }}
        style={{paddingLeft:20}}
      >
        <IntroText color={content_themes[theme].color}>
        I am a front-end developer <br/>with knowledge and <br/>experience in UX/UI design   
        </IntroText>
      </motion.div>
    </Cont>
}

export default Text;