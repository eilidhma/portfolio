import styled from 'styled-components';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useState, useEffect, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { device } from '../../utils/breakpoints';
import Image from 'next/image';
import Me from '../../public/me.JPG'
import Router, { useRouter } from 'next/router';
import { MouseContext } from '../../utils/mousecontext';

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

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
`

const ButCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:50%;
`

const But = styled.a`
justify-content: center;
    align-items: center;
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    border:1px solid ${props=>props.color};
    color:${props=>props.color};
  @media ${device.mobile} { 
    width: 200px;
    font-size:1rem;
    margin: 10px;
    padding:10px;
  }
  @media ${device.tablet} {
    width:200px;
    font-size:1.2rem;
    background-color:${props=>props.background};
    margin-top: 10px;
    margin-bottom: 10px;
    padding:10px;
  }
  &:hover{
    border:1px solid ${props=>props.background};
    color:${props=>props.background};
    background-color:${props=>props.color};
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
  padding-top:2rem;
}
@media ${device.laptop} {
  display:flex;
  justify-content:center;
  align-items:center;
  width:50%;
  height:30vh;
  padding-top:2rem;
  padding-right:5rem;
}
@media ${device.desktop} {
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;
  width:50%;
  height:30vh;
  padding-top:2rem;
  padding-right:5rem;
}
`

const LineDrawing = ({}) => {

  const {theme, setTheme} = useTheme();
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const ySpace = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const pathLength = useSpring(ySpace, { stiffness: 400, damping: 90 });
  const r = useRouter();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => ySpace.onChange(x => setIsComplete(x >= 1)), [ySpace]);

  return <Wrapper>
    <Cont>
      <svg width="80%" height="402" viewBox="0 0 574 402" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
          initial={{ pathLength: 0 }} 
          animate={{ pathLength: 1 }} 
          d="M573.8 387.2H482.2C482.2 387.2 400.5 379 398.2 373.1C395.9 367.2 431.7 362.5 456.9 370.8C482.2 379 515.6 385.5 499.2 395.5C482.8 405.5 82.0999 404 60.9999 381C39.8999 358 95.0999 372 103.9 373.2C112.7 374.4 376.5 385.5 385.3 376.1C394.1 366.7 417.6 251 410 249.2C402.4 247.4 202 234.5 199.1 239.8C196.5 244.5 180.7 331 177.4 354.5C177 357.6 176.7 359.7 176.8 360.2C177.4 364.9 153.9 367.8 146.8 367.2C139.7 366.6 132.7 357.2 139.8 356.6C146.9 356 165.1 356.6 168 353.1C170.9 349.6 60.4999 368.4 58.6999 357.8C56.8999 347.2 62.1999 321.9 71.5999 319.9C80.9999 317.9 107.4 326.7 115.1 326.7C122.8 326.7 117.4 343.7 120.4 346.1C123.4 348.5 126.3 329.7 137.4 329.1C148.5 328.5 167.9 327.9 172.1 329.1C176.2 330.3 178 339.7 172.7 340.8C167.4 341.9 153.9 257.4 158.6 252.1C163.3 246.8 163.3 207.5 158.6 211.6C153.9 215.7 145.1 271.5 150.4 286.8C155.7 302.1 136.9 312.1 134 298.5C131.1 285 112.9 233.3 111.7 219.8C110.5 206.3 117.6 184 114 175.7C110.4 167.4 95.1999 155.1 91.6999 165.7C88.1999 176.3 85.1999 225 78.7999 228C72.2999 230.9 71.7999 215.7 71.1999 205.1C70.5999 194.5 67.6999 169.9 74.0999 161.7C80.4999 153.5 99.8999 134.1 101.7 121.7C103.5 109.4 129.9 14.8 144.6 7.1C159.3 -0.599999 184.5 -2.9 188.7 7.1C192.8 17.1 182.2 40.6 195.2 48.2C208.2 55.8 243.2 58.2 239.8 122.8C236.4 187.4 218.1 190.8 219.3 200.8C220.5 210.9 232.8 214.4 236.3 223.8C239.8 233.2 246.3 212.3 243.9 201.9C241.6 191.5 245.7 177.4 255.6 156.9C265.5 136.4 257.4 77 256.2 68.8C255 60.6 228.5 14.2 212 8.3C195.5 2.4 194.6 3.9 193 5C191.4 6.1 192.7 34.5 191 37.6C189.3 40.7 172.7 64.3 167.9 79.7C163.1 95.1 147.8 131.9 150.8 140.8C153.9 149.7 167.2 176.6 165.1 184.8C163.1 193 144.6 214.2 142.6 226.1C140.6 238 137.5 255.5 134.1 254.4C130.7 253.3 116.7 218.6 119.1 210.4C121.5 202.2 131 180.4 129.3 172.5C127.6 164.6 123.8 101.1 129.3 89.5C134.8 77.9 149.4 37.3 198.3 53.7C247.2 70.1 232.8 115.2 224.2 138.7C215.7 162.3 199.3 174.9 182.9 166.4C166.5 157.9 157.6 137 159.7 128.8C161.7 120.6 185 61.5 189.7 61.2C194.5 60.9 199.9 71.8 197.6 80.3C195.3 88.8 195.6 108.6 200.3 114.1C205.1 119.6 209.9 125.4 206.1 130.5C202.3 135.6 197.9 144.2 198.6 145.5C199.3 146.8 211.9 144.5 212.9 142.8C212.9 142.8 207 139.5 204 139C201.1 138.5 198 140.2 198 140.2C198 140.2 194.1 139.1 191.8 139.1C189.5 139.1 183.9 141 183.9 141C183.9 141 191.5 146.3 197.7 146.5C200.8 150.2 212.3 165.7 207.6 179C202.9 192.3 187.9 229.3 192.3 238.6C196.7 247.9 194.6 227.3 202.5 223.3C210.4 219.3 212.1 181.5 217.8 179.2C223.5 176.9 241 212.6 252.9 211.4C264.8 210.3 252.3 171.2 265.9 171.2C279.5 171.2 294.7 181.9 299.8 191C304.9 200 317.3 228.9 317.3 234C317.3 239.1 314.9 250.4 314.9 250.4C314.9 250.4 207.6 243 204.2 248.1C200.8 253.2 192.9 380.4 183.3 382.1C173.7 383.8 49.8999 372.2 41.9999 364.8C34.0999 357.4 18.7999 327.5 21.5999 315C24.3999 302.5 45.3999 268.6 46.4999 221.1C47.5999 173.6 73.2999 151.6 85.4999 156.6C97.6999 161.7 99.0999 219.9 102.5 232.4C105.9 244.9 114.9 311.6 103.6 312.7C92.2999 313.8 62.2999 299.1 53.7999 301.4C45.2999 303.7 24.7999 385 -0.100098 385" 
          stroke={content_themes[theme].color} 
          strokeWidth="2" 
          strokeMiterlimit="10"
          style={{
            pathLength,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}/>
        </svg>
    </Cont>
    <ButCont>
      <Title color={content_themes[theme].color}>View My Work:</Title>
      <But 
        onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        onClick={()=> {
          cursorChangeHandler("")
          r.push('/dev')
          }} color={content_themes[theme].color} background={themes[theme].body}>Development</But>
      <But onMouseOver={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")} 
        onClick={()=> {
          cursorChangeHandler("")
          r.push('/design')
          }} color={content_themes[theme].color} background={themes[theme].body}>Design</But>
    </ButCont>
    </Wrapper>
}

export default LineDrawing;