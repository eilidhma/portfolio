import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { MouseContext } from '../../utils/mousecontext';

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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
  z-index:300;
`

const SubCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  padding-left:100px;
  padding-right:100px;
  width:80vw;
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:70vw;
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
  padding:10px;
  text-align:center;
  color:${props=>props.color};
`


const BackButton = styled.button`
  font-family: 'Italiana', serif;
  position:absolute;
  top:20px;
  right:10vw;
  font-size:1.5rem;
  padding:5px 10px 5px 10px;
  color:${props=>props.color};
  background-color:${props=>props.background};
  border:none;
`

const Next = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:50%;
  right:10vw;
`

const Previous = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:50%;
  left:10vw;
`

const Contendr = ({
  title='Contendr Marketing Site',
  Back=()=>{},
  BackArrow=()=>{},
  NextArrow=()=>{},
  src='contendr.png'
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
            • Developer and designer for an interdisciplinary social media application <br></br><br></br>
            • Created with Next JS
            </SubTitle>
          </Left>
          <Right>
          <Button 
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} 
          target='_blank' href='https://contendr-three.vercel.app/' color={content_themes[theme].color} background={themes[theme].body}>View Project</Button>
            <img width={800} src={src}/>
          </Right>
      </Cont>

  </Wrapper>
}

export default Contendr;