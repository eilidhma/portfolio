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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
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
  width:50vw;
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
  margin-top: 170px;
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
`

const Gif = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
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

const SaveThePlate = ({
  background='black',
  overlay='black',
  title='SaveThePlate',
  Back=()=>{},
  NextArrow=()=>{}
}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)

  return <Wrapper>
    <Cont background={themes[theme].body}>
        <Title color={content_themes[theme].color}>
          {title}
        </Title>
        <SubCont>
          <Left>
            <SubTitle color={content_themes[theme].color}>
            • Lead Developer and Designer for a fully functional mobile app <br></br>
            • Created digital solution to food waste while offering lower priced food to users<br></br>
            • Developed with React Native, PHP, MySQL, and Firebase<br></br><br></br>
            <Button target='_blank' href='https://github.com/eilidhma/save-the-plate' color={content_themes[theme].color} background={themes[theme].body}>Source Code</Button>
            </SubTitle>
            <img width={800} src='savetheplate.png'/>
          </Left>
          <Right>
            <Gif>
              <SubTitle color={content_themes[theme].color}>Demo:</SubTitle>
              <img width={200} src='savetheplate.gif' />
            </Gif>
          </Right>
        </SubCont>
      </Cont>

  </Wrapper>
}

export default SaveThePlate;