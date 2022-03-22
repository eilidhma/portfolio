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
  min-height: 100vh;
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
  flex-direction:column;
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
            <SubTitle color={content_themes[theme].color}>
                {subtitle}<br></br>
            </SubTitle>
            <SubTitle color={content_themes[theme].color}>
                {subtitle2}<br></br>
            </SubTitle>
            <SubTitle color={content_themes[theme].color}>
                {subtitle3}<br></br>
            </SubTitle>
            <SubTitle color={content_themes[theme].color}>
                <Button color={content_themes[theme].color} target={'_blank'} href='https://www.figma.com/proto/gMi4QMHoynbTkulFI3Ovh9/Contendr?page-id=411%3A1907&node-id=413%3A236&viewport=241%2C48%2C0.06&scaling=min-zoom&starting-point-node-id=413%3A236'>View prototype</Button>
            </SubTitle>
        </SubCont>
      </Cont>

  </Wrapper>
}

export default Design;