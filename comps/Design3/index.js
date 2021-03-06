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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  height: 80vh;
  background-color:${props=>props.background};
  padding-bottom:100px;
  }
  @media ${device.desktop} { 
  display:flex;
  flex-direction:column;
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
  margin-bottom: 100px;
`

const SubTitle = styled.p`
@media ${device.mobile} { 
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size:1.2rem;
  color:${props=>props.color};
  width: 80vw;
}
  
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

const Img = styled.img`
@media ${device.mobile} { 
  width: 300px;
}
@media ${device.tablet} { 
  width: 500px;
}
@media ${device.laptop} { 
  width: 700px;
}
`

const Design = ({
  background='black',
  overlay='black',
  title='Design',
  src='savetheplate.png',
  subtitle='project description',
  subtitle2='point1',
  subtitle3='point2'
}) => {

  const {theme, setTheme} = useTheme();

  return <Wrapper>
    <Title color={content_themes[theme].color}>
        {title}
    </Title>
    <Cont background={themes[theme].body}>
        <SubCont>
            <Img src={src}/>
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
        </SubCont>
      </Cont>

  </Wrapper>
}

export default Design;