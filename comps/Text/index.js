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

const IntroText = styled(motion.p)`
@media ${device.mobile} { 
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
  margin:0;
}
@media ${device.tablet} { 
  font-family: 'Italiana', serif;
  font-size:3rem;
  color:${props=>props.color};
  margin:0;
}
@media ${device.desktop && device.laptop} { 
  font-family: 'Italiana', serif;
  font-size:3.75rem;
  color:${props=>props.color};
  margin:0;
}
`

const sentence1 = ["I", " ", "a", "m", " ", "a", " ", "F", "r", "o", "n", "t", " ", "E", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."]
const sentence2 = ["I", " ", "c", "r", "a", "f", "t", " ", "m", "o", "d", "e", "r", "n", " ", "d", "i", "g", "i", "t", "a", "l", " ", "s", "o", "l", "u", "t", "i", "o", "n", "s"]
const sentence3 = ["w", "i", "t", "h", " ", "c", "r", "e", "a", "t", "i", "v", "e", " ", "d", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", " ", "i", "n", " ", "m", "i", "n", "d"]



const Text = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1, delay:3 }}
        style={{paddingTop:'10vh', paddingRight:0, paddingBottom:0, paddingLeft:20}}
      >
        <div style={{display:'flex', flexDirection:'row'}}>
        {sentence1.map((o,i)=><motion.div whileHover={{ scale: 1.25 }}>
          <IntroText color={content_themes[theme].color} key={i}>{o}</IntroText>
        </motion.div>)}
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        {sentence2.map((o,i)=><motion.div whileHover={{ scale: 1.25 }}>
          <IntroText color={content_themes[theme].color} key={i}>{o}</IntroText>
        </motion.div>)}
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        {sentence3.map((o,i)=><motion.div whileHover={{ scale: 1.25 }}>
          <IntroText color={content_themes[theme].color} key={i}>{o}</IntroText>
        </motion.div>)}
        </div>
        {/* <IntroText color={content_themes[theme].color}>
        I am a Front End Developer.<br/>I craft modern digital solutions <br/>with creative development in mind<br/> 
        </IntroText> */}
      </motion.div>
    </Cont>
}

export default Text;