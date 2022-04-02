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
  width:200px;
  background-color:${props=>props.background};
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  border:1px solid ${props=>props.color};
  color:${props=>props.color};
  padding:10px;
  text-align:center;
  margin-top: 20px;
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
  title='Forage',
  Back=()=>{},
  BackArrow=()=>{},
  NextArrow=()=>{},
  src='forage.png'
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
            • Developer for a web solution designed to offer users recipes based on inputted ingredients <br></br><br></br>
            • Responsibilities included project ideation and UI design, front-end development, and back-end development<br></br><br></br>
            • Created with Next JS, MongoDB, and Socket.IO
            </SubTitle>
          </Left>
          <Right>
          <Button
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} 
           target='_blank' href='https://forage-b791yiz8v-eilidhma.vercel.app/' color={content_themes[theme].color} background={themes[theme].body}>View Project</Button>
            <Img style={{marginTop:50}} src={src}/>
          </Right>
      </Cont>

  </Wrapper>
}

export default Forage;