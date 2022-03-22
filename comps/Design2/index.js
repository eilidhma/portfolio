import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { device } from '../../utils/breakpoints';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height: 100vh;
`

const Cont = styled.div`
@media ${device.mobile} { 
    display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
  }
  @media ${device.tablet} { 
    display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
}
@media ${device.laptop} { 
    display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:80vw;
  height: 80vh;
  background-color:${props=>props.background};
  padding-bottom:100px;
}
@media ${device.desktop} { 
    display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:80vw;
  height: 80vh;
  background-color:${props=>props.background};
  padding-bottom:100px;
}
`

const SubCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding-left:100px;
  padding-right:100px;
  width:40vw;
`

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
`

const SubTitle = styled.p`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size:1.2rem;
  color:${props=>props.color};
  width: 35vw;
`

const Button = styled.a`
  width:200px;
  background-color:${props=>props.background};
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  border:1px solid ${props=>props.color};
  color:${props=>props.color};
  padding:10px;
`

const Design2 = ({
  background='black',
  overlay='black',
  title='Design',
  src='savetheplate.png',
  src2='savetheplate.png',
  src3='savetheplate.png',
  width=200,
  width2=200,
  width3=200
}) => {

  const {theme, setTheme} = useTheme();

  return <Wrapper>
    <Title color={content_themes[theme].color}>
        {title}
    </Title>
    <Cont background={themes[theme].body}>
        <img width={width} src={src}/>
        <img width={width2} src={src2}/>
        <img width={width3} src={src3}/>
      </Cont>

  </Wrapper>
}

export default Design2;