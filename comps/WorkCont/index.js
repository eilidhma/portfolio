import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { MouseContext } from '../../utils/mousecontext';


const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
`

const RightSection = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding-left:1rem;
  align-items:flex-start;
  padding-bottom:5rem;
  width:45vw;
  height:80vh;
`

const LeftSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  padding-right:1rem;
  justify-content:flex-start;
  padding-top:5rem;
  width:45vw;
  height:80vh;
`

const Line = styled.div`
  background-color:${props=>props.color};
  height:70vh;
  width:1px;
  border-radius:0.5px;
`

const Title = styled.p`
  font-family: 'Italiana', serif;
  font-size:3rem;
  color:${props=>props.color};
  display:flex;
  flex-direction:row;
`

const Text = styled.p`
  font-family: 'Italiana', serif;
  font-size:1.5rem;
  color:${props=>props.color};
  display:flex;
  flex-direction:row;
`

const WorkCont = ({
  onClickSaveThePlate = () => {},
  onClickGarden = () => {},
  onClickContendr = () => {}
}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);


  return <Cont>
    <LeftSection>
      <Title color={content_themes[theme].color}>2.1 Development</Title>
      <Text className='work' onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")} 
      color={content_themes[theme].color} 
      onClick={onClickSaveThePlate} 
      style={{textAlign:'right'}}>
        SaveThePlate
        </Text>
      <Text className='work' onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")} 
      color={content_themes[theme].color} 
      onClick={onClickGarden} 
      style={{textAlign:'right'}}>
        Garden
      </Text>
      <Text className='work' onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")} 
      color={content_themes[theme].color} 
      onClick={onClickContendr} 
      style={{textAlign:'right'}}>
        Contendr Website
      </Text>
    </LeftSection>
    <Line color={content_themes[theme].color}></Line>
    <RightSection>
      <Title color={content_themes[theme].color}>2.2 Design</Title>
      <Text color={content_themes[theme].color} style={{textAlign:'left'}}>Coming soon</Text>
    </RightSection>
  </Cont>
}

export default WorkCont;