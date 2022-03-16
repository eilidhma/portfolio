import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height: 100vh;
`

const Cont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:80vw;
  height: 80vh;
  background-color:${props=>props.background};
  padding-bottom:100px;
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
  font-family: 'Italiana', serif;
  font-size:1.5rem;
  color:${props=>props.color};
  width: 35vw;
`

const Design = ({
  background='black',
  overlay='black',
  title='Design',
  src='savetheplate.png',
  subtitle='project description',
  subtitle2='point1',
  subtitle3='point2',
  width=700
}) => {

  const {theme, setTheme} = useTheme();

  return <Wrapper>
    <Title color={content_themes[theme].color}>
        {title}
    </Title>
    <Cont background={themes[theme].body}>
        <SubCont>
            <img width={width} src={src}/>
        </SubCont>
        <SubCont>
            <SubTitle>
                {subtitle}<br></br>
                {subtitle2}<br></br>
                {subtitle3}<br></br>
            </SubTitle>
        </SubCont>
      </Cont>

  </Wrapper>
}

export default Design;