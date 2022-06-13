import styled from 'styled-components';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useState, useEffect } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';
import Image from 'next/image';
import Me from '../../public/me.JPG'

const Wrapper = styled.div`
width: 100%;
padding-left:10%;
padding-right:10%;
display: flex;
justify-content: center;
align-items: center;
@media ${device.mobile} { 
  flex-direction: column; 
}
@media ${device.tablet} { 
  flex-direction: column;  
}
@media ${device.laptop} { 
  flex-direction: row;  
}
@media ${device.desktop} { 
  flex-direction: row;  
}
`

const Img = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 450px;
  height: 450px;
  border-radius:50%;
  object-fit:cover;
`

const Imgs = styled.img`
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  object-fit:cover;
  @media ${device.mobile} {
    width: 300px;
    height: 300px;
  }
  @media ${device.tablet} {
  width: 450px;
  height: 450px;
}
`

const Cont = styled.div`
@media ${device.mobile} {
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:80vh;
  padding-top:2rem;
}
@media ${device.tablet} {
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:80vh;
  padding-top:1rem;
}
@media ${device.laptop} {
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;
  width:60%;
  height:80vh;
  padding-top:1rem;
  padding-right:4rem;
}
@media ${device.desktop} {
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;
  width:50%;
  height:80vh;
  padding-top:2rem;
  padding-right:5rem;
}
`

const AboutText = styled.div`
@media ${device.mobile}{
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  /* height:50vh; */
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  color:${props=>props.color};
  font-size: 1.2rem;
}
@media ${device.tablet}{
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:50vh;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  color:${props=>props.color};
}
@media ${device.laptop}{
  display: flex;
  justify-content:center;
  align-items:flex-start;
  width:40%;
  height:80vh;
  padding-top:12vh;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  color:${props=>props.color};
}
@media ${device.desktop}{
  display: flex;
  justify-content:center;
  align-items:center;
  width:50%;
  height:80vh;
  padding-top:20vh;
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  color:${props=>props.color};
}
`

const Line = styled.div``

const Girl = ({}) => {

  const {theme, setTheme} = useTheme();
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const ySpace = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const pathLength = useSpring(ySpace, { stiffness: 400, damping: 90 });

  useEffect(() => ySpace.onChange(x => setIsComplete(x >= 1)), [ySpace]);

  return <Wrapper>
    <AboutText color={content_themes[theme].color}>I am a hybrid front-end developer / designer living in Vancouver, BC. I have recently graduated from British Columbia Institute of Technology where I trained in Digital Design and Development. Prior to my time at BCIT, I spent 5 years living in Victoria, BC, where I completed a dual bachelors degree in Biology and Psychology.
<br></br><br></br>
    The first 20 years of my life were spent performing and competing internationally as an Irish Dancer. 
<br></br><br></br>
    In my spare time, you can find me occupying local thrift shops or record stores, attempting to master the acoustic guitar, purchasing old film cameras, or taking photos of my dogs in cute hats.
    </AboutText>
    <Cont>
        <Img>
          <Imgs src={'me.JPG'} />
        </Img>
    </Cont>
    
  </Wrapper>
}

export default Girl;