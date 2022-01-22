import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';

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

const WorkCont = ({}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Cont>
    <LeftSection>
      <Title>2.1 Development</Title>
      <Text style={{textAlign:'right'}}>alsfkj aslfkjasdkfj aslkdfj aslfdkj asdfklj asldfkj as</Text>
    </LeftSection>
    <Line color={content_themes[theme].color}></Line>
    <RightSection>
      <Title>2.2 Design</Title>
      <Text style={{textAlign:'left'}}>alsfkj aslfkjasdkfj aslkdfj aslfdkj asdfklj asldfkj as</Text>
    </RightSection>
  </Cont>
}

export default WorkCont;