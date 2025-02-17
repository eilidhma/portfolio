import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { MouseContext } from '../../utils/mousecontext';
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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:30vw;
  object-fit:cover;
`

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
`

const SubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  color:${props=>props.color};
`

const Button = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    border:1px solid ${props=>props.color};
    color:${props=>props.color};
    background-color:${props=>props.background};
    padding:10px;
    text-align: center;
  @media ${device.mobile} { 
    width: 130px;
    font-size:1rem;
    margin-right: 10px;
  }
  @media ${device.tablet} {
    width:200px;
    font-size:1.2rem;
    margin-right: 20px;
  }
  &:hover{
    border:1px solid ${props=>props.background};
    color:${props=>props.background};
    background-color:${props=>props.color};
  }
`

const Img = styled.img`
@media ${device.mobile} { 
  width: 300px;
}
@media ${device.laptop} { 
  width: 700px;
}
`

const Forage = ({
  title='Macanta',
  // title='Forage',
  Back=()=>{},
  BackArrow=()=>{},
  NextArrow=()=>{},
  src='macanta.png'
}) => {

  const {theme, setTheme} = useTheme();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [on, setOn] = useState(true)

  return <Wrapper>
    <Cont background={themes[theme].body}>
        <Title color={content_themes[theme].color}>
          {title}
        </Title>

          <Left>
            <SubTitle color={content_themes[theme].color}>
            • Developer for a website for a local construction company <br></br><br></br>
            • Responsibilities included UI design, front-end development, client communication <br></br><br></br>
            • Created with Next JS and Figma
            </SubTitle>
          </Left>
          <Right>
          <Button
          onMouseOver={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} 
           target='_blank' href='https://www.macantavancouver.ca/' color={content_themes[theme].color} background={themes[theme].body}>View Site</Button>
            <Img style={{marginTop:50}} src={src}/>
          </Right>
      </Cont>

  </Wrapper>
}

export default Forage;